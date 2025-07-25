import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function VcardQrCode() {
  return (
    <>
      <NextSeo
        title="QR Code Visitekaartje – Deel je Contactgegevens"
        description="Maak gratis een vCard QR-code voor je visitekaartje en deel je contactgegevens met één scan."
        canonical="https://qr-code-genereren.nl/qr-code-visitekaartje"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Visitekaartje&nbsp;QR&nbsp;<span className="text-indigo-600">Code</span>
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Waarom een QR-visitekaartje?</h2>
            <p>Eén scan en je contactgegevens staan meteen in het adresboek van je klant. Geen spelfouten, geen overtypen.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">Wat wordt opgeslagen?</h2>
            <ul className="list-disc list-inside">
              <li>Naam, functie en organisatie</li>
              <li>Telefoonnummer(s) en e-mail</li>
              <li>Website en socials</li>
              <li>Adresgegevens</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
} 