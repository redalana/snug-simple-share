import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { EXPERTISE, warehouseImg } from "./data";

export function Expertise() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
                <img
                  src={warehouseImg}
                  alt="AbuFarha engineering team"
                  className="h-full w-full min-h-[calc(520*var(--desktop-px-unit))] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-7 text-white">
                  <div className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.22em] text-white/70">
                    Engineering Excellence
                  </div>
                  <div className="mt-2 font-display text-2xl font-extrabold">
                    Deep expertise across every modality.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow index="05">Our Expertise</Eyebrow>
              <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
                Deep engineering across the full equipment lifecycle.
              </h2>
              <p className="mt-4 max-w-xl text-[calc(15*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                Nine disciplines, one integrated team — from first clinical consultation to lifetime
                technical support.
              </p>
            </Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-(--shadow-panel)">
              {EXPERTISE.map((e, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={e.title}
                    className={`border-b border-border last:border-b-0 transition-colors ${isOpen ? "bg-secondary/40" : ""}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${isOpen ? "bg-primary text-primary-foreground shadow-[0_8px_22px_-8px_var(--primary)]" : "bg-primary/10 text-primary"}`}
                        >
                          <e.icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span className="font-display text-[1.02rem] font-bold text-ink">
                          {e.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-400 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="min-h-0">
                        <div className="grid gap-5 px-6 pb-6 sm:grid-cols-[calc(140*var(--desktop-px-unit))_1fr]">
                          <div className="hidden overflow-hidden rounded-xl sm:block">
                            <img
                              src={e.thumb}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <p className="text-[calc(14*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                            {e.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
