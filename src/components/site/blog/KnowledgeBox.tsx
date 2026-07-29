import {
  AlertOctagon,
  AlertTriangle,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Lightbulb,
  ListChecks,
  Rocket,
  Sparkles,
  Stethoscope,
  Info,
  Wrench,
  XCircle,
} from "lucide-react";
import type { KnowledgeBoxVariant } from "@/lib/blog";

type Style = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  ring: string;
  bg: string;
  text: string;
};

const STYLES: Record<KnowledgeBoxVariant, Style> = {
  "clinical-insight": {
    label: "Clinical Insight",
    icon: Stethoscope,
    ring: "border-primary/25",
    bg: "bg-primary/[0.04]",
    text: "text-primary",
  },
  "engineer-note": {
    label: "Biomedical Engineer Note",
    icon: Wrench,
    ring: "border-slate-400/40",
    bg: "bg-slate-50",
    text: "text-slate-700",
  },
  "planning-tip": {
    label: "Hospital Planning Tip",
    icon: Building2,
    ring: "border-sky-500/30",
    bg: "bg-sky-50",
    text: "text-sky-700",
  },
  procurement: {
    label: "Procurement Advice",
    icon: ListChecks,
    ring: "border-indigo-500/30",
    bg: "bg-indigo-50",
    text: "text-indigo-700",
  },
  "did-you-know": {
    label: "Did You Know?",
    icon: Sparkles,
    ring: "border-violet-500/30",
    bg: "bg-violet-50",
    text: "text-violet-700",
  },
  "best-practice": {
    label: "Best Practice",
    icon: CheckCircle2,
    ring: "border-emerald-500/30",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  "common-mistakes": {
    label: "Common Mistakes",
    icon: XCircle,
    ring: "border-rose-500/30",
    bg: "bg-rose-50",
    text: "text-rose-700",
  },
  "expert-recommendation": {
    label: "Expert Recommendation",
    icon: Award,
    ring: "border-amber-500/35",
    bg: "bg-amber-50",
    text: "text-amber-800",
  },
  "quick-facts": {
    label: "Quick Facts",
    icon: Lightbulb,
    ring: "border-teal-500/30",
    bg: "bg-teal-50",
    text: "text-teal-700",
  },
  "safety-alert": {
    label: "Safety Alert",
    icon: AlertOctagon,
    ring: "border-red-500/40",
    bg: "bg-red-50",
    text: "text-red-700",
  },
  "future-technology": {
    label: "Future Technology",
    icon: Rocket,
    ring: "border-cyan-500/30",
    bg: "bg-cyan-50",
    text: "text-cyan-700",
  },
  important: {
    label: "Important",
    icon: Info,
    ring: "border-blue-500/30",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  warning: {
    label: "Warning",
    icon: AlertTriangle,
    ring: "border-orange-500/40",
    bg: "bg-orange-50",
    text: "text-orange-800",
  },
};

/** Premium in-article knowledge box. Semantic <aside> with a labelled region. */
export function KnowledgeBox({
  variant,
  title,
  text,
  items,
}: {
  variant: KnowledgeBoxVariant;
  title?: string;
  text?: string;
  items?: string[];
}) {
  const s = STYLES[variant] ?? STYLES.important;
  const Icon = s.icon ?? Cpu;
  const heading = title ?? s.label;
  return (
    <aside
      aria-label={`${s.label}: ${heading}`}
      className={`rounded-2xl border-l-4 ${s.ring} ${s.bg} p-5 sm:p-6`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white shadow-sm ${s.text}`}
          aria-hidden="true"
        >
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0">
          <p
            className={`text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] ${s.text}`}
          >
            {s.label}
          </p>
          {title && (
            <p className="mt-0.5 font-display text-[calc(15.5*var(--desktop-px-unit))] font-extrabold leading-snug text-ink">
              {title}
            </p>
          )}
        </div>
      </div>
      {text && (
        <p className="mt-3 text-[calc(14.5*var(--desktop-px-unit))] leading-[1.75] text-foreground/85">
          {text}
        </p>
      )}
      {items && items.length > 0 && (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[calc(14*var(--desktop-px-unit))] leading-[1.7] text-foreground/85"
            >
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${s.text} bg-current`} />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
