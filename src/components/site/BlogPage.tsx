import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, getRouteApi } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import solDes from "@/assets/sol-des.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import { FEATURED_ARTICLES } from "@/lib/blog";
import {
  ALL_CATEGORY_ID,
  KNOWLEDGE_SORTS,
  getCategoryTabs,
  getFacetOptions,
  getResultsHeading,
  queryArticles,
  technologyLabel,
  type FacetOption,
  type KnowledgeFilters,
  type KnowledgeSort,
} from "@/lib/content";
import type { ContentItem } from "@/lib/content";

const SORTS = KNOWLEDGE_SORTS;
const PAGE_SIZE = 12;

export function BlogPage() {
  return (
    <div className="bg-white">
      <PageIntro />
      <HeroSlider />
      <KnowledgeLibrary />
      <Newsletter />
    </div>
  );
}

/* ---------------- Knowledge Library (graph-driven) ---------------- */

type BlogSearchState = KnowledgeFilters & { page?: number };

const blogRoute = getRouteApi("/blog/");

function KnowledgeLibrary() {
  const search = blogRoute.useSearch();
  const navigate = blogRoute.useNavigate();
  const resultsRef = useRef<HTMLDivElement>(null);

  const filters = useMemo<KnowledgeFilters>(
    () => ({
      category: search.category,
      technology: search.technology,
      manufacturer: search.manufacturer,
      specialty: search.specialty,
      tag: search.tag,
      q: search.q,
      sort: search.sort,
    }),
    [
      search.category,
      search.technology,
      search.manufacturer,
      search.specialty,
      search.tag,
      search.q,
      search.sort,
    ],
  );

  const update = useCallback(
    (patch: Partial<BlogSearchState>, keepPage = false) => {
      const next: BlogSearchState = { ...search, ...patch };
      if (!keepPage) delete next.page;
      for (const key of Object.keys(next) as (keyof BlogSearchState)[]) {
        const value = next[key];
        if (value === undefined || value === "" || value === ALL_CATEGORY_ID) delete next[key];
      }
      void navigate({ to: ".", search: next, replace: true, resetScroll: false });
    },
    [navigate, search],
  );

  /* Every list below comes from the knowledge graph — nothing is hardcoded. */
  const articles = useMemo(() => queryArticles(filters), [filters]);
  const tabs = useMemo(() => getCategoryTabs(filters), [filters]);
  const facets = useMemo(() => getFacetOptions(filters), [filters]);
  const heading = getResultsHeading(filters, articles.length);

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, search.page ?? 1), totalPages);
  const pageItems = useMemo(
    () => articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [articles, page],
  );

  const goToPage = useCallback(
    (next: number) => {
      update({ page: next > 1 ? next : undefined }, true);
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [update],
  );

  return (
    <>
      <SearchBar
        q={search.q ?? ""}
        setQ={(value) => update({ q: value || undefined })}
        sort={search.sort ?? "Latest"}
        setSort={(value) => update({ sort: value === "Latest" ? undefined : value })}
      />
      <CategoryTabs
        tabs={tabs}
        active={search.category ?? ALL_CATEGORY_ID}
        onSelect={(id) => update({ category: id })}
      />
      <FacetFilters
        facets={facets}
        filters={filters}
        onChange={(patch) => update(patch)}
        onClear={() =>
          update({
            technology: undefined,
            manufacturer: undefined,
            specialty: undefined,
            tag: undefined,
          })
        }
      />
      <div ref={resultsRef}>
        <ArticleGrid heading={heading.title} count={heading.count} items={pageItems} />
      </div>
      <CTABand />
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} onPage={goToPage} />}
    </>
  );
}

/* ---------------- Category Tabs ---------------- */

