I18N.page(/* html */ `
<div class="page-shell overview-shell">
    <!--top-nav-->

    <header class="hero">
      <div class="container hero-card overview-hero slide-header">
        <div class="slide-header-title">
          <div class="eyebrow">{{eyebrow}}</div>
          <h1 class="page-title">{{pageTitle1}}</h1>
        </div>
        <div class="slide-header-copy">
          <p class="page-summary">{{pageSummary1}}</p>
          <div class="pill-wrap presentation-pills">
            <span class="pill">{{pill1}}</span>
            <span class="pill">{{pill2}}</span>
            <span class="pill">{{pill3}}</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="basics">
        <div class="container">
          <div class="section-head">
            <h2>{{h21}}</h2>
          </div>

          <div class="mini-panel llm-definition">
            <span class="meta-label">{{metaLabel1}}</span>
            <p class="llm-definition-text">{{llmDefinitionText1}}</p>
          </div>

          <div class="card-grid llm-basics-grid">
            <article class="card stage-card llm-letter-card llm-letter-card--large">
              <div class="stage-card-top">
                <span class="llm-letter">{{llmLetter1}}</span>
                <span class="stage-index">1</span>
              </div>
              <h3>{{h31}}</h3>
              <p class="llm-letter-lead">{{llmLetterLead1}}</p>
              <p>{{p1}}</p>
              <div class="llm-scale" aria-label="{{aria}}">
                <div class="llm-scale-row"><span>{{span1}}</span><div class="llm-scale-bar"><i style="width: 0.4%;"></i></div><strong>{{strong1}}</strong></div>
                <div class="llm-scale-row"><span>{{span2}}</span><div class="llm-scale-bar"><i style="width: 43%;"></i></div><strong>{{strong2}}</strong></div>
                <div class="llm-scale-row"><span>{{span3}}</span><div class="llm-scale-bar"><i style="width: 100%;"></i></div><strong>{{strong3}}</strong></div>
              </div>
            </article>

            <article class="card stage-card llm-letter-card">
              <div class="stage-card-top">
                <span class="llm-letter">{{llmLetter2}}</span>
                <span class="stage-index">2</span>
              </div>
              <h3>{{h32}}</h3>
              <p class="llm-letter-lead">{{llmLetterLead2}}</p>
              <p>{{p2}}</p>
            </article>

            <article class="card stage-card llm-letter-card">
              <div class="stage-card-top">
                <span class="llm-letter">{{llmLetter3}}</span>
                <span class="stage-index">3</span>
              </div>
              <h3>{{h33}}</h3>
              <p class="llm-letter-lead">{{llmLetterLead3}}</p>
              <p>{{p3}}</p>
            </article>

            <article class="card stage-card llm-letter-card">
              <div class="stage-card-top">
                <span class="llm-letter small">{{llmLetter4}}</span>
                <span class="stage-index">4</span>
              </div>
              <h3>{{h34}}</h3>
              <p class="llm-letter-lead">{{llmLetterLead4}}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="mini-panel presentation-end-nav">
            <div class="presentation-end-actions">
              <a class="btn-primary presentation-next-link" href="#tokenization">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`);
