import { Eyebrow } from "./Eyebrow";

/**
 * Manufacturer logos rendered as colored wordmark lockups using each brand's
 * authentic identity color and a small brand mark — recognizable and colored,
 * not a flat monochrome text list.
 */
type Brand = {
  name: string;
  sub?: string;
  color: string;
  /** mark shape: dot | square | ring | bars */
  mark: "dot" | "square" | "ring" | "bars";
};

const BRANDS: Brand[] = [
  { name: "PHILIPS", color: "#0B5ED7", mark: "ring" },
  { name: "SIEMENS", sub: "Healthineers", color: "#EC6602", mark: "square" },
  { name: "GE", sub: "HealthCare", color: "#005EB8", mark: "ring" },
  { name: "Canon", color: "#CC0000", mark: "dot" },
  { name: "HITACHI", color: "#E60027", mark: "square" },
  { name: "mindray", color: "#005BAC", mark: "dot" },
  { name: "TOSHIBA", color: "#FF0000", mark: "bars" },
  { name: "SHIMADZU", color: "#C8161D", mark: "square" },
  { name: "Abbott", color: "#008FC7", mark: "dot" },
  { name: "Boston Scientific", color: "#0072CE", mark: "ring" },
  { name: "Medtronic", color: "#170F5F", mark: "bars" },
  { name: "RICHARD WOLF", color: "#C8102E", mark: "square" },
  { name: "esaote", color: "#003DA5", mark: "dot" },
];

function Mark({ brand }: { brand: Brand }) {
  const c = brand.color;
  switch (brand.mark) {
    case "square":
      return <span className="h-4 w-4 rounded-[3px]" style={{ backgroundColor: c }} />;
    case "ring":
      return (
        <span
          className="h-4 w-4 rounded-full border-[3px]"
          style={{ borderColor: c }}
        />
      );
    case "bars":
      return (
        <span className="flex items-end gap-[2px]">
          <span className="h-2.5 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-4 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
          <span className="h-3 w-[3px] rounded-sm" style={{ backgroundColor: c }} />
        </span>
      );
    default:
      return <span className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: c }} />;
  }
}

function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap opacity-90 transition-opacity duration-300 hover:opacity-100">
      <Mark brand={brand} />
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-lg font-extrabold tracking-tight"
          style={{ color: brand.color }}
        >
          {brand.name}
        </span>
        {brand.sub && (
          <span
            className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: brand.color, opacity: 0.75 }}
          >
            {brand.sub}
          </span>
        )}
      </span>
    </span>
  );
}

export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-8">
          <Eyebrow align="center">Trusted by World-Leading Manufacturers</Eyebrow>
        </div>
      </div>
      <div className="marquee-mask relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {loop.map((b, i) => (
            <BrandLogo key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
