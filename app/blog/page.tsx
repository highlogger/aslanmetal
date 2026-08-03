import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'İstanbul Hurda Alım Bölgeleri | Blog',
  description: 'İstanbul\'un tüm ilçelerinde ve Sancaktepe mahallelerinde hurda alım hizmetlerimiz. Her bölge için hurda fiyatları, hurda çeşitleri ve iletişim bilgileri.',
  keywords: [
    'İstanbul hurda alım', 'hurda bölgeleri', 'ilçe ilçe hurda', 'Sancaktepe hurda',
    'İstanbul hurda fiyatları', 'hurda alım yerleri', 'metal geri dönüşüm bölgeleri',
  ],
  openGraph: {
    title: `İstanbul Hurda Alım Bölgeleri | ${SITE.name}`,
    description: 'İstanbul\'un tüm ilçelerinde hurda alım hizmeti. Bölgenize özel hurda alım bilgileri.',
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
