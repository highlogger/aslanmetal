'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {label && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
            light ? 'text-accent' : 'text-accent'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-white/60' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
