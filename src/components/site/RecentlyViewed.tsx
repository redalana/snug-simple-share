import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { getRecentlyViewed } from "@/lib/recently-viewed";
import { openQuoteModal } from "@/lib/quote-modal";

export function RecentlyViewed({ excludeSlug }: { excludeSlug?: string }) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getRecentlyViewed().filter((s) => s !== excludeSlug).slice(0, 4));
  }, [excludeSlug]);

  const items = slugs
    .map((s) => getProductBySlug(s) || PRODUCTS.find((p) => p.slug === s))
    .filter(Boolean);
  if (!items.length) return null;

  return (
    <section className="border-t border-border bg-secondary/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              Continue Exploring
            </div>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Recently Viewed Equipment
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {items.map((p) => (
            <article
              key={p!.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link
                to="/products/$slug"
                params={{ slug: p!.slug }}
                className="block aspect-[4/3] overflow-hidden bg-secondary"
              >
                <img
                  src={p!.image}
                  alt={p!.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  {p!.category}
                </div>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-foreground">
                  {p!.name}
                </h3>
                <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ productName: p!.name, productSlug: p!.slug })}
                    className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground hover:bg-primary-dark"
                  >
                    <FileText className="h-3 w-3" /> Quote
                  </button>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p!.slug }}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground hover:text-primary"
                  >
                    View <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
