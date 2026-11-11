const tr = (key, vars) => I18N.text(key, vars);

const sceneButtons = document.getElementById('embedding-scene-buttons');
const vectorLegend = document.getElementById('vector-legend');
const vectorMatrix = document.getElementById('embedding-vector-matrix');
const sceneTitle = document.getElementById('embedding-scene-title');
const sceneCopy = document.getElementById('embedding-scene-copy');
const analogyMap = document.getElementById('embedding-analogy-map');
const mapModeToggle = document.getElementById('embedding-map-mode');
const mapGuide = document.getElementById('embedding-map-guide');
const mapNote = document.getElementById('embedding-map-note');
const metrics = document.getElementById('embedding-metrics');
const takeaways = document.getElementById('embedding-takeaways');
const vectorDetails = document.getElementById('embedding-vector-details');
const relationDetails = document.getElementById('embedding-relation-details');

const dimensions = ['Person', 'Evidence', 'Diagnosis', 'Action'];

const dimensionGuides = [
  { label: tr('js.dim.person'), rgb: '38, 38, 38', ink: '#262626' },
  { label: tr('js.dim.evidence'), rgb: '255, 136, 0', ink: '#262626' },
  { label: tr('js.dim.diagnosis'), rgb: '110, 110, 110', ink: '#262626' },
  { label: tr('js.dim.action'), rgb: '255, 169, 71', ink: '#262626' }
];

const words = [
  {
    word: 'customer',
    color: '#262626',
    ink: '#262626',
    rgb: '38, 38, 38',
    vector: [0.96, 0.18, 0.08, 0.10]
  },
  {
    word: 'support',
    color: '#6E6E6E',
    ink: '#262626',
    rgb: '110, 110, 110',
    vector: [0.92, 0.16, 0.24, 0.16]
  },
  {
    word: 'logger',
    color: '#FF8800',
    ink: '#262626',
    rgb: '255, 136, 0',
    vector: [0.12, 0.96, 0.22, 0.08]
  },
  {
    word: 'trace',
    color: '#FFA947',
    ink: '#262626',
    rgb: '255, 169, 71',
    vector: [0.10, 0.88, 0.42, 0.14]
  }
];

const wordLookup = Object.fromEntries(words.map((item) => [item.word, item]));

const scenes = [
  {
    id: 'person-pair',
    label: tr('js.scene.person.label'),
    title: tr('js.scene.person.title'),
    copy: tr('js.scene.person.copy'),
    focusWords: ['customer', 'support'],
    focusPairs: [['customer', 'support']],
    takeaways: [
      tr('js.scene.person.takeaway1'),
      tr('js.scene.person.takeaway2')
    ],
    metrics() {
      const distance = euclideanDistance(wordLookup.customer.vector, wordLookup.support.vector);
      const similarity = cosineSimilarity(wordLookup.customer.vector, wordLookup.support.vector);
      return [
        { label: tr('js.metric.gap'), value: formatNumber(distance) },
        { label: tr('js.metric.similarity'), value: formatPercent(similarity) },
        { label: tr('js.metric.sharedSignal'), value: tr('js.dim.person') }
      ];
    }
  },
  {
    id: 'evidence-pair',
    label: tr('js.scene.evidence.label'),
    title: tr('js.scene.evidence.title'),
    copy: tr('js.scene.evidence.copy'),
    focusWords: ['logger', 'trace'],
    focusPairs: [['logger', 'trace']],
    takeaways: [
      tr('js.scene.evidence.takeaway1'),
      tr('js.scene.evidence.takeaway2')
    ],
    metrics() {
      const distance = euclideanDistance(wordLookup.logger.vector, wordLookup.trace.vector);
      const similarity = cosineSimilarity(wordLookup.logger.vector, wordLookup.trace.vector);
      return [
        { label: tr('js.metric.gap'), value: formatNumber(distance) },
        { label: tr('js.metric.similarity'), value: formatPercent(similarity) },
        { label: tr('js.metric.mainDifference'), value: tr('js.dim.diagnosis') }
      ];
    }
  },
  {
    id: 'before-attention',
    label: tr('js.scene.before.label'),
    title: tr('js.scene.before.title'),
    copy: tr('js.scene.before.copy'),
    focusWords: ['customer', 'support', 'logger', 'trace'],
    focusPairs: [['customer', 'support'], ['logger', 'trace']],
    takeaways: [
      tr('js.scene.before.takeaway1'),
      tr('js.scene.before.takeaway2')
    ],
    metrics() {
      return [
        { label: tr('js.metric.personPair'), value: 'customer ↔ support' },
        { label: tr('js.metric.evidencePair'), value: 'logger ↔ trace' },
        { label: tr('js.metric.nextStep'), value: tr('js.metric.nextStepValue') }
      ];
    }
  }
];

