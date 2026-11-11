const tr = (key, vars) => I18N.text(key, vars);

const sentenceCopy = document.getElementById('sentence-copy');
const focusToken = document.getElementById('focus-token');
const sequence = document.getElementById('attention-sequence');
const topAttended = document.getElementById('top-attended-token');
const topConnectionCopy = document.getElementById('top-connection-copy');
const topAttendedList = document.getElementById('top-attended-list');
const attentionList = document.getElementById('attention-list');
const attentionTotal = document.getElementById('attention-total');
const updatedFocusLabel = document.getElementById('updated-focus-label');
const updatedVectorSummary = document.getElementById('updated-vector-summary');
const vectorShiftGrid = document.getElementById('vector-shift-grid');
const beforeAttentionStage = document.getElementById('before-attention-stage');
const afterAttentionStage = document.getElementById('after-attention-stage');
const beforeAttentionNote = document.getElementById('before-attention-note');
const afterAttentionNote = document.getElementById('after-attention-note');

const dimensions = ['person', 'evidence', 'diagnosis', 'action'];

function dimensionLabel(id) {
  return tr('js.dim.' + id);
}

const dimensionVisuals = [
  { id: 'person', color: '#262626', x: 72, y: 76, labelAbove: true },
  { id: 'evidence', color: '#FF8800', x: 208, y: 76, labelAbove: true },
  { id: 'diagnosis', color: '#6E6E6E', x: 72, y: 170 },
  { id: 'action', color: '#FFA947', x: 208, y: 170 }
];

function joinList(items) {
  return new Intl.ListFormat(I18N.lang, { style: 'long', type: 'conjunction' }).format(items);
}

const semanticStageBox = { width: 280, height: 240 };

function semanticBubbleRadius(value) {
  return 20 + (value * 18);
}

const model = {
  sentence: 'I am the customer on a B&R case. I shared the logger output with the support engineer. After reviewing it, tell me whether the trace is still needed.',
  tokens: [
    { label: 'I', role: 'person', lemma: 'i' },
    { label: 'am', role: 'connector', lemma: 'be' },
    { label: 'the', role: 'article', lemma: 'the' },
    { label: 'customer', role: 'customer', lemma: 'customer' },
    { label: 'on', role: 'connector', lemma: 'on' },
    { label: 'a', role: 'article', lemma: 'a' },
    { label: 'B&R', role: 'evidence', lemma: 'b&r' },
    { label: 'case', role: 'diagnosis', lemma: 'case' },
    { label: '.', role: 'punctuation', lemma: '.' },
    { label: 'I', role: 'person', lemma: 'i' },
    { label: 'shared', role: 'report', lemma: 'share' },
    { label: 'the', role: 'article', lemma: 'the' },
    { label: 'logger', role: 'evidence', lemma: 'logger' },
    { label: 'output', role: 'evidence', lemma: 'output' },
    { label: 'with', role: 'connector', lemma: 'with' },
    { label: 'the', role: 'article', lemma: 'the' },
    { label: 'support', role: 'support', lemma: 'support' },
    { label: 'engineer', role: 'engineer', lemma: 'engineer' },
    { label: '.', role: 'punctuation', lemma: '.' },
    { label: 'After', role: 'connector', lemma: 'after' },
    { label: 'reviewing', role: 'analysis', lemma: 'review' },
    { label: 'it', role: 'evidence', lemma: 'it' },
    { label: ',', role: 'punctuation', lemma: ',' },
    { label: 'tell', role: 'action', lemma: 'tell' },
    { label: 'me', role: 'person', lemma: 'me' },
    { label: 'whether', role: 'connector', lemma: 'whether' },
    { label: 'the', role: 'article', lemma: 'the' },
    { label: 'trace', role: 'evidence', lemma: 'trace' },
    { label: 'is', role: 'connector', lemma: 'be' },
    { label: 'still', role: 'connector', lemma: 'still' },
    { label: 'needed', role: 'diagnosis', lemma: 'need' },
    { label: '.', role: 'punctuation', lemma: '.' }
  ],
  defaultIndex: 16,
  focusGuides: {
    customer: {
      targets: ['shared', 'logger', 'output'],
      connection: tr('js.guide.customer.connection', { tokens: 'shared, logger, output' }),
      targetCopy: {
        shared: tr('js.guide.customer.target.shared'),
        logger: tr('js.guide.customer.target.logger'),
        output: tr('js.guide.customer.target.output')
      },
      shift: tr('js.guide.customer.shift')
    },
    support: {
      targets: ['engineer', 'reviewing', 'trace', 'needed'],
      connection: tr('js.guide.support.connection'),
      targetCopy: {
        engineer: tr('js.guide.support.target.engineer'),
        reviewing: tr('js.guide.support.target.reviewing'),
        trace: tr('js.guide.support.target.trace'),
        needed: tr('js.guide.support.target.needed')
      },
      shift: tr('js.guide.support.shift')
    },
    engineer: {
      targets: ['support', 'reviewing', 'trace', 'needed'],
      connection: tr('js.guide.engineer.connection'),
      targetCopy: {
        support: tr('js.guide.engineer.target.support'),
        reviewing: tr('js.guide.engineer.target.reviewing'),
        trace: tr('js.guide.engineer.target.trace'),
        needed: tr('js.guide.engineer.target.needed')
      },
      shift: tr('js.guide.engineer.shift')
    }
  }
};

