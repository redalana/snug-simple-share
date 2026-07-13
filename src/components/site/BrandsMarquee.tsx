import { Eyebrow } from "./Eyebrow";

type Brand = { name: string };

const BRANDS: Brand[] = [
  { name: "PHILIPS" },
  { name: "Siemens Healthineers" },
  { name: "GE HealthCare" },
  { name: "Canon" },
  { name: "Hitachi" },
  { name: "Mindray" },
  { name: "Toshiba" },
  { name: "Shimadzu" },
  { name: "Abbott" },
  { name: "Boston Scientific" },
  { name: "Medtronic" },
  { name: "Richard Wolf" },
  { name: "eSaote" },
];

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
            <span
              key={i}
              className="font-display text-lg font-bold tracking-tight text-ink/45 transition-colors duration-300 ease-out hover:text-ink"
            >
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
