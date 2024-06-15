/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'cdn.builder.io',
        pathname: '/**',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'pagedone.io',
        pathname: '/**',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'images.unsplash.com',
        pathname: '/**',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'askproject.net',
        pathname: '/evecon/wp-content/**',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'avatar.iran.liara.run',
        pathname: '/public/**',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

// https://avatar.iran.liara.run/public

// https://askproject.net/evecon/wp-content/uploads/sites/126/2023/01/conference-room-HNX75CA.jpg

// (https://cdn.builder.io/api/v1/image/assets/TEMP/8db00bd89bf415a7ae4a94bccbc1dc438d5acef4ee3cb0d9a997bd8c9595b415?apiKey=54709c8bd30b4ce38ba82e61049e17ec&)
//https://pagedone.io/asset/uploads/1702034769.png
// https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

export default nextConfig;
