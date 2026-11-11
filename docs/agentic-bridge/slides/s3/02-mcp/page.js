Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane">
      <span class="label">{{label1}}</span>
      <ul class="placeholder-copy">
        <li>{{li1}}</li>
        <li>{{li2}}</li>
      </ul>
      <span class="label">{{label2}}</span>
      <ul class="placeholder-copy">
        <li>{{li3}}</li>
      </ul>
      <div class="alert" style="margin-top: 1rem;">
        <strong>{{strong1}}</strong>
        <p>{{p2}}</p>
      </div>
    </div>
    <div class="image-pane" style="padding: 0.5rem; overflow: hidden;">
      <svg viewBox="0 0 640 380" style="width:100%; height:auto; display:block; font-family:'ABBvoice',sans-serif;">
        <defs>
          <marker id="mcpbr-arrow-fwd" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="13" refY="7" orient="auto">
            <polygon points="0 0, 14 7, 0 14" fill="#FF8800"/>
          </marker>
          <marker id="mcpbr-arrow-back" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="13" refY="7" orient="auto">
            <polygon points="0 0, 14 7, 0 14" fill="#16A34A"/>
          </marker>
        </defs>

        <rect x="20" y="10" width="140" height="62" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <text x="90" y="34" font-size="16" fill="#CBD5E1" text-anchor="middle" font-weight="700">{{svg1}}</text>
        <text x="90" y="62" font-size="22" text-anchor="middle">&#128100;</text>
        <rect x="215" y="10" width="190" height="62" rx="12" fill="#1e3a5f" stroke="#3B82F6" stroke-width="2"/>
        <text x="310" y="34" font-size="16" fill="#BFDBFE" text-anchor="middle" font-weight="700">{{svg2}}</text>
        <text x="310" y="62" font-size="22" text-anchor="middle">&#129302;</text>
        <rect x="430" y="10" width="200" height="62" rx="12" fill="#3b1e00" stroke="#FF8800" stroke-width="2"/>
        <text x="530" y="34" font-size="16" fill="#FDBA74" text-anchor="middle" font-weight="700">{{svg3}}</text>
        <text x="530" y="62" font-size="22" text-anchor="middle">&#128218;</text>

        <line x1="90" y1="72" x2="90" y2="375" stroke="#475569" stroke-width="2" stroke-dasharray="6,5"/>
        <line x1="310" y1="72" x2="310" y2="375" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6,5" opacity="0.7"/>
        <line x1="530" y1="72" x2="530" y2="375" stroke="#FF8800" stroke-width="2" stroke-dasharray="6,5" opacity="0.6"/>

        <g class="mcp-step fragment" data-step="1">
          <text x="4" y="117" font-size="15" font-weight="700" fill="#64748B">1</text>
          <text x="200" y="104" font-size="15" fill="#C2410C" text-anchor="middle">{{svg4}}</text>
          <line x1="96" y1="114" x2="302" y2="114" stroke="#FF8800" stroke-width="3" marker-end="url(#mcpbr-arrow-fwd)"/>
        </g>

        <g class="mcp-step fragment" data-step="2">
          <text x="4" y="157" font-size="15" font-weight="700" fill="#64748B">2</text>
          <rect x="205" y="134" width="210" height="32" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
          <text x="310" y="156" font-size="15" fill="#1E3A8A" text-anchor="middle">{{svg5}}</text>
        </g>

        <g class="mcp-step fragment" data-step="3">
          <text x="4" y="207" font-size="15" font-weight="700" fill="#64748B">3</text>
          <text x="420" y="194" font-size="15" fill="#C2410C" text-anchor="middle">{{svg6}}</text>
          <line x1="316" y1="204" x2="522" y2="204" stroke="#FF8800" stroke-width="3" marker-end="url(#mcpbr-arrow-fwd)"/>
        </g>

        <g class="mcp-step fragment" data-step="4">
          <text x="4" y="247" font-size="15" font-weight="700" fill="#64748B">4</text>
          <rect x="420" y="224" width="216" height="32" rx="7" fill="#FFEDD5" stroke="#FF8800" stroke-width="1.5"/>
          <text x="528" y="246" font-size="14" fill="#9A3412" text-anchor="middle">{{svg7}}</text>
        </g>

        <g class="mcp-step fragment" data-step="5">
          <text x="4" y="303" font-size="15" font-weight="700" fill="#64748B">5</text>
          <text x="420" y="290" font-size="15" fill="#15803D" text-anchor="middle">{{svg8}}</text>
          <line x1="524" y1="300" x2="318" y2="300" stroke="#16A34A" stroke-width="3" marker-end="url(#mcpbr-arrow-back)"/>
        </g>

        <g class="mcp-step fragment" data-step="6">
          <text x="4" y="363" font-size="15" font-weight="700" fill="#64748B">6</text>
          <text x="200" y="350" font-size="15" fill="#15803D" text-anchor="middle">{{svg9}}</text>
          <line x1="304" y1="360" x2="98" y2="360" stroke="#16A34A" stroke-width="3" marker-end="url(#mcpbr-arrow-back)"/>
        </g>
      </svg>
    </div>
  </div>
</section>
`);
