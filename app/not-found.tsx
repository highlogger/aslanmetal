import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-accent/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-primary mb-3">Sayfa Bulunamadı</h1>
        <p className="text-muted mb-8 leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanım dışı olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-white font-medium px-6 py-3 rounded-full hover:bg-accent-light transition-colors"
        >
          Anasayfaya Dön
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
