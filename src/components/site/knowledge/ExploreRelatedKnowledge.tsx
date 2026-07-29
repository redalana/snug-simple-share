import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  getRelatedSections,
  type EntityRef,
  type RelatedSection,
  type RelatedSectionsPreset,
  type ScoredEntity,
} from "@/lib/content";

type Props = {
  /** Subject entity/entities of the page — resolved by the knowledge graph. */
  refs: EntityRef | readonly EntityRef[];
  preset: RelatedSectionsPreset;
  title?: string;
  /** Items shown per section before "View all". */
  limit?: number;
  className?: string;
};

/**
 * Generic, fully graph-driven "Explore Related Knowledge" block.
 *
 * Content, grouping and ordering all come from the existing Knowledge Graph
 * (`getRelatedSections` → `getRelatedEntities` → `relevanceScore`). Nothing is
 * hardcoded and no relationship is authored by hand. Sections are rendered
 * lazily: the graph query only runs once the block approaches the viewport.
 */
export function ExploreRelatedKnowledge({
  refs,
  preset,
  title = "Explore Related Knowledge",
  limit = 6,
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sections, setSections] = useState<RelatedSection[]>([]);

  useEffect(() => {
    if (visible) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const key = (Array.isArray(refs) ? refs : [refs])
    .map((ref) => (typeof ref === "string" ? ref : ref.id))
    .join(",");

  useEffect(() => {
    if (!visible) return;
    setSections(getRelatedSections(refs, preset, { limit }));
    // Graph results are memoised; `key` identifies the subject set.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, key, preset, limit]);

  return (
    <section
      ref={containerRef}
      aria-labelledby="explore-related-knowledge"
      className={className ?? "bg-white pt-4 pb-14 lg:pb-20"}
    >
      {sections.length > 0 ? (
        <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
          <h2
            id="explore-related-knowledge"
            className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]"
          >
            {title}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-border bg-white p-5 shadow-(--shadow-editorial-xs)"
              >
                <p className="font-display text-base font-extrabold text-ink">{section.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <RelatedLink entity={item} />
                    </li>
                  ))}
                </ul>
                {section.viewAll ? (
                  <Link
                    to={section.viewAll.to}
                    search={section.viewAll.search}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                  >
                    View all
                    <span className="sr-only"> {section.title.toLowerCase()}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function RelatedLink({ entity }: { entity: ScoredEntity }) {
  const className =
    "group inline-flex items-start gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20";
  const label = (
    <>
      <span>{entity.label}</span>
      <ArrowRight
        className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
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
