export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M1 18h6l2.5-9 4 15 3.5-20 3 11 2-3h8"
          stroke="var(--primary)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none">
        <div
          className={`font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          Abu<span className="text-primary">Farha</span>
        </div>
        <div
          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-muted-foreground"}`}
        >
          Medical Equipment
        </div>
      </div>
    </div>
  );
}
