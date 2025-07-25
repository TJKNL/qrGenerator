import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function QrCodeMaken() {
  return (
    <>
      <NextSeo
        title="QR Code Maken – Snel en Simpel"
        description="QR code maken? Vul je gegevens in en ontvang direct een scanbare code. 100% gratis en zonder watermerk."
        canonical="https://qr-code-genereren.nl/qr-code-maken"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR&nbsp;<span className="text-indigo-600">Code</span>&nbsp;Maken
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Wat betekent QR-code maken?</h2>
            <p>Of je nu een link, Wi-Fi wachtwoord of visitekaartje wilt delen – met één klik maak je een scanbare code die overal werkt.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">Voordelen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm"><strong>Snel klaar</strong><p className="m-0">Geen gedoe met registreren: vul in & download.</p></div>
              <div className="p-4 border border-indigo-100 rounded-lg bg-white/40 backdrop-blur-sm"><strong>Multi-format</strong><p className="m-0">Ondersteunt URL, tekst, wifi en vCard.</p></div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
} 