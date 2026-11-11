# Translation guide and glossary

How the training site (home page, LLM Basics, Agentic Bridge) is translated, and the rules every translation follows. Language-specific notes are at the bottom.

## How it works

One language is active for the whole site. The shared module [docs/shared/i18n.js](../docs/shared/i18n.js) picks it (`?lang=xx`, then the last choice stored in the browser, then the browser language, then English), shows the single language dropdown on every page, and adds `?lang=xx` to links between pages so the choice carries over. The list of languages is at the top of that file.

Every page or slide is a folder with a language-neutral template and one strings file per language:

```text
docs/agentic-bridge/slides/s2/03-context-window/page.js      # template: structure, classes, images, code. Text is {{key}}.
docs/agentic-bridge/slides/s2/03-context-window/lang.en.js   # English texts (source of truth)
docs/agentic-bridge/slides/s2/03-context-window/lang.de.js   # German texts
docs/agentic-bridge/slides/s2/03-context-window/lang.it.js   # Italian texts
docs/llm-basics/tokenization/{page.js, script.js, lang.*.js} # LLM Basics page: template, behavior, texts
docs/home/{page.js, lang.*.js}                               # landing page
```

A strings file is plain JavaScript:

```js
I18N.strings({
  title: "The context window",
  li1: "Everything the model sees is <strong>context</strong>.",
});
```

- The template is shared. Change layout, images, classes or code samples there, once, and all languages follow.
- Change wording in the `lang.en.js` file, then update the same key in the other languages (see "Keeping translations in sync").
- A key that is missing in a language falls back to English, so partial translations never break a page.
- Keys that start with `js.` are used by the page's `script.js` (`I18N.text("js.key", { name: value })`). `{name}` in such a text is a variable: keep it unchanged (you may move it).
- `docTitle` is the browser tab title.
- The navigation bar of LLM Basics and the deck's own buttons are in `docs/llm-basics/assets/ui-strings.js` and `docs/agentic-bridge/assets/ui-strings.js` (`I18N.ui("<code>", {...})`).
- Demo data stays English: in LLM Basics the example prompt and its tokens (customer, support, logger, trace, …) are the model input. Translate the text around them.

## Rules for translators

1. Keep the same keys, in the same order. Translate only the value.
2. Keep the HTML in a value as it is: tags, attributes and entities (`<strong>`, `<code>`, `<a href="…">`, `&amp;`, `&lt;`). The text between tags is translated. The checker flags changed tags, entities, `<code>` content and `{variables}`.
3. Do not translate `<code>` content, commands, file and folder names, identifiers, JSON, key names or URLs. Link targets such as `exercise-data/s4/BoxLiftExercise_en.md` stay as they are unless a translated file exists.
4. Do not translate product, tool and feature names: Automation Studio, Automation Runtime, mapp View, mapp Motion, ACOPOStrak, ACOPOS 6D, SuperTrak, B&R, `as-cli`, GitHub Copilot, Claude Code, Codex, Cursor, MCP, AGENTS.md, SKILL.md and so on.
5. Keep the `→`, `·`, `…` and `←` characters. Keep `# ` at the start of shell comments.
6. Keep the length close to the English text. Pages and slides have a fixed layout, and German is usually 20–30% longer. Prefer short, direct wording.
7. Values are JavaScript strings. Use `\"` for a double quote inside a value, or use typographic quotes (`„…“`).

## Keeping translations in sync

```powershell
node tools/check-i18n.mjs                  # report: errors, missing and stale translations
node tools/check-i18n.mjs --lang de        # one language
node tools/check-i18n.mjs --strict         # warnings fail too (CI)
node tools/check-i18n.mjs sync de agentic-bridge/slides/s2   # record that the de texts of s2 match the current English
node tools/check-i18n.mjs sync de llm-basics                 # same for all LLM Basics pages
```

[lock.json](lock.json) stores a hash of the English text each translation was made from. When the English text changes, the checker lists the key as *stale* until someone updates the translation and runs `sync`.

## Adding a language

1. Add `{ code, label }` to `LANGUAGES` in `docs/shared/i18n.js`.
2. Add an `I18N.ui("<code>", {...})` block to `docs/agentic-bridge/assets/ui-strings.js` and `docs/llm-basics/assets/ui-strings.js`, and `<code>` entries in the session titles in `docs/agentic-bridge/index.html`.
3. Add a glossary section below.
4. Add `lang.<code>.js` next to every `lang.en.js` (slides, LLM Basics pages, `docs/home`).
5. Run the checker, then `sync`.

## Glossary (English → German)

The Italian and Czech glossaries are in their sections below. Terms marked *(keep)* stay in English.

