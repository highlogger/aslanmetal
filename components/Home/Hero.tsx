'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const scrollToNext = () => {
    const statsSection = document.getElementById('stats');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1080px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        {/* Gradient overlay image simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,155,60,0.06),transparent_50%)]" />

        {/* Metal particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-accent/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100 - Math.random() * 200],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Geometric accent shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 border border-accent/5 rounded-full" />
        <div className="absolute bottom-20 left-10 w-64 h-64 border border-accent/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/[0.03] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-accent text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6"
          >
            İstanbul&apos;un Güvenilir Hurda Alım Firması
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[1.05] max-w-5xl mx-auto">
            Metal Geri Dönüşümde{' '}
            <span className="text-gradient">Güvenilir Çözüm</span>{' '}
            Ortağınız
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Aslan Metal olarak İstanbul genelinde her türlü metal hurdasını yerinde
            değerinde satın alıyor, hızlı ödeme ve profesyonel hizmet sunuyoruz.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link
              href="/iletisim"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white text-sm sm:text-base font-medium px-8 py-4 rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              Teklif Al
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm sm:text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm sm:text-base font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={18} />
              Hemen Ara
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-accent transition-colors duration-300 cursor-pointer"
        aria-label="Aşağı kaydır"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
