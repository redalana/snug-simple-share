import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import turnkeyHero from "@/assets/turnkey-hero.jpg";
import solMri from "@/assets/sol-mri.jpg";
import solCt from "@/assets/sol-ct.jpg";
import solPetct from "@/assets/sol-petct.jpg";
import solCarm from "@/assets/sol-carm.jpg";
import solOr from "@/assets/sol-or.jpg";
import solMammo from "@/assets/sol-mammo.jpg";
import solXray from "@/assets/sol-xray.jpg";
import solUltrasound from "@/assets/sol-ultrasound.jpg";
import heroCathlab from "@/assets/hero-cathlab.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import abufarhaHq from "@/assets/abufarha-hq.jpg";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const PHASES = [
  {
    n: "01",
    title: "Supply",
    body: "OEM procurement, logistics and cold-chain-grade handling from factory to floor.",
  },
  {
    n: "02",
    title: "Install",
    body: "Manufacturer-certified engineers execute mechanical, electrical and network integration.",
  },
  {
    n: "03",
    title: "Commission",
    body: "Calibration, safety validation and acceptance testing against clinical protocols.",
  },
  {
    n: "04",
    title: "Train",
    body: "On-site clinical applications training for technicians, physicians and biomed staff.",
  },
  {
    n: "05",
    title: "Support",
    body: "Preventive maintenance, spare parts and priority technical response for the lifecycle.",
  },
] as const;

type Department = {
  key: string;
  group: string;
  name: string;
  meta: string;
  image: string;
  spec: string;
  included: string[];
  optional: string[];
};

