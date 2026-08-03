'use client';

import { motion } from 'framer-motion';
import {
  Coins, CircleDollarSign, Layers, HardHat, Shield, Gem,
  Hexagon, Weight, Cable, Battery, Cpu, Cog, Factory, Construction, Zap, ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { SCRAP_TYPES } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Coins, CircleDollarSign, Layers, HardHat, Shield, Gem,
  Hexagon, Weight, Cable, Battery, Cpu, Cog, Factory, Construction, Zap,
};

export default function ScrapTypesPreview() {
  return (
    <SectionWrapper>
      <SectionTitle
        label="Hurda Çeşitleri"
        title="Satın Aldığımız Metal Hurdalar"
        description="Bakırdan alüminyuma, kablodan elektronik atığa kadar tüm metal türlerini yerinde değerinde satın alıyoruz."
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {SCRAP_TYPES.map((scrap, index) => {
          const Icon = iconMap[scrap.icon] || Coins;
          return (
            <ScrollReveal key={scrap.id} delay={index * 0.04}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl p-5 md:p-6 border border-border/50 hover:border-accent/30 hover:shadow-card transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={26} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {scrap.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-2">
                  {scrap.description}
                </p>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="text-xs font-medium text-accent">{scrap.price}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/hurda-cesitleri"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group"
        >
          Tüm Hurda Çeşitlerini Görüntüleyin
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
