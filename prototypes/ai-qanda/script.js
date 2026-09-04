/**
 * AI Q&A — PDP Questions Section prototype.
 *
 * Vanilla port of store-web's React component tree:
 *   product/components/questions/QuestionsSection.tsx
 *   product/components/questions/QuestionSuggestions.tsx
 *   product/components/questions/QuestionFeedbackControls.tsx
 *
 * The network layer mocks ai-xapi's QandaController:
 *   POST /xapi/ai/ext/1.0/qanda/conversations
 *   POST /xapi/ai/ext/1.0/qanda/conversations/{conversationId}/feedback
 *   GET  /xapi/ai/ext/1.0/qanda/suggestions?entityId=&entityType=
 */

const ENTITY_TYPE = 'PRODUCT';
const ORG_ID = 1;
const PRODUCT_CODE = 'TEST-PRODUCT';
const SITE_DOMAIN = 'expertvoice.com';

/** QuestionSuggestions.tsx */
const MAX_SUGGESTIONS_MOBILE = 6;
const MAX_SUGGESTIONS_DESKTOP = 5;
const SUGGESTION_ROWS_MOBILE = 2;

/** @screen-sm-min — matches useIsMediaSM() */
const MEDIA_SM = '(min-width: 599px)';

/** QuestionsSection.tsx renders five skeleton blocks while loading. */
const SKELETON_BLOCK_COUNT = 5;

/** Ask transition — keep in sync with --ask-enter-duration in styles.css. */
const HEIGHT_TWEEN_DURATION_MS = 260;
const HEIGHT_TWEEN_EASING = 'cubic-bezier(0.2, 0, 0.2, 1)';
const ENTERING_CLASS = 'is-entering';

/** js/common/constants EVENTS */
const EVENTS = {
  PRODUCT_QUESTION_FEEDBACK: 'product_question_feedback',
  PRODUCT_QUESTION_SUBMITTED: 'product_question_submitted',
  PRODUCT_QUESTION_SUGGESTION_CLICK: 'product_question_suggestion_click',
};

const MESSAGE_TYPE = {
  BOT: 'BOT',
  USER: 'USER',
};

const PLACEHOLDER = {
  FIRST: 'Ask anything about this product',
  REPEAT: 'Ask something else',
};

/* ==========================================================================
   Mock ai-xapi
   ========================================================================== */

const MOCK_SUGGESTIONS = [
  'Is this waterproof?',
  'How does the fit run?',
  'What is the warranty?',
  'How warm is it in real cold?',
  'How do I wash it?',
  'What is the shell made of?',
  'How does it compare to last season’s model?',
  'Is it packable enough for backpacking?',
];

