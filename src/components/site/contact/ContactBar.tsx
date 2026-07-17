import { Phone, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ContactBar() {
  const items = [
    {
      icon: Phone,
      title: "Sales",
      lines: ["+962 6 4026063", "sales@abufarhamedical.com"],
      href: "tel:+96264026063",
      color: "bg-primary",
    },
    {
      icon: Headphones,
      title: "Support",
      lines: ["+962 79 974 1318", "support@abufarhamedical.com"],
      href: "tel:+962799741318",
      color: "bg-primary",
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      lines: ["+962 79 974 1318", "Chat with us on WhatsApp"],
      href: "https://wa.me/962799741318",
      color: "bg-[#25D366]",
    },
  ];
  return (
    <section className="relative -mt-12 pb-2">
      <div className="mx-auto w-full max-w-[87.5rem] px-6">
        <div className="grid grid-cols-1 gap-3 rounded-2xl border border-border/70 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)] sm:grid-cols-3 sm:gap-4 sm:p-9">
          {items.map(({ icon: Icon, title, lines, href, color }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={`${title}: ${lines[0]}`}
              className="group flex h-full items-center gap-4 rounded-xl p-7 transition-all duration-200 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span
                className={cn(
                  "grid h-14 w-14 shrink-0 place-items-center rounded-full text-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.4)] transition-transform duration-200 ease-out group-hover:scale-105",
                  color,
                )}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <div className="text-[calc(15 * var(--desktop-px-unit))] font-bold text-foreground">{title}</div>
                <div className="mt-0.5 truncate text-sm text-muted-foreground">
                  {lines[0]}
                </div>
                <div className="truncate text-[calc(13 * var(--desktop-px-unit))] text-muted-foreground/80">
                  {lines[1]}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
