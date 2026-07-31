import { createFileRoute } from "@tanstack/react-router";
import { HubDirectory } from "@/components/site/knowledge/HubDirectory";
import { hubDirectoryHead } from "@/lib/content/hub-head";

const TITLE = "Product Hubs — Medical Equipment Categories | AbuFarha Medical";
const DESCRIPTION =
  "Dedicated product hubs for every equipment category AbuFarha Medical supplies, each linking systems to their specifications, comparison guides, planning notes and service resources.";

export const Route = createFileRoute("/knowledge/products/")({
  head: () => hubDirectoryHead("product", TITLE, DESCRIPTION),
  component: () => (
    <HubDirectory
      kind="product"
      heading="Product Hubs"
      intro="Every equipment category in the AbuFarha Medical portfolio, mapped to the knowledge a hospital needs before, during and after purchase."
    />
  ),
});
