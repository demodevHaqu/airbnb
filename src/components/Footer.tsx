'use client';

import Link from 'next/link';
import { Language, getTranslation } from '@/data/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              {lang === 'ko' ? '🏠 숙소 정보' : '🏠 About'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href={`/${lang}/guide`} className="hover:text-blue-400 transition-colors">
                  {t.nav.guide}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/food`} className="hover:text-blue-400 transition-colors">
                  {t.nav.food}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/attractions`} className="hover:text-blue-400 transition-colors">
                  {t.nav.attractions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              {lang === 'ko' ? '💬 지원' : '💬 Support'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {lang === 'ko' ? '도움말 센터' : 'Help Center'}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {lang === 'ko' ? '자주 묻는 질문' : 'FAQ'}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {lang === 'ko' ? '긴급 연락처' : 'Emergency Contact'}
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              {lang === 'ko' ? '📞 연락처' : '📞 Contact'}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">{t.footer.host}:</span>
                <span>Your Name</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📱</span>
                <a href="tel:010-XXXX-XXXX" className="hover:text-blue-400 transition-colors">
                  010-XXXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:host@example.com" className="hover:text-blue-400 transition-colors">
                  host@example.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              {lang === 'ko' ? '🌐 소셜 미디어' : '🌐 Follow Us'}
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              {t.footer.contact}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="mb-1">
                Made with ❤️ for our guests
              </p>
              <p>
                © {new Date().getFullYear()} Airbnb Guest Guide. {lang === 'ko' ? '모든 권리 보유' : 'All rights reserved'}
              </p>
            </div>

            {/* Language Selector */}
            <div className="flex gap-2 flex-wrap justify-center">
              {['ko', 'en', 'ja', 'zh', 'es', 'fr'].map((l) => (
                <Link
                  key={l}
                  href={`/${l}`}
                  className={`px-3 py-1 rounded-md text-sm transition-colors ${
                    l === lang
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
