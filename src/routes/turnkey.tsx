import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TurnkeyPage } from "@/components/site/TurnkeyPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

const TITLE = "Turnkey Healthcare Solutions | AbuFarha Medical Equipment";
const DESC =
  "AbuFarha delivers complete turnkey hospital projects — planning, equipment supply, installation, commissioning, clinical training and long-term support across the Middle East, Africa and Central Asia.";

export const Route = createFileRoute("/turnkey")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.turnkey },
      { name: "twitter:image", content: OG_IMAGES.turnkey },
      { property: "og:url", content: SITE_URL + "/turnkey" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/turnkey" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: TITLE,
              description: DESC,
              url: SITE_URL + "/turnkey",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Turnkey",
                  item: SITE_URL + "/turnkey",
                },
              ],
            },
            {
              "@type": "Organization",
              name: "AbuFarha Medical Equipment",
              url: SITE_URL + "/",
              areaServed: [
                "Jordan",
                "Yemen",
                "Syria",
                "Iraq",
                "Libya",
                "Somaliland",
                "Somalia",
                "Egypt",
                "Uzbekistan",
                "Bangladesh",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: TurnkeyRoute,
});

function TurnkeyRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[calc(96*var(--desktop-px-unit))]">
        <TurnkeyPage />
      </main>
      <Footer />
    </div>
  );
}
