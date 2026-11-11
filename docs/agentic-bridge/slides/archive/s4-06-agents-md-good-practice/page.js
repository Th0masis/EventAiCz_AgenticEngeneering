Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body" style="grid-template-rows: auto 1fr;">
    <div class="slide-body--ratio" style="display: grid; gap: clamp(1rem, 2vw, 2rem); --slide-ratio: 1fr 1fr 1fr;">
      <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul></div>
      <div class="text-pane"><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul></div>
      <div class="text-pane"><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li9}}</li><li>{{li10}}</li><li>{{li11}}</li><li>{{li12}}</li></ul></div>
    </div>
    <div class="slide-body--ratio" style="display: grid; gap: clamp(1rem, 2vw, 2rem); --slide-ratio: 1fr 1fr;">
      <div class="text-pane"><span class="label" style="color: #b91c1c;">{{label4}}</span><pre class="code"><code><span class="h"># AGENTS.md</span>
Please write good, clean code and be careful.

This project was started in 2019. Over the years
we added many features, first the conveyor, then …
<span class="c">{{comment1}}</span>

PLC password: admin123</code></pre></div>
      <div class="text-pane"><span class="label" style="color: #15803d;">{{label5}}</span><pre class="code"><code><span class="h"># AGENTS.md</span>
<span class="h">## Architecture</span>
Logical/Machine: machine tasks · Physical/Config1: X20CP1686X
<span class="h">## Invariants</span>
- Never redeclare a mapp Link variable in a task.
<span class="h">## Skill routing</span>
| *.st, *.var, *.typ | <span class="y">structured-text</span> |
<span class="h">## Done means</span>
\`as build\` returns exit 0. Ask before changing hardware.</code></pre></div>
    </div>
  </div>
</section>
`);
