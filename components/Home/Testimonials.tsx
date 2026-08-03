'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import SectionWrapper from '@/components/UI/SectionWrapper';
import SectionTitle from '@/components/UI/SectionTitle';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <SectionWrapper dark>
      <SectionTitle
        label="Müşteri Yorumları"
        title="Müşterilerimiz Ne Diyor?"
        description="Yıllardır güvenle çalıştığımız müşterilerimizin deneyimleri."
        light
      />

      <div ref={ref} className="mt-16 max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="relative bg-white/[0.03] border border-white/5 rounded-3xl p-8 md:p-12">
            <Quote size={40} className="text-accent/20 mb-6" />

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
            >
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </motion.p>

            <div className="flex items-center justify-between">
              <motion.div
                key={`author-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-semibold text-white">{TESTIMONIALS[current].name}</div>
                <div className="text-sm text-white/40">{TESTIMONIALS[current].company}</div>
                <div className="text-xs text-white/30 mt-0.5">{TESTIMONIALS[current].location}</div>
              </motion.div>

              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft size={18} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === current
                  ? 'bg-accent w-6'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
