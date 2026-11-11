Deck.slide(/* html */ `
<section class="slide" aria-label="{{aria}}">
  <header class="slide-header">
    <span class="eyebrow">{{eyebrow}}</span>
    <h2>{{title}}</h2>
  </header>
  <div class="slide-body slide-body--ratio" style="--slide-ratio: 1.1fr 0.9fr;">
    <div class="text-pane">
      <ul class="placeholder-copy" style="line-height: 1.7;">
        <li>{{li1}}</li>
        <li>{{li2}}</li>
        <li>{{li3}}</li>
        <li>{{li4}}</li>
      </ul>
    </div>
    <div class="text-pane">
      <span class="label">{{label1}}</span>
      <pre class="code" style="white-space: pre-wrap; margin-bottom: 1rem;"><code>{{prompt1}}</code></pre>
      <span class="label">{{label2}}</span>
      <ul class="placeholder-copy">
        <li>{{li5}}</li>
        <li>{{li6}}</li>
      </ul>
    </div>
  </div>
</section>
`);
