import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/nw-bread-front' : '',
  trailingSlash: true,
  reactStrictMode: true,
}

export default nextConfig
