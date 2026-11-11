Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body" style="grid-template-rows: auto auto; align-content: start;">
    <div class="slide-body--ratio" style="display: grid; gap: clamp(1.5rem, 3vw, 3rem); --slide-ratio: 1fr 1fr;">
      <div class="text-pane">
        <span class="label">{{label1}}</span>
        <ul class="placeholder-copy">
          <li>{{li1}}</li>
          <li>{{li2}}</li>
          <li>{{li3}}</li>
          <li>{{li4}}</li>
        </ul>
      </div>
      <div class="text-pane">
        <span class="label">{{label2}}</span>
        <ul class="placeholder-copy">
          <li>{{li5}}</li>
          <li>{{li6}}</li>
          <li>{{li7}}</li>
        </ul>
      </div>
    </div>
    <div class="stack">
      <div class="flow">
        <div class="flow-step" data-step="1"><span class="num">1</span><h4>{{h41}}</h4><p>{{p2}}</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" data-step="2"><span class="num">2</span><h4>{{h42}}</h4><p>{{p3}}</p></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step" data-step="3"><span class="num">3</span><h4>{{h43}}</h4><p>{{p4}}</p></div>
      </div>
      <div class="alert">
        <strong>{{strong1}}</strong>
        <p>{{p5}}</p>
      </div>
    </div>
  </div>
</section>
`);
