import { getTranslations, getMessages } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NewsPhotoSlider from '@/components/NewsPhotoSlider';

export default async function NewsDetailPage({ params }) {
  const { locale, slug } = await params;
  const t = await getTranslations('news');
  const messages = await getMessages({ locale });

  // Get valid news slugs from messages
  const newsItems = Object.keys(messages.news.items);

  // Check if news exists
  if (!newsItems.includes(slug)) {
    notFound();
  }

  const base = `items.${slug}`;
  const date = t(`${base}.date`);
  const title = t(`${base}.title`);
  const category = t(`${base}.category`);

  // Actually, in JSON it is paragraph1, paragraph2 etc for projectLaunch, but body for others.
  // I need to handle this.

  // Get images from messages directly to ensure array format
  const images = messages.news.items[slug].images || [];

  // Helper to render body content
  const renderBody = () => {
    const item = messages.news.items[slug];
    if (item.body) {
      return (
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {t(`${base}.body`)}
        </div>
      );
    }

    // Handle multiple paragraphs (paragraph1, paragraph2, etc.)
    return (
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        {Object.keys(item)
          .filter(key => key.startsWith('paragraph'))
          .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
          .map(key => (
            <p key={key}>{t(`${base}.${key}`)}</p>
          ))}
      </div>
    );
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center text-[#4681BC] hover:text-[#2C5282] font-semibold mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2">{t('backToNews')}</span>
        </Link>

        {/* News header */}
        <div className="bg-gradient-to-br from-[#E8F2F9] to-[#FFF9E6] rounded-2xl p-8 md:p-12 mb-8 border-l-8 border-[#F1C424]">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <time className="text-sm font-medium text-gray-600">
              {new Date(date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'pt' ? 'pt-PT' : 'bg-BG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
              {category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#2C5282]">
            {title}
          </h1>
        </div>

        {/* Photo slider */}
        {images.length > 0 && (
          <NewsPhotoSlider images={images} />
        )}

        {/* News content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <div className="prose prose-lg max-w-none">
            {renderBody()}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all news items
export async function generateStaticParams() {
  const locales = ['en', 'pt', 'bg'];

  // Fetch messages for one locale to get the keys (assuming keys are consistent)
  const messages = await getMessages({ locale: 'en' });
  const newsItems = Object.keys(messages.news.items);

  return locales.flatMap(locale =>
    newsItems.map(slug => ({
      locale,
      slug
    }))
  );
}

