## Phase 4 — Enterprise Refactor Plan

**Goal:** Split oversized page components into cohesive sub-modules and extract shared primitives — zero visual, behavioral, SEO, or a11y change.

### Target files (before)
| File | Lines |
|---|---|
| `AfterSalesPage.tsx` | 1787 |
| `TurnkeyPage.tsx` | 1335 |
| `AboutPage.tsx` | 996 |
| `ContactPage.tsx` | 996 |
| `Header.tsx` | 752 |

Total: 5,866 → target ~1,800 across parents + section files each < 400 lines.

### Approach (per page)
Each oversized page is currently one file rendering multiple JSX "sections" (hero, stats, timeline, CTA, etc.). Refactor pattern:

1. Read the file, identify visually-distinct sections (usually one `<section>` each).
2. Extract each section to `src/components/site/<page>/<SectionName>.tsx` as a pure presentational component. Move only JSX + section-local constants/data arrays.
3. Keep animations, className strings, and DOM structure **byte-identical**.
4. Parent page file becomes a thin composition: imports + `<Hero /> <Stats /> ...`.
5. Shared data arrays that repeat (e.g. stats, service lists) move to `src/components/site/<page>/data.ts`.

### Header
- Extract `DesktopNav`, `MobileNav`, `MegaMenu` (products dropdown), and the search overlay into `src/components/site/header/` submodules.
- Keep the `Header` shell (scroll state, sticky wrapper) in `Header.tsx`.

### Shared extractions (only if used ≥2x with identical markup)
- Section heading pattern (eyebrow + h2 + subtitle) if repeated verbatim across ≥3 pages → `src/components/site/SectionHeading.tsx`.
- Repeated stat-card, CTA-band, or timeline-item markup → shared primitives under `src/components/site/primitives/`.

I will only extract shared primitives when the JSX is **structurally identical** across pages. If pages differ (even in class order), they stay local to avoid regressions.

### Guardrails
- No changes to `className`, animation props, `id`, `aria-*`, `head()`, route files, or public exports of parent components.
- After each page, run `tsgo --noEmit` + visual smoke check via Playwright screenshot vs baseline.
- Minimum Change Principle: props stay implicit (no over-typing); no logic reshaping.

### Deliverables at end
- Refactored file list w/ before/after line counts
- New component tree
- Duplicates eliminated
- Regression report (typecheck + screenshot diffs on `/`, `/about`, `/turnkey`, `/after-sales`, `/contact`)
- Confirmation of zero visual changes

### Out of scope
- Any file < 500 lines unless it contains obvious duplication of an extracted primitive.
- `BlogArticlePage`, `ProductDetail`, `PortfolioBrowser`, `ServicesPage`, `brands.tsx` — flagged for a future phase; leaving untouched to keep this pass reviewable.
- Design tokens (Phase 2 backlog).
