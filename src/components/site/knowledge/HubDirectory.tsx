import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  HUB_BASE_PATH,
  HUB_FAMILY_LABEL,
  listHubs,
  resolveHub,
  type HubKind,
} from "@/lib/content";

/** Directory listing for one hub family, with per-hub content counts. */
export function HubDirectory({
  kind,
  heading,
  intro,
}: {
  kind: HubKind;
  heading: string;
  intro: string;
}) {
  const hubs = listHubs(kind);
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
                { label: HUB_FAMILY_LABEL[kind] },
              ]}
            />
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {heading}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hubs.map((hub) => {
              const resolved = resolveHub(kind, hub.slug);
              return (
                <Link
                  key={hub.path}
                  to={hub.path}
                  className="group flex min-w-0 flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_44px_-28px_rgba(0,0,0,0.3)]"
                >
                  <h2 className="break-words font-display text-lg font-bold leading-snug text-foreground">
                    {hub.name}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {hub.intro}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    <span>{resolved?.articles.length ?? 0} articles</span>
                    <span>{resolved?.products.length ?? 0} systems</span>
                    <span>{resolved?.services.length ?? 0} services</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Open hub
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
          <Link
            to={HUB_BASE_PATH[kind] === "/knowledge/technologies" ? "/knowledge" : "/knowledge"}
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            All knowledge hubs <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
