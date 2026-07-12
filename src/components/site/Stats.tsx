import { Calendar, Building2, Boxes } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const STATS = [
  { icon: Calendar, target: 25, suffix: "+", label: "Years of Experience" },
  { icon: Building2, target: 250, suffix: "+", label: "Hospitals Served" },
  { icon: Boxes, target: 1500, suffix: "+", label: "Equipment Installed" },
];

function Stat({ icon: Icon, target, suffix, label }: (typeof STATS)[number]) {
  const { ref, value } = useCountUp(target);
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Icon className="h-7 w-7" />
      </div>
      <div>
        <div className="font-display text-3xl font-extrabold leading-none text-white sm:text-4xl">
          <span ref={ref}>{value.toLocaleString()}</span>
          {suffix}
        </div>
        <div className="mt-1.5 text-sm font-medium text-white/60">{label}</div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-ink py-16">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,_var(--primary),transparent_60%)] opacity-25" />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-primary/25"
        preserveAspectRatio="none"
        viewBox="0 0 1200 100"
      >
        <path
          d="M0 50h420l25-38 30 76 22-50 18 12h645"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
