import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/mammography-systems")({
  head: () => ({
    meta: [
      { title: "Mammography Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "3D tomosynthesis and 2D digital mammography systems for breast screening programs — installed and supported across Africa and the Middle East.",
      },
      { property: "og:title", content: "Mammography Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Tomosynthesis mammography with integrated biopsy, clinical training and QA support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["mammography-systems"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["mammography-systems"] },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products/mammography-systems" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="mammography-systems"
      title="Mammography Systems"
      description="Digital 2D and 3D tomosynthesis mammography systems for national screening programs and dedicated women's health centers — with QA, radiographer training and integrated biopsy workflows."
      productCategories={["Mammography"]}
    />
  ),
});
