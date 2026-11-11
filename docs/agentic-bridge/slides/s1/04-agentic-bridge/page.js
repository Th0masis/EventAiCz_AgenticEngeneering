Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.8fr 2.2fr;">
    <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li>{{li5}}</li><li>{{li6}}</li><li>{{li7}}</li></ul></div><div class="image-pane" style="padding: 0.25rem 0.25rem 0.75rem;"><svg viewBox="0 0 980 600" style="width: 100%; height: 100%; display: block; font-family: 'ABBvoice', sans-serif;" role="img" aria-label="{{aria2}}">
    <defs>
      <marker id="ab-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#1f2937" />
      </marker>
      <marker id="ab-arrow-start" markerWidth="10" markerHeight="10" refX="2" refY="5" orient="auto">
        <polygon points="10 0, 0 5, 10 10" fill="#1f2937" />
      </marker>
      <marker id="ab-callout" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <polygon points="0 0, 10 5, 0 10" fill="#ff8800" />
      </marker>
    </defs>

    <!-- IDE -->
    <rect x="390" y="10" width="200" height="60" rx="12" fill="#ffffff" stroke="#1f2937" stroke-width="2.5" />
    <text x="490" y="38" font-size="19.2" font-weight="700" text-anchor="middle" fill="#111827">{{svg1}}</text>
    <text x="490" y="58" font-size="13.44" text-anchor="middle" fill="#4b5563">{{svg2}}</text>
    <line x1="490" y1="74" x2="490" y2="112" stroke="#1f2937" stroke-width="2" marker-end="url(#ab-arrow)" marker-start="url(#ab-arrow-start)" />

    <!-- Static context -->
    <rect x="70" y="120" width="230" height="64" rx="12" fill="#fff7ed" stroke="#ff8800" stroke-width="2.5" />
    <text x="185" y="146" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg3}}</text>
    <text x="185" y="168" font-size="12.48" text-anchor="middle" fill="#4b5563">{{svg4}}</text>
    <line x1="304" y1="152" x2="384" y2="152" stroke="#1f2937" stroke-width="2" stroke-dasharray="7,5" marker-end="url(#ab-arrow)" />

    <!-- Harness -->
    <rect x="390" y="116" width="200" height="72" rx="12" fill="#ffffff" stroke="#1f2937" stroke-width="2.5" />
    <text x="490" y="146" font-size="17.28" font-weight="700" text-anchor="middle" fill="#111827">{{svg5}}</text>
    <text x="490" y="168" font-size="13.44" text-anchor="middle" fill="#4b5563">{{svg6}}</text>
    <line x1="490" y1="190" x2="490" y2="232" stroke="#1f2937" stroke-width="2" marker-end="url(#ab-arrow)" />

    <!-- Tool layer -->
    <rect x="170" y="236" width="640" height="252" rx="28" fill="#e5e7eb" stroke="#4b5563" stroke-width="2.5" />
    <text x="490" y="262" font-size="14.4" text-anchor="middle" fill="#4b5563" font-weight="500">{{svg7}}</text>

    <rect x="190" y="276" width="190" height="88" rx="12" fill="#ffffff" stroke="#ff8800" stroke-width="2.5" />
    <text x="285" y="304" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg8}}</text>
    <text x="285" y="326" font-size="13.44" text-anchor="middle" fill="#374151">{{svg9}}</text>
    <text x="285" y="344" font-size="13.44" text-anchor="middle" fill="#374151">{{svg10}}</text>

    <rect x="395" y="276" width="190" height="88" rx="12" fill="#ffffff" stroke="#ff8800" stroke-width="2.5" />
    <text x="490" y="304" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg11}}</text>
    <text x="490" y="326" font-size="13.44" text-anchor="middle" fill="#374151">{{svg12}}</text>
    <text x="490" y="344" font-size="13.44" text-anchor="middle" fill="#374151">{{svg13}}</text>

    <rect x="600" y="276" width="190" height="88" rx="12" fill="#ffffff" stroke="#ff8800" stroke-width="2.5" />
    <text x="695" y="304" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg14}}</text>
    <text x="695" y="326" font-size="13.44" text-anchor="middle" fill="#374151">{{svg15}}</text>

    <rect x="190" y="378" width="190" height="88" rx="12" fill="#ffffff" stroke="#ff8800" stroke-width="2.5" />
    <text x="285" y="406" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg16}}</text>
    <text x="285" y="428" font-size="13.44" text-anchor="middle" fill="#374151">{{svg17}}</text>
    <text x="285" y="446" font-size="13.44" text-anchor="middle" fill="#374151">{{svg18}}</text>

    <rect x="395" y="378" width="190" height="88" rx="12" fill="#ffffff" stroke="#1f2937" stroke-width="2.5" />
    <text x="490" y="406" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg19}}</text>
    <text x="490" y="428" font-size="13.44" text-anchor="middle" fill="#374151">{{svg20}}</text>
    <text x="490" y="446" font-size="13.44" text-anchor="middle" fill="#374151">{{svg21}}</text>

    <!-- Callouts -->
    <text x="720" y="214" font-size="28.8" font-weight="800" fill="#ff8800" text-anchor="middle">{{svg22}}</text>
    <line x1="700" y1="222" x2="572" y2="282" stroke="#ff8800" stroke-width="4" marker-end="url(#ab-callout)" />
    <text x="890" y="560" font-size="28.8" font-weight="800" fill="#ff8800" text-anchor="middle">{{svg23}}</text>
    <line x1="870" y1="532" x2="760" y2="440" stroke="#ff8800" stroke-width="4" marker-end="url(#ab-callout)" />
    <text x="125" y="520" font-size="16.32" font-weight="800" fill="#ff8800" text-anchor="middle">{{svg24}}</text>
    <text x="125" y="542" font-size="16.32" font-weight="800" fill="#ff8800" text-anchor="middle">{{svg25}}</text>
    <line x1="150" y1="500" x2="184" y2="430" stroke="#ff8800" stroke-width="4" marker-end="url(#ab-callout)" />

    <!-- MCP note -->
     <text x="895" y="272" font-size="13.44" fill="#4b5563" text-anchor="middle">{{svg26}}</text>

    <!-- PLCs -->
    <line x1="490" y1="490" x2="490" y2="522" stroke="#1f2937" stroke-width="2" marker-end="url(#ab-arrow)" />
    <rect x="390" y="526" width="200" height="64" rx="12" fill="#ffffff" stroke="#ff8800" stroke-width="2.5" />
    <text x="490" y="553" font-size="16.32" font-weight="700" text-anchor="middle" fill="#111827">{{svg27}}</text>
    <text x="490" y="575" font-size="13.44" text-anchor="middle" fill="#374151">{{svg28}}</text>
  </svg></div>
  </div>
</section>
`);
