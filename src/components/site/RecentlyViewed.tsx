import { useEffect, useState } from "react";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { getRecentlyViewed } from "@/lib/recently-viewed";
import { ProductCarousel } from "./ProductCarousel";

export function RecentlyViewed({ excludeSlug }: { excludeSlug?: string }) {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(getRecentlyViewed().filter((s) => s !== excludeSlug).slice(0, 4));
  }, [excludeSlug]);

  const items = slugs
    .map((s) => getProductBySlug(s) || PRODUCTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  if (!items.length) return null;

  return (
    <section className="border-t border-border bg-secondary/40 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              Continue Exploring
            </div>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Recently Viewed Equipment
            </h2>
          </div>
        </div>
        <ProductCarousel products={items} ariaLabel="Recently viewed equipment" />
      </div>
    </section>
  );
}
