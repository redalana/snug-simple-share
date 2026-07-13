import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  CheckCircle2,
  FileText,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  Link2,
  Facebook,
  Linkedin,
  ScanLine,
  Gauge,
  Workflow,
  Layers3,
  Award,
  Wrench,
  GraduationCap,
  PackageCheck,
  Headset,
  Factory,
  CalendarDays,
  BadgeCheck,
  MapPin,
  Boxes,
} from "lucide-react";
import {
  type Product,
  getRelatedProducts,
  getAdjacentProducts,
  productSlug,
} from "@/lib/products";
import { generateProductPdf } from "@/lib/product-pdf";

const WHATSAPP_NUMBER = "962799741318";

const FEATURES = [
  {
    icon: ScanLine,
    title: "Exceptional Image Quality",
    text: "Advanced imaging technology for precise diagnostics and better outcomes.",
  },
  {
    icon: Gauge,
    title: "Optimized Dose Management",
    text: "Smart dose control for enhanced patient and staff safety.",
  },
  {
    icon: Workflow,
    title: "Efficient Workflow",
    text: "Intuitive design and automation for maximum clinical efficiency.",
  },
  {
    icon: Layers3,
    title: "Versatile Applications",
    text: "Ideal for a broad range of clinical and interventional procedures.",
  },
  {
    icon: Award,
    title: "Reliable Performance",
    text: "Built for long service life with proven reliability worldwide.",
  },
];

const INCLUDED = [
  { icon: Wrench, label: "Installation" },
  { icon: GraduationCap, label: "Clinical Training" },
  { icon: ShieldCheck, label: "Warranty" },
  { icon: PackageCheck, label: "Spare Parts" },
  { icon: Headset, label: "After Sales Support" },
];

function useShare(product: Product, url: string) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const shareText = `${product.name} — ${product.category}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`;

  return { copied, copyLink, facebook, linkedin, whatsapp };
}

