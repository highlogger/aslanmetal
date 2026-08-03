import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastModified = new Date();

  const pages = [
    { route: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { route: '/hakkimizda', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/kurumsal', priority: 0.9, changeFrequency: 'monthly' as const },
    { route: '/hizmetlerimiz', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/hurda-cesitleri', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/sss', priority: 0.7, changeFrequency: 'monthly' as const },
    { route: '/kvkk', priority: 0.4, changeFrequency: 'yearly' as const },
    { route: '/gizlilik-politikasi', priority: 0.4, changeFrequency: 'yearly' as const },
    { route: '/cerez-politikasi', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
