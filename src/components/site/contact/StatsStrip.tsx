import { cn } from "@/lib/utils";
import { STATS } from "./data";

export function StatsStrip() {
  return (
    <section className="py-[calc(90*var(--desktop-px-unit))]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-4 rounded-[calc(16*var(--desktop-px-unit))] border border-border/70 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)] sm:grid-cols-4 sm:gap-6 sm:p-10">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-col items-center gap-2 text-center sm:items-start sm:text-left",
                i > 0 && "sm:border-l sm:border-border/60 sm:pl-6",
              )}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-4xl font-black tabular-nums leading-none text-foreground sm:text-5xl lg:text-6xl">
                  {value}
                </div>
                <div className="mt-2 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
