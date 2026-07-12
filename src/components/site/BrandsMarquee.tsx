const BRANDS = [
  "PHILIPS",
  "Siemens Healthineers",
  "GE HealthCare",
  "Canon",
  "Hitachi",
  "Mindray",
  "Toshiba",
  "Shimadzu",
  "Abbott",
  "Boston Scientific",
  "Medtronic",
  "Richard Wolf",
  "eSaote",
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
              className="font-display text-lg font-bold tracking-tight text-foreground/35 transition-colors hover:text-primary"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