let selectedIndex = model.defaultIndex;

const semanticLinks = {
  connector: { person: 0.10, report: 0.08, analysis: 0.08, diagnosis: 0.06 },
  article: {},
  customer: { person: 0.24, report: 0.30, evidence: 0.20, engineer: 0.10, analysis: 0.08, action: 0.04, diagnosis: 0.04 },
  support: { person: 0.18, engineer: 0.34, analysis: 0.30, evidence: 0.20, action: 0.12, diagnosis: 0.26 },
  person: { person: 0.24, report: 0.22, evidence: 0.12, engineer: 0.18, analysis: 0.18, action: 0.12, diagnosis: 0.14 },
  report: { person: 0.24, evidence: 0.36, analysis: 0.16, action: 0.10, connector: 0.08 },
  evidence: { evidence: 0.62, analysis: 0.56, action: 0.18, person: 0.12, report: 0.36, diagnosis: 0.42 },
  engineer: { person: 0.28, analysis: 0.28, action: 0.14, evidence: 0.18, diagnosis: 0.24 },
  analysis: { person: 0.18, evidence: 0.56, report: 0.16, engineer: 0.24, action: 0.24, connector: 0.08, diagnosis: 0.52 },
  action: { person: 0.12, evidence: 0.18, analysis: 0.20, engineer: 0.10, diagnosis: 0.16, connector: 0.08 },
  diagnosis: { person: 0.08, evidence: 0.32, analysis: 0.42, action: 0.18, engineer: 0.12 },
  punctuation: {}
};

const tokenVectors = {
  I: [0.70, 0.08, 0.06, 0.06],
  am: [0.04, 0.04, 0.05, 0.04],
  the: [0.03, 0.03, 0.03, 0.03],
  on: [0.04, 0.04, 0.05, 0.04],
  a: [0.03, 0.03, 0.03, 0.03],
  'B&R': [0.18, 0.64, 0.22, 0.10],
  case: [0.14, 0.34, 0.58, 0.16],
  customer: [0.96, 0.18, 0.08, 0.10],
  shared: [0.16, 0.34, 0.14, 0.64],
  logger: [0.12, 0.96, 0.22, 0.08],
  output: [0.08, 0.86, 0.20, 0.12],
  with: [0.05, 0.05, 0.07, 0.05],
  After: [0.05, 0.06, 0.10, 0.05],
  reviewing: [0.12, 0.36, 0.82, 0.38],
  it: [0.08, 0.48, 0.24, 0.08],
  tell: [0.14, 0.10, 0.34, 0.92],
  me: [0.34, 0.08, 0.06, 0.06],
  whether: [0.04, 0.06, 0.16, 0.06],
  is: [0.04, 0.04, 0.05, 0.04],
  still: [0.04, 0.06, 0.12, 0.08],
  needed: [0.08, 0.24, 0.90, 0.20],
  support: [0.92, 0.16, 0.24, 0.16],
  engineer: [0.52, 0.12, 0.42, 0.24],
  trace: [0.10, 0.88, 0.50, 0.16],
  ',': [0.02, 0.02, 0.02, 0.02],
  '.': [0.02, 0.02, 0.02, 0.02]
};

