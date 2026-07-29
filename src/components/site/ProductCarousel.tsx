import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, FileText, GitCompare } from "lucide-react";
import { toast } from "sonner";
import { type Product, productSlug } from "@/lib/products";
import { toggleCompare, useCompare } from "@/lib/compare-store";
import { openQuoteModal } from "@/lib/quote-modal";

type Props = {
  products: Product[];
  ariaLabel: string;
};

export function ProductCarousel({ products, ariaLabel }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", () => onSelect(emblaApi));
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
    });
  }, [emblaApi, onSelect]);

  if (!products.length) return null;

  return (
    <div className="relative" aria-label={ariaLabel} role="region">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 sm:-ml-6">
          {products.map((p) => (
            <div
              key={p.slug}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 sm:pl-6 lg:basis-1/4"
            >
              <ProductSlideCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/70"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-all hover:border-primary hover:text-primary disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground/70"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductSlideCard({ product }: { product: Product }) {
  const slug = productSlug(product);
  const compareSlugs = useCompare();
  const inCompare = compareSlugs.includes(slug);

  const onCompare = () => {
    const added = toggleCompare(slug);
    if (added) toast.success("Added to Compare", { description: product.name });
    else if (!inCompare) toast.error("You can compare up to 4 products");
    else toast("Removed from Compare");
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_10px_30px_-18px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.32)]">
      <Link
        to="/products/$slug"
        params={{ slug }}
        className="relative block aspect-[4/3] overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-foreground/80 shadow-sm">
          {product.category}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onCompare();
          }}
          aria-pressed={inCompare}
          aria-label={inCompare ? "Remove from comparison" : "Add to comparison"}
          className={`absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border shadow-sm transition-all ${
            inCompare
              ? "border-primary bg-primary text-primary-foreground"
              : "border-white/70 bg-white/95 text-foreground/70 hover:border-primary hover:text-primary"
          }`}
        >
          <GitCompare className="h-4 w-4" />
        </button>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link to="/products/$slug" params={{ slug }}>
          <h3 className="font-display text-base font-bold tracking-tight text-foreground line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.subtitle}</p>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <Link
            to="/products/$slug"
            params={{ slug }}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-primary/30 px-3 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={() =>
              openQuoteModal({ productName: product.name, productSlug: slug, source: "carousel" })
            }
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary-dark"
          >
            <FileText className="h-3.5 w-3.5" /> Quote
          </button>
        </div>
      </div>
    </article>
  );
}
