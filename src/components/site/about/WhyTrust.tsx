import { ShieldCheck, Star, TrendingUp } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { WHY } from "./data";

export function WhyTrust() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow align="center" index="10">
                Why Hospitals Trust AbuFarha
              </Eyebrow>
            </div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Trust built on engineering, not marketing.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {/* Featured card */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark p-8 text-primary-foreground shadow-[0_30px_70px_-30px_var(--primary)]">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[calc(10*var(--desktop-px-unit))] font-bold uppercase tracking-wider backdrop-blur">
                  <Star className="h-3 w-3" /> Our Foundation
                </div>
                <h3 className="mt-5 font-display text-[1.9rem] font-extrabold leading-tight">
                  Regional Experience Since 1999
                </h3>
                <p className="mt-4 text-[calc(14.5*var(--desktop-px-unit))] leading-relaxed text-white/85">
                  {WHY[0].desc}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-2 text-[calc(12*var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-white/85">
                <TrendingUp className="h-4 w-4" /> Proven since 1999
              </div>
            </div>
          </Reveal>
          {WHY.slice(1).map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} className="lg:col-span-2">
              <div className="group h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.22)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-[1.05rem] font-extrabold text-ink">
                  {w.title}
                </div>
                <p className="mt-2 text-[calc(13.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                  {w.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
