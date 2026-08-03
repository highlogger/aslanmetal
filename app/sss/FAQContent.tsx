'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { FAQS, SITE } from '@/lib/constants';
import Accordion from '@/components/UI/Accordion';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function FAQContent() {
  return (
    <>
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Sık Sorulan Sorular</li>
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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Yardım Merkezi</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Sık Sorulan Sorular</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Hurda alımı, fiyatlandırma ve hizmetlerimiz hakkında en çok merak edilen sorular.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <HelpCircle size={20} className="text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-primary">Merak Ettikleriniz</h2>
                <p className="text-sm text-muted-light">{FAQS.length} soru ve cevap</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-surface/30 rounded-2xl p-6 md:p-8 border border-border/50">
              <Accordion items={FAQS} />
            </div>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted mb-4">Aradığınız soruyu bulamadınız mı?</p>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-light transition-colors text-sm"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
