import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities } from "@/lib/cities";
import ServicePage from "@/components/ServicePage";

// 1. Generate Static Params: restituisce il fullSlug (es. fabbro-caorso)
export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.fullSlug,
  }));
}

// 2. Generate Metadata
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.fullSlug === resolvedParams.slug);
  
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
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.fullSlug === resolvedParams.slug);

  if (!cityData) {
    notFound();
  }

  return <ServicePage city={cityData.name} />;
}
