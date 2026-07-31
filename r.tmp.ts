import { REGISTRY } from "@/lib/content/registry";
import { PRIMARY_CATEGORIES } from "@/lib/products";
const by: Record<string, any[]> = {};
for (const e of REGISTRY) (by[e.cluster] ||= []).push(e);
console.log(PRIMARY_CATEGORIES);
for (const [k, v] of Object.entries(by).sort((a,b)=>b[1].length-a[1].length))
  console.log(k, v.length, v.map(e=>`${e.slug}[${e.intent}]`).join(" | "));