let currentScene = scenes[0];

function formatNumber(value) {
  return value.toFixed(2);
}

function formatPercent(value) {
  const scaled = Math.max(0, Math.min(99.9, value * 100));
  return scaled.toFixed(1) + '%';
}

function euclideanDistance(left, right) {
  return Math.sqrt(left.reduce((sum, value, index) => sum + ((value - right[index]) ** 2), 0));
}

function cosineSimilarity(left, right) {
  const dot = left.reduce((sum, value, index) => sum + (value * right[index]), 0);
  const magnitudeLeft = Math.sqrt(left.reduce((sum, value) => sum + (value ** 2), 0));
  const magnitudeRight = Math.sqrt(right.reduce((sum, value) => sum + (value ** 2), 0));
  return dot / ((magnitudeLeft * magnitudeRight) || 1);
}

function subtractVectors(left, right) {
  return left.map((value, index) => value - right[index]);
}

function getDimensionGuide(index) {
  return dimensionGuides[index];
}

// Oblique (cabinet) projection of a point in a sample 3D embedding space.
// Person -> X (right), Evidence -> Y (depth), Diagnosis -> Z (height).
const MAP = {
  originX: 120,
  originY: 300,
  scaleX: 250,
  scaleZ: 240,
  depthX: 120,
  depthY: 90
};

function project3D(x, y, z) {
  return {
    x: MAP.originX + (x * MAP.scaleX) + (y * MAP.depthX),
    y: MAP.originY - (z * MAP.scaleZ) - (y * MAP.depthY)
  };
}

function projectWord(word) {
  return project3D(word.vector[0], word.vector[1], word.vector[2]);
}

function projectFloor(word) {
  return project3D(word.vector[0], word.vector[1], 0);
}

// Original 2D neighborhood projection (kept for the toggle).
function projectPoint2D(word) {
  const x = Math.max(0.10, Math.min(0.92, 0.12 + word.vector[2] * 0.60 + word.vector[3] * 0.18));
  const y = Math.max(0.12, Math.min(0.90, 0.16 + word.vector[0] * 0.56 + word.vector[1] * 0.18));
  return { x, y };
}

const mapModes = [
  {
    id: '3d',
    label: tr('js.map.3d.label'),
    title: tr('js.map.3d.title'),
    desc: tr('js.map.3d.desc'),
    chips: [
      { text: tr('js.map.3d.chip1') },
      { text: tr('js.map.3d.chip2'), soft: true }
    ],
    note: tr('js.map.3d.note')
  },
  {
    id: '2d',
    label: tr('js.map.2d.label'),
    title: tr('js.map.2d.title'),
    desc: tr('js.map.2d.desc'),
    chips: [
      { text: tr('js.map.2d.chip1') },
      { text: tr('js.map.2d.chip2'), soft: true }
    ],
    note: tr('js.map.2d.note')
  }
];

let currentMapMode = mapModes[0];

