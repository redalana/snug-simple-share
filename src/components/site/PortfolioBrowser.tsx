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
  Heart,
  ArrowRight,
  Boxes,
  Layers,
  BadgeCheck,
  SlidersHorizontal,
  PhoneCall,
  Mail,
} from "lucide-react";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";

const CATEGORIES = [
  "All Categories",
  "Cath Lab",
  "MRI",
  "CT",
  "PET/CT",
  "Women Healthcare",
  "Ultrasound",
  "X-Ray",
  "C-Arms",
  "Mammography",
  "Operating Room",
] as const;

const FILTER_GROUPS = [
  { title: "Category", options: ["Cath Lab", "MRI", "CT", "PET/CT", "X-Ray", "C-Arms"] },
  { title: "Brand", options: ["Philips", "Siemens Healthineers", "GE HealthCare", "Canon Medical"] },
  { title: "Availability", options: ["Available", "Limited", "On Request"] },
  { title: "Condition", options: ["New", "Refurbished", "Certified Pre-Owned"] },
  { title: "Manufacturer", options: ["Philips", "Siemens", "GE", "Canon", "Richard Wolf"] },
  { title: "Country of Origin", options: ["Germany", "Netherlands", "USA", "Japan"] },
  { title: "Year", options: ["2024", "2023", "2022", "2021 or earlier"] },
  { title: "System Type", options: ["Fixed", "Mobile", "Ceiling-Mounted", "Floor-Mounted"] },
];

type Product = {
  name: string;
  brand: string;
  category: string;
  image: string;
  specs: [string, string];
  availability: "Available" | "Limited" | "On Request";
  condition: string;
  warranty: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Philips Achieva 1.5T MRI",
    brand: "Philips",
    category: "MRI",
    image: solMri,
    specs: ["1.5 Tesla", "Whole Body"],
    availability: "Available",
    condition: "Refurbished",
    warranty: "1-Year Warranty",
  },
  {
    name: "Philips Allura Xper FD20",
    brand: "Philips",
    category: "Cath Lab",
    image: heroCathlab,
    specs: ["Biplane", "Interventional"],
    availability: "Available",
    condition: "Refurbished",
    warranty: "1-Year Warranty",
  },
  {
    name: "Siemens SOMATOM Definition",
    brand: "Siemens Healthineers",
    category: "CT",
    image: solCt,
    specs: ["128 Slice", "Dual Source"],
    availability: "Available",
    condition: "Refurbished",
    warranty: "1-Year Warranty",
  },
  {
    name: "GE Discovery MI PET/CT",
    brand: "GE HealthCare",
    category: "PET/CT",
    image: solPetct,
    specs: ["16 Slice", "Digital PET"],
    availability: "Limited",
    condition: "Refurbished",
    warranty: "1-Year Warranty",
  },
  {
    name: "Siemens Mammomat Revelation",
    brand: "Siemens Healthineers",
    category: "Mammography",
    image: solMammo,
    specs: ["3D Tomosynthesis", "50µm"],
    availability: "Available",
    condition: "New",
    warranty: "2-Year Warranty",
  },
  {
    name: "Philips Zenition 70 C-Arm",
    brand: "Philips",
    category: "C-Arms",
    image: solCarm,
    specs: ["Mobile", "Flat Detector"],
    availability: "Available",
    condition: "New",
    warranty: "2-Year Warranty",
  },
  {
    name: "Canon Radrex Digital X-Ray",
    brand: "Canon Medical",
    category: "X-Ray",
    image: solXray,
    specs: ["Digital", "Ceiling-Mounted"],
    availability: "On Request",
    condition: "Certified Pre-Owned",
    warranty: "1-Year Warranty",
  },
  {
    name: "GE Innova IGS 530 Cath Lab",
    brand: "GE HealthCare",
    category: "Cath Lab",
    image: beyondCathlab,
    specs: ["Single Plane", "Cardiac"],
    availability: "Available",
    condition: "Refurbished",
    warranty: "1-Year Warranty",
  },
];

