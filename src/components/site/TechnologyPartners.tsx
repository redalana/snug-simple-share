import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { getBrandPartners, type BrandPartner } from "@/lib/brands-data";

/**
 * Technology Partners — infinite, draggable logo showcase.
 *
 * Data comes exclusively from the shared brands roster
 * (src/lib/brands-data.ts), the same source that powers the Brands page and
 * the header dropdown, so the homepage never needs manual maintenance.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

function PartnerCard({ brand }: { brand: BrandPartner }) {
  return (
    <Link
      to="/brands"
      hash={brand.href.split("#")[1]}
      aria-label={`${brand.name} — view brand details`}
      draggable={false}
      className="group flex h-[7.75rem] w-[8.75rem] shrink-0 select-none flex-col items-center justify-center gap-2 rounded-[18px] border border-[oklch(0.93_0_0)] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary/35 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.35),0_0_0_3px_rgba(220,38,38,0.08)] focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:w-[11rem] lg:w-[11.5rem]"
    >
      <span className="flex h-14 w-full items-center justify-center">
        <img
          src={brand.logoUrl}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="w-auto max-w-full object-contain"
          style={{ height: brand.logoHeight }}
        />
      </span>
      <span className="flex h-9 flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="max-w-full truncate text-[0.85rem] font-bold leading-tight text-ink">
          {brand.name}
        </span>
        {brand.productCount > 0 && (
          <span className="mt-0.5 text-[0.75rem] font-semibold text-primary">
            {brand.productCount} Products
          </span>
        )}
      </span>
    </Link>
  );
}

function MarqueeRow({
  brands,
  direction,
  speed = 42,
}: {
  brands: BrandPartner[];
  direction: "left" | "right";
  speed?: number;
}) {
  const x = useMotionValue(0);
  const setRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const paused = useRef(false);
  const dragging = useRef(false);

  useEffect(() => {
    const el = setRef.current;
    if (!el) return;
    const measure = () => setSetWidth(el.scrollWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [brands.length]);

  const wrap = (v: number) => {
    if (!setWidth) return v;
    let next = v;
    while (next <= -setWidth) next += setWidth;
    while (next > 0) next -= setWidth;
    return next;
  };

  useAnimationFrame((_, delta) => {
    if (!setWidth) return;
    const moving = !paused.current && !dragging.current;
    const step = moving ? ((direction === "left" ? -1 : 1) * speed * delta) / 1000 : 0;
    const next = wrap(x.get() + step);
    if (next !== x.get()) x.set(next);
  });

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onWheel={(e) => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) x.set(wrap(x.get() - e.deltaX));
      }}
    >
      <motion.div
        className="flex w-max cursor-grab items-center gap-4 py-3 active:cursor-grabbing"
        style={{ x, willChange: "transform" }}
        drag="x"
        dragMomentum={false}
        onDragStart={() => (dragging.current = true)}
        onDragEnd={() => {
          dragging.current = false;
          x.set(wrap(x.get()));
        }}
      >
        <div ref={setRef} className="flex items-center gap-4 pr-4">
          {brands.map((b) => (
            <PartnerCard key={b.name} brand={b} />
          ))}
        </div>
        <div className="flex items-center gap-4 pr-4" aria-hidden="true">
          {brands.map((b) => (
            <PartnerCard key={`dup-${b.name}`} brand={b} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function TechnologyPartners() {
  const brands = useMemo(() => getBrandPartners(), []);
  const half = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE }}
      aria-label="Technology partners"
      className="min-w-0"
    >
      <div className="flex min-w-0 flex-wrap items-end justify-between gap-4">
        <div className="min-w-0 max-w-2xl">
          <h3 className="font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[2.1rem]">
            Technology Partners
          </h3>
          <p className="mt-3 text-[0.97rem] leading-[1.6] text-muted-foreground">
            Trusted global medical manufacturers delivering certified medical technologies across
            Africa and the Middle East.
          </p>
        </div>
        <Link
          to="/brands"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
        >
          View All Brands
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 space-y-1">
        <MarqueeRow brands={brands} direction="left" />
        {/* Second row (desktop only) runs the opposite way with an offset order
            so logos never align vertically. */}
        <div className="hidden lg:block">
          <MarqueeRow brands={[...rowB, ...rowA]} direction="right" speed={34} />
        </div>
      </div>
    </motion.section>
  );
}
