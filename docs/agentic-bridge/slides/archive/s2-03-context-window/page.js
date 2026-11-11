Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
    <header class="slide-header">
      <span class="eyebrow">{{eyebrow}}</span>
      <h2>{{title}}</h2>
    </header>
    <div class="slide-body">
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 1fr 1fr;">
        <div class="text-pane">
        <span class="label">{{label1}}</span>
          <ul class="placeholder-copy">
            <li>{{li1}}</li>
            <li>{{li2}}</li>
            <li>{{li3}}</li>
            <li>{{li4}}</li>
            <li>{{li5}}</li>
        </ul>
      </div>
        <div class="image-pane">
          <img src="images/ContextWindow.png" alt="{{alt1}}" style="width: 100%; height: 100%; object-fit: contain; display: block;" />
      </div>
      </div>
    </div>
  </section>
`);
