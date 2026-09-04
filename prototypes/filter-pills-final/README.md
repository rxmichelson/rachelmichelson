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

**No drop shadow, and the rule only shows once the bar has stuck.** `syncStuck()`
compares the bar's `getBoundingClientRect().top` against its own computed `top` —
`0` on web, the nav height on mobile — so one function covers both breakpoints
without naming either. At rest the bar sits flush against the content above it and
draws nothing.

The rule is an inset shadow rather than a `border-bottom`: a border appearing on
scroll would add a pixel to the bar and nudge the grid under it. It's also what
keeps the mobile bar on Figma's 52px / 94px.

**Both rows drag-scroll with a mouse.** They overflow and hide their scrollbars, so
touch pans them natively but a pointer had no way to reach the pills past the right
edge (the arrow buttons are web-only). `enableDragScroll()` handles `pointerType
=== 'mouse'` only — native momentum is better on touch — turns off `scroll-behavior:
smooth` for the length of the drag so the row tracks the pointer, and swallows the
click a drag past `DRAG_SLOP` (4px) would otherwise land on a pill. A click that
never moved still opens its surface.

## Dismissing a popover

| Action | Staged selection |
|---|---|
| **Apply** | committed |
| **Click outside the popover** | committed |
| **Escape** | discarded |
| **Click the open pill again** | discarded |

Clicking away applies, so the popover behaves like the rest of the page rather than
silently throwing work away. Escape stays the deliberate back-out — and now backs
out of the bottom sheet too, which it used to ignore. Tapping the overlay or the
close icon discards as well; only `Done` / `Apply` commits a sheet.

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

## Mobile — Figma source

Spec file `iYqedQS2TuLL3JBkbgw7ak` (*misc*), page `1389:6962` *filtering*:

| Node | What it is |
|---|---|
| `1450:8420` | **Mobile PLP** — the whole 393px frame |
| `1450:8479` / `1450:8531` | **Sticky pills** — the bar with a chip row (94px) and without (52px) |
| `1450:8502` | **Mobile Filters Section** — pill row + chip row |
| `1450:8421` | **Web /Expert Nav** at 393 |
| `1450:8427` | brand strip + *See all* |
| `1450:8458` | **PLI Card** (`1389:7193`) |
| `1423:28286` | **All filters** as a bottom sheet |

Everything mobile lives in one place — `§11` at the foot of `styles.css`, keyed to
`max-width: 640px`, the same breakpoint `isMobile()` reads. Desktop is untouched:
the blocks that only exist on mobile (`.mnav`, `.brand-see-all`,
`.pli-badges`, `.pli-rating`, `.pli-cta`) are `display: none` by default and turned
on inside the query.

### Figma numbers that are load-bearing

- **Nav 114px** = a 66px search row (border drawn inside it) + a 48px tab row. The
  filter bar sticks at `top: var(--mnav-h)`, so that total is a variable, not a
  literal repeated in two rules.
- **Bar 52px / 94px** = `9 + 34 [+ 8 + 34] + 9`. `.applied-row:empty` collapses so
  the 8px flex gap doesn't survive an empty chip row. Figma draws the bar with a
  drop shadow; it carries a stuck-only inset rule instead — see **Filter bar**.
- **Pill 34px** — `height`, not vertical padding: Figma strokes inside the box, so
  padding + border would land on 36. 15/21 **regular**, `100px` radius, 6px gap,
  12px side padding, 4px between pills, 18px row inset.
- **Card 169.5 × 422.5** — two `1fr` tracks in a 357px grid. `.product-card` needs
  `min-width: 0`: a grid item's automatic minimum is its min-content, and the
  400px-square fixtures contribute their intrinsic width through the
  percentage-width `<img>`, which otherwise holds both tracks open past 393px and
  lays the whole page (nav included) out wider than the viewport.

### Glyph slots

Figma sizes each glyph slot to the glyph's own bbox — filter 16, sort 8, chevron 9,
chip close 12 — while the icons in `script.js` are 22-box exports of the same
glyphs. So the slot narrows and the svg keeps its intrinsic size and overflows
(`flex-shrink: 0`). Letting it shrink instead squashes the glyph horizontally: only
its width gives, its `height` attribute doesn't, and the sort icon renders at
roughly half scale. No mobile-specific icon exports were added.

### Mobile-only behaviour

| Thing | Web | Mobile | Why |
|---|---|---|---|
| First pill | `Filters` | `All Filters` | 1450:8379 spells it out |
| Sort pill | `Sort` + chevron | `By Relevance`, no chevron | 1450:8506 — the sheet covers the row that opened it, so the pill has to state the sort |
| Chip row | `Clear all` first | `Clear All` last | 1450:8524 puts it after the chips (CSS `order`) |
| All Filters | left flyout, `Reset` / `Done` | bottom sheet, `Clear All` / `See Results` | 1423:28286 |
| *See all* | outlined pill inside the strip | `See all (n)` link under it | the strip scrolls, so a link inside it would scroll away |

