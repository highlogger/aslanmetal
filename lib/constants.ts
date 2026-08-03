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

// ============================================
// BLOG LOCATIONS — İlçe & Mahalle Bazlı SEO Blog
// ============================================

export interface BlogLocation {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  location: string;
  locationType: 'district' | 'neighborhood';
  parentDistrict?: string;
  tags: string[];
  keywords: string[];
  content: string;
}

const districtTemplate = (name: string) => `
<h2>${name} Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak İstanbul'un <strong>${name}</strong> ilçesinde profesyonel hurda alım hizmeti sunuyoruz. Bölgedeki sanayi kuruluşları, inşaat firmaları, fabrikalar ve bireysel müşterilerimiz için hızlı, güvenilir ve yüksek fiyatlı hurda alım çözümleri sağlıyoruz.</p>
<p>${name} ilçesinde ikamet eden müşterilerimize <strong>yerinde ekspertiz</strong> ve <strong>anında ödeme</strong> avantajı sunuyoruz. Geniş araç filomuz sayesinde ${name} bölgesindeki hurdanızı adresinizden teslim alıyoruz.</p>

<h3>${name}'da Aldığımız Hurda Çeşitleri</h3>
<ul>
  <li><strong>Bakır Hurda:</strong> Saf bakır, lama bakır, bobin bakır, kırkambar bakır, yanık bakır alımı</li>
  <li><strong>Alüminyum Hurda:</strong> Profil, levha, folyo, kablo alüminyum, döküm alüminyum</li>
  <li><strong>Demir Hurda:</strong> İnşaat demiri, profil, sac, döküm, pik, talaş demir</li>
  <li><strong>Paslanmaz Hurda:</strong> 304 ve 316 kalite paslanmaz çelik, paslanmaz sac ve profil</li>
  <li><strong>Sarı Hurda:</strong> Pirinç, sarı hurda, çinko karışımlı metaller</li>
  <li><strong>Kablo Hurda:</strong> Enerji kabloları, data kabloları, bakır ve alüminyum kablo</li>
  <li><strong>Elektronik Atık:</strong> Bilgisayar, sunucu, kart, işlemci ve elektronik hurdalar</li>
  <li><strong>Makine Hurda:</strong> CNC, torna, pres, enjeksiyon ve endüstriyel makineler</li>
  <li><strong>Akü Hurda:</strong> Araç aküleri, endüstriyel aküler, UPS aküleri</li>
  <li><strong>Kurşun ve Çinko:</strong> Her türlü kurşun ve çinko hurdası</li>
</ul>

<h3>${name} Hurda Alım Sürecimiz</h3>
<p>${name} ilçesindeki hurda alım sürecimiz şu adımlarla işler:</p>
<ol>
  <li><strong>İletişim:</strong> Bizi arayın veya WhatsApp üzerinden hurda bilgilerinizi iletin.</li>
  <li><strong>Yerinde Ekspertiz:</strong> Uzman ekibimiz ${name} adresinize gelerek hurdanızı inceler.</li>
  <li><strong>Fiyat Teklifi:</strong> Güncel piyasa fiyatları üzerinden şeffaf teklif sunarız.</li>
  <li><strong>Tartım ve Nakliye:</strong> Dijital kantarda hassas tartım, güvenli nakliye.</li>
  <li><strong>Anında Ödeme:</strong> Nakit veya banka havalesi ile hemen ödemenizi yaparız.</li>
</ol>

<h3>${name} Hurda Fiyatları</h3>
<p>${name} bölgesinde hurda fiyatlarımız, Londra Metal Borsası (LME) ve güncel piyasa verilerine göre günlük olarak belirlenmektedir. En doğru ve güncel ${name} hurda fiyatları için bizi hemen arayın.</p>

<h3>Neden ${name}'da Aslan Metal?</h3>
<ul>
  <li>Çevre ve Şehircilik Bakanlığı onaylı <strong>lisanslı</strong> geri dönüşüm firması</li>
  <li>${name} genelinde <strong>ücretsiz keşif</strong> ve yerinde ekspertiz hizmeti</li>
  <li><strong>Dijital kantar</strong> ile hassas ve şeffaf tartım</li>
  <li><strong>Anında ödeme</strong> — nakit veya banka havalesi</li>
  <li>Geniş <strong>araç filosu</strong> ile hızlı nakliye</li>
  <li>Her miktarda hurda için <strong>rekabetçi fiyat</strong> garantisi</li>
</ul>
`;

