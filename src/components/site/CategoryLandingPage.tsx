import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  GraduationCap,
  CheckCircle2,
  ClipboardList,
  Stethoscope,
  Plus,
  Minus,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PRODUCTS, productSlug, type Product } from "@/lib/products";
import { faqPageJsonLd, itemListJsonLd, COMPANY } from "@/config/companyFacts";
import { SITE_URL } from "@/lib/seo";
import { openQuoteModal } from "@/lib/quote-modal";
import { CATEGORY_CONTENT, CATEGORY_LABELS } from "@/lib/category-content";
import { ExploreRelatedKnowledge } from "@/components/site/knowledge/ExploreRelatedKnowledge";

export type CategoryLandingProps = {
  /** Slug segment used in the URL, e.g. "cath-lab". */
  slug: string;
  /** Display name of the category. */
  title: string;
  /** Short description shown in the hero. */
  description: string;
  /**
   * Categories from `PRODUCTS` that belong on this landing page. Multiple
   * strings allow grouping (e.g. "Others" catches anything unmatched).
   */
  productCategories: string[];
  /** If true, show every product NOT in the provided productCategories. */
  showRest?: boolean;
};

const STATUS_STYLES: Record<Product["status"], string> = {
  "Brand New": "bg-primary/10 text-primary ring-1 ring-primary/20",
  "Certified Refurbished": "bg-secondary text-foreground/80 ring-1 ring-border",
  "Factory Certified": "bg-secondary text-foreground/80 ring-1 ring-border",
  Used: "bg-secondary text-foreground/80 ring-1 ring-border",
};

