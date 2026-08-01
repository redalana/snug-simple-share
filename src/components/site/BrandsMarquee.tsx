import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

import abbott from "@/assets/brands/abbott.png";
import boston from "@/assets/brands/boston-scientific.png";
import canon from "@/assets/brands/toshiba-canon.png";
import esaote from "@/assets/brands/esaote.png";
import ge from "@/assets/brands/ge.png";
import hitachi from "@/assets/brands/hitachi.png";
import medtronic from "@/assets/brands/medtronic.png";
import mindray from "@/assets/brands/mindray.png";
import philips from "@/assets/brands/philips.png";
import richardWolf from "@/assets/brands/richard-wolf.png";
import shimadzu from "@/assets/brands/shimadzu.png";
import siemens from "@/assets/brands/siemens.png";

/**
 * Trusted Brands — enterprise logo marquee.
 *
 * Official PNG wordmarks are trimmed of transparent padding at build time so
 * every logo lands in an identical 56px container. Per-brand optical scale
 * multipliers correct for wordmark density so no single logo dominates.
 */

type Brand = {
  name: string;
  alt: string;
  url: string;
  /**
   * Rendered logo height in px on desktop. Calibrated per-logo by measuring
   * the trimmed PNG's ink area (non-transparent pixel count) so every
   * wordmark carries equal visual weight regardless of native pixel size.
   */
  h: number;
};

// Heights chosen so each logo occupies ~equal ink area when rendered.
// Reduced: Toshiba/Canon, Hitachi, Shimadzu (thin/wide wordmarks).
// Boosted: Esaote, Richard Wolf, Boston Scientific (compact wordmarks).
const BRANDS: Brand[] = [
  { name: "Philips", alt: "Philips", url: philips, h: 22 },
  { name: "Siemens Healthineers", alt: "Siemens Healthineers", url: siemens, h: 20 },
  { name: "GE HealthCare", alt: "GE HealthCare", url: ge, h: 40 },
  { name: "Canon Medical", alt: "Canon Medical (Toshiba)", url: canon, h: 22 },
  { name: "Mindray", alt: "Mindray", url: mindray, h: 34 },
  { name: "Esaote", alt: "Esaote", url: esaote, h: 42 },
  { name: "Richard Wolf", alt: "Richard Wolf", url: richardWolf, h: 36 },
  { name: "Hitachi", alt: "Hitachi", url: hitachi, h: 24 },
  { name: "Shimadzu", alt: "Shimadzu", url: shimadzu, h: 26 },
  { name: "Abbott", alt: "Abbott", url: abbott, h: 34 },
  { name: "Medtronic", alt: "Medtronic", url: medtronic, h: 40 },
  { name: "Boston Scientific", alt: "Boston Scientific", url: boston, h: 44 },
];

function LogoItem({ brand }: { brand: Brand }) {
  // Container is a fixed 56px slot; logo renders at its calibrated optical
  // height and is vertically centered. Width auto → native aspect ratio,
  // no clipping, no distortion.
  return (
    <div className="flex h-14 shrink-0 items-center justify-center">
      <img
        src={brand.url}
        alt={brand.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="w-auto select-none object-contain"
        style={{
          height: `clamp(${Math.round(brand.h * 0.75)}px, ${brand.h / 16}rem, ${brand.h}px)`,
        }}
      />
    </div>
  );
}

export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="border-y border-border bg-white py-14">
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
        className="marquee-mask group relative mt-8 overflow-hidden"
        aria-label="Trusted medical technology brands"
      >
        <ul
          className="animate-marquee flex w-max items-center gap-x-10 whitespace-nowrap sm:gap-x-14 lg:gap-x-[72px] group-hover:[animation-play-state:paused]"
          style={{ transform: "translateZ(0)" }}
        >
          {loop.map((b, i) => (
            <li key={`${b.name}-${i}`} aria-hidden={i >= BRANDS.length ? true : undefined}>
              <LogoItem brand={b} />
            </li>
          ))}
        </ul>
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
