import { motion } from "framer-motion";
import {
  ArrowRight,
  Radio,
  Signal,
  LineChart,
  Cog,
  Zap,
} from "lucide-react";
import { LIVE_STATUS, TONE_MAP, remoteImg } from "./data";

function FeatureCard({
  icon: Icon,
  title,
  desc,
  className = "",
  delay = 0,
}: {
  icon: typeof Radio;
  title: string;
  desc: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.2)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-primary/20 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div className="mt-5 font-display text-[1.1rem] font-bold text-foreground">
        {title}
      </div>
      <div className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
        {desc}
      </div>
    </motion.div>
  );
}

export function RemoteDiagnostics() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-[100rem] gap-16 px-6 lg:grid-cols-[55fr_45fr] lg:items-start lg:gap-20 lg:px-10">
        {/* LEFT — Image with parallax + glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative lg:sticky lg:top-24"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl shadow-[0_50px_100px_-40px_rgba(0,0,0,0.55)]">
            <motion.img
              src={remoteImg}
              alt="Biomedical engineer using a tablet beside an MRI scanner to remotely monitor equipment health"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1600}
              height={1408}
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />

            {/* Floating glass status card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:min-w-[280px] overflow-hidden rounded-2xl border border-white/25 bg-white/15 p-4 text-white shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Connected
                </div>
                <div className="ml-auto text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Live
                </div>
              </div>
              <div className="mt-2 text-[13px] font-medium text-white/90">
                24/7 Live Monitoring
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3 text-[11px] text-white/70">
                <span className="uppercase tracking-[0.18em]">Last Sync</span>
                <span className="font-semibold text-white">18 sec ago</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
            Proactive Support
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[3.25rem]">
            Every System.
            <br />
            Always Connected.
          </h2>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.75] text-muted-foreground">
            Our biomedical engineers monitor installed systems around the clock
            — detecting issues early and resolving them remotely before
            downtime reaches your hospital.
          </p>

          {/* Asymmetric feature grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <FeatureCard
              icon={Radio}
              title="Remote Diagnostics"
              desc="Real-time remote troubleshooting and issue detection across every connected system."
              className="sm:col-span-2 sm:p-7"
              delay={0}
            />
            <FeatureCard
              icon={LineChart}
              title="Predictive Monitoring"
              desc="Continuous health telemetry on every installed device."
              delay={0.08}
            />
            <FeatureCard
              icon={Cog}
              title="OEM Software Updates"
              desc="Manufacturer-approved updates and configuration support."
              delay={0.16}
            />
            <FeatureCard
              icon={Zap}
              title="Rapid Engineer Response"
              desc="Certified biomedical engineers available for critical support across the region."
              className="sm:col-span-2"
              delay={0.24}
            />
          </div>

          {/* Live Equipment Status — premium dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-border/70 bg-muted/40 px-6 py-4">
              <div className="flex items-center gap-2.5">
                <Signal className="h-4 w-4 text-emerald-500" strokeWidth={2} />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.22em] text-foreground">
                  Live Equipment Status
                </span>
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">
                Updated · just now
              </span>
            </div>
            <ul className="divide-y divide-border/60">
              {LIVE_STATUS.map(({ name, status, health, last, tone }) => {
                const c = TONE_MAP[tone];
                return (
                  <li
                    key={name}
                    className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-6 py-4 transition-colors hover:bg-muted/30 sm:grid-cols-[1.2fr_1.4fr_1fr]"
                  >
                    <div>
                      <div className="text-[14.5px] font-semibold text-foreground">
                        {name}
                      </div>
                      <div className="mt-0.5 text-[12px] text-muted-foreground">
                        {last}
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full ${c.bg} px-2.5 py-1 text-[11.5px] font-semibold ${c.text}`}
                      >
                        <span className="relative flex h-2 w-2">
                          <span
                            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${c.dot} opacity-60`}
                          />
                          <span
                            className={`relative inline-flex h-2 w-2 rounded-full ${c.dot}`}
                          />
                        </span>
                        {status}
                      </span>
                    </div>

                    <div className="col-span-2 flex items-center gap-3 sm:col-span-1 sm:justify-end">
                      {health !== null ? (
                        <>
                          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`h-full rounded-full ${c.bar}`}
                              style={{ width: `${health}%` }}
                            />
                          </div>
                          <span className="w-14 text-right text-[12.5px] font-semibold tabular-nums text-foreground">
                            {health}%
                          </span>
                        </>
                      ) : (
                        <span className="text-[12px] font-medium text-muted-foreground">
                          Maintenance window
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Secondary CTA */}
          <div className="mt-8">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13.5px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Our Support Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
