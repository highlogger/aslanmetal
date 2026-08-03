// ============================================
// ASLAN METAL — Site Constants
// ============================================

export const SITE = {
  name: 'Aslan Metal',
  tagline: 'Metal Geri Dönüşümde Güvenilir Çözüm Ortağınız',
  description:
    'İstanbul genelinde her türlü metal hurdasını yerinde değerinde satın alan, hızlı ödeme ve profesyonel hizmet sunan lisanslı geri dönüşüm firması.',
  url: 'https://www.aslanmetal.com.tr',
  ogImage: '/images/og-image.jpg',
  locale: 'tr_TR',
  phone: '+90 (216) 123 45 67',
  phoneRaw: '+902161234567',
  whatsapp: '+905551234567',
  email: 'info@aslanmetal.com.tr',
  address: 'Sancaktepe / İstanbul',
  fullAddress: 'Sancaktepe Mahallesi, Sanayi Caddesi No: 123, 34000 Sancaktepe / İstanbul',
  workingHours: 'Pazartesi - Cumartesi: 08:00 - 19:00',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.5!2d29.23!3d41.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzM2LjAiTiAyOcKwMTMnNDguMCJF!5e0!3m2!1str!2str!4v1234567890',
  social: {
    facebook: 'https://facebook.com/aslanmetal',
    instagram: 'https://instagram.com/aslanmetal',
    linkedin: 'https://linkedin.com/company/aslanmetal',
    youtube: 'https://youtube.com/@aslanmetal',
  },
};

export const NAV_LINKS = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Kurumsal', href: '/kurumsal' },
  { label: 'Hizmetler', href: '/hizmetlerimiz' },
  { label: 'Hurda Çeşitleri', href: '/hurda-cesitleri' },
  { label: 'Blog', href: '/blog' },
];

export const SERVICES = [
  {
    id: 'scrap-purchase',
    title: 'Hurda Alımı',
    description: 'Her türlü metal hurdanızı yerinde ekspertiz ile değerinde satın alıyor, anında ödeme yapıyoruz.',
    icon: 'Scale',
  },
  {
    id: 'metal-recycling',
    title: 'Metal Geri Dönüşüm',
    description: 'Topladığımız metalleri modern tesisimizde ayrıştırarak geri dönüşüm sürecine kazandırıyoruz.',
    icon: 'Recycle',
  },
  {
    id: 'factory-demolition',
    title: 'Fabrika Sökümü',
    description: 'Profesyonel ekibimiz ve iş makinelerimizle fabrika, tesis ve endüstriyel alanların komple sökümünü yapıyoruz.',
    icon: 'Wrench',
  },
  {
    id: 'industrial-waste',
    title: 'Sanayi Atığı Toplama',
    description: 'Fabrika ve sanayi tesislerinden düzenli olarak endüstriyel atık ve hurda toplama hizmeti sunuyoruz.',
    icon: 'Truck',
  },
  {
    id: 'onsite-inspection',
    title: 'Yerinde Ekspertiz',
    description: 'Uzman ekibimiz hurdanızı yerinde inceleyerek en doğru fiyatlandırmayı yapmaktadır.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'container-service',
    title: 'Konteyner Hizmeti',
    description: 'İşletmenize özel hurda konteynerleri yerleştiriyor, doldukça değiştiriyoruz.',
    icon: 'Container',
  },
  {
    id: 'logistics',
    title: 'Nakliye',
    description: 'Geniş araç filomuzla İstanbul genelinde hızlı ve güvenilir hurda nakliye hizmeti sunuyoruz.',
    icon: 'Ship',
  },
  {
    id: 'post-demolition',
    title: 'Yıkım Sonrası Hurda Toplama',
    description: 'Bina ve yapı yıkımları sonrası ortaya çıkan tüm metal hurdaların toplanması ve saha temizliği.',
    icon: 'Building',
  },
];

export const SCRAP_TYPES = [
  { id: 'copper', name: 'Bakır Hurda', image: '/images/scrap/copper.jpg', icon: 'Coins', price: 'Güncel fiyat için arayın', description: 'Saf bakır, lama bakır, bobin bakır, kırkambar bakır, yanık bakır çeşitleri alınır.' },
  { id: 'brass', name: 'Sarı Hurda', image: '/images/scrap/brass.jpg', icon: 'CircleDollarSign', price: 'Güncel fiyat için arayın', description: 'Pirinç, sarı hurda, çinko karışımlı metaller değerinde alınır.' },
  { id: 'aluminum', name: 'Alüminyum Hurda', image: '/images/scrap/aluminum.jpg', icon: 'Layers', price: 'Güncel fiyat için arayın', description: 'Profil, levha, folyo, kablo alüminyum, döküm alüminyum çeşitleri.' },
  { id: 'iron', name: 'Demir Hurda', image: '/images/scrap/iron.jpg', icon: 'HardHat', price: 'Güncel fiyat için arayın', description: 'İnşaat demiri, profil, sac, döküm, pik, talas demir ve tüm demir türleri.' },
  { id: 'stainless', name: 'Paslanmaz Hurda', image: '/images/scrap/stainless.jpg', icon: 'Shield', price: 'Güncel fiyat için arayın', description: '304 ve 316 kalite paslanmaz çelik, paslanmaz sac ve profil alımı yapılır.' },
  { id: 'chrome', name: 'Krom Hurda', image: '/images/scrap/chrome.jpg', icon: 'Gem', price: 'Güncel fiyat için arayın', description: 'Endüstriyel krom parçalar, krom kaplı metaller değerinde satın alınır.' },
  { id: 'zinc', name: 'Çinko Hurda', image: '/images/scrap/zinc.jpg', icon: 'Hexagon', price: 'Güncel fiyat için arayın', description: 'Külçe çinko, levha çinko, çatı çinkosu ve tüm çinko türevleri.' },
  { id: 'lead', name: 'Kurşun Hurda', image: '/images/scrap/lead.jpg', icon: 'Weight', price: 'Güncel fiyat için arayın', description: 'Akü kurşunu, levha kurşun, boru kurşun ve endüstriyel kurşun alımı.' },
  { id: 'cable', name: 'Kablo Hurda', image: '/images/scrap/cable.jpg', icon: 'Cable', price: 'Güncel fiyat için arayın', description: 'Enerji kabloları, data kabloları, bakır ve alüminyum kablo çeşitleri alınır.' },
  { id: 'battery', name: 'Akü Hurda', image: '/images/scrap/battery.jpg', icon: 'Battery', price: 'Güncel fiyat için arayın', description: 'Araç aküleri, endüstriyel aküler, UPS aküleri hurda olarak satın alınır.' },
  { id: 'electronic', name: 'Elektronik Atık', image: '/images/scrap/electronic.jpg', icon: 'Cpu', price: 'Güncel fiyat için arayın', description: 'Bilgisayar, sunucu, kart, işlemci ve tüm elektronik atıklar değerinde alınır.' },
  { id: 'machinery', name: 'Makine Hurda', image: '/images/scrap/machinery.jpg', icon: 'Cog', price: 'Güncel fiyat için arayın', description: 'CNC, torna, pres, enjeksiyon ve tüm endüstriyel makinelerin hurda alımı.' },
  { id: 'factory', name: 'Fabrika Hurda', image: '/images/scrap/factory.jpg', icon: 'Factory', price: 'Güncel fiyat için arayın', description: 'Komple fabrika sökümü, tesis hurdası ve endüstriyel tesis alımı yapılır.' },
  { id: 'construction', name: 'İnşaat Hurda', image: '/images/scrap/construction.jpg', icon: 'Construction', price: 'Güncel fiyat için arayın', description: 'İnşaat demiri, çatı hurdası, profil ve tüm inşaat kaynaklı metal hurdalar.' },
  { id: 'industrial', name: 'Sanayi Atıkları', image: '/images/scrap/industrial.jpg', icon: 'Zap', price: 'Güncel fiyat için arayın', description: 'Her türlü sanayi atığı, üretim firesi ve endüstriyel metal atıklar alınır.' },
];

export const WHY_US = [
  { title: 'Profesyonel Ekip', description: 'Alanında uzman, deneyimli ve eğitimli kadromuzla hizmetinizdeyiz.', icon: 'Users' },
  { title: 'Hızlı Ödeme', description: 'Hurda tesliminde anında nakit veya banka havalesi ile ödeme yapıyoruz.', icon: 'Zap' },
  { title: 'Lisanslı Hizmet', description: 'Çevre ve Şehircilik Bakanlığı onaylı lisanslı geri dönüşüm firmasıyız.', icon: 'ShieldCheck' },
  { title: 'Şeffaf Fiyatlandırma', description: 'Güncel piyasa fiyatları üzerinden şeffaf ve adil fiyatlandırma politikası.', icon: 'Scale' },
  { title: 'Dijital Kantar', description: 'Kalibrasyonu düzenli yapılan dijital kantar sistemimizle hassas ölçüm.', icon: 'Gauge' },
  { title: 'Geniş Araç Filosu', description: 'Her tonaja uygun kamyon, tır ve vinçli araç filomuz mevcuttur.', icon: 'Truck' },
  { title: 'Yerinde Alım', description: 'İstanbul genelinde hurdanızı adresinizden teslim alıyoruz.', icon: 'MapPin' },
  { title: 'İstanbul Geneli Hizmet', description: 'Anadolu ve Avrupa yakası dahil İstanbul\'un tüm ilçelerinde hizmet.', icon: 'Globe' },
  { title: 'Çevre Dostu', description: 'Geri dönüşümle doğal kaynakları koruyor, karbon ayak izini azaltıyoruz.', icon: 'Leaf' },
];

export const PROCESS_STEPS = [
  { step: 1, title: 'İletişime Geçin', description: 'Telefon, WhatsApp veya iletişim formuyla bize ulaşın, hurda bilgilerinizi iletin.' },
  { step: 2, title: 'Yerinde Ekspertiz', description: 'Uzman ekibimiz adresinize gelerek hurdanızı yerinde inceler ve sınıflandırır.' },
  { step: 3, title: 'Fiyatlandırma', description: 'Güncel piyasa fiyatları üzerinden şeffaf bir fiyat teklifi sunuyoruz.' },
  { step: 4, title: 'Anlaşma', description: 'Fiyat onayınızın ardından sözleşme ile resmi süreci başlatıyoruz.' },
  { step: 5, title: 'Hurda Alımı', description: 'Araç filomuzla hurdanızı tartıyor ve nakliyesini gerçekleştiriyoruz.' },
  { step: 6, title: 'Anında Ödeme', description: 'Tartım fişi karşılığı nakit veya banka havalesi ile anında ödemenizi yapıyoruz.' },
];

export const DISTRICT_SERVICE_AREAS = [
  'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir',
  'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy',
  'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane',
  'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli',
  'Sultangazi', 'Şile', 'Şişli', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu',
];

export interface BlogLocation {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string; // 'İlçe' for districts, 'Sancaktepe Mahalle' for neighborhoods
  location: string; // The district or neighborhood name
  locationType: 'district' | 'neighborhood';
  parentDistrict?: string; // 'Sancaktepe' for neighborhoods, undefined for districts
  tags: string[];
  keywords: string[]; // SEO keywords specific to this location
  content: string; // HTML content for the blog detail page
}

// ============================================
// BLOG LOCATIONS — İstanbul İlçeleri (39) ve Sancaktepe Mahalleleri (21)
// ============================================

