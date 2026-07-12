module.exports = {
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel.app' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'cdn.hackclub.com' },
      {
        protocol: 'https',
        hostname: 'hc-cdn.hel1.your-objectstorage.com'
      },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'camo.githubusercontent.com' }
    ]
  }
}
