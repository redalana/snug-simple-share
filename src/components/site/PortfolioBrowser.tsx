import { useEffect, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Boxes,
  Layers,
  Globe2,
  BadgeCheck,
  SlidersHorizontal,
  PhoneCall,
  Mail,
  Wrench,
  GraduationCap,
  SearchX,
  X,
} from "lucide-react";
import { HeroShowcase } from "@/components/site/HeroShowcase";
import {
  PRIMARY_CATEGORIES,
  ALL_MANUFACTURERS,
  PRODUCTS,
  productSlug,
  type Product,
} from "@/lib/products";


/**
 * Catalog data lives in `@/lib/products` — the single source of truth shared
 * with the dynamic Product Details page. Everything below (categories,
 * manufacturers, filter counts, pagination) is derived from it.
 */


const STATUS_STYLES: Record<Product["status"], string> = {
  "Brand New": "bg-primary/10 text-primary ring-1 ring-primary/20",
  "Certified Refurbished": "bg-secondary text-foreground/80 ring-1 ring-border",
  "Factory Certified": "bg-secondary text-foreground/80 ring-1 ring-border",
};

const CATEGORIES = ["All Categories", ...PRIMARY_CATEGORIES] as const;

const SORT_OPTIONS = [
  "Newest",
  "Recently Added",
  "Manufacturer A–Z",
  "Manufacturer Z–A",
  "Category",
  "System Name",
] as const;

const PER_PAGE_OPTIONS = [12, 24, 48, 96] as const;
const PER_PAGE_STORAGE_KEY = "abufarha:products:perPage";

// Master taxonomies — the complete enterprise filter vocabulary. Every value
// is always shown (with a live count) so brands/categories are never hidden
// just because they currently hold few or no systems.
const CONDITIONS = ["Brand New", "Certified Refurbished", "Factory Certified"] as const;
const COUNTRIES = ["Germany", "Japan", "USA", "Netherlands", "Italy", "China"] as const;
const SYSTEM_TYPES = ["Fixed", "Mobile", "Ceiling Mounted", "Floor Mounted", "Portable"] as const;
const SERVICES = [
  "Installation Available",
  "Commissioning Available",
  "Clinical Training",
  "Preventive Maintenance",
  "Spare Parts Available",
  "Remote Support",
  "Technical Support",
  "Warranty Included",
] as const;
const SPECIALTIES = [
  "Cardiology",
  "Radiology",
  "Oncology",
  "Neurology",
  "Women's Health",
  "Orthopedics",
  "Urology",
] as const;
const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018] as const;

// Filter facet definitions — values + live counts are computed from the catalog
// at render time and merged with the master taxonomies above, so nothing is
// hidden and adding a product simply increases the relevant counts.
type FacetKey =
  | "category"
  | "manufacturer"
  | "condition"
  | "country"
  | "year"
  | "systemType"
  | "service"
  | "specialty";

const FIELD_BY_KEY: Record<FacetKey, (p: Product) => string[]> = {
  category: (p) => [p.category],
  manufacturer: (p) => [p.brand],
  condition: (p) => [p.status],
  country: (p) => [p.country],
  year: (p) => [String(p.year)],
  systemType: (p) => [p.systemType],
  service: (p) => p.services,
  specialty: (p) => p.specialty,
};

const FACET_CONFIG: {
  key: FacetKey;
  title: string;
  master: readonly string[];
  defaultOpen?: boolean;
  searchable?: boolean;
}[] = [
  { key: "category", title: "Category", master: PRIMARY_CATEGORIES, defaultOpen: true },
  { key: "manufacturer", title: "Manufacturer", master: ALL_MANUFACTURERS, defaultOpen: true, searchable: true },
  { key: "condition", title: "Condition", master: CONDITIONS },
  { key: "country", title: "Country of Origin", master: COUNTRIES },
  { key: "year", title: "Year", master: YEARS.map(String) },
  { key: "systemType", title: "System Type", master: SYSTEM_TYPES },
  { key: "service", title: "Availability of Services", master: SERVICES },
  { key: "specialty", title: "Clinical Specialty", master: SPECIALTIES },
];


type Selected = Record<FacetKey, string[]>;
const EMPTY_SELECTED: Selected = {
  category: [],
  manufacturer: [],
  condition: [],
  country: [],
  year: [],
  systemType: [],
  service: [],
  specialty: [],
};

