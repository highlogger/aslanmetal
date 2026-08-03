'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, Calendar, Tag, MapPin, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import type { BlogLocation } from '@/lib/constants';
import { SITE, BLOG_LOCATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogDetailContent({ post }: { post: BlogLocation }) {
  const relatedPosts = BLOG_LOCATIONS.filter(
    (p) => p.slug !== post.slug && p.locationType === post.locationType
  ).slice(0, 3);

  const handleShare = async () => {
    const url = `${SITE.url}/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li>
              <Link href="/" className="hover:text-accent transition-colors flex items-center gap-1">
                <Home size={14} />
                Anasayfa
              </Link>
            </li>
            <li><ChevronRight size={14} /></li>
            <li>
              <Link href="/blog" className="hover:text-accent transition-colors">
                Blog
              </Link>
            </li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium truncate max-w-[200px]">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.1),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] bg-accent/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              {post.parentDistrict && (
                <span className="text-white/40 text-xs flex items-center gap-1">
                  <MapPin size={12} />
                  {post.parentDistrict}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-5 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(post.date)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-12">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <ScrollReveal>
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:text-primary prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted prose-p:leading-relaxed prose-p:mb-4
                    prose-strong:text-primary prose-strong:font-semibold
                    prose-ul:my-4 prose-li:text-muted prose-li:mb-2
                    prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                    [&_h2]:border-l-4 [&_h2]:border-accent [&_h2]:pl-4
                    [&_ul]:space-y-1
                    [&_li]:before:content-['▸'] [&_li]:before:text-accent [&_li]:before:mr-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-light bg-surface px-3 py-1.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share & Back */}
              <div className="mt-8 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
                >
                  <ArrowLeft size={16} />
                  Tüm Yazılar
                </Link>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  <Share2 size={16} />
                  Paylaş
                </button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Related Posts */}
                <div>
                  <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    Benzer Yazılar
                  </h4>
                  <div className="space-y-3">
                    {relatedPosts.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-primary group-hover:text-accent transition-colors leading-snug">
                          {rp.title}
                        </div>
                        <div className="text-xs text-muted-light mt-1 flex items-center gap-1">
                          <MapPin size={10} />
                          {rp.location}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-surface/50 rounded-2xl p-6 border border-border/50">
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Hurda Fiyat Teklifi Alın
                  </h4>
                  <p className="text-xs text-muted mb-4 leading-relaxed">
                    {post.location} ve İstanbul genelinde hurdanız için hemen fiyat teklifi alın.
                  </p>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="block w-full text-center text-sm font-medium bg-accent text-white py-2.5 rounded-full hover:bg-accent-light transition-all duration-300"
                  >
                    Hemen Ara
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
