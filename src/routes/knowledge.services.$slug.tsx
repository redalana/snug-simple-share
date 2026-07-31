import { createFileRoute, notFound } from "@tanstack/react-router";
import { HubPage } from "@/components/site/knowledge/HubPage";
import { resolveHub } from "@/lib/content";
import { hubHead } from "@/lib/content/hub-head";

export const Route = createFileRoute("/knowledge/services/$slug")({
  loader: ({ params }) => {
    const hub = resolveHub("service", params.slug);
    if (!hub) throw notFound();
    return { def: hub.def, itemCount: hub.articles.length + hub.products.length };
  },
  head: ({ loaderData }) => (loaderData ? hubHead(loaderData.def, loaderData.itemCount) : {}),
  component: ServiceHubRoute,
});

function ServiceHubRoute() {
  const { slug } = Route.useParams();
  const hub = resolveHub("service", slug);
  if (!hub) return null;
  return <HubPage hub={hub} />;
}
