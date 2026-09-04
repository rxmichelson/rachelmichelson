# Filter Pills — Search PLP prototype

Static HTML/CSS/JS prototype of the search results page filter pills, the per-pill
dropdowns, the mobile bottom sheet, and the **All Filters** panel.

## Run

```bash
cd portfolio-prototypes/filter-pills
python3 -m http.server 8901
# http://localhost:8901
```

Serve it rather than opening the file directly — fonts and images are relative-URL
loaded and `file://` blocks some of them.

## Where this came from

Ported from `projects/filter-pills-demo/index.html`, which was a single 2,921-line
file with the CSS and JS inlined. Same code, split into real files:

| File | Lines | Was |
|---|---|---|
| `index.html` | 104 | lines 1–8 + 984–1075 of the original |
| `styles.css` | 973 | the inline `<style>` block |
| `script.js` | 1,841 | the inline `<script>` block |

The CSS and JS were moved **verbatim** — no reformatting, no reindenting — so this
stays diffable against the original. The stub `styles.css` / `script.js` that sat
unused next to the original (a 20-line reset and a `console.log`) were not carried over.

## Changes from the original

- **The `.nav` header is gone.** The original opened with a 60px white bar holding
  the ExpertVoice logo. Markup, the `.nav` / `.nav-logo` rules, and the `.nav`
  max-width override were all removed; the page now starts at the search header.
  The logo file went with it — recover it from `projects/filter-pills-demo/logo.png`
  if the header is ever wanted back.
- **Source Sans 3 vendored.** The original pulled it from `fonts.googleapis.com`.
  It now loads from `assets/fonts/source-sans-3.woff2` (the variable font, weights
  400–700), so the prototype works offline and in screenshots.

Note the original's `logo.png` was actually an SVG with a `.png` extension, so
servers sent it as `image/png` and Chrome refused to decode it — the nav logo never
rendered there either. Removing the header made the point moot.

## Assets

- `images/` — 52 product shots plus `images/brands/` logos, referenced by filename
  from the product and brand fixtures in `script.js`.
- `popover-caret.svg`, `swatch-camo-inner.svg`, `swatch-multicolor.svg`
- `assets/fonts/source-sans-3.woff2`

The stale `brand-*.png` files in the original directory are unreferenced and were
not copied.

## Expanded-row spacing

An open row's header tightens per Figma `168:1931`, leaving 8px under the text block,
with `.af-row-body` 4px under that.

The space *above* the text is held at whatever the collapsed row already had, so
nothing moves when a row expands — only the content below it shifts up. That inset
differs by row type, so there are two rules:

| Row type | Text block | Inset above | Header 60px → |
|---|---|---|---|
| Label only (Brand, Size, Color…) | 21px | 19.5px | 48.5px |
| Label + summary (Sort by, Category) | 42px | 9px | 59px |

Two-line rows centre their block 9px from the top, not 19.5px. Applying the label-only
inset to them drops the label 10.5px **and** grows the header to 69.5px on expand — the
opposite of tightening. The `:has(.af-nav-value)` rule exists for exactly that reason;
don't collapse the two rules into one.

## Popover caret

Every pill popover carries the 15 × 7.5 caret (`popover-caret.svg`) pointing back at
the pill it opened from. `positionDropdown()` sets its `left` to the pill's horizontal
centre, clamped 12px in from each end so it never rides off the panel's rounded corner
when a dropdown gets clamped to the viewport edge.

The panel uses `filter: drop-shadow()` rather than `box-shadow` — a box-shadow paints
the panel rectangle only and leaves a visible seam where the caret meets it.

Figma's popover has no caret; showing one is a deliberate departure. Size and Colour
already drew it, so this only extends the same treatment to the rest and drops the two
duplicate rule blocks.

## Pill row — Figma source

Spec node: `S6Q4OOkyDJXniDqfWBl64z` → `4:1549` *Filter Pill/Web Filters Section*.

The four pill-row icons are exact Figma exports, inlined as path data the same way
the other Figma glyphs in `script.js` already are (`svgChevSmLeft`, `svgPlusSm`, …):

| Helper | Figma layer | Box |
|---|---|---|
| `svgFilter` | Icons 18 / Filter | 22 × 22 |
| `svgSort` | Icons 18 / Sort Small | 22 × 22 |
| `svgChevron` | Icons 18 / Chevron SM Down | 18 × 18 |
| `svgClose` | Icons 18 / Close SM | 22 viewBox |

Figma ships the chevron as two separate fills (`#252525` and white). They are the
same path, so it is inlined once with `currentColor` and the pill's own text colour
drives it.

Verified against the node: 15px/21px **SemiBold (600)**, `1px solid #757575` stroke,
`30px` radius, `3px` gap, `12px` vertical padding (→ 47px tall), `6px` row gap.
Nothing is applied on load, so no pill is filled and Category carries no count.

## Sort

The Sort pill opens a single-select popover: Relevance, Most Popular, Average Rating,
Alphabetical A-Z / Z-A, MSRP Price High→Low / Low→High. Radio rows, staged like every
other popover, with a **Reset / Done** footer instead of Clear / Apply.

Sort and All Filters are in `NON_ATTR_PILLS` — they are controls, not attributes, so
they skip the availability test in `resolvedPills()` that hides a pill when nothing in
the result set carries it.