Both label sets switch on `isMobile()`, so `MOBILE_Q`'s change handler now
re-renders rather than only closing the open surface.

The panel-as-bottom-sheet rules used to sit in an `@media (max-width: 400px)` block.
That block now carries only the narrow-screen type scale for expanded option rows;
the geometry moved to §11 so the panel and the pills agree on what "mobile" means.

### Card stand-ins

The mobile card carries two promo pills and a rating row that the fixture has no
fields for, so both read off the same deterministic sources as the sort stand-ins:
`Flash Deals` when the discount is ≥ 50%, `New` on a title-hash third, and
`5 + (hash % 95)` experts against Figma's five filled stars. Repeatable, so the
grid doesn't reshuffle between loads.

`Add to Cart` is display-only, like the brand cards. Figma's pagination row
(`1450:8464`) is deliberately **not** built — the grid shows the whole fixture set.

### Verified

Driven through CDP at a real 393 × 1400 viewport (old headless lays out at a 500px
minimum no matter what `--window-size` says, which reads as a page-wide overflow
bug that isn't there). Measured: nav 114, bar 52 → 94 with a chip, pills 34, card
169.5 × 422.5, brand tile 75.75. Checked: pills open the
bottom sheet and not the dropdown, chips render with `Clear All` trailing, All
Filters opens as a 12px-radius sheet with all 13 rows, and desktop at 1440 is
unchanged.

## Bottom sheets — Figma source

Three specs, one shell:

| Sheet | Node |
|---|---|
| Attribute sheets — every size family, Colour | `S6Q4OOkyDJXniDqfWBl64z` → `156:20715` (Shoe size), `175:2120` (Colour) |
| List sheets — Gender, Brands, Promotions, Buy On | `gPsoYJfEQ4p6upA4i3rBdU` → `2144:20712`, `2144:14296` |
| Sort by, Category | `gPsoYJfEQ4p6upA4i3rBdU` → `2144:14221`, `2144:20952` |
| All filters | `iYqedQS2TuLL3JBkbgw7ak` → `1423:28286` |

The shell is the same everywhere: 12px top radius, a **54px** header (18px padding
horizontal only — 18 vertical plus a 27px title runs to 63), the title left in a
flex-1 slot with a 36px close, an 18px-inset body, and an 18px footer holding two
equal buttons over the same white gradient the All Filters footer uses.

**No grab handle.** None of the frames draw one; the one this prototype had was
invented. Body inset is 6px above the first row on the list sheets (`2144:20718`)
and 12px on the attribute sheets, whose grid sits lower (`156:20722`).

Rows take their side inset from the body rather than carrying their own — hence
`.sheet .val-row` rather than a change to `.val-row`.

**Two deliberate departures from the frames:**

- **Row pitch is 45px, not the 60px Figma draws** (`2144:20922`). 60px around one
  21px line left the list looking half empty; 12px of padding lands it at 45, close
  to the web popover's own rhythm. Rachel's call, 2026-09-03.
- **No hover fill on an option row.** `.val-row:hover` used to paint `--light-2`
  across the row; a full-bleed grey band behind a checkbox reads as a selected
  state, and the box itself is already the affordance.

### The buttons are named per sheet

| Sheet | Buttons |
|---|---|
| Attribute (size, colour) | `Clear` / `Apply` |
| Sort by, Category | `Reset` / `Done` — one choice resolves the sheet, so there is no set to clear |
| Everything else | `Clear All` / `Done` |

`sheetLabels()` owns that mapping, and `isAttrGridPill()` is the test for the first
row — Colour and every size family draw a pill grid instead of rows, which is what
makes them attribute sheets.

**This replaced the live-count CTA.** The sheet used to read `Show 52 results`,
shimmer while counts resolved, and disable itself at zero results. No frame shows
that, so it's gone; the count still lives in the All Filters footer, where Figma
does put it. Say the word if you want it back — the staged count is one
`withDraft(() => resultSet().length)` call away.

Both halves come out at Figma's **172.5px** because they share horizontal padding
and the filled button carries a transparent stroke — `flex-basis: 0` is a
content-box basis, so padding and border ride on top of each item's share.

### Brands searches its own list

`2185:29440` — a 38px pill field, 18px under the header, 8px above the first row.
Sheet only; the web popover has no search. The query lives in `brandQuery` rather
than in the input, because ticking a row rebuilds the list, and rows are hidden
(`[hidden]`, which needs an explicit `display: none` to beat `.val-row`'s `flex`)
rather than dropped, so a staged tick survives typing.

### Two files disagree on the CTA

The Smush frames draw `Done` as `#fc4540` at a 3px radius; the newer attribute and
mobile-PLP frames draw it as `#ee5720` at 21px. The prototype follows the newer
pair, which is also what every other button here already uses.

## Verified after the split

Driven in headless Chrome: no JS errors, 62 images all resolving, pill dropdowns open,
and the All Filters panel opens with all 13 rows.