const FILTERS_OPEN_STORAGE_KEY = "abufarha:products:openFilters";

function FilterAccordion({
  title,
  options,
  selected,
  onToggle,
  open,
  onToggleOpen,
  searchable,
}: {
  title: string;
  options: { value: string; count: number }[];
  selected: string[];
  onToggle: (value: string) => void;
  open: boolean;
  onToggleOpen: () => void;
  searchable?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const [term, setTerm] = useState("");
  const VISIBLE = 8;

  const showSearch = !!searchable && options.length > VISIBLE;
  const q = term.trim().toLowerCase();
  const searched = q
    ? options.filter((o) => o.value.toLowerCase().includes(q))
    : options;
  const hasMore = !q && searched.length > VISIBLE;
  const visibleOptions = showAll || !hasMore ? searched : searched.slice(0, VISIBLE);

  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={onToggleOpen}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
      >
        <span className="flex items-center gap-2">
          {title}
          {selected.length > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold text-primary-foreground">
              {selected.length}
            </span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {showSearch && (
            <div className="relative mb-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={`Search ${title.toLowerCase()}…`}
                aria-label={`Search ${title}`}
                className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
              />

            </div>
          )}
          <ul className="space-y-3.5 pb-5">
            {visibleOptions.length === 0 && (
              <li className="text-sm text-muted-foreground/70">No matches.</li>
            )}
            {visibleOptions.map((opt) => (
              <li key={opt.value}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    onChange={() => onToggle(opt.value)}
                    className="h-[calc(18*var(--desktop-px-unit))] w-[calc(18*var(--desktop-px-unit))] rounded-[calc(5*var(--desktop-px-unit))] border-border text-primary accent-primary"
                  />
                  <span className="flex-1">{opt.value}</span>
                  <span className="text-xs font-medium text-muted-foreground/70">({opt.count})</span>
                </label>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="mb-5 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {showAll ? "Show Less" : `Show More (${searched.length - VISIBLE})`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


function ProductCard({ product, view }: { product: Product; view: "grid" | "list" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.32)] ${
        view === "list" ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden bg-secondary ${
          view === "list" ? "sm:w-72" : ""
        }`}
      >
        <div className={view === "list" ? "aspect-[4/3] sm:h-full" : "aspect-[4/3]"}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          />
        </div>
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[calc(11*var(--desktop-px-unit))] font-semibold ${STATUS_STYLES[product.status]}`}
        >
          {product.status}
        </span>
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wide text-foreground/80 shadow-sm">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {product.specs.map((s) => (
            <span
              key={s}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/70 sm:px-3 sm:py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-1 border-t border-border/60 pt-3 text-xs font-medium leading-snug text-foreground/70 sm:mt-4 sm:space-y-2 sm:pt-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            {product.warranty} Included
          </div>
          {product.installation && (
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" />
              Installation &amp; Commissioning Available
            </div>
          )}
          {product.training && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              Clinical Training &amp; Technical Support
            </div>
          )}
        </div>
        <Link
          to="/products/$slug"
          params={{ slug: productSlug(product) }}
          className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:mt-5 sm:py-3"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </div>
    </motion.article>
  );
}

/** Builds a compact page list with ellipses: 1 … 4 5 6 … 10 */
function buildPageList(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push("…");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}

export function PortfolioBrowser() {
  const [activeCat, setActiveCat] = useState<string>("All Categories");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<string>(SORT_OPTIONS[0]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Selected>(EMPTY_SELECTED);
  const [perPage, setPerPage] = useState<number>(PER_PAGE_OPTIONS[0]);
  const [page, setPage] = useState(1);
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(FACET_CONFIG.map((f) => [f.key, !!f.defaultOpen])),
  );

  // Restore & remember the user's per-page selection (client-only to avoid SSR mismatch).
  useEffect(() => {
    const saved = Number(window.localStorage.getItem(PER_PAGE_STORAGE_KEY));
    if (PER_PAGE_OPTIONS.includes(saved as (typeof PER_PAGE_OPTIONS)[number])) setPerPage(saved);
  }, []);

  // Restore which filter sections were expanded during the previous browse.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FILTERS_OPEN_STORAGE_KEY);
      if (raw) setOpenFilters((prev) => ({ ...prev, ...JSON.parse(raw) }));
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  // Reactively mirror ?category=<name> from the URL. Header dropdown navigates
  // here with a category query so filtering feels instant without a full reload.
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  useEffect(() => {
    const params = new URLSearchParams(searchStr);
    const cat = params.get("category");
    if (cat && (CATEGORIES as readonly string[]).includes(cat)) {
      setActiveCat(cat);
      setPage(1);
    } else if (!cat) {
      setActiveCat("All Categories");
    }
  }, [searchStr]);


  const toggleSection = (key: string) => {
    setOpenFilters((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      window.localStorage.setItem(FILTERS_OPEN_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const resetPage = () => setPage(1);

  const changePerPage = (n: number) => {
    setPerPage(n);
    window.localStorage.setItem(PER_PAGE_STORAGE_KEY, String(n));
    resetPage();
  };

  const toggleFilter = (key: FacetKey, value: string) => {
    setSelected((prev) => {
      const has = prev[key].includes(value);
      return {
        ...prev,
        [key]: has ? prev[key].filter((v) => v !== value) : [...prev[key], value],
      };
    });
    resetPage();
  };

  const clearAll = () => {
    setSelected(EMPTY_SELECTED);
    setQuery("");
    setActiveCat("All Categories");
    resetPage();
  };

  // Base list: category pill + free-text search (facets applied on top).
  const baseList = useMemo(() => {
    let list = PRODUCTS;
    if (activeCat !== "All Categories") list = list.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        `${p.name} ${p.brand} ${p.category} ${p.keywords} ${p.status} ${p.country} ${p.systemType} ${p.year} ${p.specialty.join(" ")}`
          .toLowerCase()
          .includes(q),
      );
    }
    return list;
  }, [activeCat, query]);

  const productPassesFacets = (p: Product, ignore?: FacetKey) => {
    for (const { key } of FACET_CONFIG) {
      if (key === ignore) continue;
      const vals = selected[key];
      if (!vals.length) continue;
      const productVals = FIELD_BY_KEY[key](p);
      // A product passes when it matches ANY selected value in this facet.
      if (!vals.some((v) => productVals.includes(v))) return false;
    }
    return true;
  };

  // Facet options with LIVE counts (count reflects all other active filters).
  // Master values are always included (count 0 allowed) so nothing is hidden.
  const facetGroups = useMemo(() => {
    return FACET_CONFIG.map(({ key, title, master, searchable }) => {
      const counts = new Map<string, number>();
      for (const v of master) counts.set(v, 0);
      for (const p of baseList) {
        if (!productPassesFacets(p, key)) continue;
        for (const v of FIELD_BY_KEY[key](p)) counts.set(v, (counts.get(v) ?? 0) + 1);
      }
      for (const v of selected[key]) if (!counts.has(v)) counts.set(v, 0);
      const order = new Map(master.map((v, i) => [v, i]));
      const options = [...counts.entries()]
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => {
          const ai = order.has(a.value) ? order.get(a.value)! : Number.MAX_SAFE_INTEGER;
          const bi = order.has(b.value) ? order.get(b.value)! : Number.MAX_SAFE_INTEGER;
          return ai - bi || a.value.localeCompare(b.value);
        });
      return { key, title, options, searchable };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseList, selected]);

  const filtered = useMemo(() => {
    let list = baseList.filter((p) => productPassesFacets(p));
    if (sort === "Newest" || sort === "Recently Added")
      list = [...list].sort((a, b) => b.addedOrder - a.addedOrder);
    else if (sort === "Manufacturer A–Z")
      list = [...list].sort((a, b) => a.brand.localeCompare(b.brand));
    else if (sort === "Manufacturer Z–A")
      list = [...list].sort((a, b) => b.brand.localeCompare(a.brand));
    else if (sort === "Category") list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    else if (sort === "System Name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseList, selected, sort]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * perPage;
  const pageItems = filtered.slice(startIdx, startIdx + perPage);
  const rangeStart = total === 0 ? 0 : startIdx + 1;
  const rangeEnd = Math.min(startIdx + perPage, total);

  // Active chips (facets + category pill + search).
  const activeChips: { label: string; onRemove: () => void }[] = [
    ...(activeCat !== "All Categories"
      ? [{ label: activeCat, onRemove: () => { setActiveCat("All Categories"); resetPage(); } }]
      : []),
    ...FACET_CONFIG.flatMap(({ key }) =>
      selected[key].map((v) => ({ label: v, onRemove: () => toggleFilter(key, v) })),
    ),
    ...(query.trim()
      ? [{ label: `“${query.trim()}”`, onRemove: () => { setQuery(""); resetPage(); } }]
      : []),
  ];

  const brands = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of PRODUCTS) counts.set(p.brand, (counts.get(p.brand) ?? 0) + 1);
    // Show the full manufacturer roster, ordered by system count then name.
    const names = new Set<string>([...ALL_MANUFACTURERS, ...counts.keys()]);
    return [...names]
      .map((name) => ({ name, count: counts.get(name) ?? 0 }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-white via-secondary/40 to-secondary">
        {/* Blueprint / engineering-line atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in srgb, var(--primary) 6%, transparent) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, color-mix(in srgb, var(--primary) 6%, transparent) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
            backgroundSize: "calc(56*var(--desktop-px-unit)) calc(56*var(--desktop-px-unit))",
            maskImage: "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, black 30%, transparent 78%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-[100rem] px-6 py-14 lg:px-10 lg:py-16">
          {/* BREADCRUMB */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
              <li className="font-semibold text-foreground" aria-current="page">
                All Medical Systems
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-5 lg:gap-14">
            {/* LEFT — 40% */}
            <div className="lg:col-span-2">
              <span className="inline-block h-1 w-12 rounded-full bg-primary" />
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                All Medical Systems
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Explore certified medical technologies from leading global manufacturers for
                hospitals, clinics and healthcare providers across Africa and the Middle East.
              </p>

              {/* SEARCH — the primary action */}
              <div className="mt-8">
                <div className="group/search relative">
                  <Search className="pointer-events-none absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-primary" />
                  <input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      resetPage();
                    }}
                    type="search"
                    placeholder="Search by system name, manufacturer, model, technology, or keyword..."
                    aria-label="Search medical systems"
                    className="h-16 w-full rounded-2xl bg-white pl-16 pr-5 text-base text-foreground shadow-[0_18px_44px_-18px_rgba(15,23,42,0.32)] ring-1 ring-primary/10 outline-none transition-all placeholder:text-muted-foreground hover:ring-primary/20 focus:shadow-[0_22px_54px_-18px_rgba(15,23,42,0.4)] focus:ring-2 focus:ring-primary/50"
                  />

                </div>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6">
                <Stat icon={Boxes} value="11" label="Categories" />
                <Stat icon={Layers} value="1,500+" label="Systems Installed" />
                <Stat icon={Globe2} value="40+" label="Countries Served" />
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-lg font-extrabold leading-none text-foreground">Certified</div>
                    <div className="mt-1 text-xs text-muted-foreground">Quality &amp; Safety</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — 60% showcase slider */}
            <div className="lg:col-span-3">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="sticky top-[calc(112*var(--desktop-px-unit))] z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[100rem] items-center gap-3 px-6 py-4 lg:px-10">
          <div className="relative w-full [mask-image:linear-gradient(to_right,black_calc(100%-40px),transparent)] lg:[mask-image:none]">
            <div className="flex w-full snap-x snap-mandatory items-center gap-2 overflow-x-auto pr-10 [scrollbar-width:none] [-ms-overflow-style:none] lg:pr-0 [&::-webkit-scrollbar]:hidden">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCat(cat);
                    resetPage();
                  }}
                  className={`shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCat === cat
                      ? "bg-primary text-primary-foreground shadow-[0_10px_24px_-10px_var(--primary)] ring-1 ring-primary"
                      : "border border-border bg-card text-foreground/75 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-[0_10px_24px_-16px_var(--primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR MANUFACTURERS */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-[100rem] px-6 py-10 lg:px-10">
          <div className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Popular Manufacturers
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Certified partners and leading global medical technology brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {brands.map((brand) => {
              const active = selected.manufacturer.includes(brand.name);
              return (
                <button
                  key={brand.name}
                  onClick={() => toggleFilter("manufacturer", brand.name)}
                  aria-pressed={active}
                  className={`flex h-20 flex-col items-center justify-center rounded-2xl border bg-card px-4 text-center font-display text-sm font-bold tracking-tight shadow-[0_10px_30px_-24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-22px_rgba(0,0,0,0.35)] ${
                    active
                      ? "border-primary text-primary ring-1 ring-primary/40"
                      : "border-border/70 text-foreground/75 hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  <span>{brand.name}</span>
                  <span className="mt-1 text-[calc(11*var(--desktop-px-unit))] font-medium text-muted-foreground/70">
                    {brand.count} {brand.count === 1 ? "system" : "systems"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-[calc(320*var(--desktop-px-unit))_1fr] lg:gap-10">
          {/* FILTERS */}
          <aside className="mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-[calc(188*var(--desktop-px-unit))]">
              <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)]">
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display font-bold text-foreground">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    Filters
                  </div>
                  {activeChips.length > 0 && (
                    <button
                      onClick={clearAll}
                      className="text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                {facetGroups.map((group) => (
                  <FilterAccordion
                    key={group.key}
                    title={group.title}
                    options={group.options}
                    selected={selected[group.key]}
                    onToggle={(v) => toggleFilter(group.key, v)}
                    open={!!openFilters[group.key]}
                    onToggleOpen={() => toggleSection(group.key)}
                    searchable={group.searchable}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div>
            {/* TOOLBAR */}
            <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-bold text-foreground">
                  {rangeStart}–{rangeEnd}
                </span>{" "}
                of <span className="font-bold text-foreground">{total}</span> Medical Systems
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                      resetPage();
                    }}
                    className="h-10 appearance-none rounded-full border border-border bg-background pl-4 pr-9 text-sm font-medium text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                <div className="relative">
                  <select
                    value={perPage}
                    onChange={(e) => changePerPage(Number(e.target.value))}
                    aria-label="Systems per page"
                    className="h-10 appearance-none rounded-full border border-border bg-background pl-4 pr-9 text-sm font-medium text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {PER_PAGE_OPTIONS.map((n) => (
                      <option key={n} value={n}>
                        {n} / page
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                </div>
                <div className="flex items-center gap-1 rounded-full border border-border bg-background p-1">
                  <button
                    aria-label="Grid view"
                    onClick={() => setView("grid")}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="List view"
                    onClick={() => setView("list")}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* ACTIVE FILTER CHIPS */}
            {activeChips.length > 0 && (
              <div className="mb-8 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Active filters:
                </span>
                {activeChips.map((chip, i) => (
                  <button
                    key={`${chip.label}-${i}`}
                    onClick={chip.onRemove}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 py-1.5 pl-3 pr-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {chip.label}
                    <X className="h-3.5 w-3.5" />
                  </button>
                ))}
                <button
                  onClick={clearAll}
                  className="ml-1 text-xs font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* GRID */}
            {total === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-20 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                  <SearchX className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  No systems match your current filters.
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Try adjusting your search or filter options to explore more medical technologies.
                </p>
                <button
                  onClick={clearAll}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <>
                <div
                  className={
                    view === "grid"
                      ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                      : "flex flex-col gap-6"
                  }
                >
                  {pageItems.map((p) => (
                    <ProductCard key={p.name} product={p} view={view} />
                  ))}
                </div>

                {/* PAGINATION */}
                <nav
                  aria-label="Pagination"
                  className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row"
                >
                  <p className="text-sm text-muted-foreground">
                    Showing{" "}
                    <span className="font-bold text-foreground">
                      {rangeStart}–{rangeEnd}
                    </span>{" "}
                    of <span className="font-bold text-foreground">{total}</span> Medical Systems
                  </p>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={safePage === 1}
                      className="inline-flex h-10 items-center gap-1 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>
                    {buildPageList(safePage, totalPages).map((p, i) =>
                      p === "…" ? (
                        <span
                          key={`e${i}`}
                          className="flex h-10 w-10 items-center justify-center text-sm text-muted-foreground"
                        >
                          …
                        </span>
                      ) : (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          aria-current={p === safePage ? "page" : undefined}
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                            p === safePage
                              ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-10px_var(--primary)]"
                              : "border border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
                          }`}
                        >
                          {p}
                        </button>
                      ),
                    )}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={safePage === totalPages}
                      className="inline-flex h-10 items-center gap-1 rounded-full border border-border bg-card px-4 text-sm font-semibold text-foreground/75 transition-colors hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-40"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="mx-auto max-w-[100rem] px-6 pb-20 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-secondary p-10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] lg:p-14">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                Need help choosing the right medical system?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our specialists can help you identify the most suitable technology for
                your hospital, clinic or diagnostic center.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                <PhoneCall className="h-4 w-4" /> Request Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" /> Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Boxes;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-lg font-extrabold leading-none text-foreground">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
