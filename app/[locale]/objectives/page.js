import { getTranslations } from 'next-intl/server';

export default async function ObjectivesPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('objectives');

  const cards = [
    { key: 'supportedEmploymentProfessionals', icon: '👥' },
    { key: 'employers', icon: '🏢' },
    { key: 'capacitation', icon: '🎓' },
    { key: 'event', icon: '☕' },
    { key: 'dissemination', icon: '📢' }
  ];

  return (
    <div className="relative animate-slide-up">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6] py-20" style={{ paddingTop: '140px' }}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#4681BC] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F1C424] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-16 bg-gradient-to-b from-[#4681BC] to-[#F1C424] rounded-full"></div>
            <h1 className="text-5xl md:text-6xl font-black text-[#2C5282]">
              {t('title1')}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Specific Objectives Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5282] inline-block relative">
              {t('title2')}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#4681BC] to-[#F1C424] rounded-full"></div>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card.key} className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4681BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4681BC] to-[#2C5282] rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C5282] mb-3 group-hover:text-[#4681BC] transition-colors">
                    {t(`cards.${card.key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`cards.${card.key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
