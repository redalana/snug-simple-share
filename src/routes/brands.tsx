import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Eyebrow } from "@/components/site/Eyebrow";

type Brand = {
  name: string;
  sub?: string;
  color: string;
  mark: "dot" | "square" | "ring" | "bars";
  country: string;
  description: string;
  categories: string[];
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
  },
  {
    name: "Toshiba – Canon",
    color: "#CC0000",
    mark: "bars",
    country: "Japan",
    description:
      "Precision Japanese engineering across CT, MRI, X-ray and vascular imaging — trusted for reliability and low total cost of ownership.",
    categories: ["CT", "MRI", "X-Ray", "Vascular"],
  },
  {
    name: "Siemens",
    sub: "Healthineers",
    color: "#EC6602",
    mark: "square",
    country: "Germany",
    description:
      "Pioneers of medical imaging and laboratory diagnostics — SOMATOM CT, MAGNETOM MRI and Artis interventional platforms.",
    categories: ["CT", "MRI", "Angiography", "Mammography"],
  },
  {
    name: "Mindray",
    color: "#005BAC",
    mark: "dot",
    country: "China",
    description:
      "Fast-growing global provider of patient monitoring, ultrasound and in-vitro diagnostics for hospitals of every size.",
    categories: ["Ultrasound", "Patient Monitoring", "Anesthesia"],
  },
  {
    name: "Esaote",
    color: "#003DA5",
    mark: "dot",
    country: "Italy",
    description:
      "Specialist in dedicated MRI and premium ultrasound — a European reference for musculoskeletal and cardiovascular imaging.",
    categories: ["Dedicated MRI", "Ultrasound"],
  },
  {
    name: "Richard Wolf",
    color: "#C8102E",
    mark: "square",
    country: "Germany",
    description:
      "Endoscopy, minimally invasive surgery and lithotripsy systems engineered for operating rooms and urology suites.",
    categories: ["Endoscopy", "Lithotripsy", "OR Integration"],
  },
  {
    name: "Hitachi",
    color: "#E60027",
    mark: "square",
    country: "Japan",
    description:
      "Open MRI, ultrasound and radiotherapy platforms recognized for patient comfort and stable long-term performance.",
    categories: ["Open MRI", "Ultrasound"],
  },
  {
    name: "GE HealthCare",
    color: "#005EB8",
    mark: "ring",
    country: "USA",
    description:
      "One of the world's most complete imaging portfolios — Innova cath labs, Revolution CT, SIGNA MRI and Discovery PET/CT.",
    categories: ["Cath Lab", "CT", "MRI", "PET/CT"],
  },
  {
    name: "Shimadzu",
    color: "#C8161D",
    mark: "square",
    country: "Japan",
    description:
      "Cardiovascular X-ray, fluoroscopy and mobile C-arm systems built on more than a century of precision instrumentation.",
    categories: ["Angiography", "Fluoroscopy", "C-Arm"],
  },
  {
    name: "Abbott",
    color: "#008FC7",
    mark: "dot",
    country: "USA",
    description:
      "Structural heart, electrophysiology and vascular devices — from coronary stents to cardiac mapping systems.",
    categories: ["Cardiology", "EP", "Vascular"],
  },
  {
    name: "Medtronic",
    color: "#170F5F",
    mark: "bars",
    country: "Ireland / USA",
    description:
      "World-leading medical technology in cardiovascular, neurovascular, surgical and diabetes care — trusted by hospitals worldwide.",
    categories: ["Cardiology", "Neurovascular", "Surgical"],
  },
  {
    name: "Boston Scientific",
    color: "#0072CE",
    mark: "ring",
    country: "USA",
    description:
      "Interventional cardiology, electrophysiology, endoscopy and urology devices for less-invasive, life-changing therapies.",
    categories: ["Interventional Cardiology", "EP", "Endoscopy"],
  },
];

function BrandMark({ brand }: { brand: Brand }) {
  const c = brand.color;
  switch (brand.mark) {
    case "square":
      return <span className="h-5 w-5 rounded-[4px]" style={{ backgroundColor: c }} />;
    case "ring":
      return (
        <span className="h-5 w-5 rounded-full border-[3.5px]" style={{ borderColor: c }} />
      );
    case "bars":
      return (
        <span className="flex items-end gap-[3px]">
          <span className="h-3 w-1 rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-5 w-1 rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-4 w-1 rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-4 w-4 rounded-full" style={{ backgroundColor: c }} />;
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-accent/30">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          </div>
          <div className="mx-auto max-w-[100rem] px-6 py-20 lg:px-10 lg:py-24">
            <Eyebrow index="01">Our Brand Portfolio</Eyebrow>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-end">
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Twelve world-leading manufacturers.
                <br />
                <span className="text-primary">One trusted partner.</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                AbuFarha Medical is the authorized channel for the medical technology
                brands hospitals rely on every day. We supply, install, commission,
                train and support — so every system performs from day one.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Globe2, label: "12 Global Brands", sub: "Europe · USA · Japan · China" },
                { icon: ShieldCheck, label: "Certified Systems", sub: "New · Factory Certified · Refurbished" },
                { icon: Award, label: "Full Lifecycle Support", sub: "Install · Train · Maintain" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-xl border border-border/70 bg-white/70 px-4 py-3 backdrop-blur"
                >
                  <s.icon className="h-5 w-5 flex-shrink-0 text-primary" strokeWidth={2} />
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-foreground">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND GRID */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow index="02">All Brands</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  Choose a manufacturer to explore its systems.
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Every brand below is backed by our engineering, installation and
                after-sales teams across the region.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BRANDS.map((brand) => (
                <article
                  key={brand.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
                >
                  {/* accent bar */}
                  <span
                    className="absolute inset-x-0 top-0 h-1 opacity-80"
                    style={{ backgroundColor: brand.color }}
                  />

                  {/* logo lockup */}
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-accent/40 py-16">
          <div className="mx-auto flex max-w-[100rem] flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
                Not sure which system fits your department?
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                Talk to our biomedical engineers — we'll help you match the right
                brand, configuration and service plan to your clinical goals.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
            >
              Talk to an Engineer
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
