# AI Concepts Playground - Presenter Notes

This README contains concise presenter guidance for the audience-facing HTML pages.
For a full memorisable talk track, use `presentation-script-en.md`.

## Structure

One shell, [`index.html`](index.html), shows one page chosen by the hash (`index.html#tokenization`). Each page is a folder:

```text
llm-basics/
├── index.html            # Shell: loads the shared i18n module and assets/loader.js
├── assets/
│   ├── loader.js         # Loads a page, builds the navigation bar, previous/next keys
│   ├── ui-strings.js     # Navigation bar texts per language
│   └── styles.css
├── overview/             # one folder per page: overview, what-is-an-llm, tokenization,
│   ├── page.js           #   embeddings, transformer, output-generation, conclusion, qa,
│   ├── script.js         #   presentation-review
│   ├── lang.en.js        # page.js = template ({{key}} for text), script.js = optional behavior
│   ├── lang.de.js        # (texts used by script.js are the keys that start with "js.")
│   └── lang.it.js
└── ai-assistant-concepts-playground.html   # old address, redirects to index.html#overview
```

The language dropdown in the navigation bar is the same one as on the other pages, and the choice carries over. See [`../../i18n/TRANSLATING.md`](../../i18n/TRANSLATING.md) for the translation rules.

## Presentation Goal

Build a projector-friendly 5-minute mental model by following one B&R-style customer prompt through five steps:

"I am the customer on a B&R case. I shared the logger output with the support engineer. After reviewing it, tell me whether the trace is still needed."

1. Tokenization: what stays visible
2. Embeddings: the starting meaning map
3. Transformer self-attention: what gets weight and how the values change
4. Output generation: how the weighted context becomes the answer
5. Conclusion: why long agent workflows lose context

## Suggested Flow (5 minutes)

1. `index.html#tokenization` (1 min)
2. `index.html#embeddings` (1 min)
3. `index.html#transformer` (1 min)
4. `index.html#output-generation` (1 min)
5. `index.html#conclusion` (1 min)

## Page-by-Page Speaker Guidance

### 1) Tokenization (`index.html#tokenization`)

- Start with `Good prompt` in Word split mode.
- Move the context window slider before changing anything else.
- If useful, click `Generic prompt` once to show how a shorter request changes the token budget and the available detail.
- Then switch to Frequency merges only if you want one quick proof that token cost is not obvious.
- Optional advanced step: open "Advanced (optional): how subword merges are learned" only if asked.

Core message:

- The model reads tokens, not polished prose.
- A more specific prompt keeps more useful evidence visible.
- Logger output and traces help, but they also consume context budget.

### 2) Embeddings (`index.html#embeddings`)

- Start with `Person pair`.
- Show that `customer` and `support` begin close together because they are both person tokens.
- Then open `Evidence pair` to show that `logger` and `trace` also begin close together.
- Move to `Before attention` and say explicitly that embeddings are the transformer's starting values.
- Optional advanced step: open "Advanced (optional): exact values and pair differences".

Core message:

- Embeddings are the model's starting meaning map.
- `customer` and `support` begin near each other as person tokens before attention separates their roles.

### 3) Transformer (`index.html#transformer`)

- Start with `support` selected.
- Point to the strongest visible links around it: `engineer`, `reviewing`, `needed`, and `trace`.
- Then click `customer` and contrast it with `shared`, `logger`, and `output`.
- Use the updated embedding panel to show that attention changes the token values, not only the ranking.
- Use the colored before/after circles to show what shrinks and what grows after attention.
- Optional follow-up: click `reviewing` or `trace` to show how the focus changes.

Core message:

- This is self-attention: one token compares itself with the other visible tokens in the same prompt.
- Attention updates the token representation after it uses context.
- Two tokens can start in the same semantic category and still diverge once the prompt gives them different roles.

### 4) Output (`index.html#output-generation`)

- Use the new schematic flow from left to right.
- Keep the explanation minimal: prompt in view, weighted context, next token, full answer.
- Contrast the specific prompt with the generic prompt and show how the answer changes.

Core message:

- The answer is generated one token at a time from the currently weighted context.
- A specific prompt keeps the answer grounded.
- A generic prompt leaves more room for drift or guesswork.

### 5) Conclusion (`index.html#conclusion`)

- Use the B&R support pattern: the customer prompt names the logger and asks whether the trace is still needed.
- Use the output page to say explicitly that the model writes the answer one token at a time from the currently weighted context.
- Contrast one answer from a specific prompt with one answer from a generic prompt.
- Connect that pattern to context pressure across many turns.
- Close on the three anchors: goal, key evidence, success check.

Core message:

- Agentic engineering is mostly context management across turns.
- The final answer is generated from the weighted context, so context mistakes become output mistakes.
- Summaries keep the right state alive when the workflow gets long.

## Practical Delivery Tips

- Use the keyboard to move between pages:

  | Key | Action |
  | --- | --- |
  | `→` / `↓` / `Space` / `PageDown` | Next page |
  | `←` / `↑` / `PageUp` | Previous page |

  Keys are ignored while typing in the input text or using the budget slider.
- Keep one main interaction per page.
- Avoid opening advanced sections unless asked.
- Repeat the same five questions on each page:
  - Tokenization: "What can the model still see?"
  - Embeddings: "How is that visible text represented?"
  - Transformer: "What gets weight, and how do the values change?"
  - Output: "How does the weighted context become the next token and then the full answer?"
  - Conclusion: "What happens if the wrong context gets the weight across many turns?"
- If time is short, spend most of the time on the transformer page and close quickly with the final page.
