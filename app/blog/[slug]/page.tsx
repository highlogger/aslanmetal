import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE, BLOG_LOCATIONS } from '@/lib/constants';
import { BlogPostingSchema, BreadcrumbSchema } from '@/components/SEO/JsonLd';
import BlogDetailContent from './BlogDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_LOCATIONS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_LOCATIONS.find((p) => p.slug === slug);
  if (!post) return { title: 'Bulunamadı' };

  const title = `${post.title} | ${SITE.name}`;
  const url = `${SITE.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      type: 'article',
      locale: 'tr_TR',
      siteName: SITE.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_LOCATIONS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Anasayfa', item: SITE.url },
          { name: 'Blog', item: `${SITE.url}/blog` },
          { name: post.title, item: `${SITE.url}/blog/${post.slug}` },
        ]}
      />
      <BlogPostingSchema
        headline={post.title}
        description={post.excerpt}
        url={`${SITE.url}/blog/${post.slug}`}
        datePublished={post.date}
        dateModified={post.date}
        authorName={SITE.name}
      />
      <BlogDetailContent post={post} />
    </>
  );
}
