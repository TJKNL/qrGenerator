import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function QrCodeMaken() {
  return (
    <>
      <NextSeo
        title="QR Code Maken – Eenvoudig en Snel"
        description="Wilt u een QR-code maken? Voer uw gegevens in en ontvang direct een downloadbare code. Volledig gratis en zonder watermerk."
        canonical="https://qr-code-genereren.nl/qr-code-maken"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR Code Maken
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Wat is een QR-code maken?</h2>
            <p>Het maken van een QR-code betekent dat u digitale informatie omzet in een scanbare, tweedimensionale barcode. Of u nu een link, wifi-wachtwoord of visitekaartje wilt delen, met onze tool maakt u snel en eenvoudig een code die op elk modern apparaat werkt.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">De Voordelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm"><strong>Efficiënt en Snel</strong><p className="m-0">Geen registratie vereist: voer uw gegevens in en download de QR-code direct.</p></div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm"><strong>Veelzijdige Toepassingen</strong><p className="m-0">Ondersteuning voor URL's, tekst, wifi-netwerken en vCards (digitale visitekaartjes).</p></div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
} 