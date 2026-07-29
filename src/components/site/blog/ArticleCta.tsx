import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarClock,
  Download,
  FileSpreadsheet,
  GitCompareArrows,
  MessageCircle,
  Phone,
} from "lucide-react";
import { openQuoteModal } from "@/lib/quote-modal";
import { trackEvent } from "@/lib/analytics";

type Action = {
  key: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  to?: string;
  onClick?: () => void;
  primary?: boolean;
};

/**
 * Premium enterprise CTA for flagship articles — six concrete next steps
 * instead of one generic "contact us" band.
 */
export function ArticleCta({
  heading,
  subheading,
  technology = "MRI",
}: {
  heading: string;
  subheading: string;
  technology?: string;
}) {
  const quote = (source: string) => () => {
    trackEvent("recommendation_clicked", { source, technology });
    openQuoteModal({ source });
  };

  const actions: Action[] = [
    {
      key: "expert",
      label: "Talk to an Expert",
      description: "Speak with a clinical applications specialist",
      icon: MessageCircle,
      to: "/contact",
      primary: true,
    },
    {
      key: "quote",
      label: "Request a Quote",
      description: "Configuration-specific pricing and lead time",
      icon: ArrowRight,
      onClick: quote("article-cta-quote"),
      primary: true,
    },
    {
      key: "compare",
      label: `Compare ${technology} Systems`,
      description: "Side-by-side specifications from our catalogue",
      icon: GitCompareArrows,
      to: "/compare",
    },
    {
      key: "guide",
      label: `Download ${technology} Buying Guide`,
      description: "Procurement checklist sent by our team",
      icon: Download,
      onClick: quote("article-cta-buying-guide"),
    },
    {
      key: "consult",
      label: "Book a Consultation",
      description: "Site survey and feasibility review",
      icon: CalendarClock,
      to: "/contact",
    },
    {
      key: "specs",
      label: "Request Technical Specifications",
      description: "Full datasheets, siting and power requirements",
      icon: FileSpreadsheet,
      onClick: quote("article-cta-technical-specs"),
    },
  ];

  return (
    <section aria-labelledby="article-cta-heading" className="bg-white pb-10">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(120deg,#fff5f5_0%,#ffffff_55%)] p-6 shadow-(--shadow-editorial-sm) ring-1 ring-primary/10 sm:p-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0 max-w-2xl">
              <p className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.12em] text-primary">
                Next steps
              </p>
              <h2
                id="article-cta-heading"
                className="mt-2 font-display text-[calc(24*var(--desktop-px-unit))] font-extrabold leading-tight text-ink sm:text-[calc(28*var(--desktop-px-unit))]"
              >
                {heading}
              </h2>
              <p className="mt-2 text-[calc(14.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                {subheading}
              </p>
            </div>
            <a
              href="tel:+962799741318"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> +962 7 9974 1318
            </a>
          </div>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {actions.map((a) => (
              <li key={a.key}>
                <ActionCard action={a} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ActionCard({ action }: { action: Action }) {
  const Icon = action.icon;
  const className = `group flex h-full w-full min-w-0 items-start gap-3 rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
    action.primary
      ? "border-primary/25 bg-white shadow-(--shadow-editorial-xs) hover:border-primary/50"
      : "border-border bg-white/70 hover:border-primary/30"
  }`;

  const inner = (
    <>
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-[calc(14.5*var(--desktop-px-unit))] font-extrabold leading-snug text-ink">
          {action.label}
        </span>
        <span className="mt-0.5 block text-[calc(12.5*var(--desktop-px-unit))] leading-snug text-muted-foreground">
          {action.description}
        </span>
      </span>
    </>
  );

  if (action.to) {
    return (
      <Link to={action.to} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={action.onClick} className={className}>
      {inner}
    </button>
  );
}
