import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import {
  MessagesSquare,
  ClipboardCheck,
  PackageSearch,
  Wrench,
  GraduationCap,
  ShieldCheck,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

type Step = {
  n: string;
  title: string;
  desc: string;
  detail: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Consultation",
    desc: "We start with a conversation.",
    detail: "We meet your clinical and biomedical teams to understand goals, constraints and timelines.",
    icon: MessagesSquare,
  },
  {
    n: "02",
    title: "Needs Assessment",
    desc: "We define the requirement.",
    detail: "Clinical workflows, room conditions and technical requirements are documented in detail.",
    icon: ClipboardCheck,
  },
  {
    n: "03",
    title: "Equipment Selection",
    desc: "We specify the right systems.",
    detail: "The correct equipment and configuration are selected and sourced through OEM channels.",
    icon: PackageSearch,
  },
  {
    n: "04",
    title: "Installation & Commissioning",
    desc: "We install and validate.",
    detail: "Engineers handle installation, calibration and acceptance testing before handover.",
    icon: Wrench,
  },
  {
    n: "05",
    title: "Clinical Training",
    desc: "We train your teams.",
    detail: "Clinical and technical staff are trained on operation, safety and daily use.",
    icon: GraduationCap,
  },
  {
    n: "06",
    title: "Preventive Maintenance",
    desc: "We service on schedule.",
    detail: "Planned servicing keeps every system compliant, calibrated and running.",
    icon: ShieldCheck,
  },
  {
    n: "07",
    title: "Technical Support",
    desc: "We stay available.",
    detail: "Ongoing response, spare parts and remote assistance whenever you need us.",
    icon: LifeBuoy,
  },
];

function JourneyStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const left = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* spine node */}
      <div className="absolute left-1/2 top-8 z-20 hidden -translate-x-1/2 lg:block">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="block h-4 w-4 rounded-full bg-primary shadow-[0_0_0_6px_var(--background),0_0_18px_2px_color-mix(in_oklab,var(--primary)_65%,transparent)]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 34, x: reduce ? 0 : left ? -24 : 24 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`group relative lg:w-[calc(50%-2.75rem)] ${
          left ? "lg:mr-auto lg:text-right" : "lg:ml-auto lg:text-left"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-[0_2px_14px_-6px_rgba(15,23,42,0.14)] ring-1 ring-black/[0.03] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_36px_70px_-32px_rgba(15,23,42,0.45)] sm:p-7">
          {/* oversized ghost numeral — signature motif */}
          <span
            aria-hidden
            className={`pointer-events-none absolute -top-6 select-none font-display text-[7rem] font-extrabold leading-none text-primary/[0.05] transition-colors duration-500 group-hover:text-primary/[0.09] ${
              left ? "right-3" : "left-3"
            }`}
          >
            {step.n}
          </span>

          <div className={`relative flex items-center gap-4 ${left ? "lg:flex-row-reverse" : ""}`}>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-primary/[0.04] text-primary ring-1 ring-primary/10 transition-all duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white group-hover:shadow-[0_16px_30px_-14px_var(--primary)]">
              <step.icon className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <div className={left ? "lg:text-right" : ""}>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                Phase {step.n}
              </span>
              <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-ink">
                {step.title}
              </h3>
            </div>
          </div>

          <p className="relative mt-4 text-[13.5px] font-medium leading-relaxed text-ink/80">
            {step.desc}
          </p>
          <p className="relative mt-2 text-[13px] leading-[1.7] text-muted-foreground">
            {step.detail}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const glowTop = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative overflow-hidden bg-secondary/50 py-20 lg:py-24">
      {/* faint engineering grid — healthcare identity, <4% */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center" index="05">
              How We Work
            </Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.6rem]">
            A clear path from first
            <br />
            call to <span className="text-primary">ongoing support</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.75] text-muted-foreground">
            Every project follows the same seven-step journey — scroll to follow
            it from consultation through to technical support.
          </p>
        </div>

        <div ref={trackRef} className="relative mx-auto mt-16 max-w-6xl">
          {/* central spine — desktop */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border lg:block" />
          {/* scroll-driven progress fill */}
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute bottom-0 left-1/2 top-0 hidden w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-primary via-primary to-primary/50 lg:block"
          />
          {/* travelling pulse that rides the progress head */}
          {!reduce && (
            <motion.span
              aria-hidden
              style={{ top: glowTop }}
              className="absolute left-1/2 z-10 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_22px_6px_color-mix(in_oklab,var(--primary)_75%,transparent)] lg:block"
            />
          )}

          {/* mobile spine */}
          <div className="absolute bottom-0 left-[27px] top-0 w-px bg-border lg:hidden" />
          <motion.div
            aria-hidden
            style={{ scaleY: reduce ? 1 : fill }}
            className="absolute bottom-0 left-[26px] top-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-primary to-primary/50 lg:hidden"
          />

          <div className="relative space-y-8 pl-14 lg:space-y-12 lg:pl-0">
            {/* mobile node markers */}
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative">
                <span className="absolute -left-14 top-8 z-20 flex h-4 w-4 -translate-y-0 items-center justify-center rounded-full bg-primary shadow-[0_0_0_5px_var(--background)] lg:hidden" />
                <JourneyStep step={step} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