const MOCK_ANSWERS = [
  {
    // Demo answer for a typed (non-suggested) question. Listed first so it wins
    // the keyword match even when the question also mentions weather or fit.
    keywords: ['ski tour', 'touring', 'skinning', 'skin track', 'backcountry'],
    message: 'Yes — with one caveat. It is built as a **touring shell**, so it is cut for movement and dumps heat fast, but it is not an insulated resort jacket.\n\nWhat experts consistently call out:\n\n1. The pit zips are long enough to vent a full skin track without stopping to delayer.\n2. The hood clears a helmet, which most shells at this weight do not.\n3. The shoulders are reinforced where a pack rides, so it holds up to repeated laps.\n\nWhere it falls short:\n\n- No powder skirt, so deep days want a bib underneath.\n- The chest pocket will not swallow a full-size skin bag.\n\nIf you ride lifts more than you skin, the insulated version in [related products](https://www.expertvoice.com/) is the better call.',
  },
  {
    keywords: ['waterproof', 'rain', 'wet', 'water'],
    message: 'Yes — the shell is a **2.5-layer waterproof/breathable laminate** rated to 20,000mm, with fully taped seams and a DWR finish on the face fabric.\n\nA few things experts call out:\n\n- The main zip is water-resistant, not waterproof, so a storm flap does the heavy lifting in sustained rain.\n- DWR wears off with use. Re-treat it once water stops beading rather than soaking in.\n- Pit zips vent well enough that you can keep it on through moderate rain without soaking yourself from the inside.',
  },
  {
    keywords: ['fit', 'size', 'sizing', 'run', 'true to size'],
    message: 'It runs **true to size** with a trim-but-not-slim cut.\n\n- If you plan to layer a heavy fleece or puffy underneath, size up one.\n- Sleeves are cut slightly long on purpose so they stay put when you reach overhead.\n- Experts with broader shoulders consistently report the shoulders are the tightest point, not the chest.',
  },
  {
    keywords: ['warranty', 'guarantee', 'repair', 'return'],
    message: 'It carries a **limited lifetime warranty** against defects in materials and workmanship.\n\nWhat that covers, in practice:\n\n- Seam failures, delamination, and zipper or hardware defects.\n- *Not* covered: normal wear, UV degradation, or damage from abrasion and crashes.\n\nRepairs are handled through the brand directly — they will typically repair before they replace.',
  },
  {
    keywords: ['warm', 'cold', 'winter', 'temperature', 'insulat'],
    message: 'On its own it is a **shell, not an insulator** — treat it as your wind and water layer.\n\n- Down to roughly 40°F/4°C, a base layer under it is enough while moving.\n- Below freezing, plan on a midweight fleece or a light puffy underneath.\n- The hood and cuffs seal well, which matters more than fabric warmth once wind picks up.',
  },
  {
    keywords: ['wash', 'care', 'clean', 'dry', 'launder'],
    message: 'Wash it more often than you think — body oils and dirt are what kill breathability.\n\n1. Zip everything closed and loosen the drawcords.\n2. Machine wash warm on a gentle cycle with a **technical wash**, never standard detergent or fabric softener.\n3. Tumble dry low for 20 minutes. The heat is what reactivates the DWR.\n\nIf water stops beading after drying, re-apply a wash-in or spray-on DWR treatment.',
  },
  {
    keywords: ['made of', 'material', 'fabric', 'shell', 'construction'],
    message: 'The shell is a **recycled 50D nylon ripstop** with a polyurethane waterproof/breathable membrane and a PFC-free DWR finish.\n\n- High-wear zones at the shoulders and hips step up to a 100D face fabric.\n- The membrane is air-permeable, so it breathes better than a hardshell but is slightly less abrasion-resistant.',
  },
  {
    keywords: ['compare', 'previous', 'last season', 'older', 'difference'],
    message: 'Compared to last season’s version:\n\n- The face fabric moved to a **PFC-free DWR**, which beads slightly less aggressively out of the box but holds up comparably after a few washes.\n- Pit zips are longer by about two inches.\n- The hood is now helmet-compatible, which adds a little bulk when it is down.\n- Weight is within an ounce — effectively unchanged.',
  },
  {
    keywords: ['pack', 'backpack', 'weight', 'light', 'stuff'],
    message: 'Yes — it packs into its own left-hand pocket and lands around **12 oz** in a men’s medium.\n\n- Packed size is roughly that of a 1L bottle.\n- It is light enough to carry as an emergency layer but durable enough to be your everyday shell, which is the main reason experts pick it over an ultralight-only option.',
  },
];

const FALLBACK_ANSWER = 'Here is what the product details and expert notes cover:\n\n- It is built as an all-season shell, so the honest answer depends on how you plan to layer it.\n- Experts consistently flag the fit and the hood as the two things worth checking before you commit.\n- For anything highly specific to your use, the expert reviews on this page tend to be more useful than the spec sheet.\n\nAsk a narrower question and I can get more specific.';

const MOCK_LATENCY_DEFAULT_MS = 1200;
const SUGGESTIONS_LATENCY_MS = 350;

const delay = (ms) => new Promise((resolve) => { setTimeout(resolve, ms); });

const uuid = () => (crypto.randomUUID
  ? crypto.randomUUID()
  : `id-${Math.random().toString(36).slice(2)}`);

