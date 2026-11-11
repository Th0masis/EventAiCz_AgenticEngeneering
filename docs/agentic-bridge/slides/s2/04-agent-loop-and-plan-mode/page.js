Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
    <header class="slide-header">
      <span class="eyebrow">{{eyebrow}}</span>
      <h2>{{title}}</h2>
    </header>
    <div class="slide-body">
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.95fr 1.05fr;">
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
            <li>{{li6}}</li>
          </ul>
        </div>
        <div class="image-pane">
            <svg viewBox="0 0 700 330" style="width: 100%; height: auto; display: block; font-family: 'ABBvoice', sans-serif;">
                <defs>
                    <linearGradient id="planGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="implementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#A78BFA;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="workflowVerifyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#FBBF24;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
                    </linearGradient>
                    <linearGradient id="workflowTestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#34D399;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
                    </linearGradient>
                    <filter id="agentShadow">
                        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
                    </filter>
                    <marker id="arrowFlow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                        <polygon points="0 0, 12 6, 0 12" fill="#F59E0B"/>
                    </marker>
                    <marker id="arrowHuman" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                        <polygon points="0 0, 12 6, 0 12" fill="#FF8800"/>
                    </marker>
                </defs>

                <text x="350" y="36" font-size="23" font-weight="700" fill="#111827" text-anchor="middle">{{svg1}}</text>

                <g filter="url(#agentShadow)">
                    <rect x="25" y="70" width="145" height="90" rx="16" fill="url(#planGrad)" stroke="#3B82F6" stroke-width="3"/>
                    <text x="97.5" y="108" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">{{svg2}}</text>
                    <text x="97.5" y="136" font-size="15" fill="rgba(255,255,255,0.95)" text-anchor="middle">{{svg3}}</text>
                </g>
                <path d="M 170,115 L 190,115" stroke="#F59E0B" stroke-width="2.5" fill="none" marker-end="url(#arrowFlow)"/>
                <g filter="url(#agentShadow)">
                    <rect x="190" y="70" width="145" height="90" rx="16" fill="url(#implementGrad)" stroke="#8B5CF6" stroke-width="3"/>
                    <text x="262.5" y="108" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">{{svg4}}</text>
                    <text x="262.5" y="136" font-size="15" fill="rgba(255,255,255,0.95)" text-anchor="middle">{{svg5}}</text>
                </g>
                <path d="M 335,115 L 355,115" stroke="#F59E0B" stroke-width="2.5" fill="none" marker-end="url(#arrowFlow)"/>
                <g filter="url(#agentShadow)">
                    <rect x="355" y="70" width="145" height="90" rx="16" fill="url(#workflowVerifyGrad)" stroke="#F59E0B" stroke-width="3"/>
                    <text x="427.5" y="108" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">{{svg6}}</text>
                    <text x="427.5" y="136" font-size="15" fill="rgba(255,255,255,0.95)" text-anchor="middle">{{svg7}}</text>
                </g>
                <path d="M 500,115 L 520,115" stroke="#F59E0B" stroke-width="2.5" fill="none" marker-end="url(#arrowFlow)"/>
                <g filter="url(#agentShadow)">
                    <rect x="520" y="70" width="145" height="90" rx="16" fill="url(#workflowTestGrad)" stroke="#10B981" stroke-width="3"/>
                    <text x="592.5" y="108" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="middle">{{svg8}}</text>
                    <text x="592.5" y="136" font-size="15" fill="rgba(255,255,255,0.95)" text-anchor="middle">{{svg9}}</text>
                </g>

                <path d="M 635,160 L 635,200 L 60,200 L 60,166" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="7,5" fill="none" marker-end="url(#arrowFlow)"/>
                <text x="345" y="226" font-size="15" font-weight="600" fill="#B45309" text-anchor="middle">{{svg10}}</text>

                <rect x="30" y="240" width="200" height="66" rx="14" fill="#FFF7ED" stroke="#FF8800" stroke-width="2.5"/>
                <text x="130" y="268" font-size="17" font-weight="700" fill="#111827" text-anchor="middle">{{svg11}}</text>
                <text x="130" y="292" font-size="15" fill="#374151" text-anchor="middle">{{svg12}}</text>
                <path d="M 130,240 L 130,166" stroke="#FF8800" stroke-width="2.5" fill="none" marker-end="url(#arrowHuman)"/>

                <rect x="460" y="240" width="200" height="66" rx="14" fill="#FFF7ED" stroke="#FF8800" stroke-width="2.5"/>
                <text x="560" y="268" font-size="17" font-weight="700" fill="#111827" text-anchor="middle">{{svg13}}</text>
                <text x="560" y="292" font-size="15" fill="#374151" text-anchor="middle">{{svg14}}</text>
                <path d="M 560,240 L 560,166" stroke="#FF8800" stroke-width="2.5" fill="none" marker-end="url(#arrowHuman)"/>
            </svg>
        </div>
      </div>
    </div>
  </section>
`);
