import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Aslan Metal olarak 20 yılı aşkın deneyimimizle İstanbul genelinde metal hurda alım ve geri dönüşüm hizmeti sunuyoruz.',
  openGraph: {
    title: `Hakkımızda | ${SITE.name}`,
    description: 'Aslan Metal olarak 20 yılı aşkın deneyimimizle İstanbul genelinde metal hurda alım ve geri dönüşüm hizmeti sunuyoruz.',
  },
  alternates: {
    canonical: `${SITE.url}/hakkimizda`,
  },
};

export default function HakkimizdaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Anasayfa', item: SITE.url },
          { name: 'Hakkımızda', item: `${SITE.url}/hakkimizda` },
        ]}
      />
      <AboutContent />
    </>
  );
}
