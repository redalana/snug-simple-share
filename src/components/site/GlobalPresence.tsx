import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { COUNTRIES, PINS, MAP_W, MAP_H, type Pin } from "./africaMapData";

const COVERAGE = [
  { value: "40+", label: "Countries" },
  { value: "250+", label: "Hospitals" },
  { value: "1500+", label: "Equipment Installed" },
  { value: "25+", label: "Years of Partnership" },
];

const PIN_BY_NAME = new Map(PINS.map((p) => [p.name, p]));

export function GlobalPresence() {
  const [active, setActive] = useState<Pin | null>(null);

  return (
    <section id="coverage" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <Eyebrow index="04">Global Presence</Eyebrow>
          <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.45rem]">
            Serving Hospitals Across Africa &amp; the Middle East
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            From North Africa to South Asia, we support healthcare providers with world-class
            technology, local engineering teams and dependable after-sales coverage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COVERAGE.map((c) => (
              <div key={c.label} className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="font-display text-2xl font-extrabold text-primary">{c.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">{c.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Explore Our Coverage
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Real geographic map — dark premium enterprise style */}
        <div className="relative aspect-[41/30] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink to-[oklch(0.22_0.03_264)] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)]">
          {/* red ambient lighting behind active regions */}
          <div className="pointer-events-none absolute left-[45%] top-[38%] h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_var(--primary),transparent_65%)] opacity-25 blur-2xl" />
          {/* subtle coordinate grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Map of AbuFarha coverage across Africa, the Middle East and Central Asia"
          >
            <defs>
              <filter id="pinGlow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* inactive countries — legible real geography */}
            {COUNTRIES.filter((c) => !c.sup).map((c) => (
              <path
                key={c.name}
                d={c.d}
                fill="oklch(1 0 0 / 9%)"
                stroke="oklch(1 0 0 / 24%)"
                strokeWidth={0.9}
                strokeLinejoin="round"
              />
            ))}

            {/* supported countries — glowing red */}
            {COUNTRIES.filter((c) => c.sup).map((c) => {
              const pin = PIN_BY_NAME.get(c.name);
              const isActive = active?.name === c.name;
              return (
                <path
                  key={c.name}
                  d={c.d}
                  fill={
                    isActive
                      ? "color-mix(in oklab, var(--primary) 68%, transparent)"
                      : "color-mix(in oklab, var(--primary) 34%, transparent)"
                  }
                  stroke="var(--primary)"
                  strokeOpacity={0.85}
                  strokeWidth={0.8}
                  style={{
                    filter: isActive ? "drop-shadow(0 0 6px var(--primary))" : undefined,
                    transition: "fill 0.25s ease",
                    cursor: pin ? "pointer" : "default",
                  }}
                  onMouseEnter={() => pin && setActive(pin)}
                  onMouseLeave={() => setActive(null)}
                />
              );
            })}
          </svg>

          {/* glowing pulsing pins + tooltips (HTML overlay for crisp pulse) */}
          {PINS.map((p) => {
            const left = (p.x / MAP_W) * 100;
            const top = (p.y / MAP_H) * 100;
            const isActive = active?.name === p.name;
            const flip = top < 32; // near top edge → show tooltip below the pin
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

                {/* elegant floating glassmorphism tooltip */}
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

          {/* legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-full border border-white/15 bg-ink/60 px-3.5 py-1.5 text-[11px] font-medium text-white/70 shadow-sm backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-white/50" /> Headquarters
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-primary/80" /> Active coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
