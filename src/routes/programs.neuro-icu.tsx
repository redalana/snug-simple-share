import { createFileRoute } from "@tanstack/react-router";
import { ClinicalProgramPage } from "@/components/site/ClinicalProgramPage";
import { getClinicalProgram } from "@/lib/clinical-programs";
import { programHead } from "@/lib/clinical-program-head";

const PROGRAM = getClinicalProgram("/programs/neuro-icu");

export const Route = createFileRoute("/programs/neuro-icu")({
  head: () => programHead(PROGRAM, "neuroIcu"),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ClinicalProgramPage program={PROGRAM} />;
}
