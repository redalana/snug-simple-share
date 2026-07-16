import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe2,
  GitCompare,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/Eyebrow";

type BrandCategory =
  | "Imaging"
  | "Surgical"
  | "Patient Monitoring"
  | "Cardiovascular"
  | "Laboratory";

type Brand = {
  name: string;
  sub?: string;
  color: string;
  mark: "dot" | "square" | "ring" | "bars";
  country: string;
  description: string;
  categories: string[];
  groups: BrandCategory[];
  featured?: boolean;
};

const BRANDS: Brand[] = [
  {
    name: "Philips",
    color: "#0B5ED7",
    mark: "ring",
    country: "Netherlands",
    description:
      "Global leader in diagnostic imaging, image-guided therapy and connected care — powering cath labs, MRI and CT across leading hospitals.",
    categories: ["Cath Lab", "MRI", "CT", "Ultrasound"],
    groups: ["Imaging", "Cardiovascular", "Patient Monitoring"],
    featured: true,
  },
  {
    name: "Siemens",
    sub: "Healthineers",
    color: "#EC6602",
    mark: "square",
    country: "Germany",
    description:
      "Pioneers of medical imaging and laboratory diagnostics — SOMATOM CT, MAGNETOM MRI and Artis interventional platforms.",
    categories: ["CT", "MRI", "Angiography", "Mammography", "Lab"],
    groups: ["Imaging", "Cardiovascular", "Laboratory"],
    featured: true,
  },
  {
    name: "GE HealthCare",
    color: "#005EB8",
    mark: "ring",
    country: "USA",
    description:
      "One of the world's most complete imaging portfolios — Innova cath labs, Revolution CT, SIGNA MRI and Discovery PET/CT.",
    categories: ["Cath Lab", "CT", "MRI", "PET/CT", "Monitoring"],
    groups: ["Imaging", "Cardiovascular", "Patient Monitoring"],
    featured: true,
  },
  {
    name: "Toshiba – Canon",
    color: "#CC0000",
    mark: "bars",
    country: "Japan",
    description:
      "Precision Japanese engineering across CT, MRI, X-ray and vascular imaging — trusted for reliability and low total cost of ownership.",
    categories: ["CT", "MRI", "X-Ray", "Vascular"],
    groups: ["Imaging", "Cardiovascular"],
  },
  {
    name: "Mindray",
    color: "#005BAC",
    mark: "dot",
    country: "China",
    description:
      "Fast-growing global provider of patient monitoring, ultrasound and in-vitro diagnostics for hospitals of every size.",
    categories: ["Ultrasound", "Patient Monitoring", "Anesthesia"],
    groups: ["Patient Monitoring", "Imaging", "Laboratory"],
  },
  {
    name: "Esaote",
    color: "#003DA5",
    mark: "dot",
    country: "Italy",
    description:
      "Specialist in dedicated MRI and premium ultrasound — a European reference for musculoskeletal and cardiovascular imaging.",
    categories: ["Dedicated MRI", "Ultrasound"],
    groups: ["Imaging", "Cardiovascular"],
  },
  {
    name: "Richard Wolf",
    color: "#C8102E",
    mark: "square",
    country: "Germany",
    description:
      "Endoscopy, minimally invasive surgery and lithotripsy systems engineered for operating rooms and urology suites.",
    categories: ["Endoscopy", "Lithotripsy", "OR Integration"],
    groups: ["Surgical"],
  },
  {
    name: "Hitachi",
    color: "#E60027",
    mark: "square",
    country: "Japan",
    description:
      "Open MRI, ultrasound and radiotherapy platforms recognized for patient comfort and stable long-term performance.",
    categories: ["Open MRI", "Ultrasound"],
    groups: ["Imaging"],
  },
  {
    name: "Shimadzu",
    color: "#C8161D",
    mark: "square",
    country: "Japan",
    description:
      "Cardiovascular X-ray, fluoroscopy and mobile C-arm systems built on more than a century of precision instrumentation.",
    categories: ["Angiography", "Fluoroscopy", "C-Arm", "Lab"],
    groups: ["Imaging", "Cardiovascular", "Laboratory"],
  },
  {
    name: "Abbott",
    color: "#008FC7",
    mark: "dot",
    country: "USA",
    description:
      "Structural heart, electrophysiology and vascular devices — from coronary stents to cardiac mapping systems.",
    categories: ["Cardiology", "EP", "Vascular", "Diagnostics"],
    groups: ["Cardiovascular", "Laboratory"],
  },
  {
    name: "Medtronic",
    color: "#170F5F",
    mark: "bars",
    country: "Ireland / USA",
    description:
      "World-leading medical technology in cardiovascular, neurovascular, surgical and diabetes care — trusted by hospitals worldwide.",
    categories: ["Cardiology", "Neurovascular", "Surgical"],
    groups: ["Cardiovascular", "Surgical", "Patient Monitoring"],
  },
  {
    name: "Boston Scientific",
    color: "#0072CE",
    mark: "ring",
    country: "USA",
    description:
      "Interventional cardiology, electrophysiology, endoscopy and urology devices for less-invasive, life-changing therapies.",
    categories: ["Interventional Cardiology", "EP", "Endoscopy"],
    groups: ["Cardiovascular", "Surgical"],
  },
];

