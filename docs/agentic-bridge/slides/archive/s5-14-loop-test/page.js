Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>
      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.1fr 0.9fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="c">{{comment1}}</span>
<span class="k">as</span> sim enable                                 <span class="c">{{comment2}}</span>
<span class="k">as</span> build sim                                  <span class="c">{{comment3}}</span>

<span class="c">{{comment4}}</span>
<span class="k">as</span> plc connect --ip 127.0.0.1
<span class="k">as</span> plc var write gLift.Cmd.JogPositive --value 1
<span class="k">as</span> plc var read gLift.Status.ActPosition gLift.Status.Error
<span class="k">as</span> plc logbook read --level error --count 20   <span class="c">{{comment5}}</span></code></pre><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul></div><div class="stack">
          <span class="label" style="font-weight: 500; font-size: 1.425rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent);">{{label2}}</span>
          <div class="flow-step" data-step="1"><span class="num">1</span><h4>{{h41}}</h4><p>{{p1}}</p></div>
          <div class="flow-step" data-step="2"><span class="num">2</span><h4>{{h42}}</h4><p><code>as plc var read gLift.Cmd.JogPositive</code></p></div>
          <div class="flow-step" data-step="3"><span class="num">3</span><h4>{{h43}}</h4><p>{{p2}}</p></div>
          <div class="alert"><strong>{{strong1}}</strong><p>{{p3}}</p></div>
        </div>
      </div>
    </section>
`);
