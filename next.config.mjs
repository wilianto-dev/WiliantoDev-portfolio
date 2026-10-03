/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Lint dijalankan terpisah via `npm run lint`.
    // Next.js 15 deprecated `next lint`, dan runner build internal
    // masih memakai API ESLint lama yang tidak kompatibel dengan
    // konfigurasi modern (ESLint 8 + flat config).
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;