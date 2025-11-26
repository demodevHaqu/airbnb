'use client';

import { Language, getTranslation } from '@/data/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = getTranslation(lang);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg mb-4">{t.footer.contact}</p>
        <div className="flex justify-center space-x-6 text-gray-300">
          <span>{t.footer.host}: Your Name</span>
          <span>|</span>
          <span>010-XXXX-XXXX</span>
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Made with ❤️ for our guests
        </p>
      </div>
    </footer>
  );
}
