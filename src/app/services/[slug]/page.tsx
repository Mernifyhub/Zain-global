import type { Metadata } from "next";
import CategoryDetail from "../../../views/CategoryDetail";
import { services } from "../../../data/site";

/**
 * Pre-renders one static page per manpower category.
 * Add a category in src/data/site.ts and it gets a page automatically.
 */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Category not found" };
  }

  return {
    title: `${service.name.en} in Saudi Arabia`,
    description: service.summaryLong.en,
    openGraph: {
      title: `${service.name.en} | Zain Global`,
      description: service.summary.en,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CategoryDetail slug={slug} />;
}
