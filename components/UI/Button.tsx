'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'phone';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: 'arrow' | 'phone' | 'whatsapp' | 'none';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/25',
  secondary:
    'bg-primary text-white hover:bg-secondary border border-white/10 hover:border-white/20',
  outline:
    'border border-accent text-accent hover:bg-accent hover:text-white',
  ghost:
    'text-muted hover:text-primary hover:bg-surface',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/20',
  phone:
    'bg-primary text-white hover:bg-secondary shadow-lg',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  className = '',
  disabled = false,
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;

  const content = (
    <motion.span
      className="inline-flex items-center gap-2"
      whileHover={{ x: icon !== 'none' ? 3 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {icon === 'phone' && <Phone size={size === 'lg' ? 18 : 16} />}
      {icon === 'whatsapp' && <MessageCircle size={size === 'lg' ? 18 : 16} />}
      {children}
      {icon === 'arrow' && <ArrowRight size={size === 'lg' ? 18 : 16} />}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.button>
  );
}