function renderSceneButtons() {
  sceneButtons.innerHTML = '';

  scenes.forEach((scene) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = scene.label;
    button.classList.toggle('active', scene.id === currentScene.id);
    button.addEventListener('click', () => {
      currentScene = scene;
      render();
    });
    sceneButtons.appendChild(button);
  });
}

function renderLegend() {
  vectorLegend.innerHTML = '';

  dimensionGuides.forEach((dimension) => {
    const pill = document.createElement('span');
    pill.className = 'legend-chip';
    pill.innerHTML = '<span class="legend-dot" style="background:' + 'rgb(' + dimension.rgb + ')' + '"></span>' + dimension.label;
    vectorLegend.appendChild(pill);
  });
}

function renderMatrix() {
  vectorMatrix.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'matrix-row matrix-header';
  header.innerHTML = '<span class="matrix-header-token">' + tr('js.matrix.token') + '</span>' + dimensionGuides.map((dimension) => '<span class="matrix-column-label" style="background: rgba(' + dimension.rgb + ', 0.12); border-color: rgba(' + dimension.rgb + ', 0.18); color: ' + dimension.ink + ';">' + dimension.label + '</span>').join('');
  vectorMatrix.appendChild(header);

  words.forEach((entry) => {
    const row = document.createElement('div');
    const isFocus = currentScene.focusWords.includes(entry.word);
    const maxValue = Math.max(...entry.vector);
    row.className = 'matrix-row' + (isFocus ? ' is-focus' : '');

    const nameAlpha = isFocus ? '0.18' : '0.08';
    const nameBorder = isFocus ? '0.28' : '0.14';
    const nameCell = '<span class="matrix-name" style="background: rgba(' + entry.rgb + ', ' + nameAlpha + '); border-color: rgba(' + entry.rgb + ', ' + nameBorder + '); color: ' + entry.ink + '; opacity: ' + (isFocus ? '1' : '0.74') + ';"><strong>' + entry.word + '</strong></span>';

    const valueCells = entry.vector.map((value, index) => {
      const guide = getDimensionGuide(index);
      const backgroundAlpha = ((isFocus ? 0.14 : 0.08) + (value * 0.44)).toFixed(2);
      const borderAlpha = ((isFocus ? 0.22 : 0.12) + (value * 0.18)).toFixed(2);
      const textColor = guide.ink;
      const peakClass = value === maxValue ? ' matrix-cell-peak' : '';
      const opacity = isFocus ? '1' : '0.78';

      return '<span class="matrix-cell-number' + peakClass + '" style="background: rgba(' + guide.rgb + ', ' + backgroundAlpha + '); border-color: rgba(' + guide.rgb + ', ' + borderAlpha + '); color: ' + textColor + '; opacity: ' + opacity + ';">' + formatNumber(value) + '</span>';
    }).join('');

    row.innerHTML = nameCell + valueCells;
    vectorMatrix.appendChild(row);
  });

  vectorDetails.innerHTML = words
    .map((entry) => entry.word + ' = [' + entry.vector.map((value) => formatNumber(value)).join(', ') + ']')
    .join('<br>');

  relationDetails.innerHTML = [
    'support - customer = [' + subtractVectors(wordLookup.support.vector, wordLookup.customer.vector).map((value) => formatNumber(value)).join(', ') + ']',
    'trace - logger = [' + subtractVectors(wordLookup.trace.vector, wordLookup.logger.vector).map((value) => formatNumber(value)).join(', ') + ']',
    tr('js.relation.loggerTraceSimilarity', { value: formatNumber(cosineSimilarity(wordLookup.logger.vector, wordLookup.trace.vector)) })
  ].join('<br>');
}

function renderMapToggle() {
  mapModeToggle.innerHTML = '';

  mapModes.forEach((mode) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-mode-btn';
    button.textContent = mode.label;
    button.setAttribute('aria-pressed', mode.id === currentMapMode.id ? 'true' : 'false');
    button.classList.toggle('active', mode.id === currentMapMode.id);
    button.addEventListener('click', () => {
      currentMapMode = mode;
      render();
    });
    mapModeToggle.appendChild(button);
  });
}

