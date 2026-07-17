import {
  ArrowUpRight,
  Clock,
  Zap,
  CheckCircle2,
  Phone,
  MessageSquare,
} from "lucide-react";
import { CONTACT_CHANNELS, REASONS } from "./data";

export function SupportCenterPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink via-[#0f131c] to-ink p-7 text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)] lg:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 text-[calc(11*var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-white/60">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Support Center
        </div>
        <div className="mt-3 font-display text-2xl font-extrabold">
          We&apos;re here 24/7.
        </div>
        <p className="mt-2 text-[calc(13*var(--desktop-px-unit))] leading-relaxed text-white/60">
          Reach an engineer instantly through any channel below.
        </p>

        {/* Contact channels */}
        <div className="mt-6 space-y-3">
          {CONTACT_CHANNELS.map(({ icon: Icon, label, value, href, accent }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ${accent}`}>
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[calc(10.5 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {label}
                </div>
                <div className="truncate text-[calc(13.5 * var(--desktop-px-unit))] font-semibold text-white">
                  {value}
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>

        {/* Hours + response */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center gap-1.5 text-[calc(10.5 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Clock className="h-3 w-3" /> Support Hours
            </div>
            <div className="mt-1.5 text-[calc(14*var(--desktop-px-unit))] font-bold text-white">24 / 7</div>
            <div className="text-[calc(11*var(--desktop-px-unit))] text-white/50">Year-round coverage</div>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
            <div className="flex items-center gap-1.5 text-[calc(10.5 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Zap className="h-3 w-3" /> Avg Response
            </div>
            <div className="mt-1.5 text-[calc(14*var(--desktop-px-unit))] font-bold text-white">&lt; 4 hrs</div>
            <div className="text-[calc(11*var(--desktop-px-unit))] text-white/50">Regional SLA</div>
          </div>
        </div>

        {/* Why hospitals contact us */}
        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <div className="text-[calc(10.5 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-white/50">
            Why Hospitals Contact Us
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {REASONS.map((r) => (
              <li key={r} className="flex items-center gap-2 text-[calc(13*var(--desktop-px-unit))] text-white/80">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom emergency card */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[calc(10.5 * var(--desktop-px-unit))] font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              24/7 Technical Support
            </div>
            <div className="mt-3 font-display text-xl font-extrabold text-white">
              Need immediate help?
            </div>
            <div className="mt-1 text-[calc(13*var(--desktop-px-unit))] text-white/70">
              Call our engineer now — always on standby.
            </div>
            <div className="mt-5 space-y-2.5">
              <a
                href="tel:+962799741318"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-[calc(14*var(--desktop-px-unit))] font-bold text-white shadow-[0_18px_40px_-16px_rgba(220,38,38,0.9)] transition-all hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" /> Call +962 79 974 1318
              </a>
              <a
                href="https://wa.me/962799741318"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 text-[calc(13.5 * var(--desktop-px-unit))] font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-emerald-500/20"
              >
                <MessageSquare className="h-4 w-4" /> WhatsApp Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
