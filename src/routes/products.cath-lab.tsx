import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/cath-lab")({
  head: () => ({
    meta: [
      { title: "Cath Lab Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Certified single-plane and biplane cath lab systems from Philips, GE and Siemens — supplied, installed, commissioned and supported by AbuFarha Medical.",
      },
      { property: "og:title", content: "Cath Lab Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Interventional cardiology and neurovascular cath lab systems with installation, training and lifetime support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["cath-lab"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["cath-lab"] },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products/cath-lab" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="cath-lab"
      title="Cath Lab Systems"
      description="Fixed and biplane cath lab systems engineered for interventional cardiology, neurovascular and peripheral vascular procedures — supplied, installed and supported by AbuFarha's biomedical engineering team."
      productCategories={["Cath Lab Systems"]}
    />
  ),
});
