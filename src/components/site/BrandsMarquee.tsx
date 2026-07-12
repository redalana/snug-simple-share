import { Eyebrow } from "./Eyebrow";

type Brand = { name: string; color: string };

const BRANDS: Brand[] = [
  { name: "PHILIPS", color: "#0B5ED7" },
  { name: "Siemens Healthineers", color: "#009999" },
  { name: "GE HealthCare", color: "#6E2B8B" },
  { name: "Canon", color: "#CC0000" },
  { name: "Hitachi", color: "#E60027" },
  { name: "Mindray", color: "#E2231A" },
  { name: "Toshiba", color: "#E60012" },
  { name: "Shimadzu", color: "#004098" },
  { name: "Abbott", color: "#008FC7" },
  { name: "Boston Scientific", color: "#0057B8" },
  { name: "Medtronic", color: "#170F5F" },
  { name: "Richard Wolf", color: "#1D4E9C" },
  { name: "eSaote", color: "#D51317" },
];

export function BrandsMarquee() {
  const loop = [...BRANDS, ...BRANDS];
  return (
    <section id="brands" className="border-y border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <Eyebrow align="center">Trusted by World-Leading Manufacturers</Eyebrow>
        </div>
      </div>
      <div className="marquee-mask relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
          {loop.map((b, i) => (
            <span
              key={i}
              className="font-display text-lg font-bold tracking-tight opacity-[0.85] transition-all duration-300 ease-out hover:opacity-100 hover:brightness-110"
              style={{ color: b.color }}
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
