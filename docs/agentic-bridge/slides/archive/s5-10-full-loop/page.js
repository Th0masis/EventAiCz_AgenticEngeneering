Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body full-loop" style="align-content: center;">
    <div class="flow">
      <div class="flow-step" data-step="1">
        <span class="num">1</span><h4>{{h41}}</h4>
        <p>{{p1}}</p>
        <p><code>as project status</code><br /><code>as config schema read .axis</code></p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step" data-step="2">
        <span class="num">2</span><h4>{{h42}}</h4>
        <p>{{p2}}</p>
        <p><code>as logical add StProgram …</code><br /><code>as config set -f …</code></p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step" data-step="3">
        <span class="num">3</span><h4>{{h43}}</h4>
        <p>{{p3}}</p>
        <p><code>as build --filter errors</code></p>
      </div>
      <div class="flow-arrow">→</div>
      <div class="flow-step" data-step="4">
        <span class="num">4</span><h4>{{h44}}</h4>
        <p>{{p4}}</p>
        <p><code>as build sim</code><br /><code>as plc var write/read</code></p>
      </div>
    </div>
    <div class="alert">
      <strong>{{strong1}}</strong>
      <p>{{p5}}</p>
    </div>
  </div>
</section>
`);
