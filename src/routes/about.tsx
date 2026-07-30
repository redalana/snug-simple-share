import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AboutPage } from "@/components/site/AboutPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";
import { FOUNDER_JSONLD } from "@/config/companyFacts";

const TITLE = "About AbuFarha | Medical Equipment Engineering Since 1999";
const DESC =
  "AbuFarha delivers medical imaging, biomedical engineering, installation, commissioning, clinical training and long-term support across Africa and the Middle East since 1999.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.about },
      { name: "twitter:image", content: OG_IMAGES.about },
      { property: "og:url", content: SITE_URL + "/about" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FOUNDER_JSONLD) }],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}
