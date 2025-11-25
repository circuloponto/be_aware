import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

export default async function PartnersPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('partners');

  const partnerKeys = ['Consultis', 'Rumo', 'nfedp', 'bist'];

  // Map partner keys to their logo filenames
  const logoMap = {
    'Consultis': '/logo_Consultis_transparent.png',
    'Rumo': '/logo_rumo_transparent.png',
    'nfedp': '/logo_nfedp_transparent.png',
    'bist': '/logo_bist_transparent.png'
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {partnerKeys.map((key) => {
            const base = `list.${key}`;
            const name = t(`${base}.name`);
            const country = t(`${base}.country`);
            const role = t(`${base}.role`);

            return (
              <Link
                key={key}
                href={`/${locale}/partners/${key}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#2C5282] p-8 group cursor-pointer hover:-translate-y-1"
              >
                {/* Logo */}
                <div className="mb-6 flex justify-center items-center h-24">
                  <Image
                    src={logoMap[key]}
                    alt={`${name} logo`}
                    width={200}
                    height={96}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>

                <h2 className="text-2xl font-bold text-[#2C5282] mb-2 group-hover:text-[#4681BC] transition-colors">{name}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span>📍 {country}</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold">
                    {role}
                  </span>
                </div>
                <div className="mt-4 text-[#4681BC] font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