/** Collections.shuffle() on the server side of fetchSuggestions. */
const shuffle = (items) => {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const answerFor = (message) => {
  const normalized = message.toLowerCase();
  const match = MOCK_ANSWERS.find(({ keywords }) =>
    keywords.some((keyword) => normalized.includes(keyword)));
  return match?.message ?? FALLBACK_ANSWER;
};

/** GET /xapi/ai/ext/1.0/qanda/suggestions */
const fetchProductConversationSuggestions = async () => {
  await delay(SUGGESTIONS_LATENCY_MS);
  return {
    entityId: `${ORG_ID}:${PRODUCT_CODE}`,
    entityType: ENTITY_TYPE,
    suggestions: shuffle(MOCK_SUGGESTIONS),
  };
};

/** POST /xapi/ai/ext/1.0/qanda/conversations */
const startProductConversation = async ({ message }) => {
  await delay(MOCK_LATENCY_DEFAULT_MS);

  const conversationId = uuid();
  const messageDate = new Date().toISOString();

  return {
    conversation: {
      conversationId,
      createdAt: messageDate,
      entityId: `${ORG_ID}:${PRODUCT_CODE}`,
      entityType: ENTITY_TYPE,
      messages: [],
      updatedAt: messageDate,
      userUuid: 'user-uuid',
    },
    latestMessage: {
      conversationId,
      message: answerFor(message),
      messageDate,
      messageId: uuid(),
      messageType: MESSAGE_TYPE.BOT,
    },
  };
};

/** POST /xapi/ai/ext/1.0/qanda/conversations/{conversationId}/feedback */
const submitProductConversationFeedbackRequest = async () => {
  await delay(SUGGESTIONS_LATENCY_MS);
  return {};
};

/* ==========================================================================
   Markdown — mirrors @exp/components/common/Markdown
   allowedElements: ['br', 'em', 'li', 'ol', 'p', 'strong', 'ul'] (+ 'a' when
   allowedDomains is non-empty), unwrapDisallowed
   ========================================================================== */

const ORDERED_ITEM_PATTERN = /^\d+\.\s+/;
const UNORDERED_ITEM_PATTERN = /^[-*]\s+/;

const escapeHtml = (text) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const isAllowedHref = (href, allowedDomains) => {
  try {
    const { hostname } = new URL(href);
    return allowedDomains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
};

const renderInline = (text, allowedDomains) => escapeHtml(text)
  // Links: dropped to their text when the domain is not allowed (unwrapDisallowed).
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label, href) => (
    isAllowedHref(href, allowedDomains)
      ? `<a href="${href}" target="_blank" rel="nofollow noopener noreferrer">${label}</a>`
      : label
  ))
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>')
  .replace(/_([^_]+)_/g, '<em>$1</em>')
  .replace(/\n/g, '<br>');

const renderMarkdown = (source, allowedDomains = []) => source
  .split(/\n{2,}/)
  .map((block) => {
    const lines = block.split('\n');

    if (lines.every((line) => UNORDERED_ITEM_PATTERN.test(line))) {
      const items = lines
        .map((line) => `<li>${renderInline(line.replace(UNORDERED_ITEM_PATTERN, ''), allowedDomains)}</li>`)
        .join('');
      return `<ul>${items}</ul>`;
    }

    if (lines.every((line) => ORDERED_ITEM_PATTERN.test(line))) {
      const items = lines
        .map((line) => `<li>${renderInline(line.replace(ORDERED_ITEM_PATTERN, ''), allowedDomains)}</li>`)
        .join('');
      return `<ol>${items}</ol>`;
    }

    // Headings are not in allowedElements; unwrapDisallowed keeps the text only.
    return `<p>${renderInline(block.replace(/^#{1,6}\s+/gm, ''), allowedDomains)}</p>`;
  })
  .join('');

/* ==========================================================================
   Component state — QuestionsSection.tsx useState hooks
   ========================================================================== */

const state = {
  askedQuestions: [],
  error: null,
  feedbackAccepted: null,
  loading: false,
  question: '',
  response: null,
  suggestions: null,
};

const elements = {
  disclaimer: document.getElementById('questionDisclaimer'),
  dynamic: document.getElementById('questionsDynamic'),
  form: document.getElementById('questionForm'),
  input: document.getElementById('productQuestion'),
  section: document.getElementById('questionsSection'),
  submit: document.querySelector('.btn-question-submit'),
  suggestions: document.getElementById('questionSuggestions'),
};

const smMediaQuery = window.matchMedia(MEDIA_SM);
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

/**
 * What the last render put on screen, so each piece animates in exactly once
 * instead of replaying every time an unrelated bit of state changes.
 */
const previouslyRendered = {
  askedQuestion: null,
  hasError: false,
  loading: false,
  messageId: null,
};

/**
 * Swap the dynamic block's contents while tweening its height, so the form and
 * suggestions below slide rather than jump.
 */
const tweenDynamicHeight = (mutate) => {
  elements.dynamic.getAnimations().forEach((animation) => animation.cancel());

  const from = elements.dynamic.offsetHeight;
  mutate();
  const to = elements.dynamic.offsetHeight;

  if (reducedMotionQuery.matches || from === to) {
    return;
  }

  elements.dynamic.style.overflow = 'hidden';
  const animation = elements.dynamic.animate(
    [{ height: `${from}px` }, { height: `${to}px` }],
    { duration: HEIGHT_TWEEN_DURATION_MS, easing: HEIGHT_TWEEN_EASING },
  );
  animation.finished
    .catch(() => {})
    .finally(() => { elements.dynamic.style.overflow = ''; });
};

const sendAnalyticsEvent = (action, data) => {
  // Stands in for the PDP's analytics dispatcher.
  console.log('[analytics]', action, data);
};