const DEPARTMENTS: Department[] = [
  {
    key: "cathlab",
    group: "Interventional Suites",
    name: "Cath Lab",
    meta: "Cardiac • Neuro • Vascular",
    image: heroCathlab,
    spec: "Biplane and single-plane suites commissioned with hemodynamic recording, PACS integration and radiation-protection compliance.",
    included: [
      "Angiographic imaging system",
      "Hemodynamic monitoring",
      "Injector & contrast workflow",
      "Radiation protection package",
      "Clinical applications training",
    ],
    optional: [
      "UPS & power conditioning",
      "Structured lead shielding",
      "Boom-mounted monitor arrays",
    ],
  },
  {
    key: "mri",
    group: "Diagnostic Imaging",
    name: "MRI Suite",
    meta: "1.5T • 3T • Wide-bore",
    image: solMri,
    spec: "Shielded magnet room delivered with cryogen management, RF-cage validation and homogeneity certified across the full field of view.",
    included: [
      "Magnet, gradient & RF chain",
      "Cryogen and quench routing",
      "Coil portfolio & workstation",
      "Homogeneity acceptance testing",
      "Radiographer certification",
    ],
    optional: [
      "RF cage supply & validation",
      "Chiller / heat rejection",
      "In-bore patient comfort suite",
    ],
  },
  {
    key: "ct",
    group: "Diagnostic Imaging",
    name: "CT Scanner",
    meta: "64 – 640 slice",
    image: solCt,
    spec: "High-resolution CT installed with dose-modulation protocols, cardiac gating and reconstruction workstation tuned to local clinical needs.",
    included: [
      "Gantry, table & detector array",
      "Dose-modulation software",
      "Advanced reconstruction console",
      "Protocol optimisation",
      "Radiographer certification",
    ],
    optional: [
      "Contrast injector integration",
      "Dual-energy licensing",
      "Cardiac gating package",
    ],
  },
  {
    key: "petct",
    group: "Diagnostic Imaging",
    name: "PET / CT",
    meta: "Molecular imaging",
    image: solPetct,
    spec: "Molecular imaging suite delivered with hot-lab workflow review, dosimetry protocols and oncology reading environment.",
    included: [
      "PET / CT gantry & detector",
      "Time-of-flight reconstruction",
      "Oncology reading workstation",
      "Hot-lab workflow review",
      "Nuclear-medicine training",
    ],
    optional: [
      "Shielded hot-lab fit-out",
      "Cyclotron interface",
      "Theranostics protocols",
    ],
  },
  {
    key: "or",
    group: "Critical Care",
    name: "Operating Room",
    meta: "General • Hybrid • Orthopaedic",
    image: solOr,
    spec: "Fully-equipped surgical theatre delivered with imaging, anaesthesia, integration and sterile-workflow validation.",
    included: [
      "Surgical table & lighting",
      "Anaesthesia workstation",
      "Electrosurgery & energy platforms",
      "OR integration & video routing",
      "Perioperative team training",
    ],
    optional: [
      "Intra-operative imaging (C-arm / O-arm)",
      "Robotic surgery integration",
      "Laminar-flow validation",
    ],
  },
  {
    key: "carm",
    group: "Interventional Suites",
    name: "Mobile C-Arm Suite",
    meta: "Fluoroscopy • Ortho • Pain",
    image: solCarm,
    spec: "Mobile fluoroscopy workflow validated for orthopaedic, vascular and pain-management use with radiation-safety programme.",
    included: [
      "Mobile C-arm system",
      "DICOM & PACS integration",
      "Radiation-safety programme",
      "Applications training",
    ],
    optional: [
      "Advanced 3D imaging package",
      "Lead-shielding refresh",
    ],
  },
  {
    key: "mammo",
    group: "Women's Health",
    name: "Mammography Suite",
    meta: "2D • 3D tomosynthesis",
    image: solMammo,
    spec: "Screening and diagnostic mammography delivered with tomosynthesis, biopsy workflow and MQSA-aligned QC protocols.",
    included: [
      "Full-field digital mammography",
      "Tomosynthesis licensing",
      "Reading workstation",
      "QC protocol setup",
      "Radiographer certification",
    ],
    optional: [
      "Stereotactic biopsy add-on",
      "Contrast-enhanced mammography",
    ],
  },
  {
    key: "xray",
    group: "Diagnostic Imaging",
    name: "Digital X-Ray Room",
    meta: "Ceiling & floor-mounted",
    image: solXray,
    spec: "Digital radiography suite installed with wireless detectors, dose-tracking and RIS/PACS integration.",
    included: [
      "Generator, tube & detector",
      "Auto-positioning workflow",
      "Dose-tracking & QC",
      "PACS & RIS integration",
    ],
    optional: [
      "Long-length imaging package",
      "Tomo add-on",
    ],
  },
  {
    key: "us",
    group: "Diagnostic Imaging",
    name: "Ultrasound Room",
    meta: "General • Cardiac • Women's",
    image: solUltrasound,
    spec: "Ultrasound rooms outfitted with the right probe portfolio, ergonomic workflow and reporting integration.",
    included: [
      "Console & probe portfolio",
      "Reporting workstation",
      "PACS integration",
      "Sonographer training",
    ],
    optional: [
      "Contrast-enhanced ultrasound",
      "Fusion / navigation",
    ],
  },
];

const CASES = [
  {
    country: "Iraq",
    dept: "Cath Lab",
    scope: "Supply · Install · Commission · Train",
    outcome: "Interventional cardiology programme operational within 30 days of handover.",
    image: project1,
  },
  {
    country: "Egypt",
    dept: "Advanced Imaging",
    scope: "Turnkey MRI + CT",
    outcome: "Two-modality diagnostic centre delivered as a single coordinated project.",
    image: project2,
  },
  {
    country: "Jordan",
    dept: "Cardiac Centre",
    scope: "Turnkey Cardiology Department",
    outcome: "End-to-end cardiology floor commissioned, trained and under long-term service.",
    image: project3,
  },
];

