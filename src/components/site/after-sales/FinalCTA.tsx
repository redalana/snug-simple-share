import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { ctaImg } from "./data";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt=""
          className="h-full w-full object-cover object-center opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[calc(140*var(--desktop-px-unit))]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[calc(120*var(--desktop-px-unit))]" />
      </div>
      <div className="relative mx-auto flex max-w-[100rem] flex-col items-start gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            24/7 Emergency Support
          </div>
          <h2 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[0.98] tracking-tight sm:text-[3.75rem] lg:text-[4.25rem]">
            When downtime is not
            <br />
            <span className="text-primary">an option</span>
            <span className="text-white">.</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-[1.7] text-white/80">
            A certified engineer is on call around the clock — from remote
            diagnostics to on-site emergency repair, wherever your hospital is.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[calc(13*var(--desktop-px-unit))] font-medium text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Certified biomedical engineers
            </div>
            <div className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Genuine OEM spare parts
            </div>
          </div>

        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[calc(280*var(--desktop-px-unit))]">
          <a
            href="tel:+96264026063"
            className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-primary px-6 py-5 text-left text-white shadow-[0_20px_60px_-18px_rgba(220,38,38,0.9)] transition-all hover:-translate-y-0.5"
          >
            <div>
              <div className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-white/80">
                Emergency Line
              </div>
              <div className="mt-0.5 font-display text-lg font-extrabold">
                +962 6 402 6063
              </div>
            </div>
            <Phone className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-12" />
          </a>
          <a
            href="https://wa.me/962799741318"
            className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-6 py-4 text-left text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
          >
            <div>
              <div className="text-[calc(10.5*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-emerald-300">
                WhatsApp
              </div>
              <div className="mt-0.5 text-[calc(14*var(--desktop-px-unit))] font-semibold">
                Chat with an engineer
              </div>
            </div>
            <MessageSquare className="h-5 w-5 shrink-0" />
          </a>
          <a
            href="#request"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-[calc(13*var(--desktop-px-unit))] font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            Submit Service Request
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
