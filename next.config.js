module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ]
  },
}
