/*
 * UI text of the deck itself (navigator, buttons, error slides).
 * Slide content is not here: it lives next to each slide in slides/<session>/<NN-name>/lang.<lang>.js.
 * Add a language by adding an I18N.ui("<code>", { ... }) block with the same keys.
 * Missing keys fall back to English.
 */
I18N.ui("en", {
  home: "Home",
  homeTitle: "Return to presentation index",
  slideNavigator: "Slide navigator",
  closeNavigator: "Close slide navigator",
  openNavigator: "Open slide navigator (G)",
  slidesTitle: "Slides (G)",
  sessions: "Sessions",
  slideProgress: "Slide progress",
  language: "Language",
  sessionHeading: "Session {n} · {title}",
  goToSlide: "Go to slide {n}: {title}",
  slideN: "Slide {n}",
  untitled: "Untitled",
  slideError: "Slide error",
  couldNotLoad: "Could not load slide",
});

I18N.ui("de", {
  home: "Start",
  homeTitle: "Zurück zur Übersicht",
  slideNavigator: "Folienübersicht",
  closeNavigator: "Folienübersicht schließen",
  openNavigator: "Folienübersicht öffnen (G)",
  slidesTitle: "Folien (G)",
  sessions: "Sessions",
  slideProgress: "Folienfortschritt",
  language: "Sprache",
  sessionHeading: "Session {n} · {title}",
  goToSlide: "Zu Folie {n}: {title}",
  slideN: "Folie {n}",
  untitled: "Ohne Titel",
  slideError: "Folienfehler",
  couldNotLoad: "Folie konnte nicht geladen werden",
});

I18N.ui("it", {
  home: "Home",
  homeTitle: "Torna all'indice della presentazione",
  slideNavigator: "Navigatore delle slide",
  closeNavigator: "Chiudi il navigatore delle slide",
  openNavigator: "Apri il navigatore delle slide (G)",
  slidesTitle: "Slide (G)",
  sessions: "Sessioni",
  slideProgress: "Avanzamento delle slide",
  language: "Lingua",
  sessionHeading: "Sessione {n} · {title}",
  goToSlide: "Vai alla slide {n}: {title}",
  slideN: "Slide {n}",
  untitled: "Senza titolo",
  slideError: "Errore slide",
  couldNotLoad: "Impossibile caricare la slide",
});

I18N.ui("cs", {
  home: "Domů",
  homeTitle: "Zpět na přehled prezentací",
  slideNavigator: "Přehled snímků",
  closeNavigator: "Zavřít přehled snímků",
  openNavigator: "Otevřít přehled snímků (G)",
  slidesTitle: "Snímky (G)",
  sessions: "Sessions",
  slideProgress: "Průběh snímků",
  language: "Jazyk",
  sessionHeading: "Session {n} · {title}",
  goToSlide: "Přejít na snímek {n}: {title}",
  slideN: "Snímek {n}",
  untitled: "Bez názvu",
  slideError: "Chyba snímku",
  couldNotLoad: "Snímek se nepodařilo načíst",
});
