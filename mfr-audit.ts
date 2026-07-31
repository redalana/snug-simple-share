import { ARTICLE_ITEMS } from "./src/lib/content/adapters";
import { vendorStance } from "./src/lib/content/taxonomy";
import { resolveHub } from "./src/lib/content";
const counts = new Map<string, number>();
let ind=0, mult=0;
for (const a of ARTICLE_ITEMS) {
  const s = vendorStance(a.manufacturers);
  if (s==="independent") ind++; if (s==="multiple") mult++;
  for (const m of a.manufacturers) counts.set(m,(counts.get(m)??0)+1);
}
console.log("articles", ARTICLE_ITEMS.length, "independent", ind, "multiple", mult);
for (const [m,c] of [...counts].sort((a,b)=>b[1]-a[1])) {
  const hub = resolveHub("manufacturer", m.toLowerCase().replace(/[^a-z0-9]+/g,"-"));
  console.log(m, "articles="+c, "hub="+(hub?"yes":"MISSING"), hub?`products=${hub.products.length} tech=${hub.technologies.length} services=${hub.services.length}`:"");
}