export function CategoryLandingPage({
  slug,
  title,
  description,
  productCategories,
  showRest = false,
}: CategoryLandingProps) {
  const matches = showRest
    ? PRODUCTS.filter((p) => !productCategories.includes(p.category))
    : PRODUCTS.filter((p) => productCategories.includes(p.category));

  const content = CATEGORY_CONTENT[slug];

  const pageUrl = `${SITE_URL}/products/${slug}`;

  const itemListSchema = itemListJsonLd(
    matches.map((p) => ({
      name: p.name,
      url: `${SITE_URL}/products/${productSlug(p)}`,
    })),
    title,
  );

  // CollectionPage wrapping the category's ItemList so search / AI engines
  // can resolve the page entity and its members in one graph node.
  const { "@context": _ctx, ...itemListNode } = itemListSchema as Record<string, unknown>;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": `${COMPANY.website}/#website` },
    publisher: { "@id": `${COMPANY.website}/#organization` },
    mainEntity: itemListNode,
  };

  const faqSchema = content && content.faqs.length > 0 ? faqPageJsonLd(content.faqs) : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main id="main-content" className="pt-[calc(110*var(--desktop-px-unit))]">
        {/* Hero */}
        <section className="border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
          <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
            <Breadcrumbs
              variant="inline"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
              items={[{ label: "All Products", to: "/products" }, { label: title }]}
            />


            <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openQuoteModal({ source: `category:${slug}` })}
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Request a Quote
              </button>
              <Link
                to="/products"
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View All Products
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Certified equipment
              </span>
              <span className="inline-flex items-center gap-2">
                <Wrench className="h-4 w-4 text-primary" />
                Installation & preventive maintenance
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Clinical training included
              </span>
            </div>
          </div>
        </section>

        {/* Enrichment: overview + clinical applications + buyer considerations */}
        {content && (
          <section className="border-b border-border/60 bg-background">
            <div className="mx-auto max-w-[100rem] px-6 py-14 lg:px-10 lg:py-16">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
                <div className="lg:col-span-2">
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    About {title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-foreground/85">
                    {content.intro}
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                        <Stethoscope className="h-5 w-5 text-primary" />
                        Clinical applications
                      </h3>
                      <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
                        {content.applications.map((a) => (
                          <li key={a} className="flex items-start gap-2">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              strokeWidth={2.25}
                            />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                        <ClipboardList className="h-5 w-5 text-primary" />
                        Buyer considerations
                      </h3>
                      <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
                        {content.buyerConsiderations.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              strokeWidth={2.25}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Support services + related categories sidebar */}
                <aside className="space-y-6">
                  <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
                    <h3 className="font-display text-base font-bold text-foreground">
                      AbuFarha support for {title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm">
                      {content.supportServices.map((s) => (
                        <li key={s.href + s.label}>
                          <Link
                            to={s.href}
                            className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-foreground/85 transition-colors hover:bg-muted/60 hover:text-primary"
                          >
                            <span>{s.label}</span>
                            <ArrowRight
                              className="h-4 w-4 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5"
                              strokeWidth={2.25}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {content.related.length > 0 && (
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)]">
                      <h3 className="font-display text-base font-bold text-foreground">
                        Related categories
                      </h3>
                      <ul className="mt-4 space-y-2 text-sm">
                        {content.related
                          .filter((r) => CATEGORY_LABELS[r])
                          .map((r) => (
                            <li key={r}>
                              <a
                                href={`/products/${r}`}
                                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-foreground/85 transition-colors hover:bg-muted/60 hover:text-primary"
                              >
                                <span>{CATEGORY_LABELS[r]}</span>
                                <ArrowRight
                                  className="h-4 w-4 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5"
                                  strokeWidth={2.25}
                                />
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </aside>
              </div>
            </div>
          </section>
        )}

        {/* Products grid */}
        <section className="mx-auto max-w-[100rem] px-6 py-14 lg:px-10 lg:py-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {matches.length > 0 ? `Available ${title}` : "Systems on request"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {matches.length > 0
                  ? `${matches.length} system${matches.length === 1 ? "" : "s"} in our current portfolio.`
                  : "Contact our engineers for the latest availability from all leading OEMs."}
              </p>
            </div>
            <Link
              to="/products"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex"
            >
              Browse full portfolio
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>

          {matches.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((p) => (
                <Link
                  key={productSlug(p)}
                  to="/products/$slug"
                  params={{ slug: productSlug(p) }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[calc(11*var(--desktop-px-unit))] font-semibold ${STATUS_STYLES[p.status]}`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {p.brand}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground group-hover:text-primary">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.specs.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-muted px-2.5 py-1 text-[calc(11*var(--desktop-px-unit))] font-medium text-foreground/75"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
                      <span className="text-muted-foreground">{p.warranty}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-primary">
                        View details
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                          strokeWidth={2.25}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-10 text-center">
              <p className="text-foreground/80">
                We supply, install and support{" "}
                <span className="font-semibold text-foreground">{title}</span> from every major OEM.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Talk to our engineers about current availability, specifications and lead times.
              </p>
              <Link
                to="/contact"
                hash="contact-form"
                className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Talk to an Engineer
              </Link>
            </div>
          )}
        </section>

        {/* Category FAQ */}
        {content && content.faqs.length > 0 && (
          <section className="border-t border-border/60 bg-muted/30">
            <div className="mx-auto max-w-[80rem] px-6 py-14 lg:px-10 lg:py-20">
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {title} — frequently asked questions
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Answers to the questions our engineers receive most often from hospital
                  procurement and clinical teams.
                </p>
              </div>
              <div className="mt-8">
                <CategoryFaqList items={content.faqs} />
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ source: `category-faq:${slug}` })}
                  className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  Request a Quote
                </button>
                <Link
                  to="/contact"
                  hash="contact-form"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Talk to an Engineer
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
                <Link
                  to="/faqs"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  All FAQs
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </section>
        )}
        <ExploreRelatedKnowledge refs={slug} preset="technology" />
      </main>
      <Footer />
    </div>
  );
}

function CategoryFaqList({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border/70 overflow-hidden rounded-2xl border border-border bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/40 sm:px-6 sm:py-5"
            >
              <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                {it.question}
              </span>
              {isOpen ? (
                <Minus className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
              ) : (
                <Plus className="h-5 w-5 shrink-0 text-primary" strokeWidth={2.25} />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-foreground/80 sm:px-6 sm:pb-6">
                {it.answer}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Slug is exported so route files stay in sync with the header links.
export const CATEGORY_SLUGS = [
  "cath-lab",
  "drug-eluting-stents",
  "pet-ct-scanners",
  "mri-scanners",
  "ct-scanners",
  "c-arm-systems",
  "x-ray-systems",
  "mammography-systems",
  "bone-densitometers",
  "lithotripsy-eswl",
  "others",
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];
