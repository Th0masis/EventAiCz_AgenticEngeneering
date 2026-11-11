# Agentic Bridge Training: Slide Authoring

The deck is split into one small file per slide, so you can edit slides independently.
It works when opened directly from disk (double-click `index.html`) and on GitHub Pages.
The deck is multilingual (English, German, Italian): each slide is a language-neutral template plus one text file per language, see [Languages](#languages).

## Layout

```text
agentic-bridge/
├── index.html            # Host page: session list and slide order
├── assets/
│   ├── deck.css          # Styles and reusable components
│   ├── deck.js           # Engine: loading, navigation, slide navigator
│   ├── ui-strings.js     # Texts of the deck UI (navigator, buttons) per language
│   ├── br-logo.svg       # B&R logo, shown at the top right of every slide
│   ├── agentic-bridge-icon.svg      # Line-art star, for small inline use
│   ├── agentic-bridge-icon-256.png  # Rendered icon (cards, large use)
│   └── agentic-bridge-icon-64.png   # Rendered icon (favicon)
├── images/               # Images used by slides
└── slides/
    ├── s<N>/NN-name/         # One folder per slide, numbered in presentation order
    │   ├── page.js           # Slide template (structure, layout, images, code)
    │   ├── lang.en.js        # English texts (source language)
    │   ├── lang.de.js        # German texts
    │   └── lang.it.js        # Italian texts
    └── archive/              # Retained slide files not included in the deck
```

Language selection, the language list and the dropdown are shared with the other trainings: see `../shared/i18n.js` and [`../../i18n/TRANSLATING.md`](../../i18n/TRANSLATING.md).

## Edit a slide

Open `slides/<session>/<NN-name>/page.js` for structure and layout. Each file contains exactly one slide template, and the text is a `{{key}}` placeholder:

```js
Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane">…</div>
    <div class="image-pane">…</div>
  </div>
</section>
`);
```

The text lives in `lang.en.js` (English) and `lang.<lang>.js` in the same folder:

```js
I18N.strings({
  aria: "Short description",
  eyebrow: "Section",
  title: "Slide title",
});
```

Values may contain inline HTML (`<strong>`, `<code>`, links). Do not put prose in the template. Code samples, commands and file names stay in the template (inside `<pre>` / `<code>`). Short annotations inside code listings, such as `← note` or `# comment`, are strings too.
`data-title`, `alt`, `aria-label` and `title` attributes use placeholders as well (`alt="{{alt1}}"`).

The template HTML sits inside a JavaScript template literal, so escape these characters:

