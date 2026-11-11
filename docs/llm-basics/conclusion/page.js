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
          <div class="pill-wrap presentation-pills">
            <span class="pill">{{pill1}}</span>
            <span class="pill">{{pill2}}</span>
            <span class="pill">{{pill3}}</span>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section" id="why">
        <div class="container">
          <div class="section-head">
            <h2>{{h21}}</h2>
            <p>{{p1}}</p>
          </div>

          <div class="card-grid conclusion-flow flow-arrows">
            <article class="card">
              <h3>{{h31}}</h3>
              <p>{{p2}}</p>
            </article>
            <article class="card">
              <h3>{{h32}}</h3>
              <p>{{p3}}</p>
            </article>
            <article class="card">
              <h3>{{h33}}</h3>
              <p>{{p4}}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid-2 conclusion-takeaways">
            <div class="mini-panel">
              <span class="meta-label">{{metaLabel1}}</span>
              <div class="takeaway-list">
                <div class="takeaway-item">{{takeawayItem1}}</div>
                <div class="takeaway-item">{{takeawayItem2}}</div>
                <div class="takeaway-item">{{takeawayItem3}}</div>
              </div>
            </div>

            <div class="mini-panel">
              <span class="meta-label">{{metaLabel2}}</span>
              <div class="takeaway-list">
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
              <a class="btn-primary presentation-next-link" href="#qa">{{btnPrimary1}}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
`);