const AVAILABILITY_STYLES: Record<Product["availability"], string> = {
  Available: "bg-emerald-500/95 text-white",
  Limited: "bg-amber-500/95 text-white",
  "On Request": "bg-muted-foreground/90 text-white",
};

function FilterAccordion({ group }: { group: (typeof FILTER_GROUPS)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3.5 text-left text-sm font-semibold text-foreground/85 transition-colors hover:text-primary"
      >
        {group.title}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="space-y-2.5 pb-4">
          {group.options.map((opt) => (
            <li key={opt}>
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-primary accent-primary"
                />
                {opt}
              </label>
            </li>
          ))}
        </ul>
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
      className={`group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.28)] ${
        view === "list" ? "sm:flex" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${view === "list" ? "sm:w-72 sm:shrink-0" : ""}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold ${AVAILABILITY_STYLES[product.availability]}`}
        >
          {product.availability}
        </span>
        <button
          aria-label="Save"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground/60 shadow-sm backdrop-blur transition-colors hover:text-primary"
        >
          <Heart className="h-4 w-4" />
        </button>
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
        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <ShieldCheck className="h-4 w-4" />
          {product.warranty} · {product.condition}
        </div>
        <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
          Explore System
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export function PortfolioBrowser() {
  const [activeCat, setActiveCat] = useState<string>("All Categories");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState("Newest First");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCat !== "All Categories") list = list.filter((p) => p.category === activeCat);
    if (query.trim())
      list = list.filter((p) =>
        `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(query.toLowerCase()),
      );
    if (sort === "Name (A–Z)")
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [activeCat, query, sort]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.14]"
          style={{
            backgroundImage: `url(${heroCathlab})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to left, black 30%, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent)",
          }}
        />
        <div className="relative mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-block h-1 w-12 rounded-full bg-primary" />
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Medical Technology Portfolio
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Browse certified medical systems from leading global manufacturers for
              hospitals, clinics and healthcare providers.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Search by product name, brand, category..."
                  className="h-14 w-full rounded-full bg-card pl-12 pr-4 text-sm text-foreground shadow-[0_8px_28px_-14px_rgba(0,0,0,0.2)] ring-1 ring-black/5 outline-none transition-all placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Stat icon={Boxes} value="11" label="Categories" />
              <Stat icon={Layers} value="310+" label="Available Systems" />
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-bold text-primary">Certified</div>
                  <div className="text-xs text-muted-foreground">Quality &amp; Safety</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <section className="sticky top-[112px] z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[100rem] items-center gap-2 overflow-x-auto px-6 py-4 lg:px-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCat === cat
                  ? "bg-primary text-primary-foreground shadow-[0_8px_20px_-10px_var(--primary)]"
                  : "border border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
          <Link
            to="/categories"
            className="ml-1 inline-flex shrink-0 items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View All Categories
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* FILTERS */}
          <aside className="mb-8 lg:mb-0">
            <div className="lg:sticky lg:top-[188px]">
              <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.18)]">
                <div className="mb-2 flex items-center justify-between">
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
                <button className="mt-6 w-full rounded-full border border-primary/30 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div>
            {/* TOOLBAR */}
            <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-4 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.18)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold text-foreground">{filtered.length}</span> systems
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search within results"
                    className="h-10 w-52 rounded-full border border-border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="h-10 appearance-none rounded-full border border-border bg-background pl-4 pr-9 text-sm font-medium text-foreground/80 outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option>Newest First</option>
                    <option>Name (A–Z)</option>
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
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-16 text-center text-muted-foreground">
                No systems match your filters.
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                    : "flex flex-col gap-6"
                }
              >
                {filtered.map((p) => (
                  <ProductCard key={p.name} product={p} view={view} />
                ))}
              </div>
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
                Need help choosing the right system?
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
