Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul><p class="sources">{{sources1}}</p></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="h"># AGENTS.md</span>
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
<span class="h">## Change Workflow</span>          <span class="c">{{comment7}}</span></code></pre></div>
      </div>
    </section>
`);
