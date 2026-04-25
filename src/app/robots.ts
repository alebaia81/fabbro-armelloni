import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TODO-CLIENTE: Sostituire con il dominio definitivo
  const baseUrl = 'https://www.fabbroarmelloni.it';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
