import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Boxes, Cpu, Factory, Wrench } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { HUB_BASE_PATH, HUB_KINDS, listHubs, type HubKind } from "@/lib/content";
import { SITE_URL, OG_IMAGES, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Knowledge Hubs — Technology, Manufacturer, Product & Service | AbuFarha Medical";
const DESCRIPTION =
  "The AbuFarha Medical knowledge hub directory: technology hubs, manufacturer hubs, product hubs and service hubs connecting every published article, system and lifecycle service.";

const FAMILY: Record<
  HubKind,
  { label: string; blurb: string; icon: typeof Cpu }
> = {
  technology: {
    label: "Technology Hubs",
    blurb: "How each modality works, how it is evaluated, installed and maintained.",
    icon: Cpu,
  },
  manufacturer: {
    label: "Manufacturer Hubs",
    blurb: "Supported OEM brands, the systems we supply and the knowledge behind them.",
    icon: Factory,
  },
  product: {
    label: "Product Hubs",
    blurb: "Equipment categories mapped to specifications, comparisons and planning guides.",
    icon: Boxes,
  },
  service: {
    label: "Service Hubs",
    blurb: "Installation, maintenance, training, parts and turnkey delivery resources.",
    icon: Wrench,
  },
};

export const Route = createFileRoute("/knowledge/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/knowledge" },
      { property: "og:image", content: OG_IMAGES.blog },
      { name: "twitter:image", content: OG_IMAGES.blog },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/knowledge" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: TITLE,
          description: DESCRIPTION,
          url: SITE_URL + "/knowledge",
          isPartOf: { "@type": "WebSite", name: "AbuFarha Medical", url: SITE_URL },
          hasPart: HUB_KINDS.map((kind) => ({
            "@type": "CollectionPage",
            name: FAMILY[kind].label,
            url: SITE_URL + HUB_BASE_PATH[kind],
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Knowledge Center", path: "/blog" },
            { name: "Knowledge Hubs", path: "/knowledge" },
          ]),
        ),
      },
    ],
  }),
  component: KnowledgeHubsIndex,
});

function KnowledgeHubsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <section className="border-b border-border/60 bg-secondary">
          <div className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
            <Breadcrumbs
              variant="inline"
              emitJsonLd={false}
              items={[{ label: "Knowledge Center", to: "/blog" }, { label: "Knowledge Hubs" }]}
            />
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Knowledge Hubs
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Four hub families give every technology, manufacturer, product category and service a
              dedicated home — and connect each published article to all four.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              <BookOpen className="h-4 w-4" aria-hidden /> Browse the Knowledge Center
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {HUB_KINDS.map((kind) => {
              const meta = FAMILY[kind];
              const Icon = meta.icon;
              const hubs = listHubs(kind);
              return (
                <div
                  key={kind}
                  className="min-w-0 rounded-2xl border border-border/70 bg-card p-6 lg:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                      {meta.label}
                    </h2>
                    <span className="ml-auto text-sm font-semibold text-muted-foreground">
                      {hubs.length}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{meta.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {hubs.map((hub) => (
                      <Link
                        key={hub.path}
                        to={hub.path}
                        className="inline-flex min-w-0 max-w-full rounded-full border border-border/70 bg-background px-3.5 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <span className="truncate">{hub.name}</span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to={HUB_BASE_PATH[kind]}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                  >
                    All {meta.label.toLowerCase()}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
