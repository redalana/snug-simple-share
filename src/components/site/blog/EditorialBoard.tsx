import { CalendarCheck, FileBadge, ShieldCheck, UserCheck } from "lucide-react";

/**
 * E-E-A-T panel: who reviewed the article, when, at what evidence level, and
 * the medical disclaimer. Mirrors the review governance used by manufacturer
 * clinical knowledge portals.
 */
export function EditorialBoard({
  reviewers,
  lastReviewed,
  nextReview,
  version,
  evidenceLevel,
  disclaimer,
}: {
  reviewers: { role: string; name: string; credential: string }[];
  lastReviewed: string;
  nextReview: string;
  version: string;
  evidenceLevel: string;
  disclaimer: string;
}) {
  const meta = [
    { icon: CalendarCheck, label: "Last reviewed", value: lastReviewed },
    { icon: CalendarCheck, label: "Next review due", value: nextReview },
    { icon: FileBadge, label: "Content version", value: version },
    { icon: ShieldCheck, label: "Evidence level", value: evidenceLevel },
  ];
  return (
    <section
      aria-labelledby="editorial-review-heading"
      className="rounded-2xl border border-border bg-white p-6 shadow-(--shadow-editorial-xs)"
    >
      <div className="flex items-center gap-3">
        <span
          className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-primary"
          aria-hidden="true"
        >
          <UserCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] text-primary">
            Reviewed by
          </p>
          <h2
            id="editorial-review-heading"
            className="font-display text-[calc(17*var(--desktop-px-unit))] font-extrabold text-ink"
          >
            Editorial &amp; Clinical Review Panel
          </h2>
        </div>
      </div>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {reviewers.map((r) => (
          <li key={r.role} className="rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] text-muted-foreground">
              {r.role}
            </p>
            <p className="mt-1 font-display text-[calc(14.5*var(--desktop-px-unit))] font-extrabold text-ink">
              {r.name}
            </p>
            <p className="text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground">
              {r.credential}
            </p>
          </li>
        ))}
      </ul>

      <dl className="mt-5 grid gap-3 sm:grid-cols-4">
        {meta.map(({ icon: Icon, label, value }) => (
          <div key={label} className="rounded-xl bg-secondary/60 px-4 py-3">
            <dt className="flex items-center gap-1.5 text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.1em] text-muted-foreground">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" /> {label}
            </dt>
            <dd className="mt-1 text-[calc(13.5*var(--desktop-px-unit))] font-semibold text-ink">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 border-t border-border pt-4 text-[calc(12.5*var(--desktop-px-unit))] italic leading-relaxed text-muted-foreground">
        <span className="font-semibold not-italic text-ink">Medical disclaimer: </span>
        {disclaimer}
      </p>
    </section>
  );
}
