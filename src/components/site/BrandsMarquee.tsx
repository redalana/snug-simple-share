import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { BRANDS_LIST, type BrandEntry } from "@/lib/brands-data";

/**
 * Premium enterprise logo strip — Trusted Brands.
 *
 * - Real SVG wordmarks via cdn.simpleicons.org whenever an official mark exists.
 * - Text fallback wordmarks rendered at the same optical height so the strip
 *   reads as one balanced line.
 * - Brand identity visible by default; a light grayscale veil clears on hover.
 * - Seamless infinite marquee (duplicated track), pauses on hover.
 * - Soft edge fade via mask-image; no cards, no shadows, white background.
 */

function LogoItem({ brand }: { brand: BrandEntry }) {
  const wrapper =
    "flex h-16 w-44 shrink-0 items-center justify-center sm:h-20 sm:w-52";
  const inner =
    "opacity-90 grayscale-[20%] transition-all duration-500 hover:opacity-100 hover:grayscale-0";

  if (brand.logo.kind === "svg") {
    return (
      <div className={wrapper}>
        <img
          src={`https://cdn.simpleicons.org/${brand.logo.slug}/${brand.color.replace("#", "")}`}
          alt={brand.name}
          loading="lazy"
          decoding="async"
          className={`${inner} block h-full w-full object-contain`}
          style={{ maxHeight: "2.25rem", maxWidth: "100%" }}
        />
      </div>
    );
  }

  return (
    <div className={wrapper}>
      <span
        className={`${inner} inline-flex max-h-full max-w-full items-center justify-center whitespace-nowrap text-center leading-none`}
        style={{ color: brand.color }}
      >
        <span className="font-display text-[1.15rem] font-extrabold tracking-tight sm:text-[1.35rem]">
          {brand.name}
        </span>
      </span>
    </div>
  );
}

export function BrandsMarquee() {
  const loop = [...BRANDS_LIST, ...BRANDS_LIST];
  return (
    <section id="brands" className="border-y border-border bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow align="center">Trusted by World-Leading Medical Manufacturers</Eyebrow>
          </div>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-[1.7rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.1rem]">
            Trusted Brands
          </h2>
        </div>
      </div>

      <div
        className="group relative mt-6 overflow-hidden sm:mt-8"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-0 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {loop.map((b, i) => (
            <LogoItem key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[100rem] px-6 text-center lg:px-10">
        <Link
          to="/brands"
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
        >
          View All Brands <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
