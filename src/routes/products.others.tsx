import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";

const NAMED_CATEGORIES = [
  "Cath Lab Systems",
  "Drug-Eluting Stents",
  "PET/CT Scanners",
  "MRI Scanners",
  "C-Arms",
  "X-Ray Systems",
  "Mammography",
  "Bone Densitometers (DEXA)",
  "Lithotripsy Systems",
];

export const Route = createFileRoute("/products/others")({
  head: () => ({
    meta: [
      { title: "Other Medical Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Ultrasound, operating room, women's healthcare and specialty medical systems — supplied, installed and supported by AbuFarha Medical.",
      },
      { property: "og:title", content: "Other Medical Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Ultrasound, OR, women's healthcare and specialty systems with installation, training and lifecycle support.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products/others" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="others"
      title="Other Medical Systems"
      description="Ultrasound, operating room, women's healthcare and other specialty systems from our full portfolio — with the same installation, training and long-term service commitments that cover every AbuFarha delivery."
      productCategories={NAMED_CATEGORIES}
      showRest
    />
  ),
});
