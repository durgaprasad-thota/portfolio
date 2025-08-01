/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio_cursor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio_cursor/' : '',
}

module.exports = nextConfig 