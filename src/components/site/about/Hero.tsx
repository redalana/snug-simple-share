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
      <div className="relative mx-auto grid min-h-[480px] max-w-[100rem] gap-10 px-6 pt-24 pb-20 lg:min-h-[460px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:pt-20 lg:pb-16">
        <div className="max-w-xl">
          <Eyebrow tone="light" index="01">About Us</Eyebrow>
          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] sm:text-[2.875rem]">
            Engineering Healthcare
            <br />
            Since 1999.
            <br />
            <span className="text-primary">Trusted Across Africa &amp; The Middle East.</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
            AbuFarha Medical Supplies has been supplying, installing,
            commissioning and supporting medical equipment for hospitals across
            Africa and the Middle East since 1999 — combining biomedical
            engineering expertise with long-term healthcare partnership.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-[50px] items-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Talk to an Engineer
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-[50px] items-center rounded-full border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Request Consultation
            </Link>
          </div>

          {/* KPI cards */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_KPIS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]"
              >
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-2xl font-extrabold text-white">{value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[36px] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
            <img
              src={engImg}
              alt="Engineer working on a Cath Lab system"
              className="h-[560px] w-full object-cover"
              width={900}
              height={560}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