Two options sort on stand-ins, because the fixture has no popularity or rating field:
Most Popular uses discount depth, Average Rating a stable hash of the title. Both are
deterministic, so the grid is repeatable.

## Popover fits the viewport

`ensureDropdownInView()` runs after a popover opens. If it would run past the bottom
of the window, the page scrolls so the pill row lands 12px from the top and the
popover gets the full height. The existing scroll listener re-anchors the popover to
its pill on the way.

`openDropdown()` re-points `openPillEl` at `.pill--open` after `renderPills()`. That
call rebuilds the row, so the captured element is detached — and repositioning against
a detached node gives an all-zero rect, which threw the popover into the top-left
corner the moment anything scrolled.

## Loading spinner

Ported from `exp-react-components` `packages/components/src/loadingSpinner` — the
`Feedback/Loading Spinner` story. Same markup, same bolt path, same rings
(`r=35` background, `r=30` animated with `stroke-dasharray: 50 50` in `#EF4036`),
same `exp-ux-spin 2s infinite linear` from `styles/animations.less`.

`signalResultsLoading()` is the single trigger, called from `onFilterChanged()` and
from `commitDraft()` / `commitCategoryDraft()`. Those two commits are where staged
selections actually land, so the spinner covers Done, click-away, the mobile sheet,
All Filters, chip removal and Clear all. Staging a selection does **not** spin —
nothing has changed yet.

It covers the whole viewport, exactly as the component does — `position: fixed`,
full width and height, appended to `<body>`. The svgs keep the component's own
`top: calc(50% - 150px)` offset, which renders slightly above centre; that is how
the shipped spinner looks, matching the repo's own baseline screenshot.

It holds for `FILTER_LOADING_MS` (400ms), and only fires when the applied set
actually moved — opening a popover and closing it untouched is not a load, so
`commitDraft()` / `commitCategoryDraft()` diff before signalling.

The `.bolt` and ring rules are written as `.loader-wrapper .spinner .bolt` to match the
source's nesting. Flattened to `.loader-wrapper .bolt` they lose to the
`.loader-wrapper .spinner svg { margin: 0 }` reset, and the bolt drifts 55px off centre.

## All Filters is live

While the panel is open, the staged draft — not the committed state — drives
availability. `effectiveSel()` returns the draft's set for an attribute when
`afPanelOpen()`, and `appliedAttrIds()` / `passesAttr()` both read through it, so
rows disappear and counts fall as you stage selections. Staging Club Ride (3
products) drops the Length row entirely and takes Gender from
`Men's(36) / Women's(10) / Unisex(6)` to `Men's(3)`.

The gate matters: outside the panel the committed state still rules, so a pill
popover keeps showing counts against applied filters rather than its own draft.

Each staged change calls `invalidateCounts()`, so counts re-skeleton and settle
through the existing `COUNT_LATENCY` path rather than snapping.

## Filter bar

Sticky at `top: 0`, `z-index: 200` — under the popover (500) and the All Filters
panel (800) so both still cover it. No bottom divider; the 24px to the grid is
**padding, not margin**, because a sticky element only paints its own box and the
grid would otherwise scroll through the gap.

## Dismissing a popover

| Action | Staged selection |
|---|---|
| **Apply** | committed |
| **Click outside the popover** | committed |
| **Escape** | discarded |
| **Click the open pill again** | discarded |

Clicking away applies, so the popover behaves like the rest of the page rather than
silently throwing work away. Escape stays the deliberate back-out.

## Behavior

- **Desktop (≥ mobile breakpoint):** pills open anchored dropdowns. `openFilterSurface()`
  routes to `openDropdown()`.
- **Mobile:** the same pills open a bottom sheet instead — `openSheet()`. The CSS
  hard-disables `.dropdown` at that width.
- **All Filters** opens a left panel with 13 accordion rows, at any width.
- **Five pills always hold a seat** — Filters, Sort, Category, Gender, Brands — per
  the Figma `4:1550` annotation: *"Only show these filters here: All Filters, Sort,
  Category, Gender, Brands ... 3-5 most common attribute filters in the set."*
  Category never drops; Gender and Brands go only if they have nothing left to offer.
- **On top of those, at most 3 attribute filters** (`PILL_ATTR_LIMIT`), ranked by
  `attrPrevalence` — the share of the current result set carrying the attribute.
  An applied filter always keeps its pill so it stays removable, and takes one of the
  three seats. Everything else lives in All Filters.
- **Attribute filters are never grouped.** `PILL_GROUPS` is empty: Length and
  Length (Fit) each get their own pill and their own All Filters row. Length is on
  7 of 52 products, below the pill-row prevalence bar, so it shows in All Filters only.
- **Option chips use Figma's default stroke** — `rgba(157,157,157,0.5)`. It had been
  lightened to `#e3e3e3` to sit further back from the selected `#252525`; that read
  too faint, so the spec value is back.
- **Brand cards are display-only.** They render as `div`s with no click handler; brands
  are filtered from the Brands pill or See all.
- **Accordion rows are exclusive** — opening a row collapses whatever else was open;
  clicking the open row toggles it shut. Reversed on 2026-08-27; the older
  `projects/filter-pills-demo/index.html` still has the multi-open behavior.

## Verified after the split

Driven in headless Chrome: no JS errors, 62 images all resolving, pill dropdowns open,
and the All Filters panel opens with all 13 rows.
