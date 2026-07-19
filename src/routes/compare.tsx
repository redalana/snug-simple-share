import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, FileText, X } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { PRODUCTS } from "@/lib/products";
import { getCompare, removeCompare, clearCompare, useCompare } from "@/lib/compare-store";
import { openQuoteModal } from "@/lib/quote-modal";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Compare Medical Equipment | AbuFarha Medical Supplies" },
      { name: "description", content: "Compare up to 4 medical systems side-by-side — specifications, warranty, availability, and support." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ComparePage,
});

const ROWS: { label: string; get: (p: (typeof PRODUCTS)[number]) => string }[] = [
  { label: "Manufacturer", get: (p) => p.brand },
  { label: "Model", get: (p) => p.model || p.name },
  { label: "Category", get: (p) => p.category },
  { label: "Condition", get: (p) => p.status },
  { label: "Year", get: (p) => String(p.year) },
  { label: "Country of Origin", get: (p) => p.country },
  { label: "System Type", get: (p) => p.systemType },
  {
    label: "Specifications",
    get: (p) => p.snapshot?.slice(0, 3).map((s) => `${s.label}: ${s.value}`).join(" • ") || p.specs.join(" • "),
  },
  { label: "Warranty", get: (p) => p.warranty || "Provided on quotation" },
  { label: "Availability", get: (p) => (p.sold ? "Sold" : "Available") },
  { label: "Country Support", get: (p) => "Africa & Middle East (40+ countries)" },
  { label: "Installation", get: (p) => (p.installation ? "Included" : "Available on request") },
  { label: "Training", get: (p) => (p.training ? "Included" : "Available on request") },
  { label: "After Sales", get: (p) => "Lifetime technical support" },
];

function ComparePage() {
  const [ready, setReady] = useState(false);
  const slugs = useCompare();
  useEffect(() => setReady(true), []);
  const items = slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Product Comparison</div>
            <h1 className="mt-1 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Compare Medical Systems
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">Side-by-side specifications for up to 4 products.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/products" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold hover:border-primary">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Products
            </Link>
            {items.length > 0 && (
              <button onClick={clearCompare} className="text-xs font-semibold text-muted-foreground hover:text-foreground">
                Clear all
              </button>
            )}
          </div>
        </div>

        {ready && items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
            <h2 className="font-display text-xl font-bold text-foreground">No products to compare yet</h2>
            <p className="mt-2 text-sm text-muted-foreground">Add products to your comparison from any product page.</p>
            <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="sticky top-[64px] z-10 bg-secondary/95 backdrop-blur">
                <tr>
                  <th className="w-40 border-b border-border p-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Specification
                  </th>
                  {items.map((p) => (
                    <th key={p!.slug} className="min-w-[220px] border-b border-l border-border p-4 align-top">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => removeCompare(p!.slug)}
                          aria-label={`Remove ${p!.name}`}
                          className="absolute right-0 top-0 grid h-6 w-6 place-items-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                        <img src={p!.image} alt={p!.name} className="mb-3 h-28 w-full rounded-xl object-cover" />
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{p!.category}</div>
                        <div className="mt-1 line-clamp-2 text-sm font-bold text-foreground">{p!.name}</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="even:bg-secondary/30">
                    <td className="border-b border-border p-4 align-top text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {row.label}
                    </td>
                    {items.map((p) => (
                      <td key={p!.slug} className="border-b border-l border-border p-4 align-top text-sm text-foreground/90">
                        {row.get(p!)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  {items.map((p) => (
                    <td key={p!.slug} className="border-l border-border p-4">
                      <button
                        type="button"
                        onClick={() => openQuoteModal({ productName: p!.name, productSlug: p!.slug })}
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
        )}
      </main>
      <Footer />
    </div>
  );
}
