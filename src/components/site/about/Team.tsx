import { BadgeCheck } from "lucide-react";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "./Reveal";
import { TEAM_ROLES, TEAM_BADGES, teamImg } from "./data";

export function Team() {
  return (
    <section className="bg-secondary/50 py-24 lg:py-28">
      <div className="mx-auto max-w-[100rem] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)]">
              <img src={teamImg} alt="AbuFarha engineering team" className="h-full w-full min-h-[600px] object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-8 text-white">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Our Engineering Team</div>
                <div className="mt-2 font-display text-[1.6rem] font-extrabold">Certified engineers, based regionally.</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TEAM_BADGES.map(b => (
                    <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <BadgeCheck className="h-3 w-3 text-primary" /> {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow index="09">Our Engineering Team</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
              People who install it, train on it and stand behind it.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              AbuFarha's people are the reason hospitals stay with us long after handover.
              Biomedical engineers, application specialists, clinical trainers and healthcare
              consultants work as one multi-disciplinary team — collaborating with doctors,
              nurses and biomedical departments on every project.
            </p>

            <div className="mt-8 space-y-3">
              {TEAM_ROLES.map(r => (
                <div key={r.title} className="group flex gap-4 rounded-2xl border border-border bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_20px_36px_-20px_rgba(15,23,42,0.28)]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink">{r.title}</div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
