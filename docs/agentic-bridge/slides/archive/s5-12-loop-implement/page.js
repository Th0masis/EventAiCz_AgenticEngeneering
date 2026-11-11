Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.1fr 0.9fr;">
        <div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="c">{{comment1}}</span>
<span class="k">as</span> logical add StProgram LiftJog --parent Machine

<span class="c">{{comment2}}</span>
<span class="k">as</span> tp add mappMotion &lt;VERSION&gt;
<span class="k">as</span> library add MpBase

<span class="c">{{comment3}}</span>
<span class="k">as</span> mappview widget add --file &lt;page.content&gt; <span class="s">'{"type":"Button", …}'</span>
<span class="k">as</span> mappview binding add --file &lt;page.binding&gt; <span class="s">'{"mode":"oneWay", …}'</span>

<span class="c">{{comment4}}</span>
<span class="k">as</span> logical undo</code></pre></div><div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li3}}</li><li>{{li4}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li5}}</li></ul></div>
      </div>
    </section>
`);
