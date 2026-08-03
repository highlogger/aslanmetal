'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleScroll = useCallback(() => {
    if (isHome) {
      setScrolled(window.scrollY > 40);
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-premium py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-lg bg-accent transition-all duration-500" />
              <span className="relative text-lg font-black tracking-tighter text-white">
                AM
              </span>
            </div>
            <div className="hidden sm:block">
              <div className={`text-base font-bold tracking-tight leading-none transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}>
                Aslan Metal
              </div>
              <div className={`text-[10px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                scrolled ? 'text-muted' : 'text-white/60'
              }`}>
                Geri Dönüşüm
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-accent'
                      : scrolled
                        ? 'text-muted hover:text-primary'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Phone */}
            <a
              href={`tel:${SITE.phoneRaw}`}
              className={`hidden md:flex items-center gap-1.5 text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full ${
                scrolled
                  ? 'text-primary hover:bg-surface'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Phone size={15} className="text-accent" />
              <span className="hidden lg:inline">{SITE.phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>

            {/* CTA Button */}
            <Link
              href="/iletisim"
              className="hidden sm:inline-flex items-center text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20"
            >
              Teklif Al
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                scrolled ? 'text-primary hover:bg-surface' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="text-lg font-bold text-primary">Menü</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-surface transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3.5 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-primary hover:bg-surface'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-border space-y-3">
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white text-sm font-medium"
                >
                  <Phone size={16} />
                  {SITE.phone}
                </a>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white text-sm font-medium"
                >
                  <MessageCircle size={16} />
                  WhatsApp ile Teklif Al
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
