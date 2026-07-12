import { PhoneCall, FileText, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 text-white/15"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path d="M0 60h440l24-42 32 84 22-56 20 14h642" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Let&apos;s Build Better Healthcare Together
          </h2>
          <p className="mt-3 max-w-xl text-white/85">
            Talk to our experts about your next department, project or turnkey hospital solution.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition-all hover:-translate-y-0.5"
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
        </div>
      </div>
    </section>
  );
}