function CategoryTabs({
  tabs,
  active,
  onSelect,
}: {
  tabs: FacetOption[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => t.id === active),
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : event.key === "Home" ? -999 : event.key === "End" ? 999 : 0;
    if (!delta) return;
    event.preventDefault();
    const next =
      delta === -999
        ? 0
        : delta === 999
          ? tabs.length - 1
          : (activeIndex + delta + tabs.length) % tabs.length;
    refs.current[next]?.focus();
    onSelect(tabs[next].id);
  };

  return (
    <section className="bg-white pt-6 lg:pt-8">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div
          role="tablist"
          aria-label="Article categories"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab, i) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`kc-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="kc-results"
                tabIndex={isActive ? 0 : -1}
                disabled={tab.count === 0 && !isActive}
                onClick={() => onSelect(tab.id)}
                className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-40 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-ink hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tab.label}
                <span
                  className={`text-[calc(11*var(--desktop-px-unit))] font-bold ${
                    isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Smart Filters ---------------- */

function FacetFilters({
  facets,
  filters,
  onChange,
  onClear,
}: {
  facets: { technologies: FacetOption[]; manufacturers: FacetOption[]; specialties: FacetOption[] };
  filters: KnowledgeFilters;
  onChange: (patch: Partial<BlogSearchState>) => void;
  onClear: () => void;
}) {
  const groups = [
    { key: "technology" as const, label: "Technology", options: facets.technologies },
    { key: "manufacturer" as const, label: "Manufacturer", options: facets.manufacturers },
    { key: "specialty" as const, label: "Specialty", options: facets.specialties },
  ].filter((g) => g.options.length > 0);

  const hasActive = Boolean(
    filters.technology || filters.manufacturer || filters.specialty || filters.tag,
  );
  if (!groups.length) return null;

  return (
    <section className="bg-white pt-4 lg:pt-5">
      <div className="mx-auto flex max-w-[87.5rem] flex-wrap items-center gap-3 px-6 lg:px-10">
        {groups.map((group) => (
          <label key={group.key} className="inline-flex items-center gap-2 text-sm">
            <span className="font-medium text-muted-foreground">{group.label}:</span>
            <select
              value={filters[group.key] ?? ""}
              onChange={(e) => onChange({ [group.key]: e.target.value || undefined })}
              className="h-10 rounded-full border border-border bg-white px-3 text-sm font-semibold text-ink outline-none transition hover:border-primary/40 focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              <option value="">All</option>
              {group.options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label} ({option.count})
                </option>
              ))}
            </select>
          </label>
        ))}
        {hasActive && (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
          >
            <X className="h-3.5 w-3.5" /> Clear filters
          </button>
        )}
      </div>
    </section>
  );
}

/* ---------------- Page Intro ---------------- */

