Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li></ul><p class="muted small">{{muted1}}</p></div><div class="text-pane"><span class="label">{{label2}}</span><table class="data-table"><thead><tr><th>{{th1}}</th><th>{{th2}}</th></tr></thead><tbody><tr><td>{{td1}}</td><td>{{td2}}</td></tr><tr><td>{{td3}}</td><td>{{td4}}</td></tr><tr><td>{{td5}}</td><td>{{td6}}</td></tr><tr><td>{{td7}}</td><td>{{td8}}</td></tr><tr><td>{{td9}}</td><td>{{td10}}</td></tr><tr><td>{{td11}}</td><td>{{td12}}</td></tr></tbody></table><pre class="tree"><span class="d">my-machine/</span>
├── <span class="a">AGENTS.md</span>          <span class="n">{{note1}}</span>
├── <span class="d">Logical/</span>
│   └── <span class="d">Motion/</span>
│       └── <span class="a">AGENTS.md</span>  <span class="n">{{note2}}</span>
├── <span class="d">Physical/</span>
└── <span class="f">MyMachine.apj</span></pre></div>
      </div>
    </section>
`);
