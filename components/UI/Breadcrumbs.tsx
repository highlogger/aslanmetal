import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center gap-2 text-sm text-muted-light">
          <li>
            <Link
              href="/"
              className="hover:text-accent transition-colors duration-200 flex items-center gap-1"
            >
              <Home size={14} />
              <span className="hidden sm:inline">Anasayfa</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-muted-light/50" />
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