const neighborhoodTemplate = (name: string) => `
<h2>Sancaktepe ${name} Mahallesi Hurda Alım Hizmeti</h2>
<p>Aslan Metal olarak Sancaktepe ilçesinin <strong>${name}</strong> mahallesinde profesyonel hurda alım hizmeti sunuyoruz. ${name} mahallesi ve çevre bölgelerdeki tüm müşterilerimize hızlı, güvenilir ve yüksek fiyatlı hurda alım çözümleri sağlıyoruz.</p>
<p>${name} mahallesinde ikamet eden vatandaşlarımıza <strong>yerinde ekspertiz</strong> ve <strong>anında ödeme</strong> avantajı sunuyoruz. Sancaktepe bölgesindeki merkezi konumumuz sayesinde ${name} mahallesine en hızlı şekilde ulaşıp hurdanızı teslim alıyoruz.</p>

<h3>${name} Mahallesinde Aldığımız Hurda Çeşitleri</h3>
<ul>
  <li><strong>Bakır Hurda:</strong> Saf bakır, lama bakır, bobin bakır, kırkambar bakır, yanık bakır</li>
  <li><strong>Alüminyum Hurda:</strong> Profil, levha, folyo, kablo alüminyum, döküm alüminyum</li>
  <li><strong>Demir Hurda:</strong> İnşaat demiri, profil, sac, döküm, pik demir</li>
  <li><strong>Paslanmaz Hurda:</strong> 304 ve 316 kalite paslanmaz çelik</li>
  <li><strong>Sarı Hurda:</strong> Pirinç ve çinko karışımlı metaller</li>
  <li><strong>Kablo Hurda:</strong> Her türlü enerji ve data kablosu</li>
  <li><strong>Elektronik Atık:</strong> Bilgisayar, kart, işlemci ve elektronik hurdalar</li>
  <li><strong>Akü Hurda:</strong> Araç ve endüstriyel aküler</li>
</ul>

<h3>${name} Mahallesi Hurda Alım Süreci</h3>
<p>Sancaktepe ${name} mahallesindeki hurda alım sürecimiz:</p>
<ol>
  <li>Bizi telefon veya WhatsApp ile arayarak hurda bilgilerinizi iletin.</li>
  <li>Ekibimiz ${name} mahallesindeki adresinize gelerek yerinde ekspertiz yapar.</li>
  <li>Güncel piyasa fiyatları üzerinden şeffaf fiyat teklifi sunarız.</li>
  <li>Dijital kantarımızda hassas tartım yapılır.</li>
  <li>Nakit veya banka havalesi ile anında ödemeniz yapılır.</li>
</ol>

<h3>${name} Mahallesi Hurda Fiyatları</h3>
<p>Sancaktepe ${name} mahallesinde hurda fiyatlarımız günlük olarak güncellenmektedir. Londra Metal Borsası (LME) verileri baz alınarak belirlenen fiyatlarımız için hemen arayın.</p>

<h3>Sancaktepe ${name}'da Neden Aslan Metal?</h3>
<ul>
  <li>Sancaktepe merkezli, <strong>lisanslı</strong> geri dönüşüm firması</li>
  <li>${name} mahallesine <strong>en yakın</strong> hurda alım noktası</li>
  <li><strong>Ücretsiz keşif</strong> ve yerinde ekspertiz</li>
  <li>Dijital kantar ile <strong>şeffaf tartım</strong></li>
  <li><strong>Anında ödeme</strong> garantisi</li>
  <li>Geniş araç filosu ile <strong>hızlı servis</strong></li>
  <li>Her miktar ve türde hurda için <strong>en iyi fiyat</strong></li>
</ul>
`;

