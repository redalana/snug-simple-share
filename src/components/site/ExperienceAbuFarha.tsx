import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Wrench,
  Network,
  Cpu,
  Building2,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import brainHero from "@/assets/stroke-brain-hero.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Callout = {
  num: string;
  icon: LucideIcon;
  category: string;
  title: string;
  copy: string;
  side: "left" | "right";
};

const CALLOUTS: Callout[] = [
  {
    num: "01",
    icon: Stethoscope,
    category: "Clinical Expertise",
    title: "Expert Stroke Physicians",
    copy: "Discuss complex stroke cases with experienced physicians and clinical specialists.",
    side: "left",
  },
  {
    num: "02",
    icon: Wrench,
    category: "Engineering",
    title: "Biomedical Engineering",
    copy: "See how every neurovascular system is inspected, calibrated and commissioned.",
    side: "left",
  },
  {
    num: "03",
    icon: Network,
    category: "Programs",
    title: "Comprehensive Stroke Programs",
    copy: "Learn how hospitals integrate imaging, intervention, engineering and clinical workflows.",
    side: "left",
  },
  {
    num: "04",
    icon: Cpu,
    category: "Technology",
    title: "Advanced Neurovascular Technology",
    copy: "Experience state-of-the-art biplane angiography and stroke treatment technologies.",
    side: "right",
  },
  {
    num: "05",
    icon: Building2,
    category: "Real Practice",
    title: "Hospitals Using Our Technologies",
    copy: "Observe real stroke workflows inside hospitals using these systems every day.",
    side: "right",
  },
  {
    num: "06",
    icon: Boxes,
    category: "Facilities",
    title: "Engineering Facilities & Warehouse",
    copy: "Tour our headquarters, laboratories and warehouse to see how every system is prepared before installation.",
    side: "right",
  },
];

const VISIT_POINTS = [
  "Meet our physicians",
  "Meet our biomedical engineering team",
  "Tour our headquarters",
  "Explore our engineering facilities",
  "Visit our medical equipment warehouse",
  "Explore comprehensive stroke programs",
  "Visit hospitals using our technologies",
  "Exchange knowledge & discuss collaboration",
];

function CalloutPanel({ callout, index }: { callout: Callout; index: number }) {
  const Icon = callout.icon;
  const isLeft = callout.side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.12 * index }}
      className={`group relative ${isLeft ? "lg:text-right" : "lg:text-left"}`}
    >
      <div
        className={`flex items-center gap-3 ${
          isLeft ? "lg:flex-row-reverse lg:justify-start" : ""
        }`}
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-[0_10px_28px_-18px_rgba(15,23,42,0.5)] transition-colors duration-300 group-hover:border-primary/40">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
          {callout.num} · {callout.category}
        </span>
      </div>
      <h3 className="mt-4 font-display text-[1.4rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
        {callout.title}
      </h3>
      <p
        className={`mt-2.5 text-[15px] leading-[1.6] text-muted-foreground ${
          isLeft ? "lg:ml-auto" : ""
        } max-w-xs`}
      >
        {callout.copy}
      </p>
    </motion.div>
  );
}

export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Subtle engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-10">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex justify-center">
            <Eyebrow index="04" align="center">
              Building Comprehensive Stroke Programs
            </Eyebrow>
          </div>
          <h2 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[3.9rem]">
            Every Minute Matters.
            <span className="block text-primary">Every Decision Changes Lives.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-[1.75] text-muted-foreground">
            A successful stroke program is never built around a single medical
            device. It requires advanced neurovascular technology, experienced
            physicians, biomedical engineers, standardized workflows, clinical
            education and long-term support. AbuFarha helps hospitals bring all
            of these together.
          </p>
        </motion.div>

        {/* Hero visual + callouts */}
        <div className="relative mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-6">
          {/* Left callouts */}
          <div className="flex flex-col gap-12 lg:col-span-3 lg:gap-16">
            {CALLOUTS.filter((c) => c.side === "left").map((c, i) => (
              <CalloutPanel key={c.num} callout={c} index={i} />
            ))}
          </div>

          {/* Center brain image */}
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, ease: EASE }}
              className="relative mx-auto max-w-xl"
            >
              {/* soft radial glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 55% 45%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%)",
                }}
              />
              <motion.img
                src={brainHero}
                alt="Semi-transparent human head in side profile revealing the brain, with cerebral arteries glowing red and one blocked artery highlighted, set against a softly blurred cath lab"
                width={1024}
                height={1024}
                className="w-full select-none object-contain"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.018, 1], opacity: [1, 0.97, 1] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
                draggable={false}
              />
            </motion.div>
          </div>

          {/* Right callouts */}
          <div className="flex flex-col gap-12 lg:col-span-3 lg:gap-16">
            {CALLOUTS.filter((c) => c.side === "right").map((c, i) => (
              <CalloutPanel key={c.num} callout={c} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom invitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="mx-auto mt-32 max-w-4xl border-t border-border pt-20 text-center lg:mt-40"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-primary">
            A Personal Invitation
          </span>
          <h3 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.2rem]">
            Experience It Yourself.
          </h3>
          <p className="mx-auto mt-7 max-w-2xl text-[19px] leading-[1.75] text-muted-foreground">
            Healthcare leaders, physicians and biomedical engineers are invited
            to visit AbuFarha headquarters in Amman, Jordan.
          </p>

          {/* Visit points */}
          <ul className="mx-auto mt-12 grid max-w-3xl gap-x-8 gap-y-3.5 text-left sm:grid-cols-2">
            {VISIT_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[15px] font-medium text-ink"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[15px] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
            >
              Schedule Your Clinical Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-8 py-3.5 text-[15px] font-bold text-ink transition-colors duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            >
              Talk to Our Stroke Program Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
