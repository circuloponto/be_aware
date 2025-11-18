'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function Footer() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [currentYear, setCurrentYear] = useState('2024');

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'objectives', href: '/objectives' },
    { key: 'targetGroups', href: '/target-groups' },
    { key: 'activities', href: '/activities' },
    { key: 'results', href: '/results' },
    { key: 'partners', href: '/partners' },
    { key: 'news', href: '/news' },
    { key: 'contacts', href: '/contacts' },
  ];

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-[#2C5282] via-[#4681BC] to-[#2C5282] text-white mt-auto overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F1C424] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F1C424] rounded-full blur-3xl"></div>
      </div>

      {/* EU Funding Banner */}
      <div className="relative bg-gradient-to-r from-[#F1C424] to-[#D4A91E] border-t-4 border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center">
          <p className="text-base md:text-lg font-bold text-[#2C5282] flex items-center justify-center space-x-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span>This project is funded by the European Union</span>
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-[#F1C424] mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#F1C424] mr-3 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link 
                    href={`/${locale}${item.href}`}
                    className="text-sm text-white/80 hover:text-[#F1C424] transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-xl font-bold text-[#F1C424] mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#F1C424] mr-3 rounded-full"></div>
              More
            </h3>
            <ul className="space-y-3">
              {navItems.slice(4).map((item) => (
                <li key={item.href}>
                  <Link 
                    href={`/${locale}${item.href}`}
                    className="text-sm text-white/80 hover:text-[#F1C424] transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold text-[#F1C424] mb-6 flex items-center">
              <div className="w-1 h-6 bg-[#F1C424] mr-3 rounded-full"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`/${locale}/accessibility`}
                  className="text-sm text-white/80 hover:text-[#F1C424] transition-all duration-300 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/privacy`}
                  className="text-sm text-white/80 hover:text-[#F1C424] transition-all duration-300 flex items-center group"
                >
                  <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative bg-[#2C5282]/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-white/70">
            © {currentYear} <span className="font-bold text-[#F1C424]">BE AWARE</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
