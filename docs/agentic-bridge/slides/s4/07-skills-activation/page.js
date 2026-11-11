Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.9fr 1.1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li3}}</li><li>{{li4}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li5}}</li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li6}}</li></ul></div><div class="stack">
      <div class="flow-step" data-step="1"><span class="num">1</span><h4>{{h41}}</h4><p><em>{{em1}}</em></p></div>
      <div class="flow-step" data-step="2"><span class="num">2</span><h4>{{h42}}</h4><pre class="code"><code><span class="y">structured-text</span>: Load when writing or editing
  IEC 61131-3 Structured Text … Triggers: .st file  <span class="c">✓</span>
<span class="y">mappview</span>: Load when authoring mapp View HMI
  pages, widgets, bindings …                       <span class="s">✗</span></code></pre></div>
      <div class="flow-step" data-step="3"><span class="num">3</span><h4>{{h43}}</h4><p>{{p1}}</p></div>
      <div class="flow-step" data-step="4"><span class="num">4</span><h4>{{h44}}</h4><p>{{p2}}</p></div>
    </div>
  </div>
</section>
`);
