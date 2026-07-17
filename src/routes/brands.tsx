import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe2,
  GitCompare,
  GraduationCap,
  HeadphonesIcon,
  Handshake,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wrench,
  Package,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PRODUCTS } from "@/lib/products";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

type BrandCategory =
  | "Imaging"
  | "Surgical"
  | "Patient Monitoring"
  | "Cardiovascular"
  | "Laboratory";

type Modality =
  | "MRI"
  | "CT"
  | "PET/CT"
  | "Cath Lab"
  | "Ultrasound"
  | "Surgical"
  | "Patient Monitoring"
  | "Laboratory";

type Brand = {
  name: string;
  sub?: string;
  color: string;
  mark: "dot" | "square" | "ring" | "bars";
  country: string;
  countryFlag: string; // emoji
  description: string;
  categories: string[];
  groups: BrandCategory[];
  modalities: Modality[];
  featured?: boolean;
  productKey?: string;
};

const BRANDS: Brand[] = [
  {
    name: "Philips",
    color: "#0B5ED7",
    mark: "ring",
    country: "Netherlands",
    countryFlag: "🇳🇱",
    description:
      "Global leader in diagnostic imaging, image-guided therapy and connected care across leading hospitals.",
    categories: ["Cath Lab", "MRI", "CT", "Ultrasound", "PET/CT"],
    groups: ["Imaging", "Cardiovascular", "Patient Monitoring"],
    modalities: ["MRI", "CT", "PET/CT", "Cath Lab", "Ultrasound", "Patient Monitoring", "Laboratory"],
    featured: true,
    productKey: "Philips",
  },
  {
    name: "Siemens",
    sub: "Healthineers",
    color: "#EC6602",
    mark: "square",
    country: "Germany",
    countryFlag: "🇩🇪",
    description:
      "Pioneers of medical imaging and laboratory diagnostics across clinical and research platforms.",
    categories: ["CT", "MRI", "Angiography", "Mammography", "Lab"],
    groups: ["Imaging", "Cardiovascular", "Laboratory"],
    modalities: ["MRI", "CT", "PET/CT", "Cath Lab", "Ultrasound", "Surgical", "Patient Monitoring", "Laboratory"],
    featured: true,
    productKey: "Siemens",
  },
  {
    name: "GE HealthCare",
    color: "#005EB8",
    mark: "ring",
    country: "USA",
    countryFlag: "🇺🇸",
    description:
      "Innovative medical technologies and smart digital solutions improving patient care worldwide.",
    categories: ["Cath Lab", "CT", "MRI", "PET/CT", "Monitoring"],
    groups: ["Imaging", "Cardiovascular", "Patient Monitoring"],
    modalities: ["MRI", "CT", "PET/CT", "Cath Lab", "Ultrasound", "Patient Monitoring", "Laboratory"],
    featured: true,
    productKey: "GE",
  },
  {
    name: "Toshiba – Canon",
    color: "#CC0000",
    mark: "bars",
    country: "Japan",
    countryFlag: "🇯🇵",
    description:
      "Precision Japanese engineering across CT, MRI, X-ray and vascular imaging.",
    categories: ["CT", "MRI", "X-Ray", "Vascular"],
    groups: ["Imaging", "Cardiovascular"],
    modalities: ["MRI", "CT", "Cath Lab", "Ultrasound"],
    productKey: "Toshiba - Canon",
  },
  {
    name: "Mindray",
    color: "#005BAC",
    mark: "dot",
    country: "China",
    countryFlag: "🇨🇳",
    description:
      "Global provider of patient monitoring, ultrasound and in-vitro diagnostics.",
    categories: ["Ultrasound", "Monitoring", "Anesthesia"],
    groups: ["Patient Monitoring", "Imaging", "Laboratory"],
    modalities: ["PET/CT", "Ultrasound", "Patient Monitoring", "Laboratory"],
  },
  {
    name: "Esaote",
    color: "#003DA5",
    mark: "dot",
    country: "Italy",
    countryFlag: "🇮🇹",
    description:
      "Specialist in dedicated MRI and premium ultrasound imaging systems.",
    categories: ["Dedicated MRI", "Ultrasound"],
    groups: ["Imaging", "Cardiovascular"],
    modalities: ["MRI", "Ultrasound"],
  },
  {
    name: "Richard Wolf",
    color: "#C8102E",
    mark: "square",
    country: "Germany",
    countryFlag: "🇩🇪",
    description:
      "Endoscopy, minimally invasive surgery and lithotripsy systems for operating rooms.",
    categories: ["Endoscopy", "Lithotripsy", "OR"],
    groups: ["Surgical"],
    modalities: ["Surgical"],
  },
  {
    name: "Hitachi",
    color: "#E60027",
    mark: "square",
    country: "Japan",
    countryFlag: "🇯🇵",
    description:
      "Open MRI, ultrasound and radiotherapy platforms known for patient comfort.",
    categories: ["Open MRI", "Ultrasound"],
    groups: ["Imaging"],
    modalities: ["MRI", "Ultrasound"],
  },
  {
    name: "Shimadzu",
    color: "#C8161D",
    mark: "square",
    country: "Japan",
    countryFlag: "🇯🇵",
    description:
      "Cardiovascular X-ray, fluoroscopy and mobile C-arm systems.",
    categories: ["Angiography", "Fluoroscopy", "Lab"],
    groups: ["Imaging", "Cardiovascular", "Laboratory"],
    modalities: ["Cath Lab", "Laboratory"],
  },
  {
    name: "Abbott",
    color: "#008FC7",
    mark: "dot",
    country: "USA",
    countryFlag: "🇺🇸",
    description:
      "Structural heart, electrophysiology and vascular devices for cardiac care.",
    categories: ["Cardiology", "EP", "Vascular"],
    groups: ["Cardiovascular", "Laboratory"],
    modalities: ["Cath Lab", "Laboratory"],
  },
  {
    name: "Medtronic",
    color: "#170F5F",
    mark: "bars",
    country: "Ireland / USA",
    countryFlag: "🇮🇪",
    description:
      "Cardiovascular, neurovascular, surgical and diabetes care technology.",
    categories: ["Cardiology", "Neurovascular", "Surgical"],
    groups: ["Cardiovascular", "Surgical", "Patient Monitoring"],
    modalities: ["Cath Lab", "Surgical", "Patient Monitoring"],
  },
  {
    name: "Boston Scientific",
    color: "#0072CE",
    mark: "ring",
    country: "USA",
    countryFlag: "🇺🇸",
    description:
      "Interventional cardiology, EP, endoscopy and urology devices for less-invasive therapies.",
    categories: ["Interventional", "EP", "Endoscopy"],
    groups: ["Cardiovascular", "Surgical"],
    modalities: ["Cath Lab", "Surgical"],
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
  { value: "25+", label: "Years Experience", icon: ShieldCheck },
  { value: "10+", label: "Countries Served", icon: Sparkles },
  { value: "100%", label: "Certified OEM Partners", icon: Award },
];

const MODALITY_COLS: Modality[] = [
  "MRI",
  "CT",
  "PET/CT",
  "Cath Lab",
  "Ultrasound",
  "Surgical",
  "Patient Monitoring",
  "Laboratory",
];

const WHY_FEATURES = [
  {
    icon: Handshake,
    title: "Authorized Partnerships",
    desc: "We work directly with global manufacturers.",
  },
  {
    icon: Wrench,
    title: "Expert Engineering Team",
    desc: "Skilled biomedical engineers support your hospital.",
  },
  {
    icon: GraduationCap,
    title: "Installation & Training",
    desc: "Professional installation, commissioning & training.",
  },
  {
    icon: HeadphonesIcon,
    title: "After Sales Support",
    desc: "Preventive maintenance and technical support.",
  },
  {
    icon: Package,
    title: "Spare Parts Availability",
    desc: "Genuine spare parts and consumables.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    desc: "Improving patient care through advanced technology.",
  },
];

function productCount(brand: Brand): number {
  if (!brand.productKey) return 0;
  return PRODUCTS.filter((p) => p.brand === brand.productKey).length;
}

function firstProductImage(brand: Brand): string | undefined {
  if (!brand.productKey) return undefined;
  return PRODUCTS.find((p) => p.brand === brand.productKey)?.image;
}

function BrandMark({ brand, size = "md" }: { brand: Brand; size?: "sm" | "md" | "lg" }) {
  const c = brand.color;
  const cls =
    size === "lg" ? "h-6 w-6" : size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";
  switch (brand.mark) {
    case "square":
      return <span className={`${cls} rounded-[3px]`} style={{ backgroundColor: c }} />;
    case "ring":
      return (
        <span
          className={`${cls} rounded-full border-[3px]`}
          style={{ borderColor: c }}
        />
      );
    case "bars":
      return (
        <span className="flex items-end gap-[2px]">
          <span className="w-[3px] rounded-sm" style={{ backgroundColor: c, height: "10px" }} />
          <span className="w-[3px] rounded-sm" style={{ backgroundColor: c, height: "16px" }} />
          <span className="w-[3px] rounded-sm" style={{ backgroundColor: c, height: "13px" }} />
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
      { property: "og:image", content: OG_IMAGES.brands },
      { name: "twitter:image", content: OG_IMAGES.brands },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/brands" }],
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
      <main className="pt-[96px]">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto grid max-w-[100rem] items-center gap-10 px-6 py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-10 lg:py-16">
            {/* LEFT: copy */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                Our Global Partners
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-[3rem]">
                Twelve world-leading
                <br />
                manufacturers.
                <br />
                <span className="text-primary">One trusted partner.</span>
              </h1>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                AbuFarha Medical is the authorized channel for the world's leading
                medical technology brands. We supply, install, commission and support
                advanced medical systems across Africa and the Middle East.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#brand-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
                >
                  Explore All Brands
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Talk to an Engineer
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
              </div>
            </div>

            {/* RIGHT: interactive ecosystem */}
            <BrandEcosystem />
          </div>
        </section>

        {/* ============ METRICS ============ */}
        <section className="bg-white pb-10">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="grid grid-cols-2 rounded-2xl border border-border bg-white shadow-[0_1px_0_rgba(0,0,0,0.02)] lg:grid-cols-4">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex items-center gap-4 px-6 py-8 ${
                    i > 0 ? "lg:border-l lg:border-border" : ""
                  } ${i >= 2 ? "border-t border-border lg:border-t-0" : ""} ${
                    i === 1 ? "border-l border-border" : ""
                  } ${i === 3 ? "border-l border-border" : ""}`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <m.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="leading-tight">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-foreground lg:text-3xl">
                      {m.value}
                    </div>
                    <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SEARCH + FILTERS ============ */}
        <section className="bg-white pb-8">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-4 px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-10">
            <div className="relative flex-1 lg:max-w-[38rem]">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
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
            <div className="flex flex-1 overflow-x-auto lg:justify-end">
              <div className="inline-flex items-center gap-1">
                {FILTERS.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                        active
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "border border-border bg-white text-foreground/70 hover:text-primary"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURED MANUFACTURERS ============ */}
        {featured.length > 0 && (
          <section className="bg-white pt-8">
            <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Featured Manufacturers
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-[1.75rem]">
                    The manufacturers most hospitals start with.
                  </h2>
                </div>
                <div className="hidden items-center gap-3 md:flex">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {featured.length} of {BRANDS.length}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button type="button" aria-label="Previous brand" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary">
                      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <button type="button" aria-label="Next brand" className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary">
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {featured.map((brand) => (
                  <FeaturedBrandCard key={brand.name} brand={brand} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ ALL MANUFACTURERS ============ */}
        <section id="brand-grid" className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                  All Manufacturers
                </div>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-[1.75rem]">
                  Choose a manufacturer to explore its systems.
                </h2>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Showing <span className="text-foreground">{filtered.length}</span> of{" "}
                {BRANDS.length} brands.
              </p>
            </div>

            {rest.length === 0 && featured.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
                <p className="text-sm text-muted-foreground">
                  No brands match your search. Try a different keyword or filter.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {rest.map((brand) => (
                  <BrandCard key={brand.name} brand={brand} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ COMPARISON TABLE ============ */}
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-6">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                Compare Manufacturers
              </div>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-[1.75rem]">
                Compare leading manufacturers side by side.
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-accent/40 text-left">
                    <th className="px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Brand
                    </th>
                    {MODALITY_COLS.map((m) => (
                      <th
                        key={m}
                        className="px-4 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {m}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BRANDS.filter((b) => b.featured || b.name === "Mindray").map(
                    (b) => (
                      <tr
                        key={b.name}
                        className="border-b border-border last:border-b-0 hover:bg-accent/20"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <BrandMark brand={b} size="md" />
                            <span
                              className="font-display text-sm font-extrabold tracking-tight"
                              style={{ color: b.color }}
                            >
                              {b.name}
                              {b.sub ? ` ${b.sub}` : ""}
                            </span>
                          </div>
                        </td>
                        {MODALITY_COLS.map((m) => (
                          <td key={m} className="px-4 py-4 text-center">
                            {b.modalities.includes(m) ? (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                View Full Comparison
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============ WHY ABUFARHA ============ */}
        <section className="bg-white pb-16 lg:pb-20">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-6">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                Why Choose AbuFarha?
              </div>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground md:text-[1.75rem]">
                More than equipment. A long-term partnership.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {WHY_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_18px_50px_-25px_rgba(230,57,70,0.35)]"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="mt-4 font-display text-sm font-extrabold tracking-tight text-foreground">
                    {f.title}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative overflow-hidden border-t border-border bg-[#0d0f14] py-20 text-white">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary">
                Advisory
              </div>
              <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-[2.25rem]">
                Need help choosing the right manufacturer?
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
                Pick the fastest way to move forward — compare options, get a tailored
                recommendation, speak to an engineer, or request a quote.
              </p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: GitCompare, title: "Compare Brands", desc: "Side-by-side specs across manufacturers.", to: "/products" },
                { icon: HeadphonesIcon, title: "Talk to an Engineer", desc: "Independent biomedical guidance.", to: "/contact" },
                { icon: FileText, title: "Request a Quote", desc: "Pricing, availability and lead times.", to: "/contact" },
                { icon: CalendarClock, title: "Book Consultation", desc: "Schedule a 30-minute call.", to: "/hospital-readiness-assessment" },
              ].map((a) => (
                <Link
                  key={a.title}
                  to={a.to}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.07]"
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

/* =============================================================
 *  HERO ECOSYSTEM — hub-and-spoke with world-map dot background
 * ============================================================= */
function BrandEcosystem() {
  // 10 nodes placed radially around AbuFarha center.
  // Coordinates are in % relative to the ecosystem canvas (600x520).
  const NODES: {
    key: string;
    x: number;
    y: number;
    size?: "sm" | "md" | "lg";
  }[] = [
    { key: "Philips",           x: 27,  y: 15, size: "lg" },
    { key: "Siemens",           x: 52,  y: 6,  size: "md" },
    { key: "GE HealthCare",     x: 78,  y: 15, size: "md" },
    { key: "Richard Wolf",      x: 12,  y: 32, size: "md" },
    { key: "Mindray",           x: 88,  y: 34, size: "md" },
    { key: "Hitachi",           x: 6,   y: 52, size: "md" },
    { key: "Esaote",            x: 92,  y: 55, size: "md" },
    { key: "Shimadzu",          x: 15,  y: 72, size: "md" },
    { key: "Medtronic",         x: 82,  y: 70, size: "md" },
    { key: "Abbott",            x: 36,  y: 84, size: "md" },
    { key: "Boston Scientific", x: 65,  y: 86, size: "md" },
  ];
  const CENTER = { x: 50, y: 48 };

  const [active, setActive] = useState<string>("Philips");
  const activeBrand = BRANDS.find((b) => b.name === active) ?? BRANDS[0];

  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[640px]">
      {/* World map dot-grid background */}
      <WorldDotMap />

      {/* Connecting lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {NODES.map((n) => (
          <line
            key={n.key}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(230,57,70,0.35)"
            strokeWidth="0.18"
            strokeDasharray="0.6 0.6"
          />
        ))}
      </svg>

      {/* Center hub */}
      <div
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
      >
        <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border border-border bg-white text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] md:h-[160px] md:w-[160px]">
          <div className="flex items-center gap-1">
            <span className="font-display text-xl font-extrabold text-foreground md:text-2xl">
              Abu
            </span>
            <span className="font-display text-xl font-extrabold text-primary md:text-2xl">
              Farha
            </span>
          </div>
          <div className="mt-1.5 px-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Authorized Medical
            <br />
            Technology Partner
          </div>
        </div>
      </div>

      {/* Brand nodes */}
      {NODES.map((n) => {
        const brand = BRANDS.find((b) => b.name === n.key);
        if (!brand) return null;
        const isActive = active === n.key;
        return (
          <button
            key={n.key}
            type="button"
            onMouseEnter={() => setActive(n.key)}
            onFocus={() => setActive(n.key)}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            aria-label={brand.name}
          >
            <div
              className={`flex items-center gap-2 rounded-full border bg-white px-3 py-2 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.2)] transition-all duration-200 ${
                isActive
                  ? "scale-[1.06] border-primary/60 shadow-[0_12px_30px_-8px_rgba(230,57,70,0.4)]"
                  : "border-border hover:-translate-y-0.5 hover:border-primary/40"
              }`}
            >
              <BrandMark brand={brand} size="sm" />
              <span
                className="font-display text-xs font-extrabold tracking-tight md:text-[13px]"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
              {brand.sub && (
                <span
                  className="hidden text-[9px] font-semibold uppercase tracking-[0.14em] md:inline"
                  style={{ color: brand.color, opacity: 0.75 }}
                >
                  {brand.sub}
                </span>
              )}
            </div>
          </button>
        );
      })}

      {/* Hover reveal card */}
      <div
        className="absolute z-30 hidden w-[190px] rounded-xl border border-border bg-white p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] md:block"
        style={{ left: "72%", top: "44%" }}
      >
        <div className="flex items-center justify-between">
          <span
            className="font-display text-sm font-extrabold tracking-tight"
            style={{ color: activeBrand.color }}
          >
            {activeBrand.name}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[10.5px] text-muted-foreground">
          <span>{activeBrand.countryFlag}</span>
          <span>{activeBrand.country}</span>
        </div>
        <ul className="mt-3 space-y-1.5">
          {activeBrand.categories.slice(0, 4).map((c) => (
            <li
              key={c}
              className="flex items-center gap-1.5 text-[11px] text-foreground/80"
            >
              <Check className="h-3 w-3 text-emerald-500" strokeWidth={3} />
              {c}
            </li>
          ))}
        </ul>
        <Link
          to="/products"
          className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:gap-2 transition-all"
        >
          View Products
          <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

/* World-map dot pattern background (subtle) */
function WorldDotMap() {
  // Simple radial dot grid — evokes a world map without heavy assets
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(15,23,42,0.18) 1px, transparent 1.4px)",
        backgroundSize: "14px 14px",
        maskImage:
          "radial-gradient(ellipse at center, black 0%, black 55%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 0%, black 55%, transparent 78%)",
      }}
      aria-hidden
    />
  );
}

/* =============================================================
 *  CARDS
 * ============================================================= */
function FeaturedBrandCard({ brand }: { brand: Brand }) {
  const count = productCount(brand);
  const thumb = firstProductImage(brand);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/70 hover:shadow-[0_30px_80px_-30px_rgba(230,57,70,0.35)]">
      <span
        className="absolute inset-x-0 top-0 z-10 h-[3px]"
        style={{ backgroundColor: brand.color }}
      />

      {thumb && (
        <div className="relative h-40 w-full overflow-hidden bg-[#eef1f5]">
          <img
            src={thumb}
            alt={`${brand.name} equipment`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div>
          <div
            className="font-display text-[1.75rem] font-extrabold leading-none tracking-tight"
            style={{ color: brand.color }}
          >
            {brand.name}
          </div>
          {brand.sub && (
            <div
              className="mt-1 font-display text-lg font-extrabold tracking-tight"
              style={{ color: brand.color }}
            >
              {brand.sub}
            </div>
          )}
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="text-base leading-none">{brand.countryFlag}</span>
            <span className="font-medium">{brand.country}</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {brand.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {brand.categories.slice(0, 5).map((c) => (
            <span
              key={c}
              className="rounded-full bg-accent/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
          <span className="text-xs font-semibold text-foreground/70">
            {count > 0 ? `${count}+ ` : "20+ "}Products
          </span>
          <div className="flex items-center gap-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              View Products
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-2 text-xs font-semibold text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary"
            >
              Compare
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_50px_-25px_rgba(230,57,70,0.35)]">
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ backgroundColor: brand.color }}
      />
      <div className="flex items-center justify-center gap-2 pt-2">
        <BrandMark brand={brand} size="md" />
        <span
          className="font-display text-lg font-extrabold tracking-tight"
          style={{ color: brand.color }}
        >
          {brand.name}
        </span>
      </div>
      <div className="mt-1 text-[11px] font-medium text-muted-foreground">
        {brand.country}
      </div>
      <div className="mt-4 border-t border-border pt-3">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          View Products
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
        </Link>
      </div>
    </article>
  );
}
