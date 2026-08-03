'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
  noPadding?: boolean;
}

export default function SectionWrapper({
  children,
  className = '',
  dark = false,
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${
        dark ? 'bg-primary text-white' : 'bg-white'
      } ${noPadding ? '' : 'py-20 md:py-28 lg:py-32'} ${className}`}
    >
      {dark && (
        <div className="absolute inset-0 metal-texture pointer-events-none" />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
