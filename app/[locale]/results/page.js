import {getTranslations} from 'next-intl/server';

export default async function ResultsPage({params}) {
  await params;
  const t = await getTranslations('results');

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#2C5282] to-[#1e3a5f] text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">{t('stats.professionals')}</div>
            <div className="text-blue-100">{t('stats.professionalsLabel')}</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">{t('stats.partners')}</div>
            <div className="text-amber-100">{t('stats.partnersLabel')}</div>
          </div>
          <div className="bg-gradient-to-br from-[#2C5282] to-[#1e3a5f] text-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-5xl font-bold mb-2">{t('stats.countries')}</div>
            <div className="text-blue-100">{t('stats.countriesLabel')}</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#2C5282]">
          <h2 className="text-3xl font-bold text-[#2C5282] mb-6">{t('deliverables.title')}</h2>
          <ul className="space-y-4">
            <li className="flex items-start p-4 bg-blue-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-[#2C5282] text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
              <p className="text-gray-700 pt-1">{t('deliverables.item1')}</p>
            </li>
            <li className="flex items-start p-4 bg-blue-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-[#2C5282] text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
              <p className="text-gray-700 pt-1">{t('deliverables.item2')}</p>
            </li>
            <li className="flex items-start p-4 bg-blue-50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 bg-[#2C5282] text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
              <p className="text-gray-700 pt-1">{t('deliverables.item3')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