function PageIntro() {
  return (
    <section className="bg-white pt-[calc(100*var(--desktop-px-unit))] xl:pt-[calc(140*var(--desktop-px-unit))]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
          Healthcare Knowledge Center
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.75rem]">
          Healthcare Knowledge Center
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
          Evidence-based clinical articles, healthcare technology insights, buying guides,
          educational resources, and expert knowledge designed for hospitals, physicians, biomedical
          engineers, and healthcare professionals across Africa and the Middle East.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Hero Slider ---------------- */

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slides = FEATURED_ARTICLES;
  const count = slides.length;

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = slides[active];

  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div
          className="relative h-[calc(460*var(--desktop-px-unit))] w-full overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] sm:h-[calc(520*var(--desktop-px-unit))] lg:h-[calc(580*var(--desktop-px-unit))]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={active}
              src={slide.coverImage}
              alt={slide.title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ objectPosition: slide.focus ?? "center center" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" />

          <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary-foreground">
                  {slide.category}
                </span>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  {slide.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {slide.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-5 text-xs font-medium text-white/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {slide.readingTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {slide.publishedDate}
                  </span>
                </div>
                <Link
                  to="/blog/$slug"
                  params={{ slug: slide.slug }}
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-16px_rgba(220,38,38,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-ink shadow-md backdrop-blur transition hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                /* 24x24 hit area (WCAG 2.2 target-size) with negative margins so
                   the visible dot size and spacing stay identical. */
                className="-mx-1 -my-2 grid h-6 place-items-center px-1 py-2"
              >
                <span
                  aria-hidden
                  className={`block h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Search Bar ---------------- */

function SearchBar({
  q,
  setQ,
  sort,
  setSort,
}: {
  q: string;
  setQ: (value: string) => void;
  sort: KnowledgeSort;
  setSort: (value: KnowledgeSort) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="mx-auto flex max-w-[87.5rem] flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles, topics, or keywords…"
            className="h-12 w-full rounded-full border border-border bg-white pl-11 pr-14 text-sm text-ink shadow-[0_2px_10px_-6px_rgba(15,23,42,0.15)] outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <button
            type="button"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary-dark"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-3 sm:shrink-0">
          <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 min-w-[calc(160*var(--desktop-px-unit))] items-center justify-between gap-2 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40"
            >
              {sort}
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div
                className="absolute right-0 top-full z-30 mt-2 w-[calc(180*var(--desktop-px-unit))] overflow-hidden rounded-2xl border border-border bg-white p-1.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)]"
                onMouseLeave={() => setOpen(false)}
              >
                {SORTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSort(s);
                      setOpen(false);
                    }}
                    className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                      s === sort ? "bg-primary/10 text-primary" : "text-ink hover:bg-secondary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Article Grid ---------------- */

function ArticleGrid({
  heading,
  count,
  items,
}: {
  heading: string;
  count: number;
  items: ContentItem[];
}) {
  return (
    <section className="bg-white pt-10 lg:pt-14">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <h2 className="mb-6 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem]">
          {heading}
          <span className="ml-3 align-middle text-base font-bold text-muted-foreground">
            {count} {count === 1 ? "Article" : "Articles"}
          </span>
        </h2>
        <div
          id="kc-results"
          role="tabpanel"
          aria-live="polite"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>
        {items.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No articles match the current filters. Try clearing a filter or searching for a
            different topic.
          </p>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ a }: { a: ContentItem }) {
  /* Badges are graph facets, not editorial fields. */
  const badges = [
    a.primaryCategory,
    a.technologies[0] ? technologyLabel(a.technologies[0]) : undefined,
    a.manufacturers[0],
    a.readingTime,
  ].filter((v): v is string => Boolean(v));

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to="/blog/$slug"
        params={{ slug: a.slug }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_50px_-28px_rgba(15,23,42,0.35)]"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
          <img
            src={a.image}
            alt={a.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            decoding="async"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary">
            {badges.map((badge, i) => (
              <span key={badge} className="inline-flex items-center gap-2">
                {i > 0 && <span className="text-muted-foreground/50">•</span>}
                <span className={i === 0 ? "" : "text-muted-foreground"}>{badge}</span>
              </span>
            ))}
          </span>
          <h3 className="mt-2 font-display text-lg font-extrabold leading-snug text-ink transition-colors group-hover:text-primary">
            {a.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <div className="flex items-center gap-4 border-t border-border pt-4 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {a.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {a.publishedDate}
              </span>
            </div>
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
            Read More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ---------------- CTA Band ---------------- */

function CTABand() {
  return (
    <section className="bg-white pt-14 lg:pt-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#fff5f5_0%,#fff_60%)] p-6 shadow-(--shadow-editorial-sm) ring-1 ring-primary/10 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Need help choosing the right medical equipment?
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Our experts are here to help you find the best solution for your facility and
                budget.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-(--shadow-brand-md) transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-[#25D366]/40 hover:text-[#128C7E]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={whyCathlab}
                alt="Medical specialists"
                loading="lazy"
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pagination ---------------- */

function Pagination({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (next: number) => void;
}) {
  const setPage = (updater: (p: number) => number) => onPage(updater(page));
  /* Page numbers are derived from the filtered result count. */
  const pages = useMemo<(number | "…")[]>(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const set = new Set<number>([1, totalPages, page, page - 1, page + 1]);
    const list = [...set].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
    const out: (number | "…")[] = [];
    list.forEach((p, i) => {
      if (i > 0 && p - (list[i - 1] as number) > 1) out.push("…");
      out.push(p);
    });
    return out;
  }, [page, totalPages]);

  return (
    <section className="bg-white pt-12 lg:pt-16">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary disabled:opacity-40"
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          {pages.map((p, i) =>
            typeof p === "number" ? (
              <button
                key={p}
                type="button"
                onClick={() => onPage(p)}
                aria-current={p === page ? "page" : undefined}
                className={`h-10 min-w-10 rounded-full px-3 text-sm font-bold transition ${
                  p === page
                    ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-12px_rgba(220,38,38,0.6)]"
                    : "border border-border bg-white text-ink hover:border-primary/40 hover:text-primary"
                }`}
              >
                {p}
              </button>
            ) : (
              <span key={`ellipsis-${i}`} className="px-2 text-sm text-muted-foreground">
                {p}
              </span>
            ),
          )}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary/40 hover:text-primary disabled:opacity-40"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */

function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 shadow-(--shadow-editorial-sm) ring-1 ring-black/[0.04] sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[auto_1fr_auto_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm ring-1 ring-primary/15">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-extrabold text-ink sm:text-[1.4rem]">
                Stay updated with the latest medical technology insights
              </h3>
              <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
                Subscribe to our newsletter and never miss an important update.
              </p>
            </div>
            <form
              className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-12 w-full min-w-[calc(240*var(--desktop-px-unit))] rounded-full border border-border bg-white px-5 text-sm text-ink outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10 sm:w-[calc(260*var(--desktop-px-unit))]"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-(--shadow-brand-md) transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
            <div className="hidden h-32 w-56 shrink-0 overflow-hidden rounded-2xl lg:block">
              <img
                src={solDes}
                alt="Healthcare newsletter"
                loading="lazy"
                className="h-full w-full object-cover"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.04 2.5A9.5 9.5 0 0 0 3.9 16.86L3 21.5l4.77-.88A9.5 9.5 0 1 0 12.04 2.5Zm0 1.7a7.8 7.8 0 0 1 5.5 13.3 7.8 7.8 0 0 1-9.34 1.24l-.34-.2-2.83.52.53-2.76-.22-.35A7.8 7.8 0 0 1 12.04 4.2Zm-2.5 3.4c-.2 0-.5.08-.77.37-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.05 4.85 4.16 2.36.93 2.84.75 3.36.7.51-.05 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.11-.26-.18-.55-.32-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.14-.19.29-.74.94-.9 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55Z"
        fill="#25D366"
      />
    </svg>
  );
}
