import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Eyebrow } from "./Eyebrow";
import { SECTION_CONTAINER } from "./section-grid";
import portrait1 from "@/assets/team-portrait-1.jpg.asset.json";
import portrait2 from "@/assets/team-portrait-2.jpg.asset.json";
import panelEngineering from "@/assets/aftersales-engineering.jpg";
import panelTeam from "@/assets/about-team.jpg";
import panelEngineer from "@/assets/aftersales-remote-engineer.jpg";

/**
 * One panoramic, panel-based team composition.
 *
 * The row is a flexbox where every panel is `flex-1 basis-0`; the hovered panel
 * grows and its neighbours narrow automatically, so the full width is always
 * filled — no cards, no gaps, no empty grey. Interaction is CSS-only (no state,
 * no layout shift). Add a member to `TEAM` and the panel appears; nothing else
 * needs to change.
 */
type Member = {
  id: string;
  name: string;
  position: string;
  image: string;
  /** Vertical focal point so faces are never cropped aggressively. */
  focus?: string;
  /** Optional per-image grade so all portraits read as one composition. */
  grade?: string;
  /** Panels beyond the third are hidden on tablet (3-panel layout). */
  tier?: 1 | 2;
};

const TEAM: Member[] = [
  {
    id: "founder",
    name: "Dr. Walid AbuFarha",
    position: "Founder & Chief Executive Officer",
    image: portrait1.url,
    focus: "50% 22%",
  },
  {
    id: "operations",
    name: "Eng. Mohammad AbuFarha",
    position: "Head of Technical Operations",
    image: portrait2.url,
    focus: "50% 26%",
    grade: "saturate-[0.7] brightness-[1.04] contrast-[1.06]",
  },
  {
    id: "biomedical",
    name: "Biomedical Engineering",
    position: "Installation & Commissioning",
    image: panelEngineering,
    focus: "50% 40%",
  },
  {
    id: "service",
    name: "Service Engineering",
    position: "Preventive & Corrective Maintenance",
    image: panelTeam,
    focus: "50% 45%",
    tier: 2,
  },
  {
    id: "support",
    name: "Technical Support",
    position: "Remote Diagnostics & Clinical Training",
    image: panelEngineer,
    focus: "50% 35%",
    tier: 2,
  },
];

export function OurPeople() {
  return (
    <section id="our-people" aria-labelledby="our-people-title" className="bg-white py-16 lg:py-20">
      <div className={SECTION_CONTAINER}>
        <div className="mb-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 lg:mb-12">
          <div className="min-w-0">
            <Eyebrow index="06">Our People</Eyebrow>
            <h2
              id="our-people-title"
              className="mt-4 max-w-3xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]"
            >
              Meet the Team Behind Every Successful Healthcare Project
            </h2>
            <p className="mt-4 max-w-2xl text-[calc(15*var(--desktop-px-unit))] leading-[1.75] text-muted-foreground">
              Our biomedical engineers, project managers and healthcare specialists work together to
              deliver advanced medical technology projects across Africa and the Middle East.
            </p>
          </div>
          <Link
            to="/about"
            className="group inline-flex shrink-0 items-center gap-2 self-end whitespace-nowrap text-sm font-bold text-primary"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* One continuous composition: scroll-snap strip on mobile, flex panels above. */}
        <div className="overflow-hidden rounded-2xl shadow-(--shadow-editorial-lg) ring-1 ring-black/5">
          <div className="flex h-[26rem] snap-x snap-mandatory overflow-x-auto sm:h-[30rem] md:overflow-x-hidden lg:h-[34rem]">
            {TEAM.map((m) => (
              <Link
                key={m.id}
                to="/about"
                aria-label={`${m.name} — ${m.position}. Meet our team`}
                className={`group relative block h-full min-w-[72%] shrink-0 snap-start overflow-hidden bg-ink transition-[flex-grow] duration-[350ms] ease-out focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white md:min-w-0 md:flex-1 md:basis-0 md:hover:grow-[2.2] md:focus-visible:grow-[2.2] ${
                  m.tier === 2 ? "md:hidden lg:block" : ""
                }`}
              >
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.position} at AbuFarha Medical Supplies`}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover contrast-[1.03] saturate-[0.92] ${m.grade ?? ""} transition-transform duration-[350ms] ease-out group-hover:scale-[1.05]`}
                  style={{ objectPosition: m.focus ?? "50% 30%" }}
                />

                {/* Seam between panels keeps the strip continuous, not card-like. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 z-10 w-px bg-white/12"
                />

                {/* Base grade unifies the portraits; overlay deepens on hover. */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/10"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-ink/[0.55] opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-100"
                />

                <div className="absolute inset-x-0 bottom-0 z-10 p-5 lg:p-6">
                  <p className="font-display text-[1.0625rem] font-extrabold leading-tight text-white opacity-100 transition-all duration-[350ms] ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    {m.name}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/75 transition-all delay-[40ms] duration-[350ms] ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    {m.position}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white transition-all delay-[80ms] duration-[350ms] ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                    View Profile
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
