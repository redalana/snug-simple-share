import { useState } from "react";
import { MapPinned, Radar } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { COUNTRIES, PINS, type Pin } from "../africaMapData";
import { MAP_STATS } from "./data";

export function WhereWeWork() {
  const [active, setActive] = useState<Pin | null>(null);
  const VB_X = 280,
    VB_Y = -80,
    VB_W = 780,
    VB_H = 571;
  const VISIBLE = PINS.filter(
    (p) => p.x >= VB_X && p.x <= VB_X + VB_W && p.y >= VB_Y && p.y <= VB_Y + VB_H,
  );

  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white lg:py-20">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow align="center" tone="light" index="06">
                Where We Work
              </Eyebrow>
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
              Supporting healthcare across Africa &amp; the Middle East.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[calc(15*var(--desktop-px-unit))] text-white/70">
              Local engineering teams, regional spare-parts stock and 24/7 remote support — always
              close to where you operate.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.55fr_1fr]">
          <div className="relative aspect-[41/30] overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.02_264)] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(oklch(1 0 0 / 14%) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
                backgroundSize: "calc(22*var(--desktop-px-unit)) calc(22*var(--desktop-px-unit))",
              }}
            />
            <svg
              viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
              className="absolute inset-0 h-full w-full"
            >
              {COUNTRIES.filter((c) => !c.sup).map((c) => (
                <path
                  key={c.name}
                  d={c.d}
                  fill="oklch(1 0 0 / 7%)"
                  stroke="oklch(1 0 0 / 20%)"
                  strokeWidth={0.9}
                />
              ))}
              {COUNTRIES.filter((c) => c.sup).map((c) => {
                const isA = active?.name === c.name;
                return (
                  <path
                    key={c.name}
                    d={c.d}
                    fill={
                      isA
                        ? "color-mix(in oklab, var(--primary) 78%, transparent)"
                        : "color-mix(in oklab, var(--primary) 34%, transparent)"
                    }
                    stroke="var(--primary)"
                    strokeOpacity={0.9}
                    strokeWidth={isA ? 1.4 : 0.9}
                    style={{
                      filter: isA
                        ? "drop-shadow(0 0 calc(10*var(--desktop-px-unit)) var(--primary))"
                        : undefined,
                      transition: "all .3s",
                    }}
                  />
                );
              })}
            </svg>
            {VISIBLE.map((p) => {
              const left = ((p.x - VB_X) / VB_W) * 100;
              const top = ((p.y - VB_Y) / VB_H) * 100;
              const isA = active?.name === p.name;
              return (
                <div
                  key={p.name}
                  className="absolute z-10 group"
                  style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%,-50%)" }}
                  onMouseEnter={() => setActive(p)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 animate-ping rounded-full bg-primary/60" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-primary/20 blur-md" />
                  <button
                    type="button"
                    aria-label={p.name}
                    className={`relative block rounded-full bg-primary ring-2 ring-white/70 transition-all group-hover:scale-125 ${p.hq ? "h-4 w-4 ring-2 ring-white" : "h-3 w-3"} ${isA ? "scale-125" : ""}`}
                  />
                  {p.hq && (
                    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-primary/90 px-1.5 py-0.5 text-[calc(9*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-primary-foreground">
                      HQ
                    </span>
                  )}
                  {isA && (
                    <div className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-3 w-60 -translate-x-1/2 rounded-xl border border-primary/40 bg-ink/95 p-4 text-left shadow-2xl backdrop-blur">
                      <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                        <MapPinned className="h-3.5 w-3.5 text-primary" />
                        {p.name}
                      </div>
                      <ul className="mt-2 space-y-1 text-[calc(11*var(--desktop-px-unit))] text-white/80">
                        {p.items.slice(0, 3).map((it) => (
                          <li key={it} className="flex items-start gap-1.5">
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm">
              <span className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-primary">
                Our Presence
              </span>
              <h3 className="mt-3 font-display text-[1.6rem] font-extrabold">Regional footprint</h3>
              <p className="mt-3 text-[calc(14*var(--desktop-px-unit))] leading-relaxed text-white/70">
                Permanent engineering teams across MENA and Africa deliver installation, training
                and long-term support with regional spare-parts stock and rapid dispatch.
              </p>
              {active && (
                <div className="mt-4 flex items-center gap-2 text-[calc(12*var(--desktop-px-unit))] text-white/60">
                  <Radar className="h-3.5 w-3.5 text-primary" /> Highlighting{" "}
                  <span className="font-semibold text-white">{active.name}</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MAP_STATS.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="mt-4 font-display text-2xl font-extrabold">{s.value}</div>
                  <div className="mt-1 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
