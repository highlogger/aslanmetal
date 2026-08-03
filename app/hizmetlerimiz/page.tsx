import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Aslan Metal hurda alım, metal geri dönüşüm, fabrika sökümü, sanayi atığı toplama, yerinde ekspertiz, konteyner hizmeti ve nakliye hizmetleri.',
  openGraph: {
    title: `Hizmetlerimiz | ${SITE.name}`,
    description: 'Hurda alım, geri dönüşüm ve endüstriyel atık yönetimi hizmetlerimizi keşfedin.',
  },
  alternates: { canonical: `${SITE.url}/hizmetlerimiz` },
};

export default function HizmetlerPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'Hizmetlerimiz', item: `${SITE.url}/hizmetlerimiz` }]} />
      <ServicesContent />
    </>
  );
}