function renderMapGuide() {
  mapGuide.innerHTML = currentMapMode.chips
    .map((chip) => '<span class="semantic-chip' + (chip.soft ? ' semantic-chip-soft' : '') + '">' + chip.text + '</span>')
    .join('');
  mapNote.textContent = currentMapMode.note;
}

function renderMap3D() {
  const origin = project3D(0, 0, 0);

  const a11y = '<title id="embedding-map-title">' + currentMapMode.title + '</title>'
    + '<desc id="embedding-map-desc">' + currentMapMode.desc + '</desc>';

  const defs = '<defs>'
    + '<marker id="embedding-axis-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">'
    + '<path d="M0,0 L9,4.5 L0,9 Z" class="embedding-axis-arrow-head" />'
    + '</marker>'
    + '</defs>';

  // Floor grid on the Person/Evidence plane (height = 0) to convey depth.
  const grid = [0, 0.5, 1].map((t) => {
    const xa = project3D(0, t, 0);
    const xb = project3D(1, t, 0);
    const ya = project3D(t, 0, 0);
    const yb = project3D(t, 1, 0);
    return '<line x1="' + xa.x + '" y1="' + xa.y + '" x2="' + xb.x + '" y2="' + xb.y + '" class="embedding-grid-line" />'
      + '<line x1="' + ya.x + '" y1="' + ya.y + '" x2="' + yb.x + '" y2="' + yb.y + '" class="embedding-grid-line" />';
  }).join('');

  const xEnd = project3D(1.06, 0, 0);
  const yEnd = project3D(0, 1.08, 0);
  const zEnd = project3D(0, 0, 1.05);
  const axes = [
    '<line x1="' + origin.x + '" y1="' + origin.y + '" x2="' + xEnd.x + '" y2="' + xEnd.y + '" class="embedding-axis" marker-end="url(#embedding-axis-arrow)" />',
    '<line x1="' + origin.x + '" y1="' + origin.y + '" x2="' + yEnd.x + '" y2="' + yEnd.y + '" class="embedding-axis" marker-end="url(#embedding-axis-arrow)" />',
    '<line x1="' + origin.x + '" y1="' + origin.y + '" x2="' + zEnd.x + '" y2="' + zEnd.y + '" class="embedding-axis" marker-end="url(#embedding-axis-arrow)" />',
    '<text x="' + (xEnd.x + 6) + '" y="' + (xEnd.y + 16) + '" class="embedding-axis-label">' + tr('js.dim.person') + '</text>',
    '<text x="' + (yEnd.x + 8) + '" y="' + (yEnd.y - 6) + '" class="embedding-axis-label">' + tr('js.dim.evidence') + '</text>',
    '<text x="' + zEnd.x + '" y="' + (zEnd.y - 10) + '" text-anchor="middle" class="embedding-axis-label">' + tr('js.dim.diagnosis') + '</text>',
    '<circle cx="' + origin.x + '" cy="' + origin.y + '" r="3" class="embedding-origin" />'
  ].join('');

  // Dashed drop lines from each tip down to the floor plane.
  const drops = words.map((entry) => {
    const tip = projectWord(entry);
    const base = projectFloor(entry);
    const muted = currentScene.focusWords.includes(entry.word) ? '' : ' muted-point';
    return '<g class="embedding-point-group' + muted + '">'
      + '<line x1="' + tip.x + '" y1="' + tip.y + '" x2="' + base.x + '" y2="' + base.y + '" class="embedding-drop" />'
      + '<circle cx="' + base.x + '" cy="' + base.y + '" r="3" class="embedding-floor-dot" />'
      + '</g>';
  }).join('');

  const connectors = currentScene.focusPairs.map(([leftKey, rightKey]) => {
    const left = projectWord(wordLookup[leftKey]);
    const right = projectWord(wordLookup[rightKey]);
    return '<line x1="' + left.x + '" y1="' + left.y + '" x2="' + right.x + '" y2="' + right.y + '" class="embedding-link" />';
  }).join('');

  const points = words.map((entry) => {
    const tip = projectWord(entry);
    const muted = currentScene.focusWords.includes(entry.word) ? '' : ' muted-point';
    return [
      '<g class="embedding-point-group' + muted + '">',
      '<line x1="' + origin.x + '" y1="' + origin.y + '" x2="' + tip.x + '" y2="' + tip.y + '" class="embedding-vector" style="stroke: ' + entry.color + ';" />',
      '<circle cx="' + tip.x + '" cy="' + tip.y + '" r="9" fill="' + entry.color + '" class="embedding-point" />',
      '<text x="' + tip.x + '" y="' + (tip.y - 16) + '" text-anchor="middle" class="embedding-label">' + entry.word + '</text>',
      '</g>'
    ].join('');
  }).join('');

  analogyMap.innerHTML = a11y + defs + grid + axes + drops + connectors + points;
}

