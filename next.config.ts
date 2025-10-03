/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/NOME-DO-SEU-REPOSITORIO' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/NOME-DO-SEU-REPOSITORIO/' : '',
}

module.exports = nextConfig