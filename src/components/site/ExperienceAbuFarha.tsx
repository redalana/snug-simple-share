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

type Node = {
  num: string;
  icon: LucideIcon;
  category: string;
  title: string;
  copy: string;
  side: "left" | "right";
};

const NODES: Node[] = [
  {
    num: "01",
    icon: Stethoscope,
    category: "Clinical Expertise",
    title: "Expert Stroke Physicians",
    copy: "Meet experienced stroke physicians and discuss real clinical workflows.",
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
    copy: "Discover how technology, physicians, engineering and workflow come together to create sustainable stroke services.",
    side: "left",
  },
  {
    num: "04",
    icon: Cpu,
    category: "Technology",
    title: "Advanced Neurovascular Technology",
    copy: "Experience advanced biplane angiography and stroke treatment technologies.",
    side: "right",
  },
  {
    num: "05",
    icon: Building2,
    category: "Real Practice",
    title: "Visit Hospitals Using Our Technologies",
    copy: "Observe real stroke treatment workflows inside hospitals using these technologies every day.",
    side: "right",
  },
  {
    num: "06",
    icon: Boxes,
    category: "Facilities",
    title: "Engineering Facilities & Warehouse",
    copy: "Tour our engineering laboratories, refurbishment facilities and warehouse to understand how every system is prepared before installation.",
    side: "right",
  },
];

const VISIT_POINTS = [
  "Meet our physicians",
  "Meet our biomedical engineering team",
  "Tour our headquarters",
  "Explore our engineering laboratories",
  "Visit our medical equipment warehouse",
  "Explore comprehensive stroke programs",
  "Visit hospitals using our technologies",
  "Exchange knowledge & discuss collaboration",
];

function NodePanel({ node, index }: { node: Node; index: number }) {
  const Icon = node.icon;
  const isLeft = node.side === "left";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.12 * index }}
      className={`group relative rounded-2xl border border-border/70 bg-white/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.5)] ${
        isLeft ? "lg:text-right" : "lg:text-left"
      }`}
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
          {node.num} · {node.category}
        </span>
      </div>
      <h3 className="mt-4 font-display text-[1.35rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
        {node.title}
      </h3>
      <p
        className={`mt-2.5 text-[15px] leading-[1.6] text-muted-foreground ${
          isLeft ? "lg:ml-auto" : ""
        } max-w-xs`}
      >
        {node.copy}
      </p>
    </motion.div>
  );
}

export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();

  // Connector-line targets: y positions (in the 0-100 SVG space) for the
  // three nodes on each side, all converging on the brain center (50, 50).
  const leftY = [22, 50, 78];
  const rightY = [22, 50, 78];

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
            A Stroke Program Saves Lives
            <span className="block text-primary">Because Every Part Works Together.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-[1.75] text-muted-foreground">
            Successful stroke treatment is never built around a single medical
            device. It depends on an integrated ecosystem — advanced
            neurovascular technology, experienced physicians, biomedical
            engineers, standardized workflows and long-term support. AbuFarha
            helps hospitals bring all of these together.
          </p>
        </motion.div>

        {/* Hero visual + connected ecosystem */}
        <div className="relative mt-20 grid items-center gap-8 lg:mt-28 lg:grid-cols-12 lg:gap-4">
          {/* Connector lines (desktop only) */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.05" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {leftY.map((y, i) => (
              <path
                key={`l-${i}`}
                d={`M 24 ${y} C 38 ${y}, 42 50, 50 50`}
                fill="none"
                stroke="url(#connLine)"
                strokeWidth="0.25"
                strokeDasharray="1.5 2"
                className={reduce ? undefined : "conn-flow"}
              />
            ))}
            {rightY.map((y, i) => (
              <path
                key={`r-${i}`}
                d={`M 76 ${y} C 62 ${y}, 58 50, 50 50`}
                fill="none"
                stroke="url(#connLine)"
                strokeWidth="0.25"
                strokeDasharray="1.5 2"
                className={reduce ? undefined : "conn-flow"}
              />
            ))}
          </svg>

          {/* Left nodes */}
          <div className="relative z-10 flex flex-col gap-10 lg:col-span-3 lg:gap-14">
            {NODES.filter((c) => c.side === "left").map((c, i) => (
              <NodePanel key={c.num} node={c} index={i} />
            ))}
          </div>

          {/* Center brain image */}
          <div className="relative z-10 lg:col-span-6">
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
                className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 55% 45%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 65%)",
                }}
              />
              <motion.img
                src={brainHero}
                alt="Semi-transparent human head in side profile revealing a realistic brain, with cerebral arteries and one artery blocked by a clot highlighted in soft red, set against a faintly blurred cath lab"
                width={1024}
                height={1280}
                className="w-full select-none object-contain"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.014, 1], opacity: [1, 0.98, 1] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
                draggable={false}
              />
              {/* Heartbeat pulse over the blocked artery */}
              {!reduce && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute"
                  style={{ left: "56%", top: "35%" }}
                >
                  <motion.span
                    className="block h-6 w-6 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent), transparent 70%)",
                    }}
                    animate={{ scale: [1, 2.4, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </span>
              )}
            </motion.div>
          </div>

          {/* Right nodes */}
          <div className="relative z-10 flex flex-col gap-10 lg:col-span-3 lg:gap-14">
            {NODES.filter((c) => c.side === "right").map((c, i) => (
              <NodePanel key={c.num} node={c} index={i} />
            ))}
          </div>
        </div>

        {/* Invitation */}
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
              Talk With Our Stroke Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