- A backtick: write `` \` ``
- `${`: write `\${`
- A backslash (e.g. Windows paths): write `\\`

Strings files are normal JavaScript strings: escape `"` as `\"`.

Image paths are relative to `index.html`, e.g. `images/AgentDesign.png`. Use `assets/agentic-bridge-icon.svg` for small inline icons (e.g. `<img class="ab-icon" …>`) and the PNGs for larger renderings.

Session title and divider slides display the Agentic Bridge icon above the heading. The B&R wordmark is added to the top-right corner of every slide by the shared stylesheet.

The deck uses ABBvoice WOFF2 weights loaded from ABB's public font CDN. Regular slide text and
inline SVG labels use ABBvoice; code samples keep their monospace font. Keep inline SVG
`font-family` declarations set to `ABBvoice` so their labels match the rest of the deck.

Give each inline SVG a unique `id` prefix for gradients and markers. All slides share one document, so duplicate ids can resolve to another slide's definitions.

## Add, remove or reorder slides

1. Create, delete or rename the slide folder under `slides/<session>/` (it holds `page.js` and the `lang.*.js` files).
2. Update the matching entry in the `Deck.start([...])` manifest in `index.html`.
   The manifest is the source of truth for slide order and session grouping. Keep the
   two-digit prefix of the folder names in each `slides/s<N>/` directory in the same order.
3. Run `node tools/check-i18n.mjs`. It reports placeholders without text, unused texts, and missing translations.

Files in `slides/archive/` are retained source slides and are not loaded into the presentation.

If a listed file is missing or invalid, the deck shows a red error slide naming the file.

## Languages

The language is shared by the whole site (home page, LLM Basics, Agentic Bridge). It comes from `?lang=de` in the URL, then the last choice (stored in the browser), then the browser language, then English. Switch with the language dropdown next to the progress bar or the `L` key (cycles through the languages). The slide stays the same when the language changes, and the other pages open in the same language.

- **Change layout, images, code:** edit the template once. All languages follow.
- **Change wording:** edit `lang.en.js`, then update the same key in `lang.de.js` and `lang.it.js` and run `node tools/check-i18n.mjs sync <lang> agentic-bridge/slides/<session>` (for example `sync de agentic-bridge/slides/s2`) to record it. Until then the checker lists the key as *stale*.
- **Missing translation:** a missing key or file falls back to English, so a partial translation never breaks the deck.
- **Add a language:** see "Adding a language" in [`i18n/TRANSLATING.md`](../../i18n/TRANSLATING.md). For this deck that means a `lang.<code>.js` file in every slide folder, an `I18N.ui("<code>", {...})` block in `assets/ui-strings.js` and `<code>` entries in the session titles in `index.html`.
- **Text inside diagrams:** diagrams that contain text are inline SVG in the slide template, with each text as a `{{key}}`, so they translate like any other text. Wrapped captions use one key per line, so the translation controls the line breaks. Illustrations without text stay normal images (see `images/progressive-disclosure-level*.png`).
- **Check:** `node tools/check-i18n.mjs` (errors fail, missing and stale are warnings; `--strict` fails on those too).

Translation rules and the glossary are in [`i18n/TRANSLATING.md`](../../i18n/TRANSLATING.md).
Images and the exercise document `exercise-data/s4/BoxLiftExercise_en.md` are not translated yet.

## Training flow and exercise preparation

Put a dedicated divider immediately before every demo: use `Demo` as the title and
describe the live demonstration in one short line. Keep the divider directly before
its demo in `index.html`. Session 2 introduces the context window before harness
environments, and Session 4 explains project structure before instructions.

Use **Plan → Implement → Verify → Test** consistently: verification checks the build
and configuration; testing checks runtime behavior. Human review follows the loop.

BoxLift project instructions come from the
[`template/AGENTS.md` file in the Automation Studio project repository](https://github.com/br-automation-com/agentic-engineering-in-automation-studio/blob/main/template/AGENTS.md),
not an exercise-local copy.

## Slide types and components

| Purpose | Markup |
| --- | --- |
| Session title | `<section class="slide front-slide" data-title="{{dataTitle}}">` with `.front-hero` |
| Divider | `<section class="slide front-slide">` with `h1.glow-title` |
| Wrap-up | `<section class="slide questions-slide">` with `.questions-layout` / `.questions-card` |
| Content | `.slide-header` + `.slide-body` (optionally `.slide-body--ratio` with `--slide-ratio`) |
| Components | `.card` (`--accent`, `--std`, `--vendor`, `--br`, `--dark`), `.grid-2/3/4`, `.stack`, `.data-table`, `pre.code`, `pre.tree`, `.flow`/`.flow-step`, `.alert`, `.quote`, `.tag` (`--std`, `--vendor`, `--br`), `.demo-pane` |

`data-title` overrides the label shown in the slide navigator (by default the first `h2`/`h1`).

Keep to the style of the original deck: `.text-pane` with orange `.label` headings and bullet
lists (`.placeholder-copy`), tables, code blocks and diagrams. Avoid boxed card layouts.

## Build steps (PowerPoint-like animations)

Add `data-step="N"` (N = 1, 2, 3 …) to any element to give it build steps. Pressing forward
first advances the step until no steps are left, then moves to the next slide. Pressing back
reverses the steps; entering a slide backwards starts at its last step.

| Class set by the engine | Meaning |
| --- | --- |
| `step-current` | The element's step is the current one (e.g. a highlighted `.flow-step` tile or list item) |
| `step-done` | Its step has already passed |
| `step-pending` | Its step has not been reached yet |

Add the class `fragment` to keep an element hidden until its step (used by the MCP sequence diagram).
Several elements can share the same step number.

## Presenting

| Key | Action |
| --- | --- |
| `→` / `↓` / `Space` / `PageDown` | Next build step, then next slide |
| `←` / `↑` / `PageUp` | Previous build step, then previous slide |
| `Home` / `End` | First / last slide |
| `G` or the grid button left of the progress bar | Open the slide navigator |
| `L` or the language dropdown right of the progress bar | Switch language |
| `Esc` | Close the navigator |

Every slide has a deep link, e.g. `index.html#s5/02-why-cli`.
