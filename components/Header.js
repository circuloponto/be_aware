'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import GB from 'country-flag-icons/react/3x2/GB';
import PT from 'country-flag-icons/react/3x2/PT';
import NL from 'country-flag-icons/react/3x2/NL';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dropdownRef = useRef(null);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calculate gradient that matches the page gradient at scroll position
  // The hero gradient: bg-gradient-to-br from-[#E8F2F9] via-white to-[#FFF9E6]
  // This creates a diagonal gradient from top-left (blue) to bottom-right (yellow)
  const getHeaderGradient = () => {
    // Define gradient stops
    const startColor = { r: 232, g: 242, b: 249 }; // #E8F2F9 (light blue)
    const midColor = { r: 255, g: 255, b: 255 };   // white
    const endColor = { r: 255, g: 249, b: 230 };   // #FFF9E6 (light yellow)
    
    // Estimate the hero section height for gradient calculation
    const heroHeight = typeof window !== 'undefined' ? window.innerHeight * 0.85 : 800;
    
    // For a diagonal gradient (to-br), we need to calculate the gradient along the diagonal
    // The diagonal goes from top-left (0,0) to bottom-right (width, height)
    // At any Y position (scrollY), we sample across the width
    
    // Helper function to interpolate between three colors
    const interpolateColor = (position) => {
      // position is 0 to 1 along the diagonal gradient
      const clamped = Math.max(0, Math.min(1, position));
      
      if (clamped < 0.5) {
        // First half: startColor to midColor
        const t = clamped * 2;
        return {
          r: Math.round(startColor.r + (midColor.r - startColor.r) * t),
          g: Math.round(startColor.g + (midColor.g - startColor.g) * t),
          b: Math.round(startColor.b + (midColor.b - startColor.b) * t)
        };
      } else {
        // Second half: midColor to endColor
        const t = (clamped - 0.5) * 2;
        return {
          r: Math.round(midColor.r + (endColor.r - midColor.r) * t),
          g: Math.round(midColor.g + (endColor.g - midColor.g) * t),
          b: Math.round(midColor.b + (endColor.b - midColor.b) * t)
        };
      }
    };
    
    // Calculate multiple color stops across the width
    // For a diagonal gradient, at Y position scrollY, the gradient position varies with X
    const numStops = 5; // More stops = smoother gradient
    const colorStops = [];
    
    for (let i = 0; i < numStops; i++) {
      const xPercent = i / (numStops - 1); // 0 to 1 across width
      
      // For a diagonal gradient to-br, the gradient position at (x, y) is:
      // position = (x + y) / (width + height)
      // We normalize this assuming width and height are similar
      const diagonalPosition = (xPercent + (scrollY / heroHeight)) / 2;
      
      const color = interpolateColor(diagonalPosition);
      colorStops.push(`rgba(${color.r}, ${color.g}, ${color.b}, 0.95) ${Math.round(xPercent * 100)}%`);
    }
    
    return `linear-gradient(to right, ${colorStops.join(', ')})`;
  };

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

  const handleLanguageChange = (newLocale) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Ensure we don't have double slashes
    const cleanPath = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
    router.push(`/${newLocale}${cleanPath}`);
    router.refresh();
  };

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with pill background */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="logo-pill backdrop-blur-md shadow-lg px-4 py-2">
              <Image
                src="/logo_be_aware_animated.svg"
                alt="BE AWARE Logo"
                width={240}
                height={64}
                priority
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-2 bg-white/95 backdrop-blur-md shadow-lg rounded-full px-4 py-2 border border-[#F1C424]/20" aria-label="Main navigation">
            {navItems.map((item) => {
              const targetPath = `/${locale}${item.href}`;
              // Check if current page matches, handling home page specially
              const isActive = pathname === targetPath || (item.href === '/' && pathname === `/${locale}`);

              return (
                <Link
                  key={item.href}
                  href={targetPath}
                  className={`relative px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-300 rounded-full ${
                    isActive
                      ? 'bg-gradient-to-r from-[#4681BC] to-[#2C5282] text-white shadow-md'
                      : 'text-[#2C5282] hover:text-[#4681BC] hover:bg-[#E8F2F9]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(item.key)}
                </Link>
              );
            })}
            
            {/* Custom Language Dropdown */}
            <div className="ml-4 relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4681BC] to-[#4681BC]/90 text-white rounded-full text-sm font-semibold cursor-pointer hover:from-[#2C5282] hover:to-[#4681BC] transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Select language"
                aria-expanded={isLangDropdownOpen}
              >
                <span className="w-5 h-4">
                  {locale === 'en' ? <GB className="w-full h-full" /> : locale === 'pt' ? <PT className="w-full h-full" /> : <NL className="w-full h-full" />}
                </span>
                <span className="uppercase">{locale}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
                  {[
                    { code: 'en', label: 'English', country: 'gb' },
                    { code: 'pt', label: 'Português', country: 'pt' },
                    { code: 'nl', label: 'Nederlands', country: 'nl' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                        locale === lang.code
                          ? 'bg-[#E8F2F9] text-[#2C5282] font-bold'
                          : 'text-gray-700 hover:bg-[#E8F2F9] hover:text-[#4681BC]'
                      }`}
                    >
                      <span className="w-6 h-4">
                        {lang.country === 'gb' ? <GB className="w-full h-full" /> : lang.country === 'pt' ? <PT className="w-full h-full" /> : <NL className="w-full h-full" />}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{lang.label}</span>
                        <span className="text-xs text-gray-500 uppercase">{lang.code}</span>
                      </div>
                      {locale === lang.code && (
                        <span className="ml-auto text-[#F1C424]">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#4681BC] hover:bg-[#E8F2F9] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="xl:hidden fixed left-0 right-0 top-24 overflow-y-auto z-[60] shadow-2xl border-t border-white/20" style={{ 
          height: 'calc(100vh - 6rem)',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          <nav className="w-full h-full">
          {navItems.map((item, index) => {
            const targetPath = `/${locale}${item.href}`;
            const isActive = pathname === targetPath || (item.href === '/' && pathname === `/${locale}`);

            return (
              <Link
                key={item.href}
                href={targetPath}
                className={`block px-6 py-3.5 text-base font-bold whitespace-nowrap transition-all duration-300 border-l-4 animate-fade-in ${
                  isActive
                    ? 'text-[#2C5282] bg-gradient-to-r from-[#E8F2F9] to-[#FFF9E6] border-[#4681BC] shadow-sm'
                    : 'text-[#2C5282] hover:bg-[#E8F2F9]/50 hover:text-[#4681BC] hover:pl-8 hover:tracking-wider border-transparent hover:border-[#4681BC]'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(item.key)}
              </Link>
            );
          })}
          
          {/* Mobile Language Selector */}
          <div className="px-6 py-4 mt-2 border-t border-[#E8F2F9]/50 animate-fade-in" style={{ animationDelay: `${navItems.length * 50}ms` }}>
            <label className="block text-sm font-semibold text-[#2C5282] mb-3">
              Language
            </label>
            
            {/* Custom Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                className="w-full px-4 py-3 bg-gradient-to-r from-[#4681BC] to-[#2C5282] text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-between"
                aria-expanded={isMobileLangOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-4">
                    {locale === 'en' ? <GB className="w-full h-full" /> : locale === 'pt' ? <PT className="w-full h-full" /> : <NL className="w-full h-full" />}
                  </span>
                  <span>
                    {locale === 'en' ? 'English' : locale === 'pt' ? 'Português' : 'Nederlands'}
                  </span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Options */}
              {isMobileLangOpen && (
                <div className="absolute left-0 right-0 bottom-full mb-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 animate-fade-in">
                  {[
                    { code: 'en', label: 'English', country: 'gb' },
                    { code: 'pt', label: 'Português', country: 'pt' },
                    { code: 'nl', label: 'Nederlands', country: 'nl' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code);
                        setIsMobileLangOpen(false);
                      }}
                      className={`w-full px-4 py-4 text-left flex items-center gap-3 transition-colors border-b border-gray-100 last:border-b-0 ${
                        locale === lang.code
                          ? 'bg-[#E8F2F9] text-[#2C5282] font-bold'
                          : 'text-gray-700 hover:bg-[#E8F2F9] hover:text-[#4681BC]'
                      }`}
                    >
                      <span className="w-8 h-6">
                        {lang.country === 'gb' ? <GB className="w-full h-full" /> : lang.country === 'pt' ? <PT className="w-full h-full" /> : <NL className="w-full h-full" />}
                      </span>
                      <div className="flex flex-col flex-1">
                        <span className="text-base font-semibold">{lang.label}</span>
                        <span className="text-xs text-gray-500 uppercase">{lang.code}</span>
                      </div>
                      {locale === lang.code && (
                        <span className="text-[#F1C424] text-xl">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          </nav>
        </div>
      )}
    </header>
  );
}
