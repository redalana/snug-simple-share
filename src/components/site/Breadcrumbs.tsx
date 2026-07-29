import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { absUrl } from "@/lib/seo";

export type Crumb = { label: string; to?: string; className?: string };

const HIDDEN_ON = new Set<string>(["/", ""]);

// Reasonable defaults so we don't have to wire crumbs into every route.
const LABEL_OVERRIDES: Record<string, string> = {
  products: "Products",
  brands: "Brands",
  categories: "Categories",
  about: "About",
  contact: "Contact",
  services: "Services",
  turnkey: "Turnkey Solutions",
  "after-sales": "After Sales",
  projects: "Projects & Experience",
  blog: "Knowledge Center",
  "privacy-policy": "Privacy Policy",
  terms: "Terms & Conditions",
  faqs: "FAQs",
  sitemap: "Sitemap",
  "thank-you": "Thank You",
  compare: "Compare Products",
  "hospital-readiness-assessment": "Hospital Readiness Assessment",
  programs: "Programs",
  "stroke-care": "Stroke Care Program",
};

function humanize(seg: string) {
  return LABEL_OVERRIDES[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildFromPath(pathname: string, custom?: Crumb[]): Crumb[] {
  if (custom && custom.length) return custom;
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: Crumb[] = [];
  let acc = "";
  for (let i = 0; i < parts.length; i++) {
    acc += "/" + parts[i];
    crumbs.push({
      label: humanize(decodeURIComponent(parts[i])),
      to: i === parts.length - 1 ? undefined : acc,
    });
  }
  return crumbs;
}

export function Breadcrumbs({
  items,
  className = "",
  variant = "bar",
}: {
  items?: Crumb[];
  className?: string;
  /**
   * "bar" — the full-width bar used on standalone pages.
   * "inline" — bare inline trail used inside page heroes (no chrome),
   * matching the markup previously duplicated across pages.
   */
  variant?: "bar" | "inline";
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (HIDDEN_ON.has(pathname)) return null;

  const crumbs = buildFromPath(pathname, items);
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        ...(c.to ? { item: absUrl(c.to) } : {}),
      })),
    ],
  };

  if (variant === "inline") {
    const lastIndex = crumbs.length - 1;
    return (
      <nav aria-label="Breadcrumb" className={className}>
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        {crumbs.map((c, i) => (
          <span key={i} className="contents">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
            {c.to ? (
              <Link to={c.to} className="hover:text-primary">
                {c.label}
              </Link>
            ) : (
              <span
                className={c.className ?? "text-foreground"}
                {...(i === lastIndex ? { "aria-current": "page" as const } : {})}
              >
                {c.label}
              </span>
            )}
          </span>
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </nav>
    );
  }


  return (
    <nav
      aria-label="Breadcrumb"
      className={`w-full border-b border-border/60 bg-secondary/40 ${className}`}
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-xs sm:px-6 sm:text-[13px]">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden />
            {c.to ? (
              <Link
                to={c.to}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-foreground">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </nav>
  );
}
