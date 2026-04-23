import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tron.network';
  
  const routes = [
    '',
    '/start',
    '/trx',
    '/usdt',
    '/wallets',
    '/faq',
    '/developers',
    '/developers/docs',
    '/developers/api',
    '/developers/cookbook',
    '/developers/grants',
    '/developers/office-hours',
    '/developers/sdk',
    '/ecosystem',
    '/programs',
    '/mvb',
    '/events',
    '/news',
    '/security',
    '/about',
    '/roadmap',
    '/whitepaper',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
