import { Language, languages, getTranslation } from '@/data/translations';
import { restaurants } from '@/data/places';

export default async function FoodPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = (languages.some(l => l.code === langParam) ? langParam : 'en') as Language;
  const t = getTranslation(lang);
  const isKo = lang === 'ko';

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'korean':
        return '🍚';
      case 'cafe':
        return '☕';
      case 'convenience':
        return '🏪';
      default:
        return '🍽️';
    }
  };

  const getCategoryName = (category: string) => {
    const cats = t.food.categories as Record<string, string>;
    return cats[category] || category;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        {t.food.title}
      </h1>
      <p className="text-center text-gray-600 mb-8">{t.food.subtitle}</p>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['korean', 'cafe', 'convenience'].map((cat) => (
          <span
            key={cat}
            className="px-4 py-2 bg-white rounded-full shadow text-gray-700 font-medium"
          >
            {getCategoryEmoji(cat)} {getCategoryName(cat)}
          </span>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="space-y-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{getCategoryEmoji(restaurant.category)}</span>
                  <h2 className="text-xl font-bold text-gray-800">
                    {isKo ? restaurant.name.ko : restaurant.name.en}
                  </h2>
                </div>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  {getCategoryName(restaurant.category)}
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">{restaurant.distance}</p>
                <p className="text-green-600 font-semibold">{restaurant.priceRange}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              {isKo ? restaurant.description.ko : restaurant.description.en}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-700 font-semibold mb-1">
                  {isKo ? '🌟 추천 메뉴' : '🌟 Must Try'}
                </p>
                <p className="text-gray-700">
                  {isKo ? restaurant.mustTry.ko : restaurant.mustTry.en}
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 font-semibold mb-1">
                  {isKo ? '💡 꿀팁' : '💡 Tips'}
                </p>
                <p className="text-gray-700">
                  {isKo ? restaurant.tips.ko : restaurant.tips.en}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Convenience Store Guide */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {isKo ? '🏪 한국 편의점 꿀팁' : '🏪 Korean Convenience Store Tips'}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              ko: '삼각김밥은 가성비 최고! (₩1,000~1,500)',
              en: 'Triangle kimbap is best value! (₩1,000~1,500)',
            },
            {
              ko: '전자레인지, 온수기 무료 사용',
              en: 'Free microwave & hot water',
            },
            {
              ko: '1+1, 2+1 행사를 찾아보세요!',
              en: 'Look for 1+1, 2+1 deals!',
            },
            {
              ko: 'ATM 현금인출 가능 (소액 수수료)',
              en: 'ATM available (small fee)',
            },
          ].map((tip, i) => (
            <div key={i} className="flex items-center space-x-2 text-gray-700">
              <span className="text-green-500">✓</span>
              <span>{isKo ? tip.ko : tip.en}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
