<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Global floating actions (Newsletter, Team, Quote, WhatsApp) mount once in src/routes/__root.tsx and re-measure the current page footer on each route change — per-page mounts made them vanish off the homepage.
- Catalog Library data lives in src/lib/catalog-library.ts, independent of products.ts, with manufacturers normalised via the existing taxonomy — listings must never imply AbuFarha sells the product.
- Every public form saves through submitLead (src/lib/leads.functions.ts) into the leads table with a honeypot and per-IP rate limit, and shows success only after the server confirms — fake timeouts let enquiries vanish silently.
- Product PDFs flow into the Catalog Library automatically, keyed by document URL (never title) and linked back to every listing that attaches them; hand-added entries stay in MANUAL_CATALOGS and win on URL clashes — keeps one PDF one entry without manual sync.
- JSON-LD script bodies are serialised with safeJsonLd (src/lib/seo.ts), never raw JSON.stringify — URL-derived text could otherwise close the script tag.
- Contact details, site URL and company name are read from COMPANY / telHref / whatsappUrl in src/config/companyFacts.ts; SITE_URL falls back to COMPANY.website — copies had already drifted apart.
