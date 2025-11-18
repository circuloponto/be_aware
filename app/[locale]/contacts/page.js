'use client'

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact';
import { useTranslations } from 'next-intl';

export default function ContactsPage() {
  const t = useTranslations('contacts');

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData(event.target);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      event.target.reset();
    } else {
      setStatus({ type: 'error', message: result.error });
    }
    
    setIsSubmitting(false);
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '140px' }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4681BC] to-[#2C5282] mb-6 border-l-8 border-[#F1C424] pl-6">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-700 mb-12 pl-6">
          {t('intro')}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section aria-labelledby="contact-form-heading" className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#4681BC]">
            <h2 id="contact-form-heading" className="text-2xl font-bold text-[#2C5282] mb-6">{t('form.heading')}</h2>
            
            {status.message && (
              <div 
                role="alert"
                aria-live="assertive"
                className={`mb-6 p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                <div className="flex items-start">
                  <span className="mr-2 text-xl" aria-hidden="true">
                    {status.type === 'success' ? '✓' : '⚠'}
                  </span>
                  <span>{status.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.nameLabel')} <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  aria-required="true"
                  aria-invalid={status.type === 'error' ? 'true' : 'false'}
                  aria-describedby="name-error"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4681BC] focus:outline-none focus:ring-2 focus:ring-[#4681BC]/20 transition-colors"
                  placeholder={t('form.namePlaceholder')}
                />
                <span id="name-error" className="sr-only">{t('form.nameError')}</span>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.emailLabel')} <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-invalid={status.type === 'error' ? 'true' : 'false'}
                  aria-describedby="email-error"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4681BC] focus:outline-none focus:ring-2 focus:ring-[#4681BC]/20 transition-colors"
                  placeholder={t('form.emailPlaceholder')}
                />
                <span id="email-error" className="sr-only">{t('form.emailError')}</span>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.messageLabel')} <span className="text-red-600" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  minLength={10}
                  maxLength={1000}
                  aria-required="true"
                  aria-invalid={status.type === 'error' ? 'true' : 'false'}
                  aria-describedby="message-error"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#4681BC] focus:outline-none focus:ring-2 focus:ring-[#4681BC]/20 resize-vertical transition-colors"
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
                <span id="message-error" className="sr-only">{t('form.messageError')}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-live="polite"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#4681BC] to-[#2C5282] text-white font-semibold rounded-lg hover:from-[#2C5282] hover:to-[#4681BC] transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#4681BC]/30"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-pulse mr-2">⏳</span>
                    {t('form.sending')}
                  </>
                ) : (
                  t('form.send')
                )}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <section aria-labelledby="contact-info-heading" className="bg-gradient-to-br from-[#4681BC] to-[#2C5282] text-white rounded-xl shadow-lg p-8">
            <h2 id="contact-info-heading" className="text-2xl font-bold mb-6">{t('office.title')}</h2>
            <address className="space-y-6 text-blue-50 not-italic">
              <div>
                <p className="font-semibold text-white mb-2">{t('office.addressLabel')}</p>
                <p>{t('office.organization')}</p>
                <p>{t('office.street')}</p>
                <p>{t('office.city')}</p>
              </div>
              
              <div>
                <p className="font-semibold text-white mb-2">{t('office.emailLabel')}</p>
                <a 
                  href="mailto:asdias@consultis.com" 
                  className="hover:text-[#F1C424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F1C424] rounded"
                  aria-label="Send email to asdias@consultis.com"
                >
                  asdias@consultis.com
                </a>
              </div>
              
              <div>
                <p className="font-semibold text-white mb-2">{t('office.phoneLabel')}</p>
                <a 
                  href="tel:+3221234567" 
                  className="hover:text-[#F1C424] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F1C424] rounded"
                  aria-label="Call +32 2 123 45 67"
                >
                  +32 2 123 45 67
                </a>
              </div>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
