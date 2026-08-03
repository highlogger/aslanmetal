import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import ScrapContent from './ScrapContent';

export const metadata: Metadata = {
  title: 'Hurda Çeşitleri',
  description: 'Bakır, alüminyum, demir, paslanmaz, krom, çinko, kurşun, kablo, akü, elektronik atık ve daha fazlası. Tüm hurda çeşitlerini değerinde satın alıyoruz.',
  openGraph: {
    title: `Hurda Çeşitleri | ${SITE.name}`,
    description: 'Tüm metal hurda çeşitlerini değerinde satın alıyoruz.',
  },
  alternates: { canonical: `${SITE.url}/hurda-cesitleri` },
};

export default function HurdaCesitleriPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'Hurda Çeşitleri', item: `${SITE.url}/hurda-cesitleri` }]} />
      <ScrapContent />
    </>
  );
}
