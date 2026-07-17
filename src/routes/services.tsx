import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ServicesPage } from "@/components/site/ServicesPage";
import { OG_IMAGES } from "@/lib/seo";

const TITLE = "Medical Equipment Services | AbuFarha Medical Equipment";
const DESC =
  "OEM-certified installation, preventive & corrective maintenance, calibration, upgrades and 24/7 support for imaging, cath lab, ultrasound and patient monitoring systems across the Middle East, Africa and Central Asia.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.services },
      { name: "twitter:image", content: OG_IMAGES.services },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesRoute,
});

function ServicesRoute() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[112px]">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}
