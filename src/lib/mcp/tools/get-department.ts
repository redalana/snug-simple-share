import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DEPARTMENTS } from "./list-departments";

export default defineTool({
  name: "get_department",
  title: "Get department details",
  description:
    "Get the full turnkey scope for a specific medical department by id (e.g. 'mri', 'cath-lab', 'operating-room').",
  inputSchema: {
    id: z.string().min(1).describe("Department id from list_departments."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const found = DEPARTMENTS.find((d) => d.id === id.toLowerCase());
    if (!found) {
      return {
        content: [
          {
            type: "text",
            text: `Unknown department id: ${id}. Call list_departments for valid ids.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(found, null, 2) }],
      structuredContent: { department: found },
    };
  },
});
