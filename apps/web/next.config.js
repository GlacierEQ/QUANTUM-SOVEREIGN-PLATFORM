/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  env: {
    QUANTUM_MODE: 'production',
    AGENT_COUNT: '15',
    DIAMOND_TOPOLOGY: 'enabled',
  },
  // Free tier optimization
  output: 'standalone',
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // Legal compliance
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Legal-AI-Platform',
            value: 'GlacierEQ-Quantum-Sovereign',
          },
          {
            key: 'X-Response-Target',
            value: '29ms',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig