Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
    <header class="slide-header">
      <span class="eyebrow">{{eyebrow}}</span>
      <h2>{{title}}</h2>
      <p>{{p1}}</p>
    </header>
    <div class="slide-body">
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
        <div class="text-pane">
          <span class="label">{{label1}}</span>
          <ol class="placeholder-copy" style="padding-left: 1.4rem;">
            <li data-step="1">{{li1}}</li>
            <li data-step="2">{{li2}}</li>
            <li data-step="3">{{li3}}</li>
            <li data-step="4">{{li4}}</li>
            <li data-step="5">{{li5}}</li>
            <li data-step="6">{{li6}}</li>
            <li data-step="7">{{li7}}</li>
          </ol>
          <div class="alert" style="margin-top: 1rem;">
            <strong>{{strong1}}</strong>
            <p>{{p2}}</p>
          </div>
      </div>
        <div class="image-pane" style="padding: 0.5rem; overflow: hidden; align-items: flex-start; justify-content: flex-start;">
          <svg viewBox="0 0 640 450" style="width:100%; height:auto; display:block; font-family:'ABBvoice',sans-serif;">
            <defs>
              <marker id="mcp-arrow-fwd" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="13" refY="7" orient="auto">
                <polygon points="0 0, 14 7, 0 14" fill="#FF8800"/>
              </marker>
              <marker id="mcp-arrow-back" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="13" refY="7" orient="auto">
                <polygon points="0 0, 14 7, 0 14" fill="#16A34A"/>
              </marker>
            </defs>

            <rect x="20" y="10" width="140" height="62" rx="12" fill="#1e293b" stroke="#475569" stroke-width="2"/>
            <text x="90" y="34" font-size="16" fill="#CBD5E1" text-anchor="middle" font-weight="700">{{svg1}}</text>
            <text x="90" y="62" font-size="22" text-anchor="middle">&#128100;</text>
            <rect x="235" y="10" width="170" height="62" rx="12" fill="#1e3a5f" stroke="#3B82F6" stroke-width="2"/>
            <text x="320" y="34" font-size="16" fill="#BFDBFE" text-anchor="middle" font-weight="700">{{svg2}}</text>
            <text x="320" y="62" font-size="22" text-anchor="middle">&#129302;</text>
            <rect x="470" y="10" width="160" height="62" rx="12" fill="#3b1e00" stroke="#FF8800" stroke-width="2"/>
            <text x="550" y="34" font-size="16" fill="#FDBA74" text-anchor="middle" font-weight="700">{{svg3}}</text>
            <text x="550" y="62" font-size="22" text-anchor="middle">&#9881;&#65039;</text>

            <line x1="90" y1="72" x2="90" y2="440" stroke="#475569" stroke-width="2" stroke-dasharray="6,5"/>
            <line x1="320" y1="72" x2="320" y2="440" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6,5" opacity="0.7"/>
            <line x1="550" y1="72" x2="550" y2="440" stroke="#FF8800" stroke-width="2" stroke-dasharray="6,5" opacity="0.6"/>

            <g class="mcp-step fragment" data-step="1">
              <text x="10" y="117" font-size="15" font-weight="700" fill="#64748B">1</text>
              <text x="205" y="104" font-size="15" fill="#C2410C" text-anchor="middle">{{svg4}}</text>
              <line x1="96" y1="114" x2="312" y2="114" stroke="#FF8800" stroke-width="3" marker-end="url(#mcp-arrow-fwd)"/>
            </g>

            <g class="mcp-step fragment" data-step="2">
              <text x="10" y="157" font-size="15" font-weight="700" fill="#64748B">2</text>
              <rect x="230" y="134" width="180" height="32" rx="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
              <text x="320" y="156" font-size="15" fill="#1E3A8A" text-anchor="middle">{{svg5}}</text>
            </g>

            <g class="mcp-step fragment" data-step="3">
              <text x="10" y="207" font-size="15" font-weight="700" fill="#64748B">3</text>
              <text x="435" y="194" font-size="15" fill="#C2410C" text-anchor="middle">{{svg6}}</text>
              <line x1="326" y1="204" x2="542" y2="204" stroke="#FF8800" stroke-width="3" marker-end="url(#mcp-arrow-fwd)"/>
            </g>

            <g class="mcp-step fragment" data-step="4">
              <text x="10" y="247" font-size="15" font-weight="700" fill="#64748B">4</text>
              <rect x="470" y="224" width="160" height="32" rx="7" fill="#FFEDD5" stroke="#FF8800" stroke-width="1.5"/>
              <text x="550" y="246" font-size="15" fill="#9A3412" text-anchor="middle">{{svg7}}</text>
            </g>

            <g class="mcp-step fragment" data-step="5">
              <text x="10" y="289" font-size="15" font-weight="700" fill="#64748B">5</text>
              <rect x="470" y="266" width="160" height="32" rx="7" fill="#DCFCE7" stroke="#16A34A" stroke-width="1.5"/>
              <text x="550" y="288" font-size="15" fill="#166534" text-anchor="middle">{{svg8}}</text>
            </g>

            <g class="mcp-step fragment" data-step="6">
              <text x="10" y="347" font-size="15" font-weight="700" fill="#64748B">6</text>
              <text x="435" y="332" font-size="15" fill="#15803D" text-anchor="middle">{{svg9}}</text>
              <line x1="544" y1="342" x2="328" y2="342" stroke="#16A34A" stroke-width="3" marker-end="url(#mcp-arrow-back)"/>
            </g>

            <g class="mcp-step fragment" data-step="7">
              <text x="10" y="417" font-size="15" font-weight="700" fill="#64748B">7</text>
              <text x="205" y="402" font-size="15" fill="#15803D" text-anchor="middle">{{svg10}}</text>
              <line x1="314" y1="412" x2="98" y2="412" stroke="#16A34A" stroke-width="3" marker-end="url(#mcp-arrow-back)"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
`);
