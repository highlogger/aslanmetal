import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Aslan Metal gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.',
  alternates: { canonical: `${SITE.url}/gizlilik-politikasi` },
};

export default function GizlilikPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Yasal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-4">Gizlilik Politikası</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-gray max-w-none">
          <p>
            Aslan Metal olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine önem vermekteyiz.
            Bu gizlilik politikası, sitemiz üzerinden toplanan bilgilerin nasıl kullanıldığını açıklamaktadır.
          </p>

          <h2>Toplanan Bilgiler</h2>
          <p>Web sitemiz üzerinden aşağıdaki bilgiler toplanabilir:</p>
          <ul>
            <li>İletişim formu aracılığıyla paylaştığınız kişisel bilgiler</li>
            <li>Site kullanım istatistikleri (çerezler aracılığıyla)</li>
            <li>Teknik tarayıcı bilgileri</li>
          </ul>

          <h2>Bilgilerin Kullanımı</h2>
          <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
          <ul>
            <li>Hizmet taleplerinizin karşılanması</li>
            <li>Size fiyat teklifi sunulması</li>
            <li>Web sitesi deneyiminin iyileştirilmesi</li>
          </ul>

          <h2>Çerezler</h2>
          <p>
            Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır.
            Tarayıcı ayarlarınızdan çerezleri yönetebilir veya devre dışı bırakabilirsiniz.
          </p>

          <h2>Üçüncü Taraflarla Paylaşım</h2>
          <p>
            Kişisel bilgileriniz, yasal zorunluluklar haricinde üçüncü taraflarla paylaşılmamaktadır.
          </p>

          <h2>İletişim</h2>
          <p>Gizlilik politikamız hakkında sorularınız için:</p>
          <p>E-posta: {SITE.email}</p>
          <p>Telefon: {SITE.phone}</p>

          <p className="text-sm text-muted-light mt-8">Son güncelleme: 1 Temmuz 2025</p>
        </div>
      </section>
    </>
  );
}
