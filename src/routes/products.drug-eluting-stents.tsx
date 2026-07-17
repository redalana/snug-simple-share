import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";
import { SITE_URL, OG_IMAGES } from "@/lib/seo";

export const Route = createFileRoute("/products/drug-eluting-stents")({
  head: () => ({
    meta: [
      { title: "Drug-Eluting Stents (DES) | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Drug-eluting coronary stents from leading OEMs — sourced, delivered and clinically supported for cath labs across Africa and the Middle East.",
      },
      { property: "og:title", content: "Drug-Eluting Stents (DES) | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Coronary DES platforms with clinical training, inventory support and OEM-aligned service.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGES.productCategory["drug-eluting-stents"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGES.productCategory["drug-eluting-stents"] },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products/drug-eluting-stents" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="drug-eluting-stents"
      title="Drug-Eluting Stents (DES)"
      description="Modern drug-eluting coronary stent platforms from Abbott, Medtronic and Boston Scientific — with reliable inventory support, clinical training and application specialists for your interventional cardiology program."
      productCategories={["Drug-Eluting Stents"]}
    />
  ),
});
