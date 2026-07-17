import { Building } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { INDUSTRIES, cathlab } from "./data";

export function Industries() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="07">Healthcare Facilities We Support</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Purpose-built for every clinical environment.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Featured card */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)]">
              <img src={cathlab} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_30px_-8px_var(--primary)]">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-[1.75rem] font-extrabold leading-tight">{INDUSTRIES[0].title}</h3>
                <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-white/85">{INDUSTRIES[0].desc}</p>
              </div>
            </div>
          </Reveal>
          {INDUSTRIES.slice(1).map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.04}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.25)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-[1.05rem] font-extrabold text-ink">{i.title}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