| English | German |
| --- | --- |
| agent | Agent |
| agentic engineering | Agentic Engineering *(keep)* |
| harness | Harness *(keep)* |
| model, LLM | Modell, LLM |
| prompt | Prompt *(keep)* |
| context, context window | Kontext, Kontextfenster |
| token | Token *(keep)* |
| tool | Tool *(keep)* |
| skill | Skill *(keep)* |
| subagent | Subagent *(keep)* |
| custom agent | Custom Agent *(keep)* |
| plugin, marketplace | Plugin, Marketplace *(keep)* |
| instructions | Anweisungen |
| command (slash command) | Befehl |
| plan mode | Plan-Modus |
| session (chat session) | Sitzung |
| session (of the training) | Session *(keep)* |
| memory | Memory *(keep)* |
| workflow | Workflow *(keep)* |
| demo | Demo |
| hands-on / exercise | Übung |
| wrap-up | Zusammenfassung |
| deterministic / probabilistic | deterministisch / probabilistisch |
| build, deploy, simulate | Build, Deployment, Simulation (verbs: bauen/kompilieren, übertragen, simulieren) |
| project | Projekt |
| configuration | Konfiguration |
| task (PLC task) | Task *(keep)* |
| function block | Funktionsbaustein |
| variable | Variable |
| hardware, I/O mapping | Hardware, I/O-Mapping |

## German

- Address the reader formally (**Sie**), or use impersonal phrasing. Do not use "du".
- Slide titles: sentence case, no trailing period. Bullet points: a full stop only if the English has one.
- Use the English term when the German one is rarely used in practice (see the glossary). Do not mix both forms for the same term inside one session.
- Use "Folie" for slide.

## Italian

- Address the reader formally (**Lei**), or use impersonal phrasing / the infinitive. Do not use "tu".
- Slide titles: sentence case, no trailing period. Bullet points: a full stop only if the English has one.
- Use the English term when it is the common one in Italian technical writing (see the table). Do not mix both forms for the same term inside one session.
- Use "slide" for slide (it is the usual Italian word). The training "session" is "sessione".
- Italian text is usually 15–25% longer than English. Keep the SVG labels and the captions in diagrams short.

| English | Italian |
| --- | --- |
| agent | agente |
| agentic engineering | Agentic Engineering *(keep)* |
| harness | harness *(keep)* |
| model, LLM | modello, LLM |
| prompt | prompt *(keep)* |
| context, context window | contesto, finestra di contesto |
| token | token *(keep)* |
| tool | nástroj |
| skill | skill *(keep)* |
| subagent | subagent *(keep)* |
| custom agent | custom agent *(keep)* |
| plugin, marketplace | plugin, marketplace *(keep)* |
| instructions | istruzioni |
| command (slash command) | comando |
| plan mode | modalità Plan |
| session (chat session) | sessione |
| session (of the training) | sessione |
| memory | memoria |
| workflow | workflow *(keep)* |
| demo | demo |
| hands-on / exercise | esercizio |
| wrap-up | riepilogo |
| deterministic / probabilistic | deterministico / probabilistico |
| build, deploy, simulate | build, deploy (trasferimento), simulazione |
| project | progetto |
| configuration | configurazione |
| task (PLC task) | task *(keep)* |
| function block | blocco funzione |
| variable | variabile |
| PLC | PLC |
| hardware, I/O mapping | hardware, mappatura I/O |

## Czech

- Address the reader formally with a capitalized **Vy** (also *Vás*, *Vám*, *Váš*), or use impersonal phrasing. Do not use "ty".
- Slide titles: sentence case, no trailing period. Bullet points: a full stop only if the English has one.
- Use "snímek" for slide.
- Use the English term when the Czech one is rarely used in practice (see the table). Do not mix both forms for the same term inside one session.
- Kept English words may take Czech case endings (*promptu*, *tokenů*, *skillu*). Acronyms and product names stay unchanged; rephrase rather than inflect them.
- Czech text is usually 10–20% longer than English. Keep the SVG labels and the captions in diagrams short.
- Quotation marks: „…“.

| English | Czech |
| --- | --- |
| agent | agent |
| agentic engineering | Agentic Engineering *(keep)* |
| harness | harness *(keep)* |
| model, LLM | model, LLM |
| prompt | prompt *(keep)* |
| context, context window | kontext, kontextové okno |
| token | token *(keep)* |
| tool | tool *(keep)* |
| skill | skill *(keep)* |
| subagent | subagent *(keep)* |
| custom agent | custom agent *(keep)* |
| plugin, marketplace | plugin, marketplace *(keep)* |
| instructions | instrukce |
| command (slash command) | příkaz |
| plan mode | režim Plan |
| session (chat session) | relace |
| session (of the training) | Session *(keep)* |
| memory | paměť |
| workflow | workflow *(keep)* |
| demo | demo |
| hands-on / exercise | cvičení |
| wrap-up | shrnutí |
| slide | snímek |
| deterministic / probabilistic | deterministický / pravděpodobnostní |
| build, deploy, simulate | build, deploy (nasazení), simulace (slovesa: sestavit, nasadit, simulovat) |
| project | projekt |
| configuration | konfigurace |
| task (PLC task) | Task *(keep)* |
| function block | funkční blok |
| variable | proměnná |
| PLC | PLC |
| hardware, I/O mapping | hardware, mapování I/O |
