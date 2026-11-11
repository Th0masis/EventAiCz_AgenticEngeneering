/*
 * Agentic Bridge slide engine.
 *
 * Slides live in slides/<session>/<NN-name>/page.js and call Deck.slide(html).
 * The HTML is a language-neutral template: text is written as {{key}}.
 * The text itself lives next to it in slides/<session>/<NN-name>/lang.<lang>.js,
 * which calls I18N.strings({ key: "text" }). English is the source language
 * and the fallback for keys a translation does not have yet.
 * Language selection is shared with the rest of the site: see ../../shared/i18n.js.
 * Everything is loaded with <script> tags (not fetch) so the deck also works
 * when index.html is opened directly from disk (file://).
 */
(function () {
  "use strict";

  const registry = new Map();
  const t = (key, vars) => I18N.t(key, vars);
  const loc = (value) => I18N.loc(value);

  const Deck = {
    slide(html) {
      const script = document.currentScript;
      const id = script && script.dataset.slideId;
      if (!id) {
        console.error("Deck.slide() called outside of a slide script.");
        return;
      }
      registry.set(id, html);
    },
  };
  window.Deck = Deck;

  const state = {
    sessions: [],
    entries: [],
    slides: [],
    index: 0,
    step: 0,
    navOpen: false,
    observer: null,
  };

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => {
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key === "html") node.innerHTML = value;
      else node.setAttribute(key, value);
    });
    children.forEach((child) => child && node.appendChild(child));
    return node;
  };

  const loadScripts = (entries) =>
    Promise.all(
      entries.map(async (entry) => {
        const base = `slides/${entry.id}`;
        const [templateOk] = await Promise.all([
          I18N.loadScript(`${base}/page.js`, { slideId: entry.id }),
          I18N.loadStrings(entry.id, base),
        ]);
        if (!templateOk) entry.loadError = true;
      })
    );

  const errorSlide = (entry, reason) => {
    const section = el("section", { class: "slide" });
    section.innerHTML = `
      <header class="slide-header"><span class="eyebrow">${t("slideError")}</span><h2>${t("couldNotLoad")}</h2></header>
      <div class="slide-body"><div class="load-error">
        <p><strong>${entry.id}</strong></p>
        <p>${reason}</p>
        <p class="small">Expected file: <code>slides/${entry.id}/page.js</code> calling <code>Deck.slide(\`...\`)</code>.</p>
      </div></div>`;
    return section;
  };

  const buildSlide = (entry) => {
    const html = registry.get(entry.id);
    if (entry.loadError || html === undefined) {
      return errorSlide(entry, entry.loadError ? "The script file failed to load." : "The script did not register any HTML.");
    }
    const template = document.createElement("template");
    template.innerHTML = I18N.interpolate(entry.id, html).trim();
    const section = template.content.querySelector("section.slide");
    if (!section) return errorSlide(entry, "The HTML does not contain a <section class=\"slide\"> element.");
    return section;
  };

  const slideTitle = (section) => {
    if (section.dataset.title) return section.dataset.title;
    const heading = section.querySelector(".slide-header h2, h1, h2");
    const text = heading ? heading.textContent.replace(/\s+/g, " ").trim() : "";
    return text || t("untitled");
  };

  /* ---------------- Navigation ---------------- */

  const deckEl = () => document.querySelector("main.deck");
  const progressTrack = () => document.querySelector(".progress-track");
  const progressFill = () => document.querySelector(".progress-fill");
  const progressLabel = () => document.querySelector(".progress-label");

  const updateProgress = () => {
    const total = state.slides.length;
    const percent = ((state.index + 1) / total) * 100;
    progressFill().style.width = `${percent}%`;
    progressLabel().textContent = `${state.index + 1} / ${total}`;
    progressTrack().setAttribute("aria-valuenow", String(state.index + 1));
    progressTrack().setAttribute("aria-valuemax", String(total));
  };

  /*
   * Build steps (PowerPoint-like animations).
   * Any element with data-step="N" (N >= 1) takes part. Forward first advances
   * the step until none are left, then moves to the next slide. Classes set on
   * each element: step-pending (N > step), step-current (N == step),
   * step-done (N < step). Add class "fragment" to hide an element until its step.
   */
  const stepCount = (slide) =>
    [...slide.querySelectorAll("[data-step]")].reduce((max, el) => Math.max(max, Number(el.dataset.step) || 0), 0);

  const applySteps = (slide, step) => {
    slide.dataset.currentStep = String(step);
    slide.querySelectorAll("[data-step]").forEach((el) => {
      const n = Number(el.dataset.step) || 0;
      el.classList.toggle("step-pending", n > step);
      el.classList.toggle("step-current", n === step);
      el.classList.toggle("step-done", n < step);
    });
  };

  const setSlide = (index, { updateHash = true, step = 0 } = {}) => {
    const total = state.slides.length;
    if (!total) return;
    state.index = Math.max(0, Math.min(total - 1, index));
    state.slides.forEach((slide, idx) => {
      const active = idx === state.index;
      slide.classList.toggle("active", active);
      slide.inert = !active;
    });
    const current = state.slides[state.index];
    document.body.classList.toggle("front-slide-active", current.classList.contains("front-slide"));
    state.step = step === "last" ? stepCount(current) : step;
    applySteps(current, state.step);
    updateProgress();
    const entry = state.entries[state.index];
    try {
      localStorage.setItem("agenticBridgeSlide", entry.id);
    } catch (e) {
      /* storage may be unavailable on file:// in some browsers */
    }
    if (updateHash && decodeURIComponent(location.hash.slice(1)) !== entry.id) {
      history.replaceState(null, "", `#${entry.id}`);
    }
    document.title = `${entry.title} · Agentic Bridge`;
    highlightThumb();
  };

  const next = () => {
    const slide = state.slides[state.index];
    if (state.step < stepCount(slide)) {
      state.step += 1;
      applySteps(slide, state.step);
    } else if (state.index < state.slides.length - 1) {
      setSlide(state.index + 1);
    }
  };

  const previous = () => {
    const slide = state.slides[state.index];
    if (state.step > 0) {
      state.step -= 1;
      applySteps(slide, state.step);
    } else if (state.index > 0) {
      setSlide(state.index - 1, { step: "last" });
    }
  };

  const indexOfId = (id) => state.entries.findIndex((entry) => entry.id === id);

  const handleKey = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const target = event.target;
    if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
      case "PageDown":
      case " ":
        event.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        event.preventDefault();
        previous();
        break;
      case "Home":
        event.preventDefault();
        setSlide(0);
        break;
      case "End":
        event.preventDefault();
        setSlide(state.slides.length - 1);
        break;
      case "g":
      case "G":
        toggleNav();
        break;
      case "l":
      case "L":
        I18N.cycleLanguage();
        break;
      case "Escape":
        if (state.navOpen) toggleNav(false);
        break;
      default:
        break;
    }
  };

  const handleProgressClick = (event) => {
    const rect = progressTrack().getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    setSlide(Math.floor(percent * state.slides.length));
  };

  const createSessionMarkers = () => {
    const total = state.slides.length;
    state.sessions.forEach((session, sessionIndex) => {
      const first = state.entries.findIndex((entry) => entry.session === session.id);
      if (first < 0) return;
      const marker = el("div", {
        class: "session-marker",
        "data-label": `S${sessionIndex + 1}`,
        title: loc(session.title),
      });
      marker.style.left = `${(first / total) * 100}%`;
      progressTrack().appendChild(marker);
    });
  };

  /* ---------------- Navigator ---------------- */

  const navPanel = () => document.querySelector(".nav-panel");
  const navToggle = () => document.querySelector(".nav-toggle");

  const updateThumbMetrics = () => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const thumbW = vw < 700 ? 150 : 200;
    const scale = thumbW / vw;
    const root = document.documentElement;
    root.style.setProperty("--frame-w", `${vw}px`);
    root.style.setProperty("--frame-h", `${vh}px`);
    root.style.setProperty("--thumb-w", `${thumbW}px`);
    root.style.setProperty("--thumb-h", `${Math.round(vh * scale)}px`);
    root.style.setProperty("--thumb-scale", String(scale));
  };

  const renderThumb = (button) => {
    if (button.dataset.rendered) return;
    const index = Number(button.dataset.index);
    const clone = state.slides[index].cloneNode(true);
    clone.classList.remove("active");
    clone.removeAttribute("aria-label");
    clone.setAttribute("aria-hidden", "true");
    clone.inert = true;
    clone.querySelectorAll("[data-step]").forEach((el) => el.classList.remove("step-pending", "step-current", "step-done"));
    button.querySelector(".thumb-frame").appendChild(clone);
    button.dataset.rendered = "1";
  };

  const buildNavigator = () => {
    const panel = navPanel();
    const tabs = panel.querySelector(".nav-tabs");
    const body = panel.querySelector(".nav-body");

    state.sessions.forEach((session, sessionIndex) => {
      const tab = el("button", { class: "nav-tab", type: "button", "data-session": session.id, text: `S${sessionIndex + 1} · ${loc(session.short) || loc(session.title)}` });
      tab.addEventListener("click", () => {
        const group = body.querySelector(`[data-group="${session.id}"]`);
        if (group) body.scrollTop = group.offsetTop - body.offsetTop;
      });
      tabs.appendChild(tab);

      const grid = el("div", { class: "nav-grid" });
      const group = el("section", { class: "nav-group", "data-group": session.id }, [
        el("h3", { text: t("sessionHeading", { n: sessionIndex + 1, title: loc(session.title) }) }),
        grid,
      ]);
      state.entries.forEach((entry, index) => {
        if (entry.session !== session.id) return;
        const button = el("button", {
          class: "thumb",
          type: "button",
          "data-index": String(index),
          title: `${index + 1}. ${entry.title}`,
          "aria-label": t("goToSlide", { n: index + 1, title: entry.title }),
        }, [
          el("div", { class: "thumb-viewport" }, [el("div", { class: "thumb-frame" })]),
          el("span", { class: "thumb-label", html: `<b>${index + 1}</b>${entry.title.replace(/</g, "&lt;")}` }),
        ]);
        button.addEventListener("click", () => {
          setSlide(index);
          toggleNav(false);
        });
        grid.appendChild(button);
      });
      body.appendChild(group);
    });

    if ("IntersectionObserver" in window) {
      state.observer = new IntersectionObserver(
        (items) => items.forEach((item) => item.isIntersecting && renderThumb(item.target)),
        { root: body, rootMargin: "200px 0px" }
      );
      body.querySelectorAll(".thumb").forEach((thumb) => state.observer.observe(thumb));
    } else {
      body.querySelectorAll(".thumb").forEach(renderThumb);
    }

    panel.querySelector(".nav-close").addEventListener("click", () => toggleNav(false));
    navToggle().addEventListener("click", (event) => {
      event.stopPropagation();
      toggleNav();
    });
    document.addEventListener("click", (event) => {
      if (!state.navOpen) return;
      if (panel.contains(event.target) || navToggle().contains(event.target)) return;
      toggleNav(false);
    });
  };

  const highlightThumb = () => {
    const panel = navPanel();
    if (!panel) return;
    panel.querySelectorAll(".thumb.current").forEach((thumb) => thumb.classList.remove("current"));
    const current = panel.querySelector(`.thumb[data-index="${state.index}"]`);
    if (current) current.classList.add("current");
    const session = state.entries[state.index] && state.entries[state.index].session;
    panel.querySelectorAll(".nav-tab").forEach((tab) => tab.classList.toggle("current", tab.dataset.session === session));
    if (state.navOpen && current) current.scrollIntoView({ block: "nearest" });
  };

  const toggleNav = (force) => {
    const open = typeof force === "boolean" ? force : !state.navOpen;
    state.navOpen = open;
    const panel = navPanel();
    panel.classList.toggle("open", open);
    panel.setAttribute("aria-hidden", String(!open));
    panel.inert = !open;
    navToggle().setAttribute("aria-expanded", String(open));
    if (open) {
      highlightThumb();
      const current = panel.querySelector(".thumb.current");
      if (current) {
        renderThumb(current);
        current.scrollIntoView({ block: "center" });
        current.focus({ preventScroll: true });
      }
    } else if (panel.contains(document.activeElement)) {
      navToggle().focus();
    }
  };

  /* ---------------- Language ---------------- */

  const mountLanguageSelect = () => progressTrack().after(I18N.createSelect());

  /* ---------------- Init ---------------- */

  const initialIndex = () => {
    const fromHash = indexOfId(decodeURIComponent(location.hash.slice(1)));
    if (fromHash >= 0) return fromHash;
    try {
      const saved = indexOfId(localStorage.getItem("agenticBridgeSlide"));
      if (saved >= 0) return saved;
    } catch (e) {
      /* ignore */
    }
    return 0;
  };

  Deck.start = async (sessions) => {
    state.sessions = sessions;
    I18N.translateStatic();
    I18N.decorateLinks();
    state.entries = [];
    sessions.forEach((session) => {
      session.slides.forEach((id) => state.entries.push({ id, session: session.id }));
    });

    await loadScripts(state.entries);

    const deck = deckEl();
    state.entries.forEach((entry, index) => {
      const section = buildSlide(entry);
      section.dataset.slide = String(index);
      section.dataset.slideId = entry.id;
      section.dataset.session = entry.session;
      if (!section.hasAttribute("aria-label")) section.setAttribute("aria-label", t("slideN", { n: index + 1 }));
      entry.title = slideTitle(section);
      deck.appendChild(section);
      state.slides.push(section);
    });
    if (I18N.fallbackKeys) console.info(`${I18N.fallbackKeys} text(s) not yet translated to "${I18N.lang}"; showing English.`);

    updateThumbMetrics();
    createSessionMarkers();
    buildNavigator();
    mountLanguageSelect();
    toggleNav(false);
    setSlide(initialIndex());

    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", updateThumbMetrics);
    window.addEventListener("hashchange", () => {
      const index = indexOfId(decodeURIComponent(location.hash.slice(1)));
      if (index >= 0 && index !== state.index) setSlide(index, { updateHash: false });
    });
    progressTrack().addEventListener("click", handleProgressClick);
  };
})();