function renderMap2D() {
  const a11y = '<title id="embedding-map-title">' + currentMapMode.title + '</title>'
    + '<desc id="embedding-map-desc">' + currentMapMode.desc + '</desc>';

  const zones = [
    '<ellipse cx="134" cy="154" rx="108" ry="58" class="embedding-zone embedding-zone-people" />',
    '<text x="48" y="104" class="embedding-zone-label">' + tr('js.zone.people') + '</text>',
    '<ellipse cx="174" cy="252" rx="124" ry="56" class="embedding-zone embedding-zone-evidence" />',
    '<text x="286" y="318" text-anchor="middle" class="embedding-zone-label">' + tr('js.zone.evidence') + '</text>'
  ].join('');

  const connectors = currentScene.focusPairs.map(([leftKey, rightKey]) => {
    const left = projectPoint2D(wordLookup[leftKey]);
    const right = projectPoint2D(wordLookup[rightKey]);
    return '<line x1="' + (left.x * 520) + '" y1="' + (360 - left.y * 280) + '" x2="' + (right.x * 520) + '" y2="' + (360 - right.y * 280) + '" class="embedding-link" />';
  }).join('');

  const points = words.map((entry) => {
    const point = projectPoint2D(entry);
    const x = point.x * 520;
    const y = 360 - point.y * 280;
    const muted = currentScene.focusWords.includes(entry.word) ? '' : ' muted-point';
    return [
      '<g class="embedding-point-group' + muted + '">',
      '<circle cx="' + x + '" cy="' + y + '" r="18" fill="' + entry.color + '" class="embedding-point" />',
      '<text x="' + x + '" y="' + (y - 26) + '" text-anchor="middle" class="embedding-label">' + entry.word + '</text>',
      '</g>'
    ].join('');
  }).join('');

  analogyMap.innerHTML = a11y + zones + connectors + points;
}

function renderMap() {
  renderMapGuide();
  if (currentMapMode.id === '2d') {
    renderMap2D();
  } else {
    renderMap3D();
  }
}

function renderMetrics() {
  metrics.innerHTML = '';

  currentScene.metrics().forEach((item) => {
    const card = document.createElement('div');
    card.className = 'metric-card';
    card.innerHTML = '<span>' + item.label + '</span><strong>' + item.value + '</strong>';
    metrics.appendChild(card);
  });
}

function renderTakeaways() {
  takeaways.innerHTML = '';
  currentScene.takeaways.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'takeaway-item';
    row.textContent = item;
    takeaways.appendChild(row);
  });
}

function render() {
  renderSceneButtons();
  renderMapToggle();
  renderLegend();
  renderMatrix();
  renderMap();
  renderMetrics();
  renderTakeaways();
  sceneTitle.textContent = currentScene.title;
  sceneCopy.textContent = currentScene.copy;
}

render();
