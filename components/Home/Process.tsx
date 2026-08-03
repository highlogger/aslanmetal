'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function Process() {
  return (
    <SectionWrapper className="bg-surface/30">
      <SectionTitle
        label="Çalışma Süreci"
        title="Hurdanızı Nasıl Değerlendiriyoruz?"
        description="6 adımda hurdanızın değerini keşfedin, profesyonel ve hızlı bir şekilde sürecinizi tamamlayın."
      />

      <div className="mt-16 relative">
        {/* Connection line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-0.5">
          <div className="h-full bg-gradient-to-r from-accent/5 via-accent/20 to-accent/5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-3">
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.08}>
              <div className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-accent/20 shadow-premium mb-4 mx-auto">
                  <span className="text-base font-bold text-accent">{step.step}</span>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center mb-2">
                    <ArrowDown size={18} className="text-accent/30" />
                  </div>
                )}

                <h3 className="text-sm font-semibold text-primary mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed max-w-[180px] mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
