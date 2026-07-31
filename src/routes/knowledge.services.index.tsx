import { createFileRoute } from "@tanstack/react-router";
import { HubDirectory } from "@/components/site/knowledge/HubDirectory";
import { hubDirectoryHead } from "@/lib/content/hub-head";

const TITLE = "Service Hubs — Installation, Maintenance & Support | AbuFarha Medical";
const DESCRIPTION =
  "Dedicated service hubs covering installation and commissioning, preventive maintenance, clinical training, spare parts, technical support, remote diagnostics and turnkey projects.";

export const Route = createFileRoute("/knowledge/services/")({
  head: () => hubDirectoryHead("service", TITLE, DESCRIPTION),
  component: () => (
    <HubDirectory
      kind="service"
      heading="Service Hubs"
      intro="Every lifecycle service we deliver, connected to the technologies it covers and the technical resources that explain how it is executed."
    />
  ),
});
