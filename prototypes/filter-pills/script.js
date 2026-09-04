  // ── SVG helpers ────────────────────────────────────────────────

  // Icons 18 / Filter, Sort Small, Chevron SM Down, Close SM — exact exports from
  // Figma S6Q4OOkyDJXniDqfWBl64z node 4:1549 (Filter Pill/Web Filters Section).
  // Figma ships the chevron as two fills (#252525 and white); currentColor covers
  // both, since the pill sets its own text colour when active.
  function svgFilter(c) {
    return `<svg class="pill-icon-svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M7.125 6C7.86525 6 8.51157 6.40217 8.85739 6.99993L18 7C18.552 7 19 7.447 19 8C19 8.5135 18.55 9.00108 18 9L8.85681 9.00108C8.51085 9.59828 7.86484 10 7.125 10C6.38516 10 5.73915 9.59828 5.39319 9.00108L4 9C3.448 9 3 8.553 3 8C3 7.4865 3.45 6.99993 4 7L5.39261 6.99993C5.73843 6.40217 6.38475 6 7.125 6ZM15.125 12C15.8653 12 16.5116 12.4022 16.8574 12.9999L18 13C18.552 13 19 13.447 19 14C19 14.5135 18.55 15.0011 18 15L16.8568 15.0011C16.5108 15.5983 15.8648 16 15.125 16C14.3852 16 13.7392 15.5983 13.3932 15.0011L4 15C3.448 15 3 14.553 3 14C3 13.4865 3.45 12.9999 4 13L13.3926 12.9999C13.7384 12.4022 14.3847 12 15.125 12Z" fill="${c}"/></svg>`;
  }
  function svgSort(c) {
    return `<svg class="pill-icon-svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M13.1379 12.4893C13.4202 12.1658 13.911 12.1329 14.2346 12.415C14.5573 12.6982 14.5899 13.1899 14.3068 13.5127L11.5851 16.624C11.4382 16.7935 11.2249 16.8896 11.0002 16.8896C10.7755 16.8896 10.563 16.7934 10.4152 16.624L7.69256 13.5127C7.40964 13.19 7.44231 12.6981 7.76482 12.415C8.08838 12.1319 8.57937 12.1649 8.86248 12.4893L11.0002 14.9307L13.1379 12.4893ZM11.0002 6C11.2249 6.00003 11.4382 6.09618 11.5851 6.26562L14.3068 9.37695C14.5899 9.69973 14.5573 10.1915 14.2346 10.4746C13.911 10.7575 13.4209 10.7246 13.1379 10.4004L11.0002 7.95898L8.86248 10.4004C8.58015 10.7239 8.08838 10.7569 7.76482 10.4746C7.44231 10.1915 7.40963 9.69965 7.69256 9.37695L10.4152 6.26562C10.563 6.09621 10.7755 6 11.0002 6Z" fill="${c}"/></svg>`;
  }
  function svgChevron() {
    return `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8.99982 12.0006C8.71082 12.0006 8.43682 11.8766 8.24782 11.6586L4.74782 7.65863C4.38382 7.24363 4.42582 6.61163 4.84082 6.24763C5.25682 5.88363 5.88882 5.92563 6.25182 6.34263L8.99982 9.48163L11.7478 6.34263C12.1118 5.92663 12.7428 5.88463 13.1588 6.24763C13.5738 6.61163 13.6158 7.24363 13.2518 7.65863L9.75182 11.6586C9.56282 11.8766 9.28882 12.0006 8.99982 12.0006" fill="currentColor"/></svg>`;
  }
  function svgClose(c) {
    return `<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M16.7072 6.70725C17.0982 6.31625 17.0982 5.68425 16.7072 5.29325C16.3162 4.90225 15.6843 4.90225 15.2933 5.29325L11.0002 9.58625L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L9.58625 11.0002L5.29325 15.2933C4.90225 15.6843 4.90225 16.3162 5.29325 16.7072C5.48825 16.9022 5.74425 17.0002 6.00025 17.0002C6.25625 17.0002 6.51225 16.9022 6.70725 16.7072L11.0002 12.4142L15.2933 16.7072C15.4883 16.9022 15.7442 17.0002 16.0002 17.0002C16.2562 17.0002 16.5122 16.9022 16.7072 16.7072C17.0982 16.3162 17.0982 15.6843 16.7072 15.2933L12.4142 11.0002L16.7072 6.70725Z" fill="${c}"/></svg>`;
  }
  function svgCheck() {
    return `<svg class="checkbox-check" width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  // Icons 18 / Chevron SM (from Figma, 22×22 viewBox)
  function svgChevSmLeft() {
    return `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M12.9992 7.00012C13.2782 7.00012 13.5552 7.11512 13.7522 7.34212C14.1162 7.75712 14.0742 8.38912 13.6592 8.75312L10.5192 11.5001L13.6592 14.2471C14.0742 14.6111 14.1162 15.2431 13.7522 15.6581C13.3882 16.0741 12.7572 16.1161 12.3412 15.7531L8.34118 12.2531C8.12418 12.0631 8.00018 11.7881 8.00018 11.5001C8.00018 11.2121 8.12418 10.9381 8.34118 10.7471L12.3412 7.24712C12.5312 7.08112 12.7662 7.00012 12.9992 7.00012" fill="#3C98C7"/></svg>`;
  }
  function svgChevSmRight(c = '#757575') {
    return `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M9.00082 15.9999C8.72182 15.9999 8.44482 15.8849 8.24782 15.6579C7.88382 15.2429 7.92582 14.6109 8.34082 14.2469L11.4808 11.4999L8.34082 8.75288C7.92582 8.38888 7.88382 7.75688 8.24782 7.34188C8.61182 6.92588 9.24282 6.88388 9.65882 7.24688L13.6588 10.7469C13.8758 10.9369 13.9998 11.2119 13.9998 11.4999C13.9998 11.7879 13.8758 12.0619 13.6588 12.2529L9.65882 15.7529C9.46882 15.9189 9.23382 15.9999 9.00082 15.9999" fill="${c}"/></svg>`;
  }

  // Icons 18 / Plus SM (5:4628) and Icons 18 / Minus (6:4779) — the collapse
  // affordance on every All Filters row. Figma draws Minus as a 10×2 rule
  // rather than an exported glyph, so it's a rect here.
  function svgPlusSm() {
    return `<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M12 12H17C17.552 12 18 11.553 18 11C18 10.447 17.552 10 17 10H12V5C12 4.447 11.552 4 11 4C10.448 4 10 4.447 10 5V10H5C4.448 10 4 10.447 4 11C4 11.553 4.448 12 5 12H10V17C10 17.553 10.448 18 11 18C11.552 18 12 17.553 12 17V12V12Z" fill="#757575"/></svg>`;
  }
  function svgMinusSm() {
    return `<svg width="18" height="18" viewBox="0 0 22 22" fill="none"><rect x="6" y="10" width="10" height="2" rx="1" fill="#757575"/></svg>`;
  }

  // ── Pill config ────────────────────────────────────────────────

  // ── §3 Canonical size families ─────────────────────────────────
  // Four anchored canonical attributes. `order` drives §3 section order.
  // Values carry an explicit sortOrder so alpha families never sort
  // alphabetically and numeric families never sort lexically.
  // Taxonomy and section order come from Figma node 15:6228 (Filter tooltips):
  // Size → Width → Length → Inseam → Waist → Length (Fit).
  const SIZE_FAMILY_KEYS = ['size_apparel', 'width', 'length', 'inseam', 'waist', 'length_fit'];

  function alphaVals(list) {
    return list.map((v, i) => ({ v, sortOrder: i + 1, plus: false }));
  }
  function plusVals(list, startOrder) {
    return list.map((v, i) => ({ v, sortOrder: startOrder + i, plus: true }));
  }
  function numVals(list, plus) {
    return list.map(n => ({ v: String(n), sortOrder: n, plus: !!plus, numeric: true }));
  }

  function range(from, to) {
    const out = [];
    for (let n = from; n <= to; n++) out.push(n);
    return out;
  }

  // Values transcribed from Figma node 15:6228, in the order drawn.
  const SIZE_FAMILIES = {
    size_apparel: {
      display: 'Size', numeric: false,
      values: alphaVals(['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL',
                         '5XL', '6XL', 'MT', 'LT', 'XLT', '2XLT', '3XLT', '4XLT', 'OS']),
    },
    width: {
      display: 'Width', numeric: false,
      values: alphaVals(['AAAA', 'AAA', 'AA', 'A', 'B', 'C', 'D',
                         'M', 'R', 'E', 'EE', 'EEE', 'EEEE',
                         '5E', '6E', '32', '34', '30', '36', '38',
                         'Long', 'Regular-D', 'Short', 'Wide-E',
                         'NaturalFit-Wide toe-box', 'X-Long', '1D', 'XL']),
    },
    length:     { display: 'Length', numeric: true,  values: numVals(range(10, 80)) },
    inseam:     { display: 'Inseam', numeric: true,  values: numVals(range(3, 50)) },
    waist:      { display: 'Waist',  numeric: true,  values: numVals(range(16, 60)) },
    length_fit: {
      display: 'Length (Fit)', numeric: false,
      values: alphaVals(['Regular', 'Short', 'Long', 'Tall', 'Unhemmed']),
    },
  };

  // sorted once — §3 numeric families sort numerically, alpha by sortOrder
  SIZE_FAMILY_KEYS.forEach(k => {
    SIZE_FAMILIES[k].values.sort((a, b) => a.sortOrder - b.sortOrder);
  });

  // ── §4 Canonical parent colors ─────────────────────────────────
  // 15 parent colors + Camo. The ~451 specific canonicals roll up to
  // these and are never shown as filter values. sortOrder is the seeded
  // merch order — editable without a release.
  // Hexes and order are read straight off Figma node 78:12094, whose frame
  // is named "Current hex codes" — it is the source of truth for these
  // values. Every swatch also carries a 1px #e3e3e3 ring (see .swatch-dot).
  const PARENT_COLORS = [
    { name: 'Black',      hex: '#252525' },
    { name: 'White',      hex: '#ffffff' },
    { name: 'Gray',       hex: '#808080' },
    { name: 'Red',        hex: '#e02500' },
    { name: 'Blue',       hex: '#1163dd' },
    { name: 'Green',      hex: '#47a20a' },
    { name: 'Yellow',     hex: '#eeb824' },
    { name: 'Orange',     hex: '#e87500' },
    { name: 'Pink',       hex: '#fa4db2' },
    { name: 'Purple',     hex: '#8e44ad' },
    { name: 'Brown',      hex: '#795548' },
    { name: 'Beige',      hex: '#e4cba1' },
    { name: 'Silver',     hex: '#d5d5d5' },
    { name: 'Teal',       hex: '#299e94' },
    { name: 'Camo',       special: 'camo'  },
    { name: 'Multicolor', special: 'multi' },
  ];

  // ── §9 Display names are backend-controlled shopper language ───
  const ATTR_DISPLAY = {
    category: 'Category', brands: 'Brand', gender: 'Gender', color: 'Color',
    size_apparel: 'Size', width: 'Width', length: 'Length',
    inseam: 'Inseam', waist: 'Waist', length_fit: 'Length (Fit)',
    cushioning: 'Cushioning', activity: 'Activity',
    promotions: 'Promotions', 'buy-on': 'Buy on',
  };
  function attrDisplay(id) { return ATTR_DISPLAY[id] || id; }

  // Canonical value order per attribute (null → derive from catalog)
  const ATTR_VALUES = {
    gender:     ["Men's", "Women's", 'Unisex', 'Youth'],
    activity:   ['Road', 'Gravel', 'Mountain', 'Commuting', 'Indoor'],
    promotions: ['Flash Deal', 'Outlet', 'Giftable'],
    'buy-on':   ['ExpertVoice', 'Brand Site'],
    color:      PARENT_COLORS.map(c => c.name),
    brands:     null,
    // sock-specific — ordered least to most cushioned, not alphabetical
    cushioning: ['No Cushion', 'Light Cushion', 'Cushion', 'Full Cushion'],
  };

  // ── §2 Pill row ────────────────────────────────────────────────
  // Filters + Sort pinned at the start, then the canonical pill order.
  // A single Size pill stands for all four size families (§2).
  const PILLS = [
    { id: 'all-filters',  label: 'Filters',      icon: 'filter', chevron: false, fixed: true  },
    { id: 'sort',         label: 'Sort',         icon: 'sort',   chevron: true,  fixed: false },
    { id: 'category',     label: 'Category',     icon: null,     chevron: true,  fixed: false },
    { id: 'gender',       label: 'Gender',       icon: null,     chevron: true,  fixed: false },
    { id: 'brands',       label: 'Brands',       icon: null,     chevron: true,  fixed: false },
    { id: 'size_apparel', label: 'Size',         icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'width',        label: 'Width',        icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'color',        label: 'Color',        icon: null,     chevron: true,  fixed: false },
    { id: 'waist',        label: 'Waist',        icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'length',       label: 'Length',       icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'length_fit',   label: 'Length (Fit)', icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'inseam',       label: 'Inseam',       icon: null,     chevron: true,  fixed: false, family: true },
    { id: 'cushioning',   label: 'Cushioning',   icon: null,     chevron: true,  fixed: false },
  ];

  // Every attribute stands on its own — Length and Length (Fit) each get their
  // own pill and their own All Filters row rather than sharing one surface.
  const PILL_GROUPS = {};
  function pillAttrs(pillId) { return PILL_GROUPS[pillId] || [pillId]; }

  // The row is resolved at render time: the placeholder expands into one pill
  // per size family, most productive first, and families that can't yield
  // anything don't appear at all.
  // A pill whose attribute can't yield anything is dropped, same as any other
  // unavailable option. Category always stays — it's how you widen back out.
  // How much of the current result set actually carries this attribute.
  function attrPrevalence(attrId) {
    const rs = resultSet();
    if (!rs.length) return 0;
    const attrs = pillAttrs(attrId);
    return rs.filter(p => attrs.some(a => valuesOf(p, a).length > 0)).length / rs.length;
  }

  // An attribute has to be relevant to enough of the results to earn a spot in
  // the horizontal bar. Below the threshold it still exists — it just lives in
  // All Filters instead. Category always stays, and anything already applied
  // stays so it remains visible and removable.
  const PILL_PREVALENCE_THRESHOLD = 0.2;

  function pillYields(id) {
    if (id === 'category') return true;
    if (pillAttrs(id).some(a => getChecked(a).size > 0)) return true;
    // nothing left to offer → no pill, whatever the prevalence
    if (!pillAttrs(id).some(a => availableCount(a) > 0)) return false;
    return attrPrevalence(id) >= PILL_PREVALENCE_THRESHOLD;
  }

  // Controls, not attributes — nothing in the result set backs them, so they are
  // exempt from the availability test that governs every other pill.
  const NON_ATTR_PILLS = new Set(['all-filters', 'sort']);

  // Figma 4:1550 annotation: "Only show these filters here: All Filters, Sort,
  // Category, Gender, Brands ... 3-5 most common attribute filters in the set."
  // So those five always hold a seat, and the variant attributes compete for the
  // remaining slots. Category is navigation and never drops; Gender and Brands
  // still go if they have nothing left to offer.
  const PINNED_ATTR_PILLS = new Set(['category', 'gender', 'brands']);
  const PILL_ATTR_LIMIT = 3;

  // Row order is the fixed sequence above; relevance only decides what shows.
  function resolvedPills() {
    const isControl = p => NON_ATTR_PILLS.has(p.id) || !p.chevron;
    const competes = p => !isControl(p) && !PINNED_ATTR_PILLS.has(p.id);
    // An applied filter always keeps its pill, whatever its rank, so it stays
    // visible and removable. Those seats come out of the limit.
    const applied = PILLS.filter(p => competes(p)
      && pillAttrs(p.id).some(a => getChecked(a).size > 0));
    const ranked = PILLS
      .filter(p => competes(p) && !applied.includes(p) && pillYields(p.id))
      .sort((a, b) => attrPrevalence(b.id) - attrPrevalence(a.id))
      .slice(0, Math.max(0, PILL_ATTR_LIMIT - applied.length));
    const keep = new Set([...applied, ...ranked].map(p => p.id));
    return PILLS.filter(p => isControl(p)
      || (PINNED_ATTR_PILLS.has(p.id) ? pillYields(p.id) : keep.has(p.id)));
  }

  // ── Category drilldown tree (Category pill dropdown) ───────────
  const CATEGORY_DROPDOWN_TREE = {
    id: 'bike-apparel', label: 'Bike Apparel', count: 800,
    children: [
      { id: 'bike-gloves', label: 'Bike Gloves', count: 800 },
      {
        id: 'jerseys-tops', label: 'Bike Jerseys & Tops', count: 800,
        children: [
          { id: 'short-sleeve', label: 'Short Sleeve Jerseys', count: 420 },
          { id: 'long-sleeve',  label: 'Long Sleeve Jerseys',  count: 260 },
          { id: 'base-layers',  label: 'Base Layers',          count: 190 },
          { id: 'vests-gilets', label: 'Vests & Gilets',       count: 150 },
          {
            id: 'jackets', label: 'Jackets', count: 210,
            children: [
              { id: 'waterproof', label: 'Waterproof', count: 90 },
              { id: 'windproof',  label: 'Windproof',  count: 70 },
              { id: 'thermal',    label: 'Thermal',    count: 50 },
            ]
          },
        ]
      },
      {
        id: 'pads-protection', label: 'Bike Pads, Protection & Warmers', count: 800,
        children: [
          { id: 'knee-pads',    label: 'Knee Pads',    count: 120 },
          { id: 'arm-warmers',  label: 'Arm Warmers',  count: 210 },
          { id: 'leg-warmers',  label: 'Leg Warmers',  count: 180 },
        ]
      },
      {
        id: 'shorts-bibs', label: 'Bike Shorts & Bibs', count: 800,
        children: [
          { id: 'bib-shorts',   label: 'Bib Shorts',   count: 340 },
          { id: 'waist-shorts', label: 'Waist Shorts', count: 230 },
          { id: 'bib-tights',   label: 'Bib Tights',   count: 190 },
        ]
      },
      { id: 'bike-socks', label: 'Bike Socks', count: 800 },
      {
        // Footwear branch — the only products carrying Width, so narrowing
        // away from it is what orphans a Width filter (§7 / the §2 example).
        id: 'bike-shoes', label: 'Bike Shoes & Covers', count: 240,
        children: [
          { id: 'road-shoes',  label: 'Road Shoes',  count: 120 },
          { id: 'mtb-shoes',   label: 'MTB Shoes',   count: 80 },
          { id: 'shoe-covers', label: 'Shoe Covers', count: 40 },
        ]
      },
      {
        id: 'headwear', label: 'Cycling Headwear', count: 800,
        children: [
          { id: 'caps',      label: 'Caps',      count: 220 },
          { id: 'beanies',   label: 'Beanies',   count: 140 },
          { id: 'headbands', label: 'Headbands', count: 90 },
        ]
      },
    ]
  };

  // Index nodes by id + parent for navigation
  const CAT_NODES = {};
  const CAT_PARENT = {};
  const CAT_BY_LABEL = {};
  (function indexCat(node, parent) {
    CAT_NODES[node.id] = node;
    CAT_PARENT[node.id] = parent;
    CAT_BY_LABEL[node.label] = node;
    (node.children || []).forEach(c => indexCat(c, node));
  })(CATEGORY_DROPDOWN_TREE, null);

  // current viewed node id in the category drilldown
  let catViewId = CATEGORY_DROPDOWN_TREE.id;
  // staged (not-yet-applied) selection — committed only on Done
  let catDraft = null;

  function isCatSelected(node) {
    return catDraft === node.label;
  }

  // Seed the staged selection from the applied value and open the drilldown
  // at that node's context: its own view if it has children, otherwise its
  // parent's view (so the selected leaf shows in context).
  function seedCategoryDraft() {
    const cur = checked.get('category');
    catDraft = cur ? [...cur][0] : null;
    const selNode = catDraft ? CAT_BY_LABEL[catDraft] : null;
    if (selNode) {
      const hasKids = selNode.children && selNode.children.length;
      catViewId = hasKids ? selNode.id
                          : (CAT_PARENT[selNode.id] ? CAT_PARENT[selNode.id].id : selNode.id);
    } else {
      catViewId = CATEGORY_DROPDOWN_TREE.id;
    }
  }

  function commitCategoryDraft() {
    const next = catDraft ? new Set([catDraft]) : new Set();
    const changed = !sameSet(next, checked.get('category') || new Set());
    if (catDraft) checked.set('category', new Set([catDraft]));
    else checked.delete('category');
    invalidateCounts();
    if (changed) signalResultsLoading();
  }

  // ── State ─────────────────────────────────────────────────────

  // pillId → Set of checked option labels
  const checked = new Map();
  // pills without dropdown (toggle-only) just use a sentinel
  const TOGGLE_SENTINEL = '__toggle__';

  let openPillId = null;
  let openPillEl  = null;

  function isActive(id) {
    const s = checked.get(id);
    return s && s.size > 0;
  }

  function getChecked(id) {
    return checked.get(id) || new Set();
  }

  function toggleOption(pillId, label) {
    if (!checked.has(pillId)) checked.set(pillId, new Set());
    const s = checked.get(pillId);
    if (s.has(label)) { s.delete(label); if (s.size === 0) checked.delete(pillId); }
    else s.add(label);
  }

  function clearPill(pillId) { checked.delete(pillId); }

  // ── Dropdown ──────────────────────────────────────────────────

  const dropdown    = document.getElementById('filterDropdown');
  const dropCaret   = document.getElementById('dropdownCaret');
  const dropItems   = document.getElementById('dropdownItems');
  const dropClear   = document.getElementById('dropdownClear');
  const dropDone    = document.getElementById('dropdownDone');

  function openDropdown(pillEl, pillId) {
    openPillId = pillId;
    openPillEl  = pillEl;
    dropdown.classList.toggle('dropdown--category', pillId === 'category');
    dropdown.classList.toggle('dropdown--size', SIZE_FAMILY_KEYS.indexOf(pillId) !== -1 || !!PILL_GROUPS[pillId]);
    dropdown.classList.toggle('dropdown--color', pillId === 'color');
    dropdown.classList.toggle('dropdown--sort', pillId === 'sort');
    if (pillId === 'category') seedCategoryDraft();
    beginDraft(pillId);
    populateDropdown(pillId);
    positionDropdown(pillEl, pillId);
    dropdown.classList.add('open');
    renderPills();
    // renderPills() rebuilds the row, so the element captured above is detached.
    // Re-point at the live one or the scroll listener repositions against a node
    // whose rect is all zeros and the popover jumps to the top-left corner.
    openPillEl = document.querySelector('#pillsRow .pill--open') || openPillEl;
    ensureDropdownInView();
  }

  // If the popover runs past the bottom of the viewport, bring the pill row up to
  // the top of the screen so it has room. The scroll listener below re-anchors the
  // popover to its pill as the page moves.
  const VIEWPORT_BOTTOM_MARGIN = 16;
  const PILL_ROW_TOP_GAP = 12;

  function ensureDropdownInView() {
    if (dropdown.getBoundingClientRect().bottom <= window.innerHeight - VIEWPORT_BOTTOM_MARGIN) return;
    const wrap = document.getElementById('pillsScrollWrap');
    const target = window.scrollY + wrap.getBoundingClientRect().top - PILL_ROW_TOP_GAP;
    window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
  }

  function closeDropdown() {
    if (!openPillId) return;
    // no-op when the caller already committed — commitDraft() nulls the draft
    discardDraft();          // dismissed, not applied
    openPillId = null;
    openPillEl  = null;
    dropdown.classList.remove('open');
    renderPills();
  }

  // Every popover is the same width — keep in sync with .dropdown in styles.css
  const DROPDOWN_WIDTH = 375;

  function positionDropdown(pillEl, pillId) {
    const rect  = pillEl.getBoundingClientRect();
    const dropW = DROPDOWN_WIDTH;
    const isRightmost = pillId === 'buy-on';

    let left;
    if (isRightmost) {
      // right-align: right edge of dropdown = right edge of pill
      left = rect.right - dropW;
    } else {
      // center under pill
      left = rect.left + rect.width / 2 - dropW / 2;
    }

    // clamp to viewport
    left = Math.max(8, Math.min(left, window.innerWidth - dropW - 8));

    // every popover carries the caret now, so all of them leave the same 7.5px
    // of room above the panel for it
    const top = rect.bottom + 11;

    dropdown.style.left = left + 'px';
    dropdown.style.top  = top  + 'px';

    // caret sits under the pill's horizontal centre, but never so far out that
    // it rides off the panel's 12px rounded corner (a clamped dropdown near the
    // viewport edge would otherwise push it past the end)
    const CARET_W = 15;              // Figma export is 15 × 7.5
    const CARET_INSET = 12;          // matches the panel's border-radius
    const caretCenter = rect.left + rect.width / 2 - left;
    const caretLeft = Math.max(
      CARET_INSET,
      Math.min(caretCenter - CARET_W / 2, dropW - CARET_W - CARET_INSET),
    );
    dropCaret.style.left = caretLeft + 'px';
  }

  // ── Staged selection ───────────────────────────────────────────
  // Nothing reaches the result set until Done. The open surface edits a draft
  // of its own attributes; closing any other way throws the draft away.
  // (Category stages through catDraft, which already worked this way.)
  let draft = null;

  function beginDraft(pillId) {
    if (pillId === 'category') { draft = null; return; }
    if (pillId === 'sort') { draft = null; sortDraft = sortSelected; return; }
    draft = new Map();
    pillAttrs(pillId).forEach(a => draft.set(a, new Set(getChecked(a))));
  }
  function discardDraft() { draft = null; sortDraft = null; }
  const sameSet = (a, b) => a.size === b.size && [...a].every(v => b.has(v));

  function commitDraft() {
    let changed = false;
    if (sortDraft) {
      changed = sortDraft !== sortSelected;
      sortSelected = sortDraft;
      sortDraft = null;
    }
    if (draft) {
      draft.forEach((set, a) => {
        if (!sameSet(set, checked.get(a) || new Set())) changed = true;
        if (set.size) checked.set(a, new Set(set));
        else checked.delete(a);
      });
      draft = null;
      invalidateCounts();
    }
    // opening a surface and closing it untouched is not a load
    if (changed) signalResultsLoading();
  }
  // selection state for the open surface — the draft when there is one
  function selGet(attrId) {
    return (draft && draft.has(attrId)) ? draft.get(attrId) : getChecked(attrId);
  }
  function draftToggle(attrId, value) {
    if (!draft || !draft.has(attrId)) { toggleOption(attrId, value); return; }
    const s = draft.get(attrId);
    if (s.has(value)) s.delete(value); else s.add(value);
  }
  function draftClear(pillId) {
    if (!draft) { pillAttrs(pillId).forEach(clearPill); return; }
    draft.forEach(s => s.clear());
  }
  // Run fn as though the draft were applied — used to preview the result count.
  // Category stages through catDraft rather than `draft`, so it has to be swapped
  // in too; otherwise the preview ignores a drilldown already made on screen.
  function surfaceIsOpen() {
    return openPillId !== null || document.getElementById('afPanel').classList.contains('open');
  }

  function withDraft(fn) {
    const stageCat = surfaceIsOpen();
    if (!draft && !stageCat) return fn();

    const catBackup = checked.get('category');
    if (stageCat) {
      if (catDraft) checked.set('category', new Set([catDraft]));
      else checked.delete('category');
    }
    const backup = new Map();
    if (draft) draft.forEach((set, a) => { backup.set(a, checked.get(a));
      if (set.size) checked.set(a, new Set(set)); else checked.delete(a); });
    try { return fn(); }
    finally {
      backup.forEach((prev, a) => { if (prev) checked.set(a, prev); else checked.delete(a); });
      if (stageCat) { if (catBackup) checked.set('category', catBackup); else checked.delete('category'); }
    }
  }

  // ── §5 Async facet counts ──────────────────────────────────────
  // Counts may resolve after the panel paints. Only the count shimmers —
  // the label and its tap target stay live and selectable throughout.
  const COUNT_LATENCY = 380;
  let countsReady = false;
  let countTimer  = null;

  function invalidateCounts() {
    countsReady = false;
    clearTimeout(countTimer);
    countTimer = setTimeout(() => { countsReady = true; settleCounts(); }, COUNT_LATENCY);
    settleCounts();
  }

  // Fill (or re-skeleton) every count currently on screen without a re-render,
  // so an open sheet keeps its scroll position.
  function settleCounts() {
    document.querySelectorAll('[data-cnt-attr]').forEach(el => {
      const attrId = el.dataset.cntAttr;
      const value  = el.dataset.cntVal;
      if (!countsReady) { el.classList.add('skel'); el.textContent = '0000'; return; }
      el.classList.remove('skel');
      el.textContent = '(' + facetCount(attrId, value).toLocaleString() + ')';

    });
    updateSheetCta();
    // the panel's footer count is a live count too — settle it the same way
    if (document.getElementById('afPanel').classList.contains('open')) syncAFFooter();
  }

  function cntEl(attrId, value) {
    const s = document.createElement('span');
    s.className = 'cnt' + (countsReady ? '' : ' skel');
    s.dataset.cntAttr = attrId;
    s.dataset.cntVal  = value;
    s.textContent = countsReady ? '(' + facetCount(attrId, value).toLocaleString() + ')' : '0000';
    return s;
  }

  // ── Shared filter-surface content (dropdown + bottom sheet) ────

  function buildFilterContent(container, pillId) {
    container.innerHTML = '';
    if (pillId === 'category') { populateCategoryDropdown(container); return; }
    if (pillId === 'sort')     { buildSortContent(container); return; }
    if (pillId === 'color')    { buildColorContent(container); return; }
    if (PILL_GROUPS[pillId]) {
      PILL_GROUPS[pillId].filter(fk => availableCount(fk) > 0 || getChecked(fk).size > 0).forEach(fk => {
        const fam = SIZE_FAMILIES[fk];
        const sec = document.createElement('div');
        sec.className = 'pop-section';
        const lab = document.createElement('div');
        lab.className = 'pop-section-label';
        lab.textContent = fam.display;
        sec.appendChild(lab);
        sec.appendChild(makeChipGrid(fk, fam.values, fam));
        container.appendChild(sec);
      });
      return;
    }
    if (SIZE_FAMILY_KEYS.indexOf(pillId) !== -1) {
      const fam = SIZE_FAMILIES[pillId];
      container.appendChild(makeChipGrid(pillId, fam.values.filter(v => !v.plus), fam));
      const plus = fam.values.filter(v => v.plus);
      if (plus.length && plus.some(v => isOffered(pillId, v.v))) {
        const sub = document.createElement('div');
        sub.className = 'fam-sub';
        sub.textContent = 'Plus sizes';
        container.appendChild(sub);
        container.appendChild(makeChipGrid(pillId, plus, fam));
      }
      return;
    }
    buildValueList(container, pillId, attrValues(pillId));
    syncClearBtn(pillId);
  }

  // Sort is single-select: radio rows, staged like every other popover.
  function buildSortContent(container) {
    const current = sortDraft || sortSelected;
    SORT_OPTIONS.forEach(opt => {
      const row = document.createElement('div');
      row.className = 'val-row' + (current === opt.id ? ' is-checked' : '');
      row.innerHTML = '<span class="val-rb"><span class="val-rb-dot"></span></span>';
      const lab = document.createElement('span');
      lab.className = 'val-label';
      lab.textContent = opt.label;
      row.appendChild(lab);
      row.addEventListener('click', () => {
        sortDraft = opt.id;
        populateDropdown('sort');
      });
      container.appendChild(row);
    });
  }

  function makeValueRow(attrId, value, leading, labelText) {
    const sel = selGet(attrId);
    const row = document.createElement('div');
    row.className = 'val-row' + (sel.has(value) ? ' is-checked' : '');
    row.appendChild(leading);
    const lab = document.createElement('span');
    lab.className = 'val-label';
    lab.textContent = labelText != null ? labelText : value;
    row.appendChild(lab);
    row.appendChild(cntEl(attrId, value));
    row.addEventListener('click', e => {
      e.stopPropagation();
      draftToggle(attrId, value);
      row.classList.toggle('is-checked', selGet(attrId).has(value));
      refreshOpenSurface();
    });
    return row;
  }

  function checkboxEl() {
    const cb = document.createElement('div');
    cb.className = 'val-cb';
    cb.innerHTML = `<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    return cb;
  }

  function buildValueList(container, attrId, values) {
    values.filter(v => isOffered(attrId, v))
          .forEach(v => container.appendChild(makeValueRow(attrId, v, checkboxEl())));
  }

  // Value chips in a 7-column grid (6 for numeric families), per Figma.
  // A label too wide for one cell claims the columns it needs.

  // Anything that can't yield product isn't shown at all. An already-applied
  // value is always kept so it stays visible and removable.
  function isOffered(attrId, value) {
    return facetCount(attrId, value) > 0 || getChecked(attrId).has(value);
  }

  function availableCount(attrId) {
    const vals = SIZE_FAMILY_KEYS.indexOf(attrId) !== -1
      ? SIZE_FAMILIES[attrId].values.map(v => v.v)
      : attrValues(attrId);
    return vals.filter(v => facetCount(attrId, v) > 0).length;
  }

  // Families ordered by how much product they can actually yield; ones that
  // offer nothing sink to the bottom. Canonical order breaks ties.
  function familiesByAvailability() {
    return SIZE_FAMILY_KEYS
      .map((fk, i) => ({ fk, i, n: availableCount(fk) }))
      .sort((a, b) => b.n - a.n || a.i - b.i)
      .map(x => x.fk);
  }

  function makeChipGrid(fk, values, fam) {
    const grid = document.createElement('div');
    grid.className = 'fam-grid' + (fam.numeric ? ' fam-grid--num' : '');

    // Only values present in the current result set — no zero-count options.
    values.filter(v => isOffered(fk, v.v)).forEach(v => {
      const sel  = selGet(fk).has(v.v);
      const chip = document.createElement('button');
      chip.className = 'size-chip' + (sel ? ' is-checked' : '');
      chip.textContent = v.v;
      chip.addEventListener('click', e => {
        e.stopPropagation();
        draftToggle(fk, v.v);
        refreshOpenSurface();
      });
      grid.appendChild(chip);
    });
    return grid;
  }

  // ── §4 Color sheet ─────────────────────────────────────────────
  // Only the 15 parent colors plus Camo. A swatch is never shown
  // without its spelled-out name.
  function buildColorContent(container) {
    const grid = document.createElement('div');
    grid.className = 'fam-grid fam-grid--color';

    PARENT_COLORS.filter(c => isOffered('color', c.name)).forEach(c => {
      const sel  = selGet('color').has(c.name);
      const chip = document.createElement('button');
      chip.className = 'size-chip color-chip' + (sel ? ' is-checked' : '');

      const dot = document.createElement('span');
      dot.className = 'swatch-dot'
        + (c.special === 'multi' ? ' swatch--multi' : c.special === 'camo' ? ' swatch--camo' : '')
        + (c.hex === '#ffffff' ? ' swatch--ring' : '');
      if (!c.special) dot.style.background = c.hex;
      chip.appendChild(dot);

      const name = document.createElement('span');
      name.className = 'color-name';
      name.textContent = c.name;
      chip.appendChild(name);

      chip.addEventListener('click', e => {
        e.stopPropagation();
        draftToggle('color', c.name);
        refreshOpenSurface();
      });
      grid.appendChild(chip);
    });
    container.appendChild(grid);
  }

  function syncClearBtn(pillId) {
    const hasSel = pillId === 'category'
      ? !!catDraft
      : pillId === 'sort'
        ? (sortDraft || sortSelected) !== 'relevance'
        : pillAttrs(pillId).some(a => selGet(a).size > 0);
    dropClear.classList.toggle('has-selection', hasSel);
    document.getElementById('sheetClear').classList.toggle('has-selection', hasSel);
  }

  function populateDropdown(pillId) {
    buildFilterContent(dropItems, pillId);
    // Sort is a choice, not a set of filters, so its footer reads Reset / Done
    dropClear.textContent = pillId === 'sort' ? 'Reset' : 'Clear';
    dropDone.textContent  = 'See Results';
    syncClearBtn(pillId);
  }

  // Redraw the open surface from the draft. Results stay put until Done.
  function refreshOpenSurface() {
    // the All Filters panel is a surface too — redraw it so the staged value
    // and the row summary both update
    if (afPanelOpen()) {
      // the staged set just moved, so every count on the panel is now stale
      invalidateCounts();
      renderAFPanel();
      return;
    }
    if (!openPillId) return;
    buildFilterContent(isMobile() ? sheetBody : dropItems, openPillId);
    syncClearBtn(openPillId);
    updateSheetCta();
  }

  // Re-render whatever surface is open, then refresh the page around it.
  // How long the page reads as "loading" after a filter change.
  const FILTER_LOADING_MS = 400;
  let loadingTimer = null;

  function showResultsSpinner() {
    if (document.querySelector('.loader-wrapper')) return;
    const wrap = document.createElement('div');
    wrap.className = 'loader-wrapper';
    wrap.setAttribute('aria-busy', 'true');
    wrap.setAttribute('aria-label', 'Loading products');
    wrap.innerHTML = `
      <span class="spinner">
        <svg width="150" height="150" class="background-ring"><circle cx="50%" cy="50%" r="35"></circle></svg>
        <svg width="150" height="150" class="animated-ring"><circle cx="50%" cy="50%" r="30"></circle></svg>
        <svg width="40" height="40" class="bolt"><path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM11.7939 9.10156C10.3072 9.10156 9.10158 10.3083 9.10156 11.7969V22.5781C9.10156 24.0667 10.3072 25.2734 11.7939 25.2734H20.3105C20.7126 25.2734 20.9726 25.6989 20.79 26.0576L15.7031 36.0547L31.7891 19.9482C32.8064 18.9296 32.0863 17.1877 30.6475 17.1875H26.1826C25.7806 17.1874 25.5206 16.762 25.7031 16.4033L29.4189 9.10156H11.7939Z"></path></svg>
      </span>`;
    document.body.appendChild(wrap);
  }

  function hideResultsSpinner() {
    const el = document.querySelector('.loader-wrapper');
    if (el) el.remove();
  }

  // Every path that changes the result set routes through here, so the grid reads
  // as loading whether the change came from a pill, the sheet, All Filters, a chip
  // or Clear all. The new grid is already painted underneath; the scrim lifts to it.
  function signalResultsLoading() {
    showResultsSpinner();
    clearTimeout(loadingTimer);
    loadingTimer = setTimeout(hideResultsSpinner, FILTER_LOADING_MS);
  }

  function onFilterChanged() {
    invalidateCounts();
    render();                 // pills, chips and counts update straight away
    if (openPillId) syncClearBtn(openPillId);
    signalResultsLoading();
  }

  // ── Category drilldown render ─────────────────────────────────

  function selectCategory(node) {
    catDraft = node.label; // staged only — applied on Done
  }

  // host container for the drilldown — dropdown on desktop, sheet on mobile
  let catHost = null;

  function makeCatRow(node, isHeader) {
    const hasChildren = node.children && node.children.length;
    const sel = isCatSelected(node);
    const isChev = hasChildren && !isHeader && !sel;
    // 168:1942 — the selected header shows only "Selected"; its count would be
    // the level total the shopper just chose, which says nothing new.
    const noCount = isHeader && sel;
    const row = document.createElement('div');
    row.className = 'cat-row' + (sel ? ' selected' : '')
      + (isHeader ? ' cat-row--header' : ' cat-row--child')
      + (noCount ? ' cat-row--nocount' : '');

    const lab = document.createElement('span');
    lab.className = 'cat-label';
    // 168:1944 — the header reads "All <level>": it's the select-all for the view
    lab.textContent = isHeader ? 'All ' + node.label : node.label;
    row.appendChild(lab);

    if (!noCount) {
      const cnt = cntEl('category', node.label);
      cnt.classList.add('cat-count');
      row.appendChild(cnt);
    }

    // trailing slot: "Selected" tag when chosen, else drilldown chevron
    if (sel) {
      const tag = document.createElement('span');
      tag.className = 'cat-selected-tag';
      tag.textContent = 'Selected';
      row.appendChild(tag);
    } else if (isChev) {
      const chev = document.createElement('span');
      chev.className = 'cat-chev-r';
      chev.innerHTML = svgChevSmRight();
      row.appendChild(chev);
    }

    row.addEventListener('click', e => {
      e.stopPropagation();
      selectCategory(node);
      // node with children (not the current header) → drill in
      if (hasChildren && !isHeader) catViewId = node.id;
      populateCategoryDropdown(catHost);
    });
    return row;
  }

  function populateCategoryDropdown(container) {
    const dropItems = catHost = (container || catHost || document.getElementById('dropdownItems'));
    dropItems.innerHTML = '';
    const node   = CAT_NODES[catViewId];
    const parent = CAT_PARENT[catViewId];

    // breadcrumb (hidden at root)
    if (parent) {
      const bc = document.createElement('button');
      bc.className = 'cat-breadcrumb';
      bc.innerHTML = `<span class="cat-bc-icon">${svgChevSmLeft()}</span><span>Back to ${parent.label}</span>`;
      bc.addEventListener('click', e => {
        e.stopPropagation();
        catViewId = parent.id;
        populateCategoryDropdown();
      });
      dropItems.appendChild(bc);
    }

    // header = current node (select-all for this level)
    dropItems.appendChild(makeCatRow(node, true));

    // children in a 12px-inset container
    const kids = node.children || [];
    if (kids.length) {
      const wrap = document.createElement('div');
      wrap.className = 'cat-children';
      // Category is constrained like anything else — filter to a shoe width
      // and only the categories that take one remain listed.
      kids.filter(c => isOffered('category', c.label))
          .forEach(c => wrap.appendChild(makeCatRow(c, false)));
      dropItems.appendChild(wrap);
    }

    syncClearBtn('category');
    // the drilldown redraws itself rather than the whole surface, so the live
    // counts that sit outside it have to be nudged by hand
    updateSheetCta();
    if (document.getElementById('afPanel').classList.contains('open')) syncAFFooter();
  }

  dropClear.addEventListener('click', () => {
    if (!openPillId) return;
    if (openPillId === 'category') {
      catDraft = null; // clear staged selection only
      populateCategoryDropdown();
      return;
    }
    if (openPillId === 'sort') {
      sortDraft = 'relevance';
      populateDropdown('sort');
      return;
    }
    draftClear(openPillId);
    refreshOpenSurface();
  });

  // Done = apply staged category selection, then close
  dropDone.addEventListener('click', () => {
    if (openPillId === 'category') commitCategoryDraft();
    else commitDraft();
    render();
    closeDropdown();
  });

  // Close on outside click. Clicking away commits the staged selection — same as
  // pressing Done. Escape still throws the draft away, so there is one deliberate
  // way to back out of a popover without applying it.
  document.addEventListener('click', e => {
    if (!openPillId) return;
    if (dropdown.contains(e.target)) return;
    if (openPillEl && openPillEl.contains(e.target)) return;
    if (openPillId === 'category') commitCategoryDraft();
    else commitDraft();
    render();
    closeDropdown();
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDropdown(); });

  // Keep dropdown pinned to its pill on scroll (page or pill-row) + resize.
  // Capture-phase catches scroll from the horizontally-scrolling pills row too.
  function repositionOpenDropdown() {
    if (openPillId && openPillEl) positionDropdown(openPillEl, openPillId);
  }
  window.addEventListener('scroll', repositionOpenDropdown, true);
  window.addEventListener('resize', repositionOpenDropdown);

  // ── §2 Mobile bottom sheet ─────────────────────────────────────
  // On mobile every pill opens a bottom sheet instead of the popover.

  const MOBILE_Q   = window.matchMedia('(max-width: 640px)');
  const sheet      = document.getElementById('filterSheet');
  const sheetOv    = document.getElementById('sheetOverlay');
  const sheetBody  = document.getElementById('sheetBody');
  const sheetTitle = document.getElementById('sheetTitle');
  const sheetCta   = document.getElementById('sheetCta');
  const sheetClear = document.getElementById('sheetClear');

  function isMobile() { return MOBILE_Q.matches; }

  function openSheet(pillId) {
    openPillId = pillId;
    openPillEl = null;
    if (pillId === 'category') seedCategoryDraft();
    beginDraft(pillId);
    sheetTitle.textContent = (resolvedPills().find(p => p.id === pillId) || { label: '' }).label;
    buildFilterContent(sheetBody, pillId);
    syncClearBtn(pillId);
    sheetOv.classList.add('open');
    sheet.classList.add('open');
    updateSheetCta();   // after .open — the CTA only paints while the sheet is up
    document.body.style.overflow = 'hidden';
    renderPills();
  }

  function closeSheet(apply) {
    if (apply) {
      if (openPillId === 'category') commitCategoryDraft();
      else commitDraft();
    } else {
      discardDraft();
      if (openPillId === 'category') catDraft = null;
    }
    openPillId = null;
    sheetOv.classList.remove('open');
    sheet.classList.remove('open');
    document.body.style.overflow = '';
    render();
  }

  // §5 — CTA states the live result count and updates on every selection.
  function updateSheetCta() {
    if (!sheet.classList.contains('open')) return;
    if (!countsReady) {
      sheetCta.disabled = false;
      sheetCta.innerHTML = 'Show <span class="cnt skel">0000</span> results';
      return;
    }
    const n = withDraft(() => resultSet().length);
    if (n === 0) {
      // Never drop the shopper into an empty grid straight from a sheet.
      sheetCta.disabled = true;
      sheetCta.textContent = 'No results — adjust filters';
      return;
    }
    sheetCta.disabled = false;
    sheetCta.textContent = `Show ${n.toLocaleString()} ${n === 1 ? 'result' : 'results'}`;
  }

  sheetOv.addEventListener('click', () => closeSheet(false));
  document.getElementById('sheetClose').addEventListener('click', () => closeSheet(false));
  sheetCta.addEventListener('click', () => { if (!sheetCta.disabled) closeSheet(true); });
  sheetClear.addEventListener('click', () => {
    if (!openPillId) return;
    if (openPillId === 'category') catDraft = null;
    else draftClear(openPillId);
    refreshOpenSurface();
  });

  // Unified entry point — sheet on mobile, popover on desktop.
  function openFilterSurface(pillEl, pillId) {
    if (isMobile()) openSheet(pillId);
    else openDropdown(pillEl, pillId);
  }

  // ── Pill row scroll buttons ────────────────────────────────────

  function updateScrollBtns() {
    const row      = document.getElementById('pillsRow');
    const wrap     = document.getElementById('pillsScrollWrap');
    const leftBtn  = document.getElementById('pillsScrollLeft');
    const rightBtn = document.getElementById('pillsScrollRight');
    if (!row) return;

    const hasOverflow = row.scrollWidth > row.clientWidth + 2;
    const atStart     = row.scrollLeft <= 2;
    const atEnd       = row.scrollLeft >= row.scrollWidth - row.clientWidth - 2;

    leftBtn.hidden  = atStart;
    rightBtn.hidden = !hasOverflow || atEnd;
    wrap.classList.toggle('has-left',  !atStart);
    wrap.classList.toggle('has-right', hasOverflow && !atEnd);
  }

  document.getElementById('pillsScrollLeft').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('pillsRow').scrollBy({ left: -260, behavior: 'smooth' });
  });
  document.getElementById('pillsScrollRight').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('pillsRow').scrollBy({ left: 260, behavior: 'smooth' });
  });
  document.getElementById('pillsRow').addEventListener('scroll', updateScrollBtns);
  window.addEventListener('resize', updateScrollBtns);

  // ── Render ────────────────────────────────────────────────────

  function render() {
    renderPills();
    renderBrandRow();
    renderApplied();
    renderProducts();
    renderZeroState();
    settleCounts();
    requestAnimationFrame(updateScrollBtns);
  }

  // Every applied value counts toward the pill's label and selected state.
  function livePillValues(pillId) {
    const out = [];
    pillAttrs(pillId).forEach(a => getChecked(a).forEach(v => out.push(v)));
    return out;
  }

  function pillLabel(p) {
    if (p.id === 'sort') return p.label;   // the chosen sort lives in the popover
    if (p.id === 'all-filters' || !p.chevron) return p.label;
    // §2 — applied state is the count, never the value itself
    const n = livePillValues(p.id).length;
    return n ? `${p.label} (${n})` : p.label;
  }

  function renderPills() {
    const row = document.getElementById('pillsRow');
    // Store references for repositioning on scroll/resize
    row.innerHTML = '';

    resolvedPills().forEach(p => {
      const btn = document.createElement('button');
      const isOpen = openPillId === p.id;
      // keep a live reference — renderPills rebuilds buttons, so the old
      // openPillEl detaches and its getBoundingClientRect() would read 0,0
      if (isOpen) openPillEl = btn;

      // "All Filters" = dark only when any filter applied; "sort" = never dark
      let pillActive;
      if (p.id === 'all-filters') pillActive = appliedAttrIds().length > 0;
      else if (p.id === 'sort')   pillActive = false;
      else if (p.chevron)         pillActive = livePillValues(p.id).length > 0;
      else                        pillActive = isActive(p.id);

      if (p.icon && p.chevron)       btn.className = 'pill pill--icon-label-chev';
      else if (p.icon)               btn.className = 'pill pill--icon-label';
      else if (p.chevron)            btn.className = 'pill pill--label-chev';
      else                           btn.className = 'pill pill--toggle';

      if (p.fixed)    btn.classList.add('pill--fixed');
      if (pillActive) btn.classList.add('active');
      if (isOpen)     btn.classList.add('pill--open');

      // left icon
      const iconColor = pillActive ? '#fff' : '#252525';
      if (p.icon === 'filter') btn.innerHTML += `<span class="pill-icon">${svgFilter(iconColor)}</span>`;
      else if (p.icon === 'sort') btn.innerHTML += `<span class="pill-icon">${svgSort(iconColor)}</span>`;

      // label — Size collapses all four families into one pill (§2)
      const labelSpan = document.createElement('span');
      labelSpan.textContent = pillLabel(p);
      btn.appendChild(labelSpan);

      // right chevron
      if (p.chevron) btn.innerHTML += `<span class="pill-chevron">${svgChevron()}</span>`;

      if (p.id === 'all-filters') {
        btn.classList.add('pill--all-filters');
        btn.addEventListener('click', (e) => { e.stopPropagation(); openAllFilters(); });
      }

      if (!p.fixed) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (p.chevron) {
            if (openPillId === p.id) { isMobile() ? closeSheet(false) : closeDropdown(); }
            else openFilterSurface(btn, p.id);
          } else {
            // toggle only
            if (isActive(p.id)) {
              clearPill(p.id);
            } else {
              if (!checked.has(p.id)) checked.set(p.id, new Set());
              checked.get(p.id).add(TOGGLE_SENTINEL);
            }
            onFilterChanged();
          }
        });
      }

      row.appendChild(btn);
    });
  }

  // §6 — one chip per applied value, in pill order. An out-of-scope value
  // still gets its chip; it simply stops constraining the results.
  function appliedChipList() {
    const out = [];
    resolvedPills().forEach(p => {
      pillAttrs(p.id).forEach(a => {
        getChecked(a).forEach(v => out.push({ attrId: a, value: v, pill: p }));
      });
    });
    return out;
  }

  function renderApplied() {
    const row = document.getElementById('appliedRow');
    row.innerHTML = '';
    const chips = appliedChipList();

    // §6 — a value string shared by two or more *different* attributes makes
    // every colliding chip (and only those) carry its attribute label.
    const attrsByValue = new Map();
    chips.forEach(c => {
      if (!attrsByValue.has(c.value)) attrsByValue.set(c.value, new Set());
      attrsByValue.get(c.value).add(c.attrId);
    });

    if (chips.length) {
      // §6 — Clear all sits at the beginning of the row
      const clearBtn = document.createElement('button');
      clearBtn.className = 'clear-all';
      clearBtn.textContent = 'Clear all';
      clearBtn.addEventListener('click', e => {
        e.stopPropagation();
        checked.clear();
        catDraft = null;
        if (openPillId) buildFilterContent(isMobile() ? sheetBody : dropItems, openPillId);
        onFilterChanged();
      });
      row.appendChild(clearBtn);
    }

    chips.forEach(c => {
      const chip = document.createElement('div');
      chip.className = 'chip';

      const collides = attrsByValue.get(c.value).size > 1;
      const bare = c.value === TOGGLE_SENTINEL ? c.pill.label : c.value;

      const span = document.createElement('span');
      if (collides) {
        const tag = document.createElement('span');
        tag.className = 'chip-attr';
        tag.textContent = attrDisplay(c.attrId) + ': ';
        chip.appendChild(tag);
      }
      span.textContent = bare;
      chip.appendChild(span);

      const xBtn = document.createElement('button');
      xBtn.className = 'chip-x';
      xBtn.setAttribute('aria-label', `Remove ${bare}`);
      xBtn.innerHTML = svgClose('#757575');
      xBtn.addEventListener('click', e => {
        e.stopPropagation();
        toggleOption(c.attrId, c.value);
        if (c.attrId === 'category') catDraft = null;
        onFilterChanged();
      });
      chip.appendChild(xBtn);

      row.appendChild(chip);
    });
  }

  // ── Brand carousel (Figma 52:8073) ─────────────────────────────
  // Tapping a brand applies the Brands filter, so the carousel and the
  // Brands pill are the same state.
  const CAROUSEL_BRANDS = [
    { name: 'PEARL iZUMi',       img: 'pearl-izumi.jpg' },
    { name: 'Leatt',             img: 'leatt.jpg' },
    { name: 'Endura',            img: 'endura.jpg' },
    { name: 'Nikwax',            img: 'nikwax.jpg' },
    { name: 'Chrome Industries', img: 'chrome.jpg' },
    { name: 'Rudy Project',      img: 'rudy-project.jpg' },
    { name: 'DeFeet',            img: 'defeet.jpg' },
    { name: 'Gizmo Cycling',     img: 'gizmo-cycling.jpg' },
    { name: 'Club Ride',         img: 'club-ride.jpg' },
  ];

  function renderBrandRow() {
    const row = document.getElementById('brandRow');
    row.innerHTML = '';
    // Display only — the cards are not a filter surface. Brands are chosen from
    // the Brands pill or See all.
    CAROUSEL_BRANDS.forEach(b => {
      const el = document.createElement('div');
      el.className = 'brand-item';
      el.innerHTML = `
        <span class="brand-logo"><img src="images/brands/${b.img}" alt="${b.name}" loading="lazy"></span>
        <span class="brand-name">${b.name}</span>`;
      row.appendChild(el);
    });
    const all = document.createElement('button');
    all.className = 'brand-all';
    all.innerHTML = `<span>See all</span><span class="cat-chev-r">${svgChevSmRight()}</span>`;
    all.addEventListener('click', e => { e.stopPropagation(); openAllFilters(); });
    row.appendChild(all);
  }

  // ── Product grid ──────────────────────────────────────────────

  // §10 — a raw size value indexes into every bucket it spans.
  // `raw` is what the card always shows; `buckets` is what the filter matches.
  function sz(raw, buckets) { return { raw: String(raw), buckets: buckets || [String(raw)] }; }
  function szList(list) { return list.map(v => sz(v)); }

  // ── Catalogue ──────────────────────────────────────────────────
  // Brand, product name, sale price, save % and MSRP are transcribed from
  // Figma node 52:8065, and the imagery is the source artwork exported from
  // that same frame. Category, colour, size and the domain attributes below
  // are NOT in the design — they're assigned here so the filters have
  // something to bite on.
  const PRODUCTS_BASE = [
    { cat: 'short-sleeve', img: 'fig01.jpg', brand: 'Fox Racing',       name: 'Ranger Tru Dri Ss Jersey',                            price: '$32.47',  save: 'Save 50%', msrp: '$64.95 MSRP' },
    { cat: 'bib-tights',   img: 'fig03.jpg', brand: 'Outdoor Research', name: "Men's Freewheel Ride Pants",                          price: '$75.00',  save: 'Save 50%', msrp: '$150.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig04.jpg', brand: 'Outdoor Research', name: "Men's Freewheel Ride Shorts",                         price: '$65.00',  save: 'Save 50%', msrp: '$130.00 MSRP' },
    { cat: 'thermal',      img: 'fig05.jpg', brand: 'Outdoor Research', name: "Men's Ferrosi Hoodie",                                price: '$82.50',  save: 'Save 50%', msrp: '$165.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig06.jpg', brand: 'Outdoor Research', name: 'Women’s Ad-Vantage Shorts — 6" Inseam',      price: '$24.15',  save: 'Save 65%', msrp: '$69.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig07.jpg', brand: 'Club Ride',        name: "Men's New West Shirt",                                price: '$63.00',  save: 'Save 30%', msrp: '$90.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig09.jpg', brand: 'Outdoor Research', name: "Men's Freewheel Short Sleeve Jersey",                 price: '$32.50',  save: 'Save 50%', msrp: '$65.00 MSRP' },
    { cat: 'waterproof',   img: 'fig10.jpg', brand: 'Outdoor Research', name: "Men's Helium UL Jacket",                              price: '$112.50', save: 'Save 50%', msrp: '$225.00 MSRP' },
    { cat: 'base-layers',  img: 'fig11.jpg', brand: 'Outdoor Research', name: "Men's Grayland Fleece Pullover Hoodie",               price: '$64.50',  save: 'Save 50%', msrp: '$129.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig12.jpg', brand: 'Outdoor Research', name: "Women's Freewheel Ride Shorts",                       price: '$65.00',  save: 'Save 50%', msrp: '$130.00 MSRP' },
    { cat: 'thermal',      img: 'fig13.jpg', brand: 'Outdoor Research', name: "Men's Ultima Soft Shell Hoodie",                      price: '$110.00', save: 'Save 50%', msrp: '$220.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig14.jpg', brand: 'PEARL iZUMi',      name: "Men's PRO Mesh Jersey",                               price: '$99.00',  save: 'Save 40%', msrp: '$165.00 MSRP' },
    { cat: 'windproof',    img: 'fig15.jpg', brand: 'Outdoor Research', name: "Men's Freewheel Half Zip Soft Shell Hoodie",          price: '$100.00', save: 'Save 50%', msrp: '$200.00 MSRP' },
    { cat: 'windproof',    img: 'fig16.jpg', brand: 'Outdoor Research', name: "Women's Freewheel Half Zip Soft Shell Hoodie",        price: '$100.00', save: 'Save 50%', msrp: '$200.00 MSRP' },
    { cat: 'bib-tights',   img: 'fig17.jpg', brand: 'Outdoor Research', name: "Women's Freewheel MTB Ride Pants",                    price: '$75.00',  save: 'Save 50%', msrp: '$150.00 MSRP' },
    { cat: 'windproof',    img: 'fig18.jpg', brand: 'Outdoor Research', name: "Men's Ultima Soft Shell Jacket",                      price: '$100.00', save: 'Save 50%', msrp: '$200.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig20.jpg', brand: 'Outdoor Research', name: 'Men’s Swift Lite Lined Shorts — 7" Inseam',  price: '$45.00',  save: 'Save 50%', msrp: '$90.00 MSRP' },
    { cat: 'long-sleeve', img: 'fig21.png', brand: 'Fox Racing', name: 'Defend Ls Jersey', price: '$69.96', save: 'Save 30%', msrp: '$99.95 MSRP' },
    { cat: 'waist-shorts', img: 'fig22.jpg', brand: 'PEARL iZUMi', name: 'Men\'s PRO Shorts', price: '$123.00', save: 'Save 40%', msrp: '$205.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig23.jpg', brand: 'Outdoor Research', name: 'Men\'s Freewheel MTB Lite Ride Shorts', price: '$55.00', save: 'Save 50%', msrp: '$110.00 MSRP' },
    { cat: 'long-sleeve', img: 'fig24.jpg', brand: 'Outdoor Research', name: 'Men\'s ActiveIce Spectrum Sun Long Sleeve Tee', price: '$37.50', save: 'Save 50%', msrp: '$75.00 MSRP' },
    { cat: 'long-sleeve', img: 'fig25.jpg', brand: 'Outdoor Research', name: 'Men\'s Freewheel MTB Long Sleeve Jersey', price: '$37.50', save: 'Save 50%', msrp: '$75.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig26.png', brand: 'Club Ride', name: 'Men\'s Go Long Shirt', price: '$70.00', save: 'Save 30%', msrp: '$100.00 MSRP' },
    { cat: 'bib-tights', img: 'fig27.png', brand: 'O\'NEAL', name: 'Men\'s Trailfinder Pant', price: '$59.99', save: 'Save 40%', msrp: '$99.99 MSRP' },
    { cat: 'bib-tights', img: 'fig28.jpg', brand: 'PEARL iZUMi', name: 'Men\'s AmFIB® Cycling Bib Tights', price: '$135.00', save: 'Save 40%', msrp: '$225.00 MSRP' },
    { cat: 'thermal', img: 'fig29.jpg', brand: 'Stio', name: 'Men\'s Ender Hooded Jacket', price: '$188.30', save: 'Save 30%', msrp: '$269.00 MSRP' },
    { cat: 'bib-tights', img: 'fig30.png', brand: 'Fox Racing', name: 'Ranger Pant', price: '$97.96', save: 'Save 30%', msrp: '$139.95 MSRP' },
    { cat: 'thermal', img: 'fig31.jpg', brand: 'Minus33 Merino Wool', name: 'Men\'s Wool 1/4 Zip Merino Sun Hoodie - Microweight', price: '$84.02', save: 'Save 30%', msrp: '$119.99 MSRP' },
    { cat: 'thermal', img: 'fig32.jpg', brand: 'Minus33 Merino Wool', name: 'Midweight Men\'s Wool 1/4 Zip - 100% Merino Wool', price: '$77.01', save: 'Save 30%', msrp: '$109.99 MSRP' },
    { cat: 'waterproof', img: 'fig33.jpg', brand: 'Outdoor Research', name: 'Men\'s Freewheel MTB Stretch Rain Jacket', price: '$119.50', save: 'Save 50%', msrp: '$239.00 MSRP' },
    { cat: 'bib-shorts', img: 'fig34.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Expedition Bib Shorts', price: '$93.00', save: 'Save 40%', msrp: '$155.00 MSRP' },
    { cat: 'bib-tights', img: 'fig35.jpg', brand: 'Fox Racing', name: 'Defend Pant', price: '$84.97', save: 'Save 50%', msrp: '$169.95 MSRP' },
    { cat: 'thermal', img: 'fig36.jpg', brand: 'Minus33 Merino Wool', name: 'Women\'s 1/4 Zip Merino Sun Hoodie - Microweight', price: '$84.02', save: 'Save 30%', msrp: '$119.99 MSRP' },
    { cat: 'waist-shorts', img: 'fig37.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Quest Shorts', price: '$39.00', save: 'Save 40%', msrp: '$65.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig38.jpg', brand: 'Fox Racing', name: 'Ranger Short W/Liner', price: '$49.97', save: 'Save 50%', msrp: '$99.95 MSRP' },
    { cat: 'waterproof', img: 'fig39.jpg', brand: 'Outdoor Research', name: 'Men\'s SkyChaser Jacket', price: '$170.00', save: 'Save 50%', msrp: '$340.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig40.jpg', brand: 'Club Ride', name: 'Men\'s Fuze Shorts 12" w/ Gunslinger Chamois', price: '$84.00', save: 'Save 30%', msrp: '$120.00 MSRP' },
    { cat: 'bib-shorts', img: 'fig41.jpg', brand: 'Craft', name: 'Men\'s Essence Cycling Bib Shorts - Black', price: '$71.49', save: 'Save 45%', msrp: '$129.99 MSRP' },
    { cat: 'waist-shorts', img: 'fig42.png', brand: 'Fox Racing', name: 'Flexair Short', price: '$90.96', save: 'Save 30%', msrp: '$129.95 MSRP' },
    { cat: 'windproof', img: 'fig43.jpg', brand: 'Outdoor Research', name: 'Men\'s Deviator Wind Jacket', price: '$82.50', save: 'Save 50%', msrp: '$165.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig44.jpg', brand: 'Fox Racing', name: 'Flexair Pro Ss Jersey', price: '$39.97', save: 'Save 50%', msrp: '$79.95 MSRP' },
    { cat: 'thermal', img: 'fig45.jpg', brand: 'Minus33 Merino Wool', name: 'Men\'s Brushed Merino Wool Full-Zip Hoodie - Heavyweight', price: '$154.04', save: 'Save 30%', msrp: '$219.99 MSRP' },
    { cat: 'bib-tights', img: 'fig46.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Summit Pants', price: '$96.00', save: 'Save 40%', msrp: '$160.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig47.jpg', brand: 'Outdoor Research', name: 'Men\'s Swift Lite Hybrid Shorts - 7" Inseam', price: '$45.00', save: 'Save 50%', msrp: '$90.00 MSRP' },
    { cat: 'thermal', img: 'fig48.jpg', brand: 'Minus33 Merino Wool', name: 'Women\'s Heavyweight Wool Full-Zip Sweater Top - 100% Merino Wool', price: '$115.53', save: 'Save 30%', msrp: '$164.99 MSRP' },
    { cat: 'thermal', img: 'fig49.jpg', brand: 'Minus33 Merino Wool', name: 'Women\'s Full Zip Merino Hoodie - Midweight', price: '$112.02', save: 'Save 30%', msrp: '$159.99 MSRP' },
    { cat: 'waist-shorts', img: 'fig50.png', brand: 'Club Ride', name: 'Men\'s Rider Short 9"', price: '$59.50', save: 'Save 30%', msrp: '$85.00 MSRP' },
    { cat: 'windproof', img: 'fig51.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Quest Barrier Convertible Jacket', price: '$87.00', save: 'Save 40%', msrp: '$145.00 MSRP' },
    { cat: 'waist-shorts', img: 'fig52.jpg', brand: 'Fox Racing', name: 'Defend Short', price: '$64.97', save: 'Save 50%', msrp: '$129.95 MSRP' },
    { cat: 'waist-shorts', img: 'fig53.jpg', brand: 'Outdoor Research', name: 'Women\'s Freewheel MTB Lite Ride Shorts', price: '$55.00', save: 'Save 50%', msrp: '$110.00 MSRP' },
    { cat: 'bib-shorts', img: 'fig54.jpg', brand: 'PEARL iZUMi', name: 'Men\'s PRO Transfer Liner Bib Shorts', price: '$114.00', save: 'Save 40%', msrp: '$190.00 MSRP' },
    { cat: 'waterproof', img: 'fig55.jpg', brand: 'Outdoor Research', name: 'Women\'s Helium UL Jacket', price: '$112.50', save: 'Save 50%', msrp: '$225.00 MSRP' },
    { cat: 'bib-tights', img: 'fig56.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Thermal Bib Tights', price: '$114.00', save: 'Save 40%', msrp: '$190.00 MSRP' },
    { cat: 'thermal', img: 'fig57.jpg', brand: 'Stio', name: 'Women\'s Modis Hooded Jacket', price: '$125.30', save: 'Save 30%', msrp: '$179.00 MSRP' },
    { cat: 'thermal', img: 'fig58.jpg', brand: 'Outdoor Research', name: 'Women\'s Ferrosi Hoodie', price: '$82.50', save: 'Save 50%', msrp: '$165.00 MSRP' },
    { cat: 'short-sleeve', img: 'fig59.jpg', brand: 'PEARL iZUMi', name: 'Men\'s Attack Jersey', price: '$54.00', save: 'Save 40%', msrp: '$90.00 MSRP' },
    { cat: 'bib-tights', img: 'fig60.jpg', brand: 'O\'NEAL', name: 'Men\'s Legacy Pants Black', price: '$77.99', save: 'Save 40%', msrp: '$129.99 MSRP' },
  ];

  const A = ['XS','S','M','L','XL','XXL'];
  const PRODUCT_ATTRS = [
    { colors:['Red','Black','Multicolor'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Mountain','Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Green','Black'],      gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A), waist: szList([30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Tall']) },
      attrs:{ activity:['Mountain','Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Gray','Black'],       gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A), waist: szList([30,32,34,36]), inseam: szList([30,32]), length_fit: szList(['Regular','Short']) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Blue','Gray'],        gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel','Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice','Brand Site'] } },
    { colors:['Teal','White'],       gender:"Women's", inStock:true,  sizes:{ size_apparel: szList(['XS','S','M','L']), waist: szList([28,30,32]), inseam: szList([30]), length_fit: szList(['Short']) },
      attrs:{ activity:['Commuting'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Beige','Brown','Multicolor'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting','Gravel'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Yellow','Gray'],      gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel','Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Orange','Black'],     gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road','Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Brown','Beige'],      gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Purple','Black'],     gender:"Women's", inStock:false,  sizes:{ size_apparel: szList(['XS','S','M','L','XL']), waist: szList([28,30,32,34]), inseam: szList([30,32]), length_fit: szList(['Regular','Short']) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black','Silver'],     gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel','Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['White','Blue'],       gender:"Men's",   inStock:false,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice','Brand Site'] } },
    { colors:['Green','Beige'],      gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Pink','Gray'],        gender:"Women's", inStock:true,  sizes:{ size_apparel: szList(['XS','S','M','L','XL']) },
      attrs:{ activity:['Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black','Teal'],       gender:"Women's", inStock:true,  sizes:{ size_apparel: szList(['XS','S','M','L']), waist: szList([28,30,32,34]), inseam: szList([30,32]), length_fit: szList(['Regular','Tall']) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Silver','Black'],     gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road','Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Camo','Green'],       gender:"Men's",   inStock:true,  sizes:{ size_apparel: szList(A), waist: szList([30,32,34,36,38]), inseam: szList([32]), length_fit: szList(['Short','Regular']) },
      attrs:{ activity:['Commuting','Gravel'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black', 'Gray'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Blue', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Gravel'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Green'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Red', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Gray', 'Silver'], gender:"Men's", inStock:false, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Mountain', 'Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Beige', 'Brown'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Commuting', 'Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Teal', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Mountain'], promotions:['Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Orange', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Purple'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Gravel'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Yellow', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['White', 'Gray'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Pink', 'Gray'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Mountain', 'Gravel'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Green', 'Beige'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Commuting', 'Road'], promotions:['Giftable'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Blue', 'Silver'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Brown'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Black', 'Gray'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Commuting'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Blue', 'Black'], gender:"Men's", inStock:false, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Green'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Mountain', 'Gravel'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Red', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Commuting', 'Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Gray', 'Silver'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Beige', 'Brown'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road'], promotions:['Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Teal', 'Black'], gender:"Unisex", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Orange', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Purple'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Yellow', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Mountain', 'Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['White', 'Gray'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting', 'Road'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Pink', 'Gray'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Mountain'], promotions:['Giftable'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Green', 'Beige'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Road'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Blue', 'Silver'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Brown'], gender:"Unisex", inStock:false, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Commuting'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Black'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Outlet'], 'buy-on':['ExpertVoice'] } },
    { colors:['Black', 'Gray'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']) },
      attrs:{ activity:['Mountain', 'Gravel'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Blue', 'Black'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting', 'Road'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Green'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Mountain'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Red', 'Black'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Road'], promotions:['Flash Deal'], 'buy-on':['ExpertVoice'] } },
    { colors:['Gray', 'Silver'], gender:"Women's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Gravel'], promotions:['Outlet'], 'buy-on':['ExpertVoice', 'Brand Site'] } },
    { colors:['Beige', 'Brown'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A) },
      attrs:{ activity:['Commuting'], promotions:['Giftable'], 'buy-on':['ExpertVoice'] } },
    { colors:['Teal', 'Black'], gender:"Men's", inStock:true, sizes:{ size_apparel: szList(A), waist: szList([28,30,32,34,36,38]), inseam: szList([30,32,34]), length_fit: szList(['Regular','Short','Long']), length: szList([30,32,34]) },
      attrs:{ activity:['Road', 'Gravel'], promotions:['Flash Deal', 'Outlet'], 'buy-on':['ExpertVoice'] } },
  ];

  const PRODUCTS = PRODUCTS_BASE.map((p, i) => Object.assign({}, p, PRODUCT_ATTRS[i] || { colors: [], sizes: {}, attrs: {}, gender: 'Unisex', inStock: true }));

  // ── §5 Faceting engine ─────────────────────────────────────────
  // Values within one attribute combine with OR; separate attributes AND.

  function valuesOf(p, attrId) {
    if (attrId === 'brands')   return [p.brand];
    if (attrId === 'gender')   return [p.gender];
    if (attrId === 'color')    return p.colors || [];
    if (attrId === 'in-stock') return p.inStock ? [TOGGLE_SENTINEL] : [];
    if (SIZE_FAMILY_KEYS.indexOf(attrId) !== -1) {
      return ((p.sizes || {})[attrId] || []).reduce((acc, s) => acc.concat(s.buckets), []);
    }
    return (p.attrs || {})[attrId] || [];
  }

  function categoryMatches(p, selSet) {
    const label = [...selSet][0];
    const node = CAT_BY_LABEL[label];
    if (!node) return true;
    return descendantIds(node).has(p.cat);
  }

  // Attributes that currently carry an applied selection
  function afPanelOpen() {
    return document.getElementById('afPanel').classList.contains('open');
  }

  // All Filters stages every attribute at once, so while it is open the draft is
  // the working set: availability, counts and which rows appear all follow what
  // you have staged, not what was last committed. Everywhere else the committed
  // state rules, so a pill popover still shows counts against applied filters.
  function effectiveSel(attrId) {
    if (afPanelOpen()) {
      if (attrId === 'category') {
        if (catDraft) return new Set([catDraft]);
      } else if (draft && draft.has(attrId)) {
        return draft.get(attrId);
      }
    }
    return checked.get(attrId) || new Set();
  }

  function appliedAttrIds() {
    const ids = new Set(checked.keys());
    if (afPanelOpen()) {
      if (draft) draft.forEach((_set, k) => ids.add(k));
      if (catDraft) ids.add('category');
    }
    return [...ids].filter(k => effectiveSel(k).size > 0);
  }

  // Does p satisfy attribute `attrId`'s applied values?
  function passesAttr(p, attrId) {
    const sel = effectiveSel(attrId);
    if (!sel || !sel.size) return true;
    if (attrId === 'category') return categoryMatches(p, sel);
    const vals = valuesOf(p, attrId);
    return vals.some(v => sel.has(v));
  }

  // Products passing every applied attribute except those in `skip`.
  // Out-of-stock product is hidden everywhere — results and facet counts —
  // until the shopper asks for it in All Filters.
  let showOutOfStock = false;

  function filterProducts(skip) {
    const skipSet = skip instanceof Set ? skip
                  : Array.isArray(skip)   ? new Set(skip)
                  : new Set(skip ? [skip] : []);
    return PRODUCTS.filter(p =>
      (showOutOfStock || p.inStock) &&
      appliedAttrIds().every(a => skipSet.has(a) || passesAttr(p, a))
    );
  }

  // Every applied filter constrains — no exemptions, no special cases.
  function resultSet() { return filterProducts([]); }

  // Standard facet count: products passing every OTHER applied attribute
  // that carry this value.
  function facetCount(attrId, value) {
    const pool = filterProducts([attrId]);
    if (attrId === 'category') {
      const node = CAT_BY_LABEL[value];
      if (!node) return pool.length;
      const ids = descendantIds(node);
      return pool.filter(p => ids.has(p.cat)).length;
    }
    return pool.filter(p => valuesOf(p, attrId).indexOf(value) !== -1).length;
  }

  // An attribute applies when something in the surrounding result set carries
  // it. Filtering to a shoe width leaves only categories that take one.
  function attrInScope(attrId) {
    return filterProducts([attrId]).some(p => valuesOf(p, attrId).length > 0);
  }
  function familyInScope(fk) { return attrInScope(fk); }

  // Values offered for an attribute, in canonical order (§4 sortOrder).
  function attrValues(attrId) {
    if (SIZE_FAMILY_KEYS.indexOf(attrId) !== -1) return SIZE_FAMILIES[attrId].values.map(v => v.v);
    const canonical = ATTR_VALUES[attrId];
    if (canonical) return canonical;
    const seen = [];
    PRODUCTS.forEach(p => valuesOf(p, attrId).forEach(v => { if (seen.indexOf(v) === -1) seen.push(v); }));
    return seen.sort();
  }

  const grid = document.getElementById('productGrid');
  const resultCount = document.getElementById('resultCount');

  // resolve applied category → its node, then all descendant ids
  function appliedCategoryNode() {
    const s = checked.get('category');
    if (!s || !s.size) return null;
    return CAT_BY_LABEL[[...s][0]] || null;
  }
  function descendantIds(node) {
    const ids = new Set();
    (function walk(n) { ids.add(n.id); (n.children || []).forEach(walk); })(node);
    return ids;
  }

  // §10 — sort behaviour is unchanged by an active Color or Size filter;
  // ranking is simply applied to the filtered products.
  function priceOf(p) { return parseFloat(p.price.replace(/[^0-9.]/g, '')) || 0; }
  function saveOf(p)  { return parseInt((p.save || '').replace(/[^0-9]/g, ''), 10) || 0; }

  function msrpOf(p) { return parseFloat((p.msrp || '').replace(/[^0-9.]/g, '')) || 0; }
  function titleOf(p) { return `${p.brand} ${p.name}`; }

  // The fixture carries no popularity or rating field. Rather than leave those two
  // options inert, they sort on stand-ins: discount depth for popularity, and a
  // stable hash of the title for rating. Deterministic, so the grid is repeatable.
  function pseudoRating(p) {
    const t = titleOf(p);
    let h = 0;
    for (let i = 0; i < t.length; i += 1) h = (h * 31 + t.charCodeAt(i)) % 1000;
    return h;
  }

  function sortProducts(list) {
    const arr = list.slice();
    if (sortSelected === 'popular')        arr.sort((a, b) => saveOf(b) - saveOf(a));
    else if (sortSelected === 'rating')    arr.sort((a, b) => pseudoRating(b) - pseudoRating(a));
    else if (sortSelected === 'az')        arr.sort((a, b) => titleOf(a).localeCompare(titleOf(b)));
    else if (sortSelected === 'za')        arr.sort((a, b) => titleOf(b).localeCompare(titleOf(a)));
    else if (sortSelected === 'msrp-high') arr.sort((a, b) => msrpOf(b) - msrpOf(a));
    else if (sortSelected === 'msrp-low')  arr.sort((a, b) => msrpOf(a) - msrpOf(b));
    return arr; // relevance → catalog order
  }

  function renderProducts() {
    const list = sortProducts(resultSet());

    grid.innerHTML = '';
    list.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img" style="background:${p.bg};">
          <img src="images/${p.img}" alt="${p.brand} ${p.name}" loading="lazy"
               onerror="this.parentNode.classList.add('image-unavailable'); this.remove()">
        </div>
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <span class="product-price">${p.price}</span>
          <span class="product-save">${p.save}</span>
        </div>
        <div class="product-msrp">${p.msrp}</div>
      `;
      grid.appendChild(card);
    });

    resultCount.textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'}`;
  }

  // ── §8 Zero results ────────────────────────────────────────────
  // The headline is built from every applied value across all attributes —
  // no attribute name is hardcoded into the sentence.
  function describeValue(attrId, value) {
    if (value === TOGGLE_SENTINEL) return attrDisplay(attrId).toLowerCase();
    if (SIZE_FAMILY_KEYS.indexOf(attrId) !== -1) {
      return `${SIZE_FAMILIES[attrId].display.toLowerCase()} ${value}`;
    }
    return value;
  }

  function renderZeroState() {
    const zero    = document.getElementById('zeroState');
    const headEl  = document.getElementById('zeroHead');
    const listEl  = document.getElementById('relaxList');
    const applied = appliedChipList();
    const empty   = resultSet().length === 0 && applied.length > 0;

    zero.classList.toggle('open', empty);
    if (!empty) return;

    headEl.textContent = 'No results for ' + applied.map(c => describeValue(c.attrId, c.value)).join(' · ');

    // A suggestion per applied value, scored by how many results removing it
    // returns, descending. A zero state with no suggestions is a defect.
    const suggestions = applied.map(c => {
      const backup = new Set(getChecked(c.attrId));
      toggleOption(c.attrId, c.value);
      const n = resultSet().length;
      if (backup.size) checked.set(c.attrId, backup); else checked.delete(c.attrId);
      return { c, n };
    }).sort((a, b) => b.n - a.n);

    listEl.innerHTML = '';
    suggestions.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'relax-btn';
      const label = document.createElement('span');
      label.textContent = `Remove ${describeValue(s.c.attrId, s.c.value)}`;
      const cnt = document.createElement('span');
      cnt.className = 'relax-count';
      cnt.textContent = `${s.n.toLocaleString()} ${s.n === 1 ? 'result' : 'results'}`;
      btn.appendChild(label);
      btn.appendChild(cnt);
      // §8 — no filter is ever auto-removed; the shopper performs the removal
      btn.addEventListener('click', () => {
        toggleOption(s.c.attrId, s.c.value);
        if (s.c.attrId === 'category') catDraft = null;
        onFilterChanged();
      });
      listEl.appendChild(btn);
    });
  }

  // ── All Filters Panel ─────────────────────────────────────────


  const SORT_OPTIONS = [
    { id: 'relevance', label: 'Relevance' },
    { id: 'popular',   label: 'Most Popular' },
    { id: 'rating',    label: 'Average Rating' },
    { id: 'az',        label: 'Alphabetical: A-Z' },
    { id: 'za',        label: 'Alphabetical: Z-A' },
    { id: 'msrp-high', label: 'MSRP Price: High to Low' },
    { id: 'msrp-low',  label: 'MSRP Price: Low to High' },
  ];

  // ── §9 Drawer groups ───────────────────────────────────────────
  // Attributes are grouped by domain, never presented as one flat list.
  // Universal groups come first; domain groups follow, collapsed.
  // The drawer is a flat list — one section per attribute, in this order.
  // Anything not named here follows in declaration order.
  // The pill bar carries only Category, Gender, Brands and the attribute
  // filters. Everything else lives here in All Filters — the drawer is the
  // superset, in this order.
  const DRAWER_ATTR_ORDER = [
    'category', 'brands', 'gender',
    'size_apparel', 'width', 'color',
    'waist', 'length', 'length_fit', 'inseam',
    'cushioning',
    'promotions', 'activity', 'buy-on',
  ];

  // An attribute renders only when something in the results carries it.
  function attrHasMatches(attrId) {
    if (attrId === 'category') return true;
    return attrPrevalence(attrId) > 0 || getChecked(attrId).size > 0;
  }

  function drawerAttrs() { return DRAWER_ATTR_ORDER.filter(attrHasMatches); }

  let sortSelected       = 'relevance';
  let sortDraft          = null;   // staged sort, applied on Done / click-away
  let brandsSearch       = '';
  // 168:2063 — Coupon Available is in the design but nothing in this catalogue
  // carries a coupon, so the row toggles without constraining the result set.
  let couponOnly         = false;

  function openAllFilters() {
    afOpen.clear();          // every row starts collapsed
    seedCategoryDraft();     // category drilldown opens at the applied value
    beginDraftAll();         // stage every attribute; Done commits the lot
    document.getElementById('afOverlay').classList.add('open');
    document.getElementById('afPanel').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderAFPanel();
  }

  function closeAllFilters() {
    discardDraft();
    catDraft = null;
    document.getElementById('afOverlay').classList.remove('open');
    document.getElementById('afPanel').classList.remove('open');
    document.body.style.overflow = '';
  }

  document.getElementById('afOverlay').addEventListener('click', closeAllFilters);
  document.getElementById('afCloseBtn').addEventListener('click', closeAllFilters);
  // Done applies everything staged in the panel
  document.getElementById('afDoneBtn').addEventListener('click', () => {
    commitCategoryDraft();
    commitDraft();
    render();
    closeAllFilters();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllFilters(); });

  document.getElementById('afClearAllBtn').addEventListener('click', () => {
    checked.clear();
    catDraft = null;
    if (draft) draft.forEach(set => set.clear());
    showOutOfStock = false;
    couponOnly = false;
    sortSelected = 'relevance';
    invalidateCounts();
    render();
    renderAFPanel();
  });

  function syncAFFooter() {
    const hasAny = !!catDraft ||
      DRAWER_ATTR_ORDER.some(a => a !== 'category' && selGet(a).size > 0);
    document.getElementById('afClearAllBtn').classList.toggle('af-active', hasAny);

    // 168:2086 — the count previews the staged draft, so it moves as rows are
    // ticked and before Done commits anything.
    const el = document.getElementById('afResultCount');
    if (!countsReady) {
      el.innerHTML = '<span class="cnt skel">0000</span> results';
      return;
    }
    const n = withDraft(() => resultSet().length);
    el.textContent = `${n.toLocaleString()} ${n === 1 ? 'result' : 'results'}`;
  }

  // ── Panel render ───────────────────────────────────────────

  // The panel is one list; rows expand and collapse in place. Every edit made
  // here stages into the same draft the popovers use and lands on Done.
  const afOpen = new Set();

  function sortLabel() {
    const o = SORT_OPTIONS.find(x => x.id === sortSelected);
    return o ? o.label : 'Relevance';
  }

  // List what's actually selected rather than a count — a shopper scanning the
  // collapsed list should see "S, M", not "2 selected".
  function appliedSummary(attrId) {
    // category stages through catDraft, so its summary previews the drilldown
    // the same way every other row previews its draft
    if (attrId === 'category') {
      return surfaceIsOpen() ? (catDraft || '') : ([...getChecked('category')][0] || '');
    }
    const vals = pillAttrs(attrId).reduce((acc, a) => {
      // keep each family in its canonical order, not click order
      const order = SIZE_FAMILY_KEYS.indexOf(a) !== -1
        ? SIZE_FAMILIES[a].values.map(v => v.v)
        : attrValues(a);
      const sel = selGet(a);
      return acc.concat(order.filter(v => sel.has(v)));
    }, []);
    if (!vals.length) return '';
    if (vals.length <= 4) return vals.join(', ');
    return vals.slice(0, 3).join(', ') + ` +${vals.length - 3} more`;
  }

  // stage every attribute at once, so the panel's Done commits the lot
  function beginDraftAll() {
    draft = new Map();
    DRAWER_ATTR_ORDER.forEach(a => {
      if (a === 'category') return;          // category stages via catDraft
      draft.set(a, new Set(getChecked(a)));
    });
  }

  function afRow(id, label, value, buildBody) {
    const open = afOpen.has(id);
    const sec = document.createElement('div');
    sec.className = 'af-row' + (open ? ' is-open' : '');

    const head = document.createElement('button');
    head.className = 'af-nav-row';
    head.setAttribute('aria-expanded', open ? 'true' : 'false');
    head.innerHTML = `
      <span class="af-nav-text">
        <span class="af-nav-label">${label}</span>
        ${value ? `<span class="af-nav-value">${value}</span>` : ''}
      </span>
      <span class="af-nav-toggle">${open ? svgMinusSm() : svgPlusSm()}</span>`;
    head.addEventListener('click', () => {
      // One section at a time: opening a row collapses whatever else was open.
      const wasOpen = afOpen.has(id);
      afOpen.clear();
      if (!wasOpen) afOpen.add(id);
      renderAFPanel();
    });
    sec.appendChild(head);

    if (open) {
      const bodyEl = document.createElement('div');
      bodyEl.className = 'af-row-body';
      buildBody(bodyEl);
      sec.appendChild(bodyEl);
    }
    return sec;
  }

  function renderAFPanel() {
    const body = document.getElementById('afBody');
    body.innerHTML = '';

    body.appendChild(afRow('sort-by', 'Sort by', sortLabel(), el => renderSortSection(el)));

    drawerAttrs().forEach(a => {
      body.appendChild(afRow(a, attrDisplay(a), appliedSummary(a), el => {
        if (a === 'category') {
          el.classList.add('dropdown--category');
          populateCategoryDropdown(el);
        } else {
          buildFilterContent(el, a);
        }
      }));
    });

    // 168:2063 / 168:2073 — two standalone toggles close the list.
    body.appendChild(afCheckRow('Coupon Available', couponOnly, () => {
      couponOnly = !couponOnly;
      renderAFPanel();
    }));
    body.appendChild(afCheckRow('Show out of stock', showOutOfStock, () => {
      showOutOfStock = !showOutOfStock;
      invalidateCounts();
      render();
      renderAFPanel();
    }));

    syncAFFooter();
  }

  function afCheckRow(label, on, onToggle) {
    const el = document.createElement('button');
    el.className = 'af-check-row' + (on ? ' is-on' : '');
    el.innerHTML = `
      <span class="af-check-box">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span>${label}</span>`;
    el.addEventListener('click', onToggle);
    return el;
  }

  // ── Sort section ───────────────────────────────────────────

  function renderSortSection(container) {
    SORT_OPTIONS.forEach(opt => {
      const isSel = sortSelected === opt.id;
      const item = document.createElement('div');
      item.className = 'af-item' + (isSel ? ' af-checked' : '');
      item.innerHTML = `
        <div class="af-rb"><div class="af-rb-dot"></div></div>
        <span class="af-item-label">${opt.label}</span>`;
      item.addEventListener('click', () => {
        sortSelected = opt.id;
        render();        // §10 — re-rank the already-filtered products
        renderAFPanel();
      });
      container.appendChild(item);
    });
  }

  // ── §9 One attribute inside a drawer group ─────────────────
  // The drawer is a superset of the pill row: the same state backs both,
  // so a selection made here shows up on the pill and vice versa.

  function renderDrawerAttr(container, attrId) {
    const block = document.createElement('div');
    block.className = 'af-attr-block';
    container.appendChild(block);

    if (attrId === 'category') {
      // Same drilldown as the Category pill — breadcrumb, "All <level>" header,
      // counts, chevrons — so both surfaces behave identically.
      const wrap = document.createElement('div');
      wrap.className = 'af-cat-wrap dropdown--category';
      block.appendChild(wrap);
      populateCategoryDropdown(wrap);
      return;
    }
    if (attrId === 'brands')   { renderBrandsSection(block);   return; }
    if (attrId === 'color')    { buildColorContent(block);     return; }

    const values = attrValues(attrId).filter(v => facetCount(attrId, v) > 0 || getChecked(attrId).has(v));
    buildValueList(block, attrId, values);
  }



  // ── Brands section ─────────────────────────────────────────

  function renderBrandsSection(container) {
    const searchWrap = document.createElement('div');
    searchWrap.className = 'af-search-wrap';
    searchWrap.innerHTML = `
      <span class="af-search-icon">
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
          <path d="M7.5 14a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.5 16l-3.5-3.5" stroke="#757575" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
      <input class="af-search" type="text" placeholder="Search brands" value="${brandsSearch}">`;
    container.appendChild(searchWrap);
    const input = searchWrap.querySelector('input');
    input.addEventListener('input', () => {
      brandsSearch = input.value;
      const cursorPos = input.selectionStart;
      // rebuild only this attribute's rows, keeping the search box focused
      let sib = searchWrap.nextSibling;
      while (sib) { const next = sib.nextSibling; sib.remove(); sib = next; }
      appendBrandRows(container);
      const newInput = container.querySelector('.af-search');
      if (newInput) { newInput.focus(); newInput.setSelectionRange(cursorPos, cursorPos); }
    });
    appendBrandRows(container);
  }

  function appendBrandRows(container) {
    const query = brandsSearch.toLowerCase();
    attrValues('brands').forEach(label => {
      if (query && !label.toLowerCase().includes(query)) return;
      if (facetCount('brands', label) === 0 && !getChecked('brands').has(label)) return;
      container.appendChild(makeValueRow('brands', label, checkboxEl()));
    });
  }

  // ── Category section ───────────────────────────────────────


  // ── Init ──────────────────────────────────────────────────────
  if (new URLSearchParams(window.location.search).get('preview') === 'filters') {
    document.body.classList.add('filters-preview');
  }
  invalidateCounts();
  render();

  // Switching between breakpoints closes whichever surface is open, so the
  // popover and the bottom sheet can never both be live at once.
  MOBILE_Q.addEventListener('change', () => {
    if (!openPillId) return;
    if (sheet.classList.contains('open')) closeSheet(false);
    else closeDropdown();
  });
