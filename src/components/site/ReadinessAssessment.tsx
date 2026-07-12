import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Settings2,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Ruler,
  Layers,
  Zap,
  Wind,
  ShieldAlert,
  Route,
  UserCheck,
  Cpu,
  Network,
  CalendarClock,
  Package,
  Headset,
  GraduationCap,
  FileSearch,
  ClipboardList,
  Gauge,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

type Status = "ready" | "review" | "unknown";

type Item = {
  id: string;
  label: string;
  icon: LucideIcon;
  status: Status;
  why: string;
  evaluates: string;
  risk: string;
};

type Group = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: Item[];
};

const GROUPS: Group[] = [
  {
    id: "facility",
    title: "Facility Readiness",
    icon: Building2,
    items: [
      {
        id: "room",
        label: "Installation Room Dimensions",
        icon: Ruler,
        status: "ready",
        why: "The system envelope, service clearance and access route must fit the room.",
        evaluates: "We compare room and corridor dimensions against OEM installation drawings.",
        risk: "Undersized rooms force late redesign or block delivery entirely.",
      },
      {
        id: "floor",
        label: "Structural Floor Capacity",
        icon: Layers,
        status: "review",
        why: "Gantries and shielded doors impose concentrated point loads on the slab.",
        evaluates: "We review slab thickness and load path with structural drawings.",
        risk: "Insufficient capacity means reinforcement work after equipment ships.",
      },
      {
        id: "power",
        label: "Electrical Infrastructure",
        icon: Zap,
        status: "review",
        why: "Systems need stable three-phase supply, clean grounding and isolation.",
        evaluates: "We assess panel capacity, grounding and transient behaviour under load.",
        risk: "Unstable supply causes faults, downtime and voided warranties.",
      },
      {
        id: "hvac",
        label: "HVAC & Cooling",
        icon: Wind,
        status: "unknown",
        why: "Electronics reject significant heat and need controlled temperature and humidity.",
        evaluates: "We calculate heat load and verify cooling and humidity tolerance.",
        risk: "Under-sized cooling triggers thermal shutdowns and shortens component life.",
      },
      {
        id: "shielding",
        label: "Radiation Shielding",
        icon: ShieldAlert,
        status: "unknown",
        why: "Barriers must be sized from workload, occupancy and adjacent-area use.",
        evaluates: "A physics survey defines lead-equivalent shielding before construction.",
        risk: "Retrofitting shielding after build-out is disruptive and costly.",
      },
    ],
  },
  {
    id: "clinical",
    title: "Clinical Readiness",
    icon: Stethoscope,
    items: [
      {
        id: "workflow",
        label: "Clinical Workflow Planning",
        icon: Route,
        status: "ready",
        why: "Room layout should follow real patient, staff and equipment movement.",
        evaluates: "We map prep, procedure and recovery flow around the new system.",
        risk: "Poor flow creates bottlenecks and unsafe crossovers during procedures.",
      },
      {
        id: "physician",
        label: "Physician Readiness",
        icon: UserCheck,
        status: "review",
        why: "Adoption depends on the team's familiarity with the specific platform.",
        evaluates: "We confirm operator experience and protocol alignment early.",
        risk: "A steep learning curve delays go-live and reduces utilisation.",
      },
      {
        id: "biomed",
        label: "Biomedical Engineering Review",
        icon: Cpu,
        status: "ready",
        why: "A named engineering owner keeps uptime and safety predictable.",
        evaluates: "We define acceptance testing, safety checks and first-line response.",
        risk: "Without ownership, faults escalate before anyone responds.",
      },
      {
        id: "pacs",
        label: "PACS / RIS Integration",
        icon: Network,
        status: "unknown",
        why: "Images and orders must flow into hospital systems automatically.",
        evaluates: "We validate DICOM and HL7 connectivity to PACS and RIS.",
        risk: "Broken integration forces manual handling and reporting delays.",
      },
    ],
  },
  {
    id: "operational",
    title: "Operational Readiness",
    icon: Settings2,
    items: [
      {
        id: "pm",
        label: "Preventive Maintenance Strategy",
        icon: CalendarClock,
        status: "review",
        why: "Scheduled servicing keeps the system calibrated and compliant.",
        evaluates: "We define a PM schedule before install to protect warranty terms.",
        risk: "Reactive-only maintenance leads to avoidable downtime.",
      },
      {
        id: "spares",
        label: "Spare Parts Availability",
        icon: Package,
        status: "unknown",
        why: "Critical and long-lead parts must be identified in advance.",
        evaluates: "We separate consumables from long-lead items and set stock levels.",
        risk: "A single long-lead part can cause an extended outage.",
      },
      {
        id: "support",
        label: "Technical Support Planning",
        icon: Headset,
        status: "ready",
        why: "A clear escalation path contains faults before they hit the schedule.",
        evaluates: "We agree first-line, remote and on-site response times.",
        risk: "Undefined support turns minor faults into major disruptions.",
      },
      {
        id: "training",
        label: "Staff Training",
        icon: GraduationCap,
        status: "review",
        why: "Operators and biomedical staff need competency in safety and daily use.",
        evaluates: "We structure training around operation and troubleshooting.",
        risk: "Under-trained staff risk patient safety and equipment misuse.",
      },
    ],
  },
];

const STATUS_META: Record<
  Status,
  { label: string; icon: LucideIcon; text: string; dot: string; ring: string }
