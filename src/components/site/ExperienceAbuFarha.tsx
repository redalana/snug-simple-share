import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Stethoscope,
  Wrench,
  Network,
  Cpu,
  Building2,
  Boxes,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import brainHero from "@/assets/stroke-brain-hero.jpg";
import hqImage from "@/assets/abufarha-hq.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Node = {
  id: string;
  num: string;
  icon: LucideIcon;
  category: string;
  title: string;
  copy: string;
  side: "left" | "right";
  level: "primary" | "secondary";
  /** connector path from the panel edge to a vascular region on the brain */
  path: string;
  /** vascular region node highlighted on hover (viewBox 0-100) */
  region: { x: number; y: number };
};

const NODES: Node[] = [
  {
    id: "physicians",
    num: "01",
    icon: Stethoscope,
    category: "Clinical Expertise",
    title: "Expert Stroke Physicians",
    copy: "Meet experienced physicians and discuss real stroke workflows.",
    side: "left",
    level: "primary",
    path: "M 20 25 C 34 27, 43 34, 49 39",
    region: { x: 49, y: 39 },
  },
  {
    id: "engineering",
    num: "02",
    icon: Wrench,
    category: "Engineering",
    title: "Biomedical Engineering",
    copy: "See how neurovascular systems are inspected, calibrated and commissioned.",
    side: "left",
    level: "secondary",
    path: "M 20 51 C 34 51, 43 49, 48 48",
    region: { x: 48, y: 48 },
  },
  {
    id: "programs",
    num: "03",
    icon: Network,
    category: "Programs",
    title: "Comprehensive Stroke Programs",
    copy: "Learn how physicians, engineering, technology and workflows become one integrated service.",
    side: "left",
    level: "secondary",
    path: "M 20 77 C 34 74, 43 62, 48 57",
    region: { x: 48, y: 57 },
  },
  {
    id: "technology",
    num: "04",
    icon: Cpu,
    category: "Technology",
    title: "Advanced Neurovascular Technology",
    copy: "Experience advanced biplane angiography and modern stroke treatment technologies.",
    side: "right",
    level: "primary",
    path: "M 80 25 C 66 27, 58 36, 53 41",
    region: { x: 53, y: 41 },
  },
  {
    id: "hospitals",
    num: "05",
    icon: Building2,
    category: "Real Practice",
    title: "Visit Hospitals Using Our Technologies",
    copy: "Observe real stroke treatment workflows inside hospitals already using these systems.",
    side: "right",
    level: "primary",
    path: "M 80 51 C 66 51, 58 49, 53 47",
    region: { x: 53, y: 47 },
  },
  {
    id: "facilities",
    num: "06",
    icon: Boxes,
    category: "Facilities",
    title: "Engineering Facilities & Equipment Warehouse",
    copy: "Tour our engineering laboratories and medical equipment warehouse to understand how every system is prepared before installation.",
    side: "right",
    level: "secondary",
    path: "M 80 77 C 66 74, 58 62, 53 56",
    region: { x: 53, y: 56 },
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
  "Exchange knowledge with our leadership team",
];

function NodePanel({
  node,
  index,
  active,
  onHover,
}: {
  node: Node;
  index: number;
  active: boolean;
  onHover: (id: string | null) => void;
}) {
  const Icon = node.icon;
  const isLeft = node.side === "left";
  const isPrimary = node.level === "primary";
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 * index }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(node.id)}
      onBlur={() => onHover(null)}
      tabIndex={0}
      className={`group relative rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:outline-none ${
        active ? "border-primary/40" : "hover:border-primary/30"
      } ${
        isPrimary
          ? "border-border/80 bg-white p-6 shadow-[0_28px_60px_-38px_rgba(15,23,42,0.55)] lg:-mx-4 hover:shadow-[0_36px_72px_-36px_rgba(15,23,42,0.55)]"
          : "border-border/55 bg-white/60 p-5 backdrop-blur-sm hover:shadow-[0_24px_50px_-32px_rgba(15,23,42,0.45)]"
      } ${active ? "shadow-[0_36px_72px_-36px_rgba(15,23,42,0.55)]" : ""} ${
        isLeft ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div
        className={`flex items-center gap-3 ${
          isLeft ? "lg:flex-row-reverse lg:justify-start" : ""
        }`}
      >
        <span
          className={`inline-flex shrink-0 items-center justify-center rounded-xl border bg-white text-primary shadow-[0_10px_28px_-18px_rgba(15,23,42,0.5)] transition-colors duration-300 ${
            active ? "border-primary/40" : "group-hover:border-primary/40"
          } ${isPrimary ? "h-11 w-11 border-primary/25" : "h-9 w-9 border-border"}`}
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
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-28 lg:py-40"
    >
      {/* Very subtle engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
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
          {/* Connector lines + vascular nodes (desktop only) */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full lg:block"
          >
            <defs>
              <linearGradient id="connLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.04" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            {NODES.map((node) => {
              const isActive = activeId === node.id;
              return (
                <g key={node.id}>
                  <path
                    d={node.path}
                    fill="none"
                    stroke={isActive ? "var(--color-primary)" : "url(#connLine)"}
                    strokeOpacity={isActive ? 0.7 : 1}
                    strokeWidth={isActive ? 0.32 : 0.22}
                    strokeDasharray="1.5 2"
                    className={reduce ? undefined : "conn-flow"}
                    style={{ transition: "stroke-width 0.3s ease" }}
                  />
                  {/* vascular region node */}
                  <circle
                    cx={node.region.x}
                    cy={node.region.y}
                    r={isActive ? 0.9 : 0.55}
                    fill="var(--color-primary)"
                    fillOpacity={isActive ? 0.9 : 0.35}
                    style={{ transition: "r 0.3s ease, fill-opacity 0.3s ease" }}
                  />
                  {isActive && !reduce && (
                    <circle
                      cx={node.region.x}
                      cy={node.region.y}
                      r={0.9}
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth={0.2}
                    >
                      <animate
                        attributeName="r"
                        from="0.9"
                        to="3"
                        dur="1.4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-opacity"
                        from="0.7"
                        to="0"
                        dur="1.4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Left nodes */}
          <div className="relative z-30 flex flex-col gap-10 lg:col-span-3 lg:gap-14">
            {NODES.filter((c) => c.side === "left").map((c, i) => (
              <NodePanel
                key={c.id}
                node={c}
                index={i}
                active={activeId === c.id}
                onHover={setActiveId}
              />
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
                alt="Semi-transparent human head in side profile revealing an anatomically accurate brain with detailed cerebral arteries and one artery blocked by a clot highlighted in soft red, over a softly blurred cath lab"
                width={1024}
                height={1200}
                className="w-full select-none rounded-3xl object-contain"
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.012, 1], opacity: [1, 0.985, 1] }
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
                  style={{ left: "62%", top: "41%" }}
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
          <div className="relative z-30 flex flex-col gap-10 lg:col-span-3 lg:gap-14">
            {NODES.filter((c) => c.side === "right").map((c, i) => (
              <NodePanel
                key={c.id}
                node={c}
                index={i}
                active={activeId === c.id}
                onHover={setActiveId}
              />
            ))}
          </div>
        </div>

        {/* Executive invitation — two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.85, ease: EASE }}
          className="relative mx-auto mt-36 max-w-6xl overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[0_40px_90px_-56px_rgba(15,23,42,0.5)] lg:mt-44"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left — HQ photograph */}
            <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
              <img
                src={hqImage}
                alt="AbuFarha Medical Equipment headquarters building in Amman, Jordan with a Jordanian flag"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[13px] font-bold text-ink shadow-[0_10px_30px_-14px_rgba(15,23,42,0.5)] backdrop-blur-sm">
                <MapPin className="h-4 w-4 text-primary" strokeWidth={2} />
                Amman, Jordan — AbuFarha Headquarters
              </div>
            </div>

            {/* Right — invitation content */}
            <div className="px-8 py-14 sm:px-12 lg:py-16">
              <span className="text-[13px] font-bold uppercase tracking-[0.34em] text-primary">
                A Personal Invitation
              </span>
              <h3 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3rem]">
                You're Personally Invited.
              </h3>
              <p className="mt-6 max-w-xl text-[18px] leading-[1.75] text-muted-foreground">
                Healthcare leaders, physicians and biomedical engineers are
                invited to experience AbuFarha firsthand — and see how
                comprehensive stroke programs are built, step by step.
              </p>

              <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.3em] text-ink/50">
                During your visit you will
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3.5 text-left sm:grid-cols-2">
                {VISIT_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] font-medium leading-snug text-ink"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  Schedule Your Clinical Visit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-[15px] font-bold text-ink transition-colors duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  Talk With Our Stroke Team
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
