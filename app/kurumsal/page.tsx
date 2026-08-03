import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import KurumsalContent from './KurumsalContent';

export const metadata: Metadata = {
  title: 'Kurumsal',
  description: 'Aslan Metal kurumsal değerleri, kalite politikası, çevre politikası ve sertifikalarımız hakkında bilgi edinin.',
  openGraph: {
    title: `Kurumsal | ${SITE.name}`,
    description: 'Aslan Metal kurumsal değerleri ve sertifikalarımız.',
  },
  alternates: { canonical: `${SITE.url}/kurumsal` },
};

export default function KurumsalPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'Kurumsal', item: `${SITE.url}/kurumsal` }]} />
      <KurumsalContent />
    </>
  );
}
