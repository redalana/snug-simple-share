import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  WORLD_COUNTRY_PATHS,
  WORLD_MAP_W,
  WORLD_MAP_H,
  SPHERE_D,
} from "./projects-experience/worldMapFull";

const STATS = [
  { value: "10", label: "Countries — Verified Project History" },
  { value: "110+", label: "Systems & Programs Delivered" },
];

/**
 * Per-country map configuration, keyed by Natural Earth country name
 * (e.g. "Jordan"). Intentionally empty: add verified entries here later to
 * highlight a country. Marker/tooltip fields can be rendered from this same
 * record when verified data exists.
 */
type CountryMapData = { highlighted?: boolean; marker?: boolean; details?: string[] };
const COUNTRY_DATA: Record<string, CountryMapData> = {};

export function GlobalPresence() {
  return (
    <section id="coverage" className="bg-secondary/50 py-16 lg:py-20">
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
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
                  backgroundImage:
                    "radial-gradient(oklch(1 0 0 / 14%) calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
                  backgroundSize: "calc(22*var(--desktop-px-unit)) calc(22*var(--desktop-px-unit))",
                }}
              />
              <svg
                viewBox={`0 0 ${WORLD_MAP_W} ${WORLD_MAP_H}`}
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full p-3 sm:p-5"
                role="img"
                aria-label="World map"
              >
                <path d={SPHERE_D} fill="oklch(1 0 0 / 3%)" stroke="oklch(1 0 0 / 12%)" strokeWidth={0.8} />
                {WORLD_COUNTRY_PATHS.map((c, i) => {
                  const data = COUNTRY_DATA[c.name];
                  return (
                    <path
                      key={`${c.name}-${i}`}
                      d={c.d}
                      fill={
                        data?.highlighted
                          ? "color-mix(in oklab, var(--primary) 34%, transparent)"
                          : "oklch(1 0 0 / 7%)"
                      }
                      stroke={data?.highlighted ? "var(--primary)" : "oklch(1 0 0 / 20%)"}
                      strokeWidth={0.6}
                      strokeLinejoin="round"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Right: live footprint content */}
            <div className="flex flex-col justify-between px-2 py-3 lg:px-4 lg:py-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Verified Footprint
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.01em] text-white sm:text-[1.75rem]">
                  Middle East, Africa &amp; Asia
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                  A real, documented delivery record — heart centers, imaging, IVF and LASIK systems
                  installed and supported across 10 countries.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <div className="font-display text-3xl font-extrabold text-white">
                        {s.value}
                      </div>
                      <div className="mt-1.5 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-white/55">
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
