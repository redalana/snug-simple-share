import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { TRUST, ctaImg } from "./data";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img src={ctaImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
      <div className="relative mx-auto max-w-[100rem] px-6 py-24 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow tone="light" index="13">Let's Talk</Eyebrow>
            <h2 className="mt-5 font-display text-[2.25rem] font-extrabold leading-[1.05] sm:text-[3rem]">
              Let's Build Better Healthcare <span className="text-primary">Together.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-white/70">
              We don't just sell equipment — we become your long-term healthcare
              engineering partner. From planning and installation to clinical
              training and lifetime technical support, AbuFarha stays with your
              hospital every step of the way.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact"
                className="inline-flex h-[calc(50*var(--desktop-px-unit))] items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-14px_var(--primary)] transition hover:-translate-y-0.5 hover:bg-primary-dark">
                <Phone className="h-4 w-4" /> Talk to an Engineer
              </Link>
              <Link to="/contact"
                className="inline-flex h-[calc(50*var(--desktop-px-unit))] items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Request Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {TRUST.map(t => (
              <div key={t.title} className="group rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-base font-extrabold">{t.title}</div>
                <p className="mt-1.5 text-[calc(12.5 * var(--desktop-px-unit))] leading-relaxed text-white/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
