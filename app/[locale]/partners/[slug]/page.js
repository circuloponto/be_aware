import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PartnerDetailPage({ params }) {
  const { locale, slug } = await params;
  const t = await getTranslations('partners');

  // Valid partner slugs
  const validPartners = ['Consultis', 'Rumo', 'nfedp', 'bist'];

  // Check if partner exists
  if (!validPartners.includes(slug)) {
    notFound();
  }

  // Lowercase slug for details lookup as keys are lowercase in JSON
  const detailsSlug = slug.toLowerCase();
  const base = `details.${detailsSlug}`;
  const name = t(`list.${slug}.name`);
  const country = t(`list.${slug}.country`);
  const role = t(`list.${slug}.role`);

  // Map partner keys to their logo filenames
  const logoMap = {
    'Consultis': '/logo_Consultis_transparent.png',
    'Rumo': '/logo_rumo_transparent.png',
    'nfedp': '/logo_nfedp_transparent.png',
    'bist': '/logo_bist_transparent.png'
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '140px' }}>
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href={`/${locale}/partners`}
          className="inline-flex items-center text-[#4681BC] hover:text-[#2C5282] font-semibold mb-8 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2">{t('backToPartners')}</span>
        </Link>

        {/* Partner header */}
        <div className="bg-gradient-to-br from-[#E8F2F9] to-[#FFF9E6] rounded-2xl p-8 md:p-12 mb-8 border-l-8 border-[#F1C424]">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logoMap[slug]}
                alt={`${name} logo`}
                width={200}
                height={120}
                className="max-h-32 w-auto object-contain"
              />
            </div>

            {/* Text content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-4">
                {name}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-lg">
                <span className="text-gray-700">📍 {country}</span>
                <span className="px-4 py-2 bg-[#F1C424] text-[#2C5282] rounded-full font-bold">
                  {role}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-[#2C5282] mb-6 border-l-4 border-[#4681BC] pl-4">
            {t(`${base}.aboutTitle`)}
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>{t(`${base}.paragraph1`)}</p>
            <p>{t(`${base}.paragraph2`)}</p>
            <p className="font-medium text-[#4681BC]">
              {(() => {
                const text = t(`${base}.paragraph3`);
                const urlPattern = /(https?:\/\/[^\s]+)/;
                const match = text.match(urlPattern);

                if (match) {
                  const url = match[0];
                  const parts = text.split(urlPattern);
                  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

                  return (
                    <>
                      {parts[0]}
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#2C5282] transition-colors underline font-semibold"
                      >
                        {displayUrl}
                      </a>
                      {parts[2] || ''}
                    </>
                  );
                }
                return text;
              })()}
            </p>
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-gradient-to-br from-[#2C5282] to-[#4681BC] rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">
            {t(`${base}.contactTitle`)}
          </h2>
          <div className="space-y-3 text-lg">
            <p>
              <span className="font-semibold">📧 Email:</span>{' '}
              <a href={`mailto:${t(`${base}.email`)}`} className="hover:text-[#F1C424] transition-colors underline">
                {t(`${base}.email`)}
              </a>
            </p>
            <p>
              <span className="font-semibold">🌐 Website:</span>{' '}
              <a
                href={t(`${base}.website`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F1C424] transition-colors underline"
              >
                {t(`${base}.website`)}
              </a>
            </p>
            <p>
              <span className="font-semibold">📍 Address:</span>{' '}
              {t(`${base}.address`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all partners
export async function generateStaticParams() {
  const partners = ['Consultis', 'Rumo', 'nfedp', 'bist'];
  const locales = ['en', 'pt', 'nl'];

  return locales.flatMap(locale =>
    partners.map(slug => ({
      locale,
      slug
    }))
  );
}
