Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
    <header class="slide-header">
      <span class="eyebrow">{{eyebrow}}</span>
      <h2>{{title}}</h2>
    </header>
    <div class="slide-body">
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.0fr 1.0fr;">
        <div class="text-pane">
          <span class="label">{{label1}}</span>
          <ul class="placeholder-copy">
            <li>{{li1}}</li>
            <li>{{li2}}</li>
          </ul>
          <span class="label">{{label2}}</span>
          <ul class="placeholder-copy">
            <li>{{li3}}</li>
            <li>{{li4}}</li>
            <li>{{li5}}</li>
          </ul>
          <span class="label">{{label3}}</span>
          <ul class="placeholder-copy">
            <li>{{li6}}</li>
            <li>{{li7}}</li>
            <li>{{li8}}</li>
          </ul>
        </div>
        <div class="image-pane">
          <svg viewBox="0 0 400 380" style="width: 100%; height: auto; display: block;">
            <defs>
              <linearGradient id="planBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
              </linearGradient>
              <filter id="planShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="5" flood-opacity="0.3"/>
              </filter>
              <marker id="planArrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="#F59E0B"/>
              </marker>
            </defs>

            <text x="200" y="25" font-size="15.36" font-weight="700" fill="#111827" text-anchor="middle">{{svg1}}</text>

            <g filter="url(#planShadow)">
              <rect x="50" y="50" width="120" height="60" rx="10" fill="#8B5CF6" stroke="#7C3AED" stroke-width="2"/>
              <text x="110" y="75" font-size="12.48" font-weight="600" fill="#FFF" text-anchor="middle">{{svg2}}</text>
              <text x="110" y="95" font-size="9.6" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg3}}</text>
            </g>

            <path d="M170,80 L210,80" stroke="#F59E0B" stroke-width="2" marker-end="url(#planArrow)"/>

            <g filter="url(#planShadow)">
              <rect x="220" y="50" width="120" height="60" rx="10" fill="url(#planBoxGrad)" stroke="#3B82F6" stroke-width="2"/>
              <text x="280" y="75" font-size="12.48" font-weight="600" fill="#FFF" text-anchor="middle">{{svg4}}</text>
              <text x="280" y="95" font-size="9.6" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg5}}</text>
            </g>

            <g filter="url(#planShadow)">
              <rect x="140" y="140" width="120" height="50" rx="10" fill="#475569" stroke="#64748B" stroke-width="2"/>
              <text x="200" y="165" font-size="11.52" font-weight="600" fill="#FFF" text-anchor="middle">{{svg6}}</text>
              <text x="200" y="180" font-size="9.6" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg7}}</text>
            </g>

            <path d="M280,110 L280,130 L200,130 L200,140" fill="none" stroke="#F59E0B" stroke-width="2" marker-end="url(#planArrow)"/>

            <path d="M260,165 C300,165 300,80 280,110" stroke="#64748B" stroke-width="1.5" stroke-dasharray="4,3" fill="none"/>

            <text x="200" y="220" font-size="11.52" font-weight="600" fill="#8c92a3" text-anchor="middle">{{svg8}}</text>

            <g filter="url(#planShadow)">
              <rect x="30" y="245" width="100" height="55" rx="8" fill="#3B82F6" stroke="#2563EB" stroke-width="2"/>
              <text x="80" y="268" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg9}}</text>
              <text x="80" y="285" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg10}}</text>
            </g>
            <g filter="url(#planShadow)">
              <rect x="150" y="245" width="100" height="55" rx="8" fill="#FF8C42" stroke="#FF6B35" stroke-width="2"/>
              <text x="200" y="268" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg11}}</text>
              <text x="200" y="285" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg12}}</text>
            </g>
            <g filter="url(#planShadow)">
              <rect x="270" y="245" width="100" height="55" rx="8" fill="#8B5CF6" stroke="#7C3AED" stroke-width="2"/>
              <text x="320" y="268" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg13}}</text>
              <text x="320" y="285" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg14}}</text>
            </g>

            <path d="M200,190 L200,210 L80,210 L80,245" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
            <path d="M200,210 L200,245" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
            <path d="M200,210 L320,210 L320,245" fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>

            <rect x="100" y="320" width="200" height="40" rx="8" fill="rgba(34,197,94,0.2)" stroke="#22C55E" stroke-width="1"/>
            <text x="200" y="345" font-size="11.52" font-weight="600" fill="#22C55E" text-anchor="middle">{{svg15}}</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
`);
