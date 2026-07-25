import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { STEPS } from "./data";

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(56*var(--desktop-px-unit)) calc(56*var(--desktop-px-unit))",
        }}
      />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow align="center" tone="light" index="04">
                How We Work
              </Eyebrow>
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              A seven-step engineering process.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="pointer-events-none absolute left-10 right-10 top-[calc(52*var(--desktop-px-unit))] hidden lg:block">
            <div className="h-[calc(2*var(--desktop-px-unit))] w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="absolute inset-0 h-[calc(2*var(--desktop-px-unit))] bg-primary/40 blur-md" />
          </div>
          <ol className="grid gap-10 lg:grid-cols-7 lg:gap-3">
            {STEPS.map((s, i) => (
              <li key={s.n} className="min-w-0">
                <Reveal delay={i * 0.05}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative flex h-[calc(108*var(--desktop-px-unit))] w-[calc(108*var(--desktop-px-unit))] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_20px_50px_-10px_var(--primary)]">
                      <s.icon
                        className="h-8 w-8 text-white/80 transition-colors group-hover:text-primary"
                        strokeWidth={1.5}
                      />
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-0.5 font-display text-[calc(10*var(--desktop-px-unit))] font-extrabold text-primary-foreground shadow-[0_6px_14px_-4px_var(--primary)]">
                        {s.n}
                      </span>
                    </div>
                    <div className="mt-6 font-display font-bold text-white">{s.title}</div>
                    <p className="mt-2 text-[calc(12.5*var(--desktop-px-unit))] leading-relaxed text-white/60">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
