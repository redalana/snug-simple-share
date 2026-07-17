import { motion } from "framer-motion";
import { PhoneCall, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16 lg:py-20 text-primary-foreground"
    >
      {/* premium ambient glows */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-black/20 blur-3xl" />
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit))), linear-gradient(to bottom, white calc(1*var(--desktop-px-unit)), transparent calc(1*var(--desktop-px-unit)))",
          backgroundSize: "calc(56*var(--desktop-px-unit)) calc(56*var(--desktop-px-unit))",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 text-white/15"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path d="M0 60h440l24-42 32 84 22-56 20 14h642" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-[100rem] flex-col items-center gap-8 px-6 lg:px-10 text-center lg:flex-row lg:justify-between lg:text-left"
      >
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.25rem] lg:leading-[1.08]">
            Let&apos;s Build Better Healthcare Together
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
            Talk to our experts about equipping your next department or complete
            medical technology project.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-[0_18px_40px_-16px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.6)]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" /> Talk to an Expert
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            <FileText className="h-4 w-4" /> Company Profile
          </a>
          <p className="mt-1 flex w-full items-center justify-center gap-2 text-[calc(13*var(--desktop-px-unit))] font-medium text-white/80 lg:justify-start">
            <ShieldCheck className="h-4 w-4" />
            Backed by a 1-year free warranty on every installation.
          </p>
        </div>

      </motion.div>
    </section>
  );
}

