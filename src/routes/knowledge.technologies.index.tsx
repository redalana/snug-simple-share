import { createFileRoute } from "@tanstack/react-router";
import { HubDirectory } from "@/components/site/knowledge/HubDirectory";
import { hubDirectoryHead } from "@/lib/content/hub-head";

const TITLE = "Technology Hubs — Medical Imaging Knowledge | AbuFarha Medical";
const DESCRIPTION =
  "Dedicated hubs for every medical technology AbuFarha Medical supports — MRI, CT, PET/CT, cath lab, C-arm, X-ray, mammography, ultrasound, DEXA and lithotripsy knowledge in one place.";

export const Route = createFileRoute("/knowledge/technologies/")({
  head: () => hubDirectoryHead("technology", TITLE, DESCRIPTION),
  component: () => (
    <HubDirectory
      kind="technology"
      heading="Technology Hubs"
      intro="One hub per medical technology we supply and support, connecting the explainers, comparisons, procurement guides, installation notes and service resources that belong to it."
    />
  ),
});
