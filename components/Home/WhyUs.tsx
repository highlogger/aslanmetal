'use client';

import { motion } from 'framer-motion';
import { Users, Zap, ShieldCheck, Scale, Gauge, Truck, MapPin, Globe, Leaf } from 'lucide-react';
import { WHY_US } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users, Zap, ShieldCheck, Scale, Gauge, Truck, MapPin, Globe, Leaf,
};

export default function WhyUs() {
  return (
    <SectionWrapper dark>
      <SectionTitle
        label="Neden Aslan Metal"
        title="Sektörde Fark Yaratan Yaklaşımımız"
        description="Güvenilirlik, hız ve profesyonellik ilkeleriyle sektörde öncü konumdayız."
        light
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {WHY_US.map((item, index) => {
          const Icon = iconMap[item.icon] || ShieldCheck;
          return (
            <ScrollReveal key={item.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 md:p-7 rounded-2xl border border-white/5 hover:border-accent/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
