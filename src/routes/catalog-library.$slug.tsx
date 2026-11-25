import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, ExternalLink, FileText } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import {
  canonicalManufacturer,
  categoryLabel,
  documentHref,
  formatBytes,
  getPublishedCatalog,
} from "@/lib/catalog-library";

export const Route = createFileRoute("/catalog-library/$slug")({
  loader: ({ params }) => {
    const entry = getPublishedCatalog(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData, params }) => {
    const e = loaderData?.entry;
    if (!e) return { meta: [{ title: "Catalog not found | AbuFarha Medical" }, { name: "robots", content: "noindex" }] };
    const title = e.seoTitle ?? `${e.title} | Catalog Library | AbuFarha Medical`;
    const desc = e.seoDescription ?? e.description ?? `${e.title} by ${e.manufacturer} — ${categoryLabel(e.category)} document.`;
    const url = `${SITE_URL}/catalog-library/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Catalog Library", path: "/catalog-library" },
              { name: e.title, path: `/catalog-library/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: () => <NotFoundPage />,
  component: CatalogDetail,
});

function CatalogDetail() {
  const { entry: e } = Route.useLoaderData();
  const href = documentHref(e);
  const rows: [string, string | undefined][] = [
    ["Manufacturer", canonicalManufacturer(e.manufacturer)],
    ["Category", categoryLabel(e.category)],
    ["Document type", e.equipmentType],
    ["Model", e.model],
    ["Language", e.language],
    ["Publication year", e.publicationYear ? String(e.publicationYear) : undefined],
    ["File size", formatBytes(e.document.sizeBytes)],
    ["Added", e.dateAdded],
  ];
  const btn =
    "inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2";
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <PageHero eyebrow={categoryLabel(e.category)} breadcrumb="Catalog Library" title={e.title} description={e.description} />
        <section className="mx-auto grid max-w-[87.5rem] gap-8 px-6 pb-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-10">
          <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
            <dl className="grid gap-4 sm:grid-cols-2">
              {rows.filter(([, v]) => v).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={href} target="_blank" rel="noopener noreferrer" className={`${btn} bg-primary text-primary-foreground hover:bg-primary/90`}>
                <FileText className="h-4 w-4" aria-hidden /> View PDF
              </a>
              {e.allowDownload ? (
                <a href={href} download className={`${btn} border border-border text-ink hover:border-primary/40 hover:text-primary`}>
                  <Download className="h-4 w-4" aria-hidden /> Download
                </a>
              ) : null}
              <a href={e.sourceUrl} target="_blank" rel="noopener noreferrer" className={`${btn} border border-border text-ink hover:border-primary/40 hover:text-primary`}>
                <ExternalLink className="h-4 w-4" aria-hidden /> Original source
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              This document belongs to its manufacturer and is listed for information only. Listing does not mean AbuFarha sells, distributes or represents this product.
            </p>
          </div>
          <aside className="rounded-2xl bg-secondary/30 p-6">
            <h2 className="font-display text-lg font-extrabold text-ink">Need help with this equipment?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Ask our engineers about planning, installation, training or support.</p>
            <Link to="/contact" className={`${btn} mt-4 bg-primary text-primary-foreground`}>Contact our team</Link>
            <Link to="/catalog-library" className="mt-4 block text-sm font-semibold text-primary hover:underline">← Back to the library</Link>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
