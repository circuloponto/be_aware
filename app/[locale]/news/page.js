import { getTranslations } from 'next-intl/server';

export default async function NewsPage({ params }) {
  await params;
  const t = await getTranslations('news');

  const newsItems = ['projectLaunch', 'firstWorkshop', 'researchReport'];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="space-y-8">
          {newsItems.map((key, index) => {
            const base = `items.${key}`;
            const date = t(`${base}.date`);
            const title = t(`${base}.title`);
            const category = t(`${base}.category`);

            return (
              <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-[#2C5282]">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <time className="text-sm font-medium text-gray-600">
                    {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#2C5282] mb-4">{title}</h2>
                <button className="text-[#4681BC] hover:text-[#2C5282] font-medium">
                  {t('readMore')}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
