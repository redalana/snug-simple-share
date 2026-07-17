import { Sparkles } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { BENTO } from "./data";

export function Bento() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="03">What Makes AbuFarha Different</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              An engineering company inside a medical distributor.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {BENTO.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.06} className={b.span}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl bg-ink text-white shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_var(--primary)]`}
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  loading="lazy"
                />
                {/* stronger dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-ink/30 via-transparent to-transparent" />
                {/* red glow on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/25" />
                <div className="relative flex h-full flex-col justify-end p-7 lg:p-8">
                  {b.featured && (
                    <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[calc(10*var(--desktop-px-unit))] font-bold uppercase tracking-wider text-white backdrop-blur">
                      <Sparkles className="h-3 w-3" /> Our Core
                    </div>
                  )}
                  <h3 className={`font-display font-extrabold leading-tight ${b.featured ? "text-2xl lg:text-[2rem]" : "text-xl lg:text-2xl"}`}>
                    {b.title}
                  </h3>
                  <p className={`mt-3 max-w-lg leading-relaxed text-white/85 ${b.featured ? "text-[calc(15*var(--desktop-px-unit))]" : "text-[calc(13.5*var(--desktop-px-unit))]"}`}>
                    {b.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
