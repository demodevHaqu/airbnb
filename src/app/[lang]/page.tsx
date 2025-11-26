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
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.welcome}</h1>
        <p className="text-xl opacity-90">{t.subtitle}</p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-5xl mb-4">{link.emoji}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{link.title}</h2>
            <p className="text-gray-600">{link.desc}</p>
          </Link>
        ))}
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
        <h3 className="font-bold text-yellow-800 text-lg mb-2">
          {lang === 'ko' ? '📌 중요 안내' : '📌 Important'}
        </h3>
        <p className="text-yellow-700">
          {lang === 'ko'
            ? '궁금한 점이 있으시면 언제든지 호스트에게 연락해주세요!'
            : 'If you have any questions, feel free to contact your host anytime!'}
        </p>
      </div>

      {/* Korean Culture Tips */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {lang === 'ko' ? '🇰🇷 한국 문화 팁' : '🇰🇷 Korean Culture Tips'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
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
            <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{tip.emoji}</span>
              <div>
                <h4 className="font-semibold text-gray-800">{tip.title}</h4>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
