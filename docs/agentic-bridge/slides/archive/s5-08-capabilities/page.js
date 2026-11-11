Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>

  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr;">
    <div class="text-pane"><table class="data-table" style="font-size: clamp(1rem, 1.05vw, 1.2rem);"><thead><tr><th>{{th1}}</th><th>{{th2}}</th><th>{{th3}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td><td><code>as project status</code></td></tr><tr><td>{{td3}}</td><td>{{td4}}</td><td><code>as logical add StProgram Conveyor --parent Machine</code></td></tr><tr><td>{{td5}}</td><td><code>hardware</code></td><td><code>as hardware module list</code></td></tr><tr><td>{{td6}}</td><td><code>config</code></td><td><code>as config schema read .axis</code></td></tr><tr><td>{{td7}}</td><td><code>mappview</code></td><td><code>as mappview widget add</code></td></tr><tr><td>{{td8}}</td><td><code>symbol</code></td><td><code>as symbol search motor</code></td></tr><tr><td>{{td9}}</td><td><code>build</code></td><td><code>as build --filter errors</code></td></tr><tr><td>{{td10}}</td><td><code>sim</code></td><td><code>as sim enable</code></td></tr><tr><td>{{td11}}</td><td><code>transfer</code></td><td><code>as transfer online --ip 10.0.0.1</code></td></tr><tr><td>{{td12}}</td><td><code>plc</code></td><td><code>as plc var read gLift.Status</code></td></tr><tr><td>{{td13}}</td><td><code>network</code></td><td><code>as network scan</code></td></tr></tbody></table><p class="muted small">{{muted1}}</p></div>
  </div>
</section>
`);
