Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1.05fr 1.1fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li><strong>{{strong1}}</strong></li><li>{{li5}}</li></ul></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="tree"><span class="d">as-skills/</span>
├── <span class="a">plugin.json</span>
├── <span class="f">README.md</span>
├── <span class="d">agents/</span>
│   └── <span class="f">as-project.agent.md</span>
├── <span class="d">commands/</span>
│   └── <span class="f">branch-code-review.md</span>
└── <span class="d">skills/</span>
    ├── <span class="d">structured-text/</span>
    ├── <span class="d">ansi-c/</span>
    └── <span class="n">{{note1}}</span></pre><pre class="code"><code>{
  <span class="y">"name"</span>: <span class="s">"as-skills"</span>,
  <span class="y">"version"</span>: <span class="s">"0.1.0"</span>,
  <span class="y">"skills"</span>: [<span class="s">"./skills/"</span>],
  <span class="y">"agents"</span>: [<span class="s">"./agents/as-project.agent.md"</span>],
  <span class="y">"commands"</span>: [<span class="s">"./commands/"</span>]
}</code></pre></div><div class="text-pane"><span class="label">{{label3}}</span><table class="data-table" style="font-size: clamp(0.95rem, 1vw, 1.1rem);"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td><code>/plugin marketplace add owner/repo</code><br /><code>/plugin install name@market</code></td></tr><tr><td>{{td2}}</td><td><code>copilot plugin marketplace add owner/repo</code><br /><code>copilot plugin install name@market</code><br /><code>copilot plugin update name</code></td></tr><tr><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td></tr></tbody></table></div>
      </div>
    </section>
`);
