'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Calendar, Tag, MapPin, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { BLOG_LOCATIONS } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function BlogContent() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'district' | 'neighborhood'>('all');

  const filteredPosts = useMemo(() => {
    let posts = BLOG_LOCATIONS;
    if (filter === 'district') posts = posts.filter((p) => p.locationType === 'district');
    if (filter === 'neighborhood') posts = posts.filter((p) => p.locationType === 'neighborhood');
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }
    return posts;
  }, [search, filter]);

  const districtCount = BLOG_LOCATIONS.filter((p) => p.locationType === 'district').length;
  const neighborhoodCount = BLOG_LOCATIONS.filter((p) => p.locationType === 'neighborhood').length;

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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Hurda Alım Rehberi</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">
              İstanbul Hurda Alım Bölgeleri
            </h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              İstanbul&apos;un tüm ilçelerinde ve Sancaktepe&apos;nin mahallelerinde hurda alım hizmetimiz hakkında detaylı bilgiler.
              Hangi bölgede olursanız olun, hurdanızı değerinde satın alıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: BLOG_LOCATIONS.length, label: 'Toplam Bölge' },
              { value: districtCount, label: 'İlçe' },
              { value: neighborhoodCount, label: 'Sancaktepe Mahalle/Semt' },
              { value: '7/24', label: 'Hizmet' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center p-5 bg-surface/40 rounded-2xl border border-border/30"
              >
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-light" />
              <input
                type="text"
                placeholder="İlçe veya mahalle ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
              />
            </div>
            <div className="flex gap-2">
              {[
                { value: 'all' as const, label: 'Tümü' },
                { value: 'district' as const, label: 'İlçeler' },
                { value: 'neighborhood' as const, label: 'Sancaktepe Mahalleleri' },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value)}
                  className={`px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    filter === btn.value
                      ? 'bg-accent text-white shadow-md shadow-accent/20'
                      : 'bg-surface text-muted hover:text-primary hover:bg-surface/80'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-light mb-6">
            {filteredPosts.length} bölge bulundu
          </p>

          {/* Post Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.03}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <article className="bg-white rounded-2xl border border-border/50 overflow-hidden hover:border-accent/20 hover:shadow-card transition-all duration-500 h-full flex flex-col">
                      <div className="aspect-[16/10] bg-gradient-to-br from-primary/60 to-primary flex items-center justify-center relative overflow-hidden">
                        <div className="text-center px-6">
                          <MapPin size={28} className="text-accent mx-auto mb-2" />
                          <span className="text-accent text-xs font-medium uppercase tracking-wider">
                            {post.category}
                          </span>
                        </div>
                        {post.parentDistrict && (
                          <span className="absolute top-3 right-3 text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                            {post.parentDistrict}
                          </span>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-xs text-muted-light mb-3">
                          <MapPin size={11} />
                          <span>{post.location}</span>
                          <span className="text-border">•</span>
                          <Calendar size={11} />
                          <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-2">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[11px] text-muted-light bg-surface px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-[11px] text-muted-light">+{post.tags.length - 3}</span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter size={40} className="text-muted-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Sonuç Bulunamadı</h3>
              <p className="text-sm text-muted">
                &quot;{search}&quot; için sonuç bulunamadı. Farklı bir arama terimi deneyin.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
