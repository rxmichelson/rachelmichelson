# AI Q&A — PDP Questions Section (static recreation)

Pixel-faithful HTML/CSS/JS recreation of the **AI Q&A** feature that ships on the
ExpertVoice store PDP. No build step — open `index.html`.

## Run

```bash
cd projects-or-wherever/ai-qanda
python3 -m http.server 8899
# http://localhost:8899
```

Serve it rather than opening the file directly — the vendored fonts are loaded by
relative URL and `file://` blocks them in some browsers.

## Source of truth

| Piece | Repo | Path |
|---|---|---|
| Component | `ev-proddev/store-web` | `src/main/ui/product/components/questions/QuestionsSection.tsx` |
| Suggestion chips | `ev-proddev/store-web` | `.../questions/QuestionSuggestions.tsx` |
| Feedback controls | `ev-proddev/store-web` | `.../questions/QuestionFeedbackControls.tsx` |
| Styles | `ev-proddev/store-web` | `.../questions/QuestionsSection.less` |
| API calls | `ev-proddev/store-web` | `src/main/ui/js/common/api.ts` |
| Mount point | `ev-proddev/store-web` | `src/main/ui/product/components/productView.tsx` (gated by `TEST_KEYS.PDP_QUESTIONS`, defaults on) |
| Backend | `ev-proddev/ai-xapi` | `ai-xapi/src/main/java/com/experticity/ai/controller/QandaController.java` |
| Design spec | `ev-proddev/ai-xapi` | `docs/superpowers/specs/2026-05-22-qanda-conversation-design.md` |
| Tokens / elements | `ev-proddev/exp-react-components` | `packages/styles/less/**`, `packages/components/src/**` |

`styles.css` is a hand-compile of the LESS above with every `@variable` resolved to
its literal value. The token block at the top of the file records the mapping.

## Assets

`assets/fonts/` holds real files, not substitutes:

- `experticity-ux.woff` / `.ttf` — the **Experticity UX** icon font, copied verbatim from
  `exp-react-components/packages/styles/less/utilities/fonts/experticity-ux/`. Icons render
  from their real codepoints:

  | Class | Size | Codepoint |
  |---|---|---|
  | `exp-ux-boltSparkle` | `exp-ux-large` | `\e9cd` |
  | `exp-ux-arrow-right` | `exp-ux-small` | `\e905` |
  | `exp-ux-thumbsUp` | `exp-ux-small` | `\e62e` |
  | `exp-ux-thumbsDown` | `exp-ux-small` | `\e62d` |
  | `exp-ux-thumbsUpFilled` | `exp-ux-small` | `\e988` |
  | `exp-ux-thumbsDownFilled` | `exp-ux-small` | `\e987` |

- `ssp-*.woff2` — Source Sans Pro 300/400/600/700 + 400/600 italic. The app serves these
  from `/sign-on/fonts/source-sans-pro/`; vendored here so the prototype works offline.

## Mocked backend

`script.js` stands in for `ai-xapi` with the real request/response shapes:

- `POST /xapi/ai/ext/1.0/qanda/conversations` → `{ conversation, latestMessage }`
- `POST /xapi/ai/ext/1.0/qanda/conversations/{id}/feedback`
- `GET  /xapi/ai/ext/1.0/qanda/suggestions?entityId=&entityType=`

Answers are keyword-matched from a fixture set and returned as Markdown, rendered
through the same allow-list the real `@exp/components/common/Markdown` uses
(`br, em, li, ol, p, strong, ul`, plus `a` restricted to the site domain).

## Intentional deviations from store-web

Three things differ from the shipped styles on purpose. Each is marked with a
`/* deviation */` comment in `styles.css`.

- **Regular weight, not semibold**, on the asked-question pill
  (`.question-asked-question`) and the suggestion chips (`.question-suggestion`).
  The shipped LESS sets `@font-weight-semibold` on both.
- **Press state on suggestion chips.** The shipped chips have hover only. This adds
  `:active` — navy-light background plus `scale(0.946)`, the same
  `(height - 2px) / height` ratio ECS's `.shrink-btn()` uses, over the ECS-standard
  100ms ease-out.
- **White page background.** `base.less` sets `@body-background-color: @color-lightGray-3`.
  Here `body` is white so the component sits on a clean field. The panel itself keeps
  its `@color-lightGray-3` card — that grey is the component, not the page.
- **Autocomplete suppressed on the question input.** `autocomplete`/`autocorrect`/
  `autocapitalize="off"`, `spellcheck="false"`, plus `data-1p-ignore` and
  `data-lpignore` so Chrome's saved form-history dropdown and password-manager
  badges stay out of demo screenshots. The real `InputField` sets none of these.

## Ask transition

Asking a question is animated so nothing snaps into place:

- The asked-question pill and the answer each rise 6px and fade in over 220–260ms.
- The five skeleton blocks stagger in 40ms apart while still shimmering.
- The dynamic block's height is tweened with the Web Animations API around the DOM
  swap, so the suggestions and form below slide rather than jump.

Each piece animates in **once**. `previouslyRendered` in `script.js` tracks what was
last on screen, so clicking a thumb or loading suggestions does not replay the entry.
The whole thing is disabled under `prefers-reduced-motion: reduce`.

## Demo question to type

The suggestion chips cover the common cases. To demo a **typed** question, ask:

> **Is this good for ski touring?**

That returns a longer fixture answer exercising the full Markdown path — bold, an
ordered list, a bullet list, and a link (which only renders as a link because it
points at `expertvoice.com`; off-domain links are unwrapped to plain text, matching
the real component). `touring`, `skinning`, `skin track`, and `backcountry` all match
it too, so phrasing is flexible.

## Behavior parity notes

- Every ask calls **create-conversation**, not continue — that matches the shipped
  component, which starts a fresh conversation per question. The multi-turn
  `/messages` endpoint exists on the backend but this section does not use it.
- A new answer **replaces** the previous one. There is no scrolling thread.
- On error the asked-question chip is removed and the question is restored to the input.
- Suggestions: max 5 in one wrapping row at ≥599px; max 6 split across 2 nowrap,
  horizontally scrolling rows below that. Already-asked questions are filtered out.
- Feedback state resets whenever the response changes.
- The footer disclaimer only shows when there is no answer and nothing is loading.

## Prototype-only controls

The dark bar at the top is **not** part of the component — force an error response,
change mock latency, or reset state.

## Analytics

Events log to the console instead of the PDP dispatcher:
`product_question_submitted`, `product_question_suggestion_click`,
`product_question_feedback`.