function formatNumber(value) {
  return value.toFixed(2);
}

function formatSigned(value) {
  return (value >= 0 ? '+' : '') + value.toFixed(2);
}

function softmax(values) {
  const exponents = values.map((value) => Math.exp(value * 4));
  const total = exponents.reduce((sum, value) => sum + value, 0) || 1;
  return exponents.map((value) => value / total);
}

function getTokenVector(token) {
  return tokenVectors[token.label] || [0.10, 0.10, 0.10, 0.10];
}

function semanticAffinity(focusToken, targetToken) {
  if (focusToken.lemma === targetToken.lemma && focusToken.label !== targetToken.label) {
    return 0.50;
  }

  if (focusToken.label === 'customer' || focusToken.label === 'support') {
    return semanticLinks[focusToken.role]?.[targetToken.role] || semanticLinks.person?.[targetToken.role] || 0;
  }

  return semanticLinks[focusToken.role]?.[targetToken.role] || 0;
}

function getFocusGuide(tokenLabel) {
  return model.focusGuides[tokenLabel] || null;
}

function buildAttentionScores(focusIndex) {
  const focus = model.tokens[focusIndex];
  const focusGuide = getFocusGuide(focus.label);

  const raw = model.tokens.map((token, index) => {
    const semantic = semanticAffinity(focus, token);
    const positionBias = 1 / (1 + Math.abs(index - focusIndex));
    const punctuationPenalty = token.role === 'punctuation' ? 0.35 : 1;
    const articlePenalty = token.role === 'article' ? 0.60 : 1;
    const selfBoost = index === focusIndex ? 0.18 : 0;
    const guideBoost = focusGuide && focusGuide.targets.includes(token.label) ? 0.20 : 0;
    return ((0.58 * semantic) + (0.34 * positionBias) + selfBoost + guideBoost) * punctuationPenalty * articlePenalty;
  });

  return softmax(raw);
}

function buildUpdatedVector(focusIndex, scores) {
  const input = getTokenVector(model.tokens[focusIndex]);
  const context = Array.from({ length: dimensions.length }, () => 0);

  model.tokens.forEach((token, index) => {
    const valueVector = getTokenVector(token);
    valueVector.forEach((value, dimensionIndex) => {
      context[dimensionIndex] += value * scores[index];
    });
  });

  const updated = input.map((value, index) => (0.40 * value) + (0.60 * context[index]));
  return { input, updated };
}

function explainConnection(focusIndex, targetIndex) {
  const focus = model.tokens[focusIndex];
  const target = model.tokens[targetIndex];
  const focusGuide = getFocusGuide(focus.label);

  if (focusIndex === targetIndex) {
    return tr('js.connection.self');
  }

  if (focusGuide && focusGuide.targets.includes(target.label)) {
    if (focusGuide.targetCopy && focusGuide.targetCopy[target.label]) {
      return focusGuide.targetCopy[target.label];
    }
    return focusGuide.connection;
  }

  if ((focus.label === 'reviewing' || focus.label === 'tell') && target.role === 'evidence') {
    return tr('js.connection.investigation');
  }

  if (focus.role === 'evidence' && target.role === 'evidence') {
    return tr('js.connection.evidence');
  }

  if ((focus.label === 'customer' && target.label === 'support') || (focus.label === 'support' && target.label === 'customer')) {
    return tr('js.connection.persons');
  }

  if ((focus.label === 'support' && target.label === 'engineer') || (focus.label === 'engineer' && target.label === 'support')) {
    return tr('js.connection.role');
  }

  if (target.role === 'article' || target.role === 'punctuation' || target.role === 'connector') {
    return tr('js.connection.structural');
  }

  return tr('js.connection.mixed');
}

