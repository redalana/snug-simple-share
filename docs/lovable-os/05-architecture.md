# 05 — Architecture (TanStack Start + React + Vite)

The only framework-specific section. Everything else in this handbook is framework-agnostic.

## Stack

- **TanStack Start v1** (full-stack React 19, SSR/SSG, server functions)
- **Vite 7** build tool, targeting Cloudflare Workers (edge runtime)
- **Tailwind CSS v4** via `@import "tailwindcss"` in `src/styles.css`
- **TanStack Router** for file-based routing
- **TanStack Query** for data fetching
- **Lovable Cloud** (Supabase under the hood) for auth, DB, storage, when needed

Frameworks NOT supported: Next.js, Remix, Angular, Vue, Svelte, native mobile. Do not import `next/*` or `react-router-dom`.

## Folder Structure

```
src/
  routes/          → file-based routes (see below)
  components/      → reusable UI components
  components/site/ → project-specific composed sections
  hooks/           → custom React hooks
  lib/             → single source of truth for data + utilities
  assets/          → images, imported via Vite
  integrations/    → Supabase clients (browser + server)
  styles.css       → Tailwind v4 + design tokens
  router.tsx       → router bootstrap
  start.ts         → client entry, middleware
  server.ts        → server entry
```

Never create `src/pages/`, `app/`, or `_app.tsx` — these are foreign conventions.

## Routing

- File-based via `src/routes/`. The plugin auto-generates `src/routeTree.gen.ts` — **never edit it manually**.
- Filenames use dots: `products.$slug.tsx` → `/products/$slug`.
- The string passed to `createFileRoute("…")` must match the generated route ID exactly.
- Layout routes render `<Outlet />`. Never gate `<Outlet />` on `pathname`.
- Every named content section is its own route (`/about`, `/services`, `/contact`) — never hash anchors on `/`.
- Every route with a loader must set `errorComponent` and `notFoundComponent`.

## Navigation

- Use `Link` from `@tanstack/react-router`. Never plain `<a>` for internal navigation.
- Use `params` for dynamic routes; never interpolate values into `href`.
- Never use trailing slashes in route paths.

## Head Metadata

- Every route sets `head()` with `meta`, `links`, `scripts`.
- Root (`__root.tsx`) holds sitewide defaults only (charset, viewport, og:site_name).
- **`canonical` and `og:image` live only on leaf routes**, never on root or layouts.
- `canonical` and `og:url` must self-reference the route.
- Domain: `https://snug-simple-share.lovable.app`.
- Change to og:image will not appear in shared links until platforms re-fetch — tell the user to refresh in the platform debugger.

## Data Fetching

Default read shape:

```ts
// route loader
loader: ({ context }) => context.queryClient.ensureQueryData(myQueryOptions)

// component
const { data } = useSuspenseQuery(myQueryOptions)
```

- Never `useEffect` + `fetch` for initial render.
- Never call APIs directly from UI — route through `src/lib/services/`.

## Single Source of Truth

- Products, brands, categories, services live in `src/lib/` (e.g. `src/lib/products.ts`).
- Derived data (filters, related items, category pages) is computed from that source.
- Category SEO routes (`/products/mri-scanners`) are permitted as thin views over the same source. See [Exceptions Register](./11-exceptions-register.md#category-seo-routes).

## State Management

Order of preference:

1. Local component state
2. React Context
3. TanStack Query (server state)
4. Global state library (only if genuinely needed)

Never install a global state library to open a modal.

## Server Functions

- App-internal server logic: `createServerFn` from `@tanstack/react-start`.
- Public webhooks / cron / external callers: file routes under `src/routes/api/public/*`.
- `process.env.*` only inside `.handler()` — never at module scope of shared files.
- Protected server functions (with `requireSupabaseAuth`) must never be called from a public route's `loader` — SSR prerender has no session.

## Supabase Clients

- Browser: `@/integrations/supabase/client` — publishable key, RLS applies.
- Server (per-user): `requireSupabaseAuth` middleware — publishable key + user token.
- Server (admin, verified webhooks only): `@/integrations/supabase/client.server` — service role, bypasses RLS. Import lazily inside handlers.

## Assets

- Images imported via Vite: `import hero from "@/assets/hero.jpg"`.
- Native `<img>` with `loading="lazy"` + `decoding="async"`. No `next/image`.
- Web fonts loaded via `<link>` in root `head()` — never `@import` a remote URL in `styles.css`.

## Styling

- Tailwind v4 with `@theme` tokens.
- Semantic tokens only in JSX. No `text-white`, `bg-black`, `bg-[#…]`.
- Never `!important`, never inline styles unless required by a third-party integration.

## TypeScript

- `strict: true`.
- Never use `any`.
- Define interfaces, types, enums, generics.

## Code Splitting

- Prefer route-level splitting (TanStack Router handles this automatically).
- Lazy-load heavy client-only components (e.g. 3D scenes) via `React.lazy` + `<ClientOnly>`.

## SSR Constraints

- Server functions run on Cloudflare Workers with `nodejs_compat`. `child_process`, `sharp`, `canvas`, `puppeteer`, `fs.watch` are unavailable.
- Safe modules: `fs`, `path`, `crypto`, `Buffer`, `stream`, `url`, `events`, `net`, `http`, `https`, `zlib`.
- Never set `ssr.external` in `vite.config.ts`.

## Anti-Patterns (Forbidden)

- `src/pages/` folder
- `react-router-dom` imports
- `next/*` imports
- Editing `src/routeTree.gen.ts`
- Duplicate route files claiming `/`
- Module-scope statements referencing route components (crashes SSR)
- Fetching in `useEffect` for initial render
- Direct API calls from JSX
- Hardcoded env vars in shared modules

---

**Next:** [06 — Engineering Checklist](./06-engineering-checklist.md)
