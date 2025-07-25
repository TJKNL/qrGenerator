/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

// Redirect root to SEO landingpage
nextConfig.redirects = async () => [
  {
    source: '/',
    destination: '/qr-code-genereren',
    permanent: true,
  },
]; 