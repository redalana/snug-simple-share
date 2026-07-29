import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getKnowledgeHub, type HubTab, type KnowledgeHub as HubModel } from "@/lib/content";
import type { ScoredEntity } from "@/lib/content";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";

type Props = {
  /** Category route slug, e.g. "mri-scanners". */
  categorySlug: string;
  /** Product categories listed on the page — the secondary graph axis. */
  productCategories?: readonly string[];
  /** Items per group. */
  limit?: number;
};

const EVENT_BY_TAB: Record<string, AnalyticsEventName> = {
  articles: "article_opened",
  "buying-guides": "buying_guide_clicked",
  comparisons: "comparison_viewed",
  "technology-explained": "article_opened",
  "clinical-applications": "clinical_application_selected",
  "installation-maintenance": "article_opened",
  downloads: "download_clicked",
  faqs: "faq_expanded",
  services: "service_selected",
  brands: "brand_selected",
};

/**
 * Category Knowledge Hub — a fully graph-driven, tabbed view over existing
 * content. Articles are referenced, never duplicated: the Knowledge Center
 * remains their canonical home.
 */
export function KnowledgeHub({ categorySlug, productCategories = [], limit = 6 }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hub, setHub] = useState<HubModel | null>(null);
  const [active, setActive] = useState(0);
  const baseId = useId();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (visible) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const categoriesKey = useMemo(() => [...productCategories].sort().join(","), [productCategories]);

  useEffect(() => {
    if (!visible) return;
    setHub(getKnowledgeHub(categorySlug, categoriesKey ? categoriesKey.split(",") : [], { limit }));
    setActive(0);
  }, [visible, categorySlug, categoriesKey, limit]);

  const tabs = hub?.tabs ?? [];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback(
    (index: number, tab: HubTab) => {
      setActive(index);
      trackEvent("knowledge_hub_tab_selected", {
        tab: tab.id,
        tab_label: tab.label,
        category: categorySlug,
        items: tab.total,
      });
    },
    [categorySlug],
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = tabs.length - 1;
    let next = active;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    select(next, tabs[next]);
    tabRefs.current[next]?.focus();
  };

  if (!tabs.length) {
    return <section ref={containerRef} aria-hidden="true" className="h-0" />;
  }

  const tab = tabs[active];

  return (
    <section
      ref={containerRef}
      aria-labelledby={`${baseId}-title`}
      className="border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[100rem] px-6 py-14 lg:px-10 lg:py-20">
        <div className="max-w-3xl">
          <h2
            id={`${baseId}-title`}
            className="font-display text-2xl font-bold text-foreground sm:text-3xl"
          >
            {hub?.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Everything we publish on this modality — guides, comparisons, clinical resources,
            documentation, services and brands — connected automatically by our knowledge graph.
          </p>
        </div>

        <div className="mt-8 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <div
            role="tablist"
            aria-label={`${hub?.title} sections`}
            onKeyDown={onKeyDown}
            className="flex w-max min-w-full gap-2 border-b border-border/70 pb-px"
          >
            {tabs.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(i, t)}
                  className={`shrink-0 rounded-t-lg border-b-2 px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    selected
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                  <span className="ml-1.5 text-xs font-medium text-muted-foreground">
                    {t.total}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          tabIndex={0}
          className="mt-8 focus-visible:outline-none"
        >
          <p className="text-sm text-muted-foreground">{tab.description}</p>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tab.groups.map((group, index) => (
              <HubCard
                key={group.id}
                title={group.title}
                items={group.items}
                collapsible={isMobile && index > 0}
                eventName={EVENT_BY_TAB[tab.id] ?? "article_opened"}
                category={categorySlug}
                tab={tab.id}
              />
            ))}
            {tab.recommendations.length > 0 && (
              <HubCard
                title="You may also be interested in"
                items={tab.recommendations}
                collapsible={isMobile}
                eventName="recommendation_clicked"
                category={categorySlug}
                tab={tab.id}
              />
            )}
          </div>

          {tab.viewAll && (
            <Link
              to={tab.viewAll.to}
              search={tab.viewAll.search}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              View all
              <span className="sr-only"> {tab.label.toLowerCase()}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

function HubCard({
  title,
  items,
  collapsible,
  eventName,
  category,
  tab,
}: {
  title: string;
  items: ScoredEntity[];
  collapsible: boolean;
  eventName: AnalyticsEventName;
  category: string;
  tab: string;
}) {
  const [open, setOpen] = useState(!collapsible);
  const panelId = useId();

  useEffect(() => {
    setOpen(!collapsible);
  }, [collapsible]);

  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
      {collapsible ? (
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <span className="font-display text-base font-extrabold text-foreground">{title}</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      ) : (
        <p className="font-display text-base font-extrabold text-foreground">{title}</p>
      )}

      <ul id={panelId} hidden={!open} className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <HubLink entity={item} eventName={eventName} category={category} tab={tab} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HubLink({
  entity,
  eventName,
  category,
  tab,
}: {
  entity: ScoredEntity;
  eventName: AnalyticsEventName;
  category: string;
  tab: string;
}) {
  const className =
    "group inline-flex items-start gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20";

  const onClick = () =>
    trackEvent(eventName, { entity: entity.id, label: entity.label, category, tab });

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
      <Link
        to="/blog/$slug"
        params={{ slug: entity.slug }}
        className={className}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
  if (entity.type === "technology") {
    return (
      <Link to="/blog" search={{ technology: entity.slug }} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }
  if (entity.type === "brand" && !entity.url) {
    return (
      <Link
        to="/blog"
        search={{ manufacturer: entity.slug }}
        className={className}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  }
  if (entity.url) {
    return (
      <Link to={entity.url} className={className} onClick={onClick}>
        {label}
      </Link>
    );
  }
  return <span className="text-sm font-medium text-muted-foreground">{entity.label}</span>;
}
