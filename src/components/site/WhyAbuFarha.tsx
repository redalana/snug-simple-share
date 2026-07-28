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
  BadgeCheck,
  CheckCircle2,
  Handshake,
  Globe,
  Briefcase,
  Boxes,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";

import heroImg from "@/assets/why-cathlab.jpg";
import engineerImg from "@/assets/aftersales-remote-engineer.jpg";
import canon from "@/assets/brands/toshiba-canon.png.asset.json";
import ge from "@/assets/brands/ge.png.asset.json";
import mindray from "@/assets/brands/mindray.png.asset.json";
import philips from "@/assets/brands/philips.png.asset.json";
import siemens from "@/assets/brands/siemens.png.asset.json";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------- KPI panel ------------------------------- */

type Stat = { icon: LucideIcon; value: number; suffix: string; label: string; sub: string };

const STATS: Stat[] = [
  {
    icon: ShieldCheck,
    value: 25,
    suffix: "+",
    label: "Years",
    sub: "Engineering Experience",
  },
  { icon: Boxes, value: 1500, suffix: "+", label: "Medical Systems", sub: "Installed" },
  { icon: Briefcase, value: 250, suffix: "+", label: "Healthcare Projects", sub: "Delivered" },
  { icon: Globe, value: 10, suffix: "+", label: "Countries", sub: "Served" },
];

function StatCard({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  const Icon = stat.icon;
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl p-2.5 transition-shadow duration-300 hover:shadow-(--shadow-panel) sm:p-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary ring-1 ring-inset ring-primary/12">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[1.65rem] font-extrabold leading-none tracking-[-0.02em] text-ink">
          <span ref={ref} className="tabular-nums">
            {value.toLocaleString()}
          </span>
          <span className="text-primary">{stat.suffix}</span>
        </span>
        <span className="mt-1.5 block text-[calc(13.5*var(--desktop-px-unit))] font-bold leading-snug text-ink [hyphens:none] [word-break:normal]">
          {stat.label}
        </span>
        <span className="block text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground [hyphens:none] [word-break:normal]">
          {stat.sub}
        </span>
      </span>
    </div>
  );
}

/* ------------------------------ Value cards ------------------------------ */

type Pillar = { icon: LucideIcon; title: string; copy: string };

const PILLARS: Pillar[] = [
  {
    icon: Wrench,
    title: "Biomedical Engineering",
    copy: "Certified engineers ensuring every installation meets international standards.",
  },
  {
    icon: HardHat,
    title: "Turnkey Delivery",
    copy: "From planning and shielding to installation, commissioning and handover.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Applications",
    copy: "Optimized workflows helping clinical teams achieve better patient outcomes.",
  },
  {
    icon: Package,
    title: "OEM Spare Parts",
    copy: "Original components from trusted global manufacturers for maximum reliability.",
  },
  {
    icon: Cog,
    title: "Preventive Maintenance",
    copy: "Reduce downtime and extend equipment life with scheduled service programs.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    copy: "Hands-on training for radiologists, technologists and biomedical engineers.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Assurance",
    copy: "One year of complimentary coverage, with long-term maintenance plans available.",
  },
  {
    icon: Headset,
    title: "24/7 Technical Support",
    copy: "Remote and on-site support throughout the entire equipment lifecycle.",
  },
];

/* -------------------------------- Partners ------------------------------- */

const PARTNERS = [
  { name: "Philips", url: philips.url, h: 22 },
  { name: "Siemens Healthineers", url: siemens.url, h: 20 },
  { name: "GE HealthCare", url: ge.url, h: 38 },
  { name: "Canon Medical", url: canon.url, h: 22 },
  { name: "Mindray", url: mindray.url, h: 32 },
];

const TRUST = [
  { icon: BadgeCheck, title: "Authorized Distributor", copy: "For leading global brands" },
  { icon: CheckCircle2, title: "Genuine OEM Products", copy: "100% original & certified" },
  { icon: Handshake, title: "Long-Term Partnerships", copy: "Built on trust & performance" },
];

/* --------------------------------- Section -------------------------------- */

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
} as const;

