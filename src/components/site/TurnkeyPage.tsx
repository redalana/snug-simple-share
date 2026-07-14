import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  Truck,
  Wrench,
  Users,
  Headphones,
  MessageSquare,
  ClipboardList,
  Search,
  Settings,
  GraduationCap,
  CircleCheck,
  ShieldCheck,
  Handshake,
  Award,
  BookOpen,
  Clock,
  MapPin,
  Globe,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { COUNTRIES, PINS, type Pin } from "./africaMapData";
import heroImg from "@/assets/turnkey-hero.jpg";
import imgCath from "@/assets/sol-carm.jpg";
import imgMri from "@/assets/sol-mri.jpg";
import imgOr from "@/assets/sol-or.jpg";
import imgCt from "@/assets/sol-ct.jpg";
import imgUs from "@/assets/sol-ultrasound.jpg";
import imgXray from "@/assets/sol-xray.jpg";
import imgDexa from "@/assets/sol-dexa.jpg";
import imgMammo from "@/assets/sol-mammo.jpg";
import imgProject1 from "@/assets/project-1.jpg";
import imgProject2 from "@/assets/project-2.jpg";
import imgProject3 from "@/assets/project-3.jpg";
import imgProject4 from "@/assets/beyond-cathlab.jpg";

/* --------------------------- shared country data -------------------------- */

type CountryEntry = {
  name: string;
  flag: string;
  services: string[];
};

const COUNTRY_DATA: CountryEntry[] = [
  { name: "Jordan", flag: "🇯🇴", services: ["Cath Labs", "Heart Centers"] },
  { name: "Yemen", flag: "🇾🇪", services: ["Cath Labs", "MRI", "CT Scanner"] },
  {
    name: "Syria",
    flag: "🇸🇾",
    services: ["Cath Labs", "MRI", "Eye Lasik Centers", "IVF Centers"],
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    services: ["Cath Labs", "MRI", "CT Scanner", "Ultrasound"],
  },
  {
    name: "Libya",
    flag: "🇱🇾",
    services: ["Cath Labs", "IVF Centers", "Ultrasound", "Digital X-ray"],
  },
  { name: "Somaliland", flag: "🇸🇴", services: ["Cath Labs", "Heart Centers"] },
  { name: "Somalia", flag: "🇸🇴", services: ["Cath Labs", "Heart Centers"] },
  { name: "Egypt", flag: "🇪🇬", services: ["Heart Centers"] },
  { name: "Uzbekistan", flag: "🇺🇿", services: ["Cath Labs", "Heart Centers"] },
  { name: "Bangladesh", flag: "🇧🇩", services: ["Bone Density"] },
];

/* -------------------------------- Hero ----------------------------------- */

const HERO_STATS = [
  { icon: Award, value: "25+", label: "Years in Healthcare" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Building2, value: "Turnkey", label: "Hospital Projects" },
  { icon: Users, value: "Engineering &", label: "Clinical Teams" },
];

function TurnkeyHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pt-8 pb-16 lg:px-10 lg:pt-12 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          {/* text */}
          <div className="relative">
            <Eyebrow>Turnkey Projects</Eyebrow>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[3.5rem]">
              Complete Turnkey
              <br />
              <span className="text-primary">Healthcare Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              From concept and planning to installation, commissioning, training
              and long-term support — we deliver fully integrated healthcare
              facilities across Africa &amp; the Middle East.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--primary)_55%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
              >
                Explore Our Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* image + stat cards */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)]">
              <img
                src={heroImg}
                alt="Modern hospital facility delivered by AbuFarha"
                width={1600}
                height={1000}
                className="h-[380px] w-full object-cover sm:h-[460px] lg:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-transparent" />
            </div>

            {/* floating stat cards */}
            <div className="mt-6 grid grid-cols-2 gap-3 lg:absolute lg:right-5 lg:top-5 lg:mt-0 lg:w-[260px] lg:grid-cols-2">
              {HERO_STATS.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-2xl border border-border/70 bg-white/95 p-4 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <s.icon className="h-4.5 w-4.5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-2.5 font-display text-[1.35rem] font-extrabold leading-none text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Trusted Across The Region + Map ------------------- */

// Cropped viewBox tuned to the same footprint as GlobalPresence.
const VB_X = 280;
const VB_Y = -80;
const VB_W = 780;
const VB_H = 571;
const VISIBLE_PINS = PINS.filter(
  (p) => p.x >= VB_X && p.x <= VB_X + VB_W && p.y >= VB_Y && p.y <= VB_Y + VB_H,
);

function TrustedRegion() {
  const [active, setActive] = useState<Pin>(
    PINS.find((p) => p.name === "Jordan")!,
  );
  const activeMeta = useMemo(
    () => COUNTRY_DATA.find((c) => c.name === active.name),
    [active],
  );

  return (
    <section id="coverage" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_2.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.35rem]">
              Trusted Across
              <br />
              <span className="text-primary">the Region</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              We have successfully supplied, installed and supported medical
              equipment and hospital projects in more than 10 countries across
              Africa &amp; the Middle East.
            </p>
          </div>

          {/* map card */}
          <div className="relative rounded-3xl border border-border bg-secondary/50 p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                {/* dotted texture */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(oklch(0.7 0.02 264 / 30%) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <svg
                  viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
                  className="absolute inset-0 h-full w-full"
                  role="img"
                  aria-label="Map of AbuFarha verified projects"
                >
                  {COUNTRIES.filter((c) => !c.sup).map((c) => (
                    <path
                      key={c.name}
                      d={c.d}
                      fill="oklch(0.94 0.005 264)"
                      stroke="oklch(0.88 0.008 264)"
                      strokeWidth={0.8}
                    />
                  ))}
                  {COUNTRIES.filter((c) => c.sup).map((c) => {
                    const isActive = active.name === c.name;
                    return (
                      <path
                        key={c.name}
                        d={c.d}
                        fill={
                          isActive
                            ? "color-mix(in oklab, var(--primary) 35%, white)"
                            : "color-mix(in oklab, var(--primary) 12%, white)"
                        }
                        stroke="var(--primary)"
                        strokeOpacity={0.55}
                        strokeWidth={0.9}
                      />
                    );
                  })}
                </svg>

                {VISIBLE_PINS.map((p) => {
                  const left = ((p.x - VB_X) / VB_W) * 100;
                  const top = ((p.y - VB_Y) / VB_H) * 100;
                  const isActive = active.name === p.name;
                  return (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setActive(p)}
                      aria-label={`View ${p.name} projects`}
                      aria-pressed={isActive}
                      className="group absolute z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center focus:outline-none"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      <span
                        className={`whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-white text-ink shadow-sm group-hover:text-primary"
                        }`}
                      >
                        {p.name}
                      </span>
                      <span
                        className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full text-primary transition-transform group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-primary/60 ${
                          isActive ? "scale-110" : ""
                        }`}
                      >
                        <MapPin
                          className="h-6 w-6 drop-shadow"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </span>
                    </button>
                  );
                })}

                <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
                  <Globe className="h-3 w-3" />
                  Click on a country to view our solutions and experience
                </div>
              </div>

              {/* selected country panel */}
              <div className="flex flex-col rounded-2xl border border-border bg-white p-5">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="text-2xl leading-none"
                  >
                    {activeMeta?.flag ?? "🏳️"}
                  </span>
                  <span className="font-display text-xl font-extrabold tracking-tight text-ink">
                    {active.name}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm text-ink">
                  {(activeMeta?.services ?? []).map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{s}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>Installation &amp; Support</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="mt-auto pt-5 text-sm font-bold text-primary hover:text-primary-dark"
                >
                  View Country Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- What We Deliver ---------------------------- */

const DELIVER = [
  {
    icon: ClipboardList,
    title: "Hospital Planning",
    desc: "Feasibility studies, space planning and department design.",
  },
  {
    icon: Search,
    title: "Equipment Selection",
    desc: "Choosing the right technology to meet clinical and budget requirements.",
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment Supply",
    desc: "High-quality equipment from leading global manufacturers.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Professional installation, testing and full system commissioning.",
  },
  {
    icon: GraduationCap,
    title: "Clinical Training",
    desc: "Hands-on training for clinical and technical staff.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    desc: "Preventive maintenance, technical support and consumables supply.",
  },
];

function WhatWeDeliver() {
  return (
    <section className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
            What We <span className="text-primary">Deliver</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {DELIVER.map((d) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.2)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <d.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-[15px] font-extrabold text-ink">
                {d.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Turnkey Workflow --------------------------- */

const WORKFLOW = [
  { icon: MessageSquare, label: "Consultation" },
  { icon: ClipboardList, label: "Hospital Planning" },
  { icon: Search, label: "Equipment Selection" },
  { icon: Truck, label: "Logistics & Shipping" },
  { icon: Wrench, label: "Installation" },
  { icon: Settings, label: "Commissioning" },
  { icon: GraduationCap, label: "Clinical Training" },
  { icon: CircleCheck, label: "Go Live" },
  { icon: Headphones, label: "After Sales Support" },
];

function Workflow() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
            Our Turnkey <span className="text-primary">Workflow</span>
          </h2>
        </div>

        <div className="relative mt-12">
          {/* connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[36px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <ol className="grid grid-cols-3 gap-y-8 sm:grid-cols-5 lg:grid-cols-9 lg:gap-x-2">
            {WORKFLOW.map((s, i) => (
              <li
                key={s.label}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-border bg-white text-primary transition-all hover:border-primary">
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div className="mt-3 max-w-[110px] text-[12.5px] font-semibold leading-tight text-ink">
                  {s.label}
                </div>
                <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Departments We Equip ----------------------- */

const DEPARTMENTS = [
  { name: "Cardiology", img: imgCath },
  { name: "Radiology", img: imgMri },
  { name: "Operating Theatres", img: imgOr },
  { name: "ICU", img: imgUs },
  { name: "NICU", img: imgDexa },
  { name: "CSSD", img: imgCt },
  { name: "Patient Rooms", img: imgXray },
  { name: "Delivery Rooms", img: imgMammo },
];

function Departments() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
          Departments <span className="text-primary">We Equip</span>
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {DEPARTMENTS.slice(0, 7).map((d) => (
            <DepartmentTile key={d.name} name={d.name} img={d.img} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[1fr_1fr_2fr_2fr]">
          <DepartmentTile name={DEPARTMENTS[7].name} img={DEPARTMENTS[7].img} />
          <DepartmentTile name="Polyclinics & Health Centers" img={imgUs} />
          <div className="col-span-2 flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-5 md:col-span-2">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Building2 className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <p className="text-sm leading-relaxed text-muted-foreground">
                We provide medical equipment and solutions for all key hospital
                departments ranging from planning and infrastructure to advanced
                clinical areas.
              </p>
              <Link
                to="/products"
                className="mt-1 inline-block text-sm font-bold text-primary hover:text-primary-dark"
              >
                Explore All Solutions →
              </Link>
            </div>
          </div>
        </div>

        {/* Country grid */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {COUNTRY_DATA.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)]"
            >
              <div className="flex items-center gap-2.5 border-b border-border pb-3">
                <span aria-hidden className="text-lg leading-none">
                  {c.flag}
                </span>
                <span className="font-display text-[15px] font-extrabold text-ink">
                  {c.name}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-[13px] text-muted-foreground">
                {c.services.map((s) => (
                  <li key={s} className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-ink transition-all hover:border-primary/50 hover:text-primary"
          >
            View All Countries
          </Link>
        </div>
      </div>
    </section>
  );
}

function DepartmentTile({ name, img }: { name: string; img: string }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
      <div className="absolute inset-x-3 bottom-3">
        <span className="inline-flex rounded-md bg-white/95 px-2.5 py-1 text-[11.5px] font-extrabold text-ink">
          {name}
        </span>
      </div>
    </div>
  );
}

/* ------------------------ Why Hospitals Choose ------------------------- */

const WHY = [
  {
    icon: Handshake,
    title: "Single Project Partner",
    desc: "One partner from planning to after-sales support.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Solutions",
    desc: "Fully integrated turnkey healthcare facilities.",
  },
  {
    icon: Users,
    title: "Clinical + Engineering Team",
    desc: "Expert team of engineers, specialists and clinicians.",
  },
  {
    icon: Award,
    title: "OEM Standards",
    desc: "Equipment from leading global manufacturers.",
  },
  {
    icon: BookOpen,
    title: "Training & Knowledge",
    desc: "Comprehensive training for better clinical outcomes.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    desc: "Continuous support, maintenance and supply.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
            Why Hospitals Choose{" "}
            <span className="text-primary">AbuFarha</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-border bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.2)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <w.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-display text-[14px] font-extrabold text-ink">
                {w.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Featured Regional Projects ---------------------- */

const FEATURED = [
  {
    country: "Jordan",
    img: imgProject1,
    services: ["Cath Labs", "Heart Centers"],
  },
  {
    country: "Iraq",
    img: imgProject2,
    services: ["Cath Labs", "MRI • CT Scanner", "Ultrasound"],
  },
  {
    country: "Syria",
    img: imgProject3,
    services: ["MRI • IVF Centers", "Eye Lasik Centers", "Cath Labs"],
  },
  {
    country: "Libya",
    img: imgProject4,
    services: ["Cath Labs • IVF Centers", "Digital X-ray • Ultrasound"],
  },
];

function FeaturedProjects() {
  return (
    <section id="projects" className="bg-secondary/40 py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.35rem]">
            Featured Regional <span className="text-primary">Projects</span>
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p) => (
            <article
              key={p.country}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink"
            >
              <img
                src={p.img}
                alt={`${p.country} turnkey healthcare project`}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
              <div className="absolute inset-x-5 top-5 text-white">
                <h3 className="font-display text-lg font-extrabold">{p.country}</h3>
                <ul className="mt-2 space-y-1 text-[13px] text-white/85">
                  {p.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-white">
                <span className="text-[13px] font-semibold">Turnkey Solutions</span>
                <Link
                  to="/contact"
                  aria-label={`Contact us about ${p.country} projects`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA ------------------------------ */

function TurnkeyCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-[oklch(0.22_0.04_264)] to-ink py-16 text-white lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <img
          src={imgProject2}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      </div>
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-[1.85rem]">
            Ready to Build Your Next
            <br />
            Healthcare Facility?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75">
            Let our team turn your vision into a fully integrated,
            high-performance healthcare facility.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Start Your Turnkey Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/962795545319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.5"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M20 3.5A11.5 11.5 0 0 0 3.5 19.6L2 22l2.5-1.4A11.5 11.5 0 1 0 20 3.5Z" />
              </svg>
            </span>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Page --------------------------------- */

export function TurnkeyPage() {
  return (
    <>
      <TurnkeyHero />
      <TrustedRegion />
      <WhatWeDeliver />
      <Workflow />
      <Departments />
      <WhyChoose />
      <FeaturedProjects />
      <TurnkeyCTA />
    </>
  );
}
