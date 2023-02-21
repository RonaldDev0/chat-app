/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['i.imgur.com', 'avatars.githubusercontent.com']
  }
}

module.exports = nextConfig
