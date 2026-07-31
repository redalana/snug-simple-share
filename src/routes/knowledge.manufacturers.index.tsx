import { createFileRoute } from "@tanstack/react-router";
import { HubDirectory } from "@/components/site/knowledge/HubDirectory";
import { hubDirectoryHead } from "@/lib/content/hub-head";

const TITLE = "Manufacturer Hubs — Supported OEM Brands | AbuFarha Medical";
const DESCRIPTION =
  "Dedicated hubs for every manufacturer AbuFarha Medical supplies, installs and services — Philips, Canon Medical, Siemens, GE, Hitachi, Mindray, Shimadzu, Abbott, Medtronic and more.";

export const Route = createFileRoute("/knowledge/manufacturers/")({
  head: () => hubDirectoryHead("manufacturer", TITLE, DESCRIPTION),
  component: () => (
    <HubDirectory
      kind="manufacturer"
      heading="Manufacturer Hubs"
      intro="Every manufacturer in our supported roster, with the systems we supply from it and the technical knowledge, guides and lifecycle services attached to those systems."
    />
  ),
});
