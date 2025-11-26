import { Language, getTranslation } from '@/data/translations';

export default async function GuidePage({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const t = getTranslation(lang);
  const g = t.guide;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        {g.title}
      </h1>

      {/* Check-in / Check-out */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{g.checkin.title}</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="text-green-600 font-semibold text-lg">{g.checkin.checkinTime}</span>
          </div>
          <div className="flex items-center p-3 bg-red-50 rounded-lg">
            <span className="text-red-600 font-semibold text-lg">{g.checkin.checkoutTime}</span>
          </div>
          <p className="text-gray-600 mt-2">💡 {g.checkin.earlyCheckin}</p>
          <p className="text-gray-600">🔐 {g.checkin.keyInfo}</p>
        </div>
      </section>

      {/* WiFi */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{g.wifi.title}</h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-sm mb-1">{g.wifi.name}</p>
              <p className="text-2xl font-mono font-bold text-gray-800">{g.wifi.wifiName}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-sm mb-1">{g.wifi.password}</p>
              <p className="text-2xl font-mono font-bold text-blue-600">{g.wifi.wifiPassword}</p>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{g.rules.title}</h2>
        <ul className="space-y-3">
          {g.rules.items.map((rule, index) => (
            <li
              key={index}
              className="p-3 bg-gray-50 rounded-lg text-gray-700 text-lg"
            >
              {rule}
            </li>
          ))}
        </ul>
      </section>

      {/* Amenities */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{g.amenities.title}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {g.amenities.items.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-blue-50 rounded-lg text-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Trash / Recycling - IMPORTANT for Korea */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6 border-2 border-green-400">
        <h2 className="text-2xl font-bold text-green-600 mb-2">{g.trash.title}</h2>
        <p className="text-orange-600 font-semibold mb-4 text-lg">
          ⚠️ {g.trash.description}
        </p>
        <div className="space-y-3">
          {g.trash.items.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded-lg text-gray-700 text-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="bg-red-50 rounded-2xl p-6 shadow-lg mb-6 border-2 border-red-300">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{g.emergency.title}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {g.emergency.items.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg text-gray-700 text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Checkout Instructions */}
      <section className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{g.checkout.title}</h2>
        <div className="space-y-2">
          {g.checkout.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-3 bg-gray-50 rounded-lg"
            >
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 font-bold">
                {index + 1}
              </span>
              <span className="text-gray-700 text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Thank you message */}
      <div className="text-center py-8 bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl">
        <p className="text-2xl">
          {lang === 'ko'
            ? '편안한 숙박 되세요! 🏠✨'
            : 'Enjoy your stay! 🏠✨'}
        </p>
      </div>
    </div>
  );
}
