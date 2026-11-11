Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.05fr 0.95fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="k">as</span> <span class="y">logical</span> <span class="y">add</span> <span class="s">StProgram</span> <span class="s">Conveyor</span> <span class="h">--parent Machine</span> <span class="h">--format json</span>
│  │       │   │         │        │               └─ {{diag1}}
│  │       │   │         │        └─ {{diag2}}
│  │       │   └─────────┴─ {{diag3}}
│  │       └─ {{diag4}}
│  └─ {{diag5}}
└─ {{diag6}}</code></pre><p class="code-caption">{{codeCaption2}}</p><pre class="code"><code><span class="k">as</span> --help                    <span class="c">{{comment1}}</span>
<span class="k">as</span> help build                <span class="c">{{comment2}}</span>
<span class="k">as</span> build pip update --help   <span class="c">{{comment3}}</span>
<span class="k">as</span> --version</code></pre></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li3}}</li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li></ul></div>
      </div>
    </section>
`);
