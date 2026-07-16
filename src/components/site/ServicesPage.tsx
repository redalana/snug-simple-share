import { useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  GraduationCap,
  Headphones,
  Package,
  Phone,
  PhoneCall,
  Radar,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  Upload,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import { PhoneField } from "./PhoneField";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero-cathlab.jpg";
import cathLabImg from "@/assets/beyond-cathlab.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import usImg from "@/assets/sol-ultrasound.jpg";
import xrayImg from "@/assets/sol-xray.jpg";
import monitorImg from "@/assets/aftersales-remote-engineer.jpg";
import labImg from "@/assets/sol-petct.jpg";
import remoteImg from "@/assets/aftersales-remote.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */

const HERO_BADGES = [
  { icon: ShieldCheck, label: "OEM Certified Engineers" },
  { icon: Headphones, label: "24/7 Technical Support" },
  { icon: Package, label: "Genuine OEM Parts" },
  { icon: Timer, label: "Fast Response Time" },
];

const HERO_KPIS: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: BadgeCheck, value: "25+", label: "Years of Experience" },
  { icon: Radar, value: "10+", label: "Countries Served" },
  { icon: Cpu, value: "500+", label: "Installations Supported" },
  { icon: Sparkles, value: "98%", label: "Customer Satisfaction" },
];

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Advanced cath lab equipment monitored by AbuFarha service engineers"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[100rem] items-center gap-10 px-6 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:px-10 lg:py-28">
        <div className="min-w-0">
          <Eyebrow tone="light" index="01">
            Our Services
          </Eyebrow>
          <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4rem]">
            Expert care for
            <br />
            advanced technology.
            <br />
            <span className="text-primary">Always. Everywhere.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75">
            End-to-end service solutions for medical imaging and interventional
            systems to maximize uptime, safety and performance across your entire
            facility.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#request"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_-18px_var(--primary)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request a Service
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/10"
            >
              Talk to an Engineer
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {HERO_BADGES.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 text-[11.5px] font-medium text-white/70"
              >
                <b.icon className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
                <span className="leading-tight">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* KPI panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl border border-white/10 bg-ink/70 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-md sm:p-6"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-primary/20 opacity-60" />
          <div className="relative space-y-4">
            {HERO_KPIS.map((k) => (
              <div
                key={k.label}
                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-3.5 transition-colors duration-300 hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
                  <k.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <div className="font-display text-2xl font-extrabold tracking-tight text-white">
                    {k.value}
                  </div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-white/60">
                    {k.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ECOSYSTEM                                                         */
/* ------------------------------------------------------------------ */

type EcoStep = { n: string; title: string; desc: string; icon: LucideIcon };

const ECO_STEPS: EcoStep[] = [
  { n: "01", title: "Assessment", desc: "We evaluate your equipment and operational needs.", icon: ClipboardCheck },
  { n: "02", title: "Planning", desc: "We design a tailored service plan with clear timelines.", icon: CalendarClock },
  { n: "03", title: "Implementation", desc: "Our certified engineers install and commission with precision.", icon: Settings2 },
  { n: "04", title: "Optimization", desc: "We test, calibrate and optimize for peak performance.", icon: TrendingUp },
  { n: "05", title: "Maintenance", desc: "Preventive care and upgrades to extend equipment life.", icon: Wrench },
  { n: "06", title: "Support", desc: "24/7 support for minimal downtime and total reliability.", icon: Headphones },
];

function Ecosystem() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center" index="02">
              Lifecycle
            </Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Our Service <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="mt-3 text-[14px] text-muted-foreground">
            A comprehensive lifecycle of care — from planning to long-term support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {ECO_STEPS.map((s, i) => {
            const isActive = i === active;
            const isPrev = i < active;
            return (
              <div
                key={s.n}
                className="relative"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                {i < ECO_STEPS.length - 1 && (
                  <div className="pointer-events-none absolute left-[calc(50%+2.5rem)] right-[-50%] top-10 hidden h-px lg:block">
                    <div className="relative h-full w-full overflow-hidden">
                      <div className="absolute inset-0 border-t border-dashed border-ink/15" />
                      <motion.div
                        initial={false}
                        animate={{ scaleX: isPrev || isActive ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformOrigin: "left" }}
                        className="absolute inset-0 border-t-2 border-primary"
                      />
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      boxShadow: isActive
                        ? "0 20px 40px -18px var(--primary)"
                        : "0 6px 20px -12px rgba(15,23,42,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      "relative flex h-20 w-20 items-center justify-center rounded-full border bg-white text-ink transition-colors duration-300",
                      isActive ? "border-primary text-primary" : "border-ink/10",
                    )}
                  >
                    <s.icon className="h-7 w-7" strokeWidth={1.6} />
                    <span
                      className={cn(
                        "absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white shadow",
                        isActive ? "bg-primary" : "bg-ink/80",
                      )}
                    >
                      {s.n}
                    </span>
                  </motion.div>
                  <h3 className="mt-5 font-display text-[15px] font-extrabold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-[14ch] text-[12px] leading-[1.55] text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CORE CAPABILITIES                                                 */
/* ------------------------------------------------------------------ */

type Capability = { icon: LucideIcon; title: string; desc: string; feature?: boolean };

const CAPABILITIES: Capability[] = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Professional installation and commissioning by OEM certified engineers, delivered on time and to spec.",
    feature: true,
  },
  {
    icon: CalendarClock,
    title: "Preventive Maintenance",
    desc: "Scheduled maintenance to prevent downtime and ensure reliability of critical systems.",
  },
  {
    icon: Settings2,
    title: "Corrective Maintenance",
    desc: "Rapid diagnosis and repair to restore performance and clinical safety.",
  },
  {
    icon: TrendingUp,
    title: "Calibration & QA Testing",
    desc: "Accurate calibration and quality assurance for consistent, compliant results.",
  },
  {
    icon: RefreshCw,
    title: "Upgrades & Retrofits",
    desc: "Modernization and upgrades to enhance performance and extend equipment life.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    desc: "Hands-on training for your staff and ongoing technical support from certified specialists.",
  },
];

function CoreCapabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow tone="light" index="03">
            What We Do
          </Eyebrow>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
            Core Service <span className="text-primary">Capabilities</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.06]",
                c.feature ? "lg:col-span-6 lg:row-span-2 lg:p-10" : "lg:col-span-3",
              )}
            >
              {c.feature && (
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              )}
              <div className="relative">
                <span
                  className={cn(
                    "flex items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary group-hover:text-white",
                    c.feature ? "h-14 w-14" : "h-11 w-11",
                  )}
                >
                  <c.icon className={c.feature ? "h-6 w-6" : "h-5 w-5"} strokeWidth={1.7} />
                </span>
                <h3
                  className={cn(
                    "mt-5 font-display font-extrabold leading-tight tracking-tight text-white",
                    c.feature ? "text-2xl sm:text-3xl" : "text-lg",
                  )}
                >
                  {c.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-white/65",
                    c.feature ? "text-[15px] leading-relaxed max-w-lg" : "text-[13px] leading-[1.6]",
                  )}
                >
                  {c.desc}
                </p>
                {c.feature && (
                  <a
                    href="#request"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
                  >
                    Request installation
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  EQUIPMENT (MASONRY)                                               */
/* ------------------------------------------------------------------ */

type EquipCard = { title: string; img: string; href: string; feature?: boolean; className?: string };

const EQUIP: EquipCard[] = [
  { title: "Cath Lab Systems", img: cathLabImg, href: "/categories", feature: true },
  { title: "MRI Scanners", img: mriImg, href: "/categories" },
  { title: "CT Scanners", img: ctImg, href: "/categories" },
  { title: "Ultrasound Systems", img: usImg, href: "/categories" },
  { title: "X-Ray & Fluoroscopy", img: xrayImg, href: "/categories" },
  { title: "Patient Monitoring", img: monitorImg, href: "/categories" },
  { title: "Lab & EP Systems", img: labImg, href: "/categories" },
];

function Equipment() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center" index="04">
              Equipment
            </Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Equipment We <span className="text-primary">Support</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          {/* Feature */}
          <EquipCardView card={EQUIP[0]} className="lg:col-span-5 lg:row-span-2 lg:min-h-[520px]" />
          <EquipCardView card={EQUIP[1]} className="lg:col-span-4 lg:min-h-[250px]" />
          <EquipCardView card={EQUIP[2]} className="lg:col-span-3 lg:min-h-[250px]" />
          <EquipCardView card={EQUIP[3]} className="lg:col-span-3 lg:min-h-[250px]" />
          <EquipCardView card={EQUIP[4]} className="lg:col-span-2 lg:min-h-[250px]" />
          <EquipCardView card={EQUIP[5]} className="lg:col-span-2 lg:min-h-[250px]" />
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <EquipCardView card={EQUIP[6]} className="lg:col-span-12 lg:min-h-[220px]" />
        </div>
      </div>
    </section>
  );
}

function EquipCardView({ card, className }: { card: EquipCard; className?: string }) {
  return (
    <Link
      to={card.href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-ink shadow-[0_10px_30px_-16px_rgba(15,23,42,0.4)] min-h-[220px]",
        className,
      )}
    >
      <img
        src={card.img}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent transition-opacity duration-500 group-hover:from-ink/90" />
      <div className="absolute inset-0 flex items-end justify-between p-5">
        <h3 className={cn("font-display font-extrabold leading-tight tracking-tight text-white", card.feature ? "text-2xl sm:text-3xl" : "text-lg")}>
          {card.title}
        </h3>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_24px_-10px_var(--primary)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  REMOTE SERVICE CENTER                                             */
/* ------------------------------------------------------------------ */

const REMOTE_FEATURES = [
  { icon: Radar, title: "Remote Diagnostics", desc: "Real-time system diagnostics from our operations center." },
  { icon: TrendingUp, title: "Predictive Maintenance", desc: "AI-driven insights that prevent failures before they occur." },
  { icon: RefreshCw, title: "Software Updates", desc: "Managed OEM firmware and clinical software deployments." },
  { icon: Cpu, title: "Performance Monitoring", desc: "Continuous KPIs on uptime, image quality and throughput." },
  { icon: ShieldCheck, title: "OEM-Level Support", desc: "Escalation to the manufacturer when it truly matters." },
];

function RemoteServiceCenter() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="min-w-0">
          <Eyebrow tone="light" index="05">
            Always Watching
          </Eyebrow>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.55rem]">
            Remote Service <span className="text-primary">Center</span>
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
            Our remote experts continuously monitor your systems to detect issues
            early, deliver predictive maintenance and keep your operations
            running smoothly — around the clock.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {REMOTE_FEATURES.map((f) => (
              <li
                key={f.title}
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-4.5 w-4.5 h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <div className="text-[13.5px] font-semibold text-white">{f.title}</div>
                  <div className="mt-0.5 text-[12px] leading-[1.55] text-white/60">{f.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <img
              src={remoteImg}
              alt="AbuFarha engineer monitoring medical equipment in the remote service center"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/10 to-transparent" />

            {/* Live indicators */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
              <motion.span
                animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]"
              />
              Live · 24 sites monitored
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              {[Zap, TrendingUp, ShieldCheck].map((Icon, idx) => (
                <motion.span
                  key={idx}
                  animate={reduce ? undefined : { y: [0, -3, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.3 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur"
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  COVERAGE                                                          */
/* ------------------------------------------------------------------ */

const COVERAGE = [
  { title: "Africa", desc: "On-ground engineers across 5+ countries", icon: Radar },
  { title: "Middle East", desc: "Regional hubs in the GCC and Levant", icon: Radar },
  { title: "Central Asia", desc: "Dedicated presence in Uzbekistan", icon: Radar },
  { title: "24/7 Support", desc: "Round-the-clock service desk", icon: Headphones },
  { title: "Live Hotline", desc: "Direct line to certified specialists", icon: PhoneCall },
];

function Coverage() {
  return (
    <section className="bg-accent/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Eyebrow index="06">Global Reach</Eyebrow>
            <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Our Service <span className="text-primary">Coverage</span>
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-muted-foreground">
            A regional footprint backed by OEM partnerships — so genuine parts and
            certified engineers are always close by.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {COVERAGE.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-border/70 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_44px_-24px_rgba(15,23,42,0.35)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-white">
                <c.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-display text-[15px] font-extrabold tracking-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-1 text-[12.5px] leading-[1.5] text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Compact world dot-map */}
        <div className="mt-10 flex justify-center">
          <DotMap />
        </div>
      </div>
    </section>
  );
}

function DotMap() {
  const dots = useMemo(() => {
    const list: { x: number; y: number; hi: boolean }[] = [];
    const cols = 60;
    const rows = 18;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // rough continents mask via sine/probability
        const cx = (c - cols / 2) / (cols / 2);
        const cy = (r - rows / 2) / (rows / 2);
        const d = Math.abs(Math.sin(c * 0.55 + r * 0.31)) + (1 - Math.abs(cy)) * 0.3;
        if (d > 0.85) {
          const hi =
            (c > 30 && c < 40 && r > 6 && r < 12) || // MENA
            (c > 26 && c < 34 && r > 9 && r < 15) || // Africa
            (c > 38 && c < 46 && r > 5 && r < 10); // Central Asia
          list.push({ x: c, y: r, hi });
        }
      }
    }
    return list;
  }, []);
  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-3xl">
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x * 10 + 5}
          cy={d.y * 11 + 5}
          r={d.hi ? 2 : 1.4}
          fill={d.hi ? "var(--primary)" : "currentColor"}
          className={d.hi ? "" : "text-ink/25"}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  REQUEST FORM                                                      */
/* ------------------------------------------------------------------ */

const SERVICE_TYPES = [
  "Installation & Commissioning",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Calibration & QA",
  "Upgrades & Retrofits",
  "Training",
];

const EQUIPMENT_TYPES = [
  "MRI Scanner",
  "CT Scanner",
  "Cath Lab",
  "Ultrasound",
  "X-Ray / Fluoroscopy",
  "Patient Monitoring",
  "Lab & EP",
  "Other",
];

type FormState = {
  name: string;
  hospital: string;
  email: string;
  phone: string;
  serviceType: string;
  equipmentType: string;
  serial: string;
  visitDate: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  hospital: "",
  email: "",
  phone: "",
  serviceType: "",
  equipmentType: "",
  serial: "",
  visitDate: "",
  message: "",
};

function RequestForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!form.hospital.trim()) e.hospital = "Hospital or facility is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.phone.replace(/\D/g, "").length < 6) e.phone = "Enter a valid phone";
    if (!form.serviceType) e.serviceType = "Select a service type";
    if (!form.equipmentType) e.equipmentType = "Select an equipment type";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please describe the problem (min 10 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFiles = (list: FileList | null) => {
    if (!list) return;
    const arr = Array.from(list).slice(0, 5 - files.length);
    setFiles((f) => [...f, ...arr]);
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(EMPTY_FORM);
    setFiles([]);
  };

  return (
    <section id="request" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Eyebrow index="07">Get in touch</Eyebrow>
            <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Request a <span className="text-primary">Service</span>
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              Tell us about your equipment and service needs. A certified engineer
              will get back to you within one business day.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: PhoneCall, label: "24/7 Service Desk", value: "+962 6 000 0000" },
                { icon: ShieldCheck, label: "SLA-backed response", value: "As fast as 4 hours" },
                { icon: BadgeCheck, label: "OEM-authorized", value: "Genuine parts & procedures" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <c.icon className="h-4.5 w-4.5 h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-[14px] font-semibold text-ink">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-2xl border border-border bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/30">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink">
                  Request received
                </h3>
                <p className="mt-2 max-w-sm text-[14px] text-muted-foreground">
                  Thank you — one of our certified engineers will reach out within
                  one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary/50"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputCls(!!errors.name)}
                    placeholder="Dr. Sarah Ahmad"
                  />
                </Field>
                <Field label="Hospital / Facility" error={errors.hospital}>
                  <input
                    value={form.hospital}
                    onChange={(e) => update("hospital", e.target.value)}
                    className={inputCls(!!errors.hospital)}
                    placeholder="King Hospital"
                  />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputCls(!!errors.email)}
                    placeholder="you@hospital.com"
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone}>
                  <PhoneField
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    hasError={!!errors.phone}
                  />
                </Field>
                <Field label="Service Type" error={errors.serviceType}>
                  <select
                    value={form.serviceType}
                    onChange={(e) => update("serviceType", e.target.value)}
                    className={inputCls(!!errors.serviceType)}
                  >
                    <option value="">Select Service</option>
                    {SERVICE_TYPES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Equipment Type" error={errors.equipmentType}>
                  <select
                    value={form.equipmentType}
                    onChange={(e) => update("equipmentType", e.target.value)}
                    className={inputCls(!!errors.equipmentType)}
                  >
                    <option value="">Select Equipment</option>
                    {EQUIPMENT_TYPES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Equipment Serial (optional)">
                  <input
                    value={form.serial}
                    onChange={(e) => update("serial", e.target.value)}
                    className={inputCls(false)}
                    placeholder="SN-000000"
                  />
                </Field>
                <Field label="Preferred Visit Date">
                  <input
                    type="date"
                    value={form.visitDate}
                    onChange={(e) => update("visitDate", e.target.value)}
                    className={inputCls(false)}
                  />
                </Field>
                <Field className="sm:col-span-2" label="Problem Description" error={errors.message}>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={4}
                    className={cn(inputCls(!!errors.message), "resize-y")}
                    placeholder="Describe the issue, error codes, when it started…"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <label className="block text-[12px] font-semibold text-ink">
                    Upload Images (optional)
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      onFiles(e.dataTransfer.files);
                    }}
                    onClick={() => fileRef.current?.click()}
                    className={cn(
                      "mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition-colors",
                      dragOver
                        ? "border-primary bg-primary/5"
                        : "border-border bg-secondary/30 hover:border-primary/40",
                    )}
                  >
                    <Upload className="h-5 w-5 text-primary" />
                    <div className="mt-2 text-[13px] font-semibold text-ink">
                      Drop files here or click to browse
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-muted-foreground">
                      Up to 5 images · JPG / PNG · max 10MB each
                    </div>
                    <input
                      ref={fileRef}
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => onFiles(e.target.files)}
                    />
                  </div>
                  {files.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {files.map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-[12px] text-ink"
                        >
                          <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                          <span className="max-w-[160px] truncate">{f.name}</span>
                          <button
                            type="button"
                            onClick={() =>
                              setFiles((arr) => arr.filter((_, idx) => idx !== i))
                            }
                            className="ml-1 text-muted-foreground hover:text-destructive"
                            aria-label={`Remove ${f.name}`}
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_-18px_var(--primary)] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Submit Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="block text-[12px] font-semibold text-ink">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-[11.5px] text-destructive">{error}</span>}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "h-12 w-full rounded-xl border bg-secondary/30 px-3.5 text-sm text-ink outline-none transition-all",
    "focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 focus:shadow-[0_6px_20px_-8px_var(--primary)]",
    hasError ? "border-destructive" : "border-border",
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                         */
/* ------------------------------------------------------------------ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img
        src={ctaImg}
        alt=""
        className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-70 lg:block"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/40" />
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.6rem]">
            Your technology never sleeps.
            <br />
            <span className="text-primary">Neither do we.</span>
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
            Count on our experts to keep your critical systems running — every
            hour, every day.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#request"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_-18px_var(--primary)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Request a Service
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/10"
          >
            Talk to an Engineer
            <Phone className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Ecosystem />
      <CoreCapabilities />
      <Equipment />
      <RemoteServiceCenter />
      <Coverage />
      <RequestForm />
      <FinalCTA />
    </>
  );
}
