const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n,
  images: {
    domains: ['scontent-lga3-1.cdninstagram.com'],
  },
  reactStrictMode: true,
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    customKey: 'my-value',
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/profile/gh',
        permanent: true,
      },
    ];
  },
};