function describeVectorShift(focusIndex) {
  const focus = model.tokens[focusIndex].label;
  const focusGuide = getFocusGuide(focus);

  if (focusGuide) {
    return focusGuide.shift;
  }

  return tr('js.shift.default');
}

function summarizeStart(vector) {
  const ranked = dimensions
    .map((id, index) => ({ label: dimensionLabel(id), value: vector[index] }))
    .sort((left, right) => right.value - left.value);

  return tr('js.summary.start', { first: ranked[0].label, second: ranked[1].label });
}

function summarizeChange(input, updated) {
  const deltas = dimensions
    .map((id, index) => ({ label: dimensionLabel(id), delta: updated[index] - input[index] }));
  const gains = deltas
    .filter((item) => item.delta > 0.01)
    .sort((left, right) => right.delta - left.delta);
  const losses = deltas
    .filter((item) => item.delta < -0.01)
    .sort((left, right) => left.delta - right.delta);

  if (!gains.length && !losses.length) {
    return tr('js.shift.stays');
  }

  if (!losses.length) {
    const growing = joinList(gains.slice(0, 2).map((item) => item.label));
    return tr('js.shift.grows', { growing });
  }

  if (!gains.length) {
    return tr('js.shift.shrinks', { shrinking: losses[0].label });
  }

  const growing = joinList(gains.slice(0, 2).map((item) => item.label));
  return tr('js.shift.shrinksGrows', { shrinking: losses[0].label, growing });
}

function renderSemanticStage(container, vector) {
  const guides = dimensionVisuals
    .map((item) => '<circle cx="' + item.x + '" cy="' + item.y + '" r="40" class="semantic-guide" />')
    .join('');

  const bubbles = dimensionVisuals.map((item, index) => {
    const radius = semanticBubbleRadius(vector[index]);

    return '<circle cx="' + item.x + '" cy="' + item.y + '" r="' + radius + '" fill="' + item.color + '" fill-opacity="0.18" stroke="' + item.color + '" stroke-width="2" class="semantic-stage-bubble" />';
  }).join('');

  // Text is HTML so it follows the page rem scale; positions are percentages of the stage box.
  const labels = dimensionVisuals.map((item, index) => {
    const radius = semanticBubbleRadius(vector[index]);
    const labelTop = item.labelAbove ? item.y - radius - 6 : item.y + radius + 6;
    const left = (item.x / semanticStageBox.width) * 100;

    return [
      '<span class="semantic-stage-value" style="left:' + left + '%;top:' + ((item.y / semanticStageBox.height) * 100) + '%">' + formatNumber(vector[index]) + '</span>',
      '<span class="semantic-stage-label' + (item.labelAbove ? ' is-above' : '') + '" style="left:' + left + '%;top:' + ((labelTop / semanticStageBox.height) * 100) + '%">' + dimensionLabel(item.id) + '</span>'
    ].join('');
  }).join('');

  container.innerHTML = [
    '<div class="semantic-stage">',
    '<svg viewBox="0 0 280 240" class="semantic-stage-svg" role="img" aria-label="' + tr('js.semanticStateAria') + '">',
    '<rect x="8" y="8" width="264" height="224" rx="22" class="semantic-stage-frame" />',
    guides,
    bubbles,
    '</svg>',
    labels,
    '</div>'
  ].join('');
}

