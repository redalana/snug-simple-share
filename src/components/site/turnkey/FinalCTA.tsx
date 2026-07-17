import { ArrowRight, Check } from "lucide-react";
import { beyondCath } from "./data";

export function FinalCTA() {
  return (
    <section className="bg-white pb-16 pt-4 lg:pb-24">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#111315] p-10 text-white lg:p-14">
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <img src={beyondCath} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/85 to-[#111315]/40" />
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[calc(32*var(--desktop-px-unit))] font-extrabold leading-[1.05] sm:text-[calc(42*var(--desktop-px-unit))]">
                Ready to Build Your<br />
                <span className="text-primary">Next Department?</span>
              </h2>
              <p className="mt-4 max-w-md text-[calc(14*var(--desktop-px-unit))] text-white/70">
                Let's discuss your project and create a solution that exceeds
                your expectations.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-transparent px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Expert Engineering Team",
                "Global Supply Chain",
                "End-to-End Project Management",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-[calc(14*var(--desktop-px-unit))] font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-white/25 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
