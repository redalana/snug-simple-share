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

/* ---------------------------------------------------------------- countries */

const COUNTRIES = [
  "Jordan",
  "Iraq",
  "Syria",
  "Libya",
  "Yemen",
  "Egypt",
  "Somaliland",
  "Somalia",
  "Uzbekistan",
  "Bangladesh",
];

/* --------------------------------------------------------------------- Hero */

const HERO_STATS = [
  { icon: Award, value: "25+", label: "Years in Healthcare" },
  { icon: Globe, value: "10+", label: "Countries Served" },
  { icon: Building2, value: "Turnkey", label: "Hospital Projects" },
  { icon: Users, value: "Engineering &", label: "Clinical Teams" },
];

function TurnkeyHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[100rem] px-6 pt-10 pb-14 lg:px-10 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* text */}
          <div className="relative">
            <Eyebrow>Turnkey Projects</Eyebrow>
            <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[3rem] lg:text-[3.6rem]">
              Complete Turnkey
              <br />
              <span className="text-primary">Healthcare Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
              From concept and planning to installation, commissioning, training
              and long-term support — we deliver fully integrated healthcare
              facilities across Africa, the Middle East &amp; Central Asia.
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

            {/* stats under CTAs */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-3 font-display text-[1.35rem] font-extrabold leading-none text-ink">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* image with vascular medical background + floating glass stat cards */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_50px_100px_-40px_rgba(15,23,42,0.4)] ring-1 ring-black/5">
              <img
                src={heroImg}
                alt="AbuFarha turnkey medical center with vascular network visualization"
                width={1600}
                height={1000}
                className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
              />
              <div className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* floating glass stat cards (2x2) */}
            <div className="absolute right-3 top-6 grid grid-cols-2 gap-3 sm:right-6 sm:top-10 sm:gap-4 lg:right-8">
              {HERO_STATS.map((s, i) => (
                <motion.div
                  key={`float-${s.label}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex w-[130px] flex-col items-start rounded-2xl border border-white/70 bg-white/90 p-3.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:w-[150px] sm:p-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <s.icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <div className="mt-2 font-display text-[1.05rem] font-extrabold leading-none text-ink sm:text-[1.15rem]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------ Regional Presence (vascular) */

function RegionalPresence() {
  // scattered positions on the vascular canvas (percent)
  const positions = [
    { top: "14%", left: "8%" },
    { top: "10%", left: "30%" },
    { top: "18%", left: "52%" },
    { top: "12%", left: "74%" },
    { top: "24%", left: "88%" },
    { top: "58%", left: "12%" },
    { top: "66%", left: "34%" },
    { top: "62%", left: "56%" },
    { top: "70%", left: "76%" },
    { top: "56%", left: "90%" },
  ];

  return (
    <section id="coverage" className="relative overflow-hidden bg-[oklch(0.98_0.005_264)] py-20 lg:py-28">
      {/* vascular background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/60 to-white/85" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,white_85%)]" />
      </div>

      {/* soft red pulse glows */}
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[30%] h-[380px] w-[380px] rounded-full bg-primary/15 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] bottom-[20%] h-[420px] w-[420px] rounded-full bg-primary/12 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_2.15fr] lg:items-start">
          <div>
            <Eyebrow>Global Footprint</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.5rem]">
              Our Presence
              <br />
              <span className="text-primary">Across the World</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              We have successfully supplied, installed and supported medical
              equipment and hospital projects across multiple markets in Africa,
              the Middle East &amp; Central Asia.
            </p>
          </div>

          {/* floating country cards */}
          <div className="relative h-[520px] w-full sm:h-[560px] lg:h-[600px]">
            {COUNTRIES.map((name, i) => {
              const pos = positions[i];
              return (
                <motion.div
                  key={name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: pos.top, left: pos.left }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    className="group flex items-center gap-2.5 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-white/90"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/25">
                      <MapPin className="h-3.5 w-3.5" fill="currentColor" strokeWidth={0} />
                    </span>
                    <span className="font-display text-[13px] font-extrabold tracking-tight text-ink whitespace-nowrap">
                      {name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- What We Deliver */

const DELIVER = [
  { icon: ClipboardList, title: "Hospital Planning", desc: "Feasibility studies, space planning and department design." },
  { icon: Search, title: "Equipment Selection", desc: "Choosing the right technology to meet clinical and budget requirements." },
  { icon: Stethoscope, title: "Medical Equipment Supply", desc: "High-quality equipment from leading global manufacturers." },
  { icon: Wrench, title: "Installation & Commissioning", desc: "Professional installation, testing and full system commissioning." },
  { icon: GraduationCap, title: "Clinical Training", desc: "Hands-on training for clinical and technical staff." },
  { icon: Headphones, title: "After Sales Support", desc: "Preventive maintenance, technical support and consumables supply." },
];

function WhatWeDeliver() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            What We <span className="text-primary">Deliver</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {DELIVER.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex h-full flex-col items-center rounded-2xl border border-border bg-white p-7 text-center shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.25)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/40">
                <d.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-[15px] font-extrabold text-ink">
                {d.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Turnkey Workflow */

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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            Our Turnkey <span className="text-primary">Workflow</span>
          </h2>
        </div>

        <div className="relative mt-16">
          {/* dashed connector line */}
          <div
            className="pointer-events-none absolute left-8 right-8 top-[40px] hidden h-px lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--primary) 30%, transparent) 50%, transparent 50%)",
              backgroundSize: "10px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />
          <ol className="grid grid-cols-3 gap-y-10 sm:grid-cols-5 lg:grid-cols-9 lg:gap-x-2">
            {WORKFLOW.map((s, i) => (
              <li key={s.label} className="relative flex flex-col items-center text-center">
                <div className="group relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_10px_30px_-14px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--primary)_45%,transparent)]">
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/0 transition-colors group-hover:bg-primary/5" />
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <div className="mt-4 max-w-[120px] text-[12.5px] font-semibold leading-tight text-ink">
                  {s.label}
                </div>
                <div className="mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-[0_6px_16px_-6px_color-mix(in_oklab,var(--primary)_60%,transparent)]">
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

/* ------------------------------------------------------- Departments We Equip */

const DEPARTMENTS = [
  { name: "Cardiology", img: imgCath },
  { name: "Radiology", img: imgMri },
  { name: "Operating Theatres", img: imgOr },
  { name: "ICU", img: imgUs },
  { name: "NICU", img: imgDexa },
  { name: "CSSD", img: imgCt },
  { name: "Delivery Rooms", img: imgMammo },
  { name: "Polyclinics & Health Centers", img: imgXray },
];

function DepartmentTile({ name, img }: { name: string; img: string }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity group-hover:from-ink/95" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary" />
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <h3 className="font-display text-[15px] font-extrabold leading-tight text-white">
          {name}
        </h3>
      </div>
    </div>
  );
}

function Departments() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            Departments <span className="text-primary">We Equip</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
          {DEPARTMENTS.map((d) => (
            <DepartmentTile key={d.name} name={d.name} img={d.img} />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Building2 className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              We provide medical equipment and solutions for all key hospital
              departments — from planning and infrastructure to advanced clinical areas.
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
    </section>
  );
}

/* --------------------------------------------------------- Why Hospitals Choose */

const WHY = [
  { icon: Handshake, title: "Single Project Partner", desc: "One partner from planning to after-sales support." },
  { icon: ShieldCheck, title: "End-to-End Solutions", desc: "Fully integrated turnkey healthcare facilities." },
  { icon: Users, title: "Clinical + Engineering Team", desc: "Expert team of engineers, specialists and clinicians." },
  { icon: Award, title: "OEM Standards", desc: "Equipment from leading global manufacturers." },
  { icon: BookOpen, title: "Training & Knowledge", desc: "Comprehensive training for better clinical outcomes." },
  { icon: Clock, title: "Long-Term Support", desc: "Continuous support, maintenance and supply." },
];

function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            Why Hospitals Choose <span className="text-primary">AbuFarha</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {WHY.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl border border-border bg-white p-7 text-center transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.22)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/40">
                <w.icon className="h-6.5 w-6.5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-[14px] font-extrabold text-ink">
                {w.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-muted-foreground">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------- Featured Regional Projects */

const FEATURED = [
  { country: "Jordan", img: imgProject1, services: ["Cath Labs", "Heart Centers"] },
  { country: "Iraq", img: imgProject2, services: ["Cath Labs", "MRI • CT Scanner", "Ultrasound"] },
  { country: "Syria", img: imgProject3, services: ["MRI • IVF Centers", "Eye Lasik Centers", "Cath Labs"] },
  { country: "Libya", img: imgProject4, services: ["Cath Labs • IVF Centers", "Digital X-ray • Ultrasound"] },
];

function FeaturedProjects() {
  return (
    <section id="projects" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <h2 className="font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.5rem]">
            Featured Regional <span className="text-primary">Projects</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((p) => (
            <article
              key={p.country}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]"
            >
              <img
                src={p.img}
                alt={`${p.country} turnkey healthcare project`}
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
              <div className="absolute inset-x-6 top-6 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  <MapPin className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                  {p.country}
                </span>
                <ul className="mt-4 space-y-1.5 text-[13.5px] font-medium text-white/90">
                  {p.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-white">
                <span className="text-[13px] font-semibold">Turnkey Solutions</span>
                <Link
                  to="/contact"
                  aria-label={`Contact us about ${p.country} projects`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_24px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-transform group-hover:translate-x-1"
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

/* --------------------------------------------------------------- Final CTA */

function TurnkeyCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-ink via-[oklch(0.22_0.04_264)] to-ink py-24 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <img src={imgProject2} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>
      {/* soft medical lighting */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/90 ring-1 ring-white/20 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Enterprise Healthcare Delivery
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-[2.4rem] lg:text-[2.75rem]">
            Ready to Build Your Next
            <br />
            <span className="text-primary-foreground/95">Healthcare Facility?</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
            Let our team turn your vision into a fully integrated,
            high-performance healthcare facility — engineered, installed and supported end-to-end.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-[0_22px_50px_-16px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Start Your Turnkey Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/962795545319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5"
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

/* -------------------------------------------------------------------- Page */

export function TurnkeyPage() {
  return (
    <>
      <TurnkeyHero />
      <RegionalPresence />
      <WhatWeDeliver />
      <Workflow />
      <Departments />
      <WhyChoose />
      <FeaturedProjects />
      <TurnkeyCTA />
    </>
  );
}
