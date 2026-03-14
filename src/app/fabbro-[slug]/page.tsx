import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/lib/cities";
import ServicePage from "@/components/ServicePage";

// 1. Generate Static Params for Ultra-Fast Loading (Static Generation)
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

// 2. Generate Dynamic Metadata (SEO GEO-LOCALIZZATA)
export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { params }: any
): Promise<Metadata> {
  // await params is needed in Next.js 15
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.slug === resolvedParams.slug);
  
  if (!cityData) {
    return { title: 'Not Found' };
  }

  return {
    title: `Fabbro Urgente ${cityData.name} | Apertura Porte 24h | Fabbro Piacenza`,
    description: `Fabbro urgente a ${cityData.name}. Intervento in 30 minuti per apertura porte blindate, serrature e riparazioni. Servizio 24 ore su 24 e festivi.`,
    openGraph: {
      title: `Fabbro a ${cityData.name} - Pronto Intervento`,
      description: `Rimaniamo a disposizione 24/7 a ${cityData.name} per emergenze fabbro.`,
      locale: 'it_IT',
      type: 'website',
    },
  };
}

// 3. Page Component
export default async function FabbroCityPage(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { params }: any
) {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.slug === resolvedParams.slug);

  if (!cityData) {
    notFound();
  }

  return <ServicePage city={cityData.name} />;
}
