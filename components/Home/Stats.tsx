'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Recycle, Building } from 'lucide-react';
import CountUp from '@/components/UI/CountUp';

const stats = [
  { icon: Clock, value: 20, suffix: '+', label: 'Yıllık Deneyim', description: 'Sektörde güvenle' },
  { icon: Users, value: 10000, suffix: '+', label: 'Mutlu Müşteri', description: 'Memnuniyetle hizmet' },
  { icon: Recycle, value: 250000, suffix: '+', label: 'Ton Geri Dönüşüm', description: 'Çevreye katkı' },
  { icon: Building, value: 724, prefix: '7/24', suffix: '', label: 'Hizmet', description: 'Kesintisiz destek' },
];

export default function Stats() {
  return (
    <section id="stats" className="relative -mt-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/50">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-10 md:py-14 px-4 md:px-6 text-center first:border-l-0 border-l border-border/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-4">
                  <Icon size={22} className="text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-2">
                  {stat.prefix ? (
                    <span>{stat.prefix}</span>
                  ) : (
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm font-medium text-primary mb-1">{stat.label}</div>
                <div className="text-xs text-muted-light">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
