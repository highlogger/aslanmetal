'use client';

import { motion } from 'framer-motion';
import { Truck, Ship, Anchor, Container, Car, Hammer } from 'lucide-react';
import { FLEET_VEHICLES } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Truck, Ship, Anchor, Container, Car, Hammer,
};

export default function Fleet() {
  return (
    <SectionWrapper>
      <SectionTitle
        label="Araç Filomuz"
        title="Modern Araç Filomuzla Hazırız"
        description="Her tonaja uygun geniş araç filomuz ile İstanbul genelinde hızlı ve güvenilir nakliye hizmeti."
      />

      <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {FLEET_VEHICLES.map((vehicle, index) => {
          const Icon = iconMap[vehicle.icon] || Truck;
          return (
            <ScrollReveal key={vehicle.name} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative bg-surface/30 rounded-2xl p-5 md:p-6 text-center border border-border/30 hover:border-accent/20 hover:shadow-premium transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors duration-300">
                  <Icon size={26} className="text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {vehicle.count}
                </div>
                <div className="text-sm font-medium text-primary mb-0.5">
                  {vehicle.name}
                </div>
                <div className="text-xs text-muted-light">
                  {vehicle.capacity}
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
