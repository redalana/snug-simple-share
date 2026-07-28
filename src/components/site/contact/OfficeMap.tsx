import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import { OFFICE, MAP_EMBED, MAP_LINK, DIRECTIONS_LINK } from "./data";

function OfficeRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.16em] text-muted-foreground [overflow-wrap:anywhere]">
          {label}
        </div>
        <div className="mt-0.5 text-[calc(14*var(--desktop-px-unit))] leading-relaxed text-foreground [overflow-wrap:anywhere]">
          {children}
        </div>
      </div>
    </li>
  );
}

export function OfficeMap() {
  return (
    <section className="bg-white py-[calc(120*var(--desktop-px-unit))]">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[calc(44*var(--desktop-px-unit))] border border-border/60 bg-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.35)]">
          <iframe
            title="AbuFarha Medical Supplies — Amman office"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[calc(560*var(--desktop-px-unit))] w-full border-0"
          />

          {/* Floating card */}
          <div className="pointer-events-none absolute inset-0 flex items-start">
            <div className="pointer-events-auto m-4 w-full max-w-[calc(300*var(--desktop-px-unit))] rounded-[calc(24*var(--desktop-px-unit))] border border-white/70 bg-white/95 p-5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.45),0_10px_25px_-10px_rgba(15,23,42,0.2)] backdrop-blur-md sm:m-6 sm:max-w-[30%] sm:p-6">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-xl font-black text-foreground">
                  Visit Our Office
                </h3>
                <div className="h-[calc(2*var(--desktop-px-unit))] w-8 rounded-full bg-primary" />
              </div>

              <ul className="mt-5 space-y-4 text-sm">
                <OfficeRow icon={MapPin} label="Address">
                  {OFFICE.address.split("\n").map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </OfficeRow>
                <OfficeRow icon={Phone} label="Phone">
                  <a href={`tel:${OFFICE.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {OFFICE.phone}
                  </a>
                </OfficeRow>
                <OfficeRow icon={Mail} label="Email">
                  <a href={`mailto:${OFFICE.email}`} className="break-all hover:text-primary">
                    {OFFICE.email}
                  </a>
                </OfficeRow>
                <OfficeRow icon={Clock} label="Working Hours">
                  {OFFICE.hours.split("\n").map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </OfficeRow>
              </ul>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 flex-1 flex-wrap items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_var(--primary)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Get Directions <Navigation className="h-4 w-4" />
                </a>
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 flex-1 flex-wrap items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