const sendEvent = (action, data) => sendAnalyticsEvent(action, {
  conversationId: state.response?.conversationId,
  messageId: state.response?.messageId,
  ...data,
});

/* ==========================================================================
   Render
   ========================================================================== */

const visibleSuggestions = () => {
  const isSM = smMediaQuery.matches;
  return (state.suggestions ?? [])
    .filter((suggestion) => !state.askedQuestions.includes(suggestion))
    .slice(0, isSM ? MAX_SUGGESTIONS_DESKTOP : MAX_SUGGESTIONS_MOBILE);
};

const suggestionRows = (visible) => {
  if (smMediaQuery.matches) {
    return [visible];
  }

  // Split the items into 2 rows
  const items = [...visible];
  return [items.splice(0, Math.ceil(items.length / SUGGESTION_ROWS_MOBILE)), items];
};

const renderSuggestions = () => {
  const visible = visibleSuggestions();

  if (!visible.length) {
    elements.suggestions.hidden = true;
    elements.suggestions.replaceChildren();
    return;
  }

  elements.suggestions.hidden = false;
  elements.suggestions.replaceChildren(...suggestionRows(visible).map((items) => {
    const row = document.createElement('div');
    row.className = 'question-suggestions-row';

    items.forEach((suggestion) => {
      const button = document.createElement('button');
      button.className = 'question-suggestion';
      button.type = 'button';
      button.disabled = state.loading;
      button.textContent = suggestion;
      button.addEventListener('click', () => onSuggestionClick(suggestion));
      row.appendChild(button);
    });

    return row;
  }));

  // Reset the scroll position when the suggestions change
  elements.suggestions.scrollTo(0, 0);
};

const renderFeedbackControls = () => {
  const answered = state.feedbackAccepted === true || state.feedbackAccepted === false;

  const container = document.createElement('div');
  container.className = 'question-feedback';
  container.dataset.answered = String(answered);
  if (answered) {
    container.dataset.accepted = String(state.feedbackAccepted);
  }

  if (answered) {
    const icon = document.createElement('i');
    icon.className = `exp-ux-small ${state.feedbackAccepted === true ? 'exp-ux-thumbsUpFilled' : 'exp-ux-thumbsDownFilled'}`;

    const label = document.createElement('em');
    label.className = 'question-feedback-label';
    label.textContent = 'Thanks for the feedback.';

    container.append(icon, label);
    return container;
  }

  const buttons = document.createElement('div');
  buttons.className = 'question-feedback-buttons';

  [
    { accepted: true, className: 'btn-accept', icon: 'exp-ux-thumbsUp' },
    { accepted: false, className: 'btn-reject', icon: 'exp-ux-thumbsDown' },
  ].forEach(({ accepted, className, icon }) => {
    const button = document.createElement('button');
    button.className = `btn-invisible btn-feedback ${className} btn-small`;
    button.type = 'button';
    button.innerHTML = `<i class="exp-ux-small ${icon}"></i>`;
    button.addEventListener('click', () => submitFeedback(accepted));
    buttons.appendChild(button);
  });

  container.appendChild(buttons);
  return container;
};

