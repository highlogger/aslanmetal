'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight, Home, Phone, Mail, MapPin, Clock, MessageCircle,
  Send, Check,
} from 'lucide-react';
import Link from 'next/link';
import { SITE } from '@/lib/constants';
import ScrollReveal from '@/components/UI/ScrollReveal';

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <nav className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-muted-light">
            <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-1"><Home size={14} />Anasayfa</Link></li>
            <li><ChevronRight size={14} /></li>
            <li className="text-primary font-medium">İletişim</li>
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
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Bize Ulaşın</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">İletişim</h1>
            <p className="mt-5 text-lg text-white/50 leading-relaxed">
              Hurda fiyat teklifi almak veya hizmetlerimiz hakkında bilgi edinmek için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">İletişim Bilgileri</h2>
                <div className="space-y-5">
                  <motion.a
                    href={`tel:${SITE.phoneRaw}`}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Phone size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light mb-0.5">Telefon</div>
                      <div className="text-base font-semibold text-primary">{SITE.phone}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/${SITE.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={20} className="text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light mb-0.5">WhatsApp</div>
                      <div className="text-base font-semibold text-primary">{SITE.whatsapp}</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`mailto:${SITE.email}`}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light mb-0.5">E-posta</div>
                      <div className="text-base font-semibold text-primary">{SITE.email}</div>
                    </div>
                  </motion.a>

                  <div className="flex items-start gap-4 p-4 rounded-xl group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light mb-0.5">Adres</div>
                      <div className="text-base font-semibold text-primary">{SITE.fullAddress}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light mb-0.5">Çalışma Saatleri</div>
                      <div className="text-base font-semibold text-primary">{SITE.workingHours}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-surface/30 rounded-3xl p-8 md:p-10 border border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-2">Teklif Formu</h2>
                <p className="text-sm text-muted mb-8">
                  Hurdanız hakkında bilgi verin, size en kısa sürede fiyat teklifi sunalım.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <Check size={28} className="text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Mesajınız Alındı!</h3>
                    <p className="text-muted text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Ad Soyad *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">Telefon *</label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">E-posta</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                        placeholder="email@ornek.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Hurda Türü</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all">
                        <option value="">Seçiniz</option>
                        <option>Bakır Hurda</option>
                        <option>Alüminyum Hurda</option>
                        <option>Demir Hurda</option>
                        <option>Paslanmaz Hurda</option>
                        <option>Kablo Hurda</option>
                        <option>Elektronik Atık</option>
                        <option>Makine Hurda</option>
                        <option>Fabrika Sökümü</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Tahmini Miktar</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                        placeholder="Örn: 500 kg / 2 ton"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">Mesajınız</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-primary placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                        placeholder="Hurda hakkında ek bilgiler..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-accent text-white font-medium py-3.5 rounded-full hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer"
                    >
                      Gönder <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="w-full h-[400px] bg-surface/30 relative">
        <iframe
          src={SITE.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aslan Metal Konum"
          className="absolute inset-0"
        />
      </section>
    </>
  );
}
