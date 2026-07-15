import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Minus,
  Plus,
  MapPin,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Headphones,
  ClipboardCheck,
  FileText,
  Cpu,
  Heart,
  Scan,
  Activity,
  Stethoscope,
  Baby,
  FlaskConical,
  Sparkles,
  UserRound,
  CircleDot,
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
import imgEngineer from "@/assets/beyond-cathlab.jpg";
import ctaAsset from "@/assets/footer-cathlab.jpg.asset.json";
const imgCtaBg = ctaAsset.url;

/* =============================================================== 01. HERO */

function TurnkeyHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fully equipped interventional cardiology suite delivered by AbuFarha"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[86vh] max-w-[100rem] items-end px-8 pb-16 pt-40 sm:px-12 lg:min-h-[92vh] lg:px-20 lg:pb-24 lg:pt-48 xl:px-28">
        <div className="max-w-[62ch]">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Turnkey Medical Departments
          </span>
          <h1 className="mt-6 font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.03em] sm:text-[3.6rem] lg:text-[4.8rem]">
            We don&apos;t just supply
            <br />
            equipment. We deliver
            <br />
            <span className="text-primary">departments ready for life.</span>
          </h1>
          <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-white/75">
            From the first blueprint on paper to the first patient in the room,
            AbuFarha delivers fully equipped medical departments — supplied,
            installed, commissioned, and clinically trained to operate from day one.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-[0_18px_44px_-16px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Plan Your Department
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================ 02. DEPARTMENT GALLERY */

const DEPARTMENTS = [
  { name: "Cardiac Cath Lab", tag: "Interventional Cardiology", img: imgCath, icon: Heart },
  { name: "Radiology & Imaging", tag: "MRI · CT · X-Ray", img: imgMri, icon: Scan },
  { name: "Operating Theatre", tag: "Surgical Excellence", img: imgOr, icon: Activity },
  { name: "Intensive Care", tag: "ICU · CCU · HDU", img: imgCt, icon: Stethoscope },
  { name: "Neonatal Care", tag: "NICU", img: imgDexa, icon: Baby },
  { name: "Sterilization (CSSD)", tag: "Central Sterile Supply", img: imgUs, icon: Sparkles },
  { name: "Clinical Laboratory", tag: "Diagnostics", img: imgMammo, icon: FlaskConical },
  { name: "Outpatient Clinic", tag: "Ambulatory Care", img: imgXray, icon: UserRound },
];

function DepartmentGallery() {
  const [active, setActive] = useState(0);
  const current = DEPARTMENTS[active];
  return (
    <section id="departments" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              01 · Choose Your Department
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3rem]">
              A complete solution for every
              <br />
              <span className="text-primary">clinical department.</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 self-end text-[13px] font-bold text-ink transition-colors hover:text-primary"
          >
            View all departments
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Large focus image */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <motion.div
            key={current.img}
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-ink"
          >
            <img
              src={current.img}
              alt={current.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
                {current.tag}
              </span>
              <h3 className="mt-3 font-display text-[2rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.6rem]">
                {current.name}
              </h3>
            </div>
          </motion.div>

          {/* Selector list */}
          <ul className="grid grid-cols-2 gap-2 self-stretch sm:grid-cols-2 lg:grid-cols-2">
            {DEPARTMENTS.map((d, i) => {
              const isActive = i === active;
              return (
                <li key={d.name}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group relative flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-primary bg-primary/[0.04] shadow-[0_16px_40px_-24px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                        : "border-border bg-white hover:border-ink/30"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-ink"
                      }`}
                    >
                      <d.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[13.5px] font-extrabold leading-tight text-ink">
                        {d.name}
                      </span>
                      <span className="mt-1 block text-[11.5px] font-medium text-muted-foreground">
                        {d.tag}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================================ 03. SIGNATURE — DEPARTMENT TRANSFORMATION */

const STAGES = [
  {
    n: "01",
    title: "Empty Room",
    body: "A prepared clinical shell — walls, power, medical gases. Ready to be transformed.",
  },
  {
    n: "02",
    title: "Equipment Arrives",
    body: "Imaging systems, patient tables, monitors and workstations delivered on schedule.",
  },
  {
    n: "03",
    title: "Installation",
    body: "Certified engineers mount, cable and align every system to manufacturer spec.",
  },
  {
    n: "04",
    title: "Integration",
    body: "PACS, HIS and modality integration — data flows the moment the room switches on.",
  },
  {
    n: "05",
    title: "Commissioning",
    body: "Calibration, safety validation, dose optimization and full acceptance testing.",
  },
  {
    n: "06",
    title: "Clinical Training",
    body: "Hands-on training for physicians, technologists and biomedical staff on every workflow.",
  },
  {
    n: "07",
    title: "Ready for Life",
    body: "First patient in. A fully operational department — supported for its entire lifecycle.",
    ready: true,
  },
];

function SignatureExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const activeIndex = useTransform(scrollYProgress, (v) =>
    Math.min(STAGES.length - 1, Math.floor(v * STAGES.length))
  );
  const [i, setI] = useState(0);
  activeIndex.on("change", (v) => setI(v));

  const stage = STAGES[i];
  const isReady = !!stage.ready;

  return (
    <section
      id="experience"
      ref={ref}
      className="relative bg-[oklch(0.14_0.04_264)] text-white"
      style={{ height: `${STAGES.length * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Ambient gradient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 70% 50%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-[100rem] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10">
          {/* Left: narrative */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              02 · Signature Experience
            </span>
            <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-[3rem]">
              From an empty room
              <br />
              to <span className="text-primary">ready for life.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Scroll to watch a clinical space transform — every stage that AbuFarha
              handles before your team welcomes the first patient.
            </p>

            {/* progress rail */}
            <ol className="mt-10 space-y-3">
              {STAGES.map((s, idx) => {
                const isActive = idx === i;
                const done = idx < i;
                return (
                  <li key={s.n} className="flex items-center gap-4">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all ${
                        s.ready && idx <= i
                          ? "bg-emerald-500 text-white"
                          : isActive
                            ? "bg-primary text-primary-foreground"
                            : done
                              ? "bg-white/20 text-white"
                              : "bg-white/5 text-white/40"
                      }`}
                    >
                      {done || (s.ready && idx <= i) ? (
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      ) : (
                        s.n
                      )}
                    </span>
                    <span
                      className={`font-display text-[13.5px] font-extrabold tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-white/45"
                      }`}
                    >
                      {s.title}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: stage visual */}
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]">
              {/* Blueprint grid */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              {/* Progressive image reveal (uses cath lab as canonical department) */}
              <motion.img
                src={imgCath}
                alt="Department transformation preview"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  filter: `saturate(${0.3 + (i / (STAGES.length - 1)) * 0.9}) brightness(${0.35 + (i / (STAGES.length - 1)) * 0.75})`,
                  opacity: 0.35 + (i / (STAGES.length - 1)) * 0.65,
                }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Stage caption */}
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-x-8 bottom-8"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
                    Stage {stage.n}
                  </span>
                  {isReady && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-400/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Operational
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-[1.8rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
                  {stage.title}
                </h3>
                <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-white/75">
                  {stage.body}
                </p>
              </motion.div>

              {/* Progress bar */}
              <div className="absolute inset-x-8 top-8">
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className={`h-full ${isReady ? "bg-emerald-500" : "bg-primary"}`}
                    style={{ width: `${((i + 1) / STAGES.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================== 04. DEPARTMENT SOLUTION (ROOM) */

type Hotspot = {
  id: string;
  x: number;
  y: number;
  title: string;
  body: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "h1",
    x: 32,
    y: 42,
    title: "Imaging System",
    body: "Biplane or single-plane angiography, sized to the room and clinical program.",
  },
  {
    id: "h2",
    x: 52,
    y: 58,
    title: "Patient Table",
    body: "Motorized, radiolucent interventional table with integrated controls.",
  },
  {
    id: "h3",
    x: 70,
    y: 30,
    title: "Ceiling Monitors",
    body: "Large-format medical displays on articulated suspension.",
  },
  {
    id: "h4",
    x: 20,
    y: 68,
    title: "Hemodynamic System",
    body: "Real-time physiological monitoring integrated with the reporting workstation.",
  },
  {
    id: "h5",
    x: 82,
    y: 62,
    title: "Injector & Radiation Protection",
    body: "Contrast injector, lead shielding, ceiling and table-mounted protection.",
  },
];

function DepartmentSolution() {
  const [active, setActive] = useState<string>(HOTSPOTS[0].id);
  const spot = HOTSPOTS.find((h) => h.id === active)!;
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            03 · Inside a Solution
          </span>
          <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[3rem]">
            Explore a real
            <br />
            <span className="text-primary">Cath Lab</span> solution.
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Every AbuFarha turnkey department is designed as a single integrated system.
            Hover the numbered points to see what goes inside.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Interactive room */}
          <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-ink shadow-[0_40px_80px_-40px_rgba(15,23,42,0.4)]">
            <img
              src={imgCath}
              alt="Interactive cath lab room"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

            {HOTSPOTS.map((h, idx) => {
              const isActive = h.id === active;
              return (
                <button
                  key={h.id}
                  type="button"
                  onMouseEnter={() => setActive(h.id)}
                  onFocus={() => setActive(h.id)}
                  onClick={() => setActive(h.id)}
                  aria-label={h.title}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  <span
                    className={`absolute inset-0 -m-2 rounded-full transition-all ${
                      isActive ? "bg-primary/30 blur-md" : "bg-white/10 blur-sm"
                    }`}
                  />
                  <span
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full font-display text-[12px] font-bold ring-2 transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground ring-white shadow-lg"
                        : "bg-white/95 text-ink ring-white/60 group-hover:scale-110"
                    }`}
                  >
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="flex flex-col rounded-[24px] border border-border bg-white p-8 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.25)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              Solution Component
            </span>
            <motion.div
              key={spot.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mt-3 font-display text-[1.6rem] font-extrabold leading-tight tracking-[-0.02em] text-ink">
                {spot.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                {spot.body}
              </p>
            </motion.div>

            <ul className="mt-8 space-y-2 border-t border-border pt-6">
              {HOTSPOTS.map((h, idx) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(h.id)}
                    onFocus={() => setActive(h.id)}
                    onClick={() => setActive(h.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-[13.5px] font-semibold transition-colors ${
                      h.id === active ? "text-primary" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10.5px] font-bold ${
                        h.id === active
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-ink"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {h.title}
                  </button>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-between gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
            >
              Request a customized solution
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================================================== 05. SOLUTION SCOPE */

const SCOPE_ROWS: Array<{ label: string; included: boolean; optional: boolean; note?: string }> = [
  { label: "Needs analysis & clinical planning", included: true, optional: false },
  { label: "Equipment supply from partner OEMs", included: true, optional: false },
  { label: "Delivery, uncrating & positioning", included: true, optional: false },
  { label: "Installation by certified engineers", included: true, optional: false },
  { label: "System integration (PACS · HIS · RIS)", included: true, optional: false },
  { label: "Commissioning & acceptance testing", included: true, optional: false },
  { label: "Clinical & biomedical training", included: true, optional: false },
  { label: "Full technical documentation", included: true, optional: false },
  { label: "Warranty coverage", included: true, optional: false },
  { label: "Extended service contract (AMC)", included: false, optional: true },
  { label: "Preventive maintenance program", included: false, optional: true },
  { label: "Radiation protection design", included: false, optional: true },
  { label: "Room fit-out coordination with contractor", included: false, optional: true },
];

function SolutionScope() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              04 · Solution Scope
            </span>
            <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.8rem]">
              What&apos;s inside
              <br />
              a turnkey scope.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">
              Full transparency on what AbuFarha delivers as standard and what you
              can add — no small print, no surprises.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-border">
            <div className="grid grid-cols-[1fr_120px_120px] bg-ink text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
              <div className="px-6 py-4">Deliverable</div>
              <div className="px-4 py-4 text-center">Included</div>
              <div className="px-4 py-4 text-center">Optional</div>
            </div>
            {SCOPE_ROWS.map((r, idx) => (
              <div
                key={r.label}
                className={`grid grid-cols-[1fr_120px_120px] items-center border-t border-border text-[14px] ${
                  idx % 2 === 0 ? "bg-white" : "bg-secondary/30"
                }`}
              >
                <div className="px-6 py-4 font-medium text-ink">{r.label}</div>
                <div className="flex justify-center py-4">
                  {r.included ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600 ring-1 ring-emerald-500/25">
                      <Check className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground/40" />
                  )}
                </div>
                <div className="flex justify-center py-4">
                  {r.optional ? (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/8 text-primary ring-1 ring-primary/20">
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <Minus className="h-4 w-4 text-muted-foreground/40" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================== 06 & 07. RELATED PREVIEWS */

const RELATED_SERVICES = [
  {
    title: "Installation & Commissioning",
    body: "Certified engineering teams from delivery to acceptance testing.",
    icon: Wrench,
  },
  {
    title: "Clinical Training",
    body: "Hands-on onboarding for physicians, nurses and technologists.",
    icon: GraduationCap,
  },
  {
    title: "Preventive Maintenance",
    body: "Scheduled service programs that protect uptime and warranty.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Technical Support",
    body: "Multi-country support desk with rapid on-site escalation.",
    icon: Headphones,
  },
];

const RELATED_PRODUCTS = [
  { title: "Interventional Imaging", tag: "Biplane · Mono-plane", img: imgCath },
  { title: "MRI & CT Systems", tag: "Advanced Diagnostics", img: imgMri },
  { title: "Surgical Solutions", tag: "OR Integration", img: imgOr },
  { title: "Patient Monitoring", tag: "ICU · CCU", img: imgUs },
];

function RelatedServices() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              05 · Related Services
            </span>
            <h2 className="mt-3 font-display text-[1.8rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.4rem]">
              The services behind every department.
            </h2>
          </div>
          <Link
            to="/"
            hash="services"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-ink transition-colors hover:text-primary"
          >
            All services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_SERVICES.map((s) => (
            <Link
              key={s.title}
              to="/"
              hash="services"
              className="group flex h-full flex-col rounded-[20px] border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/20">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-6 font-display text-[16px] font-extrabold leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-primary">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProducts() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              06 · Featured Product Families
            </span>
            <h2 className="mt-3 font-display text-[1.8rem] font-extrabold tracking-[-0.02em] text-ink sm:text-[2.4rem]">
              Equipment that powers every solution.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-ink transition-colors hover:text-primary"
          >
            All products
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_PRODUCTS.map((p) => (
            <Link
              key={p.title}
              to="/products"
              className="group relative block aspect-[4/5] overflow-hidden rounded-[20px] bg-ink"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/70">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-[18px] font-extrabold leading-tight">
                  {p.title}
                </h3>
              </div>
              <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all group-hover:bg-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================== 08. CASE STUDIES */

const CASES = [
  {
    country: "Jordan",
    department: "Cardiac Cath Lab",
    scope: "Full turnkey — Biplane interventional suite",
    equipment: ["Biplane angiography", "Hemodynamic system", "Ceiling monitors", "Injector"],
    services: ["Installation", "Commissioning", "Clinical training", "5-year AMC"],
    outcome: "First case within 6 weeks of handover. Zero unplanned downtime in year one.",
    img: imgProject1,
  },
  {
    country: "Iraq",
    department: "Radiology & Imaging",
    scope: "MRI + CT suite integration",
    equipment: ["1.5T MRI", "128-slice CT", "PACS integration", "Radiation shielding coordination"],
    services: ["Installation", "PACS integration", "Technologist training", "AMC"],
    outcome: "Two modalities live in parallel — patient throughput up 42% quarter over quarter.",
    img: imgProject2,
  },
  {
    country: "Uzbekistan",
    department: "ICU & Monitoring",
    scope: "16-bed intensive care solution",
    equipment: ["Patient monitors", "Central station", "Ventilators", "Infusion systems"],
    services: ["Installation", "Nurse training", "24/7 support", "Spare parts program"],
    outcome: "Unified monitoring across 16 beds — validated and operational in 5 weeks.",
    img: imgProject3,
  },
];

function CaseStudies() {
  return (
    <section id="cases" className="bg-[oklch(0.14_0.04_264)] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              07 · Real Departments · Real Outcomes
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] sm:text-[3rem]">
              Departments delivered.
              <br />
              <span className="text-primary">Lives changed.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[13px] font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            All projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 space-y-14">
          {CASES.map((c, idx) => (
            <article
              key={c.country + c.department}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                <img src={c.img} alt={`${c.country} — ${c.department}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-x-6 bottom-6 flex items-center gap-2 text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur">
                    <MapPin className="h-3 w-3" /> {c.country}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-400/30">
                    <CircleDot className="h-3 w-3" /> Operational
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-[1.8rem] font-extrabold leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
                  {c.department}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{c.scope}</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                      <Cpu className="h-3.5 w-3.5" /> Equipment
                    </div>
                    <ul className="mt-3 space-y-1.5 text-[13.5px] text-white/85">
                      {c.equipment.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                      <ClipboardCheck className="h-3.5 w-3.5" /> Services delivered
                    </div>
                    <ul className="mt-3 space-y-1.5 text-[13.5px] text-white/85">
                      {c.services.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-300">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} /> Outcome
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/90">{c.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================== 09. FAQ (GEO / SEO) */

const FAQS = [
  {
    q: "What is a turnkey medical department?",
    a: "A turnkey department is a complete clinical solution delivered end-to-end — from equipment planning and supply through installation, integration, commissioning, clinical training and long-term support. AbuFarha hands over a department that is fully operational from day one.",
  },
  {
    q: "Which departments can AbuFarha deliver?",
    a: "Cardiac Cath Labs, Radiology & Imaging (MRI, CT, X-Ray), Operating Theatres, ICU & Critical Care, Neonatal (NICU), Sterilization (CSSD), Clinical Laboratories and Outpatient Clinics — configured to each hospital's clinical program.",
  },
  {
    q: "How does commissioning work?",
    a: "After installation, our engineers perform calibration, safety validation, dose optimization and full acceptance testing against manufacturer and international standards, alongside the hospital's biomedical team.",
  },
  {
    q: "How is clinical training delivered?",
    a: "On-site, hands-on training for physicians, technologists and biomedical staff covering daily workflows, protocols and system administration — followed by refresher sessions during the warranty period.",
  },
  {
    q: "What happens after installation?",
    a: "Departments are covered by warranty and can be enrolled in an extended service contract with preventive maintenance, genuine spare parts, remote diagnostics and 24/7 technical support.",
  },
  {
    q: "Does AbuFarha build the hospital itself?",
    a: "No. AbuFarha does not carry out civil construction. We coordinate with your contractor and deliver everything that turns a prepared clinical shell into a fully equipped, operational medical department.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.6fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              08 · Answers
            </span>
            <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink sm:text-[2.8rem]">
              Turnkey,
              <br />
              <span className="text-primary">explained.</span>
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
              The most common questions from hospitals and ministries evaluating an
              AbuFarha turnkey department.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-[16.5px] font-extrabold leading-snug text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen ? "border-primary bg-primary text-primary-foreground rotate-45" : "border-border text-ink"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-14 text-[14.5px] leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* FAQ schema for GEO / search engines */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}

/* ========================================================= 10. FINAL CTA */

function TurnkeyCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[oklch(0.18_0.04_264)] text-white">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={imgCtaBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.14_0.04_264)] via-[oklch(0.18_0.04_264)]/85 to-[oklch(0.18_0.04_264)]/40" />
      </div>

      <div className="relative mx-auto grid max-w-[100rem] gap-12 px-6 py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-10 lg:py-32">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            Ready When You Are
          </span>
          <h2 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1] tracking-[-0.03em] sm:text-[3.2rem] lg:text-[3.8rem]">
            Let&apos;s plan your
            <br />
            next department.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">
            A 30-minute consultation with our clinical and engineering leads —
            no obligation, tailored to your program.
          </p>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">
            <FileText className="h-3.5 w-3.5" /> What you&apos;ll get
          </div>
          <ul className="mt-5 space-y-3 text-[14px] text-white/85">
            {[
              "A tailored department blueprint",
              "Indicative equipment configuration",
              "Timeline & scope of works",
              "Warranty & support proposal",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-400/25">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_18px_44px_-16px_color-mix(in_oklab,var(--primary)_65%,transparent)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/5"
            >
              Revisit the journey
            </a>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[100rem] flex-wrap items-center justify-between gap-6 px-6 py-6 text-[12px] font-medium text-white/60 lg:px-10">
          <span className="flex items-center gap-2">
            <img src={imgEngineer} alt="" className="h-8 w-8 rounded-full object-cover" />
            25+ years of clinical partnership across the region
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> OEM-authorized · ISO-aligned processes
          </span>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== PAGE */

export function TurnkeyPage() {
  return (
    <>
      <TurnkeyHero />
      <DepartmentGallery />
      <SignatureExperience />
      <DepartmentSolution />
      <SolutionScope />
      <RelatedServices />
      <RelatedProducts />
      <CaseStudies />
      <FAQ />
      <TurnkeyCTA />
    </>
  );
}
