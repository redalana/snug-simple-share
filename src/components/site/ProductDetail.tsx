import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  defaultCountries,
  parseCountry,
  FlagImage,
} from "react-international-phone";
import { PhoneField } from "@/components/site/PhoneField";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, Search, X, ZoomIn, ZoomOut, Expand, Download, Plus } from "lucide-react";
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
  Mail,
} from "lucide-react";
import {
  type Product,
  getAdjacentProducts,
  productSlug,
} from "@/lib/products";
import { CATEGORY_NAME_TO_SLUG } from "@/lib/category-content";
import { generateProductPdf } from "@/lib/product-pdf";
import { pushRecentlyViewed } from "@/lib/recently-viewed";
import { toggleCompare, useCompare } from "@/lib/compare-store";
import { RecentlyViewed } from "@/components/site/RecentlyViewed";
import { RelatedProducts } from "@/components/site/RelatedProducts";
import { GitCompare } from "lucide-react";

import { geoService } from "@/lib/services/geoService";

const WHATSAPP_NUMBER = "962799741318";

const FEATURES = [
  {
    icon: ScanLine,
    title: "Exceptional Image Quality",
    text: "Advanced imaging for precise diagnostics and confident clinical decisions.",
  },
  {
    icon: Workflow,
    title: "Clinical Efficiency",
    text: "Streamlined workflows and automation that save valuable time.",
  },
  {
    icon: Award,
    title: "Reliable Performance",
    text: "Engineered for long service life and proven uptime worldwide.",
  },
  {
    icon: Layers3,
    title: "Future Ready Platform",
    text: "Upgradeable architecture that scales with evolving clinical needs.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Training Included",
    text: "Hands-on operator training so your team performs from day one.",
  },
  {
    icon: Headset,
    title: "Lifetime After-Sales Support",
    text: "Certified biomedical engineers on call across every project region.",
  },
];

const INCLUDED = [
  { icon: Wrench, label: "Installation" },
  { icon: GraduationCap, label: "Clinical Training" },
  { icon: ShieldCheck, label: "Warranty" },
  { icon: PackageCheck, label: "Spare Parts" },
  { icon: Headset, label: "After Sales Support" },
];

const TRUST = [
  { icon: Award, title: "Engineering Since 1999", text: "Delivering medical technology across Africa and the Middle East since 1999." },
  { icon: BadgeCheck, title: "Certified Biomedical Engineers", text: "OEM-trained specialists covering every major imaging platform." },
  { icon: Wrench, title: "Installation & Commissioning", text: "Full site preparation, mechanical install and clinical hand-over." },
  { icon: GraduationCap, title: "Clinical Training", text: "Structured operator and application programs at your facility." },
  { icon: ShieldCheck, title: "Preventive Maintenance", text: "Scheduled service plans that protect uptime and patient throughput." },
  { icon: Headset, title: "After Sales Support", text: "Priority remote support and rapid on-site response worldwide." },
];

const DOWNLOADS = [
  { label: "Product Brochure", type: "PDF", size: "1.8 MB" },
  { label: "Technical Datasheet", type: "PDF", size: "0.9 MB" },
  { label: "Installation Guide", type: "PDF", size: "1.2 MB" },
  { label: "Warranty Information", type: "PDF", size: "0.4 MB" },
];

const FAQS = [
  {
    q: "Can this system be installed in existing hospitals?",
    a: "Yes. Our engineers perform a site survey, confirm power, cooling and shielding requirements, and manage the full installation and commissioning inside operating facilities.",
  },
  {
    q: "Is clinical training included with the system?",
    a: "Every AbuFarha delivery includes structured operator and application training so your radiographers and technologists can use the equipment confidently from day one.",
  },
  {
    q: "Is international shipping and installation available?",
    a: "Yes. We regularly deliver, install and commission systems across the Middle East, Africa and beyond, including customs, logistics and on-site engineering.",
  },
  {
    q: "How long is the warranty?",
    a: "Every system ships with a standard 12-month parts warranty, with optional extended coverage and preventive maintenance packages available.",
  },
  {
    q: "Do you provide after-sales support and spare parts?",
    a: "Our biomedical team offers long-term service contracts, remote diagnostics, priority spare parts supply and rapid on-site response.",
  },
];


