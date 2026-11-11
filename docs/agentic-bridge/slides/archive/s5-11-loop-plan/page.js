Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.9fr 1.1fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li></ul><div class="alert"><strong>{{strong1}}</strong><p>{{p1}}</p></div></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="k">as</span> project status                 <span class="c">{{comment1}}</span>
<span class="k">as</span> config list                    <span class="c">{{comment2}}</span>
<span class="k">as</span> logical list                   <span class="c">{{comment3}}</span>
<span class="k">as</span> hardware module list           <span class="c">{{comment4}}</span>
<span class="k">as</span> config cpu                     <span class="c">{{comment5}}</span>
<span class="k">as</span> tp list                        <span class="c">{{comment6}}</span>
<span class="k">as</span> config schema list mappMotion  <span class="c">{{comment7}}</span>
<span class="k">as</span> config schema read .axis       <span class="c">{{comment8}}</span>
<span class="k">as</span> config read -f Physical/Config1/X20CP1686X/mappMotion/Config_1.axis
<span class="k">as</span> symbol search <span class="s">"axis"</span> --max 10   <span class="c">{{comment9}}</span></code></pre></div>
      </div>
    </section>
`);
