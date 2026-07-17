# 06 — Engineering Checklist

The single authoritative gate for code quality. Every task passes this before it moves to [QA](./08-qa-checklist.md).

## Correctness

- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] No broken imports
- [ ] No console errors in the browser
- [ ] No missing assets
- [ ] No placeholder content, TODO comments, or fake data left in shipped code

## Types

- [ ] No `any` used
- [ ] All function signatures typed
- [ ] Data models defined as interfaces/types in `src/lib/` or colocated

## Structure

- [ ] Components under ~200 lines (hard max 300 — split beyond)
- [ ] One responsibility per file
- [ ] No duplicated components (`Hero2`, `HeroNew`, `HeroFixed`)
- [ ] No duplicated data (products/brands/categories exist in exactly one file)
- [ ] Imports grouped: React → libraries → components → hooks → lib → types → styles

## Reuse

- [ ] Checked existing components before creating new ones
- [ ] Checked existing hooks before creating new ones
- [ ] Checked existing utilities before creating new ones

## Data & State

- [ ] Data reads via TanStack Query (`ensureQueryData` + `useSuspenseQuery`)
- [ ] No initial-render `useEffect` + `fetch`
- [ ] State scoped to smallest possible boundary
- [ ] API calls routed through `src/lib/services/`, never inline in JSX

## Styling

- [ ] No hardcoded hex colors
- [ ] No `text-white` / `bg-black` / `bg-[#…]` in components
- [ ] No `!important`, no inline styles (unless required by a 3rd-party lib)
- [ ] All spacing values come from the [design tokens](./03-design-system.md#spacing-scale)

## Routing (TanStack)

- [ ] `createFileRoute("…")` string matches the filename exactly
- [ ] `src/routeTree.gen.ts` untouched
- [ ] Layout routes render `<Outlet />`
- [ ] Every route with a loader defines `errorComponent` + `notFoundComponent`
- [ ] `head()` set with route-specific title + description
- [ ] Canonical + og:image only on leaf routes

## Async

- [ ] Every async action has loading + success + error + retry states
- [ ] No silent failures
- [ ] Errors surfaced with friendly UI, never raw stack traces

## Server Functions

- [ ] `process.env.*` read only inside `.handler()`
- [ ] Protected functions not called from public loaders
- [ ] `supabaseAdmin` imported lazily and only in verified server contexts

## Config

- [ ] No magic numbers — values in `src/lib/` constants
- [ ] No hardcoded URLs, keys, or routes — moved to config
- [ ] Public env: `import.meta.env.VITE_*`
- [ ] Server env: `process.env.*` inside handlers

## Maintainability

- [ ] Another engineer can understand each file in < 5 minutes
- [ ] Dead code removed
- [ ] Comments explain *why*, not *what*

---

**Next:** [07 — Responsive Checklist](./07-responsive-checklist.md)
