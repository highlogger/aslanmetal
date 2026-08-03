import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';
import { BreadcrumbSchema } from '@/components/SEO/JsonLd';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Aslan Metal ile iletişime geçin. Telefon, WhatsApp, e-posta veya iletişim formu ile bize ulaşarak hurda fiyat teklifi alın.',
  openGraph: {
    title: `İletişim | ${SITE.name}`,
    description: 'Aslan Metal ile iletişime geçin, hurda fiyat teklifi alın.',
  },
  alternates: { canonical: `${SITE.url}/iletisim` },
};

export default function IletisimPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Anasayfa', item: SITE.url }, { name: 'İletişim', item: `${SITE.url}/iletisim` }]} />
      <ContactContent />
    </>
  );
}
