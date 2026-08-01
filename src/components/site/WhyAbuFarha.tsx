import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Wrench,
  HardHat,
  Stethoscope,
  Package,
  Cog,
  GraduationCap,
  ShieldCheck,
  Headset,
  ArrowRight,
  ClipboardList,
  Truck,
  PlugZap,
  Activity,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import { SECTION_CONTAINER } from "./section-grid";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";

import heroImg from "@/assets/why-cathlab.jpg";
import engineerImg from "@/assets/aftersales-remote-engineer.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
} as const;

/* ------------------------------- KPI panel ------------------------------- */

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 1500, suffix: "+", label: "Medical Systems Installed" },
  { value: 10, suffix: "+", label: "Countries Served" },
];

function StatBlock({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="flex min-w-0 flex-col justify-center px-2 py-4 text-center sm:py-6">
      <span className="font-display text-[2.25rem] font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-[2.75rem]">
        <span ref={ref} className="tabular-nums">
          {value.toLocaleString()}
        </span>
        <span className="text-primary">{stat.suffix}</span>
      </span>
      <span className="mx-auto mt-3 h-[2px] w-8 rounded-full bg-primary/70" />
      <span className="mt-3 block text-[calc(13.5*var(--desktop-px-unit))] font-semibold leading-snug text-muted-foreground [hyphens:none] [word-break:normal]">
        {stat.label}
      </span>
    </div>
  );
}

/* -------------------------- Trust / capability list ----------------------- */

const TRUST: string[] = [
  "OEM Certified Equipment",
  "Factory-trained Engineers",
  "Installation & Commissioning",
  "Clinical Applications Training",
  "OEM Spare Parts Supply",
  "Long-term Technical Support",
];

/* ------------------------------- Process --------------------------------- */

const PROCESS: { icon: LucideIcon; label: string }[] = [
  { icon: ClipboardList, label: "Planning" },
  { icon: Truck, label: "Supply" },
  { icon: HardHat, label: "Installation" },
  { icon: PlugZap, label: "Commissioning" },
  { icon: GraduationCap, label: "Clinical Training" },
  { icon: ShieldCheck, label: "Warranty" },
  { icon: Headset, label: "24/7 Support" },
];

/* ------------------------------ Value cards ------------------------------ */

type Pillar = { icon: LucideIcon; title: string; copy: string };

const PILLARS: Pillar[] = [
  {
    icon: Wrench,
    title: "Biomedical Engineering",
    copy: "Certified biomedical engineers plan, install and validate every system to international standards.",
  },
  {
    icon: HardHat,
    title: "Turnkey Delivery",
    copy: "From room planning and shielding through installation, commissioning and clinical handover.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Applications",
    copy: "Application specialists optimize protocols and workflows so teams reach better patient outcomes.",
  },
  {
    icon: Package,
    title: "OEM Spare Parts",
    copy: "Original manufacturer components sourced through authorized channels for maximum reliability.",
  },
  {
    icon: Cog,
    title: "Preventive Maintenance",
    copy: "Scheduled service programs that reduce unplanned downtime and extend equipment lifespan.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    copy: "Hands-on training for radiologists, technologists and biomedical engineers at your own site.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Assurance",
    copy: "One year of complimentary coverage, with long-term maintenance agreements available after.",
  },
  {
    icon: Headset,
    title: "24/7 Technical Support",
    copy: "Remote diagnostics and on-site engineers across the full lifecycle of every installed system.",
  },
];

/* --------------------------------- Section -------------------------------- */

