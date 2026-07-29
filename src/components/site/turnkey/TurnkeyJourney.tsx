import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PHASES } from "./data";

export function TurnkeyJourney() {
  return (
    <section id="journey" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_3.2fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.26em] text-primary">
              The Turnkey Journey <ArrowRight className="h-3 w-3" />
            </p>
            <h2 className="mt-4 font-display text-[calc(34*var(--desktop-px-unit))] font-extrabold leading-[1.05] sm:text-[calc(40*var(--desktop-px-unit))]">
              From Vision
              <br />
              To Performance
            </h2>
            <p className="mt-4 max-w-sm text-[calc(14*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
              Our proven process ensures every department is delivered on time, on budget, and to
              the highest clinical standards.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground"
            >
              View All Phases <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-3">
            {PHASES.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-100 ring-1 ring-black/5">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute -bottom-3 left-1/2 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-primary text-[calc(10*var(--desktop-px-unit))] font-bold text-white ring-4 ring-white">
                    {p.n}
                  </span>
                </div>
                <div className="mt-5 text-center">
                  <div className="font-display text-[calc(15*var(--desktop-px-unit))] font-bold text-foreground">
                    {p.title}
                  </div>
                  <p className="mt-1.5 text-[calc(12*var(--desktop-px-unit))] leading-snug text-muted-foreground">
                    {p.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
