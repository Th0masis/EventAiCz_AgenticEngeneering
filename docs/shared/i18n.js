/*
 * Shared language support for all training pages (home, LLM Basics, Agentic Bridge).
 *
 * One language is active for the whole site. It is chosen in this order:
 *   1. ?lang=xx in the URL
 *   2. the last choice, stored in the browser (localStorage, shared by all pages)
 *   3. the browser language
 *   4. English
 * Links to other pages of the site get ?lang=xx added, so the choice also survives
 * where localStorage is not shared between pages (for example some browsers on file://).
 *
 * Text lives in "lang.<code>.js" files next to the page or slide template and is
 * registered with I18N.strings({ key: "text" }). English is the source language and
 * the fallback for any key a translation does not have yet.
 *
 * Everything is loaded with <script> tags (not fetch), so the pages also work when
 * opened directly from disk.
 */
(function () {
  "use strict";

  const DEFAULT_LANG = "en";
  // Add a language here (and a lang.<code>.js file per page) to offer it everywhere.
  const LANGUAGES = [
    { code: "en", label: "English" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
    { code: "cs", label: "Čeština" },
  ];
  const STORAGE_KEY = "trainingLanguage";
  const codes = LANGUAGES.map((language) => language.code);

  const stringTables = new Map(); // `${id}|${lang}` -> { key: text }
  const pageTemplates = new Map(); // id -> template HTML
  const uiTables = {}; // lang -> { key: text }
  const state = { lang: DEFAULT_LANG, active: null, fallbackKeys: 0 };

  const readStorage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // storage may be unavailable, e.g. on file:// in some browsers
    }
  };
  const writeStorage = (code) => {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* ignore */
    }
  };

  const detectLanguage = () => {
    const fromQuery = new URLSearchParams(location.search).get("lang");
    if (codes.includes(fromQuery)) {
      writeStorage(fromQuery);
      return fromQuery;
    }
    const saved = readStorage();
    if (codes.includes(saved)) return saved;
    const browser = (navigator.languages || [navigator.language || ""]).map((l) => l.slice(0, 2).toLowerCase());
    return browser.find((code) => codes.includes(code)) || DEFAULT_LANG;
  };

  state.lang = detectLanguage();
  document.documentElement.lang = state.lang;

  const format = (text, vars = {}) => text.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? vars[name] : `{${name}}`));

  const I18N = {
    DEFAULT_LANG,
    languages: LANGUAGES,
    get lang() {
      return state.lang;
    },
    get fallbackKeys() {
      return state.fallbackKeys;
    },

    /* Registers the texts of the current <script> (called from lang.<code>.js files). */
    strings(table) {
      const script = document.currentScript;
      const id = script && script.dataset.i18nId;
      const lang = script && script.dataset.lang;
      if (!id || !lang) {
        console.error("I18N.strings() called outside of a strings script.");
        return;
      }
      stringTables.set(`${id}|${lang}`, table);
    },

    /* Texts of a section's own chrome (navigation, buttons). Falls back to English. */
    ui(lang, table) {
      uiTables[lang] = Object.assign(uiTables[lang] || {}, table);
    },
    t(key, vars) {
      const text = (uiTables[state.lang] && uiTables[state.lang][key]) ?? (uiTables[DEFAULT_LANG] && uiTables[DEFAULT_LANG][key]) ?? key;
      return format(text, vars);
    },
    /* A value that is a plain string or { en, de, ... }. */
    loc(value) {
      return value && typeof value === "object" ? value[state.lang] ?? value[DEFAULT_LANG] ?? "" : value;
    },

    loadScript(src, dataset = {}) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        Object.entries(dataset).forEach(([key, value]) => {
          script.dataset[key] = value;
        });
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    },

    /* Loads base/lang.en.js and, when needed, base/lang.<current>.js for text id. */
    loadStrings(id, base) {
      const langs = state.lang === DEFAULT_LANG ? [DEFAULT_LANG] : [DEFAULT_LANG, state.lang];
      return Promise.all(
        langs.map((lang) =>
          this.loadScript(`${base}/lang.${lang}.js`, { i18nId: id, lang }).then((ok) => {
            // A missing translation is fine (English is used); missing English is not.
            if (!ok && lang === DEFAULT_LANG) console.warn(`Missing English strings: ${base}/lang.${lang}.js`);
          })
        )
      );
    },

    /* Loads base/page.js (the template) and its texts, and returns the finished HTML. */
    async loadPage(id, base) {
      const [ok] = await Promise.all([this.loadScript(`${base}/page.js`, { pageId: id }), this.loadStrings(id, base)]);
      const html = pageTemplates.get(id);
      if (!ok || html === undefined) throw new Error(`Could not load ${base}/page.js`);
      return this.interpolate(id, html);
    },
    /* Registers the template of the current <script> (called from page.js files). */
    page(html) {
      const script = document.currentScript;
      const id = script && script.dataset.pageId;
      if (!id) {
        console.error("I18N.page() called outside of a page script.");
        return;
      }
      pageTemplates.set(id, html);
    },

    /* Replaces {{key}} in a template with the text for the current language. */
    interpolate(id, html) {
      const current = stringTables.get(`${id}|${state.lang}`) || {};
      const source = stringTables.get(`${id}|${DEFAULT_LANG}`) || {};
      return html.replace(/\{\{([\w.]+)\}\}/g, (match, key) => {
        if (key in current) return current[key];
        if (key in source) {
          if (state.lang !== DEFAULT_LANG) state.fallbackKeys += 1;
          return source[key];
        }
        console.warn(`Missing string "${key}" in ${id}`);
        return match;
      });
    },

    /* Text for scripts (not templates): I18N.use("llm-basics/tokenization") first, then I18N.text("key", { n: 3 }). */
    use(id) {
      state.active = id;
    },
    text(key, vars) {
      const current = stringTables.get(`${state.active}|${state.lang}`) || {};
      const source = stringTables.get(`${state.active}|${DEFAULT_LANG}`) || {};
      let value = current[key];
      if (value === undefined) {
        value = source[key];
        if (value !== undefined && state.lang !== DEFAULT_LANG) state.fallbackKeys += 1;
      }
      if (value === undefined) {
        console.warn(`Missing string "${key}" in ${state.active}`);
        return key;
      }
      return format(value, vars);
    },

    /* Static text in HTML: data-i18n="key" (text) and data-i18n-<attr>="key" (attributes). */
    translateStatic(root = document) {
      root.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = this.t(node.dataset.i18n);
      });
      ["aria-label", "title"].forEach((attr) => {
        root.querySelectorAll(`[data-i18n-${attr}]`).forEach((node) => {
          node.setAttribute(attr, this.t(node.getAttribute(`data-i18n-${attr}`)));
        });
      });
    },

    /* The one language dropdown. Every page mounts it; the choice applies to the whole site. */
    createSelect() {
      const select = document.createElement("select");
      select.className = "lang-select";
      select.name = "language";
      select.setAttribute("aria-label", this.t("language"));
      select.title = `${this.t("language")} (L)`;
      LANGUAGES.forEach((language) => {
        const option = document.createElement("option");
        option.value = language.code;
        option.lang = language.code;
        option.textContent = language.label;
        option.selected = language.code === state.lang;
        select.appendChild(option);
      });
      select.addEventListener("change", () => this.setLanguage(select.value));
      return select;
    },

    setLanguage(code) {
      if (!codes.includes(code) || code === state.lang) return;
      writeStorage(code);
      // Reloading keeps the hash, so the viewer stays on the same slide or page.
      const url = new URL(location.href);
      url.searchParams.set("lang", code);
      location.href = url.href;
    },
    cycleLanguage() {
      this.setLanguage(codes[(codes.indexOf(state.lang) + 1) % codes.length]);
    },

    /* Adds ?lang=xx to a link to another page of this site (nothing to add for English). */
    url(href) {
      if (state.lang === DEFAULT_LANG || !href || href.startsWith("#")) return href;
      let target;
      try {
        target = new URL(href, location.href);
      } catch (e) {
        return href;
      }
      const sameSite = target.protocol === location.protocol && target.host === location.host;
      if (!sameSite || !/(\.html?|\/)$/.test(target.pathname)) return href;
      const hashAt = href.indexOf("#");
      const hash = hashAt >= 0 ? href.slice(hashAt) : "";
      const rest = hashAt >= 0 ? href.slice(0, hashAt) : href;
      const queryAt = rest.indexOf("?");
      const path = queryAt >= 0 ? rest.slice(0, queryAt) : rest;
      const params = new URLSearchParams(queryAt >= 0 ? rest.slice(queryAt + 1) : "");
      params.set("lang", state.lang);
      return `${path}?${params}${hash}`;
    },
    decorateLinks(root = document) {
      root.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (href) link.setAttribute("href", this.url(href));
      });
    },
  };

  window.I18N = I18N;
})();
