import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, ShieldCheck, Wrench, GraduationCap } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PRODUCTS, productSlug, type Product } from "@/lib/products";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        {/* Hero */}
        <section className="border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
          <div className="mx-auto max-w-[100rem] px-6 py-16 lg:px-10 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              <Link to="/products" className="hover:text-primary">
                All Products
              </Link>
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              <span className="text-foreground">{title}</span>
            </nav>

            <h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                hash="contact-form"
                className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Request a Quote
              </Link>
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
                  key={p.name}
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
                    />
                    <span
                      className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${STATUS_STYLES[p.status]}`}
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
                          className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-foreground/75"
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
                <span className="font-semibold text-foreground">{title}</span> from
                every major OEM.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Talk to our engineers about current availability, specifications and
                lead times.
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
      </main>
      <Footer />
    </div>
  );
}

// Slug is exported so route files stay in sync with the header links.
export const CATEGORY_SLUGS = [
  "cath-lab",
  "drug-eluting-stents",
  "pet-ct-scanners",
  "mri-scanners",
  "c-arm-systems",
  "x-ray-systems",
  "mammography-systems",
  "bone-densitometers",
  "lithotripsy-eswl",
  "others",
] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];