export function WhyAbuFarha() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative bg-secondary/40 py-16 lg:py-20"
    >
      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-10">
        {/* ------------------------------ Hero row ----------------------------- */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            {...fade}
            transition={{ duration: 0.65, ease: EASE }}
            className="flex min-w-0 flex-col justify-center lg:col-span-5"
          >
            <Eyebrow index="03">Why AbuFarha</Eyebrow>
            <h2
              id="why-heading"
              className="mt-6 font-display text-[2.2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.9rem]"
            >
              Engineering Confidence.
              <span className="block text-primary">Clinical Excellence.</span>
            </h2>
            <p className="mt-5 max-w-xl font-display text-[calc(17.5*var(--desktop-px-unit))] font-semibold leading-snug text-ink/80">
              Trusted by hospitals across Africa and the Middle East.
            </p>
            <p className="mt-4 max-w-xl text-[calc(16*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
              We supply, install and commission advanced medical systems — then train your teams and
              support the technology for its full lifecycle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 min-w-0 rounded-full px-6">
                <Link to="/contact">
                  <Wrench aria-hidden="true" />
                  Talk to an Engineer
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-12 min-w-0 rounded-full border-border bg-white px-6"
              >
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight
                    aria-hidden="true"
                    className="text-primary transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="grid min-w-0 gap-6 lg:col-span-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)]"
          >
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-(--shadow-panel)">
              <img
                src={heroImg}
                alt="AbuFarha biomedical engineers commissioning a cath lab system in a hospital suite"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="h-full min-h-[16rem] w-full object-cover max-h-[22rem] xl:max-h-none"
              />
            </div>

            <div className="@container flex min-w-0 flex-col justify-center rounded-2xl border border-border/70 bg-white p-4 shadow-(--shadow-panel) sm:p-5">
              <div className="grid grid-cols-1 gap-2 @[26rem]:grid-cols-2">
                {STATS.map((s) => (
                  <StatCard key={s.label + s.sub} stat={s} />
                ))}
              </div>
              <div className="mt-4 flex min-w-0 items-center gap-2 border-t border-border/70 pt-4">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-primary"
                  strokeWidth={2}
                />
                <span className="min-w-0 text-[calc(13*var(--desktop-px-unit))] leading-snug text-muted-foreground [overflow-wrap:anywhere]">
                  Trusted partner for mission-critical medical projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------------------- Value cards ---------------------------- */}
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:mt-14 xl:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.li
                key={p.title}
                {...fade}
                transition={{ duration: 0.5, delay: 0.04 * (i % 4), ease: EASE }}
                className="group flex min-w-0 flex-col items-center rounded-2xl border border-border/70 bg-white p-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-panel)"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary ring-1 ring-inset ring-primary/10">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold leading-tight tracking-[-0.01em] text-ink [overflow-wrap:anywhere]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[calc(13.5*var(--desktop-px-unit))] leading-[1.6] text-muted-foreground">
                  {p.copy}
                </p>
                <span className="mt-5 h-[2px] w-8 rounded-full bg-primary transition-all duration-300 group-hover:w-12" />
              </motion.li>
            );
          })}
        </ul>

        {/* -------------------------- Partners + CTA --------------------------- */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12">
          <motion.div
            {...fade}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex min-w-0 flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] lg:col-span-5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <h3 className="font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold tracking-[-0.01em] text-ink">
                Technology Partners
              </h3>
              <span className="h-[2px] w-8 shrink-0 rounded-full bg-primary" />
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-3">
              {PARTNERS.map((b) => (
                <li
                  key={b.name}
                  className="flex h-14 min-w-0 flex-1 basis-[7.5rem] items-center justify-center rounded-xl border border-border/60 bg-white px-4"
                >
                  <img
                    src={b.url}
                    alt={b.name}
                    loading="lazy"
                    decoding="async"
                    style={{ height: b.h }}
                    className="w-auto max-w-full object-contain"
                  />
                </li>
              ))}
            </ul>

            <ul className="mt-6 grid grid-cols-1 gap-4 border-t border-border/70 pt-5 sm:grid-cols-3">
              {TRUST.map((t) => {
                const Icon = t.icon;
                return (
                  <li key={t.title} className="flex min-w-0 items-start gap-2.5">
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span className="min-w-0">
                      <span className="block text-[calc(13.5*var(--desktop-px-unit))] font-bold leading-snug text-ink [overflow-wrap:anywhere]">
                        {t.title}
                      </span>
                      <span className="block text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground [overflow-wrap:anywhere]">
                        {t.copy}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
            className="grid min-w-0 grid-cols-1 overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:col-span-7"
          >
            <img
              src={engineerImg}
              alt="AbuFarha field service engineer available to advise on system selection"
              loading="lazy"
              decoding="async"
              width={800}
              height={800}
              className="h-full max-h-[16rem] w-full object-cover object-center sm:max-h-none"
            />
            <div className="flex min-w-0 flex-col justify-center bg-primary/4 p-6 sm:p-8">
              <h3 className="font-display text-[1.45rem] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                Need Help Choosing the Right Medical System?
              </h3>
              <p className="mt-3 max-w-md text-[calc(14.5*var(--desktop-px-unit))] leading-[1.65] text-muted-foreground">
                Our engineers help you identify the most suitable technology for your hospital or
                diagnostic center — based on caseload, site conditions and budget.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="group h-12 min-w-0 rounded-full px-6">
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
                  className="group h-12 min-w-0 rounded-full border-border bg-white px-6"
                >
                  <Link to="/contact">
                    Contact Our Team
                    <ArrowRight
                      aria-hidden="true"
                      className="text-primary transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