function renderVectorShift(input, updated) {
  vectorShiftGrid.innerHTML = '';

  dimensions.forEach((id, index) => {
    const label = dimensionLabel(id);
    const delta = updated[index] - input[index];
    const card = document.createElement('div');
    card.className = 'vector-shift-card';
    card.innerHTML = '<span>' + label + '</span><strong class="shift-value">' + formatNumber(input[index]) + ' -> ' + formatNumber(updated[index]) + '</strong><small class="shift-delta ' + (delta >= 0 ? 'up' : 'down') + '">' + formatSigned(delta) + '</small>';
    vectorShiftGrid.appendChild(card);
  });
}

function render() {
  const scores = buildAttentionScores(selectedIndex);
  const vectorState = buildUpdatedVector(selectedIndex, scores);
  const ranked = model.tokens
    .map((token, index) => ({ token: token.label, index, score: scores[index] }))
    .sort((left, right) => right.score - left.score);
  const rankedOthers = ranked.filter((item) => item.index !== selectedIndex);
  sentenceCopy.textContent = tr('js.promptView', { sentence: model.sentence });
  focusToken.textContent = model.tokens[selectedIndex].label;
  updatedFocusLabel.textContent = model.tokens[selectedIndex].label;
  sequence.innerHTML = '';
  topAttendedList.innerHTML = '';
  attentionList.innerHTML = '';

  model.tokens.forEach((token, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'sequence-token ' + (token.role === 'punctuation' ? 'punctuation' : 'word');
    button.classList.toggle('active', index === selectedIndex);

    const order = document.createElement('small');
    order.textContent = String(index + 1).padStart(2, '0');
    const label = document.createElement('span');
    label.textContent = token.label;

    button.appendChild(order);
    button.appendChild(label);
    button.addEventListener('click', () => {
      selectedIndex = index;
      render();
    });

    sequence.appendChild(button);
  });

  topAttended.textContent = (rankedOthers[0] || ranked[0]).token;
  topConnectionCopy.textContent = explainConnection(selectedIndex, (rankedOthers[0] || ranked[0]).index);

  rankedOthers.slice(0, 3).forEach((item) => {
    const card = document.createElement('div');
    card.className = 'rank-card';

    const top = document.createElement('div');
    top.className = 'rank-top';
    top.innerHTML = '<div><strong>' + item.token + '</strong><p>' + explainConnection(selectedIndex, item.index) + '</p></div><span class="rank-score">' + (item.score * 100).toFixed(1) + '%</span>';

    const bar = document.createElement('div');
    bar.className = 'rank-bar';
    const fill = document.createElement('span');
    fill.style.width = Math.max(4, item.score * 100) + '%';
    bar.appendChild(fill);

    card.appendChild(top);
    card.appendChild(bar);
    topAttendedList.appendChild(card);
  });

  updatedVectorSummary.textContent = describeVectorShift(selectedIndex);
  renderSemanticStage(beforeAttentionStage, vectorState.input);
  renderSemanticStage(afterAttentionStage, vectorState.updated);
  beforeAttentionNote.textContent = summarizeStart(vectorState.input);
  afterAttentionNote.textContent = summarizeChange(vectorState.input, vectorState.updated);
  renderVectorShift(vectorState.input, vectorState.updated);

  ranked.slice(0, 6).forEach((item) => {
    const row = document.createElement('div');
    row.className = 'attention-row';

    const label = document.createElement('span');
    label.textContent = item.token;

    const bar = document.createElement('div');
    bar.className = 'attention-bar';
    const fill = document.createElement('span');
    fill.style.width = (item.score * 100) + '%';
    bar.appendChild(fill);

    const score = document.createElement('span');
    score.textContent = (item.score * 100).toFixed(1) + '%';

    row.appendChild(label);
    row.appendChild(bar);
    row.appendChild(score);
    attentionList.appendChild(row);
  });

  const total = scores.reduce((sum, value) => sum + value, 0) * 100;
  attentionTotal.textContent = total.toFixed(1) + '%';
}

render();
