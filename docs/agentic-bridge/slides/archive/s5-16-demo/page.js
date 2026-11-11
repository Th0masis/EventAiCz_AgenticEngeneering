Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.9fr 1.1fr;">
    <div class="text-pane">
      <ol class="placeholder-copy">
        <li>{{li1}}</li>
        <li>{{li2}}</li>
        <li>{{li3}}</li>
        <li>{{li4}}</li>
      </ol>
    </div>
    <div class="demo-pane">
      <h3>{{h31}}</h3>
      <p>{{p1}}</p>
    </div>
  </div>
</section>
`);
