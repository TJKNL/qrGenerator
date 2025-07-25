import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8L8PR4YKNZ"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8L8PR4YKNZ');
        `}
      </Script>

      {/* Google AdSense */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4863672404977337"
      />

      <DefaultSeo
        defaultTitle="QR Code Genereren | Snel en Gratis"
        description="Genereer gratis QR-codes voor URL's, Wi-Fi, visitekaartjes en meer. Eenvoudig, snel en zonder watermerk."
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://qr-generator.nl',
          site_name: 'QR Code Genereren',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 