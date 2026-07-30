import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { AfterSalesPage } from "@/components/site/AfterSalesPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

const TITLE = "After Sales Support | AbuFarha Medical Equipment";
const DESC =
  "24/7 after sales support from AbuFarha — preventive maintenance, emergency response, genuine spare parts, calibration, biomedical engineering and clinical training across the Middle East, Africa and Central Asia.";

export const Route = createFileRoute("/after-sales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.afterSales },
      { name: "twitter:image", content: OG_IMAGES.afterSales },
      { property: "og:url", content: SITE_URL + "/after-sales" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/after-sales" }],
  }),
  component: AfterSalesRoute,
});

function AfterSalesRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-[var(--header-h)]">
        <AfterSalesPage />
      </main>
      <Footer />
    </div>
  );
}
