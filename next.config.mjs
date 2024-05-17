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
    ],
  },
};

// (https://cdn.builder.io/api/v1/image/assets/TEMP/8db00bd89bf415a7ae4a94bccbc1dc438d5acef4ee3cb0d9a997bd8c9595b415?apiKey=54709c8bd30b4ce38ba82e61049e17ec&)

export default nextConfig;
