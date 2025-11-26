import { Language, languages, getTranslation } from '@/data/translations';
import { attractions } from '@/data/places';

export default async function AttractionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (languages.some(l => l.code === langParam) ? langParam : 'en') as Language;
  const t = getTranslation(lang);
  const isKo = lang === 'ko';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        {t.attractions.title}
      </h1>
      <p className="text-center text-gray-600 mb-8">{t.attractions.subtitle}</p>

      {/* Attraction Cards */}
      <div className="space-y-6">
        {attractions.map((attraction, index) => (
          <div
            key={attraction.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800">
                    {isKo ? attraction.name.ko : attraction.name.en}
                  </h2>
                </div>
              </div>
              <div className="text-right text-sm">
                <p className="text-gray-500">📍 {attraction.distance}</p>
                <p className="text-purple-600 font-semibold">⏱️ {attraction.duration}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-lg">
              {isKo ? attraction.description.ko : attraction.description.en}
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-700 font-semibold">
                💡 {isKo ? attraction.tips.ko : attraction.tips.en}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Transportation Tips */}
      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {isKo ? '🚇 교통 이용 팁' : '🚇 Transportation Tips'}
        </h3>
        <div className="space-y-4">
          {[
            {
              emoji: '💳',
              title: isKo ? 'T-money 카드' : 'T-money Card',
              desc: isKo
                ? '편의점에서 구매 가능. 지하철, 버스, 택시 모두 사용!'
                : 'Buy at convenience stores. Works for subway, bus, taxi!',
            },
            {
              emoji: '📱',
              title: isKo ? '네이버 지도 / 카카오맵' : 'Naver Map / Kakao Map',
              desc: isKo
                ? '구글맵보다 한국에서 더 정확해요!'
                : 'More accurate than Google Maps in Korea!',
            },
            {
              emoji: '🚕',
              title: isKo ? '택시 앱' : 'Taxi Apps',
              desc: isKo
                ? '카카오 T 앱으로 택시 호출. 영어 지원!'
                : 'Use Kakao T app for taxi. English supported!',
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <span className="text-3xl">{tip.emoji}</span>
              <div>
                <h4 className="font-semibold text-gray-800">{tip.title}</h4>
                <p className="text-gray-600">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Korean Experiences */}
      <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {isKo ? '🎎 한국에서만 할 수 있는 경험' : '🎎 Unique Korean Experiences'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              emoji: '👘',
              ko: '한복 체험 - 궁궐 무료 입장!',
              en: 'Hanbok rental - Free palace entry!',
            },
            {
              emoji: '🛁',
              ko: '찜질방 - 24시간 한국식 사우나',
              en: 'Jjimjilbang - 24hr Korean sauna',
            },
            {
              emoji: '🎤',
              ko: '노래방 - K-pop 직접 불러보기',
              en: 'Noraebang - Sing K-pop yourself!',
            },
            {
              emoji: '🍗',
              ko: '치맥 - 치킨 + 맥주 조합',
              en: 'Chimaek - Chicken + Beer combo',
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
            >
              <span className="text-2xl">{exp.emoji}</span>
              <span className="text-gray-700">{isKo ? exp.ko : exp.en}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
