import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Play,
  Globe,
  Users,
  Headphones,
  Heart,
  Scan,
  CircuitBoard,
  Stethoscope,
  Building2,
  Wrench,
  MessageSquare,
  Package,
  Truck,
  HardHat,
  ClipboardCheck,
  GraduationCap,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Boxes,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { WhyAbuFarhaProjects } from "./WhyAbuFarhaProjects";
import {
  WORLD_COUNTRY_PATHS,
  WORLD_MAP_W as MAP_W,
  WORLD_MAP_H as MAP_H,
  WORLD_GEO as GEO,
  WORLD_HIGHLIGHT_NAMES as HIGHLIGHT_NAMES,
  SPHERE_D,
} from "./worldMapFull";
import { REGIONS } from "../turnkey/data";
import heroImg from "@/assets/hero-cathlab.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import solOr from "@/assets/sol-or.jpg";
import whyCathlab from "@/assets/why-cathlab.jpg";
import beyondCathlab from "@/assets/beyond-cathlab.jpg";

/* ============================================================
 * 1. HERO
 * ==========================================================*/
function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-6 pt-14 pb-14 sm:pt-20 sm:pb-16 lg:min-h-[calc(460*var(--desktop-px-unit))] lg:grid-cols-[1.05fr_1.25fr] lg:gap-14 lg:px-10 lg:pt-20 lg:pb-16">
        <div className="flex flex-col justify-center">
          <p className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.28em] text-primary">
            Projects &amp; Experience
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-5 font-display text-[2.375rem] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-[calc(50*var(--desktop-px-unit))] lg:text-[calc(54*var(--desktop-px-unit))]"
          >
            Regional Healthcare
            <br />
            Infrastructure Projects
            <br />
            <span className="text-primary">Across Africa &amp; The Middle East</span>
          </motion.h1>
          <p className="mt-6 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
            Delivering medical imaging, cardiology, women&rsquo;s healthcare,
            turnkey projects, installation, training and long-term support for
            healthcare providers across multiple markets.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-[0_20px_40px_-18px_rgba(225,29,46,0.7)] transition-transform hover:-translate-y-0.5 sm:py-3.5"
            >
              Request Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#story"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground sm:py-3.5"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch Our Story
            </a>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
          >
            <img
              src={heroImg}
              alt="Advanced cardiac cath lab installation"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 2. REGIONAL PRESENCE  — compact map + country list
 * ==========================================================*/
const COUNTRY_SUMMARY: Record<string, string> = {
  Jordan: "Cath Lab Projects",
  Iraq: "Cath Lab • MRI • Ultrasound",
  Syria: "Cath Lab • MRI • IVF",
  Yemen: "Cath Lab • MRI • CT",
  Libya: "Cath Lab • IVF • Digital X-Ray",
  Somalia: "Cardiology Solutions",
  Somaliland: "Cath Lab Projects",
  Egypt: "Cardiology Consumables",
  Uzbekistan: "Cath Lab Projects",
  Bangladesh: "Bone Density Systems",
};

