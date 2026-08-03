import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Kişisel Verilerin Korunması Kanunu kapsamında Aslan Metal aydınlatma metni ve veri işleme politikası.',
  alternates: { canonical: `${SITE.url}/kvkk` },
};

export default function KVKKPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Yasal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-4">KVKK Aydınlatma Metni</h1>
          <p className="mt-4 text-white/50">Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-gray max-w-none">
          <h2>Veri Sorumlusu</h2>
          <p>
            Aslan Metal olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
            kişisel verilerinizin işlenmesi ve korunması konusunda gerekli tüm tedbirleri almaktayız.
          </p>

          <h2>İşlenen Kişisel Veriler</h2>
          <p>
            İletişim formu ve WhatsApp üzerinden bizimle paylaştığınız aşağıdaki kişisel veriler işlenmektedir:
          </p>
          <ul>
            <li>Ad, soyad</li>
            <li>Telefon numarası</li>
            <li>E-posta adresi</li>
            <li>Firma adı ve adres bilgileri</li>
          </ul>

          <h2>Kişisel Verilerin İşlenme Amaçları</h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul>
            <li>Hurda alım teklifi hazırlanması ve iletilmesi</li>
            <li>İletişim faaliyetlerinin yürütülmesi</li>
            <li>Hizmet süreçlerinin planlanması</li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Müşteri memnuniyeti süreçlerinin yönetimi</li>
          </ul>

          <h2>Veri Güvenliği</h2>
          <p>
            Kişisel verileriniz, yetkisiz erişime karşı teknik ve idari tedbirler alınarak korunmaktadır.
          </p>

          <h2>Haklarınız</h2>
          <p>KVKK&apos;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse bilgi talep etme</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Kanuni şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
          </ul>

          <h2>İletişim</h2>
          <p>
            KVKK kapsamındaki talepleriniz için {SITE.email} adresine e-posta gönderebilir veya {SITE.phone} numaralı telefondan bize ulaşabilirsiniz.
          </p>

          <p className="text-sm text-muted-light mt-8">
            Son güncelleme tarihi: 1 Temmuz 2025
          </p>
        </div>
      </section>
    </>
  );
}
