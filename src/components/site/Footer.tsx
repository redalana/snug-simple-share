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

      {/* LAYER 2 — LEFT: cinematic Cath Lab room, blended into darkness */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[62%]"
        style={{
          backgroundImage: `url(${cathLabBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
          opacity: 0.16,
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        }}
      />

      {/* LAYER 3 — RIGHT: cinematic crimson vascular network, softly breathing */}
      <div
        ref={vesselsRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[52%]"
        style={{
          backgroundImage: `url(${vascularBg.url})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.5,
          mixBlendMode: "screen",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)",
        }}
      />


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
        <div className="grid gap-x-10 gap-y-10 py-14 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.1fr_0.9fr_0.9fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.7] text-white/50">
              Delivering advanced medical technologies, turnkey project delivery,
              biomedical engineering and long-term support for healthcare providers
              across Africa, the Middle East and emerging healthcare markets.
            </p>
            <div className="mt-5 flex items-center gap-6">
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
              <ul className="mt-4 space-y-2.5 text-[13.5px]">
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
        <div className="py-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CONTACTS.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-white/45" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <div className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-white/35">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-[13.5px] text-white/75">{value}</div>
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
        <div className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">

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