const SNAPSHOT_ICONS = [Gauge, ScanLine, Workflow, Layers3, BadgeCheck, ShieldCheck];

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const activeIndex = Math.max(0, gallery.indexOf(active));
  const [generating, setGenerating] = useState(false);
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});
  const isLoaded = !!loadedMap[active];
  const markLoaded = (src: string) =>
    setLoadedMap((m) => (m[src] ? m : { ...m, [src]: true }));

  // Hover-zoom (desktop) — transform-origin follows the cursor.
  const [zoomHover, setZoomHover] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setZoomPos({ x, y });
  };

  // Read the live URL only after mount to avoid SSR/client hydration mismatch.
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(window.location.href);
    pushRecentlyViewed(slug);
  }, [slug]);
  const compareSlugs = useCompare();
  const inCompare = compareSlugs.includes(slug);
  const handleCompare = () => {
    const added = toggleCompare(slug);
    if (added) toast.success("Added to Compare", { description: `${product.name} is ready to compare.` });
    else if (inCompare) toast("Removed from Compare");
    else toast.error("You can compare up to 4 products");
  };

  const share = useShare(product, pageUrl);

  const adjacent = getAdjacentProducts(slug);

  const scrollToQuote = () => {
    document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const whatsappQuote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AbuFarha,\n\nI am interested in:\n${product.name}\n\nCategory:\n${product.category}\n\nProduct Link:\n${pageUrl}\n\nPlease send quotation and availability.`,
  )}`;

  // Derived hero badges — subtle, semantic.
  const badges: { label: string; tone: "primary" | "emerald" | "slate" | "amber" }[] = [];
  if (product.sold) badges.push({ label: "Sold", tone: "slate" });
  else badges.push({ label: "In Stock", tone: "emerald" });
  if (product.status === "Brand New") badges.push({ label: "New", tone: "primary" });
  else if (product.status.toLowerCase().includes("refurbished"))
    badges.push({ label: "Certified Refurbished", tone: "amber" });
  else badges.push({ label: product.status, tone: "amber" });

  const badgeToneClass = (t: "primary" | "emerald" | "slate" | "amber") =>
    t === "primary"
      ? "bg-primary text-primary-foreground"
      : t === "emerald"
      ? "bg-emerald-500/95 text-white"
      : t === "amber"
      ? "bg-amber-500/95 text-white"
      : "bg-slate-700/90 text-white";

  const shareNative = async () => {
    const url = pageUrl || (typeof window !== "undefined" ? window.location.href : "");
    type Nav = Navigator & { share?: (d: ShareData) => Promise<void> };
    const nav = typeof navigator !== "undefined" ? (navigator as Nav) : null;
    if (nav?.share) {
      try {
        await nav.share({ title: product.name, text: `${product.name} — ${product.category}`, url });
        return;
      } catch { /* user cancelled */ }
    }
    share.copyLink();
    toast.success("Link copied to clipboard");
  };




  const facts: { icon: typeof Factory; label: string; value: string }[] = [
    { icon: Factory, label: "Manufacturer", value: product.brand },
    { icon: Boxes, label: "Model", value: product.model },
    { icon: Layers3, label: "Category", value: product.category },
    { icon: BadgeCheck, label: "Condition", value: product.status },
    { icon: ShieldCheck, label: "Warranty", value: product.warranty },
    ...(product.refurbishment
      ? [{ icon: Wrench, label: "Refurbishment Status", value: product.refurbishment }]
      : []),
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
      <section id="overview" className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-white via-secondary/40 to-secondary">
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
                <li className="hidden sm:block">
                  <CategoryBreadcrumbLink category={product.category} />
                </li>
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
              <div className="group/gallery relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_18px_44px_-24px_rgba(0,0,0,0.28)]">
                {/* Hover-zoom stage (desktop) + click-to-fullscreen */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Open fullscreen gallery"
                  onClick={() => setLightboxOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setLightboxOpen(true);
                    }
                  }}
                  onMouseEnter={() => setZoomHover(true)}
                  onMouseLeave={() => setZoomHover(false)}
                  onMouseMove={handleZoomMove}
                  className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  {/* Skeleton — prevents layout shift while loading */}
                  {!isLoaded && (
                    <div
                      aria-hidden
                      className="absolute inset-0 animate-pulse bg-gradient-to-br from-secondary via-secondary/70 to-secondary"
                    />
                  )}
                  <motion.img
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    src={active}
                    alt={product.imageAlt || `${product.brand} ${product.name} — view ${activeIndex + 1}`}
                    loading="eager"
                    decoding="async"
                    onLoad={() => markLoaded(active)}
                    style={{
                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                      transform: zoomHover ? "scale(1.75)" : "scale(1)",
                    }}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform"
                  />

                  {/* Badges (top-left) */}
                  <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-2">
                    {badges.map((b) => (
                      <span
                        key={b.label}
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-wide shadow-sm ${badgeToneClass(b.tone)}`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>

                  {/* Counter (bottom-left) */}
                  <span className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    {activeIndex + 1} / {gallery.length}
                  </span>

                  {/* Floating actions (top-right) */}
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 opacity-100 transition-opacity md:opacity-0 md:group-hover/gallery:opacity-100 md:focus-within:opacity-100">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                      aria-label="View fullscreen"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                    >
                      <Expand className="h-4 w-4" />
                    </button>
                    <a
                      href={active}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Download image"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); shareNative(); }}
                      aria-label="Share product"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                    >
                      <Link2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              {gallery.length > 1 && (
                <div
                  className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  role="tablist"
                  aria-label="Product image thumbnails"
                >
                  {gallery.map((img, i) => (
                    <button
                      key={img + i}
                      onClick={() => setActive(img)}
                      role="tab"
                      aria-label={`View image ${i + 1} of ${gallery.length}`}
                      aria-selected={active === img}
                      className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-secondary transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                        active === img
                          ? "border-primary ring-2 ring-primary/25"
                          : "border-border/60 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>



            {/* INFO */}
            <div>
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-primary">
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
              <button
                type="button"
                onClick={handleCompare}
                aria-pressed={inCompare}
                className={`ml-2 mt-3 inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  inCompare
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <GitCompare className="h-4 w-4" />
                {inCompare ? "Added to Compare" : "Add to Compare"}
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
                <h2 className="font-display text-lg font-bold text-foreground">Quick Facts</h2>
                <span className="mt-2 block h-1 w-12 rounded-full bg-primary" />
                <dl className="mt-5 space-y-4">
                  {facts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <f.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {f.label}
                        </dt>
                        <dd className="text-[calc(15*var(--desktop-px-unit))] font-semibold text-foreground">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* VALUE BLOCK — Why Choose · Snapshot · Included, unified */}
      <section className="border-b border-border/60 bg-gradient-to-b from-white to-secondary/40">
        <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
          {/* WHY HOSPITALS CHOOSE */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
              Why Hospitals Choose This System
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Engineered for confident clinical care
            </h2>
            <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_56px_-30px_rgba(0,0,0,0.32)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>

          {/* SYSTEM SNAPSHOT — premium highlight strip */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_20px_50px_-34px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between gap-4 border-b border-border/50 bg-secondary/40 px-7 py-5 lg:px-9">
              <h3 className="font-display text-xl font-bold text-foreground">System Snapshot</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key specifications
              </span>
            </div>
            <dl className="grid grid-cols-2 divide-x divide-y divide-border/50 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
              {product.snapshot.slice(0, 6).map((s, i) => {
                const Icon = SNAPSHOT_ICONS[i % SNAPSHOT_ICONS.length];
                return (
                  <div key={s.label} className="group px-6 py-8 transition-colors hover:bg-secondary/30">
                    <Icon className="h-5 w-5 text-primary/70 transition-transform duration-300 group-hover:scale-110" />
                    <dt className="mt-4 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {s.label}
                    </dt>
                    <dd className="mt-1.5 font-display text-2xl font-bold leading-tight text-foreground">
                      {s.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* INCLUDED WITH EVERY PURCHASE */}
          <div className="mt-16 grid grid-cols-1 gap-8 rounded-3xl border border-border/60 bg-primary/[0.04] p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-center lg:p-12">
            <div>
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
                Complete Package
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Included with every purchase
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every system ships with full lifecycle support — from installation to
                long-term after-sales service.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INCLUDED.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-3.5 rounded-2xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_36px_-28px_rgba(0,0,0,0.3)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold text-foreground">{s.label}</span>
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-primary/70" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-start">
            <div>
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
                Product Downloads
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Documentation &amp; datasheets
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Download the full product profile instantly or request the OEM
                datasheets, installation and warranty documents from our team.
              </p>
              <button
                onClick={handlePdf}
                disabled={generating}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60"
              >
                <FileText className="h-4 w-4" />
                {generating ? "Preparing PDF…" : "Download Full Product Profile"}
              </button>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {DOWNLOADS.map((d) => (
                <li key={d.label}>
                  <button
                    type="button"
                    onClick={handlePdf}
                    disabled={generating}
                    className="group flex w-full items-center gap-4 rounded-2xl border border-border/70 bg-card p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_44px_-30px_rgba(0,0,0,0.28)] disabled:opacity-60"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-foreground">{d.label}</span>
                      <span className="mt-0.5 block text-[calc(11*var(--desktop-px-unit))] uppercase tracking-wide text-muted-foreground">
                        {d.type} · {d.size}
                      </span>
                    </span>
                    <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY BUY FROM ABUFARHA */}
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/30 to-white">
        <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
              Why Buy From AbuFarha
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              A partner behind every installation
            </h2>
            <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-primary" />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t) => (
              <div
                key={t.title}
                className="group flex gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_52px_-30px_rgba(0,0,0,0.28)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT FAQ */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-start lg:gap-16">
            <div>
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
                Product FAQ
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Answers to common questions
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Everything you need to know about installation, training, warranty
                and after-sales support for this system.
              </p>
            </div>
            <div className="divide-y divide-border/60 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[0_18px_44px_-32px_rgba(0,0,0,0.28)]">
              {FAQS.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-sm font-bold text-foreground transition-colors hover:bg-secondary/40 lg:px-7 lg:py-6 lg:text-base">
                    <span>{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all group-open:rotate-45 group-open:bg-primary group-open:text-primary-foreground">
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pr-16 text-sm leading-relaxed text-muted-foreground lg:px-7 lg:pb-7">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HELP CTA */}
      <section className="border-b border-border/60 bg-primary/[0.04]">
        <div className="mx-auto max-w-[100rem] px-6 py-14 lg:px-10 lg:py-16">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/15 bg-card p-8 shadow-[0_24px_56px_-34px_rgba(0,0,0,0.3)] lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div className="max-w-2xl">
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.24em] text-primary">
                Talk to a Specialist
              </span>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Need help choosing the right system?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our clinical and biomedical specialists will help you match the right
                configuration to your facility, project scope and budget.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToQuote}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_14px_30px_-14px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                <FileText className="h-4 w-4" /> Request a Quote
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                <PhoneCall className="h-4 w-4" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* RELATED SYSTEMS */}
      <div className="border-b border-border/60 bg-secondary/30">
        <RelatedProducts product={product} />
      </div>

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
                <div className="text-[calc(11*var(--desktop-px-unit))] uppercase tracking-wide text-muted-foreground">
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
                <div className="text-[calc(11*var(--desktop-px-unit))] uppercase tracking-wide text-muted-foreground">
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

      {/* REQUEST A QUOTE */}
      <QuoteSection product={product} whatsappQuote={whatsappQuote} />

      {lightboxOpen && (
        <Lightbox
          images={gallery}
          index={activeIndex}
          alt={`${product.brand} ${product.name}`}
          onIndexChange={(i) => setActive(gallery[i])}
          onClose={() => setLightboxOpen(false)}
        />
      )}
      <RecentlyViewed excludeSlug={slug} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(product, slug)),
        }}
      />
    </>
  );
}

const QUOTE_COUNTRIES = defaultCountries
  .map(parseCountry)
  .sort((a, b) => a.name.localeCompare(b.name));

function CountrySelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = useMemo(
    () => QUOTE_COUNTRIES.find((c) => c.name === value),
    [value],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return QUOTE_COUNTRIES;
    return QUOTE_COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.iso2.includes(q),
    );
  }, [query]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => searchRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    setQuery("");
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Select country"
          className="flex h-14 w-full items-center gap-2.5 rounded-xl border border-border bg-secondary/30 px-4 text-left text-base text-foreground outline-none transition-all hover:bg-secondary/50 focus-visible:border-primary focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-primary/10"
        >
          {selected ? (
            <>
              <FlagImage
                iso2={selected.iso2}
                className="h-4 w-6 rounded-[calc(3*var(--desktop-px-unit))] object-cover shadow-sm"
              />
              <span className="flex-1 truncate">{selected.name}</span>
            </>
          ) : (
            <span className="flex-1 truncate text-muted-foreground/70">Select country</span>
          )}
          <ChevronRight className="h-4 w-4 rotate-90 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={8}
        className="w-[--radix-popover-trigger-width] min-w-[calc(280*var(--desktop-px-unit))] overflow-hidden rounded-2xl border-border/80 p-0 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="sticky top-0 z-10 border-b border-border/70 bg-white/95 p-2.5 backdrop-blur">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search country"
              aria-label="Search countries"
              className="h-10 w-full rounded-lg border border-border bg-secondary/40 pl-9 pr-3 text-sm outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
            />
          </div>
        </div>
        <div className="max-h-[calc(260*var(--desktop-px-unit))] overflow-y-auto overscroll-contain p-1.5">
          {filtered.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-muted-foreground">
              No countries found
            </p>
          ) : (
            filtered.map((c) => {
              const isSelected = c.name === value;
              return (
                <button
                  key={c.iso2}
                  type="button"
                  onClick={() => {
                    onChange(c.name);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left text-sm transition-colors hover:bg-primary/5 ${
                    isSelected ? "font-semibold" : ""
                  }`}
                >
                  <FlagImage
                    iso2={c.iso2}
                    className="h-4 w-6 shrink-0 rounded-[calc(3*var(--desktop-px-unit))] object-cover shadow-sm"
                  />
                  <span className="flex-1 truncate text-foreground">{c.name}</span>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-primary" />}
                </button>
              );
            })
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function QuoteSection({
  product,
  whatsappQuote,
}: {
  product: Product;
  whatsappQuote: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: `I would like to request a quotation for the ${product.name}. Please send pricing, availability and delivery information.`,
  });

  // Auto-detect the visitor's country and prefill the selector (frontend
  // placeholder via geoService; backend IP geolocation swaps in later).
  useEffect(() => {
    let cancelled = false;
    geoService.detectCountry().then(({ iso2 }) => {
      if (cancelled) return;
      const match = QUOTE_COUNTRIES.find((c) => c.iso2 === iso2);
      if (match) {
        setForm((prev) => (prev.country ? prev : { ...prev, country: match.name }));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Quote request sent", {
        description: `Thank you, ${form.fullName || "we"}. Our team will contact you shortly about the ${product.name}.`,
      });
      setForm((prev) => ({
        fullName: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        message: prev.message,
      }));
    }, 700);
  };

  const labelClass = "mb-2 block text-sm font-semibold text-foreground";
  const inputClass =
    "h-14 w-full rounded-xl border border-border bg-secondary/30 px-4 text-base text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";
  const outlineBtn =
    "inline-flex items-center gap-2.5 rounded-xl border-2 border-border bg-background px-5 py-3.5 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary";

  const emailQuote = `mailto:info@abufarhamedical.com?subject=${encodeURIComponent(
    `Quotation Request — ${product.name}`,
  )}&body=${encodeURIComponent(
    `I would like to request a quotation for the ${product.name}. Please send pricing, availability and delivery information.`,
  )}`;

  return (
    <section
      id="request-quote"
      className="mx-auto max-w-[100rem] scroll-mt-28 px-6 py-16 lg:px-10 lg:py-20"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[36fr_64fr] lg:items-start lg:gap-16">
        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Get a Quotation
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
            Request a Quote
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
            Our specialists will help you choose the right medical system, verify
            availability, prepare the quotation and answer all technical questions.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappQuote}
              target="_blank"
              rel="noopener noreferrer"
              className={outlineBtn}
            >
              <PhoneCall className="h-5 w-5" /> WhatsApp
            </a>
            <a href="tel:+962799741318" className={outlineBtn}>
              <PhoneCall className="h-5 w-5" /> Call Us
            </a>
            <a href={emailQuote} className={outlineBtn}>
              <Mail className="h-5 w-5" /> Email Us
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border/70 bg-card p-7 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)] sm:p-9 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                required
                value={form.fullName}
                onChange={update("fullName")}
                placeholder="Dr. John Smith"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Hospital / Company</label>
              <input
                value={form.company}
                onChange={update("company")}
                placeholder="City Medical Center"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Country</label>
              <CountrySelect
                value={form.country}
                onChange={(v) => setForm((prev) => ({ ...prev, country: v }))}
              />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="name@hospital.com"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone Number</label>
              <PhoneField
                value={form.phone}
                onChange={(v) => setForm((prev) => ({ ...prev, phone: v }))}
                className="h-14"
              />
            </div>
            <div>
              <label className={labelClass}>Interested Product</label>
              <input
                readOnly
                value={product.name}
                className={`${inputClass} cursor-not-allowed bg-secondary/60 font-medium`}
              />
            </div>
          </div>
          <div className="mt-6">
            <label className={labelClass}>Message</label>
            <textarea
              rows={5}
              value={form.message}
              onChange={update("message")}
              className="w-full resize-none rounded-xl border border-border bg-secondary/30 p-4 text-base leading-relaxed text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_18px_36px_-16px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60"
          >
            <FileText className="h-5 w-5" />
            {submitting ? "Sending…" : "Request Quote"}
          </button>
        </form>
      </div>
    </section>
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


function Lightbox({
  images,
  index,
  alt,
  onIndexChange,
  onClose,
}: {
  images: string[];
  index: number;
  alt: string;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = (dir: number) => {
    setZoomed(false);
    onIndexChange((index + dir + images.length) % images.length);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  });

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Product image gallery"
      onClick={onClose}
      onWheel={(e) => setZoomed(e.deltaY < 0)}
    >
      {/* TOP BAR */}
      <div
        className="flex items-center justify-between px-5 py-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold">
          {index + 1} / {images.length}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            {zoomed ? <ZoomOut className="h-5 w-5" /> : <ZoomIn className="h-5 w-5" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* STAGE */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {images.length > 1 && (
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        <img
          src={images[index]}
          alt={`${alt} — image ${index + 1}`}
          onClick={() => setZoomed((z) => !z)}
          className={`max-h-full max-w-full select-none rounded-lg object-contain transition-transform duration-300 ${
            zoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
        />
        {images.length > 1 && (
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div
          className="flex items-center justify-center gap-2.5 px-4 py-5"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={img + i}
              onClick={() => {
                setZoomed(false);
                onIndexChange(i);
              }}
              aria-label={`View image ${i + 1}`}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === index ? "border-white" : "border-white/25 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Breadcrumb category link — routes to the category landing page when the
 * product's category maps to a known slug; otherwise renders plain text.
 */
function CategoryBreadcrumbLink({ category }: { category: string }) {
  const slug = CATEGORY_NAME_TO_SLUG[category];
  if (!slug) return <span className="text-muted-foreground">{category}</span>;
  return (
    <a
      href={`/products/${slug}`}
      className="text-muted-foreground transition-colors hover:text-primary"
    >
      {category}
    </a>
  );
}

const ABS_SITE_URL = "https://snug-simple-share.lovable.app";

function buildBreadcrumbSchema(product: Product, slug: string) {
  const categorySlug = CATEGORY_NAME_TO_SLUG[product.category];
  const items: Array<Record<string, unknown>> = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${ABS_SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Products", item: `${ABS_SITE_URL}/products` },
  ];
  if (categorySlug) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: product.category,
      item: `${ABS_SITE_URL}/products/${categorySlug}`,
    });
    items.push({
      "@type": "ListItem",
      position: 4,
      name: product.name,
      item: `${ABS_SITE_URL}/products/${slug}`,
    });
  } else {
    items.push({ "@type": "ListItem", position: 3, name: product.category });
    items.push({
      "@type": "ListItem",
      position: 4,
      name: product.name,
      item: `${ABS_SITE_URL}/products/${slug}`,
    });
  }
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}
