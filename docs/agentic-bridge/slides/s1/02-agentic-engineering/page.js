Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane evolution-steps"><span class="label">{{label1}}</span><h3 class="placeholder-title">{{placeholderTitle1}}</h3><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><h3 class="placeholder-title">{{placeholderTitle2}}</h3><ul class="placeholder-copy"><li>{{li2}}</li></ul><span class="label">{{label3}}</span><h3 class="placeholder-title">{{placeholderTitle3}}</h3><ul class="placeholder-copy"><li>{{li3}}</li></ul><div class="alert"><strong>{{strong2}}</strong><p>{{p2}}</p></div><div class="alert"><strong>{{strong1}}</strong><p>{{p1}}</p></div></div><div class="text-pane"><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li>{{li5}}</li></ul><span class="label">{{label5}}</span><ul class="placeholder-copy"><li>{{li6}}</li><li>{{li7}}</li><li>{{li8}}</li></ul></div>
  </div>
</section>
`);
