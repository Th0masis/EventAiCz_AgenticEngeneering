Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li3}}</li></ul></div><div class="text-pane"><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li></ul><span class="label">{{label5}}</span><ul class="placeholder-copy"><li>{{li5}}</li></ul><span class="label">{{label6}}</span><ul class="placeholder-copy"><li>{{li6}}</li></ul><blockquote class="quote">{{quote1}}</blockquote><p class="sources">{{sources1}}</p></div>
  </div>
</section>
`);
