import Link from 'next/link';
import { Language, languages, getTranslation } from '@/data/translations';

export default async function LangHome({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (languages.some(l => l.code === langParam) ? langParam : 'en') as Language;
  const t = getTranslation(lang);

  const quickLinks = [
    {
      href: `/${lang}/guide`,
      emoji: '🏠',
      title: t.nav.guide,
      desc: lang === 'ko' ? '체크인, 와이파이, 규칙 등' : 'Check-in, WiFi, Rules, etc.',
    },
    {
      href: `/${lang}/food`,
      emoji: '🍽️',
      title: t.nav.food,
      desc: lang === 'ko' ? '현지인 추천 맛집' : 'Local favorites',
    },
    {
      href: `/${lang}/attractions`,
      emoji: '🎯',
      title: t.nav.attractions,
      desc: lang === 'ko' ? '주변 볼거리' : 'Places to visit',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Hero Section */}
      <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="relative px-8 py-16 md:py-20 text-center">
          <div className="text-6xl mb-6 animate-bounce">🏠</div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {t.welcome}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 font-medium">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {quickLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
          >
            {/* 그라데이션 배경 효과 */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {link.emoji}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                {link.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{link.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Important Notice */}
      <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 md:p-8 rounded-r-2xl shadow-md">
        <div className="flex items-start gap-4">
          <span className="text-3xl">📌</span>
          <div>
            <h3 className="font-bold text-amber-900 text-xl mb-2">
              {lang === 'ko' ? '중요 안내' : 'Important'}
            </h3>
            <p className="text-amber-800 leading-relaxed">
              {lang === 'ko'
                ? '궁금한 점이 있으시면 언제든지 호스트에게 연락해주세요!'
                : 'If you have any questions, feel free to contact your host anytime!'}
            </p>
          </div>
        </div>
      </div>

      {/* Korean Culture Tips */}
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-4xl">🇰🇷</span>
          <h3 className="text-3xl font-bold text-gray-800">
            {lang === 'ko' ? '한국 문화 팁' : 'Korean Culture Tips'}
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              emoji: '🥢',
              title: lang === 'ko' ? '식사 예절' : 'Dining Etiquette',
              desc:
                lang === 'ko'
                  ? '어른이 먼저 수저를 들기 전에 식사를 시작하지 않아요.'
                  : 'Wait for elders to start eating first.',
            },
            {
              emoji: '🚇',
              title: lang === 'ko' ? '대중교통' : 'Public Transit',
              desc:
                lang === 'ko'
                  ? '티머니 카드를 준비하세요! 지하철, 버스 모두 사용 가능해요.'
                  : 'Get a T-money card! Works for subway and bus.',
            },
            {
              emoji: '👟',
              title: lang === 'ko' ? '실내 예절' : 'Indoor Manners',
              desc:
                lang === 'ko'
                  ? '실내에서는 신발을 벗어요.'
                  : 'Remove shoes when entering homes.',
            },
            {
              emoji: '🙏',
              title: lang === 'ko' ? '인사' : 'Greetings',
              desc:
                lang === 'ko'
                  ? '고개를 숙여 인사하는 것이 예의예요.'
                  : 'Bowing is a sign of respect.',
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="group flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-orange-50/50 rounded-2xl hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {tip.emoji}
              </span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-lg mb-1">
                  {tip.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
