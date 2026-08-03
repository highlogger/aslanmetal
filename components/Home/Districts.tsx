'use client';

import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DISTRICT_SERVICE_AREAS } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function Districts() {
  return (
    <SectionWrapper className="bg-surface/30">
      <SectionTitle
        label="Hizmet Bölgeleri"
        title="İstanbul Genelinde Hizmetinizdeyiz"
        description="Anadolu ve Avrupa yakası dahil tüm ilçelerde hurda alım hizmeti."
      />

      <div className="mt-12">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {DISTRICT_SERVICE_AREAS.map((district, index) => (
              <motion.span
                key={district}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-full border border-border/50 text-sm text-muted hover:text-accent hover:border-accent/30 hover:shadow-sm transition-all duration-300 cursor-default"
              >
                <MapPin size={12} className="text-accent/50" />
                {district}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-light">
            İstanbul dışı büyük hacimli alımlar için de hizmet vermekteyiz.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
