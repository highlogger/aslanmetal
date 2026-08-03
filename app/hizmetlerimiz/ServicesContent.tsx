'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home, Scale, Recycle, Wrench, Truck, ClipboardCheck, Container, Ship, Building, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { SERVICES, SITE } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale, Recycle, Wrench, Truck, ClipboardCheck, Container, Ship, Building,
};

const serviceDetails: Record<string, string[]> = {
  'scrap-purchase': [
    'Her türlü metal hurdasının yerinde satın alınması',
    'Dijital kantar ile hassas tartım',
    'Anında nakit veya banka havalesi ile ödeme',
    'Güncel LME fiyatları üzerinden fiyatlandırma',
    'Fatura ve tartım fişi düzenlenmesi',
  ],
  'metal-recycling': [
    'Modern tesiste metal ayrıştırma',
    'Bakır, alüminyum, demir, paslanmaz ayrıştırması',
    'Presleme ve balyalama işlemleri',
    'Geri dönüşüm sertifikası düzenlenmesi',
    'Çevre mevzuatına tam uyumlu süreç',
  ],
  'factory-demolition': [
    'Komple fabrika ve tesis sökümü',
    'Çelik konstrüksiyon sökümü',
    'Makine ve ekipman sökümü',
    'Elektrik ve mekanik tesisat sökümü',
    'Saha temizliği ve atık yönetimi',
  ],
  'industrial-waste': [
    'Düzenli endüstriyel atık toplama',
    'Fabrika içi atık yönetim planı',
    'Üretim firesi ve hurda toplama',
    'Tehlikesiz atık taşıma ve bertaraf',
    'Aylık raporlama ve dokümantasyon',
  ],
  'onsite-inspection': [
    'Uzman ekip ile yerinde inceleme',
    'Hurda sınıflandırma ve değerlendirme',
    'Fotoğraflı ekspertiz raporu',
    'En doğru fiyat teklifi',
    'Aynı gün içinde keşif ve teklif',
  ],
  'container-service': [
    'İşletmeye uygun konteyner yerleştirme',
    'Doldukça değişim hizmeti',
    '7/24 konteyner değişim talebi',
    'Farklı ebatlarda konteyner seçenekleri',
    'Konteyner bakım ve temizliği',
  ],
  'logistics': [
    '20-40 ton kapasiteli kamyon ve tır filosu',
    'Vinçli araçlarla kolay yükleme',
    'İstanbul geneli hızlı nakliye',
    'GPS takip sistemli araçlar',
    'Sigortalı taşımacılık hizmeti',
  ],
  'post-demolition': [
    'Bina ve yapı yıkımı sonrası hurda toplama',
    'İnşaat demiri ve profil toplama',
    'Çatı ve cephe metali sökümü',
    'Betonarme demir ayrıştırma',
    'Komple saha temizliği',
  ],
};

export default function ServicesContent() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Hizmetlerimiz</li>
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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Neler Yapıyoruz</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Hizmetlerimiz</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Hurda alımından geri dönüşüme, fabrika sökümünden nakliyeye kadar tam kapsamlı endüstriyel çözümler.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Recycle;
              const details = serviceDetails[service.id] || [];
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={service.id}>
                  <div id={service.id} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start p-8 lg:p-10 rounded-3xl border border-border/50 bg-surface/20 hover:border-accent/10 transition-all duration-500 scroll-mt-24">
                    <div className={`lg:col-span-2 ${!isEven ? 'lg:order-last' : ''}`}>
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                        <Icon size={26} className="text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-primary mb-3">{service.title}</h2>
                      <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                      <a
                        href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors group"
                      >
                        Teklif Al <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="bg-white rounded-2xl p-6 border border-border/50">
                        <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Kapsam</h4>
                        <ul className="space-y-3">
                          {details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted">
                              <Check size={16} className="text-success flex-shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
