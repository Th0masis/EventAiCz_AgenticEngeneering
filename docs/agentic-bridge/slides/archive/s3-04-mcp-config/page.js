Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>
        <p>{{p1}}</p>
      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.25fr 0.75fr;">
        <div class="text-pane"><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th><th>{{th3}}</th><th>{{th4}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td><td>{{td3}}</td><td><code>servers</code></td></tr><tr><td>{{td4}}</td><td><code>.mcp.json</code></td><td><code>~/.claude.json</code></td><td><code>mcpServers</code></td></tr><tr><td>{{td5}}</td><td>–</td><td><code>~/.copilot/mcp-config.json</code></td><td><code>mcpServers</code></td></tr><tr><td>{{td6}}</td><td>{{td7}}</td><td><code>~/.codex/config.toml</code></td><td><code>[mcp_servers.&lt;name&gt;]</code></td></tr></tbody></table><pre class="code"><code>{
  <span class="y">"mcpServers"</span>: {
    <span class="y">"bnr"</span>: {
      <span class="y">"type"</span>: <span class="s">"http"</span>,
      <span class="y">"url"</span>: <span class="s">"https://app-prod-bnr-as-copilot-api.azurewebsites.net/mcp/"</span>,
      <span class="y">"headers"</span>: {
        <span class="y">"Authorization"</span>: <span class="s">"Bearer &lt;your JWT token&gt;"</span>
      }
    }
  }
}</code></pre></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li3}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li>{{li5}}</li></ul></div>
      </div>
    </section>
`);
