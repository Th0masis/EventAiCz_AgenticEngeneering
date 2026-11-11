Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body" style="grid-template-rows: auto auto; align-content: start;">
    <div class="slide-body--ratio" style="display: grid; gap: clamp(1rem, 2vw, 2rem); --slide-ratio: 1fr 1fr 1fr;">
      <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul></div>
      <div class="text-pane"><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li3}}</li><li>{{li4}}</li></ul></div>
      <div class="text-pane"><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li5}}</li><li>{{li6}}</li></ul></div>
    </div>
    <div class="alert"><strong>{{strong1}}</strong><p>{{p1}}</p></div>
  </div>
</section>
`);
