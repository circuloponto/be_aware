import {getTranslations} from 'next-intl/server';

export default async function ObjectivesPage({params}) {
  await params;
  const t = await getTranslations('objectives');

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
              {t('title')}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4681BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4681BC] to-[#2C5282] rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2C5282] mb-4 group-hover:text-[#4681BC] transition-colors">
                  {t('cards.inclusiveEmployment.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('cards.inclusiveEmployment.body')}
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F1C424]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#F1C424] to-[#D4A91E] rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2C5282] mb-4 group-hover:text-[#F1C424] transition-colors">
                  {t('cards.buildCapacity.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('cards.buildCapacity.body')}
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4681BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#4681BC] to-[#2C5282] rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2C5282] mb-4 group-hover:text-[#4681BC] transition-colors">
                  {t('cards.collaboration.title')}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('cards.collaboration.body')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
