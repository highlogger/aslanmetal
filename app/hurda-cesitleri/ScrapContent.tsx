'use client';

import { motion } from 'framer-motion';
import {
  ChevronRight, Home, Coins, CircleDollarSign, Layers, HardHat, Shield, Gem,
  Hexagon, Weight, Cable, Battery, Cpu, Cog, Factory, Construction, Zap,
  ArrowRight, Info, Phone,
} from 'lucide-react';
import Link from 'next/link';
import { SCRAP_TYPES, SITE } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Coins, CircleDollarSign, Layers, HardHat, Shield, Gem,
  Hexagon, Weight, Cable, Battery, Cpu, Cog, Factory, Construction, Zap,
};

const categoryColors: Record<string, string> = {
  copper: 'from-orange-500/10 to-orange-600/5 border-orange-500/20',
  brass: 'from-yellow-500/10 to-yellow-600/5 border-yellow-500/20',
  aluminum: 'from-slate-400/10 to-slate-500/5 border-slate-400/20',
  iron: 'from-zinc-500/10 to-zinc-600/5 border-zinc-500/20',
  stainless: 'from-slate-300/10 to-slate-400/5 border-slate-300/20',
  chrome: 'from-blue-400/10 to-blue-500/5 border-blue-400/20',
  zinc: 'from-gray-400/10 to-gray-500/5 border-gray-400/20',
  lead: 'from-purple-500/10 to-purple-600/5 border-purple-500/20',
  cable: 'from-red-500/10 to-amber-500/5 border-red-500/20',
  battery: 'from-green-500/10 to-green-600/5 border-green-500/20',
  electronic: 'from-cyan-500/10 to-cyan-600/5 border-cyan-500/20',
  machinery: 'from-stone-500/10 to-stone-600/5 border-stone-500/20',
  factory: 'from-neutral-500/10 to-neutral-600/5 border-neutral-500/20',
  construction: 'from-amber-500/10 to-amber-600/5 border-amber-500/20',
  industrial: 'from-teal-500/10 to-teal-600/5 border-teal-500/20',
};

export default function ScrapContent() {
  return (
    <>
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">Hurda Çeşitleri</li>
          </ol>
        </div>
      </nav>

      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Neler Alıyoruz</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">Satın Aldığımız Hurdalar</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Bakırdan alüminyuma, kablodan elektronik atığa kadar 15 farklı kategoride hurda alımı yapıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            <span className="px-4 py-2 bg-accent text-white text-xs font-medium rounded-full">Tümü</span>
            {SCRAP_TYPES.map((s) => (
              <span key={s.id} className="px-4 py-2 bg-surface text-muted hover:text-accent text-xs font-medium rounded-full cursor-pointer transition-colors">{s.name}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SCRAP_TYPES.map((scrap, index) => {
              const Icon = iconMap[scrap.icon] || Coins;
              const colorClass = categoryColors[scrap.id] || '';
              return (
                <ScrollReveal key={scrap.id} delay={index * 0.04}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className={`group relative p-6 md:p-7 rounded-2xl border bg-white hover:shadow-card transition-all duration-500 flex flex-col h-full ${colorClass}`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                        <Icon size={26} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{scrap.name}</h3>
                        <span className="text-xs font-medium text-accent">{scrap.price}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{scrap.description}</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-light transition-colors">
                        <Phone size={13} /> Fiyat Al
                      </a>
                      <Link href="/iletisim" className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors">
                        <Info size={13} /> Detay
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
