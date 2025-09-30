/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize images
  images: {
    domains: [
      'upload.wikimedia.org',
      'cover.mr-punjab.com',
      'i.scdn.co'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable compression
  compress: true,
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/songs/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
