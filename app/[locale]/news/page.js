import { getTranslations, getMessages } from 'next-intl/server';
import Link from 'next/link';

export default async function NewsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('news');
  const messages = await getMessages({ locale });
  const newsItems = Object.keys(messages.news.items);

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
              <Link
                key={index}
                href={`/${locale}/news/${key}`}
                className="block group"
              >
                <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-8 border-t-4 border-[#2C5282] cursor-pointer group-hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <time className="text-sm font-medium text-gray-600">
                      {new Date(date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'pt' ? 'pt-PT' : 'bg-BG', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#2C5282] mb-4 group-hover:text-[#4681BC] transition-colors">{title}</h2>
                  <div className="flex items-center text-[#4681BC] group-hover:text-[#2C5282] font-medium transition-colors">
                    <span>{t('readMore')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
