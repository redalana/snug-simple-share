import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardList,
  Cpu,
  GraduationCap,
  Headphones,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  PenTool,
  Phone,
  Radar,
  Settings2,
  ShieldCheck,
  Upload,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Eyebrow } from "./Eyebrow";
import { PhoneField } from "./PhoneField";
import { COUNTRIES as AFRICA_COUNTRIES, MAP_W, MAP_H } from "./africaMapData";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero-cathlab.jpg";
import mriImg from "@/assets/sol-mri.jpg";
import ctImg from "@/assets/sol-ct.jpg";
import cathImg from "@/assets/beyond-cathlab.jpg";
import petImg from "@/assets/sol-petct.jpg";
import xrayImg from "@/assets/sol-xray.jpg";
import usImg from "@/assets/sol-ultrasound.jpg";
import warehouseImg from "@/assets/aftersales-warehouse.jpg";
import remoteImg from "@/assets/aftersales-remote.jpg";
import remoteEngineerImg from "@/assets/aftersales-remote-engineer.jpg";
import engineeringImg from "@/assets/aftersales-engineering.jpg";
import ctaImg from "@/assets/aftersales-cta.jpg";
import trainingImg from "@/assets/aftersales-hero.jpg";

/* ================================================================== */
/*  HERO                                                              */
/* ================================================================== */

const HERO_KPIS = [
  { icon: BadgeCheck, value: "25+", label: "Years of Experience" },
  { icon: Users, value: "500+", label: "Systems Supported" },
  { icon: MapPin, value: "10+", label: "Countries Served" },
  { icon: LifeBuoy, value: "24/7", label: "Technical Support" },
];

type HeroSlide = {
  img: string;
  eyebrow: string;
  title: React.ReactNode;
  desc: string;
  cta: { label: string; href: string };
  highlights: { icon: LucideIcon; label: string }[];
};

