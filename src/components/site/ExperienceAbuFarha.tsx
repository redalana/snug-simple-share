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
  level: "primary" | "secondary";
};

const NODES: Node[] = [
  {
    num: "01",
    icon: Stethoscope,
    category: "Clinical Expertise",
    title: "Expert Stroke Physicians",
    copy: "Meet experienced stroke physicians and discuss real clinical workflows.",
    side: "left",
    level: "primary",
  },
  {
    num: "02",
    icon: Wrench,
    category: "Engineering",
    title: "Biomedical Engineering",
    copy: "See how every neurovascular system is inspected, calibrated and commissioned.",
    side: "left",
    level: "secondary",
  },
  {
    num: "03",
    icon: Network,
    category: "Programs",
    title: "Comprehensive Stroke Programs",
    copy: "Discover how technology, physicians, engineering and workflow come together to create sustainable stroke services.",
    side: "left",
    level: "secondary",
  },
  {
    num: "04",
    icon: Cpu,
    category: "Technology",
    title: "Advanced Neurovascular Technology",
    copy: "Experience advanced biplane angiography and stroke treatment technologies.",
    side: "right",
    level: "primary",
  },
  {
    num: "05",
    icon: Building2,
    category: "Real Practice",
    title: "Visit Hospitals Using Our Technologies",
    copy: "Observe real stroke treatment workflows inside hospitals using these technologies every day.",
    side: "right",
    level: "primary",
  },
  {
    num: "06",
    icon: Boxes,
    category: "Facilities",
    title: "Engineering Facilities & Warehouse",
    copy: "Tour our engineering laboratories, refurbishment facilities and warehouse to understand how every system is prepared before installation.",
    side: "right",
    level: "secondary",
  },
];

const VISIT_POINTS = [
  "Meet our physicians",
  "Meet our biomedical engineering team",
  "Tour our headquarters",
  "Explore our engineering laboratories",
  "Visit our medical equipment warehouse",
  "Experience comprehensive stroke workflows",
  "Visit hospitals using our technologies",
  "Exchange knowledge with our leadership team",
];

function NodePanel({ node, index }: { node: Node; index: number }) {
  const Icon = node.icon;
  const isLeft = node.side === "left";
  const isPrimary = node.level === "primary";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 * index }}
      className={`group relative rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 ${
        isPrimary
          ? "border-border/80 bg-white p-6 shadow-[0_28px_60px_-38px_rgba(15,23,42,0.55)] lg:-mx-4 hover:shadow-[0_36px_72px_-36px_rgba(15,23,42,0.55)]"
          : "border-border/55 bg-white/55 p-5 backdrop-blur-sm hover:shadow-[0_24px_50px_-32px_rgba(15,23,42,0.45)]"
      } ${isLeft ? "lg:text-right" : "lg:text-left"}`}
    >
      <div
        className={`flex items-center gap-3 ${
          isLeft ? "lg:flex-row-reverse lg:justify-start" : ""
        }`}
      >
        <span
          className={`inline-flex shrink-0 items-center justify-center rounded-xl border bg-white text-primary shadow-[0_10px_28px_-18px_rgba(15,23,42,0.5)] transition-colors duration-300 group-hover:border-primary/40 ${
            isPrimary ? "h-11 w-11 border-primary/25" : "h-9 w-9 border-border"
          }`}
        >
          <Icon
            className={isPrimary ? "h-5 w-5" : "h-[17px] w-[17px]"}
            strokeWidth={1.75}
          />
        </span>
        <span
          className={`font-bold uppercase tracking-[0.24em] text-primary ${
            isPrimary ? "text-[11.5px]" : "text-[10.5px] opacity-80"
          }`}
        >
          {node.num} · {node.category}
        </span>
      </div>
      <h3
        className={`mt-4 font-display font-extrabold leading-[1.16] tracking-[-0.02em] text-ink ${
          isPrimary ? "text-[1.6rem]" : "text-[1.28rem]"
        }`}
      >
        {node.title}
      </h3>
      <p
        className={`mt-3 leading-[1.65] ${
          isPrimary
            ? "text-[16.5px] text-muted-foreground"
            : "text-[15px] text-muted-foreground/85"
        } ${isLeft ? "lg:ml-auto" : ""} max-w-xs`}
      >
        {node.copy}
      </p>
    </motion.div>
  );
}

