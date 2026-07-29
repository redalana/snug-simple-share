import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getEntityGraph, type ScoredEntity } from "@/lib/content";

type Group = { title: string; items: ScoredEntity[] };

/**
 * Related content for an article, resolved entirely by the existing knowledge
 * graph: nothing here is manually linked or hardcoded.
 */
export function RelatedGraph({ slug }: { slug: string }) {
  const view = getEntityGraph(`article:${slug}`, 6);
  if (!view) return null;

  const groups: Group[] = [
    { title: "Related Articles", items: view.articles },
    { title: "Related Products", items: view.products },
    { title: "Related Services", items: view.services },
    { title: "Related FAQs", items: view.faqs },
    { title: "Related Documents", items: view.documents },
    { title: "Related Technologies", items: view.technologies },
    { title: "Related Brands", items: view.brands },
  ].filter((group) => group.items.length > 0);

  if (!groups.length) return null;

  return (
    <section className="bg-white pt-4 pb-14 lg:pb-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
          Explore related knowledge
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-white p-5 shadow-(--shadow-editorial-xs)"
            >
              <p className="font-display text-base font-extrabold text-ink">{group.title}</p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <RelatedLink entity={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedLink({ entity }: { entity: ScoredEntity }) {
  const className =
    "group inline-flex items-start gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20";
  const label = (
    <>
      <span>{entity.label}</span>
      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5" />
    </>
  );

  if (entity.type === "article") {
    return (
      <Link to="/blog/$slug" params={{ slug: entity.slug }} className={className}>
        {label}
      </Link>
    );
  }
  if (entity.type === "technology") {
    return (
      <Link to="/blog" search={{ technology: entity.slug }} className={className}>
        {label}
      </Link>
    );
  }
  if (entity.type === "brand" && !entity.url) {
    return (
      <Link to="/blog" search={{ manufacturer: entity.slug }} className={className}>
        {label}
      </Link>
    );
  }
  if (entity.url) {
    return (
      <Link to={entity.url} className={className}>
        {label}
      </Link>
    );
  }
  return <span className="text-sm font-medium text-muted-foreground">{entity.label}</span>;
}
