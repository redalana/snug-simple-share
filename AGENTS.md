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
