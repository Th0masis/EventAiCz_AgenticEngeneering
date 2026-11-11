Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
    <div class="text-pane">
      <p class="code-caption">{{codeCaption1}}</p>
      <pre class="code"><code><span class="k">as</span> build --filter errors          <span class="c">{{comment1}}</span>
<span class="k">as</span> build rebuild                  <span class="c">{{comment2}}</span>
<span class="k">as</span> build clean                    <span class="c">{{comment3}}</span></code></pre>
      <span class="label" style="margin-top: 1rem;">{{label1}}</span>
      <ul class="placeholder-copy">
        <li>{{li1}}</li>
        <li>{{li2}}</li>
      </ul>
      <span class="label">{{label2}}</span>
      <ul class="placeholder-copy">
        <li>{{li3}}</li>
        <li>{{li4}}</li>
      </ul>
    </div>
    <div class="stack">
      <div class="flow-step" data-step="1"><span class="num">{{num1}}</span><h4>{{h41}}</h4><p><code>as build --filter errors</code></p></div>
      <div class="flow-step" data-step="2"><span class="num">{{num2}}</span><h4>{{h42}}</h4><p>{{p1}}</p></div>
      <div class="flow-step" data-step="3"><span class="num">{{num3}}</span><h4>{{h43}}</h4><p>{{p2}}</p></div>
      <div class="flow-step" data-step="4"><span class="num">{{num4}}</span><h4>{{h44}}</h4><p>{{p3}}</p></div>
    </div>
  </div>
</section>
`);
