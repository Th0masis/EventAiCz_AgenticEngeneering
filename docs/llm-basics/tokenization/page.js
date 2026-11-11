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

          <div class="panel tokenization-layout">
            <div class="tokenization-controls">
              <div>
                <label class="field-label" for="token-input">{{fieldLabel1}}</label>
                <textarea id="token-input">I am the customer on a B&amp;R case. I shared the logger output with the support engineer. After reviewing it, tell me whether the trace is still needed.</textarea>
              </div>

              <div class="button-row" id="token-examples">
                <button type="button" data-text="I am the customer on a B&amp;R case. I shared the logger output with the support engineer. After reviewing it, tell me whether the trace is still needed." class="active">{{active1}}</button>
                <button type="button" data-text="Can you help with my B&amp;R issue?">{{button1}}</button>
                <button type="button" data-text="I am the customer on a B&amp;R case. I shared the logger output with the support engineer. After reviewing it, tell me whether the trace is still needed and what I should send next.">{{button2}}</button>
              </div>

              <div class="toolbar-grid token-control-grid">
                <div class="mini-panel">
                  <span class="field-label">{{fieldLabel2}}</span>
                  <div class="toggle-row" id="token-mode">
                    <button type="button" data-mode="word" class="active">{{active2}}</button>
                    <button type="button" data-mode="frequency">{{button3}}</button>
                  </div>
                </div>
                <div class="mini-panel">
                  <div class="summary-line">
                    <span class="field-label">{{fieldLabel3}}</span>
                    <span class="microcopy">{{microcopy1}}</span>
                  </div>
                  <input id="budget-slider" type="range" min="4" max="48" step="1" value="18">
                </div>
              </div>

              <div class="mini-panel">
                <span class="meta-label">{{metaLabel1}}</span>
                <div class="takeaway-list">
                  <div class="takeaway-item">{{takeawayItem1}}</div>
                  <div class="takeaway-item">{{takeawayItem2}}</div>
                </div>
              </div>
            </div>

            <div class="tokenization-results">
              <div class="stats-grid">
                <div class="stat-card">
                  <strong id="token-count">0</strong>
                  <span>{{span1}}</span>
                </div>
                <div class="stat-card">
                  <strong id="visible-count">0</strong>
                  <span>{{span2}}</span>
                </div>
                <div class="stat-card">
                  <strong id="overflow-count">0</strong>
                  <span>{{span3}}</span>
                </div>
                <div class="stat-card">
                  <strong id="budget-status">{{strong1}}</strong>
                  <span>{{span4}}</span>
                </div>
              </div>

              <div class="meter"><span id="budget-meter"></span></div>

              <div>
                <span class="meta-label">{{metaLabel2}}</span>
                <div class="token-stream" id="context-token-stream"></div>
              </div>
            </div>

            <details class="mini-panel tokenization-advanced">
              <summary>{{summary1}}</summary>
              <div class="algorithm-grid" style="margin-top: 0.8rem;">
                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel3}}</span>
                  <div class="pill-wrap" id="normalized-words"></div>
                </div>
                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel4}}</span>
                  <div class="pill-wrap" id="top-pairs"></div>
                </div>
                <div class="mini-panel">
                  <span class="meta-label">{{metaLabel5}}</span>
                  <div class="pill-wrap" id="merge-list"></div>
                </div>
              </div>
              <div style="margin-top: 0.8rem;">
                <span class="meta-label">{{metaLabel6}}</span>
                <div class="token-stream" id="all-token-stream"></div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="mini-panel presentation-end-nav">
            <div class="presentation-end-actions">
              <a class="btn-primary presentation-next-link" href="#embeddings">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
`);
