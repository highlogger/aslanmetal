import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES, BLOG_POSTS, DISTRICT_SERVICE_AREAS } from '@/lib/constants';

const footerLinks = {
  kurumsal: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Misyon & Vizyon', href: '/kurumsal' },
    { label: 'Kalite Politikası', href: '/kurumsal' },
    { label: 'Sertifikalar', href: '/kurumsal' },
    { label: 'Blog', href: '/blog' },
    { label: 'SSS', href: '/sss' },
  ],
  hizmetler: SERVICES.slice(0, 6).map((s) => ({ label: s.title, href: '/hizmetlerimiz' })),
  legal: [
    { label: 'KVKK Aydınlatma Metni', href: '/kvkk' },
    { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
    { label: 'Çerez Politikası', href: '/cerez-politikasi' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-white text-lg font-black tracking-tighter">AM</span>
              </div>
              <div>
                <div className="text-base font-bold tracking-tight">Aslan Metal</div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-white/40">Geri Dönüşüm</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              İstanbul genelinde her türlü metal hurdasını yerinde değerinde satın alan, lisanslı ve profesyonel geri dönüşüm firması.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={14} className="text-accent" />
                </span>
                {SITE.phone}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-[#25D366] transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle size={14} className="text-[#25D366]" />
                </span>
                WhatsApp: {SITE.whatsapp}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={14} className="text-accent" />
                </span>
                {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-accent" />
                </span>
                <span>{SITE.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock size={14} className="text-accent" />
                </span>
                <span>{SITE.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-white">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="text-white/20 group-hover:text-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-white">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-1.5 group">
                    <ChevronRight size={12} className="text-white/20 group-hover:text-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmet Bölgeleri + Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-white">Hizmet Bölgeleri</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {DISTRICT_SERVICE_AREAS.slice(0, 12).map((district) => (
                <span key={district} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">
                  {district}
                </span>
              ))}
              <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full cursor-pointer hover:bg-accent/20 transition-colors">
                +27 ilçe
              </span>
            </div>

            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-white">Yasal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/40 hover:text-accent transition-colors text-xs">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Aslan Metal. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-white/20 text-xs">Designed with</span>
            <span className="text-accent text-xs">✦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
