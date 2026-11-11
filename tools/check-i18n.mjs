#!/usr/bin/env node
/*
 * Consistency checker for the translations of all training pages (home, LLM Basics,
 * Agentic Bridge slides). No dependencies. A "page" is any folder under docs/ that
 * contains page.js, with its lang.<code>.js files next to it.
 *
 *   node tools/check-i18n.mjs                 report for all languages
 *   node tools/check-i18n.mjs --lang de       only one language
 *   node tools/check-i18n.mjs --strict        missing / stale translations also fail (for CI)
 *   node tools/check-i18n.mjs sync de [id-prefix]
 *                                             record that the German texts match the current
 *                                             English texts (do this after translating/reviewing).
 *                                             The id is the folder path below docs/, for example
 *                                             "agentic-bridge/slides/s2" or "llm-basics/tokenization".
 *
 * Errors (always exit 1): keys used in a template but missing in English, unused English keys,
 * translated keys that do not exist in English, HTML tags / entities / <code> content / {vars}
 * that differ between English and the translation.
 * Keys that start with "js." are used by the page script (I18N.text) and need no placeholder;
 * "docTitle" is the browser tab title and is set by the page loader.
 * Warnings: missing translations (the page falls back to English) and stale translations
 * (English text changed after the translation was last synced).
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(repo, "docs");
const lockFile = path.join(repo, "i18n", "lock.json");
const SOURCE = "en";

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const langFlag = args.includes("--lang") ? args[args.indexOf("--lang") + 1] : null;
const syncMode = args[0] === "sync";

const hash = (s) => crypto.createHash("sha1").update(s).digest("hex").slice(0, 8);
const read = (file) => fs.readFileSync(file, "utf8");

const loadStrings = (file) => {
  let table = null;
  vm.runInNewContext(read(file), { I18N: { strings: (t) => (table = t) } }, { filename: file });
  return table || {};
};

const slides = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === "archive" || entry.name === "node_modules") continue;
    const sub = path.join(dir, entry.name);
    if (fs.existsSync(path.join(sub, "page.js"))) slides.push({ id: path.relative(docsDir, sub).split(path.sep).join("/"), dir: sub });
    walk(sub);
  }
};
walk(docsDir);
slides.sort((a, b) => a.id.localeCompare(b.id));

const languages = new Set();
slides.forEach((s) => fs.readdirSync(s.dir).forEach((f) => {
  const m = f.match(/^lang\.([a-z]{2})\.js$/);
  if (m) languages.add(m[1]);
}));
languages.delete(SOURCE);
const targets = langFlag ? [langFlag] : [...languages].sort();

const lock = fs.existsSync(lockFile) ? JSON.parse(read(lockFile)) : {};

const signature = (value) => ({
  tags: (value.match(/<\/?[a-zA-Z][^>]*>/g) || []).map((x) => x.replace(/\s+/g, " ")).sort().join("|"),
  entities: (value.match(/&[#\w]+;/g) || []).sort().join("|"),
  code: (value.match(/<code>[\s\S]*?<\/code>/g) || []).sort().join("|"),
  vars: (value.match(/\{\w+\}/g) || []).sort().join("|"),
});

if (syncMode) {
  const lang = args[1];
  const prefix = args[2] || "";
  if (!lang || lang === SOURCE) {
    console.error("Usage: sync <lang> [slide-id-prefix]");
    process.exit(2);
  }
  let count = 0;
  for (const slide of slides.filter((s) => s.id.startsWith(prefix))) {
    const enFile = path.join(slide.dir, `lang.${SOURCE}.js`);
    const trFile = path.join(slide.dir, `lang.${lang}.js`);
    if (!fs.existsSync(enFile) || !fs.existsSync(trFile)) continue;
    const en = loadStrings(enFile);
    const tr = loadStrings(trFile);
    lock[slide.id] = lock[slide.id] || {};
    lock[slide.id][lang] = {};
    for (const key of Object.keys(tr)) if (key in en) lock[slide.id][lang][key] = hash(en[key]);
    count += 1;
  }
  fs.mkdirSync(path.dirname(lockFile), { recursive: true });
  fs.writeFileSync(lockFile, JSON.stringify(lock, null, 1) + "\n");
  console.log(`Synced ${count} ${lang} slide file(s) -> ${path.relative(process.cwd(), lockFile)}`);
  process.exit(0);
}

const errors = [];
const warnings = [];
const stats = {};

for (const slide of slides) {
  const template = read(path.join(slide.dir, "page.js"));
  const used = new Set([...template.matchAll(/\{\{([\w.]+)\}\}/g)].map((m) => m[1]));
  const enFile = path.join(slide.dir, `lang.${SOURCE}.js`);
  if (!fs.existsSync(enFile)) {
    if (used.size) errors.push(`${slide.id}: template uses keys but lang.${SOURCE}.js does not exist`);
    continue;
  }
  const en = loadStrings(enFile);
  for (const key of used) if (!(key in en)) errors.push(`${slide.id}: key "${key}" used in template but missing in English`);
  for (const key of Object.keys(en)) if (!used.has(key) && !key.startsWith("js.") && key !== "docTitle") errors.push(`${slide.id}: English key "${key}" is not used in the template`);

  for (const lang of targets) {
    stats[lang] = stats[lang] || { total: 0, done: 0, missing: 0, stale: 0 };
    const file = path.join(slide.dir, `lang.${lang}.js`);
    const exists = fs.existsSync(file);
    const tr = exists ? loadStrings(file) : {};
    const locked = (lock[slide.id] && lock[slide.id][lang]) || {};
    const missing = [];
    const stale = [];
    for (const key of Object.keys(en)) {
      stats[lang].total += 1;
      if (!(key in tr)) {
        missing.push(key);
        continue;
      }
      stats[lang].done += 1;
      const sig = signature(en[key]);
      const trSig = signature(tr[key]);
      for (const part of ["tags", "entities", "code", "vars"]) {
        if (sig[part] !== trSig[part]) errors.push(`${slide.id} [${lang}] "${key}": ${part} differ from English`);
      }
      if (locked[key] !== hash(en[key])) stale.push(key);
    }
    for (const key of Object.keys(tr)) if (!(key in en)) errors.push(`${slide.id} [${lang}]: key "${key}" does not exist in English`);
    stats[lang].missing += missing.length;
    stats[lang].stale += stale.length;
    if (missing.length) warnings.push(`${slide.id} [${lang}]: ${exists ? `${missing.length} missing` : "no translation file"} (${missing.slice(0, 5).join(", ")}${missing.length > 5 ? ", …" : ""})`);
    if (stale.length) warnings.push(`${slide.id} [${lang}]: ${stale.length} stale or unreviewed (${stale.slice(0, 5).join(", ")}${stale.length > 5 ? ", …" : ""})`);
  }
}

errors.forEach((e) => console.log(`ERROR   ${e}`));
warnings.forEach((w) => console.log(`WARN    ${w}`));
for (const [lang, s] of Object.entries(stats)) {
  console.log(`${lang}: ${s.done}/${s.total} texts translated (${s.total ? Math.round((100 * s.done) / s.total) : 0}%), ${s.missing} missing, ${s.stale} stale/unreviewed`);
}
console.log(`${slides.length} slides, ${errors.length} error(s), ${warnings.length} warning(s)`);
process.exit(errors.length || (strict && warnings.length) ? 1 : 0);
