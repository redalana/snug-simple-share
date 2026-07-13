import { useMemo, useState } from "react";
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
 * static arrays with a loader/query when the CMS is connected — the UI reads
 * everything dynamically (categories, brands, counts, pagination).
 */

// Primary categories shown as chips; the rest live on the /categories page.
const PRIMARY_CATEGORIES = [
  "Cath Lab",
  "MRI",
  "CT",
  "PET/CT",
  "X-Ray",
  "Ultrasound",
  "Women Healthcare",
  "Mammography",
  "Operating Room",
  "C-Arms",
] as const;

// Full catalog taxonomy — single source of truth. In production these are
// loaded from the CMS/database; the filters below derive from them, so adding
// a new category or manufacturer automatically surfaces it in the UI.
const ALL_CATEGORIES = [
  "Cath Lab Systems",
  "MRI Scanners",
  "CT Scanners",
  "PET/CT Scanners",
  "C-Arms",
  "X-Ray Systems",
  "Mammography",
  "Ultrasound",
  "Operating Room",
  "Women's Healthcare",
  "Bone Densitometers (DEXA)",
  "Lithotripsy Systems",
  "Endoscopy",
  "Urology",
  "Cardiology",
  "Neurology",
  "Radiology",
  "Surgical Equipment",
] as const;

// Manufacturers — loaded dynamically from the CMS/database in production.
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
  "Esaote",
  "Samsung",
  "Fujifilm",
  "Olympus",
] as const;

const FILTER_GROUPS = [
  { title: "Category", options: [...ALL_CATEGORIES] },
  { title: "Manufacturer", options: [...ALL_MANUFACTURERS] },
  { title: "Condition", options: ["Brand New", "Certified Refurbished", "Factory Certified"] },
  { title: "Clinical Specialty", options: ["Interventional", "Diagnostic Imaging", "Women Healthcare", "Surgical"] },
  { title: "Country of Origin", options: ["Germany", "Netherlands", "USA", "Japan"] },
  { title: "Year", options: ["2024", "2023", "2022", "2021 or earlier"] },
  { title: "System Type", options: ["Fixed", "Mobile", "Ceiling-Mounted", "Floor-Mounted"] },
  {
    title: "Availability of Services",
    options: ["Installation", "Clinical Training", "Technical Support", "Warranty"],
  },
];

// Manufacturer cards in the "Popular Manufacturers" section — same dynamic source.
const BRANDS = ALL_MANUFACTURERS;


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

const PER_PAGE_OPTIONS = [12, 24, 36, 48] as const;

function FilterAccordion({ group }: { group: (typeof FILTER_GROUPS)[number] }) {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE = 8;
  const hasMore = group.options.length > VISIBLE;
  const visibleOptions = open && (showAll || !hasMore) ? group.options : group.options.slice(0, VISIBLE);
  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-foreground/85 transition-colors hover:text-primary"
      >
        {group.title}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4">
          <ul className="space-y-3">
            {visibleOptions.map((opt) => (
              <li key={opt}>
                <label className="flex cursor-pointer items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary accent-primary"
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="mt-3 text-xs font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {showAll ? "Show Less" : `Show More (${group.options.length - VISIBLE})`}
            </button>
          )}
        </div>
      )}
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
      className={`group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.32)] ${
        view === "list" ? "sm:flex" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${view === "list" ? "sm:w-72 sm:shrink-0" : ""}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
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
          View System
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
  const [perPage, setPerPage] = useState<number>(PER_PAGE_OPTIONS[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCat !== "All Categories") list = list.filter((p) => p.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        `${p.name} ${p.brand} ${p.category} ${p.keywords}`.toLowerCase().includes(q),
      );
    }
    if (sort === "Newest" || sort === "Recently Added")
      list = [...list].sort((a, b) => b.addedOrder - a.addedOrder);
    else if (sort === "Manufacturer A–Z")
      list = [...list].sort((a, b) => a.brand.localeCompare(b.brand));
    else if (sort === "Manufacturer Z–A")
      list = [...list].sort((a, b) => b.brand.localeCompare(a.brand));
    else if (sort === "Category")
      list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    else if (sort === "System Name")
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCat, query, sort]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * perPage;
  const pageItems = filtered.slice(startIdx, startIdx + perPage);
  const rangeStart = total === 0 ? 0 : startIdx + 1;
  const rangeEnd = Math.min(startIdx + perPage, total);

  // Reset to first page whenever the result set changes.
  const resetPage = () => setPage(1);

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
                <div className="relative">
                  <Search className="pointer-events-none absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-primary" />
                  <input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      resetPage();
                    }}
                    type="search"
                    placeholder="Search by system name, manufacturer, brand, technology or clinical application..."
                    className="h-16 w-full rounded-2xl bg-white pl-16 pr-5 text-base text-foreground shadow-[0_18px_44px_-20px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.04] outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/40"
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
          <div className="flex flex-1 items-center gap-2 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCat(cat);
                  resetPage();
                }}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCat === cat
                    ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-10px_var(--primary)]"
                    : "border border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <Link
            to="/categories"
            className="group inline-flex shrink-0 items-center gap-1.5 border-l border-border pl-4 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View All Categories
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* POPULAR MANUFACTURERS */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-[100rem] px-6 py-10 lg:px-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
                Popular Manufacturers
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Certified partners and leading global medical technology brands.
              </p>
            </div>
            <Link
              to="/categories"
              className="group hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark sm:inline-flex"
            >
              View All Brands
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  setQuery(brand);
                  resetPage();
                }}
                className="flex h-20 items-center justify-center rounded-2xl border border-border/70 bg-card px-4 text-center font-display text-sm font-bold tracking-tight text-foreground/75 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                {brand}
              </button>
            ))}
          </div>
          <Link
            to="/categories"
            className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark sm:hidden"
          >
            View All Brands
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-10">
          {/* FILTERS */}
          <aside className="mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-[188px]">
              <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)]">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 font-display font-bold text-foreground">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    Filters
                  </div>
                  <button className="text-xs font-semibold text-primary hover:text-primary-dark">
                    Clear All
                  </button>
                </div>
                {FILTER_GROUPS.map((group) => (
                  <FilterAccordion key={group.title} group={group} />
                ))}
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div>
            {/* TOOLBAR */}
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-bold text-foreground">
                  {rangeStart}–{rangeEnd}
                </span>{" "}
                of <span className="font-bold text-foreground">{total}</span> Medical Systems
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      resetPage();
                    }}
                    placeholder="Refine within results"
                    className="h-10 w-52 rounded-full border border-border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
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
                    onChange={(e) => {
                      setPerPage(Number(e.target.value));
                      resetPage();
                    }}
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
                  onClick={() => {
                    setQuery("");
                    setActiveCat("All Categories");
                    resetPage();
                  }}
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
