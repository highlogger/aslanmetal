'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, ShieldCheck, Target, Eye, Leaf, Award } from 'lucide-react';
import Link from 'next/link';
import { CORPORATE_VALUES } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

const timeline = [
  { year: '2005', title: 'Kuruluş', description: 'Aslan Metal, Sancaktepe\'de 500 m² alanda hurda alım faaliyetlerine başladı.' },
  { year: '2010', title: 'Büyüme', description: 'Araç filosu genişletildi, İstanbul Anadolu Yakası genelinde hizmet vermeye başlandı.' },
  { year: '2015', title: 'Lisanslama', description: 'Çevre ve Şehircilik Bakanlığı\'ndan geri dönüşüm lisansı alındı.' },
  { year: '2020', title: 'Dijital Dönüşüm', description: 'Dijital kantar sistemi ve online fiyat teklifi altyapısı kuruldu.' },
  { year: '2025', title: 'Bugün', description: '250.000+ ton geri dönüşüm, 10.000+ mutlu müşteri ile sektör liderliği.' },
];

export default function AboutContent() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Hakkımızda</li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Hakkımızda</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              20 yılı aşkın deneyimimizle metal geri dönüşüm sektöründe güvenilir çözüm ortağınız olmaktan gurur duyuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal>
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Hikayemiz</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mt-3">
                  Sektörde 20 Yılı Aşkın Tecrübe
                </h2>
                <div className="mt-6 space-y-4 text-muted leading-relaxed">
                  <p>
                    Aslan Metal, 2005 yılında İstanbul Sancaktepe&apos;de küçük bir ofiste başlayan yolculuğunda bugün sektörünün önde gelen firmalarından biri haline gelmiştir. Kurulduğumuz günden bu yana dürüstlük, güvenilirlik ve müşteri memnuniyeti ilkelerimizden ödün vermeden çalışıyoruz.
                  </p>
                  <p>
                    Modern tesislerimiz, dijital kantar sistemlerimiz ve geniş araç filomuzla İstanbul genelinde profesyonel hurda alım ve geri dönüşüm hizmeti sunuyoruz. T.C. Çevre ve Şehircilik Bakanlığı onaylı lisansımızla yasal mevzuata tam uyumlu faaliyet göstermekteyiz.
                  </p>
                  <p>
                    Her yıl binlerce ton metal hurdayı geri dönüşüme kazandırarak doğal kaynakların korunmasına, enerji tasarrufuna ve sürdürülebilir bir geleceğe katkıda bulunuyoruz.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="left">
              <div className="relative pl-8 border-l-2 border-accent/20 space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
                    <span className="text-accent text-sm font-bold">{item.year}</span>
                    <h3 className="text-lg font-semibold text-primary mt-0.5">{item.title}</h3>
                    <p className="text-sm text-muted mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 md:py-28 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Target size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Misyonumuz</h3>
                <p className="text-muted leading-relaxed">{CORPORATE_VALUES.mission}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Eye size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Vizyonumuz</h3>
                <p className="text-muted leading-relaxed">{CORPORATE_VALUES.vision}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Award size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Kalite Politikamız</h3>
                <p className="text-muted leading-relaxed">{CORPORATE_VALUES.quality}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Leaf size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Çevre Politikamız</h3>
                <p className="text-muted leading-relaxed">{CORPORATE_VALUES.environment}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