const FAQS = [
  {
    q: "What is an AbuFarha turnkey medical department?",
    a: "A complete clinical department delivered as a single accountable programme — equipment supply, installation, commissioning, clinical training, documentation and ongoing support. The outcome is a department ready for clinical operation, not a construction project.",
  },
  {
    q: "Which departments can be delivered turnkey?",
    a: "Cath Lab, MRI, CT, PET/CT, Operating Room, ICU, Mammography, Digital X-Ray, Ultrasound and mobile C-arm suites — across cardiology, radiology, oncology, women's health and surgery.",
  },
  {
    q: "What is included in the standard scope?",
    a: "Equipment procurement, factory-certified installation, safety and performance commissioning, applications training, technical documentation, warranty and a defined preventive-maintenance schedule.",
  },
  {
    q: "What is optional?",
    a: "Power conditioning and UPS, RF and lead shielding validation, contrast injectors, advanced software licences, cyclotron interfacing, and extended service agreements are scoped per project.",
  },
  {
    q: "Do you build the hospital shell?",
    a: "No. AbuFarha does not build hospitals or perform civil works. We deliver the clinical core inside the space provided — equipment, integration, commissioning, training and long-term support.",
  },
  {
    q: "How long does commissioning and training take?",
    a: "Typical department commissioning runs from two to six weeks depending on modality and scope, immediately followed by on-site clinical applications training with the operating team.",
  },
  {
    q: "What happens after handover?",
    a: "Every turnkey installation moves into an after-sales programme: preventive maintenance, spare-parts logistics, remote diagnostics where supported, and priority technical response.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Utility                                                                   */
/* -------------------------------------------------------------------------- */

const NAVY = "bg-[#0A1633]";
const NAVY_2 = "bg-[#0d1c3d]";
const SURFACE = "bg-[#F4F5F7]";
const INK = "text-[#0A1633]";
const RED = "text-[hsl(0_84%_55%)]";
const RED_BG = "bg-[hsl(0_84%_55%)]";

function StatusDot({ tone = "on" }: { tone?: "on" | "off" }) {
  if (tone === "on") {
    return (
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-[#34C759] shadow-[0_0_10px_#34C759]"
      />
    );
  }
  return <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white/25" />;
}

function ChapterLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const chip =
    tone === "light"
      ? "text-white/60 border-white/15 bg-white/5"
      : "text-[#0A1633]/60 border-[#0A1633]/10 bg-white";
  return (
    <span
      className={`inline-flex items-center gap-3 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] ${chip}`}
    >
      <span className="tabular-nums">{index}</span>
      <span className="h-px w-6 bg-current opacity-40" />
      <span>{children}</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export function TurnkeyPage() {
  return (
    <>
      <FaqSchema />
      <OpeningStatement />
      <ReadinessConsole />
      <DepartmentExplorer />
      <IncludedOptional />
      <DeliveryEditorial />
      <TrustBand />
      <CaseStudies />
      <Faq />
      <ClosingCta />
    </>
  );
}

/* --------- 01 · Opening statement (full-bleed, editorial) ----------------- */

function OpeningStatement() {
  return (
    <section className={`relative ${NAVY} text-white overflow-hidden`}>
      <img
        src={turnkeyHero}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1633] via-[#0A1633]/70 to-[#0A1633]" />
      <div className="relative mx-auto max-w-[1240px] px-6 pt-24 pb-28 lg:pt-32 lg:pb-40">
        <ChapterLabel index="00" tone="light">
          Turnkey Department Delivery
        </ChapterLabel>
        <div className="mt-10 grid grid-cols-12 gap-8 items-end">
          <h1
            className="col-span-12 lg:col-span-9 font-display font-extrabold tracking-[-0.03em] leading-[0.92]
                       text-[clamp(2.75rem,7vw,6.5rem)]"
          >
            Operational{" "}
            <span className="text-white/40">at the flip of a switch.</span>
          </h1>
          <p className="col-span-12 lg:col-span-3 text-white/60 text-base leading-relaxed lg:pb-3">
            We translate complex clinical requirements into fully functioning
            medical departments. Not construction — clinical operationalisation.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm">
          <div className="flex items-center gap-3">
            <StatusDot />
            <span className="text-white/70">
              Departments delivered ready for clinical operation
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/10 md:block" />
          <div className="flex items-center gap-3 text-white/50">
            <span className="font-mono text-xs tracking-widest">
              MENA · AFRICA · CENTRAL ASIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------- 02 · Signature moment: Operational Readiness Console ----------- */

function ReadinessConsole() {
  // Scroll-linked phase activation for the "flip of a switch" moment.
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = document.getElementById("readiness-console");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          // stagger the phases turning "on"
          PHASES.forEach((_, i) => {
            setTimeout(() => setActive((prev) => Math.max(prev, i + 1)), i * 320);
          });
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={`${NAVY} text-white`}>
      <div
        id="readiness-console"
        className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32"
      >
        <div className="grid grid-cols-12 gap-8 items-end mb-14">
          <div className="col-span-12 lg:col-span-8">
            <ChapterLabel index="01" tone="light">
              Operational Readiness Console
            </ChapterLabel>
            <h2 className="mt-6 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl">
              Five phases between an empty room{" "}
              <span className="text-white/40">and the first patient.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-white/60 leading-relaxed lg:pb-2">
            Each phase is signed off before the next begins. When the last
            indicator turns green, the department is live.
          </p>
        </div>

        <div
          className={`relative ${NAVY_2} rounded-2xl border border-white/10 overflow-hidden`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {PHASES.map((p, i) => {
              const on = i < active;
              return (
                <div key={p.n} className="group relative p-8">
                  <div className="flex items-center gap-2 mb-6 transition-opacity">
                    <StatusDot tone={on ? "on" : "off"} />
                    <span className="text-[10px] uppercase tracking-[0.24em] text-white/40 font-bold">
                      Phase {p.n}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {p.body}
                  </p>
                  <div
                    className={`mt-8 text-[10px] font-mono uppercase tracking-widest transition-colors ${
                      on ? "text-[#34C759]" : "text-white/25"
                    }`}
                  >
                    {on ? "● Ready" : "○ Pending"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-sm text-white/40 max-w-2xl">
          AbuFarha does not perform civil works. We deliver the clinical core
          inside the space provided — equipment, integration, commissioning,
          training and long-term support.
        </p>
      </div>
    </section>
  );
}

/* --------- 03 · Interactive Department Explorer --------------------------- */

function DepartmentExplorer() {
  const [key, setKey] = useState<string>(DEPARTMENTS[0].key);
  const active = useMemo(
    () => DEPARTMENTS.find((d) => d.key === key) ?? DEPARTMENTS[0],
    [key]
  );

  const groups = useMemo(() => {
    const map = new Map<string, Department[]>();
    for (const d of DEPARTMENTS) {
      if (!map.has(d.group)) map.set(d.group, []);
      map.get(d.group)!.push(d);
    }
    return [...map.entries()];
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <ChapterLabel index="02">Departmental Specialists</ChapterLabel>
            <h2
              className={`mt-6 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl ${INK}`}
            >
              We don't build the shell.{" "}
              <span className="text-[#0A1633]/40">We deliver the core.</span>
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-4 text-[#0A1633]/60 leading-relaxed lg:pb-2">
            Select a department to preview a typical turnkey scope. Every
            programme is scoped to the site — this is the shape of the
            outcome.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12 lg:gap-16">
          {/* Department index */}
          <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="space-y-8">
              {groups.map(([group, items]) => (
                <div key={group}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-6 bg-[#0A1633]/20" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0A1633]/50">
                      {group}
                    </span>
                  </div>
                  <ul>
                    {items.map((d) => {
                      const on = d.key === active.key;
                      return (
                        <li key={d.key}>
                          <button
                            type="button"
                            onClick={() => setKey(d.key)}
                            className={`group w-full flex items-center justify-between gap-4 border-b border-[#0A1633]/10 py-4 text-left transition-colors ${
                              on
                                ? "border-[hsl(0_84%_55%)]"
                                : "hover:border-[#0A1633]/40"
                            }`}
                          >
                            <span
                              className={`font-display text-lg font-bold tracking-tight ${
                                on ? RED : INK
                              }`}
                            >
                              {d.name}
                            </span>
                            <span
                              className={`text-[11px] font-mono uppercase tracking-widest ${
                                on
                                  ? "text-[hsl(0_84%_55%)]"
                                  : "text-[#0A1633]/40"
                              }`}
                            >
                              {d.meta}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          {/* Featured department */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#F4F5F7]">
              <img
                key={active.image}
                src={active.image}
                alt={active.name}
                className="absolute inset-0 h-full w-full object-cover animate-[fade-in_0.5s_ease-out]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633]/60 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] text-[#0A1633]/70">
                <StatusDot />
                Ready for operation
              </div>
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md">
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/70 mb-2">
                  {active.group}
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {active.name}
                </h3>
              </div>
            </div>

            <p className="mt-10 text-lg text-[#0A1633]/70 leading-relaxed max-w-2xl">
              {active.spec}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScopeList
                title="What's included"
                items={active.included}
                accent="red"
              />
              <ScopeList
                title="Optional extras"
                items={active.optional}
                accent="mute"
              />
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <Link
                to="/products"
                className={`inline-flex items-center gap-2 ${INK} font-bold hover:${RED} transition-colors`}
              >
                Browse equipment portfolio{" "}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#0A1633]/60 hover:text-[#0A1633] transition-colors"
              >
                See it delivered on real projects{" "}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScopeList({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: "red" | "mute";
}) {
  const line =
    accent === "red" ? "bg-[hsl(0_84%_55%)]" : "bg-[#0A1633]/20";
  return (
    <div>
      <h4 className="font-bold mb-4 uppercase text-[11px] tracking-[0.24em] text-[#0A1633]">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[15px] text-[#0A1633]/75">
            <span className={`mt-2.5 h-px w-5 shrink-0 ${line}`} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------- 04 · Included vs Optional (editorial contract) ----------------- */

function IncludedOptional() {
  return (
    <section className={`${SURFACE}`}>
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <ChapterLabel index="03">The Turnkey Contract</ChapterLabel>
        <div className="mt-6 grid grid-cols-12 gap-8 items-end mb-16">
          <h2
            className={`col-span-12 lg:col-span-8 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl ${INK}`}
          >
            One accountable programme.{" "}
            <span className="text-[#0A1633]/40">
              No hand-offs between vendors.
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-4 text-[#0A1633]/60 leading-relaxed">
            Every turnkey engagement is delivered against a single scope of
            work. Here is the shape of what's inside — and what typically sits
            outside — before we tailor it to your site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#0A1633]/10 border border-[#0A1633]/10 rounded-2xl overflow-hidden">
          <ContractColumn
            eyebrow="Included as standard"
            tone="light"
            items={[
              ["Equipment supply", "OEM procurement, freight and site delivery."],
              ["Installation", "Manufacturer-certified engineers on site."],
              ["Commissioning", "Calibration, safety and acceptance testing."],
              ["Clinical training", "On-site applications training for staff."],
              ["Documentation", "As-built, protocols and compliance dossier."],
              ["Warranty", "Manufacturer warranty coverage from day one."],
              ["Preventive maintenance", "Scheduled service programme."],
              ["Technical support", "Priority response for the lifecycle."],
            ]}
          />
          <ContractColumn
            eyebrow="Optional, scoped per project"
            tone="dark"
            items={[
              ["Power conditioning", "UPS, isolation and clean-power design."],
              ["RF & lead shielding", "Cage supply and post-install validation."],
              ["Advanced software", "Cardiac, oncology, AI reconstruction licences."],
              ["Injectors & consumables", "Contrast workflow and starter stock."],
              ["Extended service", "Multi-year full-risk agreements."],
              ["Remote diagnostics", "OEM-supported connectivity where available."],
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ContractColumn({
  eyebrow,
  items,
  tone,
}: {
  eyebrow: string;
  items: [string, string][];
  tone: "light" | "dark";
}) {
  const bg = tone === "dark" ? NAVY : "bg-white";
  const heading = tone === "dark" ? "text-white" : INK;
  const meta = tone === "dark" ? "text-white/60" : "text-[#0A1633]/60";
  const eb = tone === "dark" ? "text-white/50" : "text-[#0A1633]/50";
  const rule = tone === "dark" ? "border-white/10" : "border-[#0A1633]/10";
  const bullet =
    tone === "dark" ? "bg-[#34C759]" : "bg-[hsl(0_84%_55%)]";

  return (
    <div className={`${bg} p-10 lg:p-14`}>
      <div className={`text-[10px] font-bold uppercase tracking-[0.24em] ${eb} mb-8`}>
        {eyebrow}
      </div>
      <ul className={`divide-y ${rule}`}>
        {items.map(([label, desc]) => (
          <li
            key={label}
            className="grid grid-cols-12 gap-6 py-5 items-baseline"
          >
            <div className="col-span-1 pt-2">
              <span className={`block h-1.5 w-1.5 rounded-full ${bullet}`} />
            </div>
            <div className={`col-span-5 font-display font-bold ${heading}`}>
              {label}
            </div>
            <div className={`col-span-6 text-sm ${meta} leading-relaxed`}>
              {desc}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------- 05 · How we deliver (magazine feature, not icon grid) --------- */

const CHAPTERS = [
  {
    n: "I",
    title: "Consultation",
    kicker: "Clinical intent before equipment.",
    body: "We begin with the clinical programme — case mix, throughput, staff — and reverse-engineer the technical brief. The right department is the one built around how it will actually be used.",
  },
  {
    n: "II",
    title: "Engineering & Integration",
    kicker: "The technical layer, made invisible.",
    body: "Structural, mechanical, electrical and IT integration is handled by manufacturer-certified engineers so that clinical teams inherit a room that simply works — with PACS, RIS and hospital systems already speaking.",
  },
  {
    n: "III",
    title: "Commissioning & Handover",
    kicker: "Signed off against clinical protocols.",
    body: "Acceptance testing follows international standards and the department's own SOPs. Handover is a document, a walkthrough, and a green light — not a hopeful email.",
  },
  {
    n: "IV",
    title: "Applications Training",
    kicker: "Confidence in the first case, not the tenth.",
    body: "Clinical applications specialists run on-site training tied to real protocols. Staff move from vendor demo to independent operation before the team leaves the floor.",
  },
  {
    n: "V",
    title: "Lifecycle Support",
    kicker: "The relationship starts at handover.",
    body: "Preventive maintenance, spare-parts logistics and priority technical response are contracted for the life of the equipment, not sold as an afterthought.",
  },
];

function DeliveryEditorial() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <ChapterLabel index="04">How We Deliver</ChapterLabel>
        <div className="mt-6 grid grid-cols-12 gap-8 items-end mb-16">
          <h2
            className={`col-span-12 lg:col-span-9 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl ${INK}`}
          >
            Five chapters,{" "}
            <span className="text-[#0A1633]/40">
              from first conversation to last shift.
            </span>
          </h2>
        </div>

        <div className="border-t border-[#0A1633]/10">
          {CHAPTERS.map((c) => (
            <article
              key={c.n}
              className="grid grid-cols-12 gap-8 border-b border-[#0A1633]/10 py-12"
            >
              <div className="col-span-12 md:col-span-2">
                <div className="font-display text-3xl font-extrabold text-[#0A1633]/25">
                  {c.n}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-[#0A1633] mb-2">
                  {c.title}
                </h3>
                <p className="text-[#0A1633]/60 text-lg italic">{c.kicker}</p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="text-[#0A1633]/70 leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link
            to="/hospital-readiness-assessment"
            className={`inline-flex items-center gap-2 ${INK} font-bold hover:${RED} transition-colors`}
          >
            Start a readiness assessment <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#0A1633]/60 hover:text-[#0A1633] transition-colors"
          >
            Talk to a project engineer <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------- 06 · Trust band (dark, editorial — no stats wall) -------------- */

function TrustBand() {
  return (
    <section className={`${NAVY} text-white relative overflow-hidden`}>
      <img
        src={abufarhaHq}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1633] via-[#0A1633]/85 to-[#0A1633]/50" />
      <div className="relative mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <ChapterLabel index="05" tone="light">
          Why AbuFarha
        </ChapterLabel>
        <div className="mt-6 grid grid-cols-12 gap-8 items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl">
            25 years of clinical outcomes,{" "}
            <span className="text-white/40">
              across ten countries and counting.
            </span>
          </h2>
          <p className="col-span-12 lg:col-span-4 text-white/60 leading-relaxed">
            We operate where continuity matters most — MENA, Africa and Central
            Asia — because a department is only as valuable as the years of
            support behind it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            ["Since 1999", "Continuous operation"],
            ["10+ countries", "Active service footprint"],
            ["30+ departments", "Delivered turnkey"],
            ["Lifecycle SLA", "Priority technical response"],
          ].map(([k, v]) => (
            <div key={k} className={`${NAVY} p-8`}>
              <div className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {k}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/50 font-bold">
                {v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white font-bold hover:text-[hsl(0_84%_65%)] transition-colors"
          >
            View project portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            Meet the engineering team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------- 07 · Case studies (widescreen tiles, typographic) -------------- */

function CaseStudies() {
  return (
    <section className={`${SURFACE}`}>
      <div className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-8 items-end mb-16">
          <div className="col-span-12 lg:col-span-8">
            <ChapterLabel index="06">Delivered in the Field</ChapterLabel>
            <h2
              className={`mt-6 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl ${INK}`}
            >
              Real departments.{" "}
              <span className="text-[#0A1633]/40">
                Live under clinical load.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <Link
              to="/projects"
              className={`inline-flex items-center gap-2 ${INK} font-bold hover:${RED} transition-colors text-sm`}
            >
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {CASES.map((c, i) => (
            <Link
              key={c.country + c.dept}
              to="/projects"
              className="group grid grid-cols-12 gap-6 items-stretch bg-white rounded-2xl overflow-hidden border border-[#0A1633]/5 hover:border-[#0A1633]/15 transition-colors"
            >
              <div
                className={`col-span-12 md:col-span-5 relative aspect-[4/3] md:aspect-auto ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={c.image}
                  alt={`${c.dept} · ${c.country}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] text-[#0A1633]/70">
                  <StatusDot />
                  {c.country}
                </div>
              </div>
              <div className="col-span-12 md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#0A1633]/40 mb-3">
                  Case Study — Turnkey Department
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-[#0A1633] mb-4">
                  {c.dept}
                </h3>
                <div className="text-xs font-mono uppercase tracking-widest text-[#0A1633]/60 mb-6">
                  Scope · {c.scope}
                </div>
                <p className="text-[#0A1633]/70 leading-relaxed max-w-md">
                  {c.outcome}
                </p>
                <div
                  className={`mt-8 inline-flex items-center gap-2 ${INK} font-bold text-sm group-hover:${RED} transition-colors`}
                >
                  Read the project <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------- 08 · FAQ (GEO-friendly disclosure) ----------------------------- */

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1040px] px-6 py-24 lg:py-32">
        <ChapterLabel index="07">Questions Buyers Ask</ChapterLabel>
        <h2
          className={`mt-6 font-display font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl mb-14 ${INK}`}
        >
          Clarity{" "}
          <span className="text-[#0A1633]/40">
            before the first purchase order.
          </span>
        </h2>

        <div className="border-t border-[#0A1633]/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#0A1633]/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[#0A1633]/40 tabular-nums pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-[#0A1633]">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`mt-1 shrink-0 rounded-full border border-[#0A1633]/15 p-2 transition-colors ${
                      isOpen ? "bg-[#0A1633] text-white border-[#0A1633]" : "text-[#0A1633]"
                    }`}
                    aria-hidden
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-10 pr-16 text-[#0A1633]/70 leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/* --------- 09 · Closing CTA ---------------------------------------------- */

function ClosingCta() {
  return (
    <section className={`${SURFACE}`}>
      <div className="mx-auto max-w-[1240px] px-6 pb-24 lg:pb-32">
        <div
          className={`${NAVY} rounded-[2rem] p-10 md:p-16 lg:p-20 relative overflow-hidden`}
        >
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[hsl(0_84%_55%)]/10 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <ChapterLabel index="08" tone="light">
                Start Your Department
              </ChapterLabel>
              <h2 className="mt-6 font-display text-white font-extrabold tracking-[-0.02em] leading-[1.02] text-4xl md:text-5xl lg:text-6xl">
                Tell us the room.{" "}
                <span className="text-white/40">
                  We'll return with the department.
                </span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 ${RED_BG} text-white font-bold px-6 py-4 rounded-full hover:brightness-110 transition-all`}
              >
                Initiate a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/hospital-readiness-assessment"
                className="inline-flex items-center gap-2 border border-white/25 text-white font-bold px-6 py-4 rounded-full hover:bg-white/5 transition-all"
              >
                Readiness assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