export function WhyAbuFarha() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative bg-secondary/40 py-20 lg:py-28"
    >
      <div className={`relative ${SECTION_CONTAINER}`}>
        {/* --------------------------- BLOCK 1 — Hero -------------------------- */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)] lg:gap-14">
          <motion.div {...fade} transition={{ duration: 0.65, ease: EASE }} className="min-w-0">
            <Eyebrow index="03">Why AbuFarha</Eyebrow>
            <h2
              id="why-heading"
              className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.1rem]"
            >
              Engineering Confidence.
              <span className="block text-primary">Clinical Excellence.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[calc(17*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
              Hospitals across Africa and the Middle East rely on us to supply, install and
              commission advanced medical systems — then train their teams and support the
              technology for its entire lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-14 min-w-0 rounded-full px-8 text-base">
                <Link to="/contact">
                  <Wrench aria-hidden="true" />
                  Talk to an Engineer
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-14 min-w-0 rounded-full border-border bg-white px-8 text-base"
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight
                    aria-hidden="true"
                    className="text-primary transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
            </div>

            <ul className="mt-9 grid max-w-xl gap-x-8 gap-y-3 border-t border-border/70 pt-8 sm:grid-cols-2">
              {TRUST.map((t) => (
                <li key={t} className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-[calc(15*var(--desktop-px-unit))] font-semibold leading-snug text-ink">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="min-w-0 lg:mt-[2.25rem]"
          >
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-(--shadow-panel)">
              <img
                src={heroImg}
                alt="AbuFarha biomedical engineers commissioning a cath lab system in a hospital suite"
                loading="lazy"
                decoding="async"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ---------------------------- BLOCK 1b — KPI ------------------------- */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 overflow-hidden rounded-3xl border border-border/70 bg-white p-4 shadow-(--shadow-panel) sm:p-6 lg:mt-14"
        >
          <div className="grid grid-cols-2 divide-y divide-border/60 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {STATS.map((s) => (
              <StatBlock key={s.label} stat={s} />
            ))}
          </div>
        </motion.div>

        {/* --------------------- BLOCK 2 — Delivery process -------------------- */}
        <motion.div {...fade} transition={{ duration: 0.6, ease: EASE }} className="mt-20 lg:mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow align="center">Hospital Delivery Process</Eyebrow>
            </div>
            <h3 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.35rem]">
              How every project is <span className="text-primary">delivered</span>.
            </h3>
          </div>

          <ol className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-7 lg:gap-x-2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[7%] right-[7%] top-9 hidden h-px bg-border lg:block"
            />
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.label}
                  className="group relative z-10 flex min-w-0 flex-col items-center text-center"
                >
                  <span className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-border/70 bg-white text-primary shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-(--shadow-panel)">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.18em] text-primary/85 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1.5 text-[calc(14*var(--desktop-px-unit))] font-bold leading-snug text-ink [hyphens:none] [word-break:normal]">
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </motion.div>

        {/* --------------------- BLOCK 3 — Core capabilities ------------------- */}
        <div className="mt-20 lg:mt-28">
          <motion.div
            {...fade}
            transition={{ duration: 0.6, ease: EASE }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex justify-center">
              <Eyebrow align="center">Core Capabilities</Eyebrow>
            </div>
            <h3 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[2.35rem]">
              One partner for the full <span className="text-primary">equipment lifecycle</span>.
            </h3>
          </motion.div>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.li
                  key={p.title}
                  {...fade}
                  transition={{ duration: 0.5, delay: 0.04 * (i % 4), ease: EASE }}
                  className="group flex min-w-0 flex-col rounded-2xl border border-border/70 bg-white p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-(--shadow-panel)"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/8 text-primary ring-1 ring-inset ring-primary/10 transition-colors duration-300 group-hover:bg-primary/12">
                    <Icon className="h-8 w-8" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h4 className="mt-6 font-display text-[calc(19*var(--desktop-px-unit))] font-extrabold leading-tight tracking-[-0.01em] text-ink [overflow-wrap:anywhere]">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-[calc(14.5*var(--desktop-px-unit))] leading-[1.65] text-muted-foreground">
                    {p.copy}
                  </p>
                  <span className="mt-auto pt-6">
                    <span className="block h-[2px] w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* ------------------------- BLOCK 5 — Final CTA ----------------------- */}
        <motion.div
          {...fade}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-20 grid min-w-0 grid-cols-1 overflow-hidden rounded-3xl border border-border/70 bg-white shadow-(--shadow-panel) lg:mt-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          <img
            src={engineerImg}
            alt="AbuFarha field service engineer available to advise on system selection"
            loading="lazy"
            decoding="async"
            width={900}
            height={900}
            className="h-full max-h-[20rem] w-full object-cover object-center lg:max-h-none"
          />
          <div className="flex min-w-0 flex-col justify-center bg-primary/4 p-8 sm:p-12 lg:p-14">
            <h3 className="font-display text-[1.75rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[2.1rem]">
              Need Help Choosing the Right Medical System?
            </h3>
            <p className="mt-5 max-w-xl text-[calc(16*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
              Our biomedical and application engineers help you identify the most suitable
              technology for your hospital or diagnostic center — based on clinical caseload, site
              conditions, installation requirements and budget.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group h-14 min-w-0 rounded-full px-8 text-base">
                <Link to="/contact">
                  Request Consultation
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-14 min-w-0 rounded-full border-border bg-white px-8 text-base"
              >
                <Link to="/contact">
                  <Activity aria-hidden="true" className="text-primary" />
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
