Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li><span class="muted">{{muted1}}</span></li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li><li><span class="muted">{{muted2}}</span></li></ul><div class="alert"><strong>{{strong1}}</strong><p>{{p2}}</p></div></div><div class="text-pane"><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li3}}</li><li><span class="muted">{{muted3}}</span></li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li><span class="muted">{{muted4}}</span></li></ul></div>
  </div>
</section>
`);
