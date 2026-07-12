import { Linkedin, Youtube, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const COLS = [
  {
    title: "Products",
    links: ["Cath Lab Systems", "MRI Scanners", "CT Scanners", "PET/CT Scanners", "X-Ray Systems", "View All Products"],
  },
  {
    title: "Services",
    links: ["Installation & Commissioning", "Biomedical Engineering", "Clinical Training", "Preventive Maintenance", "Spare Parts"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Mission", "Our Vision", "Leadership Team", "Careers"],
  },
  {
    title: "Support",
    links: ["After Sales Support", "Warranty", "Service Contracts", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Your trusted partner in advanced medical equipment and turnkey hospital solutions across
            Africa and the Middle East.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[Linkedin, Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_12px_24px_-10px_var(--primary)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              {col.title}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="inline-block transition-all duration-200 hover:translate-x-1 hover:text-primary"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-1.5"><Phone className="h-4 w-4 text-primary" /> +20 109 111 2200</span>
            <span className="flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" /> info@abufarhamedical.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Cairo, Egypt</span>
          </div>
          <p className="text-white/50">© {new Date().getFullYear()} AbuFarha Medical Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
