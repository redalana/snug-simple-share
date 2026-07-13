import { motion } from "framer-motion";
import {
  Wrench,
  Cog,
  GraduationCap,
  ShieldCheck,
  Boxes,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.22, 1, 0.36, 1] as const;

type Pillar = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Wrench,
    title: "Biomedical Engineering",
    copy: "Certified engineers plan site readiness, infrastructure and clinical workflows before a single system arrives.",
  },
  {
    icon: Cog,
    title: "Installation & Commissioning",
    copy: "Every system is installed, calibrated and acceptance-tested so it performs to specification from day one.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Applications",
    copy: "Hands-on training gives physicians and technologists the confidence to use advanced technology at its full potential.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Maintenance",
    copy: "Scheduled service and performance testing prevent downtime and protect uptime for critical patient care.",
  },
  {
    icon: Boxes,
    title: "Original Spare Parts",
    copy: "Reliable regional access to genuine, OEM-compatible components keeps essential systems operational.",
  },
  {
    icon: LifeBuoy,
    title: "Long-Term Technical Support",
    copy: "Remote and on-site engineering continues for the full equipment lifecycle — not just the first year.",
  },
];

export function WhyAbuFarha() {
  return (
    <section id="why" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-3xl"
        >
          <Eyebrow index="03">Why AbuFarha</Eyebrow>
          <h2 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[3.1rem]">
            Hospitals stay with AbuFarha
            <span className="block text-primary">long after installation.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[18px] leading-[1.7] text-muted-foreground">
            Anyone can deliver a machine. AbuFarha delivers an engineered,
            supported and accountable partnership for the entire life of your
            technology.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.06 * (i % 3) }}
                className="group relative border-t border-border/70 pt-7"
              >
                <span className="absolute -top-px left-0 h-[2px] w-12 bg-primary transition-all duration-300 group-hover:w-20" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-[0_12px_30px_-20px_rgba(15,23,42,0.5)]">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-[1.4rem] font-extrabold leading-tight tracking-[-0.01em] text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15.5px] leading-[1.65] text-muted-foreground">
                  {pillar.copy}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
