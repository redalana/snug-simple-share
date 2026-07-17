import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/pet-ct-scanners")({
  head: () => ({
    meta: [
      { title: "PET/CT Scanners | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Digital PET/CT molecular imaging systems for oncology, cardiology and neurology — installed and serviced by AbuFarha's specialist engineers.",
      },
      { property: "og:title", content: "PET/CT Scanners | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Digital PET/CT platforms with time-of-flight imaging, clinical training and long-term service support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["pet-ct-scanners"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["pet-ct-scanners"] },
    ],
    links: [{ rel: "canonical", href: "/products/pet-ct-scanners" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="pet-ct-scanners"
      title="PET/CT Scanners"
      description="Digital PET/CT systems purpose-built for high-throughput oncology and molecular imaging — from site planning and installation to clinical training and lifetime service support."
      productCategories={["PET/CT Scanners"]}
    />
  ),
});
