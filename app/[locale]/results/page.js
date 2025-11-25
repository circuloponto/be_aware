import { getTranslations } from 'next-intl/server';

export default async function ResultsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('results');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6] py-16 px-4 sm:px-6 lg:px-8 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-16 bg-gradient-to-b from-[#4681BC] to-[#F1C424] rounded-full"></div>
            <h1 className="text-4xl md:text-5xl font-black text-[#2C5282]">
              {t('title')}
            </h1>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            {t('intro')}
          </p>
        </div>

        {/* Tangible Results Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5282] border-b-4 border-[#F1C424] pb-4 inline-block">
            {t('subtitle1')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="w-10 h-10 bg-[#E8F2F9] rounded-full flex items-center justify-center text-[#2C5282] font-bold mb-4">
                  {num}
                </div>
                <h3 className="text-xl font-bold text-[#2C5282] mb-3">
                  {t(`bullets.bullet${num}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {t(`bullets.bullet${num}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Impact Section */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5282] border-b-4 border-[#F1C424] pb-4 inline-block">
            {t('subtitle2')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="bg-gradient-to-br from-[#2C5282] to-[#1e3a5f] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-xl font-bold text-[#F1C424] mb-4">
                  {t(`bullets2.bullet${num}.title`)}
                </h3>
                <p className="text-blue-50 leading-relaxed">
                  {t(`bullets2.bullet${num}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
