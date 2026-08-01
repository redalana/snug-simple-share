# AbuFarha Medical — Corporate Website

Medical equipment supply, engineering, installation, commissioning, training and
after-sales support across Africa and the Middle East.

Built with [Lovable](https://lovable.dev) on TanStack Start (React 19, Vite 7,
Tailwind CSS v4) with Lovable Cloud (Supabase) for lead capture.

## Development

You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The dev server runs on http://localhost:8080.

## Scripts

| Script          | Purpose                                     |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the local dev server                  |
| `npm run build` | Production build (SSR + client bundles)     |
| `npm run lint`  | ESLint + Prettier checks                    |

## Environment variables

A `.env` file is generated and kept in sync by Lovable Cloud. Only publishable
values are exposed to the browser (`VITE_*`); no secret keys are committed.

| Variable                        | Scope   | Purpose                                        |
| ------------------------------- | ------- | ---------------------------------------------- |
| `VITE_SUPABASE_URL`             | client  | Backend API URL                                |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | client  | Public anon key (RLS enforced)                 |
| `VITE_SUPABASE_PROJECT_ID`      | client  | Backend project reference                      |
| `VITE_SITE_URL`                 | client  | Canonical site origin for SEO/sitemap/robots   |
| `SUPABASE_URL`                  | server  | Backend URL for server functions               |
| `SUPABASE_PUBLISHABLE_KEY`      | server  | Publishable key for server functions           |
| `SUPABASE_PROJECT_ID`           | server  | Backend project reference (server)             |

Secrets (service role keys, third-party API keys) are never stored in the repo —
they are injected at runtime by the hosting environment.

## Project structure

```
src/
  routes/        file-based routes (pages, api, sitemap, mcp)
  components/    UI components (site/, ui/)
  lib/           content registry, knowledge graph, SEO, server functions
  config/        companyFacts.ts — single source of truth for company facts
  styles/tokens/ design token layer consumed by Tailwind v4
  assets/        optimized imagery
docs/            architecture and operating manuals
```

## Deployment

Publish from the Lovable editor, or deploy the standard TanStack Start build
output to any compatible host. A fresh clone plus `npm i && npm run build`
reproduces the production build.
