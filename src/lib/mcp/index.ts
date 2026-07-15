import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import listDepartments from "./tools/list-departments";
import getDepartment from "./tools/get-department";

export default defineMcp({
  name: "abufarha-medical-mcp",
  title: "AbuFarha Medical Supplies MCP",
  version: "0.1.0",
  instructions:
    "Public, read-only tools describing AbuFarha Medical Supplies' turnkey medical-equipment offering: company overview, medical departments served, and the scope covered per department.",
  tools: [getCompanyOverview, listDepartments, getDepartment],
});