const render = () => {
  const [askedQuestion] = state.askedQuestions.slice(-1);

  const entering = {
    asked: !!askedQuestion && askedQuestion !== previouslyRendered.askedQuestion,
    conversation: !!state.response && state.response.messageId !== previouslyRendered.messageId,
    error: !!state.error && !previouslyRendered.hasError,
    loading: state.loading && !previouslyRendered.loading,
  };

  elements.section.dataset.answered = String(!!state.response);
  elements.section.dataset.error = String(!!state.error);
  elements.section.dataset.interacted = String(!!state.response || !!state.error || state.loading);
  elements.section.dataset.loading = String(state.loading);

  const nodes = [];

  if (askedQuestion) {
    const asked = document.createElement('div');
    asked.className = entering.asked ? `question-asked ${ENTERING_CLASS}` : 'question-asked';
    const text = document.createElement('span');
    text.className = 'question-asked-question';
    text.textContent = askedQuestion;
    asked.appendChild(text);
    nodes.push(asked);
  }

  if (state.loading) {
    // Show a loading indicator while the conversation is being fetched
    const loadingBlock = document.createElement('div');
    loadingBlock.className = entering.loading ? `question-loading ${ENTERING_CLASS}` : 'question-loading';
    for (let i = 0; i < SKELETON_BLOCK_COUNT; i += 1) {
      const skeleton = document.createElement('div');
      skeleton.className = 'skeleton-block';
      skeleton.setAttribute('aria-hidden', 'true');
      loadingBlock.appendChild(skeleton);
    }
    nodes.push(loadingBlock);
  }

  if (state.error) {
    const error = document.createElement('p');
    error.className = entering.error ? `question-error ${ENTERING_CLASS}` : 'question-error';
    error.textContent = 'We hit a snag. Try asking again.';
    nodes.push(error);
  }

  if (state.response) {
    const conversation = document.createElement('div');
    conversation.className = entering.conversation
      ? `question-conversation ${ENTERING_CLASS}`
      : 'question-conversation';
    conversation.dataset.conversationId = state.response.conversationId;
    conversation.dataset.messageId = state.response.messageId;
    conversation.dataset.messageRole = state.response.messageType;

    const disclaimer = document.createElement('p');
    disclaimer.className = 'question-response-disclaimer';
    disclaimer.textContent = 'AI-generated from product details and expert knowledge. May not always be accurate.';

    const markdown = document.createElement('div');
    markdown.className = 'markdown-wrapper question-response';
    markdown.innerHTML = renderMarkdown(state.response.message, [SITE_DOMAIN]);

    conversation.append(disclaimer, markdown, renderFeedbackControls());
    nodes.push(conversation);
  }

  tweenDynamicHeight(() => elements.dynamic.replaceChildren(...nodes));

  previouslyRendered.askedQuestion = askedQuestion ?? null;
  previouslyRendered.hasError = !!state.error;
  previouslyRendered.loading = state.loading;
  previouslyRendered.messageId = state.response?.messageId ?? null;

  elements.input.value = state.question ?? '';
  elements.input.readOnly = state.loading;
  elements.input.placeholder = askedQuestion ? PLACEHOLDER.REPEAT : PLACEHOLDER.FIRST;

  elements.disclaimer.hidden = !!state.response || state.loading;

  renderSuggestions();
};

/* ==========================================================================
   Behavior — QuestionsSection.tsx callbacks
   ========================================================================== */

const askQuestion = async (message = '') => {
  state.askedQuestions = state.askedQuestions.concat(message);
  state.error = null;
  state.loading = true;
  state.question = '';
  state.response = null;
  render();

  let payload = null;
  let failed = false;

  try {
    payload = await startProductConversation({ message: message?.trim() });
  } catch (error) {
    failed = true;
    state.error = error;
  }

  state.loading = false;

  if (failed) {
    state.askedQuestions = state.askedQuestions.slice(0, -1);
    state.question = message;
  } else {
    state.response = payload.latestMessage;
    // Reset the feedback state when the response changes
    state.feedbackAccepted = null;
  }

  render();
  return payload?.latestMessage;
};

const submitFeedback = async (accepted) => {
  if (!state.response?.conversationId) {
    return;
  }

  state.feedbackAccepted = accepted;
  render();

  try {
    await submitProductConversationFeedbackRequest({
      accepted,
      conversationId: state.response.conversationId,
    });
  } catch {
    // Clear the feedback state if there was an error
    state.feedbackAccepted = null;
    render();
  }

  sendEvent(EVENTS.PRODUCT_QUESTION_FEEDBACK, { accepted });
};

async function onSuggestionClick(suggestion) {
  state.question = suggestion;

  const message = await askQuestion(suggestion);
  sendEvent(EVENTS.PRODUCT_QUESTION_SUGGESTION_CLICK, {
    conversationId: message?.conversationId,
    messageId: message?.messageId,
    question: suggestion,
  });
}

const loadSuggestions = async () => {
  const payload = await fetchProductConversationSuggestions();
  if (payload?.suggestions) {
    state.suggestions = payload.suggestions;
    render();
  }
};

elements.input.addEventListener('input', (event) => {
  state.error = null; // Clear the error when the text changes
  state.question = event.target.value;
  elements.section.dataset.error = 'false';
  const existingError = elements.dynamic.querySelector('.question-error');
  existingError?.remove();
});

elements.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const submittable = !!state.question?.trim();
  if (state.loading || !submittable) {
    return;
  }

  const { question } = state;
  (async () => {
    const message = await askQuestion(question);
    sendEvent(EVENTS.PRODUCT_QUESTION_SUBMITTED, {
      conversationId: message?.conversationId,
      messageId: message?.messageId,
      question,
    });
  })();
});

smMediaQuery.addEventListener('change', render);

render();
loadSuggestions();

const questionsElement = document.querySelector('.questions-section');
const reportHeight = () => {
  window.parent.postMessage({ type: 'ai-qanda-height', height: Math.ceil(questionsElement.getBoundingClientRect().height) }, '*');
};
new ResizeObserver(reportHeight).observe(questionsElement);
reportHeight();
