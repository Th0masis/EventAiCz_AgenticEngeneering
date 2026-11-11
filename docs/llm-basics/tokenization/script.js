const tr = (key, vars) => I18N.text(key, vars);

const tokenInput = document.getElementById('token-input');
const tokenExampleButtons = [...document.querySelectorAll('#token-examples button')];
const tokenModeButtons = [...document.querySelectorAll('#token-mode button')];
const budgetSlider = document.getElementById('budget-slider');
const budgetValue = document.getElementById('budget-value');
const tokenCount = document.getElementById('token-count');
const visibleCount = document.getElementById('visible-count');
const overflowCount = document.getElementById('overflow-count');
const budgetStatus = document.getElementById('budget-status');
const budgetMeter = document.getElementById('budget-meter');
const normalizedWords = document.getElementById('normalized-words');
const topPairs = document.getElementById('top-pairs');
const mergeList = document.getElementById('merge-list');
const allTokenStream = document.getElementById('all-token-stream');
const contextTokenStream = document.getElementById('context-token-stream');

let currentMode = 'word';
const AUTO_MERGE_LIMIT = 12;

function makeSegmentList(text) {
  return (text.toLowerCase().match(/[a-z0-9]+|[^\sA-Za-z0-9]/g) || []).map((part) => ({
    value: part,
    type: /^[a-z0-9]+$/.test(part) ? 'word' : 'punctuation'
  }));
}

function countPairs(words) {
  const pairMap = new Map();

  words.forEach((units) => {
    for (let index = 0; index < units.length - 1; index += 1) {
      const key = units[index] + '\u0001' + units[index + 1];
      pairMap.set(key, (pairMap.get(key) || 0) + 1);
    }
  });

  return [...pairMap.entries()]
    .map(([key, count]) => {
      const [left, right] = key.split('\u0001');
      return { left, right, merged: left + right, count };
    })
    .sort((left, right) => right.count - left.count || left.merged.localeCompare(right.merged));
}

function applyMerge(units, merge) {
  const output = [];

  for (let index = 0; index < units.length; ) {
    if (index < units.length - 1 && units[index] === merge.left && units[index + 1] === merge.right) {
      output.push(merge.merged);
      index += 2;
    } else {
      output.push(units[index]);
      index += 1;
    }
  }

  return output;
}

function runWordTokenizer(text) {
  const segments = makeSegmentList(text);
  const words = segments.filter((segment) => segment.type === 'word').map((segment) => segment.value.split(''));

  return {
    normalized: segments.filter((segment) => segment.type === 'word').map((segment) => segment.value),
    topPairs: countPairs(words).slice(0, 8),
    merges: [],
    tokens: segments.map((segment) => ({
      value: segment.value,
      type: segment.type === 'punctuation' ? 'punctuation' : 'word'
    }))
  };
}

function runFrequencyTokenizer(text) {
  const segments = makeSegmentList(text);
  const normalized = segments.filter((segment) => segment.type === 'word').map((segment) => segment.value);
  const initialWords = normalized.map((word) => word.split(''));
  const topPairCandidates = countPairs(initialWords).slice(0, 8);
  const workingWords = initialWords.map((units) => [...units]);
  const merges = [];

  for (let step = 0; step < AUTO_MERGE_LIMIT; step += 1) {
    const candidates = countPairs(workingWords);
    const best = candidates.find((candidate) => candidate.count > 1);
    if (!best) {
      break;
    }
    merges.push(best);
    for (let index = 0; index < workingWords.length; index += 1) {
      workingWords[index] = applyMerge(workingWords[index], best);
    }
  }

  let wordIndex = 0;
  const tokens = [];

  segments.forEach((segment) => {
    if (segment.type === 'punctuation') {
      tokens.push({ value: segment.value, type: 'punctuation' });
      return;
    }

    const units = workingWords[wordIndex] || [];
    units.forEach((unit) => {
      tokens.push({ value: unit, type: unit.length === 1 ? 'character' : 'merged' });
    });
    wordIndex += 1;
  });

  return {
    normalized,
    topPairs: topPairCandidates,
    merges,
    tokens
  };
}

function renderPillGroup(container, items, formatter, emptyText, className = 'pill') {
  container.innerHTML = '';
  if (!items.length) {
    const pill = document.createElement('span');
    pill.className = className + ' muted';
    pill.textContent = emptyText;
    container.appendChild(pill);
    return;
  }
  items.forEach((item) => {
    const pill = document.createElement('span');
    pill.className = className;
    pill.textContent = formatter(item);
    container.appendChild(pill);
  });
}

function renderTokenStream(container, tokens, budget, includeOverflow) {
  container.innerHTML = '';
  if (!tokens.length) {
    const pill = document.createElement('span');
    pill.className = 'pill muted';
    pill.textContent = tr('js.empty.tokens');
    container.appendChild(pill);
    return;
  }

  const visibleStart = Math.max(0, tokens.length - budget);

  tokens.forEach((token, index) => {
    if (!includeOverflow && index < visibleStart) {
      return;
    }

    const chip = document.createElement('span');
    chip.className = 'token-chip ' + token.type + ' ' + (index >= visibleStart ? 'in-budget' : 'overflow');
    const order = document.createElement('small');
    order.textContent = String(index + 1).padStart(2, '0');
    const label = document.createElement('span');
    label.textContent = token.value;
    chip.appendChild(order);
    chip.appendChild(label);
    container.appendChild(chip);
  });
}

function render() {
  const text = tokenInput.value.trim();
  const budget = Number(budgetSlider.value);
  const result = currentMode === 'word' ? runWordTokenizer(text) : runFrequencyTokenizer(text);
  const visibleTokens = result.tokens.slice(Math.max(0, result.tokens.length - budget));
  const overflowTokens = Math.max(0, result.tokens.length - budget);
  const usage = budget ? Math.min(100, (result.tokens.length / budget) * 100) : 0;

  budgetValue.textContent = String(budget);

  tokenCount.textContent = String(result.tokens.length);
  visibleCount.textContent = String(visibleTokens.length);
  overflowCount.textContent = String(overflowTokens);
  budgetMeter.style.width = usage + '%';

  if (result.tokens.length <= budget * 0.8) {
    budgetStatus.textContent = tr('js.status.fits');
  } else if (result.tokens.length <= budget) {
    budgetStatus.textContent = tr('js.status.tight');
  } else {
    budgetStatus.textContent = tr('js.status.overflow');
  }

  renderPillGroup(normalizedWords, result.normalized, (item) => item, tr('js.empty.normalized'));
  renderPillGroup(topPairs, result.topPairs, (pair) => pair.left + ' + ' + pair.right + ' -> ' + pair.merged + ' (' + pair.count + ')', tr('js.empty.pairs'), 'pair-pill');
  renderPillGroup(mergeList, result.merges, (merge) => merge.left + ' + ' + merge.right + ' -> ' + merge.merged, tr('js.empty.merges'), 'merge-pill');
  renderTokenStream(allTokenStream, result.tokens, budget, true);
  renderTokenStream(contextTokenStream, result.tokens, budget, false);
}

tokenExampleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tokenInput.value = button.dataset.text;
    tokenExampleButtons.forEach((item) => item.classList.toggle('active', item === button));
    render();
  });
});

tokenModeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentMode = button.dataset.mode;
    tokenModeButtons.forEach((item) => item.classList.toggle('active', item === button));
    render();
  });
});

tokenInput.addEventListener('input', () => {
  tokenExampleButtons.forEach((button) => button.classList.remove('active'));
  render();
});
budgetSlider.addEventListener('input', render);

render();