const generateLocation = (
  name: string,
  type: 'district' | 'neighborhood',
  parent?: string,
): BlogLocation => {
  const slug = type === 'district'
    ? `istanbul-${name.toLowerCase().replace(/ /g, '-').replace(/'/g, '').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')}-hurda-alim`
    : `sancaktepe-${name.toLowerCase().replace(/ /g, '-').replace(/'/g, '').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')}-mahallesi-hurda-alim`;

  const title = type === 'district'
    ? `${name} Hurda Alım | ${name} Demirci, Metal Hurda ve Geri Dönüşüm`
    : `Sancaktepe ${name} Hurda Alım | ${name} Mahallesi Demirci`;

  const excerpt = type === 'district'
    ? `İstanbul ${name} ilçesinde profesyonel hurda alım hizmeti. ${name} demirci, ${name} metal hurda alımı, ${name} geri dönüşüm ve anında ödeme için Aslan Metal'i arayın.`
    : `Sancaktepe ${name} mahallesinde hurda alım hizmeti. ${name} mahallesi demirci, ${name} hurda alımı ve metal geri dönüşüm için Aslan Metal.`;

  const category = type === 'district' ? 'İstanbul İlçeleri' : 'Sancaktepe Mahalleleri';

  const tags = type === 'district'
    ? [`${name} hurda alım`, `${name} demirci`, `${name} metal hurda`, `${name} geri dönüşüm`, `İstanbul ${name}`, 'hurda fiyatları', 'metal geri dönüşüm']
    : [`Sancaktepe ${name}`, `${name} mahallesi hurda`, `${name} demirci`, `${name} hurda alım`, 'Sancaktepe hurda', 'Sancaktepe geri dönüşüm'];

  const keywords = type === 'district'
    ? [
        `${name} hurda alım`, `${name} demirci`, `${name} hurda fiyatları`, `${name} metal hurda`,
        `${name} hurda`, `${name} geri dönüşüm`, `İstanbul ${name} hurda`, `${name} hurda alan firmalar`,
        `${name} hurda satış`, `${name} bakır hurda`, `${name} alüminyum hurda`, `${name} demir hurda`,
        `${name} paslanmaz hurda`, `${name} kablo hurda`, `${name} elektronik atık`,
        `${name} akü hurda`, `${name} makine hurda`, `${name} sarı hurda`,
        `${name} yerinde hurda alım`, `${name} anında ödeme hurda`,
      ]
    : [
        `Sancaktepe ${name} hurda alım`, `${name} mahallesi demirci`, `${name} mahallesi hurda`,
        `Sancaktepe ${name} hurda fiyatları`, `Sancaktepe ${name} geri dönüşüm`,
        `${name} mahallesi metal hurda`, `Sancaktepe ${name} demir hurda`,
        `${name} hurda alanlar`, `${name} mahallesi hurda alım`, `${name} mahallesi hurda satış`,
        `Sancaktepe ${name} bakır hurda`, `Sancaktepe ${name} alüminyum hurda`,
        `${name} mahallesi paslanmaz hurda`, `Sancaktepe ${name} kablo hurda`,
        `Sancaktepe ${name} yerinde hurda`, `Sancaktepe ${name} anında ödeme hurda`,
      ];

  return {
    slug,
    title,
    excerpt,
    date: '2025-08-03',
    image: '/images/blog/default.jpg',
    category,
    location: name,
    locationType: type,
    parentDistrict: parent,
    tags,
    keywords,
    content: type === 'district' ? districtTemplate(name) : neighborhoodTemplate(name),
  };
};

const DISTRICTS = [
  'Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler',
  'Bakırköy', 'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü',
  'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt',
  'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane',
  'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer',
  'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli', 'Tuzla',
  'Ümraniye', 'Üsküdar', 'Zeytinburnu',
];

const SANCAKTEPE_NEIGHBORHOODS = [
  'Abdurrahmangazi', 'Akpınar', 'Atatürk', 'Emek', 'Eyüp Sultan', 'Fatih',
  'Hacı Bektaş-ı Veli', 'Hilal', 'İnönü', 'Kemal Türkler', 'Meclis',
  'Merve', 'Mevlana', 'Osman Gazi', 'Paşaköy', 'Safa', 'Samandıra',
  'Sarıgazi', 'Veysel Karani', 'Yenidoğan', 'Yunus Emre',
];

export const BLOG_LOCATIONS: BlogLocation[] = [
  ...DISTRICTS.map((d) => generateLocation(d, 'district')),
  ...SANCAKTEPE_NEIGHBORHOODS.map((n) => generateLocation(n, 'neighborhood', 'Sancaktepe')),
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
