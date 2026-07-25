import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { FloatingQuoteButton } from "@/components/site/FloatingQuoteButton";
import { QuoteModal } from "@/components/site/QuoteModal";
import { CookieConsent } from "@/components/site/CookieConsent";
import { CompareBar } from "@/components/site/CompareBar";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import { COMPANY, COPY, ORGANIZATION_JSONLD } from "@/config/companyFacts";

function NotFoundComponent() {
  return <NotFoundPage />;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? "";
const GSC_TOKEN = (import.meta.env.VITE_GSC_VERIFICATION as string | undefined) ?? "";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#E53935" },
      { title: "AbuFarha Medical Equipment | Advanced Medical Technology Solutions" },
      {
        name: "description",
        content: COPY.metaDescription,
      },
      { name: "author", content: COMPANY.legalName },
      { property: "og:title", content: "AbuFarha Medical Equipment | Advanced Medical Technology" },
      {
        property: "og:description",
        content: COPY.ogDescription,
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY.shortName },
      { name: "twitter:card", content: "summary_large_image" },
      // Google Search Console — verification meta (rendered only when set).
      ...(GSC_TOKEN ? [{ name: "google-site-verification", content: GSC_TOKEN }] : []),
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
      // Google Analytics 4 — loaded only when VITE_GA_MEASUREMENT_ID is set.
      ...(GA_ID
        ? [
            {
              src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
              async: true,
            },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`,
            },
          ]
        : []),
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Editor-only: when the app is loaded inside the Lovable Preview iframe,
  // the host injects a top toolbar that can visually clip our fixed header's
  // second nav row. We expose the offset as a CSS variable
  // (--lovable-toolbar-offset). Defaults to 0px in styles.css so standalone
  // preview and production are pixel-identical; only the embedded editor
  // assigns a non-zero value at runtime.
  useEffect(() => {
    if (typeof window === "undefined") return;
    let embedded = false;
    try {
      embedded = window.self !== window.top;
    } catch {
      // Cross-origin access to window.top throws → we're embedded.
      embedded = true;
    }
    if (!embedded) return;
    const root = document.documentElement;
    root.setAttribute("data-lovable-embed", "true");
    // Lovable editor toolbar height. Kept as a single tunable constant here
    // rather than a hardcoded literal inside the header component.
    root.style.setProperty("--lovable-toolbar-offset", "44px");
    return () => {
      root.removeAttribute("data-lovable-embed");
      root.style.removeProperty("--lovable-toolbar-offset");
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        {/* Skip-to-content link — visible on keyboard focus only. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <QuoteModal />
        <FloatingQuoteButton />
        <WhatsAppFloat />
        <CompareBar />
        <CookieConsent />
        <Toaster />
      </MotionConfig>
    </QueryClientProvider>
  );
}
