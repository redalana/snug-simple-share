import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  CalendarClock,
  FileText,
  Globe2,
  GitCompare,
  HeadphonesIcon,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/Eyebrow";
import { PRODUCTS } from "@/lib/products";

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
  /** key used to match PRODUCTS brand field */
  productKey?: string;
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
    productKey: "Philips",
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
    productKey: "Siemens",
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
    productKey: "GE",
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
    productKey: "Toshiba - Canon",
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

function productCount(brand: Brand): number {
  if (!brand.productKey) return 0;
  return PRODUCTS.filter((p) => p.brand === brand.productKey).length;
}

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
          <span className="w-1 rounded-sm" style={{ backgroundColor: c, height: `${d * 0.55 * 4}px` }} />
          <span className="w-1 rounded-sm" style={{ backgroundColor: c, height: `${d * 4}px` }} />
          <span className="w-1 rounded-sm" style={{ backgroundColor: c, height: `${d * 0.75 * 4}px` }} />
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
        <section className="relative overflow-hidden border-b border-border bg-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[100rem] px-6 pt-11 lg:px-10 lg:pt-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center">
                <Eyebrow index="01">Our Brand Portfolio</Eyebrow>
              </div>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3.6rem]">
                Twelve world-leading manufacturers.
                <br />
                <span className="text-primary">One trusted partner.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                AbuFarha Medical is the authorized channel for the medical technology
                brands hospitals rely on every day — supplied, installed, commissioned
                and supported by our engineers.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="#brand-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
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
            <div className="mt-10 pb-12 lg:mt-12 lg:pb-16">
              <LogoWall />
            </div>
          </div>
        </section>


        {/* METRICS */}
        <section className="border-b border-border bg-accent/30">
          <div className="mx-auto grid max-w-[100rem] grid-cols-2 gap-y-2 px-6 py-4 lg:grid-cols-4 lg:gap-0 lg:px-10">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="group flex items-center gap-5 rounded-2xl px-2 py-6 transition-colors hover:bg-white lg:px-6 lg:py-10"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-primary-foreground lg:h-16 lg:w-16">
                  <m.icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={2} />
                </div>
                <div className="leading-tight">
                  <div className="font-display text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STICKY SEARCH + FILTERS */}
        <div className="sticky top-[88px] z-30 border-b border-border bg-white/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-10">
            <div className="relative flex-1 lg:max-w-xl">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground"
                strokeWidth={2}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brands, countries or equipment categories…"
                className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {/* Segmented control */}
            <div className="flex flex-1 justify-start overflow-x-auto lg:justify-end">
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-accent/40 p-1">
                {FILTERS.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground/70 hover:text-primary"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED BRANDS */}
        {featured.length > 0 && (
          <section className="bg-white pt-16 lg:pt-24">
            <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
              <div className="mb-10 flex items-end justify-between gap-6">
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
        <section id="brand-grid" className="bg-accent/25 py-20 lg:py-28">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
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
              <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
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
        <section className="relative overflow-hidden border-t border-border bg-[#0d0f14] py-24 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="max-w-3xl">
              <Eyebrow index="04" tone="light">
                Advisory
              </Eyebrow>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.75rem]">
                Need help choosing the right manufacturer?
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Pick the fastest way to move forward — compare options, get a tailored
                recommendation, speak to an engineer, or request a quote.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: GitCompare,
                  title: "Compare Brands",
                  desc: "Side-by-side specs across manufacturers and modalities.",
                  to: "/products",
                },
                {
                  icon: Lightbulb,
                  title: "Help Me Choose",
                  desc: "Answer a few questions and get a shortlist that fits your case mix.",
                  to: "/hospital-readiness-assessment",
                },
                {
                  icon: HeadphonesIcon,
                  title: "Talk to an Engineer",
                  desc: "Independent biomedical guidance from our senior team.",
                  to: "/contact",
                },
                {
                  icon: FileText,
                  title: "Request a Quote",
                  desc: "Get pricing, availability and lead times within one working day.",
                  to: "/contact",
                },
              ].map((a) => (
                <Link
                  key={a.title}
                  to={a.to}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_-20px_rgba(230,57,70,0.35)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <a.icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <div className="mt-5 font-display text-lg font-extrabold tracking-tight">
                    {a.title}
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                    {a.desc}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                    Continue
                    <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* -------- LOGO WALL (floating grid, no cards, no borders) -------- */
function LogoWall() {
  // Varied sizes and vertical offsets to create a premium floating rhythm.
  const layout: { size: "sm" | "md" | "lg"; y: string; delay: string; opacity: number }[] = [
    { size: "lg", y: "-6px", delay: "0s",   opacity: 1 },
    { size: "md", y: "10px", delay: "0.6s", opacity: 0.85 },
    { size: "sm", y: "-12px", delay: "1.2s", opacity: 0.75 },
    { size: "md", y: "6px", delay: "0.3s", opacity: 0.9 },
    { size: "lg", y: "-4px", delay: "0.9s", opacity: 1 },
    { size: "sm", y: "14px", delay: "1.5s", opacity: 0.7 },
    { size: "md", y: "-10px", delay: "0.2s", opacity: 0.9 },
    { size: "lg", y: "8px", delay: "0.8s", opacity: 1 },
    { size: "sm", y: "-6px", delay: "1.4s", opacity: 0.75 },
    { size: "md", y: "12px", delay: "0.5s", opacity: 0.85 },
    { size: "lg", y: "-8px", delay: "1.1s", opacity: 1 },
    { size: "sm", y: "4px", delay: "0.4s", opacity: 0.8 },
  ];

  const sizeMap = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="grid grid-cols-3 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-4 md:gap-x-10 md:gap-y-14 lg:grid-cols-6">
        {BRANDS.map((b, i) => {
          const cfg = layout[i];
          return (
            <div
              key={b.name}
              className="group relative flex items-center justify-center"
              style={{
                transform: `translateY(${cfg.y})`,
              }}
            >
              <div
                className="logo-float flex items-center gap-2 transition-all duration-300 group-hover:!opacity-100 group-hover:scale-[1.06]"
                style={{
                  opacity: cfg.opacity,
                  animationDelay: cfg.delay,
                }}
              >
                <BrandMark brand={b} size={cfg.size === "lg" ? "lg" : "md"} />
                <span
                  className={`font-display font-extrabold tracking-tight ${sizeMap[cfg.size]}`}
                  style={{ color: b.color }}
                >
                  {b.name}
                </span>
              </div>
              {/* Hover reveal — brand name + country */}
              <span
                className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100"
              >
                {b.country}
              </span>
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes logo-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .logo-float { animation: logo-float 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .logo-float { animation: none; }
        }
      `}</style>
    </div>
  );
}

/* -------- CARDS -------- */
function FeaturedBrandCard({ brand }: { brand: Brand }) {
  const count = productCount(brand);
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]"
    >
      <span className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: brand.color }} />
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.12]"
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

      <div className="mt-6 flex items-center gap-3.5">
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

      <p className="mt-6 flex-1 text-[15px] leading-relaxed text-muted-foreground">
        {brand.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {brand.categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-accent/50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          View Products
          <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
        </Link>
        {count > 0 && (
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {count} {count === 1 ? "system" : "systems"} in stock
          </span>
        )}
      </div>
    </article>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
      <span
        className="absolute inset-x-0 top-0 h-1 opacity-80"
        style={{ backgroundColor: brand.color }}
      />

      {/* Logo lockup — consistent alignment across every card */}
      <div className="flex h-16 items-center gap-3">
        <BrandMark brand={brand} size="lg" />
        <div className="flex min-w-0 flex-col leading-none">
          <span
            className="truncate font-display text-2xl font-extrabold tracking-tight"
            style={{ color: brand.color }}
          >
            {brand.name}
          </span>
          <span
            className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
          >
            {brand.sub ?? brand.country}
          </span>
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {brand.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {brand.categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-border bg-accent/50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-7 border-t border-border pt-5">
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
