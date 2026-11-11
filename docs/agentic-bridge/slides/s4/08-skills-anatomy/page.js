Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.9fr 1.1fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="tree"><span class="d">structured-text/</span>        <span class="n">{{note1}}</span>
├── <span class="a">SKILL.md</span>            <span class="n">{{note2}}</span>
├── <span class="d">references/</span>         <span class="n">{{note3}}</span>
│   ├── <span class="f">project-structure.md</span>
│   └── <span class="f">example-task.md</span>
├── <span class="d">scripts/</span>            <span class="n">{{note4}}</span>
└── <span class="d">assets/</span>             <span class="n">{{note5}}</span></pre><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td></tr><tr><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td></tr><tr><td><code>metadata</code></td><td>{{td7}}</td></tr><tr><td><code>allowed-tools</code></td><td>{{td8}}</td></tr></tbody></table></div><div class="text-pane"><p class="code-caption">{{codeCaption2}}</p><pre class="code"><code>---
<span class="y">name</span>: <span class="s">structured-text</span>
<span class="y">description</span>: <span class="s">"Load when writing or editing IEC 61131-3 Structured
  Text, variable declarations, or data types … Triggers: .st file,
  .var file, .typ file, PROGRAM _INIT, _CYCLIC, _EXIT, …
  Do NOT use for ANSI C sources, headers, or ANSIC.prg — use ansi-c."</span>
---
<span class="h"># B&amp;R Automation Studio Structured Text Development</span>
<span class="h">## Required tools</span>          <span class="c">{{comment1}}</span>
<span class="h">## Reference routing</span>       <span class="c">{{comment2}}</span>
| [project-structure.md](references/…) | Adding, renaming … files |
| [example-task.md](references/…)      | Creating a new ST task …  |
<span class="h">## Naming Conventions</span>
…</code></pre><p class="muted small">{{muted1}}</p></div>
      </div>
    </section>
`);
