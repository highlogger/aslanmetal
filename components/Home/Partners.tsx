'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Landmark, ShieldCheck } from 'lucide-react';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

const partners = [
  { name: 'Sanayi Holding', type: 'Kurumsal İş Ortağı', icon: Building2 },
  { name: 'Demir Çelik A.Ş.', type: 'Endüstriyel Partner', icon: Factory },
  { name: 'İstanbul Belediyesi', type: 'Kurumsal Referans', icon: Landmark },
  { name: 'TSE Belgeli', type: 'Kalite Sertifikası', icon: ShieldCheck },
];

export default function Partners() {
  return (
    <SectionWrapper className="bg-white">
      <SectionTitle
        label="İş Ortaklarımız & Sertifikalar"
        title="Güven Veren Referanslarımız"
        description="Kurumsal iş ortaklarımız ve sahip olduğumuz kalite belgeleri."
      />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {partners.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <ScrollReveal key={partner.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-surface/30 text-center hover:border-accent/20 hover:bg-surface/50 transition-all duration-500"
              >
                <Icon size={32} className="text-accent/40 group-hover:text-accent/70 transition-colors duration-300 mx-auto mb-4" />
                <div className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {partner.name}
                </div>
                <div className="text-xs text-muted-light mt-1">{partner.type}</div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
