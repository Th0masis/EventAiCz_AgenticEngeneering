Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>
        <p>{{p1}}</p>
      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.95fr 1.05fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li><li>{{li2}}</li><li>{{li3}}</li><li>{{li4}}</li><li>{{li5}}</li></ul></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code>---
<span class="y">name</span>: <span class="s">Code Review</span>
<span class="y">description</span>: <span class="s">Perform a comprehensive code review comparing the
  current branch against the default branch.</span>
<span class="y">argument-hint</span>: <span class="s">Optional - specify focus areas or files to review</span>
---
Perform a complete code review on the current branch compared to
origin/main (or the default branch). Focus on the following categories:

<span class="h">## Security &amp; Vulnerabilities</span>
- OWASP Top 10 vulnerabilities
- Data leakage risks
…</code></pre><div class="alert"><strong>{{strong1}}</strong><p>{{p2}}</p></div></div>
      </div>
    </section>
`);
