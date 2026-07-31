import { validateCandidate, REGISTRY } from "@/lib/content/registry";
console.log(JSON.stringify(validateCandidate({slug:"what-is-a-cath-lab",title:"What Is a Cardiac Catheterization Laboratory (Cath Lab)?",intent:"Informational",journeyStage:"Awareness",cluster:"Cath Lab"})));
console.log(REGISTRY.filter(e=>e.cluster==="Cath Lab").map(e=>`${e.slug} ${e.intent}/${e.journeyStage} tier${e.tier}`));
