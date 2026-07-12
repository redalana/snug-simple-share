import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Globe,
  Package,
  Wrench,
  Cpu,
  GraduationCap,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const JOURNEY = [
  {
    icon: Globe,
    phase: "Source",
    title: "Global Procurement",
    desc: "Direct access to world-leading manufacturers and OEM supply chains.",
  },
  {
    icon: Package,
    phase: "Plan",
    title: "Turnkey Solutions",
    desc: "Complete hospital projects from design and planning to operation.",
  },
  {
    icon: Wrench,
    phase: "Deploy",
    title: "Installation & Commissioning",
    desc: "Professional installation, calibration and acceptance testing.",
  },
  {
    icon: Cpu,
    phase: "Engineer",
    title: "Biomedical Engineering",
    desc: "Expert technical engineering team for every equipment class.",
  },
  {
    icon: GraduationCap,
    phase: "Enable",
    title: "Clinical Training",
    desc: "Structured training for medical and technical staff.",
  },
  {
    icon: Clock,
    phase: "Sustain",
    title: "After Sales Support",
    desc: "Reliable maintenance and service support, 24/7.",
  },
];

export function WhyAbuFarha() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section id="why" className="relative overflow-hidden bg-white py-24">
      {/* faint signature ground line motif */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Focal statement */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="02" align="center">
              Why Partner with AbuFarha
            </Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3.4rem]">
            One partner, from planning
            <br className="hidden sm:block" /> to{" "}
            <span className="relative whitespace-nowrap text-primary">
              lifetime support
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-primary/30"
              />
            </span>
            .
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
            Most hospitals juggle a dozen vendors. We replace that chain with a
            single accountable partner — one continuous journey from first
            drawing to lifelong service.
          </p>
        </div>

        {/* The journey */}
        <div ref={trackRef} className="relative mt-20">
          {/* central connecting spine (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 origin-top bg-gradient-to-b from-primary via-primary to-primary/40 lg:block"
          />
          {/* mobile spine */}
          <div className="pointer-events-none absolute left-[27px] top-0 h-full w-px bg-border lg:hidden" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="pointer-events-none absolute left-[27px] top-0 h-full w-px origin-top bg-gradient-to-b from-primary to-primary/40 lg:hidden"
          />

          <div className="space-y-6 lg:space-y-0">
            {JOURNEY.map((step, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={step.title}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-16"
                >
                  {/* node marker */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[20px] top-6 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2"
                  >
                    <span className="absolute h-3.5 w-3.5 rounded-full bg-primary/20" />
                    <span className="h-2 w-2 rounded-full bg-primary ring-4 ring-white" />
                  </motion.div>

                  {/* spacer for alternating layout */}
                  {!left && <div className="hidden lg:block" />}

                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className={`group pl-12 lg:py-10 lg:pl-0 ${
                      left ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)] ${
                        left ? "lg:ml-auto" : ""
                      }`}
                    >
                      {/* hover wash */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div
                        className={`relative flex items-center gap-4 ${
                          left ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:ring-primary">
                          <step.icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div className={left ? "lg:text-right" : ""}>
                          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary/70">
                            {String(i + 1).padStart(2, "0")} · {step.phase}
                          </span>
                          <h3 className="mt-0.5 font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-primary">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* progressive reveal on hover */}
                      <div className="relative grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p
                            className={`mt-4 text-sm leading-relaxed text-muted-foreground ${
                              left ? "lg:text-right" : ""
                            }`}
                          >
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* closing anchor — the promise fulfilled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-5 text-center"
        >
          <p className="font-display text-lg font-bold tracking-tight text-ink">
            Six capabilities. One accountable partner.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.4)]"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