const HERO_SLIDES: HeroSlide[] = [
  {
    img: heroImg,
    eyebrow: "Our Services",
    title: (
      <>
        Complete Healthcare
        <br />
        Engineering Services.
        <br />
        <span className="text-primary">From Planning to Lifetime Support.</span>
      </>
    ),
    desc: "End-to-end delivery for imaging, cath lab and critical care systems — planning, installation, calibration and long-term uptime, all under one accountable partner.",
    cta: { label: "Explore All Services", href: "#request" },
    highlights: [
      { icon: Wrench, label: "Installation & Commissioning" },
      { icon: GraduationCap, label: "Clinical Training" },
      { icon: Settings2, label: "Preventive Maintenance" },
      { icon: Package, label: "Spare Parts & Support" },
    ],
  },
  {
    img: trainingImg,
    eyebrow: "Clinical Enablement",
    title: (
      <>
        Clinical Training &
        <br />
        <span className="text-primary">Application Support.</span>
      </>
    ),
    desc: "Certified application specialists train your radiologists, technologists and biomedical teams on real protocols — turning advanced equipment into confident daily practice.",
    cta: { label: "Request Training Program", href: "#request" },
    highlights: [
      { icon: GraduationCap, label: "User Operation Training" },
      { icon: ClipboardList, label: "Protocol Optimization" },
      { icon: ShieldCheck, label: "Safety & Compliance" },
      { icon: Users, label: "Refresher Sessions" },
    ],
  },
  {
    img: engineeringImg,
    eyebrow: "Preventive Maintenance",
    title: (
      <>
        Predictable Uptime.
        <br />
        <span className="text-primary">Preventive Maintenance.</span>
      </>
    ),
    desc: "Scheduled inspection, calibration and performance verification aligned with OEM standards — protecting image quality, patient safety and the lifespan of every system.",
    cta: { label: "Book a Maintenance Plan", href: "#request" },
    highlights: [
      { icon: Settings2, label: "Routine Inspections" },
      { icon: BadgeCheck, label: "OEM Calibration" },
      { icon: ShieldCheck, label: "Safety Testing" },
      { icon: ClipboardList, label: "Compliance Reports" },
    ],
  },
  {
    img: remoteEngineerImg,
    eyebrow: "Technical Support",
    title: (
      <>
        24/7 Technical Support
        <br />
        <span className="text-primary">& Warranty Coverage.</span>
      </>
    ),
    desc: "A dedicated service desk, priority on-site response and full warranty administration — minimizing downtime for every critical system in your department.",
    cta: { label: "Talk to Support Now", href: "tel:+96264026063" },
    highlights: [
      { icon: Headphones, label: "24/7 Service Desk" },
      { icon: Radar, label: "Remote Diagnostics" },
      { icon: Wrench, label: "On-Site Response" },
      { icon: ShieldCheck, label: "Warranty Coverage" },
    ],
  },
  {
    img: ctaImg,
    eyebrow: "Long-Term Partnership",
    title: (
      <>
        A Lifetime
        <br />
        <span className="text-primary">Engineering Partnership.</span>
      </>
    ),
    desc: "From day-one commissioning to year-ten upgrades — spare parts availability, technology refresh and continuous training that keep your investment performing for its full lifecycle.",
    cta: { label: "Become a Partner", href: "#request" },
    highlights: [
      { icon: LifeBuoy, label: "Lifetime Support" },
      { icon: Package, label: "OEM Spare Parts" },
      { icon: Cpu, label: "Upgrades & Refresh" },
      { icon: BadgeCheck, label: "Trusted Partner" },
    ],
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;

  // autoplay every 6s, pause on hover
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const goTo = (i: number) => setIndex(((i % total) + total) % total);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0d0f12] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="AbuFarha healthcare engineering services"
    >
      {/* background image layers — fade transition */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.eyebrow}
            src={s.img}
            alt=""
            aria-hidden="true"
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out",
              i === index ? "opacity-80" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/85 to-[#0d0f12]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/70 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(480*var(--desktop-px-unit))] max-w-[100rem] gap-10 px-6 pt-24 pb-20 lg:min-h-[calc(460*var(--desktop-px-unit))] lg:grid-cols-[1.35fr_0.65fr] lg:gap-16 lg:px-10 lg:pt-20 lg:pb-16">
        {/* LEFT — animated content */}
        <div className="relative min-h-[calc(460*var(--desktop-px-unit))]">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.eyebrow}
              aria-hidden={i !== index}
              className={cn(
                "transition-opacity duration-700 ease-out",
                i === index
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0",
              )}
            >
              <Eyebrow tone="light">{s.eyebrow}</Eyebrow>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[calc(46*var(--desktop-px-unit))]">
                {s.title}
              </h1>
              <p className="mt-6 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-[1.75] text-white/70">
                {s.desc}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={s.cta.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  {s.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {s.highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:border-primary/60 hover:bg-white/[0.07]"
                  >
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                    <div className="mt-3 text-[calc(12.5*var(--desktop-px-unit))] font-semibold leading-snug text-white">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — KPI PANEL (persistent across slides) */}
        <div className="lg:justify-self-end">
          <div className="rounded-2xl border border-white/12 bg-[#111418]/85 p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md lg:min-w-[calc(320*var(--desktop-px-unit))]">
            <div className="flex flex-col divide-y divide-white/10">
              {HERO_KPIS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-2xl font-extrabold leading-none text-white">
                      {value}
                    </div>
                    <div className="mt-1.5 text-[calc(12*var(--desktop-px-unit))] uppercase tracking-[0.14em] text-white/60">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NAV ARROWS */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:border-primary hover:bg-primary hover:text-primary-foreground md:grid"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition hover:border-primary hover:bg-primary hover:text-primary-foreground md:grid"
      >
        <ArrowRight className="h-4 w-4" />
      </button>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.eyebrow}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-8 bg-primary" : "w-3 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}



/* ================================================================== */
/*  HOW WE SUPPORT YOU                                                */
/* ================================================================== */

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageCircle, title: "Consultation", desc: "We understand your needs and recommend the right solution." },
  { icon: ClipboardList, title: "Planning", desc: "We design a tailored plan with the best technology and workflow." },
  { icon: Wrench, title: "Installation", desc: "Our certified engineers install and configure the system with precision." },
  { icon: GraduationCap, title: "Training", desc: "We train your team for safe, efficient and confident operation." },
  { icon: Settings2, title: "Maintenance", desc: "Preventive and corrective maintenance to ensure peak performance." },
  { icon: Headphones, title: "Lifetime Support", desc: "We stand by you with 24/7 support and long-term partnership." },
];