export function ProductDetail({ product, slug }: { product: Product; slug: string }) {
  const router = useRouter();
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [active, setActive] = useState(gallery[0]);
  const [generating, setGenerating] = useState(false);
  // Read the live URL only after mount to avoid SSR/client hydration mismatch.
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
  }, [slug]);
  const share = useShare(product, pageUrl);

  const related = getRelatedProducts(product, 3);
  const adjacent = getAdjacentProducts(slug);

  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const whatsappQuote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AbuFarha,\n\nI am interested in:\n${product.name}\n\nCategory:\n${product.category}\n\nProduct Link:\n${pageUrl}\n\nPlease send quotation and availability.`,
  )}`;


  const facts: { icon: typeof Factory; label: string; value: string }[] = [
    { icon: Factory, label: "Manufacturer", value: product.brand },
    { icon: Boxes, label: "Model", value: product.model },
    { icon: Layers3, label: "Category", value: product.category },
    { icon: BadgeCheck, label: "Condition", value: product.status },
    { icon: ShieldCheck, label: "Warranty", value: product.warranty },
    { icon: CheckCircle2, label: "Availability", value: "In Stock" },
    { icon: MapPin, label: "Country of Origin", value: product.country },
    { icon: CalendarDays, label: "Year", value: String(product.year) },
  ];

  const handlePdf = async () => {
    setGenerating(true);
    try {
      await generateProductPdf(product);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-white via-secondary/40 to-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-[100rem] px-6 py-10 lg:px-10 lg:py-14">
          {/* BREADCRUMB + BACK */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Home
                  </Link>
                </li>
                <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                <li>
                  <Link to="/products" className="transition-colors hover:text-primary">
                    Products
                  </Link>
                </li>
                <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                <li className="hidden sm:block text-muted-foreground">{product.category}</li>
                <ChevronRight className="hidden h-4 w-4 text-muted-foreground/60 sm:block" />
                <li className="font-semibold text-foreground" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>
            <button
              onClick={() => router.history.back()}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Medical Systems
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr_320px] lg:gap-8">
            {/* GALLERY */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_18px_44px_-24px_rgba(0,0,0,0.28)]">
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <motion.img
                    key={active}
                    initial={{ opacity: 0.4, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    src={active}
                    alt={product.name}
                    loading="eager"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 flex gap-3">
                  {gallery.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActive(img)}
                      aria-label={`View image ${i + 1}`}
                      aria-pressed={active === img}
                      className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-secondary transition-all ${
                        active === img
                          ? "border-primary ring-2 ring-primary/25"
                          : "border-border/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* INFO */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                {product.category}
              </span>
              <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">{product.subtitle}</p>

              <div className="mt-6 space-y-3">
                {[
                  product.status,
                  product.installation ? "Installation Included" : null,
                  "Warranty Included",
                ]
                  .filter(Boolean)
                  .map((b) => (
                    <div key={b as string} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      {b}
                    </div>
                  ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  onClick={scrollToQuote}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  <FileText className="h-4 w-4" /> Request a Quote
                </button>
                <a
                  href={whatsappQuote}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <PhoneCall className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
              <button
                onClick={handlePdf}
                disabled={generating}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary disabled:opacity-60"
              >
                <FileText className="h-4 w-4" />
                {generating ? "Preparing PDF…" : "Download Product PDF"}
              </button>

              {/* SHARE */}
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Share this product
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  <ShareButton href={share.facebook} label="Share on Facebook">
                    <Facebook className="h-4 w-4" />
                  </ShareButton>
                  <ShareButton href={share.linkedin} label="Share on LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </ShareButton>
                  <ShareButton href={share.whatsapp} label="Share on WhatsApp">
                    <PhoneCall className="h-4 w-4" />
                  </ShareButton>
                  <button
                    onClick={share.copyLink}
                    aria-label="Copy link"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:border-primary hover:text-primary"
                  >
                    <Link2 className="h-4 w-4" />
                  </button>
                  {share.copied && (
                    <span className="text-xs font-semibold text-primary">Link copied!</span>
                  )}
                </div>
              </div>
            </div>

            {/* QUICK FACTS */}
            <aside className="lg:pt-1">
              <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_18px_44px_-26px_rgba(0,0,0,0.28)]">
                <h2 className="font-display text-base font-bold text-foreground">Quick Facts</h2>
                <span className="mt-2 block h-0.5 w-10 rounded-full bg-primary" />
                <dl className="mt-5 space-y-4">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary" />
                      <div className="min-w-0">
                        <dt className="text-[11px] uppercase tracking-wide text-muted-foreground">
                          {f.label}
                        </dt>
                        <dd className="text-sm font-semibold text-foreground">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY HOSPITALS CHOOSE */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-14">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Why Hospitals Choose This System
            </h2>
            <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-primary" />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col items-center rounded-2xl border border-border/70 bg-card p-6 text-center shadow-[0_14px_36px_-26px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.32)]"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <f.icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM SNAPSHOT */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[100rem] px-6 py-12 lg:px-10 lg:py-14">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground">
            System Snapshot
          </h2>
          <span className="mt-4 block h-1 w-20 rounded-full bg-primary" />
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {product.snapshot.slice(0, 6).map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.25)]"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-2 font-display text-xl font-bold text-foreground">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED WITH EVERY PURCHASE */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-[100rem] px-6 py-10 lg:px-10 lg:py-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Included With Every Purchase
            </h2>
            <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-primary" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {INCLUDED.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.icon className="h-8 w-8" />
                </span>
                <p className="text-base font-semibold text-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD PROFILE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[100rem] px-6 py-14 lg:px-10">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border/70 bg-card p-8 shadow-[0_18px_44px_-30px_rgba(0,0,0,0.25)] sm:flex-row sm:justify-between lg:p-10">
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-7 w-7" />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-foreground">
                  Complete Product Profile
                </h2>
                <p className="mt-1 max-w-md text-sm text-muted-foreground">
                  Download a professional PDF with full product information, technical
                  highlights and our contact details — generated instantly.
                </p>
              </div>
            </div>
            <button
              onClick={handlePdf}
              disabled={generating}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60"
            >
              <FileText className="h-4 w-4" />
              {generating ? "Preparing PDF…" : "Download Full Product Profile"}
            </button>
          </div>
        </div>
      </section>

      {/* RELATED SYSTEMS */}
      {related.length > 0 && (
        <section className="border-b border-border/60 bg-secondary/30">
          <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
                Related Systems
              </h2>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                View All Systems <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <RelatedCard key={p.name} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PREV / NEXT */}
      {adjacent && (
        <section className="border-b border-border/60">
          <div className="mx-auto flex max-w-[100rem] flex-col gap-4 px-6 py-8 lg:flex-row lg:px-10">
            <Link
              to="/products/$slug"
              params={{ slug: productSlug(adjacent.prev) }}
              className="group flex flex-1 items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <ChevronLeft className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Previous System
                </div>
                <div className="truncate font-display text-sm font-bold text-foreground group-hover:text-primary">
                  {adjacent.prev.name}
                </div>
              </div>
            </Link>
            <Link
              to="/products/$slug"
              params={{ slug: productSlug(adjacent.next) }}
              className="group flex flex-1 items-center justify-end gap-4 rounded-2xl border border-border/70 bg-card p-5 text-right transition-all hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Next System
                </div>
                <div className="truncate font-display text-sm font-bold text-foreground group-hover:text-primary">
                  {adjacent.next.name}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
            </Link>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section id="quote" className="mx-auto max-w-[100rem] scroll-mt-32 px-6 py-16 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-secondary p-10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)] lg:p-14">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Interested in the {product.name}?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Our specialists are ready to help you with pricing, availability and clinical
                fit for your facility.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={scrollToQuote}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                <FileText className="h-4 w-4" /> Request Quote
              </button>
              <a
                href={whatsappQuote}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <PhoneCall className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="tel:+962799741318"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <PhoneCall className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ShareButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}

function RelatedCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: productSlug(product) }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.32)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground/80 shadow-sm">
          {product.brand}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.subtitle}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
