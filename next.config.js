// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     fontLoaders: [
//       { loader: "@next/font/google", options: { subsets: ["latin"] } },
//     ],
//   },
// };

// module.exports = nextConfig;

// next.config.js
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] }  // Ensure this matches your font's requirements
      },
    ],
  },
};

module.exports = nextConfig;
