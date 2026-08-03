'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function BlogContent() {
  return (
    <>
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Bilgi Merkezi</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Blog</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Metal geri dönüşüm, hurda fiyatları ve sektör haberleri hakkında güncel yazılar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {BLOG_POSTS.length > 0 && (
            <ScrollReveal>
              <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group block mb-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-surface/30 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/20 hover:shadow-card transition-all duration-500">
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                    <div className="text-center px-8">
                      <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                        <Tag size={24} className="text-accent" />
                      </div>
                      <span className="text-accent text-xs font-medium uppercase tracking-wider">{BLOG_POSTS[0].category}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 text-xs text-muted-light mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(BLOG_POSTS[0].date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{BLOG_POSTS[0].title}</h2>
                    <p className="text-muted leading-relaxed mb-4">{BLOG_POSTS[0].excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Devamını Oku <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl border border-border/50 overflow-hidden hover:border-accent/20 hover:shadow-card transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-[16/10] bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center relative overflow-hidden">
                      <span className="text-accent text-xs font-medium uppercase tracking-wider">{post.category}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-muted-light mb-3">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-[11px] text-muted-light bg-surface px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
