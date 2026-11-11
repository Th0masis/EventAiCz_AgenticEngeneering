I18N.page(/* html */ `
<div class="page-shell embeddings-shell">
    <!--top-nav-->

    <header class="hero">
      <div class="container hero-card embeddings-hero slide-header">
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
      <section class="section" id="demo">
        <div class="container">
          <div class="section-head">
            <h2>{{h21}}</h2>
            <p>{{p1}}</p>
          </div>

          <div class="panel">
            <div class="embedding-toolbar">
              <div class="button-row" id="embedding-scene-buttons" aria-label="{{aria}}"></div>
              <div class="map-mode-toggle" id="embedding-map-mode" role="group" aria-label="{{aria2}}"></div>
            </div>

            <div class="embedding-analogy-layout">
              <div class="embedding-left-stack">
                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel1}}</span>
                  <p class="helper">{{helper1}}</p>
                  <div class="vector-legend" id="vector-legend"></div>
                  <div class="table-wrap analogy-table-wrap">
                    <div class="analogy-matrix" id="embedding-vector-matrix"></div>
                  </div>
                </div>

                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel2}}</span>
                  <p class="helper takeaway-intro">{{helper2}}</p>
                  <div class="takeaway-list" id="embedding-takeaways"></div>

                  <details class="embedding-advanced">
                    <summary>{{summary1}}</summary>
                    <div class="grid-2" style="margin-top: 0.9rem;">
                      <div>
                        <span class="meta-label">{{metaLabel3}}</span>
                        <div class="vector-block" id="embedding-vector-details"></div>
                      </div>
                      <div>
                        <span class="meta-label">{{metaLabel4}}</span>
                        <div class="vector-block" id="embedding-relation-details"></div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              <div class="mini-panel">
                <div class="summary-line">
                  <span class="meta-label">{{metaLabel5}}</span>
                  <strong id="embedding-scene-title">-</strong>
                </div>
                <p class="helper" id="embedding-scene-copy" style="margin-top: 0.35rem;">-</p>
                <div class="embedding-map-controls">
                  <div class="embedding-map-guide" id="embedding-map-guide"></div>
                </div>
                <div class="embedding-visual-frame">
                  <svg id="embedding-analogy-map" viewBox="0 0 520 360" role="img" aria-labelledby="embedding-map-title embedding-map-desc">
                    <title id="embedding-map-title">{{svg1}}</title>
                    <desc id="embedding-map-desc">{{svg2}}</desc>
                  </svg>
                </div>
                <p class="helper embedding-map-note" id="embedding-map-note">-</p>
                <div class="metric-strip" id="embedding-metrics"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="mini-panel presentation-end-nav">
            <div class="presentation-end-actions">
              <a class="btn-primary presentation-next-link" href="#transformer">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
`);
