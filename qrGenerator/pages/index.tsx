import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Gratis QR Code Generator"
        description="Genereer eenvoudig en snel gratis QR-codes voor websites, tekst, wifi-netwerken en meer."
      />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="w-full max-w-3xl glass p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR Code Generator
          </h1>
          <p className="text-center text-gray-700 mb-6 max-w-md mx-auto">
            Plak een URL of tekst, en maak direct een gratis QR-code. Eenvoudig, snel en zonder registratie.
          </p>
          <Generator />
        </section>
      </main>
    </>
  );
} 