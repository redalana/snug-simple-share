# AbuFarha Medical — Frontend Architecture

## Stack

- **Framework:** TanStack Start v1 (React 19, SSR, file-based routing) on Vite 8.
  There is no Next.js in this project — "Next.js best practices" map to the
  TanStack equivalents documented below.
- **Styling:** Tailwind CSS v4 (CSS-first, no `tailwind.config.js`).
- **State/data:** TanStack Query + local component state.
- **Animation:** framer-motion, GSAP; 3D via react-three-fiber.

## Folder structure

```
src/
  routes/           file-based routes; each leaf owns its head() metadata
  components/site/  product-specific components, grouped per page folder
  components/ui/    shadcn primitives (library surface, not all in use)
  lib/              data + framework-agnostic helpers (blog, seo, products)
  config/           companyFacts.ts — single source of truth for company data
  styles.css        Tailwind entry + @theme inline mapping
  styles/tokens/    design tokens (see DESIGN-SYSTEM.md)
  assets/           bundled images
```

## Conventions

- `createFileRoute("…")` string must mirror the filename; `routeTree.gen.ts` is generated.
- Layout routes (`blog.tsx`, `products.tsx`) only render `<Outlet />` and intentionally have no `head()`.
- Every content route defines a unique `title`, `description`, `og:*` in `head()`.
- Desktop scale: `html { font-size: 12px }` + `--desktop-px-unit: 0.75px` inside
  `@media (min-width: 1024px)`. Sizing is written as `calc(N*var(--desktop-px-unit))`.
- Company facts are never hardcoded — import from `src/config/companyFacts.ts`.

## Quality gates

- `npx tsgo --noEmit` — TypeScript clean (0 errors).
- `npx eslint .` — 0 errors (7 shadcn `react-refresh` warnings are expected).
- Playwright screenshot diff against `/tmp/browser/audit/before` for visual parity.

## Accessibility baseline

- Landmarks: one `<main>` per page; floating WhatsApp/Quote widgets and the
  cookie banner are labelled `complementary`/`region` so no content sits outside a landmark.
- Header mega-dropdowns use plain `ul/li` + labelled containers (no fake `role="menu"`),
  which is correct for hover navigation lists.
- Heading order is sequential; the footer column headings are `h3`.

## Known technical debt

- **Color contrast:** intentional low-opacity utilities (`text-primary/45`,
  `text-muted-foreground/70`) fail WCAG AA on several pages. Fixing them changes
  the visual design and therefore requires design approval.
- **Unused shadcn primitives:** ~32 files in `components/ui` are not imported.
  They are tree-shaken from the bundle; kept as library surface.
- **Large assets:** hero images were re-encoded (JPEG q80–85, progressive);
  further gains need AVIF/WebP variants via `vite-imagetools`.
- **Tests:** no automated test suite yet; validation is Playwright screenshot diff.
