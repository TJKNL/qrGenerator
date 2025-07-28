import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white/50 backdrop-blur-sm p-4 mt-auto">
      <div className="max-w-3xl mx-auto text-center text-gray-600">
        <div className="flex justify-center space-x-4">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/gratis-qr-code-generator" className="hover:text-indigo-600">Gratis Generator</Link>
          <Link href="/qr-code-visitekaartje" className="hover:text-indigo-600">Visitekaartje</Link>
          <Link href="/qr-code-wifi-maken" className="hover:text-indigo-600">Wifi</Link>
          <Link href="/hoe-werken-qr-codes" className="hover:text-indigo-600">Hoe werken QR-codes?</Link>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} QR Code Generator. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  );
} 