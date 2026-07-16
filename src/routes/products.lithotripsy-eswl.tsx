import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";

export const Route = createFileRoute("/products/lithotripsy-eswl")({
  head: () => ({
    meta: [
      { title: "Lithotripsy (ESWL) Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Extracorporeal shock wave lithotripsy (ESWL) systems for urology departments — supplied, installed and clinically supported by AbuFarha Medical.",
      },
      { property: "og:title", content: "Lithotripsy (ESWL) Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "ESWL platforms with urology-focused clinical training and long-term service coverage.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products/lithotripsy-eswl" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="lithotripsy-eswl"
      title="Lithotripsy (ESWL) Systems"
      description="Extracorporeal shock wave lithotripsy platforms for non-invasive stone treatment in urology — with room integration, urologist training and preventive service programs."
      productCategories={["Lithotripsy Systems"]}
    />
  ),
});
