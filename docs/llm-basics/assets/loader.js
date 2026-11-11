/*
 * AI Concepts Playground page loader.
 *
 * One shell (index.html) shows one page, chosen by the hash: index.html#tokenization.
 * A page is a folder next to index.html:
 *   <id>/page.js       template HTML, text written as {{key}}
 *   <id>/lang.<xx>.js  texts (English is the source and the fallback)
 *   <id>/script.js     optional: the page's interactive behavior (uses I18N.text("js.key"))
 * Changing the hash loads the other page, so every page starts from a clean state.
 * Language selection is shared with the rest of the site: see ../shared/i18n.js.
 */
(function () {
  "use strict";

  // Order of the top navigation and of the previous/next keys.
  const NAV_PAGES = ["overview", "what-is-an-llm", "tokenization", "embeddings", "transformer", "output-generation", "conclusion", "qa"];
  // Pages that have a script.js next to page.js.
  const SCRIPTED = new Set(["tokenization", "embeddings", "transformer"]);
  const DEFAULT_PAGE = "overview";

  const pageId = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    return /^[a-z][a-z0-9-]*$/.test(id) && (NAV_PAGES.includes(id) || id === "presentation-review") ? id : DEFAULT_PAGE;
  };

  const navHtml = (current) => {
    const links = NAV_PAGES.map((id) => `<a href="#${id}"${id === current ? ' class="active"' : ""}>${I18N.t(`nav.${id}`)}</a>`).join("\n          ");
    return `<nav class="top-nav">
      <div class="container">
        <a href="../index.html" class="back-to-home-btn">${I18N.t("home")}</a>
        <a class="brand" href="#overview">${I18N.t("brand")}</a>
        <div class="nav-links">
          ${links}
        </div>
      </div>
    </nav>`;
  };

  const mountLanguageSelect = () => {
    const select = I18N.createSelect();
    const container = document.querySelector(".top-nav .container");
    if (container) {
      container.appendChild(select);
    } else {
      select.classList.add("lang-select--floating");
      document.body.appendChild(select);
    }
  };

  // Previous/next page with the same keys as the Agentic Bridge deck.
  const bindKeys = (current) => {
    const index = NAV_PAGES.indexOf(current);
    if (index < 0) return;
    const goTo = (target) => {
      if (target >= 0 && target < NAV_PAGES.length) location.hash = NAV_PAGES[target];
    };
    window.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target;
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          event.preventDefault();
          goTo(index + 1);
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          event.preventDefault();
          goTo(index - 1);
          break;
        case "l":
        case "L":
          I18N.cycleLanguage();
          break;
        default:
          break;
      }
    });
  };

  const start = async () => {
    const id = pageId();
    const textId = `llm-basics/${id}`;
    let html;
    try {
      html = await I18N.loadPage(textId, id);
    } catch (error) {
      document.body.innerHTML = `<p style="padding:2rem">${error.message}</p>`;
      return;
    }
    I18N.use(textId);
    document.title = I18N.interpolate(textId, "{{docTitle}}").replace(/&amp;/g, "&");
    document.body.insertAdjacentHTML("afterbegin", html.replace("<!--top-nav-->", navHtml(id)));
    mountLanguageSelect();
    I18N.decorateLinks();
    if (SCRIPTED.has(id)) await I18N.loadScript(`${id}/script.js`);
    bindKeys(id);
    // A different hash means a different page; reloading starts it from scratch.
    window.addEventListener("hashchange", () => location.reload());
  };

  start();
})();
