I18N.page(/* html */ `
<div class="page-shell output-shell">
    <!--top-nav-->

    <header class="hero">
      <div class="container hero-card slide-header">
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
            <span class="pill">{{pill4}}</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="flow">
        <div class="container">
          <div class="section-head">
            <h2>{{h21}}</h2>
            <p>{{p1}}</p>
          </div>

          <div class="panel">
            <div class="output-step-grid flow-arrows">
              <article class="mini-panel output-step-card">
                <div class="output-step-head">
                  <span class="output-step-index">1</span>
                  <h3>{{h31}}</h3>
                </div>
                <p class="helper">{{helper1}}</p>
                <div class="signal-stack">
                  <span class="signal-chip strong">{{signalChip1}}</span>
                  <span class="signal-chip strong">{{signalChip2}}</span>
                  <span class="signal-chip">{{signalChip3}}</span>
                  <span class="signal-chip">{{signalChip4}}</span>
                </div>
              </article>

              <article class="mini-panel output-step-card">
                <div class="output-step-head">
                  <span class="output-step-index">2</span>
                  <h3>{{h32}}</h3>
                </div>
                <p class="helper">{{helper2}}</p>
                <div class="signal-stack">
                  <span class="signal-chip strong">{{signalChip5}}</span>
                  <span class="signal-chip mid">{{signalChip6}}</span>
                  <span class="signal-chip mid">{{signalChip7}}</span>
                </div>
              </article>

              <article class="mini-panel output-step-card">
                <div class="output-step-head">
                  <span class="output-step-index">3</span>
                  <h3>{{h33}}</h3>
                </div>
                <p class="helper">{{helper3}}</p>
                <div class="answer-strip">
                  <span class="answer-pill active">{{answerPill1}}</span>
                  <span class="answer-pill">{{answerPill2}}</span>
                  <span class="answer-pill">{{answerPill3}}</span>
                </div>
              </article>

              <article class="mini-panel output-step-card">
                <div class="output-step-head">
                  <span class="output-step-index">4</span>
                  <h3>{{h34}}</h3>
                </div>
                <p class="helper">{{helper4}}</p>
                <div class="answer-card">{{answerCard1}}</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid-2 output-outcome-grid">
            <div class="mini-panel output-lane grounded">
              <div class="output-lane-head">
                <span class="meta-label">{{metaLabel1}}</span>
                <p class="helper takeaway-intro">{{helper5}}</p>
              </div>
              <div class="output-lane-pair">
                <div>
                  <span class="meta-label">{{metaLabel2}}</span>
                  <div class="answer-card">{{answerCard2}}</div>
                </div>
                <div>
                  <span class="meta-label">{{metaLabel3}}</span>
                  <div class="answer-card">{{answerCard3}}</div>
                </div>
              </div>
              <div class="takeaway-list output-lane-takeaways">
                <div class="takeaway-item">{{takeawayItem1}}</div>
                <div class="takeaway-item">{{takeawayItem2}}</div>
                <div class="takeaway-item">{{takeawayItem3}}</div>
              </div>
            </div>

            <div class="mini-panel output-lane risk">
              <div class="output-lane-head">
                <span class="meta-label">{{metaLabel4}}</span>
                <p class="helper takeaway-intro">{{helper6}}</p>
              </div>
              <div class="output-lane-pair">
                <div>
                  <span class="meta-label">{{metaLabel5}}</span>
                  <div class="answer-card">{{answerCard4}}</div>
                </div>
                <div>
                  <span class="meta-label">{{metaLabel6}}</span>
                  <div class="answer-card">{{answerCard5}}</div>
                </div>
              </div>
              <div class="takeaway-list output-lane-takeaways">
                <div class="takeaway-item">{{takeawayItem4}}</div>
                <div class="takeaway-item">{{takeawayItem5}}</div>
                <div class="takeaway-item">{{takeawayItem6}}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="mini-panel presentation-end-nav">
            <div class="presentation-end-actions">
              <a class="btn-primary presentation-next-link" href="#conclusion">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`);
