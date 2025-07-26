import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true, // SSR 시 false
  reactStrictMode: true,
}

export default nextConfig
