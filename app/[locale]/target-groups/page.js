import { getTranslations } from 'next-intl/server';

export default async function TargetGroupsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('targetGroups');

  const groups = [
    { key: 'employmentSupportProfessionals', icon: '👥' },
    { key: 'employers', icon: '🏢' },
    { key: 'disabledPersons', icon: '♿' }
  ];

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

        {/* Groups Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {groups.map((group) => (
            <div key={group.key} className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4681BC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#4681BC] to-[#2C5282] rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2C5282] group-hover:text-[#4681BC] transition-colors">
                    {t(`groups.${group.key}.title`)}
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                    <p>{t(`groups.${group.key}.body.paragraph1`)}</p>
                    <p>{t(`groups.${group.key}.body.paragraph2`)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Section */}
        <div className="bg-[#2C5282] rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4681BC] rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F1C424] rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                {t('conclusion')}
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-1 bg-[#F1C424] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
