import {getTranslations} from 'next-intl/server';

export default async function TargetGroupsPage({params}) {
  await params;
  const t = await getTranslations('targetGroups');

  const groups = [
    { key: 'employmentSupportProfessionals', icon: '👨‍💼' },
    { key: 'peopleWithDisabilities', icon: '🦽' },
    { key: 'employers', icon: '🏢' },
    { key: 'trainingOrganizations', icon: '🎓' },
    { key: 'policyMakers', icon: '⚖️' },
    { key: 'socialServiceAgencies', icon: '🤝' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6] py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#2C5282]">
              <div className="text-4xl mb-4">{group.icon}</div>
              <h2 className="text-xl font-bold text-[#2C5282]">{t(`groups.${group.key}`)}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
