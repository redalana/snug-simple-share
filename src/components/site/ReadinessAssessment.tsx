import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Building2,
  Stethoscope,
  Settings2,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow } from "./Eyebrow";

type Status = "ready" | "review" | "unknown";

type Item = {
  id: string;
  label: string;
  status: Status;
  /** one-line explanation shown on hover */
  hint: string;
  /** short engineering note revealed on click */
  note: string;
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
        status: "ready",
        hint: "Room must fit the system envelope plus service clearance.",
        note: "Advanced imaging systems need defined clear floor area, ceiling height and access-corridor width for delivery. We verify dimensions against OEM drawings before commissioning.",
      },
      {
        id: "floor",
        label: "Structural Floor Capacity",
        status: "review",
        hint: "Heavy systems impose concentrated point loads on the slab.",
        note: "Gantries and shielded doors concentrate weight on small footprints. A structural review confirms the slab and load path can carry static and dynamic loads safely.",
      },
      {
        id: "power",
        label: "Electrical Infrastructure",
        status: "review",
        hint: "Peak draw, grounding and isolation must meet OEM spec.",
        note: "Systems demand stable three-phase supply, dedicated grounding and often a UPS or line conditioner. We assess panel capacity and transient behaviour before install.",
      },
      {
        id: "hvac",
        label: "HVAC & Cooling",
        status: "unknown",
        hint: "Heat load and humidity must stay within tolerance.",
        note: "Electronics reject significant heat and require controlled temperature and humidity. Under-sized cooling causes thermal shutdowns and shortens component life.",
      },
      {
        id: "shielding",
        label: "Radiation Shielding",
        status: "unknown",
        hint: "Shielding calculated by a qualified physicist.",
        note: "Room shielding is designed from workload, occupancy and adjacent-area use. A physics survey defines lead-equivalent barriers before construction, not after.",
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
        status: "ready",
        hint: "Patient and staff flow mapped around the new system.",
        note: "Room layout should follow real clinical movement — patient prep, procedure and recovery — so the technology supports the workflow rather than disrupting it.",
      },
      {
        id: "physician",
        label: "Physician Readiness",
        status: "review",
        hint: "Operators confident on the specific platform.",
        note: "Adoption depends on the clinical team's familiarity with the exact protocols and interface. Early involvement reduces the learning curve after go-live.",
      },
      {
        id: "biomed",
        label: "Biomedical Engineering Review",
        status: "ready",
        hint: "In-house or partner engineering support identified.",
        note: "A named biomedical contact owning acceptance testing, safety checks and first-line response keeps uptime predictable from day one.",
      },
      {
        id: "pacs",
        label: "PACS / RIS Integration",
        status: "unknown",
        hint: "Images and orders must flow into hospital systems.",
        note: "DICOM and HL7 connectivity to PACS and RIS is validated before go-live so results reach clinicians without manual handling.",
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
        status: "review",
        hint: "Scheduled servicing planned before install, not after.",
        note: "A defined PM schedule keeps the system calibrated and compliant. Planning it up front avoids reactive downtime and preserves warranty terms.",
      },
      {
        id: "spares",
        label: "Spare Parts Availability",
        status: "unknown",
        hint: "Critical parts sourcing and lead times understood.",
        note: "Knowing which components are consumable versus long-lead lets the hospital hold the right critical spares and avoid extended outages.",
      },
      {
        id: "support",
        label: "Technical Support Planning",
        status: "ready",
        hint: "Response path and escalation defined in advance.",
        note: "Clear first-line, remote and on-site escalation with agreed response times means faults are contained before they affect the schedule.",
      },
      {
        id: "training",
        label: "Staff Training",
        status: "review",
        hint: "Clinical and technical staff trained to competency.",
        note: "Structured training for operators and biomedical staff — on safety, daily operation and troubleshooting — protects both patients and the investment.",
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

const EASE = [0.22, 1, 0.36, 1] as const;

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);
  return value;
}

function AssessmentItem({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const meta = STATUS_META[item.status];
  const StatusIcon = meta.icon;

  return (
    <div className="group border-t border-border/70 first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 py-3.5 text-left transition-colors hover:bg-secondary/40"
      >
        <span
          className={`relative flex h-2.5 w-2.5 shrink-0 items-center justify-center`}
        >
          <span className={`h-2.5 w-2.5 rounded-full ${meta.dot}`} />
          {item.status === "review" && (
            <span
              className={`absolute inset-0 rounded-full ${meta.dot} opacity-60 motion-safe:animate-ping`}
            />
          )}
        </span>

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

      {/* hover hint — desktop only, hidden once expanded */}
      {!open && (
        <p className="mb-3 hidden max-h-0 overflow-hidden pl-[22px] text-[12.5px] leading-relaxed text-muted-foreground opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 lg:block">
          {item.hint}
        </p>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="mb-4 rounded-xl bg-secondary/60 px-4 py-3 pl-[22px] text-[13px] leading-[1.7] text-ink/75 ring-1 ring-border/60">
              {item.note}
            </p>
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

function ReadinessScore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const score = useCountUp(78, inView);
  const R = 52;
  const C = 2 * Math.PI * R;
  const shown = reduce ? 78 : score;
  const offset = C - (shown / 100) * C;

  return (
    <div ref={ref} className="flex items-center gap-5">
      <div className="relative h-[132px] w-[132px] shrink-0">
        <svg viewBox="0 0 132 132" className="h-full w-full -rotate-90">
          <circle
            cx="66"
            cy="66"
            r={R}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="9"
          />
          <motion.circle
            cx="66"
            cy="66"
            r={R}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: C }}
            transition={{ duration: 1.4, ease: EASE }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-extrabold tabular-nums text-ink">
            {shown}%
          </span>
        </div>
      </div>
      <div>
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Overall Readiness
        </span>
        <p className="mt-1.5 max-w-[16rem] text-[13px] leading-[1.65] text-muted-foreground">
          A sample profile. Most hospitals discover gaps they had not planned
          for — before a single system is ordered.
        </p>
      </div>
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

          {/* RIGHT — editorial + score + CTA */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">
              Hospital Readiness
            </span>
            <h3 className="mt-3 font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink">
              Is Your Hospital Ready for Advanced Medical Technology?
            </h3>
            <p className="mt-4 text-[14px] leading-[1.75] text-muted-foreground">
              Most delays and cost overruns are decided long before an order is
              placed — in the room, the slab, the power supply and the workflow.
              Evaluating infrastructure and clinical readiness first turns an
              installation into a predictable project.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-5">
              <ReadinessScore />
            </div>

            <p className="mt-6 text-[13.5px] leading-[1.75] text-ink/75">
              Every successful installation begins long before equipment
              arrives. Our biomedical engineers evaluate infrastructure,
              workflow and clinical requirements before equipment selection —
              reducing project delays and helping hospitals go live with
              confidence.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-[14px] font-bold text-primary-foreground shadow-[0_16px_34px_-16px_var(--primary)] transition-all hover:bg-primary-dark"
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