> = {
  ready: {
    label: "Ready",
    icon: CheckCircle2,
    text: "text-emerald-600",
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/20",
  },
  review: {
    label: "Needs Review",
    icon: AlertCircle,
    text: "text-primary",
    dot: "bg-primary",
    ring: "ring-primary/20",
  },
  unknown: {
    label: "Unknown",
    icon: HelpCircle,
    text: "text-muted-foreground",
    dot: "bg-muted-foreground/50",
    ring: "ring-border",
  },
};

const DELIVERABLES: { icon: LucideIcon; label: string }[] = [
  { icon: FileSearch, label: "Site Survey Report" },
  { icon: ClipboardList, label: "Utility & Infrastructure Checklist" },
  { icon: Route, label: "Clinical Workflow Review" },
  { icon: Gauge, label: "Installation & Risk Assessment" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function NoteRow({
  label,
  icon: Icon,
  text,
  tone,
}: {
  label: string;
  icon: LucideIcon;
  text: string;
  tone?: "risk";
}) {
  return (
    <div className="flex gap-2.5">
      <Icon
        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
          tone === "risk" ? "text-primary" : "text-muted-foreground"
        }`}
        strokeWidth={2}
      />
      <p className="text-[12.5px] leading-snug text-ink/75">
        <span className="font-semibold text-ink">{label}</span> {text}
      </p>
    </div>
  );
}

function AssessmentItem({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const meta = STATUS_META[item.status];
  const StatusIcon = meta.icon;
  const ItemIcon = item.icon;

  return (
    <div className="group border-t border-border/70 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 py-3.5 text-left transition-colors hover:bg-secondary/40"
      >
        <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
          <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
          {item.status === "review" && (
            <span
              className={`absolute inset-0 rounded-full ${meta.dot} opacity-60 motion-safe:animate-ping`}
            />
          )}
        </span>

        <ItemIcon
          className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-ink"
          strokeWidth={1.8}
        />

        <span className="flex-1 text-[14px] font-semibold text-ink">
          {item.label}
        </span>

        <span
          className={`hidden items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ring-1 sm:inline-flex ${meta.text} ${meta.ring}`}
        >
          <StatusIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
          {meta.label}
        </span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mb-4 ml-[26px] space-y-2 rounded-xl bg-secondary/60 px-4 py-3.5 ring-1 ring-border/60">
              <NoteRow icon={AlertCircle} label="Why it matters —" text={item.why} />
              <NoteRow icon={FileSearch} label="What we evaluate —" text={item.evaluates} />
              <NoteRow icon={AlertTriangle} label="Common risk —" text={item.risk} tone="risk" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AssessmentGroup({
  group,
  defaultOpen,
}: {
  group: Group;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = group.icon;
  const readyCount = group.items.filter((i) => i.status === "ready").length;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_2px_14px_-8px_rgba(15,23,42,0.14)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/40"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.07] text-primary ring-1 ring-primary/10">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <span className="flex-1">
          <span className="block font-display text-[15px] font-extrabold tracking-tight text-ink">
            {group.title}
          </span>
          <span className="mt-0.5 block text-[12px] font-medium text-muted-foreground">
            {readyCount} of {group.items.length} confirmed ready
          </span>
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-2">
              {group.items.map((item) => (
                <AssessmentItem key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ReadinessAssessment() {
  return (
    <section
      id="readiness"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* subtle engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 1px, transparent 1px), linear-gradient(to bottom, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="max-w-2xl">
          <Eyebrow index="06">Hospital Readiness</Eyebrow>
          <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
            Hospital Readiness Assessment
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-muted-foreground">
            Before investing in advanced medical technology, make sure your
            hospital is ready for a successful implementation.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14">
          {/* LEFT — interactive assessment */}
          <div className="space-y-4">
            {GROUPS.map((group, i) => (
              <AssessmentGroup
                key={group.id}
                group={group}
                defaultOpen={i === 0}
              />
            ))}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-1 pt-1 text-[12px] font-medium text-muted-foreground">
              {(["ready", "review", "unknown"] as Status[]).map((s) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${STATUS_META[s].dot}`}
                  />
                  {STATUS_META[s].label}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — editorial + deliverables + CTA */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
              Hospital Readiness
            </span>
            <h3 className="mt-2.5 font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
              Is Your Hospital Ready for Advanced Medical Technology?
            </h3>
            <p className="mt-3.5 text-[14px] leading-[1.7] text-muted-foreground">
              Most installation delays are caused by infrastructure limitations
              rather than the equipment itself. Our biomedical engineers assess
              utilities, room readiness and clinical workflow before equipment
              selection — helping hospitals avoid costly modifications and
              project delays.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
                Engineering Review Includes
              </span>
              <ul className="mt-4 space-y-3">
                {DELIVERABLES.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li key={d.label} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary ring-1 ring-primary/10">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <span className="text-[13.5px] font-semibold text-ink">
                        {d.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[14px] font-bold text-primary-foreground shadow-[0_16px_34px_-16px_var(--primary)] transition-all hover:bg-primary-dark hover:shadow-[0_20px_40px_-16px_var(--primary)]"
              >
                Request a Free Hospital Readiness Assessment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-[14px] font-bold text-ink transition-colors hover:border-primary/40 hover:text-primary"
              >
                Talk to a Biomedical Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
