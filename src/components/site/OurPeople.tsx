import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Eyebrow } from "./Eyebrow";
import { SECTION_CONTAINER } from "./section-grid";
import teamPhoto from "@/assets/abufarha-team.jpg.asset.json";

/**
 * Trust section — one panoramic team photograph with invisible per-person
 * hotspots. Hotspot coordinates are percentages of the rendered frame, so they
 * stay correct at every breakpoint. Add one entry per visible person when the
 * full team panorama replaces the current photograph.
 */
type Hotspot = {
  id: string;
  name: string;
  role: string;
  /** Centre of the person's head/torso, in % of the frame. */
  x: number;
  y: number;
  /** Hotspot size in % of the frame. */
  w: number;
  h: number;
  /** Hidden on tablet when hotspot density must be reduced. */
  secondary?: boolean;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "founder",
    name: "Dr. Walid AbuFarha",
    role: "Founder & CEO",
    x: 50,
    y: 50,
    w: 16,
    h: 88,
  },
];

export function OurPeople() {
  const [active, setActive] = useState<string | null>(null);
  const activePerson = HOTSPOTS.find((h) => h.id === active) ?? null;

  return (
    <section id="our-people" aria-labelledby="our-people-title" className="bg-white py-16 lg:py-20">
      <div className={SECTION_CONTAINER}>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <Eyebrow index="06">Our People</Eyebrow>
            <h2
              id="our-people-title"
              className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]"
            >
              Meet the Team Behind Every Successful Healthcare Project
            </h2>
            <p className="mt-4 max-w-2xl text-[calc(15*var(--desktop-px-unit))] leading-[1.75] text-muted-foreground">
              Our biomedical engineers, project managers and technical specialists work together to
              deliver healthcare technology safely, efficiently and with long-term commitment across
              Africa and the Middle East.
            </p>
          </div>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* One photograph, one link, no cards. */}
        <Link
          to="/about"
          aria-label="Meet the AbuFarha Medical Supplies team"
          onMouseLeave={() => setActive(null)}
          className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-(--shadow-editorial-lg) ring-1 ring-black/5 sm:aspect-[16/9] lg:aspect-[21/9]"
        >
          <img
            src={teamPhoto.url}
            alt="The AbuFarha Medical Supplies engineering team"
            width={871}
            height={1250}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Dim the rest of the photograph while a person is focused. */}
          <div
            aria-hidden
            className={`absolute inset-0 bg-ink/25 transition-opacity duration-[220ms] ease-out ${
              activePerson ? "opacity-100" : "opacity-0"
            }`}
          />

          {HOTSPOTS.map((h) => {
            const isActive = active === h.id;
            return (
              <span
                key={h.id}
                role="presentation"
                onMouseEnter={() => setActive(h.id)}
                onFocus={() => setActive(h.id)}
                onTouchStart={() => setActive(h.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-[999px] transition-all duration-[220ms] ease-out ${
                  isActive
                    ? "bg-white/[0.07] ring-1 ring-white/60 shadow-[0_0_40px_rgba(255,255,255,0.18)] backdrop-brightness-[1.18]"
                    : "ring-0"
                } ${h.secondary ? "hidden lg:block" : ""}`}
                style={{
                  left: `${h.x}%`,
                  top: `${h.y}%`,
                  width: `${h.w}%`,
                  height: `${h.h}%`,
                }}
              />
            );
          })}

          {/* Floating name card — beside the person on desktop, from the bottom on mobile. */}
          <div
            aria-hidden={!activePerson}
            className={`pointer-events-none absolute inset-x-4 bottom-4 z-10 transition-all duration-[220ms] ease-out sm:inset-x-auto sm:bottom-auto ${
              activePerson ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={
              activePerson
                ? {
                    // sm+ : anchored beside the hotspot.
                    ["--card-left" as string]: `${activePerson.x}%`,
                    ["--card-top" as string]: `${activePerson.y}%`,
                  }
                : undefined
            }
          >
            <div className="sm:absolute sm:left-[var(--card-left)] sm:top-[var(--card-top)] sm:ml-[9%] sm:w-max sm:-translate-y-1/2">
              <div className="rounded-xl border border-white/15 bg-ink/85 px-4 py-3 backdrop-blur">
                <p className="font-display text-base font-extrabold leading-tight text-white">
                  {activePerson?.name ?? ""}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {activePerson?.role ?? ""}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