export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();

  // Connector-line targets converging on the brain center (50, 50).
  // Each path leaves a node edge and curves toward a distinct vascular region.
  const leftPaths = [
    "M 20 24 C 34 26, 42 44, 49 49",
    "M 20 50 C 34 50, 43 50, 49 50",
    "M 20 76 C 34 74, 43 56, 49 51",
  ];
  const rightPaths = [
    "M 80 24 C 66 26, 58 44, 51 49",
    "M 80 50 C 66 50, 57 50, 51 50",
    "M 80 76 C 66 74, 57 56, 51 51",
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-28 lg:py-40"
    >
      {/* Subtle engineering grid (<2% opacity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[94rem] px-6 lg:px-10">
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
          <h2 className="mt-8 font-display text-[3.1rem] font-extrabold leading-[1.03] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-[4.6rem]">
            Every Minute Matters.
            <span className="mt-2 block text-primary">
              Building Complete Stroke Programs That Save Lives.
            </span>
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-[21px] leading-[1.8] text-muted-foreground">
            Successful stroke treatment is never built around a single medical
            device. It depends on an integrated ecosystem — advanced
            neurovascular technology, experienced physicians, biomedical
            engineers, standardized workflows and long-term support. AbuFarha
            helps hospitals bring all of these together.
          </p>
        </motion.div>

        {/* Hero visual + connected ecosystem */}
        <div className="relative mt-24 grid items-center gap-8 lg:mt-32 lg:grid-cols-12 lg:gap-2">
          {/* Vascular blueprint + connector lines (desktop only) */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            <defs>
              <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.04" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.32" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            {/* almost-invisible vascular blueprint */}
            <g stroke="var(--color-ink)" strokeOpacity="0.02" fill="none" strokeWidth="0.18">
              <path d="M 50 50 C 46 40, 40 34, 34 30" />
              <path d="M 50 50 C 54 40, 60 34, 66 30" />
              <path d="M 50 50 C 44 58, 38 64, 32 70" />
              <path d="M 50 50 C 56 58, 62 64, 68 70" />
              <path d="M 50 50 C 42 48, 34 47, 26 46" />
              <path d="M 50 50 C 58 48, 66 47, 74 46" />
            </g>
            {leftPaths.map((d, i) => (
              <path
                key={`l-${i}`}
                d={d}
                fill="none"
                stroke="url(#connLine)"
                strokeWidth="0.22"
                strokeDasharray="1.5 2"
                className={reduce ? undefined : "conn-flow"}
              />
            ))}
            {rightPaths.map((d, i) => (
              <path
                key={`r-${i}`}
                d={d}
                fill="none"
                stroke="url(#connLine)"
                strokeWidth="0.22"
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

          {/* Center brain image — dominant */}
          <div className="relative z-0 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, ease: EASE }}
              className="relative mx-auto max-w-2xl lg:-mx-6 lg:max-w-none"
            >
              {/* soft radial glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 52% 42%, color-mix(in oklab, var(--primary) 13%, transparent), transparent 65%)",
                }}
              />
              <motion.img
                src={brainHero}
                alt="Semi-transparent human head in side profile revealing an anatomically accurate brain with detailed cerebral arteries and one artery blocked by a small clot highlighted in soft red, over a faint blurred cath lab"
                width={1024}
                height={1280}
                className="w-full select-none object-contain"
                animate={
                  reduce ? undefined : { scale: [1, 1.012, 1], opacity: [1, 0.985, 1] }
                }
                transition={
                  reduce
                    ? undefined
                    : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
                }
                draggable={false}
              />
              {/* Heartbeat pulse over the blocked artery */}
              {!reduce && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute"
                  style={{ left: "52%", top: "40%" }}
                >
                  <motion.span
                    className="block h-7 w-7 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, color-mix(in oklab, var(--primary) 55%, transparent), transparent 70%)",
                    }}
                    animate={{ scale: [1, 2.6, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
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

        {/* Executive invitation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="relative mx-auto mt-36 max-w-5xl overflow-hidden rounded-[2rem] border border-border/70 bg-white px-8 py-16 text-center shadow-[0_40px_90px_-56px_rgba(15,23,42,0.5)] sm:px-14 lg:mt-44 lg:py-20"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.34em] text-primary">
            A Personal Invitation
          </span>
          <h3 className="mt-7 font-display text-[2.8rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.4rem]">
            You're Personally Invited.
          </h3>
          <p className="mx-auto mt-8 max-w-2xl text-[20px] leading-[1.8] text-muted-foreground">
            We welcome healthcare leaders, physicians and biomedical engineers to
            visit AbuFarha headquarters in Amman, Jordan and experience firsthand
            how comprehensive stroke programs are built.
          </p>

          <p className="mx-auto mt-12 text-[12px] font-bold uppercase tracking-[0.3em] text-ink/50">
            During your visit you will
          </p>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-x-10 gap-y-4 text-left sm:grid-cols-2">
            {VISIT_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[16px] font-medium text-ink"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
