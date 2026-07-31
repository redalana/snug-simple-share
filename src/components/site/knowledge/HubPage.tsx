import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Boxes, Cpu, Factory, Wrench } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HUB_BASE_PATH,
  HUB_FAMILY_LABEL,
  type HubDef,
  type HubKind,
  type ResolvedHub,
} from "@/lib/content";
import type { ContentItem } from "@/lib/content";

const KIND_ICON: Record<HubKind, typeof Cpu> = {
  technology: Cpu,
  manufacturer: Factory,
  product: Boxes,
  service: Wrench,
};

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      {sub ? <p className="mt-1 text-sm text-muted-foreground">{sub}</p> : null}
    </div>
  );
}

function ItemCard({ item }: { item: ContentItem }) {
  const to = item.url ?? "/blog";
  return (
    <Link
      to={to}
      className="group flex min-w-0 flex-col rounded-xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.3)]"
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
        {item.primaryCategory ?? item.type}
      </span>
      <h3 className="mt-2 break-words font-display text-base font-bold leading-snug text-foreground">
        {item.title}
      </h3>
      {item.summary ? (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.summary}
        </p>
      ) : null}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function HubChips({ hubs, title }: { hubs: HubDef[]; title: string }) {
  if (hubs.length === 0) return null;
  return (
    <div className="mt-8">
      <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {hubs.map((h) => {
          const Icon = KIND_ICON[h.kind];
          return (
            <Link
              key={h.path}
              to={h.path}
              className="inline-flex min-w-0 items-center gap-2 rounded-full border border-border/70 bg-card px-3.5 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
              <span className="truncate">{h.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/**
 * One presentation for every hub family. Content is referenced, never
 * duplicated — the Knowledge Center and product catalog stay canonical.
 */
export function HubPage({ hub }: { hub: ResolvedHub }) {
  const { def, articles, products, services, crossLinks, siblings } = hub;
  const Icon = KIND_ICON[def.kind];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <section className="border-b border-border/60 bg-secondary">
          <div className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
            <Breadcrumbs
              variant="inline"
              emitJsonLd={false}
              className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground"
              items={[
                { label: "Knowledge Center", to: "/blog" },
                { label: HUB_FAMILY_LABEL[def.kind], to: HUB_BASE_PATH[def.kind] },
                { label: def.name },
              ]}
            />
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {HUB_FAMILY_LABEL[def.kind]}
            </span>
            <h1 className="mt-5 max-w-4xl break-words font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {def.heading}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {def.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Talk to a specialist
                <ArrowRight className="h-4 w-4" />
              </Link>
              {def.catalogPath ? (
                <Link
                  to={def.catalogPath}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  View {def.kind === "service" ? "service details" : "systems"}
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
          {articles.length > 0 ? (
            <section aria-labelledby="hub-knowledge" className="mb-14">
              <div id="hub-knowledge">
                <SectionHeading
                  title="Knowledge & guides"
                  sub={`${articles.length} published resource${articles.length === 1 ? "" : "s"} connected to ${def.name}.`}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {articles.slice(0, 24).map((a) => (
                  <ItemCard key={a.id} item={a} />
                ))}
              </div>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                <BookOpen className="h-4 w-4" aria-hidden /> Browse the full Knowledge Center
              </Link>
            </section>
          ) : null}

          {products.length > 0 ? (
            <section aria-labelledby="hub-systems" className="mb-14">
              <div id="hub-systems">
                <SectionHeading
                  title="Systems in this hub"
                  sub={`${products.length} system${products.length === 1 ? "" : "s"} available through AbuFarha Medical.`}
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {products.slice(0, 18).map((p) => (
                  <ItemCard key={p.id} item={p} />
                ))}
              </div>
            </section>
          ) : null}

          {services.length > 0 ? (
            <section aria-labelledby="hub-services" className="mb-14">
              <div id="hub-services">
                <SectionHeading
                  title="Supporting services"
                  sub="Lifecycle support that applies to this hub."
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {services.slice(0, 9).map((s) => (
                  <ItemCard key={s.id} item={s} />
                ))}
              </div>
            </section>
          ) : null}

          <HubChips hubs={crossLinks.slice(0, 16)} title="Connected hubs" />
          <HubChips hubs={siblings.slice(0, 16)} title={`More ${HUB_FAMILY_LABEL[def.kind]}`} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
