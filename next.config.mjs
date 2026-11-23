/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "3000",
//         pathname: "/assets/public/**",
//       },
//     ],
//   },
//   async rewrites() {
//     return [
//       {
//         source: "/assets/public/:path*",
//         destination: "/assets/public/:path*",
//       },
//     ];
//   },
// };

// export default nextConfig;

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '<project>.vercel.app' }],
        destination: 'https://sohithreddy.dev/:path*',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;