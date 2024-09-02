/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
    images: {
        domains: ['occ-0-3933-116.1.nflxso.net'], // Add your image domain here
      },
};

export default nextConfig;
