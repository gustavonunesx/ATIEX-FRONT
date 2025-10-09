import type { NextConfig } from 'next'

const isGithubPages = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/ATIEX-FRONT' : '',
  assetPrefix: isGithubPages ? '/ATIEX-FRONT/' : '',
  images: {
    unoptimized: true
  }
}

export default nextConfig