import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
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
import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";
import { HeroShowcase } from "@/components/site/HeroShowcase";

/**
 * NOTE: All catalog data below is structured to be CMS-ready. Replace the
 * static PRODUCTS array with a loader/query when the CMS/database is connected —
 * the UI derives everything dynamically from it (categories, manufacturers,
 * conditions, live filter counts, pagination). Nothing in the filters or counts
 * is hardcoded; they are all computed from the product data.
 */

// Full medical-technology taxonomy shown as category chips. Category names
// align with the `category` field on products so filtering stays functional;
// additional clinical categories surface the full portfolio breadth.
const PRIMARY_CATEGORIES = [
  "Cath Lab",
  "MRI",
  "CT",
  "PET/CT",
  "C-Arms",
  "X-Ray",
  "Mammography",
  "Ultrasound",
  "Women's Healthcare",
  "Operating Room",
  "Bone Densitometers (DEXA)",
  "Lithotripsy",
  "Endoscopy",
  "Urology",
  "Cardiology",
  "Neurology",
  "Radiology",
  "Surgical Equipment",
] as const;

// Full manufacturer roster — leading global medical technology brands.
const ALL_MANUFACTURERS = [
  "Philips",
  "Siemens Healthineers",
  "Canon Medical",
  "GE HealthCare",
  "Hitachi",
  "Toshiba",
  "Mindray",
  "Richard Wolf",
  "Karl Storz",
  "Boston Scientific",
  "Abbott",
  "Medtronic",
  "Shimadzu",
  "Dräger",
  "Olympus",
  "Samsung",
  "Esaote",
  "Fujifilm",
] as const;

type Product = {
  name: string;
  brand: string;
  category: string;
  image: string;
  specs: [string, string];
  /** Professional condition label — never a stock/inventory status. */
  status: "Certified Refurbished" | "Brand New" | "Factory Certified";
  warranty: string;
  installation: boolean;
  training: boolean;
  /** Extra searchable terms: technology + clinical keywords. */
  keywords: string;
  /** Monotonic order used for "Newest" / "Recently Added" sorting. */
  addedOrder: number;
};

const PRODUCTS: Product[] = [
  {
    name: "Philips Achieva 1.5T MRI",
    brand: "Philips",
    category: "MRI",
    image: solMri,
    specs: ["1.5 Tesla", "Whole Body"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "neuro stroke oncology imaging magnetic resonance diagnostic",
    addedOrder: 6,
  },
  {
    name: "Philips Allura Xper FD20",
    brand: "Philips",
    category: "Cath Lab",
    image: heroCathlab,
    specs: ["Biplane", "Interventional"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "cardiology interventional angiography neurovascular catheterization",
    addedOrder: 8,
  },
  {
    name: "Siemens SOMATOM Definition",
    brand: "Siemens Healthineers",
    category: "CT",
    image: solCt,
    specs: ["128 Slice", "Dual Source"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "computed tomography stroke cardiac oncology imaging diagnostic",
    addedOrder: 5,
  },
  {
    name: "GE Discovery MI PET/CT",
    brand: "GE HealthCare",
    category: "PET/CT",
    image: solPetct,
    specs: ["16 Slice", "Digital PET"],
    status: "Factory Certified",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "pet oncology nuclear molecular imaging cancer diagnostic",
    addedOrder: 7,
  },
  {
    name: "Siemens Mammomat Revelation",
    brand: "Siemens Healthineers",
    category: "Mammography",
    image: solMammo,
    specs: ["3D Tomosynthesis", "50µm"],
    status: "Brand New",
    warranty: "2-Year Warranty",
    installation: true,
    training: true,
    keywords: "women health breast screening tomosynthesis mammography diagnostic",
    addedOrder: 4,
  },
  {
    name: "Philips Zenition 70 C-Arm",
    brand: "Philips",
    category: "C-Arms",
    image: solCarm,
    specs: ["Mobile", "Flat Detector"],
    status: "Brand New",
    warranty: "2-Year Warranty",
    installation: true,
    training: true,
    keywords: "surgical mobile fluoroscopy orthopedic interventional operating room",
    addedOrder: 3,
  },
  {
    name: "Canon Radrex Digital X-Ray",
    brand: "Canon Medical",
    category: "X-Ray",
    image: solXray,
    specs: ["Digital", "Ceiling-Mounted"],
    status: "Factory Certified",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "radiography digital imaging chest bone diagnostic",
    addedOrder: 2,
  },
  {
    name: "GE Innova IGS 530 Cath Lab",
    brand: "GE HealthCare",
    category: "Cath Lab",
    image: beyondCathlab,
    specs: ["Single Plane", "Cardiac"],
    status: "Certified Refurbished",
    warranty: "1-Year Warranty",
    installation: true,
    training: true,
    keywords: "cardiology cardiac interventional angiography catheterization",
    addedOrder: 1,
  },
];

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

// Filter facet definitions — the values + counts are derived dynamically from
// the catalog at render time, so adding a product surfaces its category,
// manufacturer or condition automatically.
type FacetKey = "category" | "manufacturer" | "condition";
const FACETS: { key: FacetKey; title: string; field: (p: Product) => string }[] = [
  { key: "category", title: "Category", field: (p) => p.category },
  { key: "manufacturer", title: "Manufacturer", field: (p) => p.brand },
  { key: "condition", title: "Condition", field: (p) => p.status },
];

const FIELD_BY_KEY: Record<FacetKey, (p: Product) => string> = {
  category: (p) => p.category,
  manufacturer: (p) => p.brand,
  condition: (p) => p.status,
};

type Selected = Record<FacetKey, string[]>;
const EMPTY_SELECTED: Selected = { category: [], manufacturer: [], condition: [] };

function FilterAccordion({
  title,
  options,
  selected,
  onToggle,
  defaultOpen,
}: {
  title: string;
  options: { value: string; count: number }[];
  selected: string[];
  onToggle: (value: string) => void;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE = 8;
  const hasMore = options.length > VISIBLE;
  const visibleOptions = showAll || !hasMore ? options : options.slice(0, VISIBLE);
  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
      >
        <span className="flex items-center gap-2">
          {title}
          {selected.length > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-primary-foreground">
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
          <ul className="space-y-3.5 pb-5">
            {visibleOptions.map((opt) => (
              <li key={opt.value}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <input
                    type="checkbox"
                    checked={selected.includes(opt.value)}
                    onChange={() => onToggle(opt.value)}
                    className="h-[18px] w-[18px] rounded-[5px] border-border text-primary accent-primary"
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
              {showAll ? "Show Less" : `Show More (${options.length - VISIBLE})`}
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
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_STYLES[product.status]}`}
        >
          {product.status}
        </span>
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground/80 shadow-sm">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.map((s) => (
            <span
              key={s}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/70"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2 border-t border-border/60 pt-4 text-xs font-medium text-foreground/70">
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
        <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
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

  // Restore & remember the user's per-page selection (client-only to avoid SSR mismatch).
  useEffect(() => {
    const saved = Number(window.localStorage.getItem(PER_PAGE_STORAGE_KEY));
    if (PER_PAGE_OPTIONS.includes(saved as (typeof PER_PAGE_OPTIONS)[number])) setPerPage(saved);
  }, []);

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
        `${p.name} ${p.brand} ${p.category} ${p.keywords} ${p.status}`.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCat, query]);

  const productPassesFacets = (p: Product, ignore?: FacetKey) => {
    for (const { key } of FACETS) {
      if (key === ignore) continue;
      const vals = selected[key];
      if (vals.length && !vals.includes(FIELD_BY_KEY[key](p))) return false;
    }
    return true;
  };

  // Facet options with LIVE counts (count reflects all other active filters).
  const facetGroups = useMemo(() => {
    return FACETS.map(({ key, title, field }) => {
      const counts = new Map<string, number>();
      for (const p of baseList) {
        if (!productPassesFacets(p, key)) continue;
        const v = field(p);
        counts.set(v, (counts.get(v) ?? 0) + 1);
      }
      // Ensure currently-selected values remain visible even at count 0.
      for (const v of selected[key]) if (!counts.has(v)) counts.set(v, 0);
      const options = [...counts.entries()]
        .map(([value, count]) => ({ value, count }))
        .sort((a, b) => a.value.localeCompare(b.value));
      return { key, title, options };
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
    ...FACETS.flatMap(({ key }) =>
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
              "linear-gradient(to right, color-mix(in srgb, var(--primary) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--primary) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
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
      <section className="sticky top-[112px] z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[100rem] items-center gap-3 px-6 py-4 lg:px-10">
          <div className="flex w-full flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCat(cat);
                  resetPage();
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
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
                  <span className="mt-1 text-[11px] font-medium text-muted-foreground/70">
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
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-10">
          {/* FILTERS */}
          <aside className="mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-[188px]">
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
                {facetGroups.map((group, i) => (
                  <FilterAccordion
                    key={group.key}
                    title={group.title}
                    options={group.options}
                    selected={selected[group.key]}
                    onToggle={(v) => toggleFilter(group.key, v)}
                    defaultOpen={i < 2}
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
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                <PhoneCall className="h-4 w-4" /> Request Consultation
              </a>
              <a
                href="/#contact"
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
