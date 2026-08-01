import { Link } from "@tanstack/react-router";
import { Eyebrow } from "../Eyebrow";
import {
  HERO_SECTION,
  HERO_GRID,
  HERO_MEDIA_FRAME,
  HERO_MEDIA_IMG,
  HeroBackdrop,
} from "../hero/heroShell";
import { HERO_KPIS, heroImg, engImg } from "./data";

export function Hero() {
  return (
    <section className={HERO_SECTION}>
      <HeroBackdrop src={heroImg} priority />
      <div className={`${HERO_GRID} items-center lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]`}>

        <div className="min-w-0 max-w-full lg:max-w-[600px]">
          <Eyebrow tone="light" index="01">
            About Us
          </Eyebrow>
          <h1
            className="mt-6 font-display font-extrabold tracking-[var(--tracking-heading)] text-balance [overflow-wrap:break-word]"
            style={{
              fontSize: "var(--fs-hero-title)",
              lineHeight: "var(--lh-hero-title)",
              maxWidth: "min(100%, 600px)",
            }}
          >
            <span className="inline-block">Engineering Healthcare</span>
            <br />
            <span className="inline-block">Since 1999.</span>
            <br />
            <span className="inline-block text-primary">
              Trusted Across Africa &amp; The Middle East.
            </span>
          </h1>
          <p
            className="mt-6 text-white/80 [overflow-wrap:break-word]"
            style={{
              maxWidth: "min(100%, 540px)",
              fontSize: "var(--fs-hero-lead)",
              lineHeight: "var(--lh-hero-lead)",
            }}
          >
            AbuFarha Medical Supplies has been supplying, installing, commissioning and supporting
            medical equipment for hospitals across Africa and the Middle East since 1999 — combining
            biomedical engineering expertise with long-term healthcare partnership.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark sm:h-[calc(50*var(--desktop-px-unit))] sm:px-7"
            >
              Talk to an Engineer
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:h-[calc(50*var(--desktop-px-unit))] sm:px-7"
            >
              Request Consultation
            </Link>
          </div>

          {/* KPI cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_KPIS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-w-0 flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-3.5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <div className="mt-3 min-w-0 font-display text-[clamp(0.95rem,1.1vw,1.2rem)] font-extrabold leading-[1.15] break-words hyphens-auto text-white">
                  {value}
                </div>
                <div className="mt-2 min-w-0 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase leading-tight tracking-wider break-words text-white/55">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[calc(36*var(--desktop-px-unit))] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[calc(28*var(--desktop-px-unit))] border border-white/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={engImg}
              alt="Engineer working on a Cath Lab system"
              className="h-[calc(484*var(--desktop-px-unit))] w-full object-cover"
              width={900}
              height={484}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
