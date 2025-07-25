import { NextSeo, FAQPageJsonLd } from 'next-seo';
import Generator from '../components/Generator';

export default function QrCodeGenereren() {
  return (
    <>
      <NextSeo
        title="QR Code Genereren – Gratis & Zonder Watermerk"
        description="Genereer direct een gratis QR-code voor URL, tekst, Wi-Fi of visitekaartje. Geen registratie, onbeperkt gebruik, 100% gratis."
        canonical="https://qr-code-genereren.nl/qr-code-genereren"
      />
      <FAQPageJsonLd
        mainEntity={[
          {
            questionName: 'Hoe maak ik gratis een QR-code?',
            acceptedAnswerText:
              'Vul je gegevens in het formulier in. De QR-code wordt automatisch gegenereerd en je kunt hem gratis downloaden als PNG.',
          },
          {
            questionName: 'Moet ik een account aanmaken?',
            acceptedAnswerText: 'Nee, je kunt ongelimiteerd QR-codes maken zonder account of watermerk.',
          },
        ]}
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR&nbsp;<span className="text-indigo-600">Code</span>&nbsp;Genereren
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welkom bij de snelste en meest gebruiksvriendelijke QR-code generator van Nederland. Met één klik
            maak je een gratis QR-code voor je website, Wi-Fi-netwerk, contactgegevens of wat je maar wilt.
            Geen limieten, geen verborgen kosten – gewoon direct downloaden en gebruiken.
          </p>
          <Generator />

          {/* SEO-content met moderne segmentatie */}
          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <p>
              Onze tool is geoptimaliseerd voor razendsnelle prestaties op zowel desktop als mobiel. Dankzij de
              moderne <strong>glassmorphism</strong> interface en automatische voorbeeldweergave is het maken van
              een QR-code nog nooit zo eenvoudig geweest. Bovendien respecteren we je privacy: alle gegevens
              worden uitsluitend in je browser verwerkt.
            </p>
            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">
              Waarom kiezen voor QR-Code-Genereren.nl?
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">💰 100% gratis</h3>
                <p className="m-0">Geen watermerk, geen registratie en onbeperkt gebruik.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">⚡ Razendsnel</h3>
                <p className="m-0">Live voorbeeldweergave en download in hoge resolutie.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">🔒 Privacy-vriendelijk</h3>
                <p className="m-0">Alle data wordt uitsluitend lokaal in de browser verwerkt.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <h3 className="font-semibold mb-1">🖨️ Drukwerk-proof</h3>
                <p className="m-0">Scherpe PNG-uitvoer, perfect voor flyers en posters.</p>
              </div>
            </div>
            <p>
              Wist je dat QR-codes in 2024 een groei van 28% in gebruik zagen binnen Nederland? Van menukaarten tot
              evenementen-tickets – een scanbare code verhoogt bereik en interactie. Ga vandaag nog aan de slag
              en ervaar het gemak zelf.
            </p>
            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Stap-voor-stap QR-code maken</h2>

            <ol className="relative border-l-2 border-indigo-200 pl-6 space-y-4">
              <li>
                <span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>
                <strong>Kies het type</strong> – URL, Tekst, Wi-Fi of Visitekaartje.
              </li>
              <li>
                <span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>
                <strong>Vul de velden in</strong> – het voorbeeld past zich live aan.
              </li>
              <li>
                <span className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full"></span>
                <strong>Download of kopieer</strong> – klaar voor print of online gebruik.
              </li>
            </ol>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Veelgebruikte toepassingen</h2>
            <p>
              QR-codes zijn vandaag de dag overal te vinden. Restaurants gebruiken ze voor menukaarten, winkels voor
              klantenkaarten en scholen voor snelle toegang tot digitale lesmaterialen. Ook freelancers en
              zzp'ers profiteren: voeg een QR-code toe aan je factuur of offerte en de klant kan direct betalen of
              contact opnemen. Door het scannen te vereenvoudigen verlaag je drempels en verhoog je conversie.
            </p>

            <h2 className="!mt-10 text-2xl font-semibold text-indigo-700 text-center">Tips voor het beste scan-resultaat</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Contrast is koning</strong>
                <p className="m-0">Zwart-op-wit of donker-op-licht biedt de beste scan-betrouwbaarheid.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Quiet zone behouden</strong>
                <p className="m-0">Laat rond de code een lege marge van minstens 4 modules.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Test op meerdere toestellen</strong>
                <p className="m-0">Controleer iOS én Android om verrassingen te voorkomen.</p>
              </div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm">
                <strong>Logo’s met mate</strong>
                <p className="m-0">Voeg pas een logo toe na grondige test om fout-scans te vermijden.</p>
              </div>
            </div>
 
            <p>
              Met <strong>QR-Code-Genereren.nl</strong> heb je in minder dan tien seconden een professionele QR-code
              klaar voor gebruik. Onze generator blijft gratis omdat we geloven in open toegang tot digitale tools.
              Heb je ideeën of mis je een functionaliteit? Neem contact met ons op en help ons de beste QR-service
              van Nederland te worden.
            </p>
           </article>
        </section>
      </main>
    </>
  );
} 