import { NextSeo } from 'next-seo';

export default function Stats2025() {
  return (
    <>
      <NextSeo
        title="QR-code statistieken 2025 – Groei in Nederland"
        description="Ontdek de nieuwste statistieken over het gebruik van QR-codes in 2025 en leer hoe jouw bedrijf kan profiteren."
        canonical="https://qr-code-genereren.nl/blog/qr-code-statistieken-2025"
      />
      <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <article className="prose lg:prose-lg glass p-8 w-full max-w-3xl">
          <h1>QR-code statistieken 2025: groei en kansen</h1>
          <p>
            Het gebruik van QR-codes in Nederland blijft stijgen. Volgens onderzoeken van 2025 scant 68% van de
            consumenten maandelijks minstens één QR-code, een stijging van 28% ten opzichte van 2023.
          </p>
          <h2>Belangrijkste sectoren</h2>
          <ul>
            <li>Horeca: digitale menukaarten en bestellen.</li>
            <li>E-commerce: snelle productinfo.</li>
            <li>Evenementen: tickets en registratie.</li>
          </ul>
          <p>
            Wil je zelf meeprofiteren? Ga naar onze
            <a href="/qr-code-genereren" className="text-indigo-600 underline"> gratis QR-code generator</a> en zet de
            eerste stap.
          </p>
        </article>
      </main>
    </>
  );
} 