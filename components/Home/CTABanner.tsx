'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/5" />
        <div className="absolute inset-0 metal-texture" />
        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-accent/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-accent/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Hurdanız İçin{' '}
            <span className="text-gradient">En İyi Fiyat Teklifini</span>{' '}
            Hemen Alın
          </h2>
          <p className="mt-5 text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Uzman ekibimiz hurdanızı yerinde inceleyerek güncel piyasa koşullarına göre en iyi fiyatı sunar. Hızlı ve şeffaf hizmet için hemen iletişime geçin.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-8 py-4 rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/25 text-sm md:text-base"
            >
              Hemen Teklif Al
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              <Phone size={18} />
              {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-8 py-4 rounded-full hover:bg-[#20BD5A] transition-all duration-300 shadow-lg shadow-[#25D366]/20 text-sm md:text-base"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
