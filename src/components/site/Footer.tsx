import { Linkedin, Facebook, Phone, Smartphone, Mail, MapPin, Globe } from "lucide-react";
import { Logo } from "./Logo";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.04 2.5A9.5 9.5 0 0 0 3.9 16.86L3 21.5l4.77-.88A9.5 9.5 0 1 0 12.04 2.5Zm0 1.7a7.8 7.8 0 0 1 5.5 13.3 7.8 7.8 0 0 1-9.34 1.24l-.34-.2-2.83.52.53-2.76-.22-.35A7.8 7.8 0 0 1 12.04 4.2Zm-2.5 3.4c-.2 0-.5.08-.77.37-.26.29-1 .98-1 2.4s1.03 2.78 1.17 2.97c.15.2 2 3.05 4.85 4.16 2.36.93 2.84.75 3.36.7.51-.05 1.66-.68 1.9-1.33.23-.66.23-1.22.16-1.33-.07-.11-.26-.18-.55-.32-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.14-.19.29-.74.94-.9 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.44.12-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.55Z"
        fill="currentColor"
      />
    </svg>
  );
}

const COLS = [
  {
    title: "Products",
    links: [
      "Cath Lab Systems",
      "MRI Systems",
      "CT Scanners",
      "PET/CT",
      "C-Arms",
      "X-Ray Systems",
      "Mammography",
      "View All Products",
    ],
  },
  {
    title: "Services",
    links: [
      "Installation & Commissioning",
      "Biomedical Engineering",
      "Clinical Training",
      "Preventive Maintenance",
      "Spare Parts",
      "Technical Support",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Turnkey Projects", "Brands", "Blog", "Contact"],
  },
  {
    title: "Support",
    links: ["Warranty", "After Sales", "Service Contracts", "FAQs"],
  },
];

const SOCIALS = [
  { label: "Facebook", Icon: Facebook, color: "#1877F2" },
  { label: "LinkedIn", Icon: Linkedin, color: "#0A66C2" },
  { label: "WhatsApp", Icon: WhatsAppIcon, color: "#25D366" },
];

const CONTACTS = [
  { Icon: Phone, label: "Landline", value: "+962 6 4026063", href: "tel:+96264026063" },
  { Icon: Smartphone, label: "WhatsApp & Mobile", value: "+962 79 9741318", href: "tel:+962799741318" },
  { Icon: MapPin, label: "Location", value: "Amman, Jordan" },
  { Icon: Mail, label: "Email", value: "info@abufarhamedical.com", href: "mailto:info@abufarhamedical.com" },
  { Icon: Globe, label: "Website", value: "www.abufarhamedical.com", href: "https://www.abufarhamedical.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111315] text-white/70">
      <style>{`
        @keyframes vascularPulse {
          0%, 100% { opacity: 0.04; }
          50% { opacity: 0.06; }
        }
      `}</style>

      {/* Depth gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 12% -10%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(900px 500px at 100% 110%, rgba(180,20,30,0.10), transparent 55%), linear-gradient(180deg, #16181b 0%, #111315 55%, #0d0f10 100%)",
        }}
      />

      {/* LEFT — blurred cath lab silhouette */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -left-16 bottom-0 h-[420px] w-[420px]"
        style={{ opacity: 0.03, filter: "blur(14px)" }}
      >
        <g fill="none" stroke="#ffffff" strokeWidth="6">
          <rect x="60" y="330" width="220" height="18" rx="6" />
          <path d="M120 330 L120 120 Q120 90 150 90 L250 90" />
          <circle cx="270" cy="150" r="70" />
          <circle cx="270" cy="150" r="42" />
          <path d="M270 300 L270 348" />
          <rect x="200" y="300" width="140" height="14" rx="6" />
        </g>
      </svg>

      {/* RIGHT — neurovascular arterial tree */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 400"
        className="pointer-events-none absolute right-0 top-0 h-full w-[360px]"
        style={{
          opacity: 0.04,
          filter: "blur(1.5px) drop-shadow(0 0 12px rgba(180,20,30,0.6))",
          animation: "vascularPulse 9s ease-in-out infinite",
        }}
      >
        <g fill="none" stroke="#b4141e" strokeLinecap="round">
          <path d="M150 400 L150 240" strokeWidth="5" />
          <path d="M150 240 C150 200 110 190 95 150 C85 125 90 100 70 80" strokeWidth="3.5" />
          <path d="M150 240 C150 200 190 190 205 150 C215 125 210 100 230 80" strokeWidth="3.5" />
          <path d="M95 150 C80 140 60 145 48 125" strokeWidth="2" />
          <path d="M95 150 C88 130 70 120 66 96" strokeWidth="2" />
          <path d="M205 150 C220 140 240 145 252 125" strokeWidth="2" />
          <path d="M205 150 C212 130 230 120 234 96" strokeWidth="2" />
          <path d="M150 240 C150 215 140 205 130 185" strokeWidth="2.4" />
          <path d="M150 240 C150 215 160 205 170 185" strokeWidth="2.4" />
          <path d="M70 80 C60 66 62 52 50 44" strokeWidth="1.4" />
          <path d="M230 80 C240 66 238 52 250 44" strokeWidth="1.4" />
          <path d="M66 96 C56 88 44 90 40 78" strokeWidth="1.4" />
          <path d="M234 96 C244 88 256 90 260 78" strokeWidth="1.4" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Top footer — 5 columns */}
        <div className="grid gap-x-8 gap-y-12 py-16 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.1fr_0.9fr_0.9fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Delivering advanced medical technologies, turnkey hospital solutions,
              biomedical engineering and long-term support for healthcare providers
              across Africa and the Middle East.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map(({ label, Icon, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ ["--sc" as string]: color }}
                >
                  <Icon className="h-[18px] w-[18px] text-white/75 transition-colors duration-300 group-hover:text-[var(--sc)]" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white/90">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="inline-block text-white/55 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="border-t border-white/10 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CONTACTS.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.6} />
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-sm text-white/80">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="transition-opacity hover:opacity-80">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          © 2026 AbuFarha Medical Equipment. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
