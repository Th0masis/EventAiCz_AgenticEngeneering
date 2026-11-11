Deck.slide(/* html */ `
<section class="slide slide--why-cli" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body" style="align-content: start;">
    <div class="grid grid-3">
      <div class="card card--br">
        <h3>{{h31}}</h3>
        <ul>
          <li>{{c1}}</li>
          <li>{{c2}}</li>
          <li>{{c3}}</li>
        </ul>
      </div>
      <div class="card card--std">
        <h3>{{h32}}</h3>
        <ul>
          <li>{{t1}}</li>
          <li>{{t2}}</li>
          <li>{{t3}}</li>
        </ul>
      </div>
      <div class="card card--accent">
        <h3>{{h33}}</h3>
        <ul>
          <li>{{w1}}</li>
          <li>{{w2}}</li>
          <li>{{w3}}</li>
        </ul>
        <p class="card-subhead">{{w4}}</p>
        <ul>
          <li>{{w5}}</li>
        </ul>
      </div>
    </div>
    <div class="flow">
      <div class="flow-step"><span class="num">1</span><h4>{{looph41}}</h4><p>{{loopp1}}</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><span class="num">2</span><h4>{{looph42}}</h4><p>{{loopp2}}</p></div>
      <div class="flow-arrow">→</div>
      <div class="flow-step"><span class="num">3</span><h4>{{looph43}}</h4><p>{{loopp3}}</p></div>
      <div class="flow-arrow">↺</div>
      <div class="flow-step"><span class="num">4</span><h4>{{looph44}}</h4><p>{{loopp4}}</p></div>
    </div>
    <blockquote class="quote">{{quote1}}</blockquote>
  </div>
</section>
`);
