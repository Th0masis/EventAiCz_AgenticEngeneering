Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr;">
    <div class="text-pane"><table class="data-table" style="font-size: clamp(1rem, 1.05vw, 1.2rem);"><thead><tr><th>{{th1}}</th><th>{{th2}}</th><th>{{th3}}</th><th>{{th4}}</th></tr></thead><tbody><tr><td><strong>{{strong1}}</strong></td><td>{{td1}}</td><td>{{td2}}</td><td>-</td></tr><tr><td><strong>{{strong2}}</strong></td><td>{{td3}}</td><td>{{td4}}</td><td>-</td></tr><tr><td><strong>{{strong3}}</strong></td><td>{{td5}}</td><td>{{td6}}</td><td>{{td7}}</td></tr><tr><td><strong>{{strong4}}</strong></td><td>{{td8}}</td><td>{{td9}}</td><td>{{td10}}</td></tr></tbody></table><div class="alert"><strong>{{strong5}}</strong><p>{{p1}}</p></div></div>
  </div>
</section>
`);
