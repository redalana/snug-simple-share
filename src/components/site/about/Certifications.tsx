import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { CERTS } from "./data";

export function Certifications() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-20">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="11">Certifications &amp; Standards</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Certified, audited and manufacturer-aligned.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10 transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-[1.05rem] font-extrabold text-ink">{c.title}</div>
                  <div className="mt-0.5 text-[calc(12 * var(--desktop-px-unit))] font-semibold uppercase tracking-wider text-primary">{c.sub}</div>
                  <p className="mt-2 text-[calc(13 * var(--desktop-px-unit))] leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
