Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.15fr 0.85fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td><strong>{{strong1}}</strong></td><td>{{td1}}</td></tr><tr><td><strong>{{strong2}}</strong></td><td>{{td2}}</td></tr><tr><td><strong>{{strong3}}</strong></td><td>{{td3}}</td></tr><tr><td><strong>{{strong4}}</strong></td><td>{{td4}}</td></tr></tbody></table></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p>
<svg viewBox="0 0 520 330" style="width: 100%; height: auto; display: block; font-family: 'ABBvoice', sans-serif;" role="img" aria-label="{{aria2}}">
  <rect x="10" y="10" width="500" height="270" rx="26" fill="#e5e7eb" stroke="#4b5563" stroke-width="2.5"/>
  <text x="260" y="36" font-size="13.44" fill="#4b5563" text-anchor="middle" font-weight="500">{{svg1}}</text>
  <rect x="30" y="52" width="225" height="96" rx="12" fill="#fff" stroke="#ff8800" stroke-width="3"/>
  <text x="142" y="88" font-size="17.28" font-weight="700" fill="#111827" text-anchor="middle">{{svg2}}</text>
  <text x="142" y="112" font-size="11.52" fill="#374151" text-anchor="middle">{{svg3}}</text>
  <text x="142" y="132" font-size="11.52" fill="#374151" text-anchor="middle">{{svg4}}</text>
  <rect x="265" y="52" width="225" height="96" rx="12" fill="#fff" stroke="#ff8800" stroke-width="3"/>
  <text x="377" y="88" font-size="17.28" font-weight="700" fill="#111827" text-anchor="middle">{{svg5}}</text>
  <text x="377" y="112" font-size="11.52" fill="#374151" text-anchor="middle">{{svg6}}</text>
  <text x="377" y="132" font-size="11.52" fill="#374151" text-anchor="middle">{{svg7}}</text>
  <rect x="30" y="160" width="225" height="96" rx="12" fill="#fff" stroke="#ff8800" stroke-width="3"/>
  <text x="142" y="196" font-size="17.28" font-weight="700" fill="#111827" text-anchor="middle">{{svg8}}</text>
  <text x="142" y="220" font-size="11.52" fill="#374151" text-anchor="middle">{{svg9}}</text>
  <text x="142" y="240" font-size="11.52" fill="#374151" text-anchor="middle">{{svg10}}</text>
  <rect x="265" y="160" width="225" height="96" rx="12" fill="#fff" stroke="#ff8800" stroke-width="3"/>
  <text x="377" y="196" font-size="17.28" font-weight="700" fill="#111827" text-anchor="middle">{{svg11}}</text>
  <text x="377" y="220" font-size="11.52" fill="#374151" text-anchor="middle">{{svg12}}</text>
  <text x="377" y="240" font-size="11.52" fill="#6b7280" text-anchor="middle">{{svg13}}</text>
  <text x="260" y="312" font-size="14.4" font-weight="700" fill="#b35f00" text-anchor="middle">{{svg14}}</text>
</svg>
<div class="alert"><strong>{{strong5}}</strong><p>{{p1}}</p></div></div>
      </div>
    </section>
`);
