/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
