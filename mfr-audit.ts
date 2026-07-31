import { ARTICLE_ITEMS } from "./src/lib/content/adapters";
import { vendorStance, ALL_MANUFACTURERS } from "./src/lib/content/taxonomy";
import { resolveHub } from "./src/lib/content";
import { slugifyFacet, getFacetOptions } from "./src/lib/content/knowledge-center";
let ind=0,mult=0;
for (const a of ARTICLE_ITEMS){const s=vendorStance(a.manufacturers); if(s==="independent")ind++; if(s==="multiple")mult++;}
console.log(`articles=${ARTICLE_ITEMS.length} independent=${ind} multiple=${mult}`);
for (const m of ALL_MANUFACTURERS){
  const arts = ARTICLE_ITEMS.filter(a=>a.manufacturers.includes(m));
  const hub = resolveHub("manufacturer", slugifyFacet(m));
  console.log([m, `articles=${arts.length}`, `hub=${hub?"live":"MISSING"}`,
    hub?`products=${hub.products.length}`:"", hub?`tech=${hub.technologies.length}`:"",
    hub?`services=${hub.services.length}`:"", arts.length===0?"gap=no-article-coverage":""].join(" | "));
}
console.log("facets:", getFacetOptions({}).manufacturers.map(o=>`${o.label}:${o.count}`).join(", "));
