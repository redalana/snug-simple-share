import { Link } from "@tanstack/react-router";
import { Home as HomeIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: string;
  backgroundImage?: string;
  lastUpdated?: string;
};

/**
 * Consistent breadcrumb + title hero used across all secondary/legal pages.
 * Reuses the site's design language (typography, container, primary accent,
 * radius) — do not restyle per page. Only content changes.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  backgroundImage,
  lastUpdated,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-8">
      <div className="mx-auto max-w-[87.5rem] px-6 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/" className="inline-flex items-center gap-1 hover:text-primary">
            <HomeIcon className="h-3.5 w-3.5" /> Home
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-medium text-primary">{breadcrumb}</span>
        </nav>

        <div
          className={cn(
            "relative overflow-hidden rounded-[calc(36*var(--desktop-px-unit))] bg-secondary/30",
          )}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="relative z-10 flex flex-col justify-center bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
              {eyebrow ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1.5 text-[calc(11*var(--desktop-px-unit))] font-bold uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {eyebrow}
                </div>
              ) : null}
              <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[2.75rem]">
                {title}
              </h1>
              {description ? (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[calc(17*var(--desktop-px-unit))]">
                  {description}
                </p>
              ) : null}
              {lastUpdated ? (
                <div className="mt-6 text-sm text-muted-foreground">
                  Last Updated: <span className="font-semibold text-primary">{lastUpdated}</span>
                </div>
              ) : null}
            </div>

            {backgroundImage ? (
              <div className="relative min-h-[calc(220*var(--desktop-px-unit))] overflow-hidden bg-secondary/50 lg:min-h-0">
                <img
                  src={backgroundImage}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white/45 to-transparent lg:block"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
