import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Activity, ScanLine, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./Eyebrow";
import brainHero from "@/assets/stroke-brain-hero.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pillar = {
  id: string;
  icon: LucideIcon;
  title: string;
  copy: string;
};

const PILLARS: Pillar[] = [
  {
    id: "outcomes",
    icon: Activity,
    title: "Better Patient Outcomes",
    copy: "Faster diagnosis and timely intervention preserve healthy brain tissue and improve functional recovery.",
  },
  {
    id: "imaging",
    icon: ScanLine,
    title: "Advanced Neurovascular Imaging",
    copy: "High-resolution imaging helps physicians locate blocked vessels quickly and act with precision.",
  },
  {
    id: "integrated",
    icon: Network,
    title: "Integrated Stroke Programs",
    copy: "Imaging, workflows, engineering and technical support delivered as one coordinated system.",
  },
];

export function ExperienceAbuFarha() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white py-28 lg:py-36"
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

      <div className="relative mx-auto max-w-[105rem] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-14">
          {/* Left — brain illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 52% 42%, color-mix(in oklab, var(--primary) 15%, transparent), transparent 62%)",
              }}
            />
            <motion.img
              src={brainHero}
              alt="Semi-transparent human head in side profile revealing an anatomically accurate brain with detailed cerebral arteries and one artery blocked by a clot highlighted in soft red"
              width={1024}
              height={1200}
              className="mx-auto w-full max-w-xl select-none object-contain"
              style={{
                maskImage:
                  "radial-gradient(ellipse 78% 82% at 52% 46%, black 58%, transparent 92%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 82% at 52% 46%, black 58%, transparent 92%)",
              }}
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
          </motion.div>

          {/* Right — editorial preview */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="order-1 lg:order-2"
          >
            <Eyebrow index="04">Clinical Solutions</Eyebrow>
            <h2 className="mt-7 font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.3rem]">
              Comprehensive
              <span className="mt-1 block text-primary">Stroke Programs.</span>
            </h2>
            <p className="mt-7 max-w-xl text-[19px] leading-[1.7] text-muted-foreground">
              Successful stroke care is never a single device. It is an ecosystem
              of imaging, clinical workflows, biomedical engineering and technical
              support working as one — and AbuFarha helps hospitals bring it
              together.
            </p>

            <ul className="mt-10 space-y-6">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.id} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-white text-primary shadow-[0_10px_28px_-18px_rgba(15,23,42,0.5)]">
                      <Icon className="h-[21px] w-[21px]" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.24rem] font-extrabold leading-tight tracking-[-0.01em] text-ink">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-[15px] leading-[1.6] text-muted-foreground">
                        {pillar.copy}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-11">
              <Link
                to="/programs/stroke-care"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[15px] font-bold text-primary-foreground shadow-[0_18px_38px_-16px_var(--primary)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_24px_48px_-18px_var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              >
                Explore Stroke Solutions
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
