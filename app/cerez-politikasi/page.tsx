import type { Metadata } from 'next';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'Aslan Metal çerez politikası. Web sitemizde kullanılan çerez türleri ve çerez tercihlerinizi nasıl yöneteceğiniz hakkında bilgi.',
  alternates: { canonical: `${SITE.url}/cerez-politikasi` },
};

export default function CerezPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 metal-texture" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Yasal</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-4">Çerez Politikası</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-gray max-w-none">
          <h2>Çerez Nedir?</h2>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza gönderilen ve cihazınızda depolanan küçük metin dosyalarıdır. Çerezler, web sitesinin sizi tanımasına, tercihlerinizi hatırlamasına ve genel kullanıcı deneyimini iyileştirmesine yardımcı olur.
          </p>

          <h2>Kullandığımız Çerez Türleri</h2>

          <h3>Zorunlu Çerezler</h3>
          <p>Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bunlar genellikle yalnızca sizin işlemlerinizi gerçekleştirmek için ayarlanır.</p>

          <h3>Performans ve Analitik Çerezleri</h3>
          <p>Ziyaretçilerin web sitesiyle nasıl etkileşime girdiğini anlamamıza yardımcı olan çerezlerdir. Bu bilgiler, site performansını ve kullanıcı deneyimini iyileştirmek için kullanılır.</p>

          <h3>İşlevsellik Çerezleri</h3>
          <p>Web sitesinin gelişmiş işlevsellik ve kişiselleştirme sağlamasına olanak tanır. Tercihlerinizi hatırlamak için kullanılır.</p>

          <h2>Çerezleri Yönetme</h2>
          <p>
            Çoğu web tarayıcısı, çerezleri otomatik olarak kabul eder. Çerezleri devre dışı bırakmak veya reddetmek için tarayıcınızın ayarlarını değiştirebilirsiniz.
          </p>
          <p>Çerezleri yönetmek için tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya çerez gönderildiğinde uyarı almayı seçebilirsiniz.</p>

          <h2>İletişim</h2>
          <p>Çerez politikamız hakkında sorularınız için {SITE.email} adresinden bize ulaşabilirsiniz.</p>

          <p className="text-sm text-muted-light mt-8">Son güncelleme: 1 Temmuz 2025</p>
        </div>
      </section>
    </>
  );
}
