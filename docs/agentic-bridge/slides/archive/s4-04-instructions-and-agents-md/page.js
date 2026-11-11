Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul><span class="label">{{label2}}</span><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td></tr><tr><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td></tr><tr><td>{{td7}}</td><td>{{td8}}</td></tr><tr><td>{{td9}}</td><td>{{td10}}</td></tr><tr><td>{{td11}}</td><td>{{td12}}</td></tr></tbody></table></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="h"># AGENTS.md</span>
This repository is a B&amp;R Automation Studio project. This file owns the
project architecture, global invariants, and routing rules.

<span class="h">## Skill Prerequisites</span>      <span class="c">{{comment1}}</span>
<span class="h">## Project Architecture</span>     <span class="c">{{comment2}}</span>
<span class="h">## mapp Technology Components</span><span class="c">{{comment3}}</span>
<span class="h">## Global Invariants</span>        <span class="c">{{comment4}}</span>
- Never invent module types, versions, channel names,
  property IDs, XML nodes, or allowed values.
<span class="h">## Skill Routing</span>            <span class="c">{{comment5}}</span>
| <span class="y">structured-text</span> | Logical/**/*.st, *.var, *.typ |
<span class="h">## \`as\` Command-Line Tool</span>   <span class="c">{{comment6}}</span>
<span class="h">## Change Workflow</span>          <span class="c">{{comment7}}</span></code></pre><pre class="tree"><span class="d">my-machine/</span>
├── <span class="a">AGENTS.md</span>          <span class="n">{{note1}}</span>
├── <span class="d">Logical/</span>
│   └── <span class="d">Motion/</span>
│       └── <span class="a">AGENTS.md</span>  <span class="n">{{note2}}</span>
└── <span class="f">MyMachine.apj</span></pre><p class="sources">{{sources1}}</p></div>
      </div>
    </section>
`);
