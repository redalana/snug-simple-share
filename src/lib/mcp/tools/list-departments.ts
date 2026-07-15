import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DEPARTMENTS = [
  { id: "cath-lab", name: "Cardiac Catheterization Lab", scope: "Angiography systems, hemodynamic monitoring, defibrillators, contrast injectors, radiation protection, sterile workflow furniture." },
  { id: "mri", name: "MRI Suite", scope: "MRI scanner, RF shielding, magnet chiller, patient monitoring (MR-safe), coils, PACS integration, patient prep and control rooms." },
  { id: "ct", name: "CT Suite", scope: "CT scanner, injector, radiation shielding, control console, PACS integration, patient prep." },
  { id: "operating-room", name: "Operating Room", scope: "OR tables, surgical lights, anesthesia workstations, electrosurgical units, pendants, laminar flow, integration systems." },
  { id: "icu", name: "Intensive Care Unit", scope: "ICU beds, ventilators, patient monitors, infusion pumps, central monitoring, medical gas outlets." },
  { id: "endoscopy", name: "Endoscopy Suite", scope: "Endoscopy towers, scopes, reprocessors, C-arm, patient monitors, recovery bays." },
  { id: "sterilization", name: "CSSD / Sterilization", scope: "Steam sterilizers, washer-disinfectors, ultrasonic cleaners, packaging stations, tracking systems." },
  { id: "radiology", name: "General Radiology", scope: "Digital X-ray, fluoroscopy, mammography, ultrasound, PACS/RIS integration." },
];

export default defineTool({
  name: "list_departments",
  title: "List medical departments",
  description: "List the medical departments AbuFarha Medical Supplies delivers as turnkey solutions, with an overview of typical scope for each.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(DEPARTMENTS, null, 2) }],
    structuredContent: { departments: DEPARTMENTS },
  }),
});

export { DEPARTMENTS };
