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
  { label: 'İletişim', href: '/iletisim' },
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

export const BLOG_POSTS = [
  {
    slug: 'hurda-bakir-fiyatlari-2025',
    title: 'Hurda Bakır Fiyatları 2025: Güncel Piyasa Analizi',
    excerpt: '2025 yılı hurda bakır fiyatları, piyasa trendleri ve bakır hurda satarken dikkat edilmesi gerekenler hakkında kapsamlı rehber.',
    date: '2025-07-15',
    image: '/images/blog/copper-prices.jpg',
    category: 'Hurda Fiyatları',
    author: 'Aslan Metal',
    tags: ['bakır', 'hurda fiyatları', 'piyasa analizi'],
  },
  {
    slug: 'metal-geri-donusum-nasil-yapilir',
    title: 'Metal Geri Dönüşüm Nasıl Yapılır? Aşamaları ve Önemi',
    excerpt: 'Metal geri dönüşüm sürecinin aşamaları, kullanılan teknolojiler ve çevreye katkıları hakkında detaylı bilgi.',
    date: '2025-07-10',
    image: '/images/blog/recycling-process.jpg',
    category: 'Geri Dönüşüm',
    author: 'Aslan Metal',
    tags: ['geri dönüşüm', 'metal', 'çevre'],
  },
  {
    slug: 'hurda-satarken-dikkat-edilmesi-gerekenler',
    title: 'Hurda Satarken Dikkat Edilmesi Gereken 10 Önemli Nokta',
    excerpt: 'Hurda satışı yaparken en iyi fiyatı almanız ve güvenli işlem için bilmeniz gereken püf noktalar.',
    date: '2025-07-05',
    image: '/images/blog/scrap-tips.jpg',
    category: 'Rehber',
    author: 'Aslan Metal',
    tags: ['hurda satışı', 'rehber', 'güvenli işlem'],
  },
  {
    slug: 'istanbul-hurda-alim-hizmeti',
    title: 'İstanbul Genelinde Hurda Alım Hizmetimiz',
    excerpt: 'Aslan Metal olarak İstanbul\'un tüm ilçelerinde sunduğumuz profesyonel hurda alım hizmetini keşfedin.',
    date: '2025-06-28',
    image: '/images/blog/istanbul-service.jpg',
    category: 'Hizmet',
    author: 'Aslan Metal',
    tags: ['İstanbul', 'hurda alım', 'hizmet'],
  },
  {
    slug: 'fabrika-sokumu-sureci',
    title: 'Fabrika Sökümü: Profesyonel Söküm Süreci Nasıl İşler?',
    excerpt: 'Endüstriyel tesis ve fabrika söküm süreçleri, güvenlik önlemleri ve dikkat edilmesi gereken hususlar.',
    date: '2025-06-20',
    image: '/images/blog/factory-demolition.jpg',
    category: 'Söküm',
    author: 'Aslan Metal',
    tags: ['fabrika sökümü', 'endüstriyel', 'güvenlik'],
  },
  {
    slug: 'aluminyum-hurda-geri-donusumu',
    title: 'Alüminyum Hurda Geri Dönüşümünün Ekonomiye Katkısı',
    excerpt: 'Alüminyum geri dönüşümü ile sağlanan enerji tasarrufu, ekonomik faydalar ve sürdürülebilirlik.',
    date: '2025-06-15',
    image: '/images/blog/aluminum-recycling.jpg',
    category: 'Geri Dönüşüm',
    author: 'Aslan Metal',
    tags: ['alüminyum', 'enerji tasarrufu', 'ekonomi'],
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
