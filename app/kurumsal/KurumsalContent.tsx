'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, Shield, Award, FileCheck, Target, Heart, Scale, Zap, Leaf, Lightbulb, HardHat, Clock } from 'lucide-react';
import Link from 'next/link';
import { CORPORATE_VALUES, CERTIFICATES } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

const valueIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Güvenilirlik': Shield,
  'Kalite': Award,
  'Sürdürülebilirlik': Leaf,
  'Yenilikçilik': Lightbulb,
  'İş Güvenliği': HardHat,
  'Hızlı Çözüm': Zap,
};

export default function KurumsalContent() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Kurumsal</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Kurumsal</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Kurumsal Değerlerimiz</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Güvenilirlik, sürdürülebilirlik ve kalite odaklı kurumsal yaklaşımımız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Değerlerimiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">Bizi Biz Yapan Değerler</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORPORATE_VALUES.values.map((value, index) => {
              const Icon = valueIcons[value.title] || Shield;
              return (
                <ScrollReveal key={value.title} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-7 rounded-2xl border border-border/50 bg-surface/30 hover:border-accent/20 hover:shadow-premium transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Belgelerimiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">Sertifika ve Lisanslarımız</h2>
            <p className="mt-3 text-muted max-w-2xl mx-auto">Tüm faaliyetlerimiz yasal mevzuata uygun olarak gerekli lisans ve sertifikalarla yürütülmektedir.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATES.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-border/50 flex items-start gap-4 hover:border-accent/20 hover:shadow-premium transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">{cert.name}</h3>
                    <p className="text-xs text-muted-light mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
