import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import MobileClickSound from "@/components/MobileClickSound";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          <MobileClickSound />
          {/* Decorative border */}
          <div className="fixed top-0 left-0 right-0 pointer-events-none z-[100]" style={{ height: '8px' }}>
            <div className="w-full h-full bg-[#F1C424]"></div>
          </div>
          
          <Header />
          <main className="flex-grow -mt-24">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
