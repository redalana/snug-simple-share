import { Link } from "@tanstack/react-router";
import { Eyebrow } from "../Eyebrow";
import { HERO_KPIS, heroImg, engImg } from "./data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="AbuFarha engineer inspecting an imaging system"
          className="h-full w-full object-cover opacity-70"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
      </div>
      <div className="relative mx-auto grid max-w-[100rem] items-center gap-10 px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 lg:min-h-[calc(420*var(--desktop-px-unit))] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:px-10 lg:pt-16 lg:pb-14">
        <div className="min-w-0 max-w-full lg:max-w-[620px]">
          <Eyebrow tone="light" index="01">About Us</Eyebrow>
          <h1
            className="mt-6 font-display font-extrabold tracking-[-0.02em] text-balance [overflow-wrap:break-word]"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 0.98,
              maxWidth: "min(100%, 620px)",
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
            className="mt-6 text-white/75 [overflow-wrap:break-word]"
            style={{
              maxWidth: "min(100%, 540px)",
              fontSize: "clamp(16px, 1.15vw, 18px)",
              lineHeight: 1.7,
            }}
          >
            AbuFarha Medical Supplies has been supplying, installing,
            commissioning and supporting medical equipment for hospitals across
            Africa and the Middle East since 1999 — combining biomedical
            engineering expertise with long-term healthcare partnership.
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
                className="flex min-w-0 flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" />
                <div className="mt-3 font-display text-2xl font-extrabold leading-none text-white">
                  {value}
                </div>
                <div className="mt-2 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase leading-tight tracking-wider text-white/55">
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
              className="h-[calc(560*var(--desktop-px-unit))] w-full object-cover"
              width={900}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
