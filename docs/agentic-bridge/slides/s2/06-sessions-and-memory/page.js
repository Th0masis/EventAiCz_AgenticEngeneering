Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
    <p>{{p1}}</p>
  </header>
  <div class="slide-body">
    <div class="slide-body--ratio" style="display: grid; gap: clamp(1.5rem, 3vw, 3rem); --slide-ratio: 1fr 1fr; align-content: start;">
      <div class="text-pane">
        <span class="label">{{label1}}</span>
        <ul class="placeholder-copy">
          <li>{{li1}}</li>
          <li>{{li2}}</li>
        </ul>
        <span class="label">{{label2}}</span>
        <ul class="placeholder-copy">
          <li>{{li3}}</li>
          <li>{{li4}}</li>
          <li>{{li5}}</li>
        </ul>
      </div>
      <div class="text-pane">
        <span class="label">{{label3}}</span>
        <ul class="placeholder-copy">
          <li>{{li6}}</li>
          <li>{{li7}}</li>
        </ul>
        <span class="label">{{label4}}</span>
        <ul class="placeholder-copy">
          <li>{{li8}}</li>
          <li>{{li9}}</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`);
