import Link from 'next/link';
import { languages } from '@/data/translations';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome! 환영합니다!
          </h1>
          <p className="text-xl text-gray-600">
            Select your language / 언어를 선택하세요
          </p>
        </div>

        {/* Language Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={`/${lang.code}/guide`}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50 text-center group"
            >
              <span className="text-5xl block mb-3 group-hover:scale-110 transition-transform">
                {lang.flag}
              </span>
              <span className="text-xl font-semibold text-gray-800">
                {lang.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            🏠 Your Home Away From Home
          </p>
        </div>
      </div>
    </div>
  );
}
