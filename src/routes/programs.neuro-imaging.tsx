import { createFileRoute } from "@tanstack/react-router";
import { ClinicalProgramPage } from "@/components/site/ClinicalProgramPage";
import { getClinicalProgram } from "@/lib/clinical-programs";
import { programHead } from "@/lib/clinical-program-head";

const PROGRAM = getClinicalProgram("/programs/neuro-imaging");

export const Route = createFileRoute("/programs/neuro-imaging")({
  head: () => programHead(PROGRAM, "neuroImaging"),
  component: ProgramRoute,
});

function ProgramRoute() {
  return <ClinicalProgramPage program={PROGRAM} />;
}
