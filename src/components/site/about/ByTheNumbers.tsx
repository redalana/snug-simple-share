import { useCountUp } from "@/hooks/use-count-up";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { METRICS, type Metric } from "./data";

function MetricCard({ m, i }: { m: Metric; i: number }) {
  const { ref, value } = useCountUp(m.value);
  const Icon = m.icon;
  return (
    <Reveal delay={i * 0.06}>
      <div className="group relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06] hover:shadow-[0_30px_70px_-20px_var(--primary)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/25" />
        <div className="relative flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="relative mt-8 font-display text-[3.5rem] font-extrabold leading-none tracking-tight text-white">
          <span ref={ref} className="tabular-nums">
            {m.value >= 1900 && m.value < 2100 ? value : value.toLocaleString()}
          </span>
          <span className="text-primary">{m.suffix}</span>
        </div>
        <div className="relative mt-4 font-display text-[1.05rem] font-bold text-white">
          {m.label}
        </div>
        <div className="relative mt-1 text-[calc(13*var(--desktop-px-unit))] text-white/60">
          {m.sub}
        </div>
      </div>
    </Reveal>
  );
}

export function ByTheNumbers() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(64*var(--desktop-px-unit)) calc(64*var(--desktop-px-unit))",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow align="center" tone="light" index="12">
                By the Numbers
              </Eyebrow>
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              Engineering by the numbers.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[calc(15*var(--desktop-px-unit))] text-white/70">
              Measurable proof of the engineering discipline behind every AbuFarha installation.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
