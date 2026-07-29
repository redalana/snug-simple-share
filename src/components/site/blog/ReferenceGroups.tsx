import { BookMarked } from "lucide-react";

/**
 * Professional, grouped reference list with numbered citation formatting.
 * Numbering is continuous across groups so citations can be referenced as [n].
 */
export function ReferenceGroups({
  groups,
  note,
}: {
  groups: { title: string; items: { label: string; url?: string }[] }[];
  note?: string;
}) {
  let counter = 0;
  return (
    <section
      aria-labelledby="references-heading"
      className="rounded-2xl border border-border bg-secondary/40 p-6"
    >
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm ring-1 ring-border"
          aria-hidden="true"
        >
          <BookMarked className="h-5 w-5" />
        </span>
        <h2
          id="references-heading"
          className="font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold text-ink"
        >
          References, Standards &amp; Guidelines
        </h2>
      </div>

      <div className="mt-5 space-y-5">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] text-primary">
              {group.title}
            </p>
            <ol className="mt-2 space-y-2 text-[calc(13.5*var(--desktop-px-unit))] leading-relaxed text-foreground/85">
              {group.items.map((item) => {
                counter += 1;
                const n = counter;
                return (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-[calc(10.5*var(--desktop-px-unit))] font-bold text-primary">
                      {n}
                    </span>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="min-w-0 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="min-w-0">{item.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>

      {note && (
        <p className="mt-5 text-[calc(12*var(--desktop-px-unit))] italic leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </section>
  );
}
