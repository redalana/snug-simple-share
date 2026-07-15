import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = {
  name: "AbuFarha Medical Supplies",
  positioning:
    "Medical equipment supply, engineering, installation, commissioning, training and support. Not a hospital construction/build company.",
  experienceYears: 25,
  regions: ["MENA", "Africa", "Central Asia"],
  turnkeyPhases: [
    "Supply — sourcing and procurement of certified medical equipment.",
    "Install — site prep coordination, delivery and physical installation.",
    "Commission — testing, calibration and acceptance against clinical specs.",
    "Train — clinical and biomedical staff training on operation and maintenance.",
    "Support — ongoing service contracts, spare parts and technical support.",
  ],
};

export default defineTool({
  name: "get_company_overview",
  title: "Get company overview",
  description: "Get an overview of AbuFarha Medical Supplies: what the company does, regions served, and the five-phase turnkey delivery model.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(OVERVIEW, null, 2) }],
    structuredContent: OVERVIEW,
  }),
});
