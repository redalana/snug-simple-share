import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Wrench,
  Building2,
  FlaskConical,
  Package,
  Brain,
  Hospital,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/Eyebrow";

type Item = {
  Icon: LucideIcon;
  label: string;
  highlight: string;
};

const ITEMS: Item[] = [
  { Icon: Stethoscope, label: "Meet our Stroke Physicians", highlight: "Stroke Physicians" },
  { Icon: Wrench, label: "Meet our Biomedical Engineering Team", highlight: "Biomedical Engineering Team" },
  { Icon: Building2, label: "Tour AbuFarha Headquarters", highlight: "AbuFarha Headquarters" },
  { Icon: FlaskConical, label: "Explore our Engineering Laboratories", highlight: "Engineering Laboratories" },
  { Icon: Package, label: "Visit our Medical Equipment Warehouse", highlight: "Medical Equipment Warehouse" },
  { Icon: Brain, label: "Observe Comprehensive Stroke Workflows", highlight: "Comprehensive Stroke Workflows" },
  { Icon: Hospital, label: "Visit Hospitals Using Our Technologies", highlight: "Hospitals Using Our Technologies" },
  { Icon: Handshake, label: "Exchange Knowledge with our Leadership Team", highlight: "Leadership Team" },
];

// Subtle medical sky-blue accent — complements primary red without replacing it.
const ACCENT = "#38BDF8";

function renderLabel(label: string, highlight: string) {
  const idx = label.indexOf(highlight);
  if (idx === -1) return label;
  return (
    <>
      {label.slice(0, idx)}
      <span className="font-semibold text-ink">{highlight}</span>
      {label.slice(idx + highlight.length)}
    </>
  );
}

export function VisitAbuFarha() {
  return (
    <>
      <section
        id="visit-abufarha"
        className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/40 py-16 lg:py-24"
      >
        <div className="relative mx-auto max-w-[94rem] px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* LEFT — headline + description */}
            <div className="lg:pr-6">
              <Eyebrow index="01">Visit AbuFarha</Eyebrow>
              <h2 className="mt-10 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[3rem]">
                Experience Comprehensive Stroke Programs
                <span className="mt-2 block text-primary">Before You Invest.</span>
              </h2>
              <p className="mt-10 max-w-xl text-base leading-[1.8] text-muted-foreground sm:text-[1.05rem]">
                We invite healthcare leaders, physicians, and biomedical engineers to
                experience firsthand how comprehensive stroke programs are planned,
                engineered, implemented, and supported — before making one of their
                hospital&apos;s most important technology investments.
              </p>

              <p
                className="mt-14 max-w-xl border-l-[3px] pl-7 font-display text-[1.5rem] font-extrabold leading-[1.3] tracking-[-0.015em] text-ink sm:text-[1.7rem] lg:text-[1.85rem]"
                style={{ borderColor: ACCENT }}
              >
                Helping hospitals build comprehensive stroke programs across{" "}
                <span className="text-primary">Africa and the Middle East</span> since 1999.
              </p>
            </div>

            {/* RIGHT — premium checklist */}
            <ul className="flex flex-col divide-y divide-border/60">
              {ITEMS.map(({ Icon, label, highlight }) => (
                <li
                  key={label}
                  className="group flex items-center gap-5 py-7 transition-colors first:pt-0 last:pb-0"
                >
                  <span
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${ACCENT}1A`, color: ACCENT }}
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-[1.15rem] font-medium leading-snug tracking-tight text-ink sm:text-[1.25rem]">
                    {renderLabel(label, highlight)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="relative overflow-hidden bg-ink py-16 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,_var(--primary),transparent_70%)] opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-[80rem] px-6 text-center lg:px-10">
          <h2 className="mx-auto max-w-4xl font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.7rem]">
            Helping hospitals build comprehensive stroke programs across
            <span className="text-primary"> Africa and the Middle East </span>
            since 1999.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-white/70">
            From planning and procurement to installation, training, and long-term support,
            AbuFarha partners with hospitals to deliver sustainable stroke care solutions.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[0_18px_44px_-16px_rgba(220,38,38,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Schedule a Professional Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
