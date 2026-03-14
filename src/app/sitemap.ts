import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fabbropiacenza-esempio.it'; // Sostituire con il vero dominio

  // Definisci la Home Page e le pagine statiche fisse
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/i-nostri-lavori`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Aggiungi le pagine dinamiche dei comuni
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/fabbro-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...cityRoutes];
}