function HowWeSupport() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            How We Support You
          </h2>
          <div className="mx-auto mt-3 h-[calc(3*var(--desktop-px-unit))] w-14 rounded-full bg-primary" />
        </div>

        <div className="relative mt-16">
          {/* dotted connector */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] right-[6%] top-[calc(42*var(--desktop-px-unit))] hidden h-px border-t-2 border-dotted border-primary/60 md:block"
          />
          <ol className="relative grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:grid-cols-6 md:gap-y-0">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative flex flex-col items-center px-3 text-center">
                <div className="relative grid h-[calc(84*var(--desktop-px-unit))] w-[calc(84*var(--desktop-px-unit))] place-items-center rounded-full border border-border bg-white shadow-sm">
                  <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                  <span className="absolute -bottom-2 grid h-6 w-6 place-items-center rounded-full bg-primary text-[calc(10*var(--desktop-px-unit))] font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-foreground">
                  {title}
                </div>
                <p className="mt-2 max-w-[calc(180*var(--desktop-px-unit))] text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground">
                  {desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  OUR CORE SERVICES                                                 */
/* ================================================================== */

const CORE: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
  img: string;
}[] = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Professional installation, configuration, calibration and testing according to OEM standards.",
    bullets: [
      "Site preparation review",
      "System installation",
      "Calibration & testing",
      "Acceptance testing",
      "Clinical handover",
    ],
    img: cathImg,
  },
  {
    icon: Settings2,
    title: "Preventive Maintenance",
    desc: "Scheduled maintenance keeps your equipment reliable and extends its lifespan.",
    bullets: [
      "Routine inspections",
      "Performance check",
      "Calibration",
      "Safety tests",
      "Reports & tracking",
    ],
    img: engineeringImg,
  },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    desc: "On-site and remote training for doctors, technologists and biomedical engineers.",
    bullets: [
      "User operation training",
      "Protocol optimization",
      "Image quality",
      "Safety & compliance",
      "Refresher programs",
    ],
    img: trainingImg,
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    desc: "Genuine OEM and premium compatible parts with fast regional delivery.",
    bullets: [
      "OEM certified parts",
      "Factory refurbished parts",
      "Wide inventory",
      "Fast delivery",
      "Warranty included",
    ],
    img: warehouseImg,
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "Expert support whenever you need it to minimize downtime.",
    bullets: [
      "Remote diagnosis",
      "On-site support",
      "Troubleshooting",
      "Software support",
      "Priority response",
    ],
    img: remoteEngineerImg,
  },
  {
    icon: Radar,
    title: "Remote Diagnostics",
    desc: "We remotely monitor your systems to detect issues early and prevent failures.",
    bullets: [
      "System health monitoring",
      "Error code analysis",
      "Performance trends",
      "Predictive alerts",
      "Software updates",
    ],
    img: remoteImg,
  },
];

