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
import { Check, Search, X, ZoomIn, ZoomOut, Expand } from "lucide-react";
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
    document.getElementById("request-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                        <dd className="text-[15px] font-semibold text-foreground">{f.value}</dd>
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

      {/* REQUEST A QUOTE */}
      <QuoteSection product={product} whatsappQuote={whatsappQuote} />
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
                className="h-4 w-6 rounded-[3px] object-cover shadow-sm"
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
        className="w-[--radix-popover-trigger-width] min-w-[280px] overflow-hidden rounded-2xl border-border/80 p-0 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]"
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
        <div className="max-h-[260px] overflow-y-auto overscroll-contain p-1.5">
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
                    className="h-4 w-6 shrink-0 rounded-[3px] object-cover shadow-sm"
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
      className="mx-auto max-w-[100rem] scroll-mt-28 px-6 py-20 lg:px-10"
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
