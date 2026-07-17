import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { PARTNERS } from "./data";

export function Partners() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center"><Eyebrow align="center" index="08">Trusted Global Partners</Eyebrow></div>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              Authorized partnerships with the world's leading OEMs.
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <a href={p.href}
                className="group flex h-32 items-center justify-center rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.2)]">
                <span className="font-display text-[18px] font-extrabold tracking-tight text-[oklch(0.55_0_0)] transition-all duration-300 group-hover:scale-105"
                  style={{ color: undefined }}>
                  <span className="block text-current transition-colors duration-300 group-hover:text-[var(--brand)]" style={{ ["--brand" as string]: p.color }}>
                    {p.name}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/brands" className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground">
            View All Brands <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
