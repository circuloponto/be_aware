import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default async function PartnersPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('partners');

  const partnerKeys = ['Consultis', 'Rumo', 'nfedp', 'bist'];

  // Map partner keys to their logo filenames
  const logoMap = {
    'Consultis': '/logo_Consultis_transparent.png',
    'Rumo': '/logo_rumo_v2.png',
    'nfedp': '/logo_nfedp_transparent.png',
    'bist': '/logo_bist_transparent.png'
  };

  // Map partner keys to country codes for gradient selection
  const countryCodes = {
    'Consultis': 'PT',
    'Rumo': 'PT',
    'nfedp': 'BG',
    'bist': 'BG'
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 animate-slide-up" style={{ paddingTop: '140px' }}>
      {/* SVG Gradients Definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          {/* Portugal: Vertical split (Green/Red) */}
          <linearGradient id="gradient-PT" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="40%" stopColor="#006600" />
            <stop offset="40%" stopColor="#FF0000" />
          </linearGradient>

          {/* Bulgaria: Horizontal stripes (White/Green/Red) */}
          <linearGradient id="gradient-BG" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="33%" stopColor="#e0e0e0" /> {/* Slightly darkened white for visibility */}
            <stop offset="33%" stopColor="#00966E" />
            <stop offset="66%" stopColor="#00966E" />
            <stop offset="66%" stopColor="#D62612" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
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
            const countryCode = countryCodes[key];

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
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt
                      size={18}
                      style={{ fill: `url(#gradient-${countryCode})` }}
                      className="drop-shadow-sm"
                    />
                    <span>{country}</span>
                  </div>
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
