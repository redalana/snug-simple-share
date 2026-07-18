import { useRef } from "react";
import { Linkedin, Facebook, Phone, Smartphone, Mail, MapPin, Globe } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import cathLabBg from "@/assets/footer-cathlab.jpg.asset.json";
import vascularBg from "@/assets/footer-vascular.jpg.asset.json";

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
    links: ["About Us", "Turnkey Projects", "Brands", "Knowledge Center", "Contact"],
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
            "radial-gradient(calc(1100*var(--desktop-px-unit)) calc(620*var(--desktop-px-unit)) at 18% -12%, rgba(255,255,255,0.05), transparent 62%), radial-gradient(calc(900*var(--desktop-px-unit)) calc(560*var(--desktop-px-unit)) at 88% 8%, rgba(255,255,255,0.028), transparent 60%), linear-gradient(160deg, #181A1D 0%, #141619 42%, #111315 100%)",
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

      <div className="relative mx-auto max-w-[100rem] px-3 lg:px-10">
        {/* Top footer — 5 columns (compressed on mobile to avoid scroll) */}
        <div className="py-8 lg:py-14">
          <div className="grid grid-cols-[1.5fr_1fr_1fr_0.9fr_0.9fr] gap-x-2 gap-y-6 lg:grid-cols-[1.7fr_1fr_1.1fr_0.9fr_0.9fr] lg:gap-x-8 lg:gap-y-10">
            <div className="min-w-0">
              <Logo light />
              <p className="mt-3 max-w-sm text-[9px] leading-[1.55] text-white/50 lg:mt-4 lg:text-[calc(13.5*var(--desktop-px-unit))] lg:leading-[1.7]">
                Delivering advanced medical technologies, turnkey project delivery,
                biomedical engineering and long-term support for healthcare providers
                across Africa, the Middle East and emerging healthcare markets.
              </p>
              <div className="mt-3 flex items-center gap-3 lg:mt-5 lg:gap-6">
                {SOCIALS.map(({ label, Icon, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="group transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ ["--sc" as string]: color }}
                  >
                    <Icon className="h-3 w-3 text-white/70 transition-colors duration-300 group-hover:text-[var(--sc)] lg:h-[calc(19*var(--desktop-px-unit))] lg:w-[calc(19*var(--desktop-px-unit))]" />
                  </a>
                ))}
              </div>
            </div>

            {COLS.map((col) => (
              <div key={col.title} className="min-w-0">
                <h4 className="font-display text-[8px] font-semibold uppercase tracking-[0.12em] text-white/85 lg:text-[calc(12*var(--desktop-px-unit))] lg:tracking-[0.2em]">
                  {col.title}
                </h4>
                <ul className="mt-2 space-y-1.5 text-[9px] lg:mt-4 lg:space-y-2.5 lg:text-[calc(13.5*var(--desktop-px-unit))]">
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
        </div>



        {/* Premium divider + contact bar */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="py-4 lg:py-6">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5">

            {CONTACTS.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-[calc(18*var(--desktop-px-unit))] w-[calc(18*var(--desktop-px-unit))] shrink-0 text-white/45" strokeWidth={1.5} />
                  <div className="min-w-0">
                    <div className="text-[calc(10.5*var(--desktop-px-unit))] font-medium uppercase tracking-[0.16em] text-white/35">
                      {label}
                    </div>
                    <div className="mt-1 truncate text-[calc(13.5*var(--desktop-px-unit))] text-white/75">{value}</div>
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
        <div className="flex flex-col items-center justify-between gap-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:flex-row sm:pb-4 lg:py-5">

          <div className="text-[calc(12.5*var(--desktop-px-unit))] text-white/40">
            © 2026 AbuFarha Medical Equipment. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5 text-[calc(12.5*var(--desktop-px-unit))] sm:gap-7">
            {["Privacy Policy", "Terms & Conditions", "Sitemap"].map((l) => (
              <a
                key={l}
                href="#"
                className="inline-flex min-h-[44px] items-center text-white/40 transition-colors duration-200 hover:text-white/80 sm:min-h-0"
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
