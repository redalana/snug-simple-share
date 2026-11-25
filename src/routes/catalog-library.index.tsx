import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Search, X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL, breadcrumbJsonLd, safeJsonLd } from "@/lib/seo";
import heroImg from "@/assets/env-imaging-dept.jpg";
import {
  CATALOG_CATEGORIES,
  EMPTY_FILTERS,
  catalogFacets,
  categoryLabel,
  canonicalManufacturer,
  filterCatalogs,
  publishedCatalogs,
  type CatalogFilters,
} from "@/lib/catalog-library";

const TITLE = "Medical Equipment Catalog Library | AbuFarha Medical";
const DESC =
  "Search medical equipment catalogs, brochures and product documents from manufacturers worldwide, by equipment, manufacturer, model, category, language and year.";
const PAGE = 12;

export const Route = createFileRoute("/catalog-library/")({
  head: () => {
    const hasContent = publishedCatalogs().length > 0;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        // Thin-content guard: stays out of search results until real catalogs exist.
        ...(hasContent ? [] : [{ name: "robots", content: "noindex, follow" }]),
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "website" },
        { property: "og:url", content: SITE_URL + "/catalog-library" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: SITE_URL + "/catalog-library" }],
      scripts: [
        {
          type: "application/ld+json",
          children: safeJsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Catalog Library", path: "/catalog-library" },
            ]),
          ),
        },
      ],
    };
  },
  component: CatalogLibraryPage,
});

const pill = (active: boolean) =>
  `inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${
    active
      ? "border-primary bg-primary text-primary-foreground"
      : "border-border bg-background text-ink hover:border-primary/40 hover:text-primary"
  }`;

const selectCls =
  "min-h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-60";

function CatalogLibraryPage() {
  const all = useMemo(() => publishedCatalogs(), []);
  const facets = useMemo(() => catalogFacets(all), [all]);
  const [f, setF] = useState<CatalogFilters>(EMPTY_FILTERS);
  const [limit, setLimit] = useState(PAGE);
  const results = useMemo(() => filterCatalogs(all, f), [all, f]);
  const shown = results.slice(0, limit);
  const active = JSON.stringify(f) !== JSON.stringify(EMPTY_FILTERS);
  const set = (patch: Partial<CatalogFilters>) => {
    setF((p) => ({ ...p, ...patch }));
    setLimit(PAGE);
  };

  const selects: { key: keyof CatalogFilters; label: string; any: string; opts: string[] }[] = [
    { key: "manufacturer", label: "Manufacturer", any: "All manufacturers", opts: facets.manufacturers },
    { key: "equipmentType", label: "Document type", any: "All types", opts: facets.equipmentTypes },
    { key: "language", label: "Language", any: "All languages", opts: facets.languages },
    { key: "year", label: "Publication year", any: "All years", opts: facets.years },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <PageHero
          eyebrow="Resources"
          breadcrumb="Catalog Library"
          backgroundImage={heroImg}
          title="Medical Equipment Catalog Library"
          description="Manufacturer catalogs, brochures and product documents in one searchable place. Listings are for information only and do not mean AbuFarha sells, distributes or represents the product."
        />

        <section aria-labelledby="catalog-search" className="mx-auto max-w-[87.5rem] px-6 pb-12 lg:px-10">
          <h2 id="catalog-search" className="sr-only">Search the catalog library</h2>

          <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
            <label htmlFor="catalog-q" className="text-sm font-bold text-ink">
              Search by equipment, manufacturer or model
            </label>
            <div className="relative mt-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <input
                id="catalog-q"
                type="search"
                value={f.q}
                onChange={(e) => set({ q: e.target.value })}
                placeholder="e.g. MRI, Philips, Ingenia"
                className="min-h-11 w-full rounded-xl border border-border bg-background pl-9 pr-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {selects.map((s) => (
                <div key={s.key} className="min-w-0">
                  <label htmlFor={`catalog-${s.key}`} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </label>
                  <select
                    id={`catalog-${s.key}`}
                    value={f[s.key]}
                    disabled={s.opts.length === 0}
                    onChange={(e) => set({ [s.key]: e.target.value } as Partial<CatalogFilters>)}
                    className={`${selectCls} mt-1`}
                  >
                    <option value="">{s.opts.length ? s.any : "None available yet"}</option>
                    {s.opts.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Equipment categories" className="mt-6 flex flex-wrap gap-2">
            <button type="button" aria-pressed={f.category === ""} onClick={() => set({ category: "" })} className={pill(f.category === "")}>
              All categories
            </button>
            {CATALOG_CATEGORIES.map((c) => (
              <button key={c.id} type="button" aria-pressed={f.category === c.id} onClick={() => set({ category: c.id })} className={pill(f.category === c.id)}>
                {c.label}
                <span className="text-xs opacity-70">({facets.categoryCounts[c.id]})</span>
              </button>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {results.length} {results.length === 1 ? "catalog" : "catalogs"}
            </p>
            {active ? (
              <button type="button" onClick={() => set(EMPTY_FILTERS)} className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-primary hover:underline">
                <X className="h-4 w-4" aria-hidden /> Clear filters
              </button>
            ) : null}
          </div>

          {shown.length ? (
            <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((e) => (
                <li key={e.slug} className="min-w-0">
                  <Link
                    to="/catalog-library/$slug"
                    params={{ slug: e.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                  >
                    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-secondary/40">
                      {e.coverImage ? (
                        <img src={e.coverImage.src} alt={e.coverImage.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                      ) : (
                        <FileText className="h-12 w-12 text-primary/60" aria-hidden />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                        {canonicalManufacturer(e.manufacturer)} · {categoryLabel(e.category)}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-extrabold text-ink">{e.title}</h3>
                      {e.description ? <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{e.description}</p> : null}
                      <p className="mt-3 text-xs text-muted-foreground">
                        {[e.model, e.language, e.publicationYear].filter(Boolean).join(" · ")}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-primary">
                        View catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 rounded-2xl border border-dashed border-border bg-secondary/20 px-6 py-12 text-center">
              <FileText className="mx-auto h-10 w-10 text-primary/60" aria-hidden />
              {all.length === 0 ? (
                <>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-ink">The library is being prepared</h3>
                  <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                    We're collecting verified manufacturer documents. Looking for a specific catalog now? Our team can help.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-ink">No catalogs match your search</h3>
                  <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">Try fewer words or clear the filters.</p>
                </>
              )}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {active ? (
                  <button type="button" onClick={() => set(EMPTY_FILTERS)} className={pill(false)}>Clear filters</button>
                ) : null}
                <Link to="/contact" className={pill(true)}>Ask our team</Link>
              </div>
            </div>
          )}

          {results.length > limit ? (
            <div className="mt-8 text-center">
              <button type="button" onClick={() => setLimit((l) => l + PAGE)} className={pill(false)}>
                Show more ({results.length - limit} left)
              </button>
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
