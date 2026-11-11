Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1.1fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li6}}</li></ul></div><div class="text-pane"><svg viewBox="0 0 949 377" role="img" aria-label="{{alt1}}" style="width: 100%; height: auto;" font-family="ABBvoice, 'Segoe UI', sans-serif">
<defs>
<linearGradient id="pd-arrow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9b6bff"/><stop offset="1" stop-color="#5b34d6"/></linearGradient>
</defs>
<path d="M134 52 V17 H814 V52" fill="none" stroke="#2b2b3a" stroke-width="1.5"/>
<text x="474" y="25" text-anchor="middle" font-size="22" font-weight="700" fill="#111" stroke="#fff" stroke-width="14" paint-order="stroke" stroke-linejoin="round">{{diagTitle}}</text>
<g fill="#f2f3f7" stroke="#2b2b3a" stroke-width="1.5"><rect x="8" y="52" width="252" height="313" rx="14"/><rect x="352" y="52" width="244" height="313" rx="14"/><rect x="688" y="52" width="252" height="313" rx="14"/></g>
<g fill="url(#pd-arrow)" stroke="#3b2a8a" stroke-width="1.5" stroke-linejoin="round"><polygon points="272,184 308,184 308,166 342,198 308,230 308,212 272,212"/><polygon points="610,184 646,184 646,166 680,198 646,230 646,212 610,212"/></g>
<g text-anchor="middle" font-size="21" font-weight="700" fill="#111"><text x="134" y="88">{{lvl1}}</text><text x="474" y="88">{{lvl2}}</text><text x="814" y="88">{{lvl3}}</text></g>
<image href="images/progressive-disclosure-level1.png" x="35" y="96" width="217" height="188"/>
<image href="images/progressive-disclosure-level2.png" x="385" y="96" width="201" height="188"/>
<image href="images/progressive-disclosure-level3.png" x="727" y="96" width="205" height="188"/>
<g text-anchor="middle" font-size="18" fill="#222"><text x="134" y="306">{{c1a}}</text><text x="134" y="328">{{c1b}}</text><text x="134" y="350">{{c1c}}</text><text x="474" y="306">{{c2a}}</text><text x="474" y="328">{{c2b}}</text><text x="474" y="350">{{c2c}}</text><text x="814" y="306">{{c3a}}</text><text x="814" y="328">{{c3b}}</text><text x="814" y="350">{{c3c}}</text></g>
</svg><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th><th>{{th3}}</th><th>{{th4}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td><td>{{td7}}</td><td>{{td8}}</td></tr><tr><td>{{td9}}</td><td>{{td10}}</td><td>{{td11}}</td><td>{{td12}}</td></tr></tbody></table></div>
  </div>
</section>
`);
