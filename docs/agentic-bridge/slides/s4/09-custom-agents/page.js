Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul><div class="alert"><strong>{{strong1}}</strong><p>{{p2}}</p></div></div><div class="text-pane"><span class="label">{{label2}}</span><ul class="placeholder-copy"><li><strong>{{strong2}}</strong></li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li8}}</li><li>{{li9}}</li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li10}}</li></ul></div>
  </div>
</section>
`);
