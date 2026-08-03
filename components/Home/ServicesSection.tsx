'use client';

import { motion } from 'framer-motion';
import {
  Scale, Recycle, Wrench, Truck, ClipboardCheck, Container,
  Ship, Building, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale, Recycle, Wrench, Truck, ClipboardCheck, Container, Ship, Building,
};

export default function ServicesSection() {
  return (
    <SectionWrapper className="bg-surface/50">
      <SectionTitle
        label="Hizmetlerimiz"
        title="Endüstriyel Hurda Yönetiminde Tam Kapsamlı Çözümler"
        description="Hurda alımından geri dönüşüme, fabrika sökümünden nakliyeye kadar tüm süreçlerde profesyonel hizmet sunuyoruz."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon] || Recycle;
          return (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-500 cursor-pointer h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Icon size={22} className="text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2.5 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/hizmetlerimiz#${service.id}`}
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                >
                  Detay <ArrowRight size={12} />
                </Link>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/hizmetlerimiz"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group"
        >
          Tüm Hizmetlerimizi Keşfedin
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