const FILTERS: ("All" | BrandCategory)[] = [
  "All",
  "Imaging",
  "Surgical",
  "Patient Monitoring",
  "Cardiovascular",
  "Laboratory",
];

const METRICS = [
  { value: "12", label: "Global Brands", icon: Globe2 },
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "10+", label: "Countries Served", icon: Sparkles },
  { value: "100%", label: "Certified Medical Partners", icon: ShieldCheck },
];

function BrandMark({ brand, size = "md" }: { brand: Brand; size?: "md" | "lg" }) {
  const c = brand.color;
  const d = size === "lg" ? 7 : 5;
  const cls = size === "lg" ? "h-7 w-7" : "h-5 w-5";
  switch (brand.mark) {
    case "square":
      return <span className={`${cls} rounded-[4px]`} style={{ backgroundColor: c }} />;
    case "ring":
      return (
        <span className={`${cls} rounded-full border-[3.5px]`} style={{ borderColor: c }} />
      );
    case "bars":
      return (
        <span className="flex items-end gap-[3px]">
          <span className={`w-1 rounded-sm`} style={{ backgroundColor: c, height: `${d * 0.55 * 4}px` }} />
          <span className={`w-1 rounded-sm`} style={{ backgroundColor: c, height: `${d * 4}px` }} />
          <span className={`w-1 rounded-sm`} style={{ backgroundColor: c, height: `${d * 0.75 * 4}px` }} />
        </span>
      );
    default:
      return <span className={`${cls} rounded-full`} style={{ backgroundColor: c }} />;
  }
}

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Explore the world-leading medical technology manufacturers AbuFarha Medical delivers, installs and supports — Philips, Siemens, GE HealthCare, Canon, Mindray and more.",
      },
      { property: "og:title", content: "Our Brands | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "12 world-leading manufacturers — one trusted partner for supply, installation, commissioning and after-sales.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BRANDS.filter((b) => {
      const matchesQ =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.country.toLowerCase().includes(q) ||
        b.categories.some((c) => c.toLowerCase().includes(q)) ||
        b.description.toLowerCase().includes(q);
      const matchesF = filter === "All" || b.groups.includes(filter);
      return matchesQ && matchesF;
    });
  }, [query, filter]);

  const featured = filtered.filter((b) => b.featured);
  const rest = filtered.filter((b) => !b.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-accent/40">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-[100rem] gap-12 px-6 py-14 lg:grid-cols-[1.15fr,1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-16">
            <div>
              <Eyebrow index="01">Our Brand Portfolio</Eyebrow>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3.4rem]">
                Twelve world-leading manufacturers.
                <br />
                <span className="text-primary">One trusted partner.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                AbuFarha Medical is the authorized channel for the medical technology
                brands hospitals rely on every day — supplied, installed, commissioned
                and supported by our engineers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#brand-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
                >
                  Explore All Brands
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Talk to an Engineer
                </Link>
              </div>
            </div>

            {/* ANIMATED LOGO WALL */}
            <LogoWall />
          </div>
        </section>

        {/* METRICS */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto grid max-w-[100rem] grid-cols-2 divide-y divide-border px-6 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:px-10">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`flex items-center gap-4 py-6 lg:py-8 ${
                  i % 2 === 1 ? "border-l border-border lg:border-0" : ""
                } lg:px-8`}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STICKY SEARCH + FILTERS */}
        <div className="sticky top-[88px] z-30 border-b border-border bg-white/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-10">
            <div className="relative flex-shrink-0 lg:w-80">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                strokeWidth={2}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brands..."
                className="w-full rounded-full border border-border bg-white py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex flex-1 flex-wrap gap-2 lg:justify-end">
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-white text-foreground/80 hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FEATURED BRANDS */}
        {featured.length > 0 && (
          <section className="bg-white pt-14 lg:pt-20">
            <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <Eyebrow index="02">Featured Partners</Eyebrow>
                  <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                    The manufacturers most hospitals start with.
                  </h2>
                </div>
                <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:inline">
                  {featured.length} of {BRANDS.length}
                </span>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {featured.map((brand) => (
                  <FeaturedBrandCard key={brand.name} brand={brand} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BRAND GRID */}
        <section id="brand-grid" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow index="03">All Brands</Eyebrow>
                <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                  Choose a manufacturer to explore its systems.
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{" "}
                {BRANDS.length} brands
                {filter !== "All" && (
                  <>
                    {" "}
                    in <span className="font-semibold text-foreground">{filter}</span>
                  </>
                )}
                .
              </p>
            </div>

            {rest.length === 0 && featured.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-accent/20 px-6 py-16 text-center">
                <p className="text-sm text-muted-foreground">
                  No brands match your search. Try a different keyword or filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((brand) => (
                  <BrandCard key={brand.name} brand={brand} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* RICH CTA */}
        <section className="relative overflow-hidden border-t border-border bg-[#0d0f14] py-20 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="mx-auto grid max-w-[100rem] gap-10 px-6 lg:grid-cols-[1.3fr,1fr] lg:items-center lg:px-10">
            <div>
              <Eyebrow index="04" tone="light">
                Advisory
              </Eyebrow>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
                Need help choosing the right manufacturer?
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Our biomedical engineers help hospitals match brand, configuration and
                service plan to real clinical goals — independent of any single vendor.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
                >
                  Talk to an Engineer
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
                <a
                  href="#brand-grid"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  <GitCompare className="h-4 w-4" strokeWidth={2.25} />
                  Compare Brands
                </a>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Vendor-neutral guidance",
                "Full lifecycle support",
                "Certified refurbished & brand new",
                "Regional service coverage",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/85 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" strokeWidth={2.25} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* -------- LOGO WALL (animated) -------- */
function LogoWall() {
  const col1 = BRANDS.slice(0, 6);
  const col2 = BRANDS.slice(6, 12);
  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl border border-border bg-white/70 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] backdrop-blur">
      {/* fade masks */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />
      <div className="grid h-full grid-cols-2 gap-3 p-3">
        <LogoColumn brands={[...col1, ...col1]} direction="up" />
        <LogoColumn brands={[...col2, ...col2]} direction="down" />
      </div>
      <style>{`
        @keyframes brand-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes brand-scroll-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .brand-col-up { animation: brand-scroll-up 28s linear infinite; }
        .brand-col-down { animation: brand-scroll-down 28s linear infinite; }
      `}</style>
    </div>
  );
}

function LogoColumn({ brands, direction }: { brands: Brand[]; direction: "up" | "down" }) {
  return (
    <div className="relative overflow-hidden">
      <div className={`flex flex-col gap-3 ${direction === "up" ? "brand-col-up" : "brand-col-down"}`}>
        {brands.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4 shadow-sm"
          >
            <BrandMark brand={b} />
            <div className="flex min-w-0 flex-col leading-none">
              <span
                className="truncate font-display text-base font-extrabold tracking-tight"
                style={{ color: b.color }}
              >
                {b.name}
              </span>
              {b.sub ? (
                <span
                  className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: b.color, opacity: 0.75 }}
                >
                  {b.sub}
                </span>
              ) : (
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {b.country}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------- CARDS -------- */
function FeaturedBrandCard({ brand }: { brand: Brand }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, color-mix(in oklab, currentColor 0%, transparent) 0%, transparent 100%)",
      }}
    >
      <span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: brand.color }} />
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.07] blur-2xl"
        style={{ backgroundColor: brand.color }}
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          <Sparkles className="h-3 w-3" strokeWidth={2.5} />
          Featured
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {brand.country}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3.5">
        <BrandMark brand={brand} size="lg" />
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-[1.75rem] font-extrabold tracking-tight"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>
          {brand.sub && (
            <span
              className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: brand.color, opacity: 0.8 }}
            >
              {brand.sub}
            </span>
          )}
        </div>
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
        {brand.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {brand.categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-accent/50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          View Products
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </Link>
      </div>
    </article>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <span
        className="absolute inset-x-0 top-0 h-1 opacity-80"
        style={{ backgroundColor: brand.color }}
      />

      <div className="flex items-center gap-3">
        <BrandMark brand={brand} />
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-2xl font-extrabold tracking-tight"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>
          {brand.sub && (
            <span
              className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: brand.color, opacity: 0.8 }}
            >
              {brand.sub}
            </span>
          )}
        </div>
        <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {brand.country}
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {brand.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {brand.categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-accent/50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          View Products
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </Link>
      </div>
    </article>
  );
}
