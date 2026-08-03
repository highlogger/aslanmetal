import type { Metadata } from 'next';
import { SITE, FAQS } from '@/lib/constants';
import { BreadcrumbSchema, FAQSchema } from '@/components/SEO/JsonLd';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular',
  description: 'Hurda alımı, metal geri dönüşüm, fiyatlandırma ve hizmetlerimiz hakkında sık sorulan sorular ve cevapları.',
  openGraph: {
    title: `Sık Sorulan Sorular | ${SITE.name}`,
    description: 'Hurda alımı ve geri dönüşüm hakkında merak edilenler.',
  },
  alternates: { canonical: `${SITE.url}/sss` },
};

export default function SSSPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'SSS', item: `${SITE.url}/sss` }]} />
      <FAQSchema faqs={FAQS} />
      <FAQContent />
    </>
  );
}
