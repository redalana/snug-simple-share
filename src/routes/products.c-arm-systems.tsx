import { createFileRoute } from "@tanstack/react-router";
import { CategoryLandingPage } from "@/components/site/CategoryLandingPage";

export const Route = createFileRoute("/products/c-arm-systems")({
  head: () => ({
    meta: [
      { title: "C-Arm Systems | AbuFarha Medical" },
      {
        name: "description",
        content:
          "Mobile and fixed C-arm fluoroscopy systems for surgery, orthopedics and interventional radiology — supplied and serviced across Africa and the Middle East.",
      },
      { property: "og:title", content: "C-Arm Systems | AbuFarha Medical" },
      {
        property: "og:description",
        content:
          "Flat-detector C-arms with clinical training, installation and preventive maintenance.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products/c-arm-systems" }],
  }),
  component: () => (
    <CategoryLandingPage
      slug="c-arm-systems"
      title="C-Arm Systems"
      description="Mobile flat-detector C-arms and fixed hybrid OR systems for orthopedic, vascular and general surgical workflows — with installation, clinical training and preventive maintenance."
      productCategories={["C-Arms"]}
    />
  ),
});
