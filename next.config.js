/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => ([
    {
      source: '/discord',
      destination: 'https://discord.gg/rabel',
      permanent: true,
    },
    {
      source: '/youtube',
      destination: 'https://youtube.com/gweepcreativeofficial',
      permanent: true,
    },
    {
      source: '/topgg',
      destination: 'https://top.gg/servers/720554756556324914',
      permanent: true,
    },
    {
      source: '/assets/sunucubanner',
      destination: 'https://cdn.discordapp.com/attachments/811951570857230376/985474116624732260/duz_banner.png',
      permanent: true,
    },
  ])
}

module.exports = nextConfig
