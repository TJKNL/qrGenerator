import { NextSeo, FAQPageJsonLd } from 'next-seo';
import Generator from '../components/Generator';

export default function QrCodeGenereren() {
  return (
    <>
      <NextSeo
        title="QR Code Genereren – Gratis & Snel"
        description="Genereer gratis en direct een QR-code voor een URL, tekst, wifi-netwerk of vCard. Zonder registratie, ongelimiteerd te gebruiken en 100% gratis."
        canonical="https://qr-code-genereren.nl/qr-code-genereren"
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Hoe kan ik een gratis QR-code maken?',
            acceptedAnswerText:
              'Selecteer het gewenste type (URL, tekst, etc.), vul de benodigde informatie in en download de QR-code direct als PNG-bestand. Het gebruik is volledig gratis.',
          },
          {
            questionName: 'Is een account nodig om QR-codes te maken?',
            acceptedAnswerText: 'Nee, een account is niet nodig. U kunt onbeperkt QR-codes genereren zonder enige vorm van registratie of watermerk.',
          },
        ]}
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR Code Genereren
          </h1>
          <p className="text-gray-700 leading-relaxed text-center mb-6">
            Maak eenvoudig en snel een gratis QR-code voor uw website, wifi-netwerk, contactgegevens of andere informatie. Direct te downloaden en te gebruiken, zonder limieten of verborgen kosten.
          </p>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">
              Functionaliteiten van onze QR Code Generator
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Volledig Gratis</h3>
                <p className="m-0">Genereer onbeperkt QR-codes zonder kosten, watermerk of registratie.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Direct Resultaat</h3>
                <p className="m-0">Bekijk een live voorbeeld en download de QR-code in hoge resolutie.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Privacygericht</h3>
                <p className="m-0">Alle data wordt lokaal in uw browser verwerkt en niet opgeslagen.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">Hoge Kwaliteit</h3>
                <p className="m-0">De PNG-uitvoer is geoptimaliseerd voor drukwerk op flyers en posters.</p>
              </div>
            </div>
            
            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Stapsgewijze Handleiding</h2>

            <ol className="list-decimal list-inside mx-auto text-center space-y-2">
              <li>
                <strong>Selecteer het type:</strong> Kies uit URL, Tekst, Wifi of vCard.
              </li>
              <li>
                <strong>Voer de gegevens in:</strong> Het live voorbeeld wordt direct bijgewerkt.
              </li>
              <li>
                <strong>Download de QR-code:</strong> Klaar voor digitaal gebruik of drukwerk.
              </li>
            </ol>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Toepassingen van QR-Codes</h2>
            <p>
              QR-codes worden veelvuldig ingezet in diverse sectoren. Denk aan menukaarten in de horeca, klantenkaarten in de retail of voor snelle toegang tot lesmateriaal in het onderwijs. Ze verlagen de drempel voor interactie en verhogen de conversie door het scanproces te vereenvoudigen.
            </p>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Tips voor Optimale Scanbaarheid</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Zorg voor contrast:</strong> Een donkere code op een lichte achtergrond werkt het best.
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Houd een witruimte:</strong> Behoud een marge van minimaal vier modules rondom de code.
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Test de code:</strong> Controleer de werking op verschillende apparaten (iOS en Android).
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Wees voorzichtig met logo's:</strong> Test grondig na het toevoegen van een logo om scanproblemen te voorkomen.
              </div>
            </div>
           </article>
        </section>
      </main>
    </>
  );
} 