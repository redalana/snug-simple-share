import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { JOURNEY } from "./data";

export function Journey() {
  return (
    <section className="bg-white py-24 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="02">Our Journey</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              25 years of engineering healthcare progress.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              From a single engineering office to a regional medical-technology partner trusted by leading hospitals across two continents.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line — stronger */}
          <div className="pointer-events-none absolute left-10 right-10 top-[calc(104*var(--desktop-px-unit))] hidden lg:block">
            <div className="h-[calc(3*var(--desktop-px-unit))] w-full rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute inset-0 h-[calc(3*var(--desktop-px-unit))] rounded-full bg-primary/30 blur-[calc(6*var(--desktop-px-unit))]" />
          </div>

          <div className="grid gap-14 lg:grid-cols-6 lg:gap-6">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.year} delay={i * 0.06}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-[0_28px_60px_-20px_rgba(0,0,0,0.4)] ring-1 ring-border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_36px_70px_-20px_rgba(0,0,0,0.55)] group-hover:ring-primary/60">
                      <img src={j.img} alt={j.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={260} height={260} />
                    </div>
                    <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-white shadow-[0_0_0_2px_var(--primary)] transition-all group-hover:scale-125" />
                  </div>
                  <div className="mt-8 font-display text-[1.75rem] font-extrabold tracking-tight text-primary">{j.year}</div>
                  <div className="mt-1 font-display text-lg font-bold text-ink">{j.title}</div>
                  <p className="mt-3 max-w-[calc(240*var(--desktop-px-unit))] text-[calc(13.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                    {j.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
