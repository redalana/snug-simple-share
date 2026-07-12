import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Cpu,
  Building2,
  ScanLine,
  Hospital,
  MessageSquareQuote,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import hq from "@/assets/experience-hq.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type VisitPoint = {
  id: string;
  title: string;
  icon: LucideIcon;
  /** Focal area within the panorama, in % of the frame. */
  x: number;
  y: number;
};

const VISIT_POINTS: VisitPoint[] = [
  { id: "physicians", title: "Meet Our Physicians", icon: Stethoscope, x: 30, y: 42 },
  { id: "engineers", title: "Meet Biomedical Engineers", icon: Cpu, x: 60, y: 55 },
  { id: "facilities", title: "Tour Engineering Facilities", icon: Building2, x: 50, y: 48 },
  { id: "technologies", title: "Explore Medical Technologies", icon: ScanLine, x: 20, y: 62 },
  { id: "hospitals", title: "Visit Partner Hospitals", icon: Hospital, x: 78, y: 45 },
  { id: "knowledge", title: "Exchange Knowledge", icon: MessageSquareQuote, x: 88, y: 60 },
];

const TRUST_FACTS = [
  "Since 1999",
  "Amman, Jordan",
  "Biomedical Engineering Facilities",
  "Clinical Training Center",
  "Medical Equipment Warehouse",
  "Regional Technical Support",
];

export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<VisitPoint | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Extremely subtle engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 20%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 20%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow index="04" align="center">
              Visit · Learn · Collaborate
            </Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-ink sm:text-[3.2rem]">
            See More Than Equipment.
            <span className="block text-primary">Experience the Partnership.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.75] text-muted-foreground">
            We welcome healthcare leaders, physicians and biomedical engineers to
            visit our headquarters in Amman, Jordan — experience our facilities
            firsthand, exchange knowledge with our team and discover how
            successful long-term partnerships are built.
          </p>
        </motion.div>

        {/* Immersive panorama */}
        <motion.figure
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="group relative mt-14 overflow-hidden rounded-[1.75rem] ring-1 ring-ink/10 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.55)]"
          onMouseLeave={() => setActive(null)}
        >
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <motion.img
              src={hq}
              alt="AbuFarha headquarters in Amman — showroom, medical imaging equipment and biomedical engineering facilities"
              loading="lazy"
              width={1920}
              height={912}
              className="h-full w-full object-cover"
              initial={{ scale: 1.06 }}
              whileInView={reduce ? undefined : { scale: 1.12 }}
              viewport={{ once: false }}
              transition={{ duration: 18, ease: "linear" }}
            />

            {/* Active-area soft highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: active ? 1 : 0,
                background: active
                  ? `radial-gradient(circle 24% at ${active.x}% ${active.y}%, transparent 0%, rgba(15,23,42,0.04) 40%, rgba(15,23,42,0.55) 100%)`
                  : "none",
              }}
            />

            {/* Focal pin */}
            {active && (
              <motion.span
                key={active.id}
                aria-hidden
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${active.x}%`, top: `${active.y}%` }}
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-full w-full rounded-full bg-primary/40 motion-safe:animate-ping" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-white/70" />
                </span>
              </motion.span>
            )}

            {/* Bottom gradient for legibility */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/25 to-transparent"
            />
          </div>
        </motion.figure>

        {/* Visit points */}
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {VISIT_POINTS.map((p, i) => {
            const Icon = p.icon;
            const isActive = active?.id === p.id;
            return (
              <motion.button
                key={p.id}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                onMouseEnter={() => setActive(p)}
                onFocus={() => setActive(p)}
                onBlur={() => setActive(null)}
                className="group flex min-h-14 items-center gap-3.5 border-b border-border/70 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground ring-primary"
                      : "bg-secondary/60 text-muted-foreground ring-border group-hover:text-primary"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <span className="relative text-[15px] font-semibold text-ink">
                  {p.title}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
                <ArrowRight
                  className={`ml-auto h-4 w-4 text-primary transition-all duration-300 ${
                    isActive ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Editorial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <span className="font-display text-5xl leading-none text-primary/25">“</span>
          <p className="-mt-4 font-display text-[1.7rem] font-semibold leading-[1.35] tracking-[-0.015em] text-ink sm:text-[2.15rem]">
            Every successful partnership begins with understanding clinical
            challenges before recommending technology.
          </p>
        </motion.blockquote>

        {/* Invitation block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mx-auto mt-24 max-w-4xl overflow-hidden rounded-[1.75rem] border border-border bg-secondary/40 px-8 py-12 text-center sm:px-14 sm:py-16"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.26em] text-primary">
            A Personal Invitation
          </span>
          <h3 className="mt-4 font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.6rem]">
            You're Invited.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.8] text-muted-foreground">
            Whether you're planning a new department, expanding clinical services
            or exploring future collaboration, our team welcomes you to visit
            AbuFarha headquarters in Amman and experience our engineering,
            clinical and educational capabilities firsthand.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[14.5px] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              Schedule Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-[14.5px] font-bold text-ink transition-colors duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              Arrange a Technical Meeting
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-14 flex flex-wrap items-center justify-center gap-2.5"
        >
          {TRUST_FACTS.map((fact) => (
            <motion.span
              key={fact}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[12.5px] font-semibold text-ink/80"
            >
              <MapPin className="h-3.5 w-3.5 text-primary/70" strokeWidth={2} />
              {fact}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
