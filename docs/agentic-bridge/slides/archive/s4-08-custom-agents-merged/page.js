Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.3fr 0.7fr;">
    <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code>---
<span class="y">name</span>: <span class="s">mappView HMI Designer and Converter</span>  <span class="c">← 1</span>
<span class="y">description</span>: <span class="s">Design HMIs and convert them to mappView.</span>
<span class="y">user-invocable</span>: <span class="k">true</span>  <span class="c">← 2</span>
<span class="y">disable-model-invocation</span>: <span class="k">true</span>
---
<span class="h"># mappView HMI Designer and Converter</span>

You are the dedicated specialist for industrial HMI design, mappView  <span class="c">← 3</span>
integration, and runtime validation in B&amp;R Automation Studio 6 projects.
Before acting, read and follow the internal
[mappView HMI Design and Conversion skill](../skills/…/SKILL.md).  <span class="c">← 4</span>
…</code></pre><ol class="placeholder-copy"><li>{{an1}}</li><li>{{an2}}</li><li>{{an3}}</li><li>{{an4}}</li></ol></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul><div class="alert"><strong>{{strong1}}</strong><p>{{p2}}</p></div><p class="placeholder-copy">{{other1}}</p></div>
  </div>
</section>
`);
