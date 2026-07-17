# Desktop Visual Scale Refinement (~10–12%)

Applied only at `lg:` / `xl:` breakpoints. Mobile and tablet layouts are untouched. No color, no typography hierarchy, no redesign — only proportional size/spacing reductions.

## Scope of change (exact values)

### 1. Header — `src/components/site/Header.tsx`
| Element | Current | New | Δ |
|---|---|---|---|
| Top bar height | `h-[64px]` | `h-[56px]` | −8px |
| Logo scale wrapper | `scale-[1.13]` | `scale-[1.0]` | −11% |
| Search width (desktop) | `w-[460px] lg:w-[480px]` | `w-[400px] lg:w-[420px]` | −13% |
| CTA button | `h-[46px] px-8 text-sm` | `h-[40px] px-6 text-[13px]` | −13% |
| Social gap | `gap-[18px]` ml-7 | `gap-[14px]` ml-6 | tighter |
| Nav item padding | `px-5 py-2.5 text-[16px]` | `px-4 py-2 text-[15px]` | −6% |
| Nav gap | `gap-[14px]` | `gap-[10px]` | −4px |

### 2. Search field — `src/components/site/header/SearchField.tsx`
| Element | Current | New |
|---|---|---|
| Input height | `h-12` | `h-10` |
| Icon left offset | `left-4` | `left-3.5` |
| Padding | `pl-11 pr-4 text-sm` | `pl-10 pr-4 text-[13px]` |

### 3. Route offsets (list pages) — 8 route files
`pt-[110px]` → `pt-[96px]` in:
`routes/about.tsx`, `after-sales.tsx`, `brands.tsx`, `categories.tsx`, `hospital-readiness-assessment.tsx`, `products.$slug.tsx`, `products.index.tsx`, `programs.stroke-care.tsx`, `projects.tsx`, `services.tsx`, `turnkey.tsx`.

### 4. Editorial heroes (About / Services / Turnkey / After Sales)
Only the `lg:` values change.

| Element | Current | New |
|---|---|---|
| Hero padding | `lg:pt-24 lg:pb-20` | `lg:pt-20 lg:pb-16` |
| Hero min-height | `min-h-[520px]` | `lg:min-h-[460px]` |
| After Sales H1 | `lg:text-[72px]` | `lg:text-[64px]` |
| About H1 | `lg:text-[3.25rem]` (52px) | `lg:text-[2.875rem]` (46px) |
| Turnkey H1 | `lg:text-[64px]` | `lg:text-[56px]` |
| Services H1 (if lg override) | same tier | −8–10% |

### 5. Section vertical spacing (desktop only)
Global soft reduction using a targeted grep pass on `lg:py-24` / `lg:py-28` inside section wrappers:
- `lg:py-28` → `lg:py-24`
- `lg:py-24` → `lg:py-20`

Applied only on **section wrappers** on About / Services / Turnkey / After Sales pages. Homepage, Contact, Brands untouched (per prior constraints).

### 6. Card padding (desktop only)
Where cards use `lg:p-8` → `lg:p-7`; `lg:p-6` stays. KPI cards **untouched** (explicitly preserved per prior approval).

## Not changing
- Homepage hero, layout, or spacing
- Contact page
- Brands page
- Mobile (`base`) and tablet (`md:`) sizes
- All colors, tokens, gradients, shadows
- Typography families and hierarchy
- Animations
- KPI cards
- CTA visual style (only size class)

## Expected result
Perceived density on 1440×900 improves by ~10–12%: header drops ~8px, editorial hero drops ~40–50px, section rhythm tightens, headings feel less shouty. No layout shifts on mobile/tablet.

## Verification
After implementation: Playwright screenshots at 1920, 1440, 1366 for About, Services, Turnkey, After Sales, Products; before/after side-by-side header crop at 1440.
