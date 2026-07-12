import { useState } from "react";
import { ArrowRight, Globe } from "lucide-react";
import { COUNTRIES, PINS, type Pin } from "./africaMapData";

const STATS = [
  { value: "40+", label: "Countries Served" },
  { value: "310+", label: "Projects Delivered" },
];

// Cropped viewBox focused on Africa & the Middle East (matches the design spec).
const VB_X = 90;
const VB_Y = 120;
const VB_W = 658;
const VB_H = 480;

// Pins that fall within the cropped region.
const VISIBLE_PINS = PINS.filter(
  (p) => p.x >= VB_X && p.x <= VB_X + VB_W && p.y >= VB_Y && p.y <= VB_Y + VB_H,
);

// Country names that show a static map label in the spec.
const LABELLED = new Set(["Egypt", "Saudi Arabia", "Nigeria", "Kenya"]);

export function GlobalPresence() {
  const [active, setActive] = useState<Pin | null>(null);

  return (
    <section id="coverage" className="bg-secondary/50 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Global Reach
            </span>
            <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Proudly serving healthcare
              <br />
              providers worldwide.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
          >
            View all countries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Dark dashboard container */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-ink p-3 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.55)] sm:p-4 lg:p-5">
          {/* ambient red glows */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_var(--primary),transparent_70%)] opacity-20 blur-2xl" />
          <div className="pointer-events-none absolute left-[52%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--primary),transparent_70%)] opacity-20 blur-2xl" />

          <div className="relative grid gap-4 lg:grid-cols-[1.55fr_1fr] lg:gap-6">
            {/* Left: interactive map panel */}
            <div className="relative aspect-[41/30] overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.16_0.02_264)]">
              {/* dotted grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: "radial-gradient(oklch(1 0 0 / 14%) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* red ambient lighting behind active regions */}
              <div className="pointer-events-none absolute left-[55%] top-[48%] h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--primary),transparent_65%)] opacity-30 blur-2xl" />

              <svg
                viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-label="Map of AbuFarha coverage across Africa and the Middle East"
              >
                {/* inactive countries — legible real geography */}
                {COUNTRIES.filter((c) => !c.sup).map((c) => (
                  <path
                    key={c.name}
                    d={c.d}
                    fill="oklch(1 0 0 / 7%)"
                    stroke="oklch(1 0 0 / 20%)"
                    strokeWidth={0.9}
                    strokeLinejoin="round"
                  />
                ))}

                {/* supported countries — glowing red */}
                {COUNTRIES.filter((c) => c.sup).map((c) => {
                  const isActive = active?.name === c.name;
                  return (
                    <path
                      key={c.name}
                      d={c.d}
                      fill={
                        isActive
                          ? "color-mix(in oklab, var(--primary) 70%, transparent)"
                          : "color-mix(in oklab, var(--primary) 34%, transparent)"
                      }
                      stroke="var(--primary)"
                      strokeOpacity={0.85}
                      strokeWidth={0.9}
                      strokeLinejoin="round"
                      style={{
                        filter: isActive ? "drop-shadow(0 0 6px var(--primary))" : undefined,
                        transition: "fill 0.25s ease",
                      }}
                    />
                  );
                })}
              </svg>

              {/* glowing pins, labels + tooltips */}
              {VISIBLE_PINS.map((p) => {
                const left = ((p.x - VB_X) / VB_W) * 100;
                const top = ((p.y - VB_Y) / VB_H) * 100;
                const isActive = active?.name === p.name;
                const flip = top < 30;
                return (
                  <div
                    key={p.name}
                    className="absolute z-10"
                    style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
                    onMouseEnter={() => setActive(p)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/50 ${
                        p.hq ? "h-4 w-4" : "h-3 w-3"
                      }`}
                      style={{ animationDelay: `${(p.x % 7) * 0.2}s` }}
                    />
                    <button
                      type="button"
                      aria-label={p.name}
                      className={`relative block cursor-pointer rounded-full bg-primary shadow-[0_0_10px_2px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-transform hover:scale-125 ${
                        p.hq ? "h-3.5 w-3.5 ring-2 ring-white/70" : "h-2.5 w-2.5 ring-1 ring-white/50"
                      }`}
                    />

                    {/* static spec label */}
                    {LABELLED.has(p.name) && (
                      <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink/70 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                        {p.name}
                      </span>
                    )}

                    {/* hover tooltip */}
                    <div
                      className={`pointer-events-none absolute left-1/2 z-20 w-52 -translate-x-1/2 rounded-xl border border-white/15 bg-ink/80 p-3.5 text-left shadow-[0_20px_40px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-200 ${
                        flip ? "top-full mt-3" : "bottom-full mb-3"
                      } ${isActive ? "opacity-100" : "translate-y-1 opacity-0"}`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-sm font-bold text-white">{p.name}</span>
                        {p.hq && (
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary-foreground">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="mt-2.5 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between">
                          <span className="text-white/55">Projects completed</span>
                          <span className="font-bold text-white">{p.projects}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/55">Hospitals served</span>
                          <span className="font-bold text-white">{p.hospitals}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/55">Equipment installed</span>
                          <span className="font-bold text-white">{p.equipment}</span>
                        </div>
                      </div>
                      {flip ? (
                        <span className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 border-x-[6px] border-b-[6px] border-x-transparent border-b-ink/80" />
                      ) : (
                        <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[6px] border-t-[6px] border-x-transparent border-t-ink/80" />
                      )}
                    </div>
                  </div>
                );
              })}

              {/* countries-served pill */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/60 px-3.5 py-1.5 text-[11px] font-medium text-white/75 shadow-sm backdrop-blur-md">
                <Globe className="h-3.5 w-3.5" />
                40+ countries served
              </div>
            </div>

            {/* Right: live footprint content */}
            <div className="flex flex-col justify-between px-2 py-3 lg:px-4 lg:py-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  Live Footprint
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.01em] text-white sm:text-[1.75rem]">
                  Africa &amp; the Middle East
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  Local engineers and regional support teams keep every installation
                  running — wherever your facility operates.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="font-display text-3xl font-extrabold text-white">{s.value}</div>
                      <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/45">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-semibold text-white">
                  Active installations{" "}
                  <span className="font-normal text-white/50">· updated in real time</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
