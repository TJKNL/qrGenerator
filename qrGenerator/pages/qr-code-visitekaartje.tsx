import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function VcardQrCode() {
  return (
    <>
      <NextSeo
        title="QR Code voor Visitekaartje (vCard) Maken"
        description="Genereer een vCard QR-code om uw contactgegevens eenvoudig te delen. Voeg naam, telefoon, e-mail en meer toe."
        canonical="https://qr-code-genereren.nl/qr-code-visitekaartje"
      />
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR Code voor Visitekaartje
          </h1>
          <Generator />

          <article className="mt-12 text-gray-700 prose prose-indigo max-w-none">
            <h2 className="text-2xl font-semibold text-indigo-700 text-center">Waarom een vCard QR-code gebruiken?</h2>
            <p>Een vCard QR-code stelt u in staat om uw contactgegevens efficiënt te delen. Na het scannen van de code worden uw gegevens direct opgeslagen in het adresboek van de ontvanger, wat de kans op typefouten elimineert en het netwerkproces versnelt.</p>
            <h2 className="!mt-8 text-2xl font-semibold text-indigo-700 text-center">Welke informatie kan worden opgeslagen?</h2>
            <ul className="list-disc list-inside">
              <li>Volledige naam, functie en bedrijfsnaam</li>
              <li>Telefoonnummers (werk, mobiel, privé)</li>
              <li>E-mailadres</li>
              <li>Website en sociale media profielen</li>
              <li>Adresgegevens (werk en privé)</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
} 