import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/ct-scanners")({
  head: () => ({
    meta: [
      { title: "CT Scanners | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Multi-slice CT scanners from Canon Medical, GE HealthCare, Siemens Healthineers and Philips — supplied, installed, commissioned and serviced by AbuFarha's biomedical engineering team.",
      },
      { property: "og:title", content: "CT Scanners | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Multi-slice CT systems for emergency, oncology, cardiac and vascular imaging — with full room design, installation, training and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["ct-scanners"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["ct-scanners"] },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products/ct-scanners" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="ct-scanners"
      title="CT Scanners"
      description="Multi-slice CT platforms delivered as a complete turnkey solution — site design, lead shielding, installation, dose-optimisation setup, radiographer training and long-term biomedical engineering support."
      productCategories={["CT Scanners"]}
    />
  ),
});
