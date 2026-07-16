import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";

export const Route = createFileRoute("/products/mri-scanners")({
  head: () => ({
    meta: [
      { title: "MRI Scanners | AbuFarha Medical" },
      {
        name: "description",
        content:
          "1.5T and 3T MRI systems from Philips, Siemens and GE — supplied, sited, installed and serviced by AbuFarha's biomedical engineering team.",
      },
      { property: "og:title", content: "MRI Scanners | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Whole-body MRI systems with helium logistics, RF/shield planning, clinical training and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products/mri-scanners" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="mri-scanners"
      title="MRI Scanners"
      description="1.5T and 3T MRI platforms delivered as a complete turnkey solution — site planning, RF shielding, magnet delivery, commissioning, clinical training and long-term service."
      productCategories={["MRI Scanners"]}
    />
  ),
});