function ServiceCard({ item }: { item: (typeof CORE)[number] }) {
  const Icon = item.icon;
  return (
    <article className="grid grid-cols-[42%_58%] overflow-hidden rounded-2xl border border-border bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg">
      <div className="relative">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10">
            <Icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.7} />
          </div>
          <h3 className="font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold leading-tight text-foreground">
            {item.title}
          </h3>
        </div>
        <p className="mt-3 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
          {item.desc}
        </p>
        <ul className="mt-3 space-y-1.5">
          {item.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-[calc(12.5*var(--desktop-px-unit))] text-foreground/85">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/15">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <a
          href="#request"
          className="mt-4 inline-flex items-center gap-1.5 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-primary hover:underline"
        >
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function CoreServices() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Our Core Services
          </h2>
          <div className="mx-auto mt-3 h-[calc(3*var(--desktop-px-unit))] w-14 rounded-full bg-primary" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CORE.map((c) => (
            <ServiceCard key={c.title} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  EQUIPMENT WE SUPPORT                                              */
/* ================================================================== */

const EQUIPMENT: { name: string; img: string; services: string[] }[] = [
  { name: "MRI Systems", img: mriImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
  { name: "CT Scanners", img: ctImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
  { name: "Cath Lab Systems", img: cathImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
  { name: "PET/CT Systems", img: petImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
  { name: "X-Ray & Fluoroscopy", img: xrayImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
  { name: "Ultrasound Systems", img: usImg, services: ["Installation", "Calibration", "Maintenance", "Software Updates", "Clinical Training"] },
];

function Equipment() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Equipment We Support
          </h2>
          <div className="mx-auto mt-3 h-[calc(3*var(--desktop-px-unit))] w-14 rounded-full bg-primary" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {EQUIPMENT.map((eq) => (
            <article
              key={eq.name}
              className="overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={eq.img} alt={eq.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-[calc(14*var(--desktop-px-unit))] font-bold text-foreground">{eq.name}</h3>
                <ul className="mt-3 space-y-1 text-[calc(12*var(--desktop-px-unit))] text-muted-foreground">
                  {eq.services.map((s) => (
                    <li key={s} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#request"
                  className="mt-3 inline-flex items-center gap-1 text-[calc(11.5*var(--desktop-px-unit))] font-semibold text-primary hover:underline"
                >
                  Learn Details <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  WHY HOSPITALS CHOOSE ABUFARHA                                     */
/* ================================================================== */

const WHY: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: ShieldCheck, title: "Certified Engineers", desc: "Our biomedical engineers are highly trained and OEM certified with years of field experience." },
  { icon: BadgeCheck, title: "OEM Standards", desc: "We follow manufacturer guidelines and use approved procedures and tools." },
  { icon: Radar, title: "Fast Response", desc: "Quick turnaround time with 24/7 support to minimize downtime." },
  { icon: MapPin, title: "Regional Coverage", desc: "Strong presence across Africa & the Middle East with local support teams." },
];

function WhyChoose() {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid items-center gap-8 rounded-2xl bg-[#0d0f12] px-8 py-10 text-white lg:grid-cols-[minmax(0,calc(240*var(--desktop-px-unit)))_1fr]">
          <h2 className="font-display text-[calc(26*var(--desktop-px-unit))] font-extrabold leading-tight">
            Why Hospitals
            <br />
            Choose AbuFarha
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col">
                <div className="grid h-10 w-10 place-items-center rounded-full border border-primary/40 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                </div>
                <div className="mt-4 font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-white">{title}</div>
                <p className="mt-2 text-[calc(12.5*var(--desktop-px-unit))] leading-relaxed text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  COVERAGE + REQUEST FORM                                           */
/* ================================================================== */

const SERVICE_TYPES = [
  "Installation & Commissioning",
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Clinical Training",
  "Remote Diagnostics",
  "Spare Parts Supply",
];
const EQUIPMENT_TYPES = [
  "MRI",
  "CT Scanner",
  "Cath Lab",
  "PET/CT",
  "X-Ray / Fluoroscopy",
  "Ultrasound",
  "Patient Monitor",
  "Other",
];

function AfricaMap() {
  const supported = useMemo(() => AFRICA_COUNTRIES.filter((c) => c.sup).length, []);
  return (
    <svg
      viewBox={`0 -60 ${MAP_W} ${MAP_H + 60}`}
      className="h-auto w-full"
      aria-label={`Coverage map — ${supported} supported countries`}
    >
      {AFRICA_COUNTRIES.map((c) => (
        <path
          key={c.name}
          d={c.d}
          fill={c.sup ? "var(--primary)" : "#E5E7EB"}
          stroke="#ffffff"
          strokeWidth={0.6}
        />
      ))}
    </svg>
  );
}

function Coverage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="request" className="bg-[#F5F6F8] py-20">
      <div className="mx-auto grid max-w-[100rem] gap-8 px-6 lg:grid-cols-2 lg:px-10">
        {/* LEFT — coverage */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-extrabold text-foreground">
            Our Coverage
          </h2>
          <p className="mt-2 max-w-sm text-[calc(13.5*var(--desktop-px-unit))] text-muted-foreground">
            Supporting healthcare across Africa &amp; the Middle East.
          </p>

          <div className="mt-6 flex items-start gap-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">10+</div>
                <div className="mt-1 text-[calc(11.5*var(--desktop-px-unit))] uppercase tracking-wider text-muted-foreground">Countries</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">60+</div>
                <div className="mt-1 text-[calc(11.5*var(--desktop-px-unit))] uppercase tracking-wider text-muted-foreground">Cities</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-foreground">24/7</div>
                <div className="mt-1 text-[calc(11.5*var(--desktop-px-unit))] uppercase tracking-wider text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden">
            <AfricaMap />
          </div>

          <div className="mt-4 flex items-center gap-6 text-[calc(12*var(--desktop-px-unit))] text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-primary" /> Our Presence
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-gray-300" /> Partner Network
            </span>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-extrabold text-foreground">Request a Service</h2>
          <p className="mt-2 text-[calc(13.5*var(--desktop-px-unit))] text-muted-foreground">
            Tell us about your needs and our team will get back to you.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
              <BadgeCheck className="mx-auto h-8 w-8 text-primary" />
              <div className="mt-3 font-display text-lg font-bold text-foreground">
                Request received
              </div>
              <p className="mt-1 text-[calc(13*var(--desktop-px-unit))] text-muted-foreground">
                Our service desk will reach out shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input required className={inputCls} />
              </Field>
              <Field label="Hospital / Facility" required>
                <input required className={inputCls} />
              </Field>
              <Field label="Email Address" required>
                <input type="email" required className={inputCls} />
              </Field>
              <Field label="Phone Number" required>
                <PhoneFieldWrapper />
              </Field>
              <Field label="Country" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select Country</option>
                  {["Jordan","Saudi Arabia","UAE","Egypt","Iraq","Libya","Sudan","Kenya","Ethiopia","Nigeria"].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>
              <Field label="Service Type" required>
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select Service</option>
                  {SERVICE_TYPES.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Equipment Type">
                <select className={inputCls} defaultValue="">
                  <option value="" disabled>Select Equipment</option>
                  {EQUIPMENT_TYPES.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Equipment Serial Number">
                <input className={inputCls} />
              </Field>
              <Field label="Preferred Visit Date">
                <input type="date" className={inputCls} />
              </Field>
              <Field label="Problem Description" required>
                <textarea required rows={1} placeholder="Please describe the issue or service you need..." className={cn(inputCls, "resize-none")} />
              </Field>

              <div className="sm:col-span-2">
                <label className="text-[calc(12*var(--desktop-px-unit))] font-semibold text-foreground/80">
                  Upload Images (Optional)
                </label>
                <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-[#FAFAFB] px-6 py-8 text-center transition hover:border-primary/60">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <div className="mt-2 text-[calc(13*var(--desktop-px-unit))] text-foreground/80">
                    {fileName ?? "Drag & drop files here"}
                  </div>
                  <div className="text-[calc(11.5*var(--desktop-px-unit))] text-muted-foreground">
                    or click to browse (JPG, PNG, PDF up to 10MB)
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Submit Request <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-white px-3 py-2.5 text-[calc(13.5*var(--desktop-px-unit))] text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function PhoneFieldWrapper() {
  const [value, setValue] = useState("");
  return <PhoneField value={value} onChange={setValue} />;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[calc(12*var(--desktop-px-unit))] font-semibold text-foreground/80">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

/* ================================================================== */
/*  EMERGENCY CTA                                                     */
/* ================================================================== */

function EmergencyCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d0f12] text-white">
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img src={ctaImg} alt="AbuFarha service engineer" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f12] via-[#0d0f12]/70 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-[100rem] gap-8 px-6 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            Need Immediate Support?
            <br />
            <span className="text-primary">We're Available 24/7</span>
          </h2>
          <p className="mt-3 max-w-md text-[calc(13.5*var(--desktop-px-unit))] text-white/70">
            Our engineers are ready to help you anytime, anywhere.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a href="tel:+96264026063" className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-4 transition hover:border-primary/40">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <div className="text-[calc(12*var(--desktop-px-unit))] uppercase tracking-wider text-white/60">Call Us</div>
                <div className="mt-1 text-[calc(13.5*var(--desktop-px-unit))] font-semibold text-white">+20 123 456 7890</div>
              </div>
            </a>
            <a href="https://wa.me/962799741318" className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-4 transition hover:border-primary/40">
              <MessageCircle className="h-5 w-5 text-primary" />
              <div>
                <div className="text-[calc(12*var(--desktop-px-unit))] uppercase tracking-wider text-white/60">WhatsApp</div>
                <div className="mt-1 text-[calc(13.5*var(--desktop-px-unit))] font-semibold text-white">Chat with our team</div>
              </div>
            </a>
            <a href="mailto:support@abufarhamedical.com" className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.04] p-4 transition hover:border-primary/40">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <div className="text-[calc(12*var(--desktop-px-unit))] uppercase tracking-wider text-white/60">Email Us</div>
                <div className="mt-1 text-[calc(13.5*var(--desktop-px-unit))] font-semibold text-white">support@abufarhamedical.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */

export function ServicesPage() {
  return (
    <>
      <Hero />
      <HowWeSupport />
      <CoreServices />
      <Equipment />
      <WhyChoose />
      <Coverage />
      <EmergencyCTA />
    </>
  );
}
