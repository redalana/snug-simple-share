import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

/**
 * Premium enterprise logo strip — Trusted Brands.
 *
 * Design notes:
 * - Real SVG wordmarks (via simpleicons CDN) whenever an official mark exists;
 *   otherwise a carefully-tuned text wordmark rendered at the same optical height.
 * - Every logo is normalised to the same visual height (h-7 sm:h-8) so the strip
 *   reads as one balanced line, not a collage.
 * - Neutral monochrome by default; brand color emerges on hover — quiet, premium,
 *   unmistakably enterprise.
 * - Seamless infinite marquee (duplicated track), pauses on hover.
 * - Soft edge fade via mask-image; no cards, no shadows, white background.
 */

type Brand =
  | { name: string; kind: "svg"; slug: string; color: string; heightClass?: string }
  | { name: string; sub?: string; kind: "text"; color: string; className?: string };

const BRANDS: Brand[] = [
  { name: "Philips", kind: "svg", slug: "philips", color: "0B5ED7" },
  { name: "Siemens Healthineers", kind: "svg", slug: "siemens", color: "EC6602" },
  { name: "GE HealthCare", kind: "svg", slug: "generalelectric", color: "005EB8" },
  { name: "Canon Medical", kind: "svg", slug: "canon", color: "CC0000" },
  { name: "Hitachi", kind: "svg", slug: "hitachi", color: "E60027" },
  { name: "Toshiba", kind: "svg", slug: "toshiba", color: "FF0000" },
  { name: "Shimadzu", kind: "svg", slug: "shimadzu", color: "C8161D" },
  { name: "Abbott", kind: "svg", slug: "abbott", color: "008FC7" },
  { name: "Medtronic", kind: "svg", slug: "medtronic", color: "170F5F" },
  { name: "Mindray", kind: "text", color: "#005BAC" },
  { name: "Boston Scientific", kind: "text", color: "#0072CE" },
  { name: "Esaote", kind: "text", color: "#003DA5" },
  { name: "Richard Wolf", kind: "text", color: "#C8102E" },
];

function LogoItem({ brand }: { brand: Brand }) {
  // Reference site keeps brand identity visible by default — a light grayscale
  // veil that fully clears on hover reads more premium than fully desaturated.
  const common =
    "shrink-0 opacity-80 grayscale-[35%] transition-all duration-500 hover:opacity-100 hover:grayscale-0";

  if (brand.kind === "svg") {
    return (
      <img
        src={`https://cdn.simpleicons.org/${brand.slug}/${brand.color}`}
        alt={brand.name}
        loading="lazy"
        decoding="async"
        className={`${common} h-7 w-auto object-contain sm:h-9`}
      />
    );
  }

  return (
    <span
      className={`${common} inline-flex h-7 items-center whitespace-nowrap sm:h-9`}
      style={{ color: brand.color }}
    >
      <span className="font-display text-[1.05rem] font-extrabold tracking-tight sm:text-[1.25rem]">
        {brand.name}
      </span>
    </span>
  );
}


export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="border-y border-border bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <div className="flex justify-center">
            <Eyebrow align="center">Trusted by World-Leading Medical Manufacturers</Eyebrow>
          </div>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.4rem]">
            Trusted Brands
          </h2>
        </div>
      </div>

      <div
        className="group relative mt-10 overflow-hidden sm:mt-12"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap group-hover:[animation-play-state:paused] sm:gap-20">
          {loop.map((b, i) => (
            <LogoItem key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[100rem] px-6 text-center lg:px-10">
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
