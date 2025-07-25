import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function GratisQrCodeGenerator() {
  return (
    <>
      <NextSeo
        title="Gratis QR Code Generator – Onbeperkt QR Codes Maken"
        description="Maak onbeperkt gratis QR-codes zonder watermerk of registratie. Ondersteunt URL, Wi-Fi en meer."
        canonical="https://qr-code-genereren.nl/gratis-qr-code-generator"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Gratis&nbsp;<span className="text-indigo-600">QR&nbsp;Code</span>&nbsp;Generator
          </h1>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Onze generator is 100% gratis en bevat geen watermerk. Genereer direct een QR-code en download deze in
            hoge kwaliteit. Ideaal voor ondernemers, leraren en marketeers.
          </p>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Waarom gratis?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Geen verborgen kosten</strong>
                <p className="m-0">Je QR-code blijft voor altijd werken – zonder abonnement of limiet.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Zonder watermerk</strong>
                <p className="m-0">Professionele uitstraling op flyers, posters en websites.</p>
              </div>
            </div>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Zo werkt het</h2>
            <ol className="relative border-l-2 border-indigo-200 pl-6 space-y-4">
              <li><span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>Selecteer het type QR-code.</li>
              <li><span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>Voer je gegevens in en zie direct het voorbeeld.</li>
              <li><span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>Download in hoge resolutie – klaar!</li>
            </ol>
          </article>
        </section>
      </main>
    </>
  );
} 