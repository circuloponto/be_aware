import { getTranslations } from 'next-intl/server';

export default async function AccessibilityPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations('accessibility');

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 animate-slide-up" style={{ paddingTop: '140px' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-6 border-l-8 border-amber-400 pl-6">
          {t('title')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('commitment.title')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('commitment.body')}
            </p>
          </div>

          {/* Conformance Status */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('conformance.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('conformance.body')}
            </p>
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded">
              <p className="font-semibold text-blue-900">
                {t('conformance.status')}
              </p>
              <p className="text-sm text-blue-800 mt-2">
                {t('conformance.meaning')}
              </p>
            </div>
          </div>

          {/* Measures */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('measures.title')}</h2>
            <p className="text-gray-700 mb-4">{t('measures.intro')}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{t('measures.items.mission')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{t('measures.items.procurement')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{t('measures.items.training')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{t('measures.items.goals')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>{t('measures.items.qa')}</span>
              </li>
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border-l-4 border-amber-500 shadow-md">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">{t('specs.title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('specs.intro')}
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• HTML5</li>
              <li>• WAI-ARIA</li>
              <li>• CSS3</li>
              <li>• JavaScript</li>
            </ul>
            <p className="text-gray-700 mt-4">
              {t('specs.outro')}
            </p>
          </div>

          {/* Features */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('features.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.keyboard.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.keyboard.body')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.screenReader.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.screenReader.body')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.contrast.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.contrast.body')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.responsive.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.responsive.body')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.textAlt.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.textAlt.body')}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">{t('features.structure.title')}</h3>
                <p className="text-sm text-gray-700">{t('features.structure.body')}</p>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('feedback.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('feedback.intro')}
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email:</strong> <a href="mailto: consultis@consultis.pt" className="text-blue-600 hover:text-blue-800 underline"> consultis@consultis.pt</a></li>

            </ul>
            <p className="text-gray-700 mt-4">
              {t('feedback.response')}
            </p>
          </div>

          {/* Compliance */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('compliance.title')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('compliance.intro')}
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Directive (EU) 2016/2102</strong> - Web Accessibility Directive</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>EN 301 549</strong> - European Standard for Digital Accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>WCAG 2.1 Level AA</strong> - Web Content Accessibility Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Date */}
          <div className="bg-blue-100 p-6 rounded-xl text-center">
            <p className="text-sm text-blue-900">
              <strong>{t('lastUpdated')}</strong> {new Date().toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'pt' ? 'pt-PT' : locale === 'fr' ? 'fr-FR' : 'bg-BG', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
