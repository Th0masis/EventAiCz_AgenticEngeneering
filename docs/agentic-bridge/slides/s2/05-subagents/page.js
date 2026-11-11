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
            <li>{{li3}}</li>
            <li>{{li4}}</li>
            <li>{{li5}}</li>
          </ul>
          <span class="label">{{label2}}</span>
          <ul class="placeholder-copy">
            <li>{{li6}}</li>
            <li>{{li7}}</li>
            <li>{{li8}}</li>
          </ul>
          <span class="label">{{label3}}</span>
          <ul class="placeholder-copy">
            <li>{{li9}}</li>
            <li>{{li10}}</li>
            <li>{{li11}}</li>
          </ul>
        </div>
        <div class="image-pane">
          <svg viewBox="0 0 400 380" style="width: 100%; height: auto; display: block;">
            <defs>
              <linearGradient id="mainSessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#475569;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#334155;stop-opacity:1" />
              </linearGradient>
              <linearGradient id="subGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#A78BFA;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
              </linearGradient>
              <filter id="subShadow">
                <feDropShadow dx="0" dy="3" stdDeviation="5" flood-opacity="0.3"/>
              </filter>
            </defs>

            <text x="200" y="25" font-size="15.36" font-weight="700" fill="#111827" text-anchor="middle">{{svg1}}</text>

            <g filter="url(#subShadow)">
              <rect x="40" y="45" width="320" height="200" rx="16" fill="url(#mainSessGrad)" stroke="#475569" stroke-width="2"/>
              <text x="200" y="75" font-size="14.4" font-weight="700" fill="#F1F5F9" text-anchor="middle">{{svg2}}</text>

              <g>
                <rect x="60" y="95" width="85" height="55" rx="8" fill="url(#subGrad)" stroke="#8B5CF6" stroke-width="2"/>
                <text x="102" y="118" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg3}}</text>
                <text x="102" y="135" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg4}}</text>
              </g>
              <g>
                <rect x="157" y="95" width="85" height="55" rx="8" fill="url(#subGrad)" stroke="#8B5CF6" stroke-width="2"/>
                <text x="199" y="118" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg5}}</text>
                <text x="199" y="135" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg6}}</text>
              </g>
              <g>
                <rect x="254" y="95" width="85" height="55" rx="8" fill="url(#subGrad)" stroke="#8B5CF6" stroke-width="2"/>
                <text x="296" y="118" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg7}}</text>
                <text x="296" y="135" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg8}}</text>
              </g>

              <path d="M102,150 L102,175 L200,175" fill="none" stroke="#A78BFA" stroke-width="2"/>
              <path d="M199,150 L199,175" fill="none" stroke="#A78BFA" stroke-width="2"/>
              <path d="M296,150 L296,175 L200,175" fill="none" stroke="#A78BFA" stroke-width="2"/>

              <rect x="140" y="185" width="120" height="35" rx="6" fill="rgba(167,139,250,0.3)" stroke="#A78BFA" stroke-width="1"/>
              <text x="200" y="208" font-size="10.56" font-weight="600" fill="#A78BFA" text-anchor="middle">{{svg9}}</text>
            </g>

            <text x="200" y="270" font-size="11.52" font-weight="600" fill="#8c92a3" text-anchor="middle">{{svg10}}</text>

            <g filter="url(#subShadow)">
              <rect x="40" y="290" width="90" height="50" rx="8" fill="#3B82F6" stroke="#2563EB" stroke-width="2"/>
              <text x="85" y="313" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg11}}</text>
              <text x="85" y="328" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg12}}</text>
            </g>
            <g filter="url(#subShadow)">
              <rect x="155" y="290" width="90" height="50" rx="8" fill="#FF8C42" stroke="#FF6B35" stroke-width="2"/>
              <text x="200" y="313" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg13}}</text>
              <text x="200" y="328" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg14}}</text>
            </g>
            <g filter="url(#subShadow)">
              <rect x="270" y="290" width="90" height="50" rx="8" fill="#8B5CF6" stroke="#7C3AED" stroke-width="2"/>
              <text x="315" y="313" font-size="10.56" font-weight="600" fill="#FFF" text-anchor="middle">{{svg15}}</text>
              <text x="315" y="328" font-size="8.64" fill="rgba(255,255,255,0.8)" text-anchor="middle">{{svg16}}</text>
            </g>

            <path d="M120,245 L85,290" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
            <path d="M200,245 L200,290" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
            <path d="M280,245 L315,290" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,3"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
`);
