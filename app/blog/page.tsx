import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Metal geri dönüşüm, hurda fiyatları, sektör haberleri ve hurda satışı hakkında güncel bilgiler ve rehberler.',
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description: 'Hurda ve geri dönüşüm hakkında güncel yazılar.',
  },
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'Blog', item: `${SITE.url}/blog` }]} />
      <BlogContent />
    </>
  );
}
