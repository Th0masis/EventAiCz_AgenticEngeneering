Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.15fr 0.85fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code>---
<span class="y">name</span>: <span class="s">mappView HMI Designer and Converter</span>
<span class="y">description</span>: <span class="s">Design industrial HMIs, convert annotated HTML into an
  existing AS6 mappView visualization, and validate the deployed result.</span>
<span class="y">user-invocable</span>: <span class="k">true</span>
<span class="y">disable-model-invocation</span>: <span class="k">true</span>
---
<span class="h"># mappView HMI Designer and Converter</span>

You are the dedicated specialist for industrial HMI design, mappView
integration, and runtime validation in B&amp;R Automation Studio 6 projects.

Before acting, read and follow the internal
[mappView HMI Design and Conversion skill](../skills/…/SKILL.md).

<span class="h">## Persona and mission</span>
…</code></pre></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li3}}</li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li></ul><span class="label">{{label5}}</span><ul class="placeholder-copy"><li>{{li5}}</li></ul></div>
      </div>
    </section>
`);
