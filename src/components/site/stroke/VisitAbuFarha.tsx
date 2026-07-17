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

type Card = {
  Icon: LucideIcon;
  title: string;
  copy: string;
};

const CARDS: Card[] = [
  {
    Icon: Stethoscope,
    title: "Meet Stroke Physicians",
    copy: "Meet experienced stroke specialists and discuss real clinical workflows.",
  },
  {
    Icon: Wrench,
    title: "Meet Biomedical Engineering Team",
    copy: "Learn how our engineers install, maintain, and support advanced medical technologies.",
  },
  {
    Icon: Building2,
    title: "Visit AbuFarha Headquarters",
    copy: "Discover our company, facilities, and healthcare project capabilities.",
  },
  {
    Icon: FlaskConical,
    title: "Explore Engineering Laboratories",
    copy: "See testing, quality assurance, and biomedical engineering operations.",
  },
  {
    Icon: Package,
    title: "Tour Medical Equipment Warehouse",
    copy: "Explore equipment preparation, logistics, and delivery processes.",
  },
  {
    Icon: Brain,
    title: "Observe Comprehensive Stroke Workflows",
    copy: "Understand how technology integrates with multidisciplinary stroke care.",
  },
  {
    Icon: Hospital,
    title: "Visit Partner Hospitals",
    copy: "Experience real clinical environments using our technologies.",
  },
  {
    Icon: Handshake,
    title: "Exchange Knowledge with Our Leadership Team",
    copy: "Discuss strategy, implementation, and long-term healthcare partnerships.",
  },
];

// Subtle medical sky-blue accent — complements primary red without replacing it.
const ACCENT = "#38BDF8";

export function VisitAbuFarha() {
  return (
    <>
      <section
        id="visit-abufarha"
        className="relative overflow-hidden bg-gradient-to-b from-white to-secondary/40 py-16 lg:py-24"
      >
        <div className="relative mx-auto max-w-[94rem] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow index="01" align="center">
                Visit AbuFarha
              </Eyebrow>
            </div>
            <h2 className="mt-8 font-display text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[2.75rem] lg:text-[3rem]">
              Experience Comprehensive Stroke Programs
              <span className="mt-2 block text-primary">Before You Invest.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.75] text-muted-foreground sm:text-[1.05rem]">
              We invite healthcare leaders, physicians, and biomedical engineers to experience
              firsthand how comprehensive stroke programs are planned, engineered, implemented,
              and supported — before making one of their hospital&apos;s most important
              technology investments.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {CARDS.map(({ Icon, title, copy }) => (
              <div
                key={title}
                className="group relative flex flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_60px_-30px_rgba(15,23,42,0.35)]"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
                  style={{
                    backgroundColor: `${ACCENT}1A`,
                    color: ACCENT,
                  }}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-[1.15rem] font-bold leading-tight tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>
            ))}
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
