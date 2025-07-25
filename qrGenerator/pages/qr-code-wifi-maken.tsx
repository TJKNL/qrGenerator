import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function WifiQrCode() {
  return (
    <>
      <NextSeo
        title="QR Code voor Wi-Fi Maken – Deel Snel Jouw Netwerk"
        description="Genereer een QR-code voor je Wi-Fi-netwerk zodat bezoekers met één scan verbinden. Gratis en zonder registratie."
        canonical="https://qr-code-genereren.nl/qr-code-wifi-maken"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Wi-Fi&nbsp;QR&nbsp;<span className="text-indigo-600">Code</span>&nbsp;Maken
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Waarom een Wi-Fi QR-code?</h2>
            <p>Met een scan verbinden gasten direct met je netwerk, zonder het wachtwoord in te typen – ideaal voor horeca, kantoren en thuis.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">Tips voor een veilige Wi-Fi-QR</h2>
            <ul className="list-disc list-inside">
              <li>Gebruik WPA2 of WPA3 encryptie voor maximale beveiliging.</li>
              <li>Verander je wachtwoord regelmatig en update dan je QR-code.</li>
              <li>Laat de <em>verborgen</em> optie uit, zo herkennen toestellen het netwerk beter.</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
} 