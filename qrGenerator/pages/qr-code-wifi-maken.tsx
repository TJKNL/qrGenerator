import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function WifiQrCode() {
  return (
    <>
      <NextSeo
        title="QR Code voor Wifi Maken – Deel Eenvoudig uw Netwerk"
        description="Genereer een QR-code voor uw wifi-netwerk, zodat bezoekers met één scan verbinding kunnen maken. Gratis en veilig."
        canonical="https://qr-code-genereren.nl/qr-code-wifi-maken"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Wifi QR Code Maken
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Waarom een Wifi QR-code gebruiken?</h2>
            <p>Een QR-code voor uw wifi-netwerk biedt een snelle en gebruiksvriendelijke manier om toegang te verlenen. Bezoekers scannen de code en maken direct verbinding, zonder handmatig een netwerknaam (SSID) en wachtwoord in te voeren. Dit is ideaal voor horeca, kantoren, evenementen en thuisgebruik.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">Tips voor een Veilig Wifi-netwerk</h2>
            <ul className="list-disc list-inside">
              <li><strong>Gebruik sterke encryptie:</strong> Kies altijd voor WPA2- of WPA3-encryptie om uw netwerk te beveiligen tegen ongeautoriseerde toegang.</li>
              <li><strong>Werk uw wachtwoord bij:</strong> Verander periodiek uw wifi-wachtwoord en genereer een nieuwe QR-code om de veiligheid te waarborgen.</li>
              <li><strong>Vermijd verborgen netwerken:</strong> Het verbergen van uw SSID biedt geen wezenlijke beveiliging en kan compatibiliteitsproblemen veroorzaken met sommige apparaten.</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
} 