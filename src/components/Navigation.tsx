'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language, languages, getTranslation } from '@/data/translations';

interface NavigationProps {
  lang: Language;
}

export default function Navigation({ lang }: NavigationProps) {
  const pathname = usePathname();
  const t = getTranslation(lang);
  const currentLang = languages.find((l) => l.code === lang);

  const navItems = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/guide`, label: t.nav.guide },
    { href: `/${lang}/food`, label: t.nav.food },
    { href: `/${lang}/attractions`, label: t.nav.attractions },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${lang}`} className="text-xl font-bold text-gray-800">
            {currentLang?.flag} Stay Guide
          </Link>

          <div className="flex items-center space-x-1 md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 md:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="text-2xl hover:scale-110 transition-transform"
            title="Change Language"
          >
            {currentLang?.flag}
          </Link>
        </div>
      </div>
    </nav>
  );
}
