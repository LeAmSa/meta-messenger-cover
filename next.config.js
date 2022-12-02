/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "github.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
