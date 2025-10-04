/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  basePath: '/ATIEX-FRONT',
  assetPrefix: '/ATIEX-FRONT/', //dqwdqw
}

module.exports = nextConfig;
