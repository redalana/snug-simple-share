import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Truck,
  Wrench,
  Users,
  Headphones,
  ClipboardList,
  GraduationCap,
  ShieldCheck,
  Award,
  BookOpen,
  Play,
  Trophy,
  Globe,
  Package,
  PenTool,
  ShoppingCart,
  Target,
  Heart,
  Scan,
  Activity,
  Stethoscope,
  Baby,
  FlaskConical,
  Sparkles,
  UserRound,
  ChevronLeft,
  ChevronRight,
  Handshake,
} from "lucide-react";
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
import imgEngineer from "@/assets/beyond-cathlab.jpg";
import imgCtaBg from "@/assets/footer-cathlab.jpg";


/* ------------------------------------------------------------------ Hero */

const HERO_STATS = [
  { icon: Trophy, value: "25+", label: "Years of\nExperience" },
  { icon: Building2, value: "1000+", label: "Systems\nInstalled" },
  { icon: Globe, value: "10+", label: "Countries\nServed" },
  { icon: Users, value: "150+", label: "Engineers &\nClinical Specialists" },
  { icon: Headphones, value: "24/7", label: "After Sales\nSupport" },
];

function TurnkeyHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AbuFarha turnkey operating theatre with advanced medical equipment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/95" />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-6 pt-14 pb-10 lg:px-10 lg:pt-20 lg:pb-14">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Turnkey Healthcare Solutions
          </span>
          <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4.2rem]">
            From Vision
            <br />
            to Operational
            <br />
            <span className="text-primary">Hospital</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
            We design, supply, install and support fully integrated
            healthcare facilities with advanced technology
            and long-term partnership.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_40px_-16px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#departments"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Our Solutions
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-2.5 w-2.5" fill="currentColor" strokeWidth={0} />
              </span>
            </a>
          </div>
        </div>

        {/* stats row */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 lg:mt-24 lg:grid-cols-5 lg:gap-4">
          {HERO_STATS.map((s) => (
            <div key={s.value + s.label} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/40 text-primary">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <div className="font-display text-[1.35rem] font-extrabold leading-none">
                  {s.value}
                </div>
                <div className="mt-1 whitespace-pre-line text-[11px] font-medium leading-tight text-white/70">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- Global Presence (dark) */

const COUNTRY_NODES: Array<{ name: string; top: string; left: string }> = [
  { name: "Libya", top: "12%", left: "48%" },
  { name: "Uzbekistan", top: "22%", left: "88%" },
  { name: "Jordan", top: "30%", left: "20%" },
  { name: "Iraq", top: "38%", left: "62%" },
  { name: "Egypt", top: "48%", left: "16%" },
  { name: "Bangladesh", top: "52%", left: "90%" },
  { name: "Somaliland", top: "68%", left: "22%" },
  { name: "Yemen", top: "72%", left: "60%" },
  { name: "Somalia", top: "88%", left: "38%" },
];

function GlobalPresenceDark() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-[oklch(0.14_0.04_264)] py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 65% 55%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.6fr] lg:items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Global Presence
            </span>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[2.6rem]">
              Trusted Partner
              <br />
              Across Africa &amp;
              <br />
              The Middle East
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Delivering sustainable healthcare
              projects in multiple countries through
              local expertise and global standards.
            </p>
            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              View All Countries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* network map */}
          <div className="relative h-[440px] w-full sm:h-[500px]">
            {/* radiating lines from center */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {COUNTRY_NODES.map((n) => {
                const x = parseFloat(n.left);
                const y = parseFloat(n.top);
                return (
                  <line
                    key={n.name}
                    x1="50"
                    y1="55"
                    x2={x}
                    y2={y}
                    stroke="color-mix(in oklab, var(--primary) 60%, transparent)"
                    strokeWidth="0.15"
                    strokeDasharray="0.5 0.4"
                  />
                );
              })}
            </svg>

            {/* central pulse */}
            <motion.div
              className="absolute left-1/2 top-[55%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-2xl"
              animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute left-1/2 top-[55%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px_8px_color-mix(in_oklab,var(--primary)_60%,transparent)]" />

            {COUNTRY_NODES.map((n, i) => (
              <div
                key={n.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: n.top, left: n.left }}
              >
                <motion.div
                  className="absolute inset-0 -m-2 rounded-full bg-primary/50 blur-md"
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2.4 + (i % 3) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
                <div className="relative h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-primary/40" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[13px] font-semibold text-white">
                  {n.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Turnkey Journey */

const JOURNEY = [
  { icon: ClipboardList, label: "Planning &\nConsultation" },
  { icon: PenTool, label: "Design &\nEngineering" },
  { icon: ShoppingCart, label: "Procurement" },
  { icon: Truck, label: "Logistics &\nShipping" },
  { icon: Wrench, label: "Installation &\nIntegration" },
  { icon: Target, label: "Commissioning" },
  { icon: GraduationCap, label: "Training &\nHandover" },
  { icon: Headphones, label: "After Sales\nSupport" },
];

function Journey() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Our Turnkey Journey
          </span>
          <h2 className="mt-3 font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.4rem]">
            A Seamless Journey. A <span className="text-primary">Lasting Impact.</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute left-12 right-12 top-[36px] hidden h-px lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--muted-foreground) 40%, transparent) 50%, transparent 50%)",
              backgroundSize: "8px 1px",
              backgroundRepeat: "repeat-x",
            }}
          />
          <ol className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-2">
            {JOURNEY.map((s, i) => (
              <li key={s.label} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_10px_24px_-14px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:border-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="mt-4 font-display text-[13px] font-extrabold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 whitespace-pre-line text-[12px] font-medium leading-tight text-muted-foreground">
                  {s.label}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- Departments */

const DEPARTMENTS = [
  { name: "Cardiac Cath Labs", img: imgCath, icon: Heart },
  { name: "Radiology & Imaging", img: imgMri, icon: Scan },
  { name: "Operating Theatres", img: imgOr, icon: Activity },
  { name: "ICU & Critical Care", img: imgUs, icon: Stethoscope },
  { name: "NICU", img: imgDexa, icon: Baby },
  { name: "CSSD\nSterilization Solutions", img: imgCt, icon: Sparkles },
  { name: "Laboratories", img: imgMammo, icon: FlaskConical },
  { name: "Outpatient Solutions", img: imgXray, icon: UserRound },
];

function Departments() {
  return (
    <section id="departments" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_2.15fr] lg:items-start">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Departments
            </span>
            <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.2rem]">
              Complete Solutions for
              <br />
              Every Department
            </h2>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-3 text-sm font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              View All Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {DEPARTMENTS.map((d) => (
              <div
                key={d.name}
                className="group relative aspect-[5/4] overflow-hidden rounded-xl bg-ink shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]"
              >
                <img
                  src={d.img}
                  alt={d.name.replace("\n", " ")}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <d.icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <h3 className="whitespace-pre-line font-display text-[12.5px] font-extrabold leading-tight text-white">
                    {d.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Why Hospitals Choose */

const WHY = [
  { icon: Award, title: "Single Point Responsibility", desc: "One partner for the entire project lifecycle from start to support." },
  { icon: ShieldCheck, title: "End-to-End Integration", desc: "Seamless integration of technology, infrastructure and IT systems." },
  { icon: Globe, title: "Global Standards", desc: "Equipment from leading global manufacturers with certified quality." },
  { icon: BookOpen, title: "Training & Knowledge Transfer", desc: "Comprehensive training for clinical and technical teams." },
  { icon: Stethoscope, title: "Clinical & Engineering Expertise", desc: "Dedicated team of engineers, specialists and clinicians." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Reliable after-sales support with genuine parts and maintenance." },
];

function Handshake({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return <ShieldCheck className={className} strokeWidth={strokeWidth} />;
}

function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* left image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(15,23,42,0.35)]">
              <img
                src={imgEngineer}
                alt="AbuFarha engineer commissioning healthcare equipment"
                className="h-[440px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-10 flex items-center gap-3 rounded-xl border border-border bg-white p-4 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.3)]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Users className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <div className="font-display text-[14px] font-extrabold text-ink">
                  Your Vision. Our Expertise.
                </div>
                <div className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
                  We turn your vision into fully integrated,
                  high-performance healthcare facilities.
                </div>
              </div>
            </div>
          </div>

          {/* right content */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Why Hospitals Choose AbuFarha
            </span>
            <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.4rem]">
              Engineering Excellence.
              <br />
              Building <span className="text-primary">Trust.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {WHY.map((w) => (
                <div key={w.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <w.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display text-[14px] font-extrabold text-ink">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">
                      {w.desc}
                    </p>
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

/* ------------------------------------------------------- Featured Projects */

const FEATURED = [
  { country: "Jordan", title: "Turnkey Solution", img: imgProject1 },
  { country: "Iraq", title: "Multi-Specialty Hospital", img: imgProject2 },
  { country: "Libya", title: "Advanced Medical Center", img: imgProject4 },
  { country: "Uzbekistan", title: "Diagnostic & Imaging Center", img: imgProject3 },
  { country: "Syria", title: "IVF & Imaging Center", img: imgProject3 },
  { country: "Egypt", title: "Cath Lab Program", img: imgProject1 },
];

function FeaturedProjects() {
  const [page, setPage] = useState(0);
  const perPage = 4;
  const totalPages = Math.max(1, Math.ceil(FEATURED.length / perPage));
  const start = page * perPage;
  const visible = FEATURED.slice(start, start + perPage);

  return (
    <section id="projects" className="bg-secondary/40 py-20 lg:py-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Featured Projects
            </span>
            <h2 className="mt-3 font-display text-[2rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.4rem]">
              Projects That
              <br />
              Make a Difference
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:border-primary hover:text-primary disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-all hover:border-primary hover:text-primary disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <article
              key={`${p.country}-${p.title}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]"
            >
              <img
                src={p.img}
                alt={`${p.country} — ${p.title}`}
                loading="lazy"
                className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-5 top-5 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2 py-1 text-[10.5px] font-bold uppercase tracking-wider backdrop-blur">
                  <Package className="h-3 w-3" />
                  {p.country}
                </span>
                <h3 className="mt-3 font-display text-[15px] font-extrabold leading-tight text-white">
                  {p.title}
                </h3>
                <div className="mt-1 text-[11.5px] font-medium text-white/70">
                  Turnkey Solution
                </div>
              </div>
              <Link
                to="/contact"
                aria-label={`Contact us about ${p.country} projects`}
                className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_24px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-transform group-hover:translate-x-1"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === page ? "w-8 bg-primary" : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- Final CTA */

function TurnkeyCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[oklch(0.2_0.04_264)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <img src={imgCtaBg} alt="" aria-hidden className="absolute right-0 top-0 h-full w-[55%] object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.04_264)] via-[oklch(0.2_0.04_264)]/85 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[100rem] gap-8 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <h2 className="font-display text-[1.8rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2.2rem] lg:text-[2.6rem]">
            Ready to Build Your
            <br />
            Next Healthcare Facility?
          </h2>
          <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-white/75">
            Let&apos;s create a healthcare environment that
            makes a real difference in people&apos;s lives.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_22px_50px_-16px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
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

/* -------------------------------------------------------------------- Page */

export function TurnkeyPage() {
  return (
    <>
      <TurnkeyHero />
      <GlobalPresenceDark />
      <Journey />
      <Departments />
      <WhyChoose />
      <FeaturedProjects />
      <TurnkeyCTA />
    </>
  );
}
