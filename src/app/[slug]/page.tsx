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

// 2. Generate Metadata — SEO avanzata per ogni città
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const cityData = cities.find((c) => c.fullSlug === resolvedParams.slug);
  
  if (!cityData) {
    return { title: 'Not Found' };
  }

  const title = `Fabbro Urgente ${cityData.name} | Pronto Intervento 24h`;
  const description = `Fabbro urgente a ${cityData.name} (PC). Intervento in ${cityData.distanzaKm <= 10 ? '15-20' : cityData.distanzaKm <= 20 ? '20-30' : '25-40'} minuti per apertura porte blindate, sostituzione serrature a cilindro europeo, inferriate e carpenteria metallica. Servizio 24/7, anche festivi.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${cityData.fullSlug}`,
    },
    openGraph: {
      title: `Fabbro a ${cityData.name} — Pronto Intervento 24h`,
      description: `Cerchi un fabbro a ${cityData.name}? Arrivo in ${cityData.distanzaKm <= 10 ? '15' : '30'} min. Apertura porte blindate, serrature, carpenteria. 24/7.`,
      url: `/${cityData.fullSlug}`,
      locale: 'it_IT',
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `Fabbro Armelloni — Pronto Intervento a ${cityData.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Fabbro a ${cityData.name} | Pronto Intervento 24h`,
      description: `Fabbro urgente a ${cityData.name}. Apertura porte, serrature, carpenteria metallica. 24/7.`,
      images: ['/logo.png'],
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
