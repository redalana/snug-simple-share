import { useRef } from "react";
import { Linkedin, Facebook, Phone, Smartphone, Mail, MapPin, Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Logo } from "./Logo";
import cathLabBg from "@/assets/footer-cathlab.jpg.asset.json";
import vascularBg from "@/assets/footer-vascular.jpg.asset.json";

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
  const vesselsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = vesselsRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Very soft breathing glow on the vascular network — almost imperceptible.
    const tween = gsap.fromTo(
      el,
      { opacity: 0.4 },
      { opacity: 0.6, duration: 5.5, ease: "sine.inOut", yoyo: true, repeat: -1 },
    );
    return () => tween.kill();
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#111315] text-white/70">


      {/* LAYER 1 — deep charcoal gradient + soft radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 18% -12%, rgba(255,255,255,0.05), transparent 62%), radial-gradient(900px 560px at 88% 8%, rgba(255,255,255,0.028), transparent 60%), linear-gradient(160deg, #181A1D 0%, #141619 42%, #111315 100%)",
        }}
      />

      {/* CENTER — very soft light beam for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 120% at 50% -20%, rgba(255,255,255,0.04), transparent 60%)",
        }}
      />

      {/* LAYER 2 — LEFT: oversized cath lab blueprint, scaled 170%, cropped, ~2.5% opacity */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -left-[24%] top-1/2 h-[190%] w-auto -translate-y-1/2"
        style={{ opacity: 0.025 }}
      >
        <g fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">

          {/* ceiling rail */}
          <line x1="60" y1="70" x2="520" y2="70" />
          <line x1="60" y1="80" x2="520" y2="80" />
          {/* C-arm suspension */}
          <path d="M300 80 L300 150" />
          <path d="M300 150 C300 150 210 150 190 250 C170 350 250 420 300 420" />
          {/* detector head */}
          <rect x="150" y="215" width="70" height="70" rx="8" />
          <rect x="162" y="227" width="46" height="46" rx="4" />
          {/* source head */}
          <circle cx="300" cy="420" r="46" />
          <circle cx="300" cy="420" r="26" />
          <circle cx="300" cy="420" r="8" />
          {/* patient table */}
          <rect x="120" y="470" width="360" height="16" rx="6" />
          <path d="M300 486 L300 560" />
          <rect x="250" y="560" width="100" height="18" rx="6" />
          {/* measurement / dimension ticks */}
          <path d="M60 96 L60 108 M520 96 L520 108" />
          <line x1="60" y1="102" x2="520" y2="102" strokeDasharray="4 8" />
          {/* radial protractor around source */}
          <circle cx="300" cy="420" r="74" strokeDasharray="2 10" />
          {/* console outline (right, mostly cropped) */}
          <rect x="470" y="360" width="120" height="150" rx="10" />
          <line x1="470" y1="400" x2="590" y2="400" />
          <circle cx="500" cy="440" r="10" />
          <circle cx="540" cy="440" r="10" />
        </g>
      </svg>

      {/* LAYER 3 — RIGHT: delicate neurovascular network, dark crimson, breathing */}
      <svg
        ref={vesselsRef}
        aria-hidden="true"
        viewBox="0 0 360 700"
        preserveAspectRatio="xMaxYMid slice"
        className="pointer-events-none absolute right-0 top-0 h-full w-[42%]"
        style={{
          opacity: 0.03,
          maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)",
        }}
      >
        <g fill="none" stroke="#c1121f" strokeLinecap="round">
          <path d="M360 350 L250 350" strokeWidth="2.2" />
          <path d="M250 350 C210 350 200 300 160 280 C130 265 120 230 90 215" strokeWidth="1.6" />
          <path d="M250 350 C210 350 200 400 160 420 C130 435 120 470 90 485" strokeWidth="1.6" />
          <path d="M250 350 C230 350 224 330 210 315" strokeWidth="1.3" />
          <path d="M250 350 C230 350 224 370 210 385" strokeWidth="1.3" />
          <path d="M160 280 C140 268 118 272 100 250" strokeWidth="0.9" />
          <path d="M160 280 C150 258 128 250 122 224" strokeWidth="0.9" />
          <path d="M160 420 C140 432 118 428 100 450" strokeWidth="0.9" />
          <path d="M160 420 C150 442 128 450 122 476" strokeWidth="0.9" />
          <path d="M90 215 C78 200 80 182 66 172" strokeWidth="0.7" />
          <path d="M90 485 C78 500 80 518 66 528" strokeWidth="0.7" />
          <path d="M122 224 C110 214 96 216 90 202" strokeWidth="0.6" />
          <path d="M122 476 C110 486 96 484 90 498" strokeWidth="0.6" />
          <path d="M210 315 C198 306 186 308 178 296" strokeWidth="0.6" />
          <path d="M210 385 C198 394 186 392 178 404" strokeWidth="0.6" />
          <path d="M300 350 C280 350 274 322 258 306" strokeWidth="1" />
          <path d="M300 350 C280 350 274 378 258 394" strokeWidth="1" />
        </g>
      </svg>

      {/* LAYER 4 — film grain + vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: 0.05,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[100rem] px-6 lg:px-10">
        {/* Top footer — 5 columns */}
        <div className="grid gap-x-10 gap-y-14 py-20 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.1fr_0.9fr_0.9fr]">
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-[13.5px] leading-[1.75] text-white/50">
              Delivering advanced medical technologies, turnkey project delivery,
              biomedical engineering and long-term support for healthcare providers
              across Africa, the Middle East and emerging healthcare markets.
            </p>
            <div className="mt-8 flex items-center gap-6">
              {SOCIALS.map(({ label, Icon, color }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ ["--sc" as string]: color }}
                >
                  <Icon className="h-[19px] w-[19px] text-white/70 transition-colors duration-300 group-hover:text-[var(--sc)]" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-white/85">
                {col.title}
              </h4>
              <ul className="mt-6 space-y-3.5 text-[13.5px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="inline-block text-white/50 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Premium divider + contact bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {CONTACTS.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-3.5">
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-white/45" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
                      {label}
                    </div>
                    <div className="mt-1.5 truncate text-[13.5px] text-white/75">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="transition-colors hover:[&_*]:text-white/90">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="text-[12.5px] text-white/40">
            © 2026 AbuFarha Medical Equipment. All Rights Reserved.
          </div>
          <div className="flex items-center gap-7 text-[12.5px]">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white/40 transition-colors duration-200 hover:text-white/80"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
