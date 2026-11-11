I18N.page(/* html */ `
<div class="page-shell">
    <!--top-nav-->

    <header class="hero">
      <div class="container hero-card slide-header">
        <div class="slide-header-title">
          <div class="eyebrow">{{eyebrow}}</div>
          <h1 class="page-title">{{pageTitle1}}</h1>
        </div>
        <div class="slide-header-copy">
          <p class="page-summary">{{pageSummary1}}</p>
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
            <div class="transformer-layout transformer-flow">
              <div class="transformer-col">
                <div class="transformer-col-label">{{transformerColLabel1}}</div>
                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel1}}</span>
                  <p class="helper" id="sentence-copy">-</p>
                </div>

                <div class="mini-panel">
                  <div class="summary-line">
                    <span class="meta-label">{{metaLabel2}}</span>
                    <strong id="focus-token">-</strong>
                  </div>
                  <div class="sequence-surface" style="margin-top: 0.9rem;">
                    <div class="sequence-wrap" id="attention-sequence"></div>
                  </div>
                  <p class="table-note">{{tableNote1}}</p>
                </div>
              </div>

              <div class="transformer-col">
                <div class="transformer-col-label">{{transformerColLabel2}}</div>
                <div class="mini-panel">
                  <div class="summary-line">
                    <span class="meta-label">{{metaLabel3}}</span>
                    <strong id="top-attended-token">-</strong>
                  </div>
                  <p class="helper" id="top-connection-copy" style="margin-top: 0.45rem;">-</p>
                  <div class="rank-list" id="top-attended-list"></div>
                </div>

                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel4}}</span>
                  <div class="attention-list" id="attention-list"></div>
                  <p class="helper" style="margin-top: 0.8rem;">{{helper1}}</p>
                </div>
              </div>

              <div class="transformer-col">
                <div class="transformer-col-label">{{transformerColLabel3}}</div>
                <div class="mini-panel">
                  <div class="summary-line">
                    <span class="meta-label">{{metaLabel5}}</span>
                    <strong id="updated-focus-label">-</strong>
                  </div>
                  <p class="helper" id="updated-vector-summary" style="margin-top: 0.45rem;">-</p>
                  <div class="attention-compare-grid" style="margin-top: 0.9rem;">
                    <div class="attention-stage-card">
                      <span class="meta-label">{{metaLabel6}}</span>
                      <div class="attention-stage-visual" id="before-attention-stage"></div>
                      <p class="attention-stage-note" id="before-attention-note">-</p>
                    </div>
                    <div class="attention-stage-card">
                      <span class="meta-label">{{metaLabel7}}</span>
                      <div class="attention-stage-visual" id="after-attention-stage"></div>
                      <p class="attention-stage-note" id="after-attention-note">-</p>
                    </div>
                  </div>
                  <div class="vector-shift-grid" id="vector-shift-grid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="mini-panel presentation-end-nav">
            <div class="presentation-end-actions">
              <a class="btn-primary presentation-next-link" href="#output-generation">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
`);
