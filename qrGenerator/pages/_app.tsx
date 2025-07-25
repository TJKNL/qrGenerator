import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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