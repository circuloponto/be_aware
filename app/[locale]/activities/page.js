import { getTranslations } from 'next-intl/server';

export default async function ActivitiesPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('activities');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6] py-16 px-4 sm:px-6 lg:px-8 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-5xl mx-auto space-y-16">
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

        <div className="space-y-12">
          {/* Training for Employer Engagement */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#E8F2F9] rounded-2xl items-center justify-center text-3xl">
                🤝
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C5282]">
                  {t('activities.trainingEmployers.title')}
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{t('activities.trainingEmployers.body.paragraph1.intro')}</p>
                  <ul className="space-y-3 pl-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 bg-[#F1C424] rounded-full flex-shrink-0"></span>
                        <span>{t(`activities.trainingEmployers.body.paragraph1.bullet${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pilot Training */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#FFF9E6] rounded-2xl items-center justify-center text-3xl">
                ✈️
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C5282]">
                  {t('activities.pivotTraining.title')}
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{t('activities.pivotTraining.body.paragraph1')}</p>
                  <p>{t('activities.pivotTraining.body.paragraph2')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Good Practices Manual */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#E8F2F9] rounded-2xl items-center justify-center text-3xl">
                📚
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C5282]">
                  {t('activities.manualGoodPractices.title')}
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{t('activities.manualGoodPractices.body.paragraph1')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dissemination */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[#FFF9E6] rounded-2xl items-center justify-center text-3xl">
                📢
              </div>
              <div className="space-y-6 flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C5282]">
                  {t('activities.dissemination.title')}
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{t('activities.dissemination.body.paragraph1.intro')}</p>
                  <ul className="space-y-3 pl-4">
                    {[1, 2].map((num) => (
                      <li key={num} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 bg-[#F1C424] rounded-full flex-shrink-0"></span>
                        <span>{t(`activities.dissemination.body.paragraph1.bullet${num}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="pt-2 font-medium text-[#2C5282]">
                    {t('activities.dissemination.body.paragraph1.outro')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
