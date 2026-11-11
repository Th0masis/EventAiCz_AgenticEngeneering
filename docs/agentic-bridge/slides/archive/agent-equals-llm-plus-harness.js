Deck.slide(/* html */ `
    <section class="slide" aria-label="Concept: Agent = LLM + Harness">
      <header class="slide-header">
        <span class="eyebrow">Agentic engineering</span>
        <h2>Concept: Agent = LLM + Harness</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1.1fr;">
        <div class="text-pane"><span class="label">LLM: the reasoning engine</span><ul class="placeholder-copy"><li>A statistical "autocomplete" that predicts the most likely next token. On its own it is stateless and can't take any action.</li><li><span class="muted">e.g. GPT, Claude, Gemini, Mistral, Qwen …</span></li></ul><span class="label">Harness: the runtime around it</span><ul class="placeholder-copy"><li>Builds the context, calls tools, asks for permissions, manages sessions and decides when to stop.</li><li><span class="muted">e.g. GitHub Copilot, Claude Code, Codex, Cursor, OpenCode …</span></li></ul><span class="label">Tools: what the agent can do</span><ul class="placeholder-copy"><li>File edits, terminal and CLI tools, HTTP APIs, MCP servers, language servers (LSP).</li><li><span class="muted">B&amp;R: as-cli, B&amp;R MCP servers, Structured Text language server</span></li></ul><span class="label">Customizations: what you add</span><ul class="placeholder-copy"><li>AGENTS.md, skills, custom agents and commands, bundled as plugins.</li><li><span class="muted">B&amp;R: Automation Studio skills, agents and templates</span></li></ul></div><div class="image-pane">
<svg viewBox="0 0 640 440" style="width: 100%; height: auto; display: block; font-family: 'ABBvoice', sans-serif;" role="img" aria-label="An agent is an LLM inside a harness, connected to tools, customizations and the user">
  <defs>
    <linearGradient id="s105-llm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#A78BFA"/><stop offset="100%" stop-color="#7C3AED"/></linearGradient>
    <linearGradient id="s105-tools" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#2DD4BF"/><stop offset="100%" stop-color="#0F766E"/></linearGradient>
    <linearGradient id="s105-cust" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFB366"/><stop offset="100%" stop-color="#FF8800"/></linearGradient>
    <linearGradient id="s105-user" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#64748B"/><stop offset="100%" stop-color="#334155"/></linearGradient>
    <filter id="s105-shadow"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-opacity="0.25"/></filter>
    <marker id="s105-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><polygon points="0 0, 10 5, 0 10" fill="#475569"/></marker>
  </defs>

  <g filter="url(#s105-shadow)">
    <rect x="150" y="18" width="340" height="74" rx="14" fill="url(#s105-cust)"/>
    <text x="320" y="44" font-size="16.32" font-weight="700" fill="#fff" text-anchor="middle">🧩 Customizations</text>
    <text x="320" y="63" font-size="11.52" fill="rgba(255,255,255,0.92)" text-anchor="middle">AGENTS.md · skills · agents</text>
    <text x="320" y="80" font-size="11.52" fill="rgba(255,255,255,0.92)" text-anchor="middle">plugins · harness settings</text>
  </g>
  <line x1="320" y1="94" x2="320" y2="118" stroke="#475569" stroke-width="2" marker-end="url(#s105-arrow)"/>

  <rect x="130" y="122" width="380" height="228" rx="22" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="8,5"/>
  <text x="320" y="150" font-size="15.36" font-weight="700" fill="#334155" text-anchor="middle">⚙️ Harness</text>
  <text x="320" y="170" font-size="11.04" fill="#64748b" text-anchor="middle">context · tools · permissions · sessions</text>

  <g filter="url(#s105-shadow)">
    <rect x="235" y="190" width="170" height="80" rx="14" fill="url(#s105-llm)"/>
    <text x="320" y="224" font-size="19.2" font-weight="700" fill="#fff" text-anchor="middle">🧠 LLM</text>
    <text x="320" y="248" font-size="11.52" fill="rgba(255,255,255,0.9)" text-anchor="middle">predicts the next token</text>
  </g>
  <text x="320" y="300" font-size="11.52" fill="#64748b" text-anchor="middle">context window · memory · sessions</text>
  <text x="320" y="322" font-size="11.52" fill="#64748b" text-anchor="middle">Copilot · Claude Code · Codex · Cursor</text>

  <g filter="url(#s105-shadow)">
    <rect x="10" y="196" width="120" height="74" rx="14" fill="url(#s105-tools)"/>
    <text x="70" y="226" font-size="15.36" font-weight="700" fill="#fff" text-anchor="middle">🛠️ Tools</text>
    <text x="70" y="248" font-size="10.56" fill="rgba(255,255,255,0.92)" text-anchor="middle">files · CLI · MCP</text>
  </g>
  <line x1="158" y1="222" x2="134" y2="222" stroke="#475569" stroke-width="2" marker-end="url(#s105-arrow)"/>
  <line x1="134" y1="246" x2="158" y2="246" stroke="#475569" stroke-width="2" marker-end="url(#s105-arrow)"/>

  <g filter="url(#s105-shadow)">
    <rect x="510" y="196" width="120" height="74" rx="14" fill="url(#s105-user)"/>
    <text x="570" y="226" font-size="15.36" font-weight="700" fill="#fff" text-anchor="middle">👤 You</text>
    <text x="570" y="248" font-size="10.56" fill="rgba(255,255,255,0.92)" text-anchor="middle">goals · approvals</text>
  </g>
  <line x1="506" y1="222" x2="482" y2="222" stroke="#475569" stroke-width="2" marker-end="url(#s105-arrow)"/>
  <line x1="482" y1="246" x2="506" y2="246" stroke="#475569" stroke-width="2" marker-end="url(#s105-arrow)"/>

  <text x="320" y="400" font-size="21.12" font-weight="800" fill="#111827" text-anchor="middle">Agent = LLM + Harness</text>
  <text x="320" y="424" font-size="12.48" fill="#64748b" text-anchor="middle">(tools + memory + orchestration)</text>
</svg>
</div>
      </div>
    </section>
`);
