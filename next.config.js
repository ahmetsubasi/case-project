/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.dummyjson.com',
    ],
  },
  experimental: {
    forceSwcTransforms: true,
    fontLoaders: [
      { loader: '@next/font/google', 
      options: 
        { subsets: ['latin', 'latin-ext'] }
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
