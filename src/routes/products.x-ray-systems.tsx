import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/x-ray-systems")({
  head: () => ({
    meta: [
      { title: "X-Ray Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Ceiling-mounted and floor-mounted digital radiography systems — supplied, installed and serviced by AbuFarha's biomedical engineers.",
      },
      { property: "og:title", content: "X-Ray Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Digital DR systems with flat-panel detectors, clinical training and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["x-ray-systems"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["x-ray-systems"] },
    ],
    links: [{ rel: "canonical", href: "/products/x-ray-systems" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="x-ray-systems"
      title="X-Ray Systems"
      description="Digital radiography systems for general, chest and orthopedic imaging — from room design and installation through commissioning, clinical training and long-term service."
      productCategories={["X-Ray Systems"]}
    />
  ),
});
