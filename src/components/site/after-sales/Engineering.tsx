import {
  ShieldCheck,
  Cog,
  Users,
  ClipboardCheck,
  Award,
  Clock,
  Globe2,
} from "lucide-react";
import { engineeringImg } from "./data";

export function Engineering() {
  const features = [
    { icon: ShieldCheck, t: "OEM Certified Team", d: "Trained by Siemens, Philips, GE and Canon." },
    { icon: Cog, t: "Factory Procedures", d: "Every service follows original OEM specifications." },
    { icon: Users, t: "Clinical Support", d: "Hands-on training for radiographers and biomeds." },
    { icon: ClipboardCheck, t: "Full Warranty", d: "1-year coverage plus extended service contracts." },
  ];

  const badges = [
    { icon: Award, k: "100%", v: "OEM Certified" },
    { icon: Clock, k: "24/7", v: "Technical Support" },
    { icon: Users, k: "5", v: "OEM-Trained Engineers" },
    { icon: Globe2, k: "10+", v: "Countries Covered" },
  ];
  return (
    <section className="relative overflow-hidden bg-[#f6f4f0] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[100rem] gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-[0_50px_100px_-40px_rgba(0,0,0,0.35)]">
            <img
              src={engineeringImg}
              alt="AbuFarha biomedical engineering team servicing MRI"
              loading="lazy"
              className="h-full w-full object-cover"
              width={1600}
              height={1100}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              First-Time Fix Rate
            </div>
            <div className="mt-1 font-display text-4xl font-extrabold text-foreground">
              98%
            </div>
            <div className="text-[calc(12*var(--desktop-px-unit))] text-muted-foreground">
              Across MEA installations
            </div>
          </div>
        </div>
        <div>
          <div className="text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.28em] text-primary">
            Engineering Excellence
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[3.25rem]">
            Our engineers.
            <br />
            Your reliability.
          </h2>
          <p className="mt-5 max-w-lg text-[calc(16*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
            An in-house team of dedicated biomedical engineers — trained
            directly by OEMs, backed by a regional operations center, and
            trusted by leading hospitals since 1999.
          </p>

          {/* vertical feature list */}
          <div className="mt-8 space-y-5">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-[calc(15*var(--desktop-px-unit))] font-bold text-foreground">{t}</div>
                  <div className="mt-1 text-[calc(13.5*var(--desktop-px-unit))] leading-relaxed text-muted-foreground">
                    {d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* small stat badges */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map(({ icon: Icon, k, v }) => (
              <div key={v} className="rounded-xl border border-border bg-white px-3 py-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-primary" />
                <div className="mt-2 font-display text-lg font-extrabold text-foreground">{k}</div>
                <div className="text-[calc(10.5*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
