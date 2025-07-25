import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function BlogIndex() {
  return (
    <>
      <NextSeo title="QR Code Blog" description="Tips, statistieken en trends over QR-codes in Nederland." />
      <main className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-indigo-100 via-purple-50 to-white">
        <section className="glass max-w-3xl w-full p-8 shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
          <ul className="list-disc pl-5 space-y-2 text-indigo-700">
            <li>
              <Link href="/blog/qr-code-statistieken-2025" className="underline">
                QR-code statistieken 2025: groei en kansen
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
} 