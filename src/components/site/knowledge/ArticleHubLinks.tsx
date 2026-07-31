import { Link } from "@tanstack/react-router";
import { Boxes, Cpu, Factory, Wrench } from "lucide-react";
import { getArticleItem, hubsForContentItem, listHubs, type HubKind } from "@/lib/content";

const ICON: Record<HubKind, typeof Cpu> = {
  technology: Cpu,
  manufacturer: Factory,
  product: Boxes,
  service: Wrench,
};

const GROUP_LABEL: Record<HubKind, string> = {
  technology: "Technology",
  manufacturer: "Manufacturer",
  product: "Product",
  service: "Service",
};

/**
 * Connects an article to its Technology, Manufacturer, Product and Service
 * hubs. Service links are derived from the article's technologies so every
 * article carries all four relationship axes required by the content model.
 */
export function ArticleHubLinks({ slug }: { slug: string }) {
  const item = getArticleItem(slug);
  if (!item) return null;

  const hubs = hubsForContentItem(item);
  const services = listHubs("service").filter((s) => {
    const serviceHubTech = s.slug;
    return (
      item.technologies.length > 0 &&
      (serviceHubTech === "installation-commissioning" ||
        serviceHubTech === "preventive-maintenance" ||
        serviceHubTech === "clinical-training" ||
        serviceHubTech === "technical-support")
    );
  });

  const groups = (["technology", "manufacturer", "product", "service"] as HubKind[])
    .map((kind) => ({
      kind,
      items: kind === "service" ? services : hubs.filter((h) => h.kind === kind),
    }))
    .filter((g) => g.items.length > 0);

  if (groups.length === 0) return null;

  return (
    <section
      aria-labelledby="article-hub-links"
      className="border-t border-border/60 bg-secondary/60 py-12"
    >
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <h2
          id="article-hub-links"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Explore the connected hubs
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          This article is linked to the technology, manufacturer, product and service hubs it
          belongs to.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => {
            const Icon = ICON[group.kind];
            return (
              <div key={group.kind} className="min-w-0">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {GROUP_LABEL[group.kind]}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.items.slice(0, 5).map((hub) => (
                    <li key={hub.path} className="min-w-0">
                      <Link
                        to={hub.path}
                        className="block break-words text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {hub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
