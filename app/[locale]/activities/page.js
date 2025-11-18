import {getTranslations} from 'next-intl/server';

export default async function ActivitiesPage({params}) {
  await params;
  const t = await getTranslations('activities');

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="space-y-12">
          <div className="bg-gradient-to-r from-[#2C5282] to-[#1e3a5f] text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">{t('training.title')}</h2>
            <ul className="space-y-3 text-blue-50">
              <li>• {t('training.workshops')}</li>
              <li>• {t('training.employerAwareness')}</li>
              <li>• {t('training.skillsPrograms')}</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-amber-400 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">{t('research.title')}</h2>
            <ul className="space-y-3 text-gray-700">
              <li>→ {t('research.effectiveModels')}</li>
              <li>→ {t('research.toolsResources')}</li>
              <li>→ {t('research.labourTrends')}</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-amber-50 border-l-8 border-[#2C5282] p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-[#2C5282] mb-4">{t('networking.title')}</h2>
            <ul className="space-y-3 text-gray-700">
              <li>★ {t('networking.conferences')}</li>
              <li>★ {t('networking.knowledgeExchange')}</li>
              <li>★ {t('networking.communities')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
