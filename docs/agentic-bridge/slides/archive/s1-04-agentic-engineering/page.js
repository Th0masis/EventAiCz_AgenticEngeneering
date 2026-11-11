Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li></ul><div class="alert"><strong>{{strong1}}</strong><p>{{p1}}</p></div></div><div class="text-pane"><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td></tr><tr><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td></tr><tr><td>{{td7}}</td><td>{{td8}}</td></tr></tbody></table><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li7}}</li><li>{{li8}}</li><li>{{li9}}</li></ul></div>
  </div>
</section>
`);
