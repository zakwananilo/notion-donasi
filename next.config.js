/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverActionsBodySizeLimit: '2mb'
  },
  images: {
    domains: ['localhost', '188.166.211.70', 'apijuang.jadibaik.id'],
  },
  headers: async () => {
    return [
      {
        source: '/styles-v3.css',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
