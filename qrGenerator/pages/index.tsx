import { NextSeo } from 'next-seo';
import Generator from '../components/Generator';

export default function Home() {
  return (
    <>
      <NextSeo
        title="QR Code Generator Nederland"
        description="Maak gratis en snel QR-codes voor al jouw links en informatie."
      />
      {/* subtle radial gradient backdrop for liquid-glass vibe */}
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="w-full max-w-3xl glass p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            QR&nbsp;<span className="text-indigo-600">Code</span>&nbsp;Genereren
          </h1>
          <p className="text-center text-gray-700 mb-6 max-w-md mx-auto">
            Geen technische kennis nodig&nbsp;– plak of typ je info en download direct een scherpe QR-code. Simpel, snel en helemaal gratis.
          </p>
          <Generator />
        </section>
      </main>
    </>
  );
} 