import { useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product, productSlug } from "@/lib/products";
import { ProductCarousel } from "./ProductCarousel";

function shuffle<T>(arr: T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function RelatedProducts({ product }: { product: Product }) {
  const sameCategory = useMemo(() => {
    const currentSlug = productSlug(product);
    return PRODUCTS.filter((p) => p.category === product.category && productSlug(p) !== currentSlug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.slug]);
  // Server and first client render use the same (catalogue) order so the page
  // hydrates cleanly; the random pick happens only after mount.
  const [items, setItems] = useState(() => sameCategory.slice(0, 4));
  useEffect(() => {
    setItems(shuffle(sameCategory).slice(0, 4));
  }, [sameCategory]);

  if (!items.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Related Products
          </p>
          <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            More in {product.category}
          </h2>
        </div>
      </div>
      <ProductCarousel products={items} ariaLabel="Related products" />
    </section>
  );
}
