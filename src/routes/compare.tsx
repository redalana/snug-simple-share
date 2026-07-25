import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, FileText, GitCompare, X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PRODUCTS, type Product } from "@/lib/products";
import { clearCompare, removeCompare, useCompare } from "@/lib/compare-store";
import { openQuoteModal } from "@/lib/quote-modal";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Medical Equipment | AbuFarha Medical Supplies" },
      {
        name: "description",
        content:
          "Compare up to 4 medical systems side-by-side — specifications, warranty, availability, and support.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ComparePage,
});

type Row = { label: string; get: (p: Product) => string };

const ROWS: Row[] = [
  { label: "Category", get: (p) => p.category },
  { label: "Manufacturer", get: (p) => p.brand },
  { label: "Model", get: (p) => p.model || p.name },
  { label: "Condition", get: (p) => p.status },
  { label: "Year", get: (p) => String(p.year) },
  { label: "Country of Origin", get: (p) => p.country },
  {
    label: "Specifications",
    get: (p) =>
      p.snapshot
        ?.slice(0, 3)
        .map((s) => `${s.label}: ${s.value}`)
        .join(" • ") || p.specs.join(" • "),
  },
  { label: "Warranty", get: (p) => p.warranty || "Provided on quotation" },
  { label: "Availability", get: (p) => (p.sold ? "Sold" : "Available") },
  { label: "Country Support", get: () => "Africa & Middle East (10+ countries)" },
  { label: "Installation", get: (p) => (p.installation ? "Included" : "Available on request") },
  { label: "Training", get: (p) => (p.training ? "Included" : "Available on request") },
  { label: "After Sales", get: () => "Lifetime technical support" },
];

function ComparePage() {
  const [ready, setReady] = useState(false);
  const [diffOnly, setDiffOnly] = useState(false);
  const slugs = useCompare();
  useEffect(() => setReady(true), []);
  const items = slugs
    .map((s) => PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is Product => Boolean(p));

  const rows = useMemo(() => {
    if (!diffOnly || items.length < 2) return ROWS;
    return ROWS.filter((row) => {
      const first = row.get(items[0]);
      return items.some((p) => row.get(p) !== first);
    });
  }, [diffOnly, items]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />

      {/* HERO */}
      <section
        aria-label="Product comparison introduction"
        className="border-b border-border/70 bg-gradient-to-b from-secondary/60 to-background"
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
            <GitCompare className="h-3 w-3" /> Product Comparison
          </div>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Compare Medical Systems
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Compare up to four products side-by-side across specifications, warranty, availability,
            and support.
          </p>
        </div>
      </section>

      <main id="main-content" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Products
            </Link>
            {items.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            )}
          </div>
          {items.length >= 2 && (
            <label className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground">
              <input
                type="checkbox"
                checked={diffOnly}
                onChange={(e) => setDiffOnly(e.target.checked)}
                className="h-3.5 w-3.5 accent-[var(--primary)]"
              />
              Show Differences Only
            </label>
          )}
        </div>

        {!ready ? (
          <div
            className="rounded-3xl border border-dashed border-border bg-card p-12 text-center text-sm text-muted-foreground"
            aria-busy="true"
          >
            Loading comparison…
          </div>
        ) : items.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            {/* DESKTOP + TABLET TABLE */}
            <div className="hidden overflow-x-auto rounded-3xl border border-border bg-card md:block">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="sticky top-0 z-10 bg-secondary/95 backdrop-blur">
                  <tr>
                    <th className="sticky left-0 z-20 w-44 border-b border-border bg-secondary/95 p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Specification
                    </th>
                    {items.map((p) => (
                      <th
                        key={p.slug}
                        className="min-w-[220px] border-b border-l border-border p-4 align-top"
                      >
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => removeCompare(p.slug)}
                            aria-label={`Remove ${p.name}`}
                            className="absolute right-0 top-0 grid h-7 w-7 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                          <img
                            src={p.image}
                            alt={p.name}
                            className="mb-3 h-28 w-full rounded-xl object-cover"
                          />
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            {p.category}
                          </div>
                          <div className="mt-1 line-clamp-2 text-sm font-bold text-foreground">
                            {p.name}
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="even:bg-secondary/30">
                      <td className="sticky left-0 z-10 border-b border-border bg-inherit p-4 align-top text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </td>
                      {items.map((p) => (
                        <td
                          key={p.slug}
                          className="border-b border-l border-border p-4 align-top text-sm text-foreground/90"
                        >
                          {row.get(p)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="sticky left-0 z-10 bg-background p-4" />
                    {items.map((p) => (
                      <td key={p.slug} className="border-l border-border p-4">
                        <button
                          type="button"
                          onClick={() =>
                            openQuoteModal({ productName: p.name, productSlug: p.slug })
                          }
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary-dark"
                        >
                          <FileText className="h-3.5 w-3.5" /> Request Quote
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* MOBILE ACCORDION */}
            <div className="space-y-4 md:hidden">
              {items.map((p) => (
                <MobileProductAccordion
                  key={p.slug}
                  product={p}
                  rows={rows}
                  onRemove={() => removeCompare(p.slug)}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-border bg-card p-10 text-center sm:p-14">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary">
        <GitCompare className="h-9 w-9" />
      </div>
      <h2 className="mt-6 font-display text-xl font-extrabold text-foreground sm:text-2xl">
        No Products Selected
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Add products to compare from any product page — just tap the compare icon on the card.
      </p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-(--shadow-brand-sm) hover:bg-primary-dark"
      >
        Browse Products <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function MobileProductAccordion({
  product,
  rows,
  onRemove,
}: {
  product: Product;
  rows: Row[];
  onRemove: () => void;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-3 p-3">
        <img src={product.image} alt="" className="h-14 w-20 rounded-md object-cover" />
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            {product.category}
          </div>
          <div className="truncate text-sm font-bold text-foreground">{product.name}</div>
        </div>
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${product.name}`}
          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between border-t border-border/70 bg-secondary/40 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-muted-foreground"
      >
        Specifications
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <dl className="divide-y divide-border/60">
          {rows.map((row) => (
            <div key={row.label} className="flex items-start justify-between gap-4 px-4 py-2.5">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {row.label}
              </dt>
              <dd className="max-w-[60%] text-right text-sm text-foreground/90">
                {row.get(product)}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <div className="border-t border-border/70 p-3">
        <button
          type="button"
          onClick={() => openQuoteModal({ productName: product.name, productSlug: product.slug })}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground hover:bg-primary-dark"
        >
          <FileText className="h-3.5 w-3.5" /> Request Quote
        </button>
      </div>
    </div>
  );
}
