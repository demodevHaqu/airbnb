import Link from 'next/link';
import { languages } from '@/data/translations';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Welcome Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-7xl mb-4 animate-bounce">🏡</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
            환영합니다
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">
            Welcome!
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            편안한 숙박을 위한 가이드를 시작하세요
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Select your language to begin
          </p>
        </div>

        {/* Language Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {languages.map((lang, index) => (
            <Link
              key={lang.code}
              href={`/${lang.code}`}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-300 text-center overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 호버 효과 배경 */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <span className="text-6xl block mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                  {lang.flag}
                </span>
                <span className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {lang.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-sm">
            <span className="text-2xl">✨</span>
            <p className="text-gray-600 font-medium">
              Your Home Away From Home
            </p>
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