export const BLOG_LOCATIONS: BlogLocation[] = [
  // === İSTANBUL İLÇELERİ (39) ===
  {
    slug: 'adalar-hurda-alim',
    title: 'Adalar Hurda Alım | Adalar Hurda Fiyatları',
    excerpt:
      "Aslan Metal, İstanbul Adalar ilçesinde bakır, demir, alüminyum ve tüm metal hurda çeşitlerini yerinde satın alıyor. Adalar hurda alım hizmeti ve güncel hurda fiyatları için hemen bize ulaşın.",
    date: '2026-08-03',
    image: '/images/blog/locations/adalar-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Adalar',
    locationType: 'district',
    tags: ['Adalar hurda alım', 'Adalar hurda fiyatları', 'Adalar metal hurda'],
    keywords: [
      'Adalar hurda alım',
      'Adalar hurda fiyatları',
      'Adalar metal hurda',
      'Adalar demirci',
      'Adalar hurda',
      'Adalar geri dönüşüm',
      'İstanbul Adalar hurda',
    ],
    content: `<h2>Adalar Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un Adalar ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Adalar'da ev tadilatı, restoran ve otel yenileme çalışmaları ile ada sakinlerinin elinde biriken her türlü metal hurdayı değerinde satın alıyoruz. Adalara özel planlanan hizmet ağımız sayesinde hurdanız yerinde tartılır ve ödemeniz anında yapılır.</p>
<h3>Adalar'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Bakır hurda: soyma bakır, lama bakır, yanık bakır, kırkambar bakır</li>
<li>Alüminyum hurda: profil, levha, folyo ve döküm alüminyum</li>
<li>Demir hurda: inşaat demiri, profil, sac, döküm ve pik demir</li>
<li>Paslanmaz, krom, çinko ve kurşun hurda</li>
<li>Kablo hurdası, akü ve elektronik atık</li>
<li>Kombi, kazan, radyatör ve beyaz eşya hurdası</li>
</ul>
<h3>Adalar Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Adalar'a özel koordineli ve hızlı hizmet planlaması</li>
<li>Güncel piyasa fiyatları üzerinden şeffaf ve adil fiyatlandırma</li>
<li>Dijital kantar ile hassas tartım ve anında nakit/havale ödeme</li>
<li>Çevre ve Şehircilik Bakanlığı onaylı lisanslı geri dönüşüm firması</li>
</ul>
<h3>Adalar Hurda Fiyatları</h3>
<p>Hurda fiyatları uluslararası metal borsalarındaki günlük değişimlere göre belirlenir. Güncel Adalar hurda fiyatları için bizi arayın; hurda cinsi, miktarı ve durumuna göre en iyi teklifi sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67 numaralı telefonumuzdan veya WhatsApp hattımızdan hurda fotoğraflarınızı göndererek saatler içinde fiyat teklifi alabilirsiniz. Aslan Metal, Adalar'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'arnavutkoy-hurda-alim',
    title: 'Arnavutköy Hurda Alım | Arnavutköy Hurda Fiyatları',
    excerpt:
      "Arnavutköy'de hızlı ve güvenilir hurda alım hizmeti. Aslan Metal, Arnavutköy ilçesinde inşaat, fabrika ve ev hurdalarınızı yerinde değerinde satın alır.",
    date: '2026-08-02',
    image: '/images/blog/locations/arnavutkoy-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Arnavutköy',
    locationType: 'district',
    tags: ['Arnavutköy hurda alım', 'Arnavutköy hurda fiyatları', 'Arnavutköy inşaat hurdası'],
    keywords: [
      'Arnavutköy hurda alım',
      'Arnavutköy hurda fiyatları',
      'Arnavutköy metal hurda',
      'Arnavutköy demirci',
      'Arnavutköy hurda',
      'Arnavutköy geri dönüşüm',
      'İstanbul Arnavutköy hurda',
    ],
    content: `<h2>Arnavutköy Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un hızla gelişen ilçelerinden Arnavutköy'de profesyonel hurda alım hizmeti sunuyoruz. Hadımköy sanayi bölgesi, yeni konut projeleri ve İstanbul Havalimanı çevresindeki inşaat sahalarından çıkan demir ve metal hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Arnavutköy'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil, sac ve çatı hurdası</li>
<li>Bakır ve alüminyum kablo hurdası</li>
<li>Fabrika ve makine hurdası, sanayi atıkları</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Akü, kurşun ve elektronik atık</li>
<li>Komple tesis ve fabrika sökümü hurdası</li>
</ul>
<h3>Arnavutköy Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İnşaat sahalarına özel hızlı demontaj ve toplama ekibi</li>
<li>Geniş araç filosuyla her tonajda nakliye imkanı</li>
<li>Şeffaf tartım ve anında ödeme garantisi</li>
<li>Lisanslı, çevre mevzuatına tam uyumlu hizmet</li>
</ul>
<h3>Arnavutköy Hurda Fiyatları</h3>
<p>Güncel Arnavutköy hurda fiyatları için telefon veya WhatsApp üzerinden bize ulaşın. Hurda çeşidinizi ve tahmini miktarınızı iletin, en kısa sürede size özel fiyat teklifi sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Arnavutköy'de hurdanız değerinden fazla.</p>`,
  },
  {
    slug: 'atasehir-hurda-alim',
    title: 'Ataşehir Hurda Alım | Ataşehir Hurda Fiyatları',
    excerpt:
      "Ataşehir'de ofis, rezidans ve tadilat hurdalarınız için profesyonel çözüm. Aslan Metal Ataşehir hurda alım hizmetiyle kapınızda, fiyatlar güncel ve ödeme anında.",
    date: '2026-08-01',
    image: '/images/blog/locations/atasehir-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Ataşehir',
    locationType: 'district',
    tags: ['Ataşehir hurda alım', 'Ataşehir hurda fiyatları', 'Ataşehir tadilat hurdası'],
    keywords: [
      'Ataşehir hurda alım',
      'Ataşehir hurda fiyatları',
      'Ataşehir metal hurda',
      'Ataşehir demirci',
      'Ataşehir hurda',
      'Ataşehir geri dönüşüm',
      'İstanbul Ataşehir hurda',
    ],
    content: `<h2>Ataşehir Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un finans merkezi Ataşehir'de profesyonel hurda alım hizmeti sunuyoruz. Finans merkezindeki ofis binaları, rezidanslar ve tadilat sahalarından çıkan her türlü metal hurdayı yerinde değerinde satın alıyor, demontaj dahil komple hizmet veriyoruz.</p>
<h3>Ataşehir'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ofis demontajından çıkan demir, profil ve sac hurda</li>
<li>Bakır kablo, bobin ve boru hurdası</li>
<li>Alüminyum doğrama, profil ve levha</li>
<li>Klima, kombi, radyatör ve beyaz eşya hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Ataşehir Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Ofis ve rezidans demontajına uygun planlı hizmet</li>
<li>Aynı gün ekspertiz ve anında ödeme</li>
<li>Güncel piyasa fiyatlarıyla şeffaf fiyatlandırma</li>
<li>Lisanslı firma güvencesiyle resmi işlem</li>
</ul>
<h3>Ataşehir Hurda Fiyatları</h3>
<p>Hurda fiyatları günlük piyasa koşullarına göre değişir. Güncel Ataşehir hurda fiyatları için bizi arayın; hurda türü ve miktarınıza göre en avantajlı teklifi verelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Ataşehir'de hurdanız güvenle değerlensin.</p>`,
  },
  {
    slug: 'avcilar-hurda-alim',
    title: 'Avcılar Hurda Alım | Avcılar Hurda Fiyatları',
    excerpt:
      "Avcılar'da ev, işyeri ve atölye hurdalarınız değerinde alınır. Aslan Metal Avcılar hurda alım hizmetiyle sahil şeridinden sanayi sitelerine her yerde yanınızda.",
    date: '2026-07-31',
    image: '/images/blog/locations/avcilar-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Avcılar',
    locationType: 'district',
    tags: ['Avcılar hurda alım', 'Avcılar hurda fiyatları', 'Avcılar atölye hurdası'],
    keywords: [
      'Avcılar hurda alım',
      'Avcılar hurda fiyatları',
      'Avcılar metal hurda',
      'Avcılar demirci',
      'Avcılar hurda',
      'Avcılar geri dönüşüm',
      'İstanbul Avcılar hurda',
    ],
    content: `<h2>Avcılar Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Avcılar ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Konutlardan, sanayi sitelerindeki atölyelerden ve ticari işletmelerden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Avcılar'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Demir hurda: profil, sac, inşaat demiri, döküm</li>
<li>Bakır ve alüminyum kablo hurdası</li>
<li>Alüminyum doğrama ve profil hurdası</li>
<li>Atölye ve makine hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Akü, kurşun ve elektronik atık</li>
</ul>
<h3>Avcılar Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Mahalle mahalle planlanan hızlı servis ağı</li>
<li>Atölyelerinizden düzenli hurda toplama imkanı</li>
<li>Şeffaf tartım, anında nakit veya havale ödeme</li>
<li>Çevre ve Şehircilik Bakanlığı onaylı lisanslı hizmet</li>
</ul>
<h3>Avcılar Hurda Fiyatları</h3>
<p>Güncel Avcılar hurda fiyatlarını öğrenmek için bize telefon veya WhatsApp'tan ulaşın. Hurda bilgilerinizi iletin, en doğru fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Avcılar'da hurdanız çöpe değil, ekonomiye kazandırılsın.</p>`,
  },
  {
    slug: 'bagcilar-hurda-alim',
    title: 'Bağcılar Hurda Alım | Bağcılar Hurda Fiyatları',
    excerpt:
      "Bağcılar'da tekstil atölyeleri, imalathaneler ve konutlardan hurda alımı. Aslan Metal Bağcılar hurda fiyatları ve yerinde hurda toplama hizmeti için hazır.",
    date: '2026-07-30',
    image: '/images/blog/locations/bagcilar-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Bağcılar',
    locationType: 'district',
    tags: ['Bağcılar hurda alım', 'Bağcılar hurda fiyatları', 'Bağcılar sanayi hurdası'],
    keywords: [
      'Bağcılar hurda alım',
      'Bağcılar hurda fiyatları',
      'Bağcılar metal hurda',
      'Bağcılar demirci',
      'Bağcılar hurda',
      'Bağcılar geri dönüşüm',
      'İstanbul Bağcılar hurda',
    ],
    content: `<h2>Bağcılar Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un en yoğun nüfuslu ilçelerinden Bağcılar'da profesyonel hurda alım hizmeti sunuyoruz. Tekstil ve imalat atölyelerinin yoğun olduğu Bağcılar'da sanayi kaynaklı hurdalardan konut tadilatı hurdalarına kadar her türlü metali değerinde satın alıyoruz.</p>
<h3>Bağcılar'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Tekstil makinesi ve imalat atölyesi hurdası</li>
<li>Demir hurda: profil, sac, döküm ve inşaat demiri</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektrik motoru ve elektronik atık</li>
<li>Konteyner hizmeti ile düzenli sanayi hurdası toplama</li>
</ul>
<h3>Bağcılar Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Atölye ve imalathaneler için düzenli hurda toplama programı</li>
<li>İkitelli OSB'ye yakın konumumuzla hızlı lojistik</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Bağcılar Hurda Fiyatları</h3>
<p>Hurda fiyatlarımız günlük metal borsası verilerine göre belirlenir. Güncel Bağcılar hurda fiyatları için bizi arayın, atölyenizden veya evinizden hurda alımını aynı gün gerçekleştirelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Bağcılar'da hurdanıza en iyi fiyatı verir.</p>`,
  },
  {
    slug: 'bahcelievler-hurda-alim',
    title: 'Bahçelievler Hurda Alım | Bahçelievler Hurda Fiyatları',
    excerpt:
      "Bahçelievler'de ev tadilatı ve işyeri yenileme hurdalarınız yerinde alınır. Aslan Metal Bahçelievler hurda alım hizmeti ile anında ödeme, güncel fiyat garantisi.",
    date: '2026-07-29',
    image: '/images/blog/locations/bahcelievler-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Bahçelievler',
    locationType: 'district',
    tags: ['Bahçelievler hurda alım', 'Bahçelievler hurda fiyatları', 'Bahçelievler tadilat hurdası'],
    keywords: [
      'Bahçelievler hurda alım',
      'Bahçelievler hurda fiyatları',
      'Bahçelievler metal hurda',
      'Bahçelievler demirci',
      'Bahçelievler hurda',
      'Bahçelievler geri dönüşüm',
      'İstanbul Bahçelievler hurda',
    ],
    content: `<h2>Bahçelievler Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Bahçelievler ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Konut ağırlıklı yapısıyla öne çıkan Bahçelievler'de tadilat ve yenileme çalışmalarından çıkan kombi, kazan, demir ve bakır hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Bahçelievler'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Kombi, kazan, radyatör ve kalorifer hurdası</li>
<li>Demir hurda: profil, sac, inşaat demiri, döküm</li>
<li>Bakır boru, kablo ve tesisat hurdası</li>
<li>Alüminyum doğrama ve mutfak hurdası</li>
<li>Paslanmaz ve sarı hurda</li>
<li>Beyaz eşya ve elektronik atık</li>
</ul>
<h3>Bahçelievler Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Tadilat sahalarına özel aynı gün servis</li>
<li>Demontaj dahil komple hurda toplama hizmeti</li>
<li>Şeffaf tartım, anında nakit/havale ödeme</li>
<li>Lisanslı ve çevre dostu geri dönüşüm</li>
</ul>
<h3>Bahçelievler Hurda Fiyatları</h3>
<p>Güncel Bahçelievler hurda fiyatları için bize ulaşın. Hurda çeşidinizi bildirin, yerinde ekspertizle en doğru fiyatı sunalım ve aynı gün alımını gerçekleştirelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Bahçelievler'de hurdanız hızla değerlensin.</p>`,
  },
  {
    slug: 'bakirkoy-hurda-alim',
    title: 'Bakırköy Hurda Alım | Bakırköy Hurda Fiyatları',
    excerpt:
      "Bakırköy'de ofis, mağaza ve bina tadilatı hurdalarınız için profesyonel alım. Aslan Metal Bakırköy hurda fiyatları ve yerinde toplama hizmeti ile yanınızda.",
    date: '2026-07-28',
    image: '/images/blog/locations/bakirkoy-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Bakırköy',
    locationType: 'district',
    tags: ['Bakırköy hurda alım', 'Bakırköy hurda fiyatları', 'Bakırköy ofis hurdası'],
    keywords: [
      'Bakırköy hurda alım',
      'Bakırköy hurda fiyatları',
      'Bakırköy metal hurda',
      'Bakırköy demirci',
      'Bakırköy hurda',
      'Bakırköy geri dönüşüm',
      'İstanbul Bakırköy hurda',
    ],
    content: `<h2>Bakırköy Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Bakırköy ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Ticaret ve hizmet sektörünün merkezlerinden Bakırköy'de ofis, mağaza ve bina tadilatlarından çıkan demir, bakır ve alüminyum hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Bakırköy'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ofis demontajı hurdası: profil, sac, asma tavan rayları</li>
<li>Bakır kablo, boru ve bobin hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Klima, kombi ve elektronik atık</li>
<li>Paslanmaz ve krom hurda</li>
<li>İnşaat ve tadilat demir hurdası</li>
</ul>
<h3>Bakırköy Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Ticari alanlarda hızlı ve düzenli toplama</li>
<li>Demontaj ve temizlik dahil komple hizmet</li>
<li>Güncel piyasa fiyatlarıyla şeffaf teklif</li>
<li>Lisanslı firma güvencesi, anında ödeme</li>
</ul>
<h3>Bakırköy Hurda Fiyatları</h3>
<p>Hurda fiyatları günlük olarak güncellenir. Güncel Bakırköy hurda fiyatları için bizi arayın; hurda miktarınıza göre en avantajlı teklifi sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Bakırköy'de hurdanıza değer katar.</p>`,
  },
  {
    slug: 'basaksehir-hurda-alim',
    title: 'Başakşehir Hurda Alım | Başakşehir Hurda Fiyatları',
    excerpt:
      "Başakşehir'de yeni konut projeleri ve İkitelli OSB kaynaklı hurdalarınız yerinde alınır. Aslan Metal Başakşehir hurda alım ve hurda fiyatları hizmetiyle yanınızda.",
    date: '2026-07-27',
    image: '/images/blog/locations/basaksehir-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Başakşehir',
    locationType: 'district',
    tags: ['Başakşehir hurda alım', 'Başakşehir hurda fiyatları', 'Başakşehir inşaat hurdası'],
    keywords: [
      'Başakşehir hurda alım',
      'Başakşehir hurda fiyatları',
      'Başakşehir metal hurda',
      'Başakşehir demirci',
      'Başakşehir hurda',
      'Başakşehir geri dönüşüm',
      'İstanbul Başakşehir hurda',
    ],
    content: `<h2>Başakşehir Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Başakşehir ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Hızla büyüyen konut projeleri ve İkitelli OSB'ye komşu sanayi bölgeleri sayesinde Başakşehir'de inşaat ve fabrika kaynaklı yoğun hurda hacmi bulunuyor; biz de bu hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Başakşehir'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil, sac ve kalıp hurdası</li>
<li>Fabrika ve makine hurdası, sanayi atıkları</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve çinko hurda</li>
<li>Akü ve elektronik atık</li>
<li>Komple tesis sökümü ve konteyner hizmeti</li>
</ul>
<h3>Başakşehir Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İkitelli OSB'ye yakın konumumuzla çok hızlı lojistik</li>
<li>İnşaat ve sanayi sahalarına özel ekip</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Başakşehir Hurda Fiyatları</h3>
<p>Güncel Başakşehir hurda fiyatları için telefon veya WhatsApp'tan bize ulaşın. Büyük hacimli alımlarda daha avantajlı fiyat teklifleri sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Başakşehir'de hurdanız en iyi fiyatla değerlensin.</p>`,
  },
  {
    slug: 'bayrampasa-hurda-alim',
    title: 'Bayrampaşa Hurda Alım | Bayrampaşa Hurda Fiyatları',
    excerpt:
      "Bayrampaşa'da fabrika, depo ve tekstil atölyesi hurdalarınız değerinde alınır. Aslan Metal Bayrampaşa hurda alım hizmetiyle sanayi hurdanız yerinde toplanır.",
    date: '2026-07-26',
    image: '/images/blog/locations/bayrampasa-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Bayrampaşa',
    locationType: 'district',
    tags: ['Bayrampaşa hurda alım', 'Bayrampaşa hurda fiyatları', 'Bayrampaşa fabrika hurdası'],
    keywords: [
      'Bayrampaşa hurda alım',
      'Bayrampaşa hurda fiyatları',
      'Bayrampaşa metal hurda',
      'Bayrampaşa demirci',
      'Bayrampaşa hurda',
      'Bayrampaşa geri dönüşüm',
      'İstanbul Bayrampaşa hurda',
    ],
    content: `<h2>Bayrampaşa Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Bayrampaşa ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Gıda Çarşısı, tekstil atölyeleri ve eski sanayi bölgelerinin yoğun olduğu Bayrampaşa'da fabrika, depo ve imalathane kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Bayrampaşa'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Fabrika ve depo demontajı hurdası</li>
<li>Tekstil makinesi ve üretim hattı hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Bayrampaşa Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sanayi ve ticari işletmelere düzenli toplama programı</li>
<li>Komple fabrika sökümü ve saha temizliği</li>
<li>Güncel piyasa fiyatlarıyla şeffaf fiyatlandırma</li>
<li>Anında ödeme, lisanslı hizmet</li>
</ul>
<h3>Bayrampaşa Hurda Fiyatları</h3>
<p>Güncel Bayrampaşa hurda fiyatları için bizi arayın. Hurdanızın cinsi ve miktarına göre aynı gün ekspertiz yapıp en iyi fiyatı sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Bayrampaşa'da hurdanız güvenle ekonomiye kazandırılır.</p>`,
  },
  {
    slug: 'besiktas-hurda-alim',
    title: 'Beşiktaş Hurda Alım | Beşiktaş Hurda Fiyatları',
    excerpt:
      "Beşiktaş'ta ofis, villa ve işyeri tadilat hurdalarınız yerinde alınır. Aslan Metal Beşiktaş hurda alım hizmeti ile güncel fiyat ve anında ödeme garantisi.",
    date: '2026-07-25',
    image: '/images/blog/locations/besiktas-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Beşiktaş',
    locationType: 'district',
    tags: ['Beşiktaş hurda alım', 'Beşiktaş hurda fiyatları', 'Beşiktaş tadilat hurdası'],
    keywords: [
      'Beşiktaş hurda alım',
      'Beşiktaş hurda fiyatları',
      'Beşiktaş metal hurda',
      'Beşiktaş demirci',
      'Beşiktaş hurda',
      'Beşiktaş geri dönüşüm',
      'İstanbul Beşiktaş hurda',
    ],
    content: `<h2>Beşiktaş Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Beşiktaş ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Merkezi konumuyla ofislerin, işyerlerinin ve lüks konutların bulunduğu Beşiktaş'ta tadilat ve yenileme çalışmalarından çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Beşiktaş'ta Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ofis ve işyeri demontajı hurdası</li>
<li>Bakır boru, kablo ve tesisat hurdası</li>
<li>Demir hurda: profil, sac, korkuluk, döküm</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Kombi, kazan, radyatör hurdası</li>
<li>Paslanmaz, krom ve elektronik atık</li>
</ul>
<h3>Beşiktaş Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Merkezi ilçelerde hızlı ve düzenli hizmet</li>
<li>Demontaj ve saha temizliği dahil komple çözüm</li>
<li>Şeffaf tartım, anında nakit/havale ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Beşiktaş Hurda Fiyatları</h3>
<p>Güncel Beşiktaş hurda fiyatları için telefon veya WhatsApp'tan bize ulaşın. Hurdanızı gözünüzün önünde tartıyor, piyasanın en güncel fiyatını sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Beşiktaş'ta hurdanıza en değerli teklifi verir.</p>`,
  },
  {
    slug: 'beykoz-hurda-alim',
    title: 'Beykoz Hurda Alım | Beykoz Hurda Fiyatları',
    excerpt:
      "Beykoz'da villa tadilatı, eski fabrika ve konak restorasyonu hurdalarınız yerinde alınır. Aslan Metal Beykoz hurda alım hizmeti ve güncel fiyatlar için hazır.",
    date: '2026-07-24',
    image: '/images/blog/locations/beykoz-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Beykoz',
    locationType: 'district',
    tags: ['Beykoz hurda alım', 'Beykoz hurda fiyatları', 'Beykoz fabrika hurdası'],
    keywords: [
      'Beykoz hurda alım',
      'Beykoz hurda fiyatları',
      'Beykoz metal hurda',
      'Beykoz demirci',
      'Beykoz hurda',
      'Beykoz geri dönüşüm',
      'İstanbul Beykoz hurda',
    ],
    content: `<h2>Beykoz Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Beykoz ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Boğaz kıyısındaki villaların tadilatlarından eski sanayi tesislerinin sökümüne kadar Beykoz genelinde her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Beykoz'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Villa ve konak tadilatı demir hurdası</li>
<li>Eski fabrika ve atölye sökümü hurdası</li>
<li>Bakır, pirinç ve değerli metal hurdaları</li>
<li>Alüminyum ve paslanmaz hurda</li>
<li>Kazan, kombi ve kalorifer hurdası</li>
<li>Kablo, akü ve elektronik atık</li>
</ul>
<h3>Beykoz Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Geniş araç filosuyla ulaşılması zor noktalara hizmet</li>
<li>Restorasyon ve tadilat projelerine özel planlama</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı, çevreye duyarlı geri dönüşüm</li>
</ul>
<h3>Beykoz Hurda Fiyatları</h3>
<p>Hurda fiyatları günlük piyasa koşullarına göre değişir. Güncel Beykoz hurda fiyatları için bizi arayın; hurda türünüze göre en doğru teklifi sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Beykoz'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'beylikduzu-hurda-alim',
    title: 'Beylikdüzü Hurda Alım | Beylikdüzü Hurda Fiyatları',
    excerpt:
      "Beylikdüzü'nde konut, işyeri ve OSB kaynaklı hurdalarınız yerinde alınır. Aslan Metal Beylikdüzü hurda alım hizmeti ile güncel fiyat, hızlı servis.",
    date: '2026-07-23',
    image: '/images/blog/locations/beylikduzu-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Beylikdüzü',
    locationType: 'district',
    tags: ['Beylikdüzü hurda alım', 'Beylikdüzü hurda fiyatları', 'Beylikdüzü işyeri hurdası'],
    keywords: [
      'Beylikdüzü hurda alım',
      'Beylikdüzü hurda fiyatları',
      'Beylikdüzü metal hurda',
      'Beylikdüzü demirci',
      'Beylikdüzü hurda',
      'Beylikdüzü geri dönüşüm',
      'İstanbul Beylikdüzü hurda',
    ],
    content: `<h2>Beylikdüzü Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Beylikdüzü ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Yeni yerleşim bölgeleri, ticari merkezler ve Beylikdüzü OSB'den çıkan konut, işyeri ve sanayi kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Beylikdüzü'nde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve mağaza tadilatı hurdası</li>
<li>OSB'den çıkan makine ve fabrika hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Klima, kombi ve elektronik atık</li>
</ul>
<h3>Beylikdüzü Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>OSB ve ticari bölgelere düzenli hizmet ağı</li>
<li>Aynı gün ekspertiz ve yerinde alım</li>
<li>Şeffaf tartım, anında nakit/havale ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Beylikdüzü Hurda Fiyatları</h3>
<p>Güncel Beylikdüzü hurda fiyatları için bize telefon veya WhatsApp'tan ulaşın. Hurdanızın cinsi ve miktarına göre en avantajlı fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Beylikdüzü'nde hurdanız değerinde alınır.</p>`,
  },
  {
    slug: 'beyoglu-hurda-alim',
    title: 'Beyoğlu Hurda Alım | Beyoğlu Hurda Fiyatları',
    excerpt:
      "Beyoğlu'nda restorasyon, otel ve restoran tadilatı hurdalarınız yerinde alınır. Aslan Metal Beyoğlu hurda alım hizmetiyle bakır ve demir hurdanız değerinde.",
    date: '2026-07-22',
    image: '/images/blog/locations/beyoglu-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Beyoğlu',
    locationType: 'district',
    tags: ['Beyoğlu hurda alım', 'Beyoğlu hurda fiyatları', 'Beyoğlu restorasyon hurdası'],
    keywords: [
      'Beyoğlu hurda alım',
      'Beyoğlu hurda fiyatları',
      'Beyoğlu metal hurda',
      'Beyoğlu demirci',
      'Beyoğlu hurda',
      'Beyoğlu geri dönüşüm',
      'İstanbul Beyoğlu hurda',
    ],
    content: `<h2>Beyoğlu Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Beyoğlu ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Tarihi dokusu ve yoğun ticari hayatıyla öne çıkan Beyoğlu'nda restorasyon projelerinden, otel ve restoran yenilemelerinden çıkan bakır, demir ve alüminyum hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Beyoğlu'nda Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Restorasyon sahalarından çıkan demir ve döküm hurda</li>
<li>Bakır boru, tesisat ve kablo hurdası</li>
<li>Otel ve restoran demontajı hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Paslanmaz, krom ve pirinç hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Beyoğlu Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Merkezi konumdaki sahalara hızlı servis</li>
<li>Restorasyon projelerine özel demontaj ekibi</li>
<li>Güncel piyasa fiyatlarıyla şeffaf teklif</li>
<li>Anında ödeme ve lisanslı hizmet</li>
</ul>
<h3>Beyoğlu Hurda Fiyatları</h3>
<p>Hurda fiyatlarımız uluslararası metal borsalarındaki günlük verilere göre belirlenir. Güncel Beyoğlu hurda fiyatları için bizi arayın.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Beyoğlu'nda hurdanıza en iyi fiyatı verir.</p>`,
  },
  {
    slug: 'buyukcekmece-hurda-alim',
    title: 'Büyükçekmece Hurda Alım | Büyükçekmece Hurda Fiyatları',
    excerpt:
      "Büyükçekmece'de yazlık tadilatı, sanayi siteleri ve inşaat hurdalarınız yerinde alınır. Aslan Metal Büyükçekmece hurda alım hizmeti ile anında ödeme.",
    date: '2026-07-21',
    image: '/images/blog/locations/buyukcekmece-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Büyükçekmece',
    locationType: 'district',
    tags: ['Büyükçekmece hurda alım', 'Büyükçekmece hurda fiyatları', 'Büyükçekmece yazlık hurdası'],
    keywords: [
      'Büyükçekmece hurda alım',
      'Büyükçekmece hurda fiyatları',
      'Büyükçekmece metal hurda',
      'Büyükçekmece demirci',
      'Büyükçekmece hurda',
      'Büyükçekmece geri dönüşüm',
      'İstanbul Büyükçekmece hurda',
    ],
    content: `<h2>Büyükçekmece Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Büyükçekmece ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Sahil şeridi, yazlık bölgeler ve sanayi siteleriyle çeşitli bir yapıya sahip Büyükçekmece'de konut tadilatından sanayi kaynaklı hurdalara kadar her türlü metali yerinde değerinde satın alıyoruz.</p>
<h3>Büyükçekmece'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Yazlık ve konut tadilatı demir hurdası</li>
<li>Sanayi sitelerinden çıkan makine hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Kombi, kazan, radyatör hurdası</li>
<li>Paslanmaz, krom ve elektronik atık</li>
</ul>
<h3>Büyükçekmece Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sahil ve yazlık bölgeler dahil tüm ilçeye hizmet</li>
<li>Düzenli sanayi hurdası toplama programı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı, çevre dostu geri dönüşüm</li>
</ul>
<h3>Büyükçekmece Hurda Fiyatları</h3>
<p>Güncel Büyükçekmece hurda fiyatları için bize ulaşın. Hurdanızın fotoğrafını WhatsApp'tan gönderin, saatler içinde fiyat teklifinizi iletelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Büyükçekmece'de hurdanız değerinden fazlasını bulur.</p>`,
  },
  {
    slug: 'catalca-hurda-alim',
    title: 'Çatalca Hurda Alım | Çatalca Hurda Fiyatları',
    excerpt:
      "Çatalca'da fabrika, çiftlik ve geniş arazilerden hurda alımı. Aslan Metal Çatalca hurda alım hizmeti ile büyük hacimli hurdalarınız yerinde toplanır.",
    date: '2026-07-20',
    image: '/images/blog/locations/catalca-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Çatalca',
    locationType: 'district',
    tags: ['Çatalca hurda alım', 'Çatalca hurda fiyatları', 'Çatalca fabrika hurdası'],
    keywords: [
      'Çatalca hurda alım',
      'Çatalca hurda fiyatları',
      'Çatalca metal hurda',
      'Çatalca demirci',
      'Çatalca hurda',
      'Çatalca geri dönüşüm',
      'İstanbul Çatalca hurda',
    ],
    content: `<h2>Çatalca Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Çatalca ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Geniş arazileri, sanayi tesisleri ve çiftlikleriyle büyük hacimli hurda potansiyeli taşıyan Çatalca'da tesis, makine ve demir hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Çatalca'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Tesis ve makine hurdası, sanayi atıkları</li>
<li>Çiftlik ve tarım makinesi hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Komple fabrika sökümü hurdası</li>
<li>Paslanmaz, krom ve akü hurdası</li>
</ul>
<h3>Çatalca Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Büyük hacimli hurdalar için tır ve vinçli araç desteği</li>
<li>Komple tesis sökümü ve saha temizliği</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Çatalca Hurda Fiyatları</h3>
<p>Güncel Çatalca hurda fiyatları için telefon veya WhatsApp'tan bize ulaşın. Büyük miktarlı hurdalarınızda en avantajlı fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Çatalca'da hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'cekmekoy-hurda-alim',
    title: 'Çekmeköy Hurda Alım | Çekmeköy Hurda Fiyatları',
    excerpt:
      "Çekmeköy'de yeni konut projeleri ve tadilat hurdalarınız yerinde alınır. Aslan Metal Çekmeköy hurda alım hizmeti ile güncel fiyat ve anında ödeme.",
    date: '2026-07-19',
    image: '/images/blog/locations/cekmekoy-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Çekmeköy',
    locationType: 'district',
    tags: ['Çekmeköy hurda alım', 'Çekmeköy hurda fiyatları', 'Çekmeköy inşaat hurdası'],
    keywords: [
      'Çekmeköy hurda alım',
      'Çekmeköy hurda fiyatları',
      'Çekmeköy metal hurda',
      'Çekmeköy demirci',
      'Çekmeköy hurda',
      'Çekmeköy geri dönüşüm',
      'İstanbul Çekmeköy hurda',
    ],
    content: `<h2>Çekmeköy Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Çekmeköy ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Alemdağ ve rezidans projelerinin yoğun olduğu Çekmeköy'de yeni konut tadilatlarından ve inşaat sahalarından çıkan demir, bakır ve alüminyum hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Çekmeköy'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil, sac ve kalıp hurdası</li>
<li>Konut tadilatı demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Kombi, kazan, radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Çekmeköy Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İnşaat ve tadilat sahalarına aynı gün hizmet</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Güncel piyasa fiyatlarıyla rekabetçi teklif</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Çekmeköy Hurda Fiyatları</h3>
<p>Güncel Çekmeköy hurda fiyatları için bize telefon veya WhatsApp'tan ulaşın. Hurda çeşidinizi iletin, en doğru fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Çekmeköy'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'esenler-hurda-alim',
    title: 'Esenler Hurda Alım | Esenler Hurda Fiyatları',
    excerpt:
      "Esenler'de konut tadilatı ve ticari işletme hurdalarınız yerinde alınır. Aslan Metal Esenler hurda alım hizmeti ile anında ödeme, güncel hurda fiyatları.",
    date: '2026-07-18',
    image: '/images/blog/locations/esenler-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Esenler',
    locationType: 'district',
    tags: ['Esenler hurda alım', 'Esenler hurda fiyatları', 'Esenler tadilat hurdası'],
    keywords: [
      'Esenler hurda alım',
      'Esenler hurda fiyatları',
      'Esenler metal hurda',
      'Esenler demirci',
      'Esenler hurda',
      'Esenler geri dönüşüm',
      'İstanbul Esenler hurda',
    ],
    content: `<h2>Esenler Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Esenler ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Yoğun nüfusu ve hareketli ticaret hayatıyla bilinen Esenler'de konut tadilatlarından ve işletmelerden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Esenler'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Dükkan ve işyeri tadilatı hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Esenler Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Yoğun bölgelerde hızlı ve düzenli toplama</li>
<li>Demontaj dahil komple hurda hizmeti</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı, çevre dostu geri dönüşüm</li>
</ul>
<h3>Esenler Hurda Fiyatları</h3>
<p>Güncel Esenler hurda fiyatları için bizi arayın. Hurdanızın cinsi ve miktarına göre en avantajlı fiyatı aynı gün sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Esenler'de hurdanız değerinde alınır.</p>`,
  },
  {
    slug: 'esenyurt-hurda-alim',
    title: 'Esenyurt Hurda Alım | Esenyurt Hurda Fiyatları',
    excerpt:
      "Esenyurt'ta konut, sanayi ve ticari hurdalarınız için yüksek fiyat. Aslan Metal Esenyurt hurda alım hizmeti ile İstanbul'un en kalabalık ilçesinde yanınızdayız.",
    date: '2026-07-17',
    image: '/images/blog/locations/esenyurt-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Esenyurt',
    locationType: 'district',
    tags: ['Esenyurt hurda alım', 'Esenyurt hurda fiyatları', 'Esenyurt sanayi hurdası'],
    keywords: [
      'Esenyurt hurda alım',
      'Esenyurt hurda fiyatları',
      'Esenyurt metal hurda',
      'Esenyurt demirci',
      'Esenyurt hurda',
      'Esenyurt geri dönüşüm',
      'İstanbul Esenyurt hurda',
    ],
    content: `<h2>Esenyurt Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un en kalabalık ilçesi Esenyurt'ta profesyonel hurda alım hizmeti sunuyoruz. Kıraç sanayi bölgesi, konut siteleri ve ticari merkezlerden çıkan yoğun hurda hacmini yerinde değerinde satın alıyor, hızlı ve düzenli toplama hizmeti sunuyoruz.</p>
<h3>Esenyurt'ta Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Kıraç sanayi bölgesinden makine ve fabrika hurdası</li>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Akü, kurşun ve elektronik atık</li>
</ul>
<h3>Esenyurt Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Yoğun bölgede hızlı servis ve düzenli toplama ağı</li>
<li>Konteyner hizmetiyle işletmelere pratik çözüm</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Esenyurt Hurda Fiyatları</h3>
<p>Güncel Esenyurt hurda fiyatları için bize ulaşın. Büyük miktarlı hurdalarda daha avantajlı fiyat teklifleri sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Esenyurt'ta hurdanıza en iyi fiyatı verir.</p>`,
  },
  {
    slug: 'eyupsultan-hurda-alim',
    title: 'Eyüpsultan Hurda Alım | Eyüpsultan Hurda Fiyatları',
    excerpt:
      "Eyüpsultan'da fabrika, depo ve restorasyon hurdalarınız yerinde alınır. Aslan Metal Eyüpsultan hurda alım hizmeti ile güncel fiyat ve hızlı servis.",
    date: '2026-07-16',
    image: '/images/blog/locations/eyupsultan-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Eyüpsultan',
    locationType: 'district',
    tags: ['Eyüpsultan hurda alım', 'Eyüpsultan hurda fiyatları', 'Eyüpsultan fabrika hurdası'],
    keywords: [
      'Eyüpsultan hurda alım',
      'Eyüpsultan hurda fiyatları',
      'Eyüpsultan metal hurda',
      'Eyüpsultan demirci',
      'Eyüpsultan hurda',
      'Eyüpsultan geri dönüşüm',
      'İstanbul Eyüpsultan hurda',
    ],
    content: `<h2>Eyüpsultan Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Eyüpsultan ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Alibeyköy sanayi bölgesi ve tarihi dokusuyla öne çıkan Eyüpsultan'da fabrika, depo ve restorasyon kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Eyüpsultan'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Alibeyköy sanayi bölgesinden fabrika hurdası</li>
<li>Depo ve imalathane demontajı hurdası</li>
<li>Restorasyon sahalarından demir ve döküm hurda</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Eyüpsultan Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sanayi bölgelerine düzenli toplama programı</li>
<li>Komple fabrika sökümü ve saha temizliği</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Eyüpsultan Hurda Fiyatları</h3>
<p>Güncel Eyüpsultan hurda fiyatları için bizi telefon veya WhatsApp'tan arayın. Hurda bilgilerinizi iletin, en doğru fiyatı aynı gün sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Eyüpsultan'da hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'fatih-hurda-alim',
    title: 'Fatih Hurda Alım | Fatih Hurda Fiyatları',
    excerpt:
      "Fatih'te restorasyon, otel ve tarihi bina tadilatı hurdalarınız yerinde alınır. Aslan Metal Fatih hurda alım hizmeti ile bakır ve demir hurdanız değerinde.",
    date: '2026-07-15',
    image: '/images/blog/locations/fatih-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Fatih',
    locationType: 'district',
    tags: ['Fatih hurda alım', 'Fatih hurda fiyatları', 'Fatih restorasyon hurdası'],
    keywords: [
      'Fatih hurda alım',
      'Fatih hurda fiyatları',
      'Fatih metal hurda',
      'Fatih demirci',
      'Fatih hurda',
      'Fatih geri dönüşüm',
      'İstanbul Fatih hurda',
    ],
    content: `<h2>Fatih Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un tarihi yarımadası Fatih ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Restorasyon projeleri, oteller ve tarihi binaların yenileme çalışmalarından çıkan bakır, kurşun ve demir hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Fatih'te Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Tarihi bina restorasyonundan demir ve döküm hurda</li>
<li>Bakır boru, tesisat ve kurşun hurdası</li>
<li>Otel ve işyeri demontajı hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Paslanmaz, krom ve pirinç hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Fatih Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Restorasyon projelerine özel demontaj ekibi</li>
<li>Tarihi dokudaki dar alanlara uygun ekipman</li>
<li>Güncel piyasa fiyatlarıyla şeffaf teklif</li>
<li>Anında ödeme ve lisanslı hizmet</li>
</ul>
<h3>Fatih Hurda Fiyatları</h3>
<p>Hurda fiyatlarımız günlük metal borsası verilerine göre belirlenir. Güncel Fatih hurda fiyatları için bizi arayın; en iyi teklifi sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Fatih'te hurdanıza değer katar.</p>`,
  },
  {
    slug: 'gaziosmanpasa-hurda-alim',
    title: 'Gaziosmanpaşa Hurda Alım | Gaziosmanpaşa Hurda Fiyatları',
    excerpt:
      "Gaziosmanpaşa'da atölye, tekstil ve konut hurdalarınız yerinde alınır. Aslan Metal Gaziosmanpaşa hurda alım hizmeti ile düzenli toplama ve anında ödeme.",
    date: '2026-07-14',
    image: '/images/blog/locations/gaziosmanpasa-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Gaziosmanpaşa',
    locationType: 'district',
    tags: ['Gaziosmanpaşa hurda alım', 'Gaziosmanpaşa hurda fiyatları', 'Gaziosmanpaşa atölye hurdası'],
    keywords: [
      'Gaziosmanpaşa hurda alım',
      'Gaziosmanpaşa hurda fiyatları',
      'Gaziosmanpaşa metal hurda',
      'Gaziosmanpaşa demirci',
      'Gaziosmanpaşa hurda',
      'Gaziosmanpaşa geri dönüşüm',
      'İstanbul Gaziosmanpaşa hurda',
    ],
    content: `<h2>Gaziosmanpaşa Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Gaziosmanpaşa ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Sanayi mahalleleri, tekstil atölyeleri ve konut bölgelerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Gaziosmanpaşa'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Atölye ve tekstil makinesi hurdası</li>
<li>Konut tadilatı demir hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Demir hurda: profil, sac, döküm</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Gaziosmanpaşa Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Atölyelere düzenli hurda toplama programı</li>
<li>Hızlı ekspertiz ve aynı gün alım</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Gaziosmanpaşa Hurda Fiyatları</h3>
<p>Güncel Gaziosmanpaşa hurda fiyatları için bize ulaşın. Hurda cinsi ve miktarınıza göre en avantajlı fiyatı aynı gün sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Gaziosmanpaşa'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'gungoren-hurda-alim',
    title: 'Güngören Hurda Alım | Güngören Hurda Fiyatları',
    excerpt:
      "Güngören'de kombi, kazan ve tadilat hurdalarınız yerinde alınır. Aslan Metal Güngören hurda alım hizmeti ile güncel fiyat, anında ödeme garantisi.",
    date: '2026-07-13',
    image: '/images/blog/locations/gungoren-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Güngören',
    locationType: 'district',
    tags: ['Güngören hurda alım', 'Güngören hurda fiyatları', 'Güngören tadilat hurdası'],
    keywords: [
      'Güngören hurda alım',
      'Güngören hurda fiyatları',
      'Güngören metal hurda',
      'Güngören demirci',
      'Güngören hurda',
      'Güngören geri dönüşüm',
      'İstanbul Güngören hurda',
    ],
    content: `<h2>Güngören Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Güngören ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Konut yoğun yapısıyla bilinen Güngören'de tadilat ve yenileme çalışmalarından çıkan kombi, kazan, radyatör ve demir hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Güngören'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Kombi, kazan, radyatör ve kalorifer hurdası</li>
<li>Demir hurda: profil, sac, inşaat demiri</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Paslanmaz ve sarı hurda</li>
<li>Beyaz eşya ve elektronik atık</li>
</ul>
<h3>Güngören Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Tadilat sahalarına aynı gün servis</li>
<li>Demontaj dahil komple toplama hizmeti</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı, çevre dostu geri dönüşüm</li>
</ul>
<h3>Güngören Hurda Fiyatları</h3>
<p>Güncel Güngören hurda fiyatları için bizi telefon veya WhatsApp'tan arayın. En doğru fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal ile Güngören'de hurdanız hızla değerlensin.</p>`,
  },
  {
    slug: 'kadikoy-hurda-alim',
    title: 'Kadıköy Hurda Alım | Kadıköy Hurda Fiyatları',
    excerpt:
      "Kadıköy'de ev, işyeri ve restoran tadilatı hurdalarınız yerinde alınır. Aslan Metal Kadıköy hurda alım hizmeti ile güncel fiyat ve hızlı servis.",
    date: '2026-07-12',
    image: '/images/blog/locations/kadikoy-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Kadıköy',
    locationType: 'district',
    tags: ['Kadıköy hurda alım', 'Kadıköy hurda fiyatları', 'Kadıköy tadilat hurdası'],
    keywords: [
      'Kadıköy hurda alım',
      'Kadıköy hurda fiyatları',
      'Kadıköy metal hurda',
      'Kadıköy demirci',
      'Kadıköy hurda',
      'Kadıköy geri dönüşüm',
      'İstanbul Kadıköy hurda',
    ],
    content: `<h2>Kadıköy Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un Anadolu Yakası merkezi Kadıköy'de profesyonel hurda alım hizmeti sunuyoruz. Restoran, işyeri ve konut tadilatlarından çıkan her türlü metal hurdayı yerinde değerinde satın alıyor; günlük ve düzenli toplama hizmeti veriyoruz.</p>
<h3>Kadıköy'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Restoran ve işyeri demontajı hurdası</li>
<li>Konut tadilatı demir hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Paslanmaz mutfak ekipmanı hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Kadıköy Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Merkezi bölgede günlük hızlı servis</li>
<li>İşletmelere düzenli hurda toplama programı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Kadıköy Hurda Fiyatları</h3>
<p>Güncel Kadıköy hurda fiyatları için bizi arayın. Hurdanızın fotoğrafını WhatsApp'tan gönderin, saatler içinde fiyat teklifi alın.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Kadıköy'de hurdanıza en iyi fiyatı verir.</p>`,
  },
  {
    slug: 'kagithane-hurda-alim',
    title: 'Kağıthane Hurda Alım | Kağıthane Hurda Fiyatları',
    excerpt:
      "Kağıthane'de eski sanayi bölgesi ve yeni rezidans hurdalarınız yerinde alınır. Aslan Metal Kağıthane hurda alım hizmeti ile anında ödeme.",
    date: '2026-07-11',
    image: '/images/blog/locations/kagithane-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Kağıthane',
    locationType: 'district',
    tags: ['Kağıthane hurda alım', 'Kağıthane hurda fiyatları', 'Kağıthane inşaat hurdası'],
    keywords: [
      'Kağıthane hurda alım',
      'Kağıthane hurda fiyatları',
      'Kağıthane metal hurda',
      'Kağıthane demirci',
      'Kağıthane hurda',
      'Kağıthane geri dönüşüm',
      'İstanbul Kağıthane hurda',
    ],
    content: `<h2>Kağıthane Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Kağıthane ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Eski sanayi bölgesi ile dönüşüm projelerinin iç içe olduğu Kağıthane'de fabrika, depo ve yeni rezidans inşaatlarından çıkan hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Kağıthane'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Eski sanayi bölgesinden fabrika hurdası</li>
<li>İnşaat demiri, profil, sac ve kalıp hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Depo ve imalathane demontajı hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Kağıthane Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Dönüşüm projelerine özel hızlı demontaj ekibi</li>
<li>Geniş araç filosuyla hızlı lojistik</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Kağıthane Hurda Fiyatları</h3>
<p>Güncel Kağıthane hurda fiyatları için bize ulaşın. Büyük hacimli inşaat hurdalarında avantajlı fiyat teklifleri sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Kağıthane'de hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'kartal-hurda-alim',
    title: 'Kartal Hurda Alım | Kartal Hurda Fiyatları',
    excerpt:
      "Kartal'da sanayi siteleri ve konut hurdalarınız yerinde alınır. Aslan Metal Kartal hurda alım hizmeti ile güncel fiyat, hızlı ve güvenilir servis.",
    date: '2026-07-10',
    image: '/images/blog/locations/kartal-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Kartal',
    locationType: 'district',
    tags: ['Kartal hurda alım', 'Kartal hurda fiyatları', 'Kartal sanayi hurdası'],
    keywords: [
      'Kartal hurda alım',
      'Kartal hurda fiyatları',
      'Kartal metal hurda',
      'Kartal demirci',
      'Kartal hurda',
      'Kartal geri dönüşüm',
      'İstanbul Kartal hurda',
    ],
    content: `<h2>Kartal Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Kartal ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Sanayi siteleri ve konut bölgelerinin bir arada olduğu Kartal'da atölye, fabrika ve tadilat kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Kartal'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Sanayi sitesi atölye ve makine hurdası</li>
<li>Konut tadilatı demir hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Kartal Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sanayi sitelerine düzenli toplama programı</li>
<li>Aynı gün ekspertiz ve yerinde alım</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Kartal Hurda Fiyatları</h3>
<p>Güncel Kartal hurda fiyatları için bizi telefon veya WhatsApp'tan arayın. Hurda cinsinize göre en avantajlı fiyatı sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Kartal'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'kucukcekmece-hurda-alim',
    title: 'Küçükçekmece Hurda Alım | Küçükçekmece Hurda Fiyatları',
    excerpt:
      "Küçükçekmece'de İkitelli OSB ve sanayi siteleri hurdalarınız yerinde alınır. Aslan Metal Küçükçekmece hurda alım hizmeti ile yüksek fiyat.",
    date: '2026-07-09',
    image: '/images/blog/locations/kucukcekmece-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Küçükçekmece',
    locationType: 'district',
    tags: ['Küçükçekmece hurda alım', 'Küçükçekmece hurda fiyatları', 'Küçükçekmece sanayi hurdası'],
    keywords: [
      'Küçükçekmece hurda alım',
      'Küçükçekmece hurda fiyatları',
      'Küçükçekmece metal hurda',
      'Küçükçekmece demirci',
      'Küçükçekmece hurda',
      'Küçükçekmece geri dönüşüm',
      'İstanbul Küçükçekmece hurda',
    ],
    content: `<h2>Küçükçekmece Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Küçükçekmece ilçesinde profesyonel hurda alım hizmeti sunuyoruz. İkitelli OSB sınırındaki konumu ve sanayi siteleriyle Küçükçekmece'de fabrika, atölye ve konut kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Küçükçekmece'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İkitelli OSB kaynaklı fabrika ve makine hurdası</li>
<li>Sanayi sitesi atölye hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Konteyner hizmetiyle düzenli sanayi toplama</li>
</ul>
<h3>Küçükçekmece Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İkitelli OSB'ye komşu konumumuzla çok hızlı lojistik</li>
<li>Sanayi işletmelerine düzenli toplama programı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Küçükçekmece Hurda Fiyatları</h3>
<p>Güncel Küçükçekmece hurda fiyatları için bize ulaşın. Büyük hacimli sanayi hurdalarında en avantajlı fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Küçükçekmece'de hurdanıza en iyi fiyatı verir.</p>`,
  },
  {
    slug: 'maltepe-hurda-alim',
    title: 'Maltepe Hurda Alım | Maltepe Hurda Fiyatları',
    excerpt:
      "Maltepe'de konut tadilatı ve sanayi hurdalarınız yerinde alınır. Aslan Metal Maltepe hurda alım hizmeti ile güncel fiyat ve anında ödeme.",
    date: '2026-07-08',
    image: '/images/blog/locations/maltepe-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Maltepe',
    locationType: 'district',
    tags: ['Maltepe hurda alım', 'Maltepe hurda fiyatları', 'Maltepe tadilat hurdası'],
    keywords: [
      'Maltepe hurda alım',
      'Maltepe hurda fiyatları',
      'Maltepe metal hurda',
      'Maltepe demirci',
      'Maltepe hurda',
      'Maltepe geri dönüşüm',
      'İstanbul Maltepe hurda',
    ],
    content: `<h2>Maltepe Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Maltepe ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Konut bölgeleri ve Küçükyalı sanayi siteleriyle çeşitli bir yapıya sahip Maltepe'de tadilat ve sanayi kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Maltepe'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Küçükyalı sanayi sitelerinden makine hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Maltepe Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Konut ve sanayi bölgelerine hızlı servis</li>
<li>Demontaj dahil komple toplama hizmeti</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Maltepe Hurda Fiyatları</h3>
<p>Güncel Maltepe hurda fiyatları için bizi arayın. Hurda çeşidinizi iletin, en doğru fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Maltepe'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'pendik-hurda-alim',
    title: 'Pendik Hurda Alım | Pendik Hurda Fiyatları',
    excerpt:
      "Pendik'te Kimya OSB, tersaneler ve sanayi tesisleri hurdalarınız yerinde alınır. Aslan Metal Pendik hurda alım hizmeti ile büyük hacimli alım.",
    date: '2026-07-07',
    image: '/images/blog/locations/pendik-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Pendik',
    locationType: 'district',
    tags: ['Pendik hurda alım', 'Pendik hurda fiyatları', 'Pendik sanayi hurdası'],
    keywords: [
      'Pendik hurda alım',
      'Pendik hurda fiyatları',
      'Pendik metal hurda',
      'Pendik demirci',
      'Pendik hurda',
      'Pendik geri dönüşüm',
      'İstanbul Pendik hurda',
    ],
    content: `<h2>Pendik Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Pendik ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Kimya OSB, tersaneler ve sanayi sitelerinin yoğun olduğu Pendik'te büyük ölçekli fabrika, tesis ve makine hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Pendik'te Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Kimya OSB ve tersane kaynaklı hurda</li>
<li>Fabrika, tesis ve makine hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom, çinko ve kurşun hurda</li>
<li>Komple tesis sökümü ve konteyner hizmeti</li>
</ul>
<h3>Pendik Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Büyük ölçekli sanayi hurdalarına özel ekip</li>
<li>Tır ve vinçli araçlarla her tonajda nakliye</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Pendik Hurda Fiyatları</h3>
<p>Güncel Pendik hurda fiyatları için bize ulaşın. Büyük miktarlı sanayi hurdalarınızda en rekabetçi fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Pendik'te hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'sancaktepe-hurda-alim',
    title: 'Sancaktepe Hurda Alım | Sancaktepe Hurda Fiyatları',
    excerpt:
      "Sancaktepe'de Samandıra OSB ve tüm mahallelerde hurda alımı. Aslan Metal'in merkez ofisinin bulunduğu Sancaktepe'de hurda fiyatları için hemen arayın.",
    date: '2026-07-06',
    image: '/images/blog/locations/sancaktepe-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Sancaktepe',
    locationType: 'district',
    tags: ['Sancaktepe hurda alım', 'Sancaktepe hurda fiyatları', 'Sancaktepe demirci'],
    keywords: [
      'Sancaktepe hurda alım',
      'Sancaktepe hurda fiyatları',
      'Sancaktepe metal hurda',
      'Sancaktepe demirci',
      'Sancaktepe hurda',
      'Sancaktepe geri dönüşüm',
      'İstanbul Sancaktepe hurda',
    ],
    content: `<h2>Sancaktepe Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak merkez ofisimizin de bulunduğu Sancaktepe ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Samandıra OSB, sanayi siteleri ve 21 mahallenin tamamında konut, atölye ve fabrika kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Sancaktepe'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Samandıra OSB'den makine ve fabrika hurdası</li>
<li>Sanayi sitesi atölye hurdası</li>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom, çinko ve kurşun hurda</li>
<li>Elektronik atık, akü ve beyaz eşya hurdası</li>
</ul>
<h3>Sancaktepe Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Bölgede merkez ofisimizle en hızlı hizmet</li>
<li>Tüm mahallelere aynı gün servis</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Sancaktepe Hurda Fiyatları</h3>
<p>Güncel Sancaktepe hurda fiyatları için bizi arayın. Bölgedeki en rekabetçi fiyatları sunuyor, aynı gün yerinde alım gerçekleştiriyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Sancaktepe'de hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sariyer-hurda-alim',
    title: 'Sarıyer Hurda Alım | Sarıyer Hurda Fiyatları',
    excerpt:
      "Sarıyer'de Maslak ofisleri ve villa tadilatı hurdalarınız yerinde alınır. Aslan Metal Sarıyer hurda alım hizmeti ile güncel fiyat, hızlı servis.",
    date: '2026-07-05',
    image: '/images/blog/locations/sariyer-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Sarıyer',
    locationType: 'district',
    tags: ['Sarıyer hurda alım', 'Sarıyer hurda fiyatları', 'Sarıyer ofis hurdası'],
    keywords: [
      'Sarıyer hurda alım',
      'Sarıyer hurda fiyatları',
      'Sarıyer metal hurda',
      'Sarıyer demirci',
      'Sarıyer hurda',
      'Sarıyer geri dönüşüm',
      'İstanbul Sarıyer hurda',
    ],
    content: `<h2>Sarıyer Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Sarıyer ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Maslak iş merkezleri, Boğaz kıyısındaki villalar ve konut bölgelerinden çıkan ofis, tadilat ve demontaj hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Sarıyer'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Maslak ofis demontajı hurdası</li>
<li>Villa tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Sarıyer Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İş merkezleri ve konutlara planlı hizmet</li>
<li>Demontaj ve temizlik dahil komple çözüm</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Sarıyer Hurda Fiyatları</h3>
<p>Güncel Sarıyer hurda fiyatları için bize ulaşın. Hurda çeşidinize göre en avantajlı fiyatı aynı gün sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Sarıyer'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'silivri-hurda-alim',
    title: 'Silivri Hurda Alım | Silivri Hurda Fiyatları',
    excerpt:
      "Silivri'de sanayi tesisleri, çiftlik ve yazlık hurdalarınız yerinde alınır. Aslan Metal Silivri hurda alım hizmeti ile büyük hacimli hurdanız değerinde.",
    date: '2026-07-04',
    image: '/images/blog/locations/silivri-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Silivri',
    locationType: 'district',
    tags: ['Silivri hurda alım', 'Silivri hurda fiyatları', 'Silivri sanayi hurdası'],
    keywords: [
      'Silivri hurda alım',
      'Silivri hurda fiyatları',
      'Silivri metal hurda',
      'Silivri demirci',
      'Silivri hurda',
      'Silivri geri dönüşüm',
      'İstanbul Silivri hurda',
    ],
    content: `<h2>Silivri Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Silivri ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Sanayi tesisleri, çiftlikler ve yazlık bölgeleriyle geniş bir coğrafyaya yayılan Silivri'de her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Silivri'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Sanayi tesisleri ve makine hurdası</li>
<li>Çiftlik ve tarım makinesi hurdası</li>
<li>Yazlık tadilatı demir hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Komple fabrika sökümü ve konteyner hizmeti</li>
</ul>
<h3>Silivri Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Geniş coğrafyaya tır ve vinçli araç desteği</li>
<li>Büyük hacimli hurdalara özel fiyat avantajı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Silivri Hurda Fiyatları</h3>
<p>Güncel Silivri hurda fiyatları için bize ulaşın. Büyük miktarlı hurdalarınızda en rekabetçi fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Silivri'de hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'sultanbeyli-hurda-alim',
    title: 'Sultanbeyli Hurda Alım | Sultanbeyli Hurda Fiyatları',
    excerpt:
      "Sultanbeyli'de konut ve küçük sanayi hurdalarınız yerinde alınır. Aslan Metal Sultanbeyli hurda alım hizmeti ile düzenli toplama ve anında ödeme.",
    date: '2026-07-03',
    image: '/images/blog/locations/sultanbeyli-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Sultanbeyli',
    locationType: 'district',
    tags: ['Sultanbeyli hurda alım', 'Sultanbeyli hurda fiyatları', 'Sultanbeyli konut hurdası'],
    keywords: [
      'Sultanbeyli hurda alım',
      'Sultanbeyli hurda fiyatları',
      'Sultanbeyli metal hurda',
      'Sultanbeyli demirci',
      'Sultanbeyli hurda',
      'Sultanbeyli geri dönüşüm',
      'İstanbul Sultanbeyli hurda',
    ],
    content: `<h2>Sultanbeyli Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Sultanbeyli ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Konut ağırlıklı yapısı ve küçük sanayi siteleriyle bilinen Sultanbeyli'de tadilat, atölye ve ev hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Sultanbeyli'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Küçük sanayi sitesi atölye hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Sultanbeyli Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sancaktepe merkez ofisimize yakınlıkla en hızlı servis</li>
<li>Düzenli ev ve atölye hurdası toplama programı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Sultanbeyli Hurda Fiyatları</h3>
<p>Güncel Sultanbeyli hurda fiyatları için bizi arayın. Hurda çeşidinizi iletin, en doğru fiyatı aynı gün sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Sultanbeyli'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'sultangazi-hurda-alim',
    title: 'Sultangazi Hurda Alım | Sultangazi Hurda Fiyatları',
    excerpt:
      "Sultangazi'de Habibler sanayi bölgesi ve konut hurdalarınız yerinde alınır. Aslan Metal Sultangazi hurda alım hizmeti ile güncel fiyat garantisi.",
    date: '2026-07-02',
    image: '/images/blog/locations/sultangazi-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Sultangazi',
    locationType: 'district',
    tags: ['Sultangazi hurda alım', 'Sultangazi hurda fiyatları', 'Sultangazi sanayi hurdası'],
    keywords: [
      'Sultangazi hurda alım',
      'Sultangazi hurda fiyatları',
      'Sultangazi metal hurda',
      'Sultangazi demirci',
      'Sultangazi hurda',
      'Sultangazi geri dönüşüm',
      'İstanbul Sultangazi hurda',
    ],
    content: `<h2>Sultangazi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Sultangazi ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Habibler sanayi bölgesi ve konut mahallelerinden çıkan atölye, fabrika ve tadilat hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Sultangazi'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Habibler sanayi bölgesinden atölye hurdası</li>
<li>Küçük fabrika ve imalathane hurdası</li>
<li>Konut tadilatı demir hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Sultangazi Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sanayi bölgelerine düzenli toplama programı</li>
<li>Aynı gün ekspertiz ve yerinde alım</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Sultangazi Hurda Fiyatları</h3>
<p>Güncel Sultangazi hurda fiyatları için bize ulaşın. Hurda cinsinize göre en avantajlı fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Sultangazi'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'sile-hurda-alim',
    title: 'Şile Hurda Alım | Şile Hurda Fiyatları',
    excerpt:
      "Şile'de yazlık tadilatı ve ev hurdalarınız yerinde alınır. Aslan Metal Şile hurda alım hizmeti ile sahil ilçesinde güncel fiyat ve hızlı servis.",
    date: '2026-07-01',
    image: '/images/blog/locations/sile-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Şile',
    locationType: 'district',
    tags: ['Şile hurda alım', 'Şile hurda fiyatları', 'Şile yazlık hurdası'],
    keywords: [
      'Şile hurda alım',
      'Şile hurda fiyatları',
      'Şile metal hurda',
      'Şile demirci',
      'Şile hurda',
      'Şile geri dönüşüm',
      'İstanbul Şile hurda',
    ],
    content: `<h2>Şile Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Şile ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Sahil şeridi ve kırsal bölgeleriyle bilinen Şile'de yazlık tadilatları, çiftlikler ve evlerden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Şile'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Yazlık ve konut tadilatı demir hurdası</li>
<li>Çiftlik ve tarım makinesi hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Şile Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sahil ve kırsal bölgelere ulaşan geniş araç filosu</li>
<li>Yazlık sezonuna özel planlı hizmet</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı, çevre dostu geri dönüşüm</li>
</ul>
<h3>Şile Hurda Fiyatları</h3>
<p>Güncel Şile hurda fiyatları için bize ulaşın. Hurda bilgilerinizi iletin, en doğru fiyatı sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Şile'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'sisli-hurda-alim',
    title: 'Şişli Hurda Alım | Şişli Hurda Fiyatları',
    excerpt:
      "Şişli'de Mecidiyeköy ofisleri ve işyeri tadilatı hurdalarınız yerinde alınır. Aslan Metal Şişli hurda alım hizmeti ile anında ödeme, güncel fiyat.",
    date: '2026-06-30',
    image: '/images/blog/locations/sisli-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Şişli',
    locationType: 'district',
    tags: ['Şişli hurda alım', 'Şişli hurda fiyatları', 'Şişli ofis hurdası'],
    keywords: [
      'Şişli hurda alım',
      'Şişli hurda fiyatları',
      'Şişli metal hurda',
      'Şişli demirci',
      'Şişli hurda',
      'Şişli geri dönüşüm',
      'İstanbul Şişli hurda',
    ],
    content: `<h2>Şişli Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Şişli ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Mecidiyeköy iş merkezleri, alışveriş bölgeleri ve konutlardan çıkan ofis demontajı ve tadilat hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Şişli'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Mecidiyeköy ofis demontajı hurdası</li>
<li>İşyeri ve mağaza tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama ve cephe hurdası</li>
<li>Klima, kombi ve elektronik atık</li>
<li>Paslanmaz ve krom hurda</li>
</ul>
<h3>Şişli Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>İş merkezlerine planlı ve hızlı hizmet</li>
<li>Demontaj ve saha temizliği dahil komple çözüm</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Şişli Hurda Fiyatları</h3>
<p>Güncel Şişli hurda fiyatları için bize ulaşın. Hurda çeşidinize göre en avantajlı fiyatı aynı gün sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Şişli'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'tuzla-hurda-alim',
    title: 'Tuzla Hurda Alım | Tuzla Hurda Fiyatları',
    excerpt:
      "Tuzla'da TOSB, deri OSB ve tersane hurdalarınız yerinde alınır. Aslan Metal Tuzla hurda alım hizmeti ile büyük sanayi hurdanız değerinde.",
    date: '2026-06-29',
    image: '/images/blog/locations/tuzla-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Tuzla',
    locationType: 'district',
    tags: ['Tuzla hurda alım', 'Tuzla hurda fiyatları', 'Tuzla sanayi hurdası'],
    keywords: [
      'Tuzla hurda alım',
      'Tuzla hurda fiyatları',
      'Tuzla metal hurda',
      'Tuzla demirci',
      'Tuzla hurda',
      'Tuzla geri dönüşüm',
      'İstanbul Tuzla hurda',
    ],
    content: `<h2>Tuzla Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un önemli sanayi merkezi Tuzla ilçesinde profesyonel hurda alım hizmeti sunuyoruz. TOSB, İstanbul Deri OSB ve tersanelerin bulunduğu Tuzla'da büyük ölçekli fabrika, tesis ve gemi sanayi kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Tuzla'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>TOSB ve deri OSB kaynaklı fabrika hurdası</li>
<li>Tersane ve gemi sanayi hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Paslanmaz, krom, çinko ve kurşun hurda</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Komple tesis sökümü ve konteyner hizmeti</li>
</ul>
<h3>Tuzla Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Büyük sanayi hurdalarına özel ekip ve ekipman</li>
<li>Tır ve vinçli araçlarla her tonajda nakliye</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Tuzla Hurda Fiyatları</h3>
<p>Güncel Tuzla hurda fiyatları için bize ulaşın. Büyük miktarlı sanayi hurdalarınızda en rekabetçi fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Tuzla'da hurdanız için en doğru adres.</p>`,
  },
  {
    slug: 'umraniye-hurda-alim',
    title: 'Ümraniye Hurda Alım | Ümraniye Hurda Fiyatları',
    excerpt:
      "Ümraniye'de Dudullu OSB, İMES ve konut hurdalarınız yerinde alınır. Aslan Metal Ümraniye hurda alım hizmeti ile güncel fiyat ve hızlı servis.",
    date: '2026-06-28',
    image: '/images/blog/locations/umraniye-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Ümraniye',
    locationType: 'district',
    tags: ['Ümraniye hurda alım', 'Ümraniye hurda fiyatları', 'Ümraniye sanayi hurdası'],
    keywords: [
      'Ümraniye hurda alım',
      'Ümraniye hurda fiyatları',
      'Ümraniye metal hurda',
      'Ümraniye demirci',
      'Ümraniye hurda',
      'Ümraniye geri dönüşüm',
      'İstanbul Ümraniye hurda',
    ],
    content: `<h2>Ümraniye Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Ümraniye ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Dudullu OSB ve İMES sanayi bölgeleriyle konut alanlarının iç içe olduğu Ümraniye'de fabrika, atölye ve tadilat kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Ümraniye'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Dudullu OSB ve İMES'ten fabrika hurdası</li>
<li>Sanayi sitesi atölye hurdası</li>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Ümraniye Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sancaktepe merkez ofisimize yakınlıkla hızlı servis</li>
<li>OSB ve sanayi sitelerine düzenli toplama programı</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Ümraniye Hurda Fiyatları</h3>
<p>Güncel Ümraniye hurda fiyatları için bize ulaşın. Hurda cinsinize göre en avantajlı fiyatı aynı gün teklif edelim.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Ümraniye'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'uskudar-hurda-alim',
    title: 'Üsküdar Hurda Alım | Üsküdar Hurda Fiyatları',
    excerpt:
      "Üsküdar'da tarihi bina ve konut tadilatı hurdalarınız yerinde alınır. Aslan Metal Üsküdar hurda alım hizmeti ile bakır ve demir hurdanız değerinde.",
    date: '2026-06-27',
    image: '/images/blog/locations/uskudar-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Üsküdar',
    locationType: 'district',
    tags: ['Üsküdar hurda alım', 'Üsküdar hurda fiyatları', 'Üsküdar tadilat hurdası'],
    keywords: [
      'Üsküdar hurda alım',
      'Üsküdar hurda fiyatları',
      'Üsküdar metal hurda',
      'Üsküdar demirci',
      'Üsküdar hurda',
      'Üsküdar geri dönüşüm',
      'İstanbul Üsküdar hurda',
    ],
    content: `<h2>Üsküdar Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Üsküdar ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Tarihi yapıların ve konutların yoğun olduğu Üsküdar'da tadilat, restorasyon ve işyeri yenileme çalışmalarından çıkan bakır, kurşun ve demir hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Üsküdar'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut ve tarihi bina tadilatı demir hurdası</li>
<li>Bakır tesisat, boru ve kurşun hurdası</li>
<li>İşyeri ve mağaza demontajı hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Üsküdar Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Anadolu yakası merkezi ilçelerde hızlı servis</li>
<li>Demontaj dahil komple toplama hizmeti</li>
<li>Şeffaf tartım ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Üsküdar Hurda Fiyatları</h3>
<p>Güncel Üsküdar hurda fiyatları için bize ulaşın. Hurda çeşidinizi iletin, en doğru fiyatı aynı gün sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Üsküdar'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'zeytinburnu-hurda-alim',
    title: 'Zeytinburnu Hurda Alım | Zeytinburnu Hurda Fiyatları',
    excerpt:
      "Zeytinburnu'nda Merter tekstil ve sanayi hurdalarınız yerinde alınır. Aslan Metal Zeytinburnu hurda alım hizmeti ile fabrika hurdanız değerinde.",
    date: '2026-06-26',
    image: '/images/blog/locations/zeytinburnu-hurda-alim.jpg',
    category: 'İlçe',
    location: 'Zeytinburnu',
    locationType: 'district',
    tags: ['Zeytinburnu hurda alım', 'Zeytinburnu hurda fiyatları', 'Zeytinburnu sanayi hurdası'],
    keywords: [
      'Zeytinburnu hurda alım',
      'Zeytinburnu hurda fiyatları',
      'Zeytinburnu metal hurda',
      'Zeytinburnu demirci',
      'Zeytinburnu hurda',
      'Zeytinburnu geri dönüşüm',
      'İstanbul Zeytinburnu hurda',
    ],
    content: `<h2>Zeytinburnu Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul Zeytinburnu ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Merter tekstil bölgesi ve sanayi atölyelerinin yoğun olduğu Zeytinburnu'nda fabrika, atölye ve depo kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Zeytinburnu'nda Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Merter tekstil bölgesinden makine hurdası</li>
<li>Fabrika, atölye ve depo demontajı hurdası</li>
<li>Demir hurda: profil, sac, döküm, pik</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Zeytinburnu Hurda Alımında Neden Aslan Metal?</h3>
<ul>
<li>Sanayi işletmelerine düzenli toplama programı</li>
<li>Komple fabrika sökümü ve saha temizliği</li>
<li>Şeffaf fiyatlandırma ve anında ödeme</li>
<li>Lisanslı geri dönüşüm firması güvencesi</li>
</ul>
<h3>Zeytinburnu Hurda Fiyatları</h3>
<p>Güncel Zeytinburnu hurda fiyatları için bize ulaşın. Hurda bilgilerinizi iletin, en avantajlı fiyatı aynı gün sunalım.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Zeytinburnu'nda hurdanız için en doğru adres.</p>`,
  },
  // === SANCAKTEPE MAHALLELERİ (21) ===
  {
    slug: 'sancaktepe-abdurrahmangazi-hurda-alim',
    title: 'Sancaktepe Abdurrahmangazi Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Abdurrahmangazi mahallesinde hurda alım hizmeti. Aslan Metal, Abdurrahmangazi'de bakır, demir ve alüminyum hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-25',
    image: '/images/blog/locations/sancaktepe-abdurrahmangazi-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Abdurrahmangazi',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Abdurrahmangazi hurda alım', 'Sancaktepe mahalle hurda', 'Abdurrahmangazi demirci'],
    keywords: [
      'Abdurrahmangazi hurda alım',
      'Abdurrahmangazi hurda fiyatları',
      'Sancaktepe Abdurrahmangazi hurda',
      'Abdurrahmangazi demirci',
      'Abdurrahmangazi hurda',
      'Abdurrahmangazi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Abdurrahmangazi Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Abdurrahmangazi mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçenin güneyinde TEM bağlantısına yakın konumuyla dikkat çeken Abdurrahmangazi'de konut tadilatları ve sanayi sitelerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Abdurrahmangazi Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Sanayi sitesi atölye hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Abdurrahmangazi Hurda Fiyatları</h3>
<p>Sancaktepe Abdurrahmangazi mahallesinde hurda fiyatlarımız günlük piyasa verilerine göre belirlenir. Güncel fiyatlar için bizi arayın; yerinde ekspertiz ile aynı gün alım yapıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Abdurrahmangazi'de hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-akpinar-hurda-alim',
    title: 'Sancaktepe Akpınar Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Akpınar mahallesinde hurda alım hizmeti. Aslan Metal, Akpınar'da yeni konut projelerinden çıkan hurdaları yerinde değerinde satın alır.",
    date: '2026-06-24',
    image: '/images/blog/locations/sancaktepe-akpinar-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Akpınar',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Akpınar hurda alım', 'Sancaktepe Akpınar hurda', 'Akpınar demirci'],
    keywords: [
      'Akpınar hurda alım',
      'Akpınar hurda fiyatları',
      'Sancaktepe Akpınar hurda',
      'Akpınar demirci',
      'Akpınar hurda',
      'Akpınar geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Akpınar Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Akpınar mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Yeni konut projelerinin hızla geliştiği Akpınar'da inşaat ve tadilat kaynaklı demir, bakır ve alüminyum hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Akpınar Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Yeni konut tadilatı demontaj hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Akpınar Hurda Fiyatları</h3>
<p>Sancaktepe Akpınar mahallesinde güncel hurda fiyatları için bizi arayın. Aynı gün ekspertiz ve yerinde alım ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Akpınar'da hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-ataturk-hurda-alim',
    title: 'Sancaktepe Atatürk Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Atatürk mahallesinde hurda alım hizmeti. Aslan Metal, ilçe merkezine yakın Atatürk mahallesinde hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-23',
    image: '/images/blog/locations/sancaktepe-ataturk-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Atatürk',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Atatürk mahallesi hurda alım', 'Sancaktepe Atatürk hurda', 'Atatürk demirci'],
    keywords: [
      'Sancaktepe Atatürk hurda alım',
      'Atatürk mahallesi hurda fiyatları',
      'Sancaktepe Atatürk hurda',
      'Atatürk mahallesi demirci',
      'Atatürk mahallesi hurda',
      'Atatürk mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Atatürk Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Atatürk mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçe merkezine yakın konumu ve konut yoğun yapısıyla bilinen Atatürk mahallesinde tadilat ve işyeri yenileme hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Atatürk Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Atatürk Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Atatürk mahallesinde güncel hurda fiyatları için bizi arayın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Atatürk mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-emek-hurda-alim',
    title: 'Sancaktepe Emek Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Emek mahallesinde hurda alım hizmeti. Aslan Metal, Emek mahallesindeki ev ve işyeri hurdalarınızı yerinde değerinde satın alır.",
    date: '2026-06-22',
    image: '/images/blog/locations/sancaktepe-emek-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Emek',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Emek mahallesi hurda alım', 'Sancaktepe Emek hurda', 'Emek demirci'],
    keywords: [
      'Emek mahallesi hurda alım',
      'Emek mahallesi hurda fiyatları',
      'Sancaktepe Emek hurda',
      'Emek mahallesi demirci',
      'Emek mahallesi hurda',
      'Emek mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Emek Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Emek mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçe merkezine yakın ve konut ağırlıklı yapısıyla bilinen Emek mahallesinde ev tadilatları ve işyerlerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Emek Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ev tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Beyaz eşya ve elektronik atık</li>
<li>Akü ve kurşun hurdası</li>
</ul>
<h3>Emek Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Emek mahallesinde güncel hurda fiyatları için bize ulaşın. Yerinde ekspertiz ile en doğru fiyatı sunuyor, anında ödeme yapıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Emek mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-eyup-sultan-hurda-alim',
    title: 'Sancaktepe Eyüp Sultan Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Eyüp Sultan mahallesinde hurda alım hizmeti. Aslan Metal, Eyüp Sultan mahallesindeki hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-21',
    image: '/images/blog/locations/sancaktepe-eyup-sultan-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Eyüp Sultan',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Eyüp Sultan mahallesi hurda', 'Sancaktepe Eyüp Sultan hurda', 'Eyüp Sultan demirci'],
    keywords: [
      'Eyüp Sultan mahallesi hurda alım',
      'Eyüp Sultan mahallesi hurda fiyatları',
      'Sancaktepe Eyüp Sultan hurda',
      'Eyüp Sultan mahallesi demirci',
      'Eyüp Sultan mahallesi hurda',
      'Eyüp Sultan mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Eyüp Sultan Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Eyüp Sultan mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçe merkezindeki mahallelerimizden Eyüp Sultan'da konut tadilatları ve ticari işletmelerden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Eyüp Sultan Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Eyüp Sultan Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Eyüp Sultan mahallesinde güncel hurda fiyatları için bizi arayın. Aynı gün ekspertiz ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Eyüp Sultan mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-fatih-hurda-alim',
    title: 'Sancaktepe Fatih Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Fatih mahallesinde hurda alım hizmeti. Aslan Metal, Fatih mahallesindeki hurdanızı yerinde değerinde satın alır, anında ödeme yapar.",
    date: '2026-06-20',
    image: '/images/blog/locations/sancaktepe-fatih-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Fatih',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Sancaktepe Fatih mahallesi hurda', 'Fatih mahallesi demirci', 'Fatih mahallesi hurda alım'],
    keywords: [
      'Sancaktepe Fatih mahallesi hurda alım',
      'Fatih mahallesi hurda fiyatları',
      'Sancaktepe Fatih hurda',
      'Fatih mahallesi demirci',
      'Fatih mahallesi hurda',
      'Fatih mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Fatih Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Fatih mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Merkezi konumu ve hareketli ticari hayatıyla bilinen Fatih mahallesinde konut, işyeri ve tadilat kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Fatih Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut ve işyeri tadilatı demir hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Paslanmaz ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Fatih Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Fatih mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Fatih mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-haci-bektas-i-veli-hurda-alim',
    title: 'Sancaktepe Hacı Bektaş-ı Veli Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Hacı Bektaş-ı Veli mahallesinde hurda alım hizmeti. Aslan Metal, Hacı Bektaş-ı Veli mahallesindeki hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-19',
    image: '/images/blog/locations/sancaktepe-haci-bektas-i-veli-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Hacı Bektaş-ı Veli',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Hacı Bektaş-ı Veli mahallesi hurda', 'Sancaktepe mahalle hurda', 'Hacı Bektaş-ı Veli demirci'],
    keywords: [
      'Hacı Bektaş-ı Veli mahallesi hurda alım',
      'Hacı Bektaş-ı Veli mahallesi hurda fiyatları',
      'Sancaktepe Hacı Bektaş-ı Veli hurda',
      'Hacı Bektaş-ı Veli demirci',
      'Hacı Bektaş-ı Veli mahallesi hurda',
      'Hacı Bektaş-ı Veli geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Hacı Bektaş-ı Veli Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Hacı Bektaş-ı Veli mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Sarıgazi sınırında yeni yapılaşmanın sürdüğü Hacı Bektaş-ı Veli mahallesinde inşaat ve konut tadilatı kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Hacı Bektaş-ı Veli Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Konut tadilatı demontaj hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Hacı Bektaş-ı Veli Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Hacı Bektaş-ı Veli mahallesinde güncel hurda fiyatları için bizi arayın. Aynı gün ekspertiz ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Hacı Bektaş-ı Veli mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-hilal-hurda-alim',
    title: 'Sancaktepe Hilal Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Hilal mahallesinde hurda alım hizmeti. Aslan Metal, Hilal mahallesindeki ev ve işyeri hurdalarınızı yerinde değerinde satın alır.",
    date: '2026-06-18',
    image: '/images/blog/locations/sancaktepe-hilal-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Hilal',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Hilal mahallesi hurda alım', 'Sancaktepe Hilal hurda', 'Hilal mahallesi demirci'],
    keywords: [
      'Hilal mahallesi hurda alım',
      'Hilal mahallesi hurda fiyatları',
      'Sancaktepe Hilal hurda',
      'Hilal mahallesi demirci',
      'Hilal mahallesi hurda',
      'Hilal mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Hilal Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Hilal mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Konut ağırlıklı yapısıyla bilinen Hilal mahallesinde ev tadilatları ve işyerlerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Hilal Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ev tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Beyaz eşya ve elektronik atık</li>
<li>Akü ve kurşun hurdası</li>
</ul>
<h3>Hilal Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Hilal mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Hilal mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-inonu-hurda-alim',
    title: 'Sancaktepe İnönü Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe İnönü mahallesinde hurda alım hizmeti. Aslan Metal, İnönü mahallesindeki hurdanızı yerinde değerinde satın alır, anında ödeme yapar.",
    date: '2026-06-17',
    image: '/images/blog/locations/sancaktepe-inonu-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'İnönü',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['İnönü mahallesi hurda alım', 'Sancaktepe İnönü hurda', 'İnönü mahallesi demirci'],
    keywords: [
      'İnönü mahallesi hurda alım',
      'İnönü mahallesi hurda fiyatları',
      'Sancaktepe İnönü hurda',
      'İnönü mahallesi demirci',
      'İnönü mahallesi hurda',
      'İnönü mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe İnönü Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin İnönü mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Konut ve ticari yapısıyla bilinen İnönü mahallesinde tadilat ve işyeri yenileme hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>İnönü Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>İnönü Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe İnönü mahallesinde güncel hurda fiyatları için bizi arayın. Yerinde ekspertiz ile en doğru fiyatı sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, İnönü mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-kemal-turkler-hurda-alim',
    title: 'Sancaktepe Kemal Türkler Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Kemal Türkler mahallesinde hurda alım hizmeti. Aslan Metal, Samandıra yolu üzerindeki Kemal Türkler'de hurdanızı yerinde satın alır.",
    date: '2026-06-16',
    image: '/images/blog/locations/sancaktepe-kemal-turkler-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Kemal Türkler',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Kemal Türkler mahallesi hurda', 'Sancaktepe Kemal Türkler hurda', 'Kemal Türkler demirci'],
    keywords: [
      'Kemal Türkler mahallesi hurda alım',
      'Kemal Türkler mahallesi hurda fiyatları',
      'Sancaktepe Kemal Türkler hurda',
      'Kemal Türkler mahallesi demirci',
      'Kemal Türkler mahallesi hurda',
      'Kemal Türkler geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Kemal Türkler Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Kemal Türkler mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Samandıra yolu üzerindeki konumu ve sanayi sitelerine yakınlığıyla bilinen Kemal Türkler'de atölye, konut ve tadilat kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Kemal Türkler Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Sanayi sitesi atölye hurdası</li>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Kemal Türkler Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Kemal Türkler mahallesinde güncel hurda fiyatları için bize ulaşın. Aynı gün ekspertiz ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Kemal Türkler mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-meclis-hurda-alim',
    title: 'Sancaktepe Meclis Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Meclis mahallesinde hurda alım hizmeti. Aslan Metal, Meclis mahallesindeki hurdanızı yerinde değerinde satın alır, anında ödeme yapar.",
    date: '2026-06-15',
    image: '/images/blog/locations/sancaktepe-meclis-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Meclis',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Meclis mahallesi hurda alım', 'Sancaktepe Meclis hurda', 'Meclis mahallesi demirci'],
    keywords: [
      'Meclis mahallesi hurda alım',
      'Meclis mahallesi hurda fiyatları',
      'Sancaktepe Meclis hurda',
      'Meclis mahallesi demirci',
      'Meclis mahallesi hurda',
      'Meclis mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Meclis Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Meclis mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Yeni yapılaşmanın devam ettiği Meclis mahallesinde konut tadilatları ve inşaat sahalarından çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Meclis Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Konut tadilatı demontaj hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Meclis Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Meclis mahallesinde güncel hurda fiyatları için bizi arayın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Meclis mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-merve-hurda-alim',
    title: 'Sancaktepe Merve Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Merve mahallesinde hurda alım hizmeti. Aslan Metal, konut yoğun Merve mahallesinde hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-14',
    image: '/images/blog/locations/sancaktepe-merve-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Merve',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Merve mahallesi hurda alım', 'Sancaktepe Merve hurda', 'Merve mahallesi demirci'],
    keywords: [
      'Merve mahallesi hurda alım',
      'Merve mahallesi hurda fiyatları',
      'Sancaktepe Merve hurda',
      'Merve mahallesi demirci',
      'Merve mahallesi hurda',
      'Merve mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Merve Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Merve mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Konut yoğun yapısıyla bilinen Merve mahallesinde ev tadilatları ve işyerlerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Merve Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ev tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Beyaz eşya ve elektronik atık</li>
<li>Akü ve kurşun hurdası</li>
</ul>
<h3>Merve Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Merve mahallesinde güncel hurda fiyatları için bize ulaşın. Yerinde ekspertiz ile en doğru fiyatı sunuyor, anında ödeme yapıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Merve mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-mevlana-hurda-alim',
    title: 'Sancaktepe Mevlana Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Mevlana mahallesinde hurda alım hizmeti. Aslan Metal, Sarıgazi'ye komşu Mevlana mahallesinde hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-13',
    image: '/images/blog/locations/sancaktepe-mevlana-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Mevlana',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Mevlana mahallesi hurda alım', 'Sancaktepe Mevlana hurda', 'Mevlana mahallesi demirci'],
    keywords: [
      'Mevlana mahallesi hurda alım',
      'Mevlana mahallesi hurda fiyatları',
      'Sancaktepe Mevlana hurda',
      'Mevlana mahallesi demirci',
      'Mevlana mahallesi hurda',
      'Mevlana mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Mevlana Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Mevlana mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Sarıgazi'ye komşu konumuyla bilinen Mevlana mahallesinde konut tadilatları ve ticari işletmelerden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Mevlana Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Mevlana Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Mevlana mahallesinde güncel hurda fiyatları için bizi arayın. Aynı gün ekspertiz ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Mevlana mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-osman-gazi-hurda-alim',
    title: 'Sancaktepe Osman Gazi Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Osman Gazi mahallesinde hurda alım hizmeti. Aslan Metal, Osman Gazi mahallesindeki hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-12',
    image: '/images/blog/locations/sancaktepe-osman-gazi-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Osman Gazi',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Osman Gazi mahallesi hurda', 'Sancaktepe Osman Gazi hurda', 'Osman Gazi demirci'],
    keywords: [
      'Osman Gazi mahallesi hurda alım',
      'Osman Gazi mahallesi hurda fiyatları',
      'Sancaktepe Osman Gazi hurda',
      'Osman Gazi mahallesi demirci',
      'Osman Gazi mahallesi hurda',
      'Osman Gazi mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Osman Gazi Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Osman Gazi mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçe merkezindeki çarşıya yakın konumuyla bilinen Osman Gazi mahallesinde konut ve ticari işletme hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Osman Gazi Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Osman Gazi Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Osman Gazi mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Osman Gazi mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-pasakoy-hurda-alim',
    title: 'Sancaktepe Paşaköy Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Paşaköy mahallesinde hurda alım hizmeti. Aslan Metal, doğayla iç içe Paşaköy'de hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-11',
    image: '/images/blog/locations/sancaktepe-pasakoy-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Paşaköy',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Paşaköy mahallesi hurda alım', 'Sancaktepe Paşaköy hurda', 'Paşaköy demirci'],
    keywords: [
      'Paşaköy mahallesi hurda alım',
      'Paşaköy mahallesi hurda fiyatları',
      'Sancaktepe Paşaköy hurda',
      'Paşaköy mahallesi demirci',
      'Paşaköy mahallesi hurda',
      'Paşaköy geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Paşaköy Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Paşaköy mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Kırsal dokusu ve yeni yapılaşmasıyla bilinen Paşaköy'de villa tadilatları, çiftlikler ve konutlardan çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Paşaköy Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Villa ve konut tadilatı demir hurdası</li>
<li>Çiftlik ve tarım makinesi hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Paşaköy Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Paşaköy mahallesinde güncel hurda fiyatları için bizi arayın. Yerinde ekspertiz ile en doğru fiyatı sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Paşaköy'de hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-safa-hurda-alim',
    title: 'Sancaktepe Safa Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Safa mahallesinde hurda alım hizmeti. Aslan Metal, Safa mahallesindeki hurdanızı yerinde değerinde satın alır, anında ödeme yapar.",
    date: '2026-06-10',
    image: '/images/blog/locations/sancaktepe-safa-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Safa',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Safa mahallesi hurda alım', 'Sancaktepe Safa hurda', 'Safa mahallesi demirci'],
    keywords: [
      'Safa mahallesi hurda alım',
      'Safa mahallesi hurda fiyatları',
      'Sancaktepe Safa hurda',
      'Safa mahallesi demirci',
      'Safa mahallesi hurda',
      'Safa mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Safa Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Safa mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Konut ağırlıklı yapısıyla bilinen Safa mahallesinde ev tadilatları ve işyerlerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Safa Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ev tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Beyaz eşya ve elektronik atık</li>
<li>Akü ve kurşun hurdası</li>
</ul>
<h3>Safa Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Safa mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Safa mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-samandira-hurda-alim',
    title: 'Sancaktepe Samandıra Hurda Alım | Samandıra Demirci',
    excerpt:
      "Sancaktepe Samandıra'da hurda alım hizmeti. Aslan Metal, Samandıra OSB ve merkez dahil tüm Samandıra'da hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-09',
    image: '/images/blog/locations/sancaktepe-samandira-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Samandıra',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Samandıra hurda alım', 'Samandıra hurda fiyatları', 'Samandıra demirci'],
    keywords: [
      'Samandıra hurda alım',
      'Samandıra hurda fiyatları',
      'Sancaktepe Samandıra hurda',
      'Samandıra demirci',
      'Samandıra hurda',
      'Samandıra geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Samandıra Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe'nin en bilinen bölgesi Samandıra'da profesyonel hurda alım hizmeti sunuyoruz. Samandıra OSB, sanayi siteleri ve merkez dahil tüm Samandıra'da konut, atölye ve fabrika kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Samandıra'da Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Samandıra OSB'den makine ve fabrika hurdası</li>
<li>Sanayi sitesi atölye hurdası</li>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>Bakır, alüminyum ve kablo hurdası</li>
<li>Paslanmaz, krom ve sarı hurda</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Samandıra Hurda Fiyatları</h3>
<p>Samandıra'da güncel hurda fiyatları için bizi arayın. Bölgedeki merkez ofisimiz sayesinde en hızlı servisi ve en rekabetçi fiyatları sunuyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Samandıra'da hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-sarigazi-hurda-alim',
    title: 'Sancaktepe Sarıgazi Hurda Alım | Sarıgazi Demirci',
    excerpt:
      "Sancaktepe Sarıgazi'de hurda alım hizmeti. Aslan Metal, metro hattı ve çarşısıyla bilinen Sarıgazi'de hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-08',
    image: '/images/blog/locations/sancaktepe-sarigazi-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Sarıgazi',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Sarıgazi hurda alım', 'Sarıgazi hurda fiyatları', 'Sarıgazi demirci'],
    keywords: [
      'Sarıgazi hurda alım',
      'Sarıgazi hurda fiyatları',
      'Sancaktepe Sarıgazi hurda',
      'Sarıgazi demirci',
      'Sarıgazi hurda',
      'Sarıgazi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Sarıgazi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe'nin en büyük ve en hareketli bölgelerinden Sarıgazi'de profesyonel hurda alım hizmeti sunuyoruz. Metro hattı ve ticari çarşısıyla öne çıkan Sarıgazi'de konut, işyeri ve tadilat kaynaklı hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Sarıgazi'de Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Sarıgazi Hurda Fiyatları</h3>
<p>Sarıgazi'de güncel hurda fiyatları için bize ulaşın. Bölgedeki merkez ofisimiz sayesinde en hızlı servisi sunuyor, anında ödeme yapıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Sarıgazi'de hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-veysel-karani-hurda-alim',
    title: 'Sancaktepe Veysel Karani Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Veysel Karani mahallesinde hurda alım hizmeti. Aslan Metal, Veysel Karani mahallesindeki hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-07',
    image: '/images/blog/locations/sancaktepe-veysel-karani-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Veysel Karani',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Veysel Karani mahallesi hurda', 'Sancaktepe Veysel Karani hurda', 'Veysel Karani demirci'],
    keywords: [
      'Veysel Karani mahallesi hurda alım',
      'Veysel Karani mahallesi hurda fiyatları',
      'Sancaktepe Veysel Karani hurda',
      'Veysel Karani mahallesi demirci',
      'Veysel Karani mahallesi hurda',
      'Veysel Karani geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Veysel Karani Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Veysel Karani mahallesinde profesyonel hurda alım hizmeti sunuyoruz. İlçenin güneyinde konut ağırlıklı yapısıyla bilinen Veysel Karani mahallesinde ev tadilatları ve işyerlerinden çıkan her türlü metal hurdayı yerinde değerinde satın alıyoruz.</p>
<h3>Veysel Karani Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Ev tadilatı demir ve demontaj hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Beyaz eşya ve elektronik atık</li>
<li>Akü ve kurşun hurdası</li>
</ul>
<h3>Veysel Karani Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Veysel Karani mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Veysel Karani mahallesinde hurdanızın yanında.</p>`,
  },
  {
    slug: 'sancaktepe-yenidogan-hurda-alim',
    title: 'Sancaktepe Yenidoğan Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Yenidoğan mahallesinde hurda alım hizmeti. Aslan Metal, Yenidoğan mahallesindeki hurdanızı yerinde değerinde satın alır, anında ödeme yapar.",
    date: '2026-06-06',
    image: '/images/blog/locations/sancaktepe-yenidogan-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Yenidoğan',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Yenidoğan mahallesi hurda alım', 'Sancaktepe Yenidoğan hurda', 'Yenidoğan demirci'],
    keywords: [
      'Yenidoğan mahallesi hurda alım',
      'Yenidoğan mahallesi hurda fiyatları',
      'Sancaktepe Yenidoğan hurda',
      'Yenidoğan mahallesi demirci',
      'Yenidoğan mahallesi hurda',
      'Yenidoğan mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Yenidoğan Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Yenidoğan mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Çekmeköy sınırına yakın konumu ve konut yoğun yapısıyla bilinen Yenidoğan mahallesinde tadilat ve işyeri hurdalarını yerinde değerinde satın alıyoruz.</p>
<h3>Yenidoğan Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>Konut tadilatı demir ve demontaj hurdası</li>
<li>İşyeri ve dükkan tadilatı hurdası</li>
<li>Bakır tesisat, kablo ve boru hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Yenidoğan Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Yenidoğan mahallesinde güncel hurda fiyatları için bizi arayın. Aynı gün ekspertiz ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Yenidoğan mahallesinde hurdanızın hemen yanında.</p>`,
  },
  {
    slug: 'sancaktepe-yunus-emre-hurda-alim',
    title: 'Sancaktepe Yunus Emre Mahallesi Hurda Alım',
    excerpt:
      "Sancaktepe Yunus Emre mahallesinde hurda alım hizmeti. Aslan Metal, yeni konut projeleriyle gelişen Yunus Emre'de hurdanızı yerinde değerinde satın alır.",
    date: '2026-06-05',
    image: '/images/blog/locations/sancaktepe-yunus-emre-hurda-alim.jpg',
    category: 'Sancaktepe Mahalle',
    location: 'Yunus Emre',
    locationType: 'neighborhood',
    parentDistrict: 'Sancaktepe',
    tags: ['Yunus Emre mahallesi hurda alım', 'Sancaktepe Yunus Emre hurda', 'Yunus Emre demirci'],
    keywords: [
      'Yunus Emre mahallesi hurda alım',
      'Yunus Emre mahallesi hurda fiyatları',
      'Sancaktepe Yunus Emre hurda',
      'Yunus Emre mahallesi demirci',
      'Yunus Emre mahallesi hurda',
      'Yunus Emre mahallesi geri dönüşüm',
      'Sancaktepe hurda alım',
    ],
    content: `<h2>Sancaktepe Yunus Emre Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin Yunus Emre mahallesinde profesyonel hurda alım hizmeti sunuyoruz. Yeni konut projeleriyle hızla gelişen Yunus Emre mahallesinde inşaat ve tadilat kaynaklı demir, bakır ve alüminyum hurdaları yerinde değerinde satın alıyoruz.</p>
<h3>Yunus Emre Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
<li>İnşaat demiri, profil ve sac hurdası</li>
<li>Yeni konut tadilatı demontaj hurdası</li>
<li>Bakır tesisat ve kablo hurdası</li>
<li>Alüminyum doğrama hurdası</li>
<li>Kombi, kazan ve radyatör hurdası</li>
<li>Elektronik atık ve akü hurdası</li>
</ul>
<h3>Yunus Emre Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe Yunus Emre mahallesinde güncel hurda fiyatları için bize ulaşın. Şeffaf tartım ve anında ödeme ile hizmetinizi tamamlıyoruz.</p>
<p><strong>Hemen iletişime geçin:</strong> +90 (216) 123 45 67. Aslan Metal, Yunus Emre mahallesinde hurdanızın yanında.</p>`,
  },
];

export const FAQS = [
  {
    question: 'Hurda fiyatlarınızı nasıl belirliyorsunuz?',
    answer: 'Hurda fiyatlarımız, uluslararası metal borsalarındaki güncel fiyatlar ve Londra Metal Borsası (LME) verileri baz alınarak belirlenmektedir. Hurda cinsi, kalitesi, miktarı ve lokasyonuna göre en güncel ve adil fiyat teklifini sunuyoruz.',
  },
  {
    question: 'Hurdamı satmak için minimum miktar şartı var mı?',
    answer: 'Hayır, minimum miktar şartımız yoktur. İster 10 kg ister 100 ton, her miktardaki hurdanızı değerinde satın alıyoruz. Büyük miktarlı hurda alımlarında daha avantajlı fiyatlandırma sunabilmekteyiz.',
  },
  {
    question: 'Hangi bölgelere hizmet veriyorsunuz?',
    answer: 'İstanbul\'un tüm ilçelerine hizmet vermekteyiz. Anadolu Yakası ve Avrupa Yakası dahil olmak üzere 39 ilçede hurda alım hizmetimiz mevcuttur. Büyük hacimli alımlar için İstanbul dışına da hizmet verebilmekteyiz.',
  },
  {
    question: 'Ödemeyi nasıl ve ne zaman yapıyorsunuz?',
    answer: 'Ödemelerinizi hurda teslimi ve tartım işleminin hemen ardından anında yapıyoruz. Nakit ödeme veya banka havalesi seçeneklerimiz mevcuttur. Kurumsal müşterilerimize fatura karşılığı ödeme yapılmaktadır.',
  },
  {
    question: 'Lisanslı bir firma mısınız?',
    answer: 'Evet, Aslan Metal olarak T.C. Çevre ve Şehircilik Bakanlığı\'ndan onaylı geri dönüşüm lisansımız bulunmaktadır. Tüm faaliyetlerimiz yasal mevzuata uygun olarak gerçekleştirilmektedir.',
  },
  {
    question: 'Fabrika sökümü hizmetiniz neleri kapsıyor?',
    answer: 'Fabrika söküm hizmetimiz; komple tesis sökümü, makine sökümü, çelik konstrüksiyon sökümü, elektrik-elektronik aksam sökümü, boru tesisatı sökümü ve saha temizliğini kapsar. Profesyonel ekip ve iş makinelerimizle güvenli söküm hizmeti sunuyoruz.',
  },
  {
    question: 'Konteyner hizmetiniz nasıl çalışıyor?',
    answer: 'İşletmenizin hurda hacmine uygun konteynerleri tesisinize yerleştiriyoruz. Konteyner dolduğunda haber veriyorsunuz, biz gelip dolu konteyneri alıp yerine boş konteyner bırakıyoruz. Bu hizmet özellikle düzenli hurda çıkışı olan fabrikalar için idealdir.',
  },
  {
    question: 'Hurdam için fiyat teklifi ne kadar sürede alabilirim?',
    answer: 'Telefon veya WhatsApp üzerinden ilettiğiniz hurda bilgileri ve fotoğraflar doğrultusunda genellikle 1 saat içinde ön fiyat teklifi sunabiliyoruz. Yerinde ekspertiz gerektiren durumlarda aynı gün içinde adresinize gelerek kesin fiyat teklifimizi veriyoruz.',
  },
  {
    question: 'Hangi hurda türlerini satın alıyorsunuz?',
    answer: 'Bakır, sarı, alüminyum, demir, paslanmaz, krom, çinko, kurşun, kablo, akü, elektronik atık, makine hurdası, fabrika hurdası, inşaat hurdası ve sanayi atıkları başta olmak üzere tüm metal türevi hurdaları satın alıyoruz.',
  },
  {
    question: 'Hurdamı sattıktan sonra fatura veya belge alabilir miyim?',
    answer: 'Evet, tüm hurda alımlarımızda tartım fişi ve isteğe bağlı olarak fatura düzenliyoruz. Kurumsal müşterilerimize mutlaka fatura kesilmektedir. Tüm işlemlerimiz kayıt altına alınır.',
  },
];

export const TESTIMONIALS = [
  { name: 'Ahmet Yılmaz', company: 'Yılmaz Metal Sanayi', text: 'Yıllardır çalıştığımız en güvenilir hurda firması. Fiyatları piyasaya göre her zaman rekabetçi ve ödemeleri anında yapıyorlar.', rating: 5, location: 'Tuzla' },
  { name: 'Mehmet Kaya', company: 'Kaya İnşaat A.Ş.', text: 'İnşaat projelerimizde çıkan hurdaların toplanması ve nakliyesi konusunda profesyonel hizmet alıyoruz. Ekip gerçekten işinin ehli.', rating: 5, location: 'Ümraniye' },
  { name: 'Ayşe Demir', company: 'Demir Fabrikası', text: 'Fabrikamızın düzenli hurda alımı için anlaşmalı çalışıyoruz. Konteyner hizmetleri ve düzenli toplama ile işimiz çok kolaylaştı.', rating: 5, location: 'Dudullu OSB' },
  { name: 'Cem Öztürk', company: 'Öztürk Makine', text: 'CNC ve endüstriyel makinelerimizin hurda alımında çok titiz çalışıyorlar. Söküm ve nakliye dahil komple hizmet alıyorum.', rating: 5, location: 'Gebze' },
  { name: 'Emine Şahin', company: 'Bireysel Müşteri', text: 'Ev tadilatı sırasında çıkan hurdalar için aradım, aynı gün geldiler. Tartımı gözümün önünde yapıp ödemeyi hemen yaptılar.', rating: 5, location: 'Kadıköy' },
  { name: 'Hasan Polat', company: 'Polat Sanayi Tesisleri', text: 'Fabrika sökümü için birkaç firmayla görüştük, en profesyonel ve kapsamlı teklifi Aslan Metal verdi. Söküm sürecinde hiç sorun yaşamadık.', rating: 5, location: 'Beylikdüzü' },
];

export const FLEET_VEHICLES = [
  { name: 'Kamyon', capacity: '20 Ton', count: 8, icon: 'Truck', description: 'Damperli kamyon filomuz' },
  { name: 'Tır', capacity: '40 Ton', count: 4, icon: 'Ship', description: 'Dorse tır filomuz' },
  { name: 'Vinçli Kamyon', capacity: '15 Ton', count: 3, icon: 'Anchor', description: 'Hidrolik vinçli kamyonlar' },
  { name: 'Konteyner Aracı', capacity: '30 m³', count: 6, icon: 'Container', description: 'Roll-on/off araçlar' },
  { name: 'Pickup', capacity: '3 Ton', count: 5, icon: 'Car', description: 'Hızlı hizmet araçları' },
  { name: 'Ekskavatör', capacity: '20-30 Ton', count: 2, icon: 'Hammer', description: 'Söküm ve yükleme için' },
];

export const CERTIFICATES = [
  { name: 'Çevre İzin Belgesi', issuer: 'T.C. Çevre ve Şehircilik Bakanlığı' },
  { name: 'Atık Taşıma Lisansı', issuer: 'İstanbul Valiliği Çevre Müdürlüğü' },
  { name: 'Geri Dönüşüm Lisansı', issuer: 'T.C. Çevre ve Şehircilik Bakanlığı' },
  { name: 'ISO 14001 Çevre Yönetim Sistemi', issuer: 'TSE' },
  { name: 'ISO 9001 Kalite Yönetim Sistemi', issuer: 'TSE' },
  { name: 'İş Sağlığı ve Güvenliği Belgesi', issuer: 'T.C. Aile ve Çalışma Bakanlığı' },
];

export const CORPORATE_VALUES = {
  mission: 'Doğal kaynakları koruyarak sürdürülebilir bir geleceğe katkıda bulunmak, metal geri dönüşüm sektöründe en güvenilir ve yenilikçi çözüm ortağı olmak.',
  vision: 'Türkiye\'nin lider metal geri dönüşüm firması olmak, sektör standartlarını belirlemek ve gelecek nesillere daha temiz bir dünya bırakmak.',
  quality: 'Tüm süreçlerimizde uluslararası kalite standartlarını benimsiyor, müşteri memnuniyetini en üst seviyede tutmayı hedefliyoruz. Dijital kantarlarımız, düzenli kalibrasyon ve şeffaf raporlama ile güvenilir hizmet sunuyoruz.',
  environment: 'Geri dönüşüm faaliyetlerimizle doğal kaynak tüketimini azaltıyor, enerji tasarrufu sağlıyor ve karbon ayak izini düşürüyoruz. Çevre mevzuatına tam uyumlu, sürdürülebilir iş modelleri geliştiriyoruz.',
  values: [
    { title: 'Güvenilirlik', description: 'Tüm iş süreçlerimizde şeffaflık ve dürüstlük ilkesiyle hareket ederiz.' },
    { title: 'Kalite', description: 'Hizmet kalitemizi sürekli iyileştirerek müşteri memnuniyetini en üst düzeyde tutarız.' },
    { title: 'Sürdürülebilirlik', description: 'Çevreye duyarlı, gelecek nesilleri düşünen iş modelleri geliştiririz.' },
    { title: 'Yenilikçilik', description: 'Sektördeki teknolojik gelişmeleri yakından takip eder, süreçlerimize entegre ederiz.' },
    { title: 'İş Güvenliği', description: 'Çalışanlarımızın ve iş ortaklarımızın güvenliği öncelikli prensibimizdir.' },
    { title: 'Hızlı Çözüm', description: 'Müşteri taleplerine en hızlı şekilde cevap verir, çözüm odaklı çalışırız.' },
  ],
};
