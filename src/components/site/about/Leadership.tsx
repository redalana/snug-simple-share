import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, Award, Wrench, Handshake, Globe2 } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal, EASE } from "./Reveal";
import cathlabImg from "@/assets/leadership-cathlab.jpg";

type Leader = {
  id: string;
  name: string;
  role: string;
  bio: string;
  years: string;
  specialization: string;
  countries: string;
  projects: string;
  linkedin?: string;
  email?: string;
};

const LEADERS: Leader[] = [
  {
    id: "walid",
    name: "Dr. Walid AbuFarha",
    role: "Founder & CEO",
    bio: "Founder of AbuFarha Medical Supplies, leading the company since 1999 in delivering advanced medical equipment, biomedical engineering and turnkey healthcare projects across Africa and the Middle East.",
    years: "25+ years",
    specialization: "Healthcare leadership & medical technology deployment",
    countries: "10+ across Africa & the Middle East",
    projects: "30+ healthcare projects delivered",
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "khalid-s",
    name: "Khalid Shouqer",
    role: "Commercial Director",
    bio: "Leads commercial strategy and OEM partnerships across the region, aligning customer needs with the right clinical technology and long-term service commitments.",
    years: "20+ years",
    specialization: "Commercial strategy & OEM partnerships",
    countries: "Africa & the Middle East",
    projects: "Multi-department hospital programs",
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "anwar",
    name: "Dr. Anwar AbuFannouneh",
    role: "Medical Director",
    bio: "Bridges clinical and engineering teams — advising hospitals on protocols, safety and workflow integration for imaging, cath lab, ICU and surgical departments.",
    years: "20+ years",
    specialization: "Clinical advisory & medical protocols",
    countries: "Regional clinical programs",
    projects: "Cardiology, imaging & critical-care departments",
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "issam",
    name: "Dr. Issam Najm-Eldin",
    role: "Technical Director",
    bio: "Heads AbuFarha's biomedical engineering practice — installation, commissioning, preventive maintenance and lifecycle service on advanced imaging and interventional platforms.",
    years: "20+ years",
    specialization: "Biomedical engineering & commissioning",
    countries: "Regional engineering coverage",
    projects: "MRI, CT and Cath Lab installations",
    linkedin: "#",
    email: "info@abufarhamedical.com",
  },
  {
    id: "yazan",
    name: "Yazan AbuFarha",
    role: "Project Manager",
    bio: "Coordinates multi-department turnkey healthcare projects from planning through handover — timelines, site readiness and cross-functional delivery.",
    years: "10+ years",
    specialization: "Turnkey project delivery",
    countries: "Africa & the Middle East",
    projects: "End-to-end hospital equipping programs",
    email: "info@abufarhamedical.com",
  },
  {
    id: "naser",
    name: "Naser Al-Shuaibat",
    role: "Service Manager",
    bio: "Runs preventive and corrective service operations — dispatching field engineers, monitoring SLAs and keeping installed systems within manufacturer tolerance.",
    years: "15+ years",
    specialization: "Field service & SLA management",
    countries: "Regional service network",
    projects: "24/7 technical support programs",
    email: "info@abufarhamedical.com",
  },
  {
    id: "mohammad",
    name: "Mohammad Arkaga",
    role: "Logistics Manager",
    bio: "Oversees regional spare-parts stock, international shipping and cross-border compliance so equipment and parts move on schedule to every project site.",
    years: "10+ years",
    specialization: "Regional logistics & spare parts",
    countries: "Multi-country supply chain",
    projects: "Spare-parts and equipment logistics",
    email: "info@abufarhamedical.com",
  },
  {
    id: "khalid-n",
    name: "Khalid Al-Najjar",
    role: "Procurement Manager",
    bio: "Manages OEM procurement, warranty terms and traceability — ensuring every system delivered is factory-new, fully warranted and specification-matched.",
    years: "10+ years",
    specialization: "OEM procurement & warranty",
    countries: "Global OEM sourcing",
    projects: "Certified equipment procurement",
    email: "info@abufarhamedical.com",
  },
  {
    id: "omar",
    name: "Omar Al-Mazaydeh",
    role: "Operations Manager",
    bio: "Aligns engineering, logistics and service operations so projects execute predictably from kickoff to long-term support.",
    years: "10+ years",
    specialization: "Operations & delivery",
    countries: "Regional operations",
    projects: "Multi-site delivery coordination",
    email: "info@abufarhamedical.com",
  },
  {
    id: "ibrahim",
    name: "Ibrahim Abu Hussain",
    role: "Finance Manager",
    bio: "Leads financial planning, project accounting and vendor governance — supporting long-term partnerships with hospitals and manufacturers.",
    years: "10+ years",
    specialization: "Financial planning & governance",
    countries: "Regional operations",
    projects: "Project & contract financing",
    email: "info@abufarhamedical.com",
  },
];

