/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'scontent-hkt1-2.cdninstagram.com',
      },
    ],
  },
};

module.exports = nextConfig;
