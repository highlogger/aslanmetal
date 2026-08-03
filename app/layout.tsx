import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { OrganizationSchema, LocalBusinessSchema } from '@/components/SEO/JsonLd';
import { SITE } from '@/lib/constants';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | İstanbul Metal Hurda Alım ve Geri Dönüşüm`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'hurda alım',
    'metal geri dönüşüm',
    'hurda fiyatları',
    'bakır hurda',
    'alüminyum hurda',
    'demir hurda',
    'İstanbul hurda',
    'fabrika sökümü',
    'sanayi atık',
    'geri dönüşüm',
    'Sancaktepe hurda',
    'hurda nakliye',
    'paslanmaz hurda',
    'kablo hurda',
    'elektronik atık',
    'Aslan Metal',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | İstanbul Metal Hurda Alım ve Geri Dönüşüm`,
    description: SITE.description,
    url: SITE.url,
    locale: 'tr_TR',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | İstanbul Metal Hurda Alım ve Geri Dönüşüm`,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
