import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/nw-bread-front', // GitHub Pages 쓰는 게 아니라면 생략
  trailingSlash: true, // SSR 시 false
  reactStrictMode: true,
}

export default nextConfig