function RegionalPresence() {
  const highlighted = REGIONS;
  const [hovered, setHovered] = useState<string | null>(null);
  const regionByName = new Map(REGIONS.map((r) => [r.name, r]));
  return (
    <section className="relative bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-md">
            <Eyebrow index="01">Our Regional Presence</Eyebrow>
            <p className="mt-4 text-[calc(15*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
              Delivering healthcare solutions across Africa &amp; The Middle
              East through local expertise and long-term partnerships.
            </p>
          </div>
          <Link
            to="/projects"
            hash="countries"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-dark"
          >
            View All Countries
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full"
            style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
          >
            <svg
              viewBox={`0 0 ${MAP_W} ${MAP_H}`}
              className="absolute inset-0 h-full w-full"
              aria-label="Map showing AbuFarha's operating countries across Africa, the Middle East and Central Asia"
            >
              <defs>
                <linearGradient id="rp-active" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="color-mix(in oklab, var(--primary) 25%, #1e3a5f)" />
                  <stop offset="100%" stopColor="#0f2544" />
                </linearGradient>
              </defs>
              {WORLD_COUNTRIES.filter((c) => !HIGHLIGHT_NAMES.has(c.name)).map((c) => (
                <path key={c.name} d={c.d} fill="#e2e8f0" stroke="#cbd5e1" strokeWidth={0.4} />
              ))}
              {WORLD_COUNTRIES.filter((c) => HIGHLIGHT_NAMES.has(c.name)).map((c) => (
                <path key={c.name} d={c.d} fill="url(#rp-active)" stroke="#0f2544" strokeWidth={0.5} />
              ))}
              {Object.entries(GEO).map(([name, p]) => {
                const isA = hovered === name;
                return (
                  <g
                    key={name}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx={p.x} cy={p.y} r={isA ? 14 : 9} fill="var(--primary)" opacity={isA ? 0.28 : 0.2} style={{ transition: "all .25s ease" }} />
                    <circle cx={p.x} cy={p.y} r={isA ? 5.5 : 4} fill="var(--primary)" style={{ transition: "all .25s ease" }} />
                  </g>
                );
              })}
            </svg>

            {/* Tooltip overlay — verified project reference data */}
            {Object.entries(GEO).map(([name, p]) => {
              const r = regionByName.get(name);
              if (!r) return null;
              const isA = hovered === name;
              return (
                <div
                  key={name}
                  role="tooltip"
                  className={`pointer-events-none absolute z-10 w-60 -translate-x-1/2 rounded-xl border border-black/5 bg-white p-3.5 text-left shadow-[0_20px_40px_-16px_rgba(15,23,42,0.35)] transition-opacity duration-200 ${
                    isA ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ left: `${(p.x / MAP_W) * 100}%`, top: `calc(${(p.y / MAP_H) * 100}% - calc(14*var(--desktop-px-unit)))`, transform: "translate(-50%, -100%)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{r.flag}</span>
                    <span className="font-display text-sm font-extrabold text-ink">
                      {r.name}
                    </span>
                  </div>
                  <div className="mt-2 text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-muted-foreground">
                    Projects
                  </div>
                  <ul className="mt-1 space-y-0.5 text-[calc(12*var(--desktop-px-unit))] leading-snug text-ink">
                    {r.equipment.map((e) => {
                      const n = parseInt(e.qty, 10);
                      return (
                        <li key={e.label} className="flex items-baseline justify-between gap-3">
                          <span className="truncate">{e.label}</span>
                          {Number.isFinite(n) && n > 0 ? (
                            <span className="shrink-0 font-semibold text-primary">×{n}</span>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </motion.div>

          {/* COUNTRY LIST */}
          <ul
            id="countries"
            className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"
          >
            {highlighted.map((r) => (
              <li
                key={r.name}
                onMouseEnter={() => setHovered(r.name)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.12)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(15,23,42,0.28)] hover:ring-primary/25"
              >
                <span className="mt-0.5 text-xl leading-none">{r.flag}</span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">{r.name}</div>
                  {COUNTRY_SUMMARY[r.name] && (
                    <div className="mt-0.5 text-[calc(12*var(--desktop-px-unit))] leading-snug text-muted-foreground">
                      {COUNTRY_SUMMARY[r.name]}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


/* ============================================================
 * 3. TRUST STRIP
 * ==========================================================*/
type Trust = { icon: LucideIcon; title: string; copy: string };
const TRUST: Trust[] = [
  {
    icon: Globe,
    title: "Regional Presence",
    copy: "Active in key markets across Africa and the Middle East.",
  },
  {
    icon: Users,
    title: "Healthcare Expertise",
    copy: "Extensive experience in delivering complex healthcare projects.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    copy: "End-to-end support from planning to after-sales service.",
  },
];

function TrustStrip() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-4 rounded-2xl border border-border bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.10)] sm:grid-cols-3 sm:divide-x sm:divide-border sm:gap-0 lg:p-8">
          {TRUST.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="flex items-start gap-4 px-2 sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="font-display text-base font-bold text-ink">
                    {t.title}
                  </div>
                  <p className="mt-1 text-[calc(13*var(--desktop-px-unit))] leading-[1.6] text-muted-foreground">
                    {t.copy}
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

/* ============================================================
 * 4. OUR SPECIALTIES — tabs
 * ==========================================================*/
type Specialty = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  copy: string;
  image: string;
  features: { icon: LucideIcon; label: string }[];
};

const SPECIALTIES: Specialty[] = [
  {
    id: "cardiology",
    label: "Cardiology Solutions",
    icon: Heart,
    title: "Cardiology Solutions",
    copy: "Supporting cath labs, cardiac centers and interventional cardiology departments with advanced technologies, installation, commissioning and clinical support.",
    image: whyCathlab,
    features: [
      { icon: Heart, label: "Cath Labs" },
      { icon: CircuitBoard, label: "Hemodynamic Systems" },
      { icon: Scan, label: "Cardiac Imaging" },
      { icon: GraduationCap, label: "Clinical Training" },
    ],
  },
  {
    id: "mri-ct",
    label: "MRI & CT Imaging",
    icon: Scan,
    title: "MRI & CT Imaging",
    copy: "Advanced magnetic resonance and computed tomography systems — supplied, installed and commissioned with full site-readiness engineering and operator training.",
    image: solMri,
    features: [
      { icon: Scan, label: "MRI Scanners" },
      { icon: CircuitBoard, label: "CT Scanners" },
      { icon: HardHat, label: "Site Engineering" },
      { icon: GraduationCap, label: "Applications Training" },
    ],
  },
  {
    id: "women",
    label: "Women's Healthcare",
    icon: Users,
    title: "Women's Healthcare",
    copy: "Complete women's health suites — mammography, ultrasound and IVF technology — delivered with care, precision and clinical support.",
    image: solMammo,
    features: [
      { icon: Scan, label: "Mammography" },
      { icon: CircuitBoard, label: "Ultrasound" },
      { icon: Heart, label: "IVF Systems" },
      { icon: GraduationCap, label: "Clinician Training" },
    ],
  },
  {
    id: "turnkey",
    label: "Turnkey Projects",
    icon: Building2,
    title: "Turnkey Projects",
    copy: "End-to-end delivery of complete clinical departments — planning, engineering, procurement, installation, commissioning and training.",
    image: beyondCathlab,
    features: [
      { icon: ClipboardCheck, label: "Planning" },
      { icon: Package, label: "Procurement" },
      { icon: HardHat, label: "Installation" },
      { icon: BadgeCheck, label: "Commissioning" },
    ],
  },
  {
    id: "install",
    label: "Installation & Training",
    icon: HardHat,
    title: "Installation & Training",
    copy: "Certified installation, acceptance testing and structured clinical &amp; biomedical training programs, on-site and remote.",
    image: solOr,
    features: [
      { icon: HardHat, label: "Installation" },
      { icon: ClipboardCheck, label: "Acceptance Testing" },
      { icon: GraduationCap, label: "Clinical Training" },
      { icon: Users, label: "Biomedical Training" },
    ],
  },
  {
    id: "biomed",
    label: "Biomedical Engineering",
    icon: Wrench,
    title: "Biomedical Engineering",
    copy: "In-house biomedical engineering teams for preventive maintenance, calibration, upgrades and 24/7 technical support across the equipment lifecycle.",
    image: solCarm,
    features: [
      { icon: Wrench, label: "Preventive Maintenance" },
      { icon: Boxes, label: "Spare Parts" },
      { icon: LifeBuoy, label: "24/7 Support" },
      { icon: ShieldCheck, label: "Calibration" },
    ],
  },
];

function Specialties() {
  const [active, setActive] = useState<Specialty>(SPECIALTIES[0]);
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow index="02">Our Specialties</Eyebrow>
          <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Solutions Across Every Clinical Discipline
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 -mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <div className="flex min-w-max gap-2 border-b border-border lg:min-w-0 lg:flex-wrap lg:justify-center">
            {SPECIALTIES.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === active.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(s)}
                  aria-pressed={isActive}
                  className={`group inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-bold transition-colors ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid gap-8 rounded-3xl border border-border bg-white p-6 shadow-[0_2px_14px_-8px_rgba(15,23,42,0.14)] lg:grid-cols-[1fr_1.1fr] lg:p-8"
        >
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3]">
            <img
              src={active.image}
              alt={active.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-3 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-[1.7] text-muted-foreground">
              {active.copy}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {active.features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {f.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
 * 5. HOW WE DELIVER PROJECTS — timeline
 * ==========================================================*/
const STEPS: { n: string; title: string; copy: string; icon: LucideIcon }[] = [
  { n: "1", title: "Consultation", copy: "Understanding your needs and project goals.", icon: MessageSquare },
  { n: "2", title: "Equipment Selection", copy: "Recommending the right technology for impact.", icon: Package },
  { n: "3", title: "Logistics", copy: "Safe and timely delivery to your location.", icon: Truck },
  { n: "4", title: "Installation", copy: "Professional installation by certified engineers.", icon: HardHat },
  { n: "5", title: "Commissioning", copy: "Testing and ensuring optimal system performance.", icon: ClipboardCheck },
  { n: "6", title: "Training", copy: "Hands-on training for your medical and technical teams.", icon: GraduationCap },
  { n: "7", title: "After-Sales Support", copy: "Ongoing support and spare parts availability.", icon: LifeBuoy },
];

function HowWeDeliver() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow index="03">How We Deliver Projects</Eyebrow>
          <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            One Partner. Every Step.
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[calc(28*var(--desktop-px-unit))] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <ol className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-7 lg:gap-4">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.n} className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-ink shadow-[0_10px_25px_-14px_rgba(15,23,42,0.35)]">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="absolute -bottom-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-primary text-[calc(11*var(--desktop-px-unit))] font-bold text-white shadow">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-sm font-extrabold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[16rem] text-[calc(12*var(--desktop-px-unit))] leading-[1.55] text-muted-foreground">
                    {s.copy}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * 6. REGIONAL HEALTHCARE EXPERIENCE — project cards
 * ==========================================================*/
type Case = {
  slug: string;
  country: string;
  flag: string;
  title: string;
  copy: string;
  img: string;
};

const CASES: Case[] = [
  {
    slug: "iraq-cardiac",
    country: "Iraq",
    flag: "🇮🇶",
    title: "Advancing Cardiac Care Across Iraq",
    copy: "Supplying and installing advanced cath lab systems, imaging equipment and hospital solutions for leading healthcare facilities.",
    img: p1,
  },
  {
    slug: "egypt-infrastructure",
    country: "Egypt",
    flag: "🇪🇬",
    title: "Building Modern Healthcare Infrastructure",
    copy: "Delivering imaging systems, specialty centers and technical support for hospitals and medical institutions.",
    img: p2,
  },
  {
    slug: "yemen-support",
    country: "Yemen",
    flag: "🇾🇪",
    title: "Supporting Healthcare Where It Matters",
    copy: "Providing reliable medical equipment, installation and training to improve healthcare delivery.",
    img: p3,
  },
  {
    slug: "libya-women",
    country: "Libya",
    flag: "🇱🇾",
    title: "Empowering Women's Healthcare",
    copy: "Delivering women's healthcare and diagnostic imaging solutions with care and precision.",
    img: solMammo,
  },
];

function ExperienceGrid() {
  return (
    <section id="projects-list" className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow index="04">Regional Healthcare Experience</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Trusted Across Africa &amp; The Middle East
            </h2>
          </div>
          <Link
            to="/projects"
            hash="projects-list"
            className="group inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex min-h-[calc(360*var(--desktop-px-unit))] flex-col justify-end overflow-hidden rounded-2xl bg-ink text-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.15)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_rgba(15,23,42,0.5)]"
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div aria-hidden className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
              <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[calc(11*var(--desktop-px-unit))] font-bold text-white ring-1 ring-white/20 backdrop-blur">
                <span>{c.flag}</span> {c.country}
              </span>
              <div className="relative z-10 p-5">
                <h3 className="font-display text-lg font-extrabold leading-tight transition-transform duration-500 group-hover:-translate-y-0.5">
                  {c.title}
                </h3>
                <p className="mt-2 text-[calc(12.5*var(--desktop-px-unit))] leading-relaxed text-white/80">
                  {c.copy}
                </p>
                <div className="mt-3 grid transition-[grid-template-rows,opacity] duration-500 ease-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:grid-rows-[1fr] motion-reduce:opacity-100">
                  <div className="overflow-hidden">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-[calc(12*var(--desktop-px-unit))] font-bold text-white"
                    >
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ============================================================
 * 7. CTA BANNER
 * ==========================================================*/
function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-10 text-white lg:py-12">
      <div className="pointer-events-none absolute -right-24 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-black/20 blur-3xl" />
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:px-10 lg:text-left">
        <div className="flex items-center gap-4">
          <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20 sm:grid">
            <Handshake className="h-6 w-6" strokeWidth={1.6} />
          </span>
          <div>
            <h2 className="font-display text-xl font-extrabold sm:text-2xl">
              Planning a Healthcare Infrastructure Project?
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Talk to AbuFarha specialists and discuss your requirements.
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
        >
          Request Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ============================================================
 * 8. HEALTHCARE TECHNOLOGIES WE SUPPORT
 * ==========================================================*/
type TechCard = { title: string; img: string; to: string };
const TECHS: TechCard[] = [
  { title: "Cath Lab Systems", img: whyCathlab, to: "/products/cath-lab" },
  { title: "MRI Systems", img: solMri, to: "/products/mri-scanners" },
  { title: "CT Scanners", img: solCt, to: "/products/pet-ct-scanners" },
  { title: "PET/CT Systems", img: solPetct, to: "/products/pet-ct-scanners" },
  { title: "Mammography Systems", img: solMammo, to: "/products/mammography-systems" },
  { title: "Ultrasound Systems", img: solUltrasound, to: "/products/others" },
  { title: "Operating Room Solutions", img: solOr, to: "/products/others" },
];

function Technologies() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <Eyebrow index="05">Healthcare Technologies We Support</Eyebrow>
          <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Advanced Systems Across Every Modality
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {TECHS.map((t) => (
            <Link
              key={t.title}
              to={t.to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_10px_-4px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_22px_44px_-24px_rgba(15,23,42,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={t.img}
                  alt={t.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex items-center justify-center gap-1.5 p-3 text-center">
                <span className="text-[calc(12.5*var(--desktop-px-unit))] font-bold text-ink transition-colors group-hover:text-primary">
                  {t.title}
                </span>
                <ArrowRight aria-hidden className="h-3 w-3 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * PAGE
 * ==========================================================*/
export function ProjectsExperiencePage() {
  return (
    <>
      <Hero />
      <RegionalPresence />
      <TrustStrip />
      <Specialties />
      <HowWeDeliver />
      <ExperienceGrid />
      <CtaBanner />
      <Technologies />
      <WhyAbuFarhaProjects />
    </>
  );
}

// Silence unused-import warning for MapPin (kept for future case-study cards)
void MapPin;
