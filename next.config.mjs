/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sohith-portfolio.vercel.app" }],
        destination: "https://www.sohithreddy.dev/:path*",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://api.sohithreddy.dev/api/:path*' }];
  },
};

export default nextConfig;