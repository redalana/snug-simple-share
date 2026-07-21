import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

import abbott from "@/assets/brands/abbott.png.asset.json";
import boston from "@/assets/brands/boston-scientific.png.asset.json";
import canon from "@/assets/brands/toshiba-canon.png.asset.json";
import esaote from "@/assets/brands/esaote.png.asset.json";
import ge from "@/assets/brands/ge.png.asset.json";
import hitachi from "@/assets/brands/hitachi.png.asset.json";
import medtronic from "@/assets/brands/medtronic.png.asset.json";
import mindray from "@/assets/brands/mindray.png.asset.json";
import philips from "@/assets/brands/philips.png.asset.json";
import richardWolf from "@/assets/brands/richard-wolf.png.asset.json";
import shimadzu from "@/assets/brands/shimadzu.png.asset.json";
import siemens from "@/assets/brands/siemens.png.asset.json";

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
  /** Optical scale multiplier applied to the max rendered height. */
  scale: number;
};

const BRANDS: Brand[] = [
  { name: "Philips",             alt: "Philips",                 url: philips.url,     scale: 0.78 },
  { name: "Siemens Healthineers",alt: "Siemens Healthineers",    url: siemens.url,     scale: 0.82 },
  { name: "GE HealthCare",       alt: "GE HealthCare",           url: ge.url,          scale: 0.95 },
  { name: "Canon Medical",       alt: "Canon Medical (Toshiba)", url: canon.url,       scale: 1.00 },
  { name: "Mindray",             alt: "Mindray",                 url: mindray.url,     scale: 0.92 },
  { name: "Esaote",              alt: "Esaote",                  url: esaote.url,      scale: 1.05 },
  { name: "Richard Wolf",        alt: "Richard Wolf",            url: richardWolf.url, scale: 1.00 },
  { name: "Hitachi",             alt: "Hitachi",                 url: hitachi.url,     scale: 0.86 },
  { name: "Shimadzu",            alt: "Shimadzu",                url: shimadzu.url,    scale: 0.82 },
  { name: "Abbott",              alt: "Abbott",                  url: abbott.url,      scale: 0.90 },
  { name: "Medtronic",           alt: "Medtronic",               url: medtronic.url,   scale: 0.90 },
  { name: "Boston Scientific",   alt: "Boston Scientific",       url: boston.url,      scale: 1.00 },
];

function LogoItem({ brand }: { brand: Brand }) {
  const maxH = Math.round(48 * brand.scale);
  return (
    <div
      className="flex h-14 shrink-0 items-center justify-center"
      // Per-viewport gap is applied via parent's gap-x utilities; item itself has no side padding.
    >
      <img
        src={brand.url}
        alt={brand.alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="w-auto select-none object-contain"
        style={{ maxHeight: `${maxH}px`, height: `${maxH}px` }}
      />
    </div>
  );
}

export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="border-y border-border bg-white py-20">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-10">
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
        className="marquee-mask group relative mt-10 overflow-hidden"
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

      <div className="mx-auto mt-10 max-w-[90rem] px-6 text-center lg:px-10">
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
