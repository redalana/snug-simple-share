import { BarChart3, Building2, Stethoscope } from "lucide-react";

/**
 * Editorial commentary attached to a data table: what the numbers mean
 * technically, clinically, and what a hospital should actually do about it.
 */
export function TableInsight({
  expertCommentary,
  clinicalInterpretation,
  hospitalRecommendation,
}: {
  expertCommentary: string;
  clinicalInterpretation: string;
  hospitalRecommendation: string;
}) {
  const rows = [
    { icon: BarChart3, label: "Expert commentary", text: expertCommentary },
    { icon: Stethoscope, label: "Clinical interpretation", text: clinicalInterpretation },
    { icon: Building2, label: "Hospital recommendation", text: hospitalRecommendation },
  ];
  return (
    <aside
      aria-label="Expert interpretation of the table above"
      className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {rows.map(({ icon: Icon, label, text }) => (
          <div key={label} className="min-w-0">
            <div className="flex items-center gap-2">
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-primary shadow-sm ring-1 ring-primary/15"
                aria-hidden="true"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] text-primary">
                {label}
              </p>
            </div>
            <p className="mt-2 text-[calc(13.5*var(--desktop-px-unit))] leading-[1.7] text-foreground/85">
              {text}
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
}
