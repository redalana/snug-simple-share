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
    links: ["About Us", "Our Mission", "Our Vision", "Leadership Team", "Blog", "Careers"],
  },
  {
    title: "Support",
    links: ["After Sales Support", "Warranty", "Service Contracts", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white text-muted-foreground">
      <div className="mx-auto grid max-w-[100rem] gap-x-8 gap-y-10 px-6 lg:px-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Your trusted partner for supplying, installing, commissioning and
            supporting advanced medical equipment across Africa and the Middle East.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[Linkedin, Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-[0_12px_24px_-10px_var(--primary)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
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

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[100rem] flex-col items-start gap-4 px-6 lg:px-10 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink">
            <span className="flex items-center gap-1.5"><Phone className="h-4 w-4 text-primary" /> +20 109 111 2200</span>
            <span className="flex items-center gap-1.5"><Mail className="h-4 w-4 text-primary" /> info@abufarhamedical.com</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> Cairo, Egypt</span>
          </div>
          <p className="text-muted-foreground">© {new Date().getFullYear()} AbuFarha Medical Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
