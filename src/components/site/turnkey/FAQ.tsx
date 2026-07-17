import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS, abufarhaHq } from "./data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-20 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-12 px-6 lg:grid-cols-[1fr_1.4fr_1fr] lg:items-start lg:gap-14 lg:px-10">
        <div>
          <p className="text-[calc(11 * var(--desktop-px-unit))] font-bold uppercase tracking-[0.26em] text-primary">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-display text-[calc(34 * var(--desktop-px-unit))] font-extrabold leading-[1.05] sm:text-[calc(40 * var(--desktop-px-unit))]">
            Everything You Need<br />To Know
          </h2>
        </div>

        <div className="divide-y divide-black/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-[calc(15 * var(--desktop-px-unit))] font-semibold text-foreground">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-foreground">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-12 text-[calc(13.5 * var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5">
          <img src={abufarhaHq} alt="AbuFarha support engineer" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