const HIGHLIGHTS = [
  { icon: Award, title: "Experienced Leadership", desc: "Decades of combined experience in healthcare engineering and medical technology." },
  { icon: Wrench, title: "Engineering Excellence", desc: "Advanced clinical systems installed, commissioned and supported to OEM standards." },
  { icon: Handshake, title: "Customer Partnership", desc: "Long-term relationships with hospitals — built on trust, service and clinical results." },
  { icon: Globe2, title: "Global Healthcare Impact", desc: "Supporting hospitals across Africa, the Middle East and Central Asia." },
];

function initials(name: string) {
  return name
    .replace(/^(Dr\.?)\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map(p => p[0])
    .join("")
    .toUpperCase();
}

function Avatar({ name, size = 40, active = false }: { name: string; size?: number; active?: boolean }) {
  return (
    <div
      className="grid shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-secondary to-secondary/60 font-display font-bold text-ink ring-1 ring-border"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        boxShadow: active ? "0 6px 18px -8px rgba(15,23,42,0.35)" : undefined,
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}

function LeaderRow({ leader, active, onSelect }: { leader: Leader; active: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={onSelect}
      aria-pressed={active}
      className={`relative flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-200 ${
        active
          ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.25)] ring-1 ring-border"
          : "hover:bg-white/70"
      }`}
    >
      {active && (
        <motion.span
          layoutId="leader-accent"
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
          transition={{ duration: 0.25, ease: EASE }}
        />
      )}
      <Avatar name={leader.name} size={44} active={active} />
      <div className="min-w-0">
        <div className={`truncate font-display text-[calc(14*var(--desktop-px-unit))] font-bold ${active ? "text-ink" : "text-ink/90"}`}>
          {leader.name}
        </div>
        <div className={`truncate text-[calc(12*var(--desktop-px-unit))] ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
          {leader.role}
        </div>
      </div>
    </button>
  );
}

function Monitor({ leader }: { leader: Leader }) {
  return (
    <div className="relative overflow-hidden rounded-[calc(14*var(--desktop-px-unit))] border border-ink/70 bg-[#0d0f12] text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      {/* screen bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
        <span>Cath Lab · Leadership</span>
        <span className="hidden sm:inline">AbuFarha Medical</span>
      </div>
      <div className="p-5 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={leader.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-6"
          >
            <div className="mx-auto sm:mx-0">
              <div className="grid h-[120px] w-[120px] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-white/15 to-white/5 ring-1 ring-white/15 sm:h-[132px] sm:w-[132px]">
                <span className="font-display text-[2.4rem] font-extrabold tracking-tight text-white/90">
                  {initials(leader.name)}
                </span>
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-display text-[1.25rem] font-extrabold leading-tight text-white sm:text-[1.45rem]">
                {leader.name}
              </div>
              <div className="mt-1 text-[calc(12.5*var(--desktop-px-unit))] font-semibold text-primary">
                {leader.role}
              </div>
              <p className="mt-3 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-white/75">
                {leader.bio}
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[calc(11.5*var(--desktop-px-unit))]">
                <div>
                  <dt className="uppercase tracking-wider text-white/45">Experience</dt>
                  <dd className="mt-0.5 font-semibold text-white/90">{leader.years}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wider text-white/45">Focus</dt>
                  <dd className="mt-0.5 font-semibold text-white/90">{leader.specialization}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wider text-white/45">Countries</dt>
                  <dd className="mt-0.5 font-semibold text-white/90">{leader.countries}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-wider text-white/45">Projects</dt>
                  <dd className="mt-0.5 font-semibold text-white/90">{leader.projects}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-white transition hover:bg-white/20"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                )}
                {leader.email && (
                  <a
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[calc(12*var(--desktop-px-unit))] font-semibold text-white transition hover:bg-primary/90"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* base bezel */}
      <div className="h-3 bg-gradient-to-b from-[#0d0f12] to-[#05060a]" />
    </div>
  );
}

export function Leadership() {
  const [activeId, setActiveId] = useState(LEADERS[0].id);
  const active = LEADERS.find(l => l.id === activeId) ?? LEADERS[0];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <Eyebrow index="09">Meet the People Behind AbuFarha Medical</Eyebrow>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="font-display text-[2rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Leadership that drives<br className="hidden sm:block" /> healthcare innovation.
            </h2>
            <p className="max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Behind every successful healthcare project is an experienced team dedicated to engineering
              excellence, medical technology and long-term customer partnerships across Africa and the Middle East.
            </p>
          </div>
        </Reveal>

        {/* Desktop / Tablet layout */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-10">
          {/* Left rail */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-secondary/40 p-3 ring-1 ring-border">
              <div className="max-h-[calc(640*var(--desktop-px-unit))] space-y-1 overflow-y-auto pr-1">
                {LEADERS.map(l => (
                  <LeaderRow key={l.id} leader={l} active={l.id === activeId} onSelect={() => setActiveId(l.id)} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right stage */}
          <Reveal delay={0.05}>
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-border shadow-[0_40px_100px_-40px_rgba(15,23,42,0.35)]">
              <img
                src={cathlabImg}
                alt="Modern interventional cath lab environment"
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full max-h-[calc(720*var(--desktop-px-unit))] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10" />
              {/* Floating monitor */}
              <div className="absolute inset-x-6 bottom-6 sm:right-8 sm:left-auto sm:bottom-8 sm:w-[62%] lg:w-[58%]">
                <Monitor leader={active} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Tablet layout */}
        <div className="mt-10 hidden md:block lg:hidden">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-border">
            <img src={cathlabImg} alt="" loading="lazy" width={1600} height={1104} className="h-[380px] w-full object-cover" />
            <div className="absolute inset-x-6 bottom-6">
              <Monitor leader={active} />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {LEADERS.map(l => (
              <LeaderRow key={l.id} leader={l} active={l.id === activeId} onSelect={() => setActiveId(l.id)} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="mt-8 md:hidden">
          <Monitor leader={active} />
          <div className="mt-5 -mx-6 overflow-x-auto pb-2">
            <div className="flex gap-3 px-6">
              {LEADERS.map(l => {
                const isActive = l.id === activeId;
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setActiveId(l.id)}
                    aria-pressed={isActive}
                    className={`flex w-[140px] shrink-0 flex-col items-center gap-2 rounded-2xl p-3 text-center transition ${
                      isActive ? "bg-white shadow-[0_10px_30px_-16px_rgba(15,23,42,0.3)] ring-1 ring-border" : "bg-secondary/50"
                    }`}
                    style={{ minHeight: 44 }}
                  >
                    <Avatar name={l.name} size={56} active={isActive} />
                    <div className="text-[13px] font-bold leading-tight text-ink">{l.name}</div>
                    <div className={`text-[11px] font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {l.role}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.25)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <h.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-[calc(16*var(--desktop-px-unit))] font-bold text-ink">
                  {h.title}
                </div>
                <p className="mt-1.5 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
