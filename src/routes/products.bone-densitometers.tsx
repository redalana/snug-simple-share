import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/bone-densitometers")({
  head: () => ({
    meta: [
      { title: "Bone Densitometers (DEXA) | AbuFarha Medical" },
      {
        name: "description",
        content:
          "DEXA bone densitometry systems for osteoporosis screening and body composition analysis — installed and serviced by certified biomedical engineers.",
      },
      { property: "og:title", content: "Bone Densitometers (DEXA) | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Full-body DEXA systems with clinical training, QC protocols and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["bone-densitometers"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["bone-densitometers"] },
    ],
    links: [{ rel: "canonical", href: "/products/bone-densitometers" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="bone-densitometers"
      title="Bone Densitometers (DEXA)"
      description="DEXA bone densitometry platforms for osteoporosis screening, orthopedic assessment and body composition analysis — with certified installation, training and QA support."
      productCategories={["Bone Densitometers (DEXA)"]}
    />
  ),
});
