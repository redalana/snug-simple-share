# 15 — Project Memory

Project-specific decisions that shape every future task. Update this file whenever a decision is made or reversed.

## Project

- **Name:** AbuFarha Medical
- **Type:** Enterprise healthcare engineering website
- **Audience:** Hospitals, procurement teams, biomedical engineers, health ministries
- **Not:** A startup, SaaS product, e-commerce site, or generic landing page

## Framework Decisions

- **Framework:** TanStack Start v1 (React 19, SSR/SSG)
- **Build tool:** Vite 7
- **Runtime target:** Cloudflare Workers (edge, with `nodejs_compat`)
- **Styling:** Tailwind CSS v4 via `src/styles.css` (`@import "tailwindcss"` + `@theme`)
- **Routing:** File-based via `src/routes/`
- **Data fetching:** TanStack Query (`ensureQueryData` + `useSuspenseQuery`)
- **Backend (when needed):** Lovable Cloud (Supabase under the hood — never referred to as Supabase in user-facing content)
- **Language:** TypeScript strict mode

## Approved Architecture

- **Single source of truth for products:** `src/lib/products.ts`
- **Category SEO routes:** `src/routes/products.<category>.tsx` — thin views over `src/lib/products.ts`
- **Reusable UI components:** `src/components/ui/` (shadcn) + `src/components/site/` (composed sections)
- **Hooks:** `src/hooks/`
- **Utilities:** `src/lib/`
- **Assets:** `src/assets/` (Vite-imported)
- **Supabase clients:** `src/integrations/supabase/` — browser, per-user server, and admin variants

## Brand Rules

- **Positioning:** AbuFarha Medical is a **medical equipment supplier, engineering, installation, commissioning, training, and support** company.
- **Never say:** "build hospitals," "construct hospitals," "turnkey hospital solutions."
- **Correct phrasing:** medical equipment supply, turnkey healthcare projects, biomedical engineering support.
- **Primary accent color:** `#E53935` (AbuFarha red) — accent only, never a flooded background.
- **Typography:** Follow [03 — Design System](./03-design-system.md#typography-scale). No default AI fonts (Inter/Poppins) unless explicitly requested.
- **Imagery:** Real medical photography. See [Exceptions Register](./11-exceptions-register.md) for the approved 3D scene on `/turnkey`.

## Homepage Section Ownership

Each homepage section answers exactly one question. No stat or message duplicated across sections.

- **Hero** — What do we do? (3-slide carousel: Medical Equipment / Turnkey Projects / After-Sales)
- **Solutions / Products** — What can hospitals buy from us?
- **Turnkey** — How do we deliver full projects?
- **After-Sales** — How do we support hospitals long-term?
- **Global Presence** — Where do we operate?
- **Statistics** — Trust in numbers (single ownership per number)
- **CTA** — How to contact us

## Design Locks

- **Desktop is locked** as of the pre-v2.0 client sign-off.
- **Header** and **Hero carousel** are approved and protected.
- **Footer** is approved (mobile accordion is the only approved responsive deviation).

## SEO Baseline

- **Canonical domain:** `https://snug-simple-share.lovable.app`
- Canonical + og:image live on leaf routes only.
- Every content route has route-specific `head()`.
- Category SEO routes exist for indexability — protected.

## Known Exceptions

See [11 — Exceptions Register](./11-exceptions-register.md) for the ratified list.

## Rejected Proposals (permanent)

- Rebuilding `/products` as a v2 duplicate
- Purple/indigo gradient hero
- Dashboard section on homepage
- Claiming AbuFarha builds hospitals

## Historical Milestones

- **Phase 1 (Mobile Navigation)** — Completed. Mobile header uses Logo + Search + Menu only. Mobile drawer includes language selector, social links, Request-a-Quote CTA with 48×48 tap targets.
- **Handbook v1.0 → v2.0** — Reorganized, deduplicated, TanStack Start-aligned. Philosophy preserved verbatim in [00 — Constitution](./00-constitution.md).

## Update Protocol

When a project decision changes:

1. Update the relevant section here.
2. If it overrides a handbook rule, add an entry to [11 — Exceptions Register](./11-exceptions-register.md).
3. If it changes framework or architecture, update [05 — Architecture](./05-architecture.md).
4. Bump the handbook version in [README](./README.md).

---

**End of handbook.** Return to the [Table of Contents](./README.md).
