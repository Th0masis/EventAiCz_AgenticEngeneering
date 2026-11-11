Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.1fr 0.9fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="tree"><span class="d">MyMachine/</span>                  <span class="n">{{note1}}</span>
├── <span class="a">AGENTS.md</span>               <span class="n">{{note2}}</span>
│                           <span class="n">  {{note3}}</span>
├── <span class="f">.gitignore</span>              <span class="n">{{note4}}</span>
├── <span class="f">.gitattributes</span>
├── <span class="d">.agents/skills/</span>         <span class="n">{{note5}}</span>
│   └── <span class="d">machine-sequence/</span>
│       └── <span class="a">SKILL.md</span>
├── <span class="d">Logical/</span>
├── <span class="d">Physical/</span>
└── <span class="f">MyMachine.apj</span></pre><p class="code-caption">{{codeCaption2}}</p><pre class="tree"><span class="d">agent tools</span>                <span class="n">{{note6}}</span>
├── <span class="d">as-skills</span>              <span class="n">  {{note7}}</span>
├── <span class="d">as CLI (as)</span>          <span class="n">  {{note8}}</span>
└── <span class="d">mappview-hmi-design-and-conversion</span></pre></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li><li>{{li3}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li4}}</li><li>{{li5}}</li></ul></div>
      </div>
    </section>
`);
