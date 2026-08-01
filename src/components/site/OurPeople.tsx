import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Eyebrow } from "./Eyebrow";
import { SECTION_CONTAINER } from "./section-grid";
import teamPhoto from "@/assets/abufarha-team.jpg.asset.json";

/**
 * Trust section — one photograph with invisible per-person hotspots.
 *
 * The interaction is pure CSS (hover / active on the hotspot, `group-has-*`
 * for the dim layer) so it works instantly, with no JS state and no risk of
 * layout shift. Hotspot coordinates are percentages of the rendered frame, so
 * they stay correct at every breakpoint. Add one entry per visible person.
 */
type Hotspot = {
  id: string;
  name: string;
  role: string;
  /** Centre of the person, in % of the frame. */
  x: number;
  y: number;
  /** Hotspot size in % of the frame. */
  w: number;
  h: number;
  /** Hidden below `lg` where hotspot density must be reduced. */
  secondary?: boolean;
};

const HOTSPOTS: Hotspot[] = [
  { id: "founder", name: "Dr. Walid AbuFarha", role: "Founder & CEO", x: 50, y: 50, w: 17, h: 90 },
];

export function OurPeople() {
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

        {/* One photograph, one link — no cards, no collage, no split layout. */}
        <Link
          to="/about"
          aria-label="Meet the AbuFarha Medical Supplies team"
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

          {/* Rest of the photograph darkens while one person is focused. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-[220ms] ease-out group-has-[.af-person:hover]:opacity-100 group-has-[.af-person:active]:opacity-100"
          />

          {HOTSPOTS.map((h) => (
            <span
              key={h.id}
              className={`af-person group/person absolute -translate-x-1/2 -translate-y-1/2 rounded-[999px] ring-0 ring-white/60 transition-all duration-[220ms] ease-out hover:bg-white/[0.10] hover:ring-1 hover:shadow-[0_0_36px_rgba(255,255,255,0.20)] active:bg-white/[0.10] active:ring-1 ${
                h.secondary ? "hidden lg:block" : ""
              }`}
              style={{ left: `${h.x}%`, top: `${h.y}%`, width: `${h.w}%`, height: `${h.h}%` }}
            >
              {/* Floating name card — beside the person, below it on mobile. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 block w-max max-w-[70vw] -translate-x-1/2 translate-y-2 rounded-xl border border-white/15 bg-ink/85 px-4 py-3 opacity-0 backdrop-blur transition-all duration-[220ms] ease-out group-hover/person:translate-y-0 group-hover/person:opacity-100 group-active/person:translate-y-0 group-active/person:opacity-100 sm:left-full sm:top-1/2 sm:mt-0 sm:ml-4 sm:-translate-x-0 sm:-translate-y-[calc(50%-8px)] sm:group-hover/person:-translate-y-1/2 sm:group-active/person:-translate-y-1/2"
              >
                <span className="block font-display text-base font-extrabold leading-tight text-white">
                  {h.name}
                </span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-white/70">
                  {h.role}
                </span>
              </span>
            </span>
          ))}
        </Link>
      </div>
    </section>
  );
}
