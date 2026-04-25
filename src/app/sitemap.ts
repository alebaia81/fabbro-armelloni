import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO-CLIENTE: Sostituire con il dominio definitivo
  const baseUrl = 'https://www.fabbroarmelloni.it';

  // Pagine statiche fisse
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
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // Pagine dinamiche dei comuni
  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city.fullSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: city.slug === 'piacenza' ? 0.95 : 0.8,
  }));

  return [...routes, ...cityRoutes];
}
