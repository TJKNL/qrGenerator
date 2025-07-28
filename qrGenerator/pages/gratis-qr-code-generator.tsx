import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function GratisQrCodeGenerator() {
  return (
    <>
      <NextSeo
        title="Gratis QR Code Generator – Onbeperkt QR Codes Maken"
        description="Maak onbeperkt gratis QR-codes zonder watermerk of registratie. Genereer QR-codes voor URL's, tekst, wifi-netwerken en meer."
        canonical="https://qr-code-genereren.nl/gratis-qr-code-generator"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Gratis QR Code Generator
          </h1>
          <p className="text-gray-700 text-center mb-6 max-w-xl mx-auto">
            Genereer snel en eenvoudig QR-codes voor allerlei doeleinden. Onze service is volledig gratis, zonder watermerk en vereist geen registratie.
          </p>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Onze Belofte</h2>
            <div className="grid md:grid-cols-2 gap-4 text-center">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Geen Verborgen Kosten</strong>
                <p className="m-0">De gegenereerde QR-codes zijn en blijven gratis, zonder limieten.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Zonder Watermerk</strong>
                <p className="m-0">Alle QR-codes zijn vrij van watermerken voor een professionele uitstraling.</p>
              </div>
            </div>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Hoe werkt het?</h2>
            <ol className="list-decimal list-inside mx-auto text-center space-y-2">
              <li>Kies het gewenste type QR-code (URL, tekst, etc.).</li>
              <li>Voer de benodigde informatie in.</li>
              <li>Download de QR-code in hoge resolutie.</li>
            </ol>
          </article>
        </section>
      </main>
    </>
  );
} 