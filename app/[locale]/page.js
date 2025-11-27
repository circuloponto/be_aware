import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { FiTarget } from 'react-icons/fi';
import { TiGroup } from 'react-icons/ti';
import { MdVolunteerActivism } from 'react-icons/md';
import { CgCompressRight } from 'react-icons/cg';

export default async function Home({ params }) {
  const { locale } = await params;
  const t = await getTranslations('about');

  return (
    <div className="relative overflow-hidden animate-slide-up">
      {/* Hero Section with animated background */}
      <section className="relative min-h-screen lg:h-screen flex items-center py-20 lg:py-0" style={{ paddingTop: '80px' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#4681BC]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F1C424]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#4681BC]/5 to-[#F1C424]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center animate-fade-in">
            {/* Left Column - Text Content */}
            <div className="space-y-2 lg:space-y-4 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4681BC] via-[#4681BC] to-[#2C5282] leading-tight">
                  {t('title')}
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <Link
                  href={`/${locale}/objectives`}
                  className="group px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#4681BC] to-[#2C5282] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <span>{t('discoverMission')}</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href={`/${locale}/contacts`}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white border-2 border-[#4681BC] text-[#4681BC] font-bold rounded-full shadow-lg hover:bg-[#4681BC] hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base text-center"
                >
                  {t('getInTouch')}
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src={locale === 'pt' ? '/PT_Disclaimer.png' : '/EN_Disclaimer.png'}
                alt="EU Co-financing"
                width={450}
                height={300}
                className="h-auto w-[180px] sm:w-[280px] lg:w-[450px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#4681BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Text Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in">
            {t('paragraph1')}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in delay-100">
            {t('paragraph2')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C5282] mb-4">
              {t('exploreWork')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4681BC] to-[#F1C424] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { titleKey: 'objectives', href: '/objectives', icon: FiTarget, gradient: 'from-[#4681BC] to-[#2C5282]', color: 'text-[#4681BC]' },
              { titleKey: 'targetGroups', href: '/target-groups', icon: TiGroup, gradient: 'from-[#F1C424] to-[#D4A91E]', color: 'text-[#F1C424]' },
              { titleKey: 'activities', href: '/activities', icon: MdVolunteerActivism, gradient: 'from-[#4681BC] to-[#2C5282]', color: 'text-[#4681BC]' },
              { titleKey: 'results', href: '/results', icon: CgCompressRight, gradient: 'from-[#F1C424] to-[#D4A91E]', color: 'text-[#F1C424]' },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    <item.icon />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C5282] mb-2 group-hover:text-[#4681BC] transition-colors">{t(item.titleKey)}</h3>
                  <div className="flex items-center text-[#4681BC] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm">{t('learnMore')}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
