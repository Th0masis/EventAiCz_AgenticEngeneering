I18N.page(/* html */ `
  <header>
    <h1>{{title}}</h1>
  </header>

  <div class="cards">
    <a class="card card--llm" href="llm-basics/index.html">
      <span class="card-accent"></span>
      <div class="card-icon">
        <!-- Brain / LLM icon -->
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C20 8 12 17 12 28c0 7 3.5 12.5 9 16v8a4 4 0 004 4h14a4 4 0 004-4v-8c5.5-3.5 9-9 9-16 0-11-8-20-20-20z" stroke="#0f766e" stroke-width="2.5" fill="rgba(15,118,110,0.08)"/>
          <path d="M24 56h16M26 60h12" stroke="#0f766e" stroke-width="2" stroke-linecap="round"/>
          <circle cx="26" cy="28" r="3" fill="#0f766e" opacity="0.6"/>
          <circle cx="38" cy="28" r="3" fill="#2563eb" opacity="0.6"/>
          <path d="M26 28l6 8 6-8" stroke="#0f766e" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
        </svg>
      </div>
      <h2>{{llmTitle}}</h2>
      <p>{{llmText}}</p>
      <span class="cta">{{cta1}}</span>
    </a>

    <a class="card card--bridge" href="agentic-bridge/index.html">
      <span class="card-accent"></span>
      <div class="card-icon">
        <img src="agentic-bridge/assets/agentic-bridge-icon-256.png" alt="{{logoAlt}}" style="width: 104px; height: 104px;">
      </div>
      <h2>{{bridgeTitle}}</h2>
      <p>{{bridgeText}}</p>
      <span class="cta">{{cta2}}</span>
    </a>
  </div>
`);
