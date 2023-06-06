// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "api-omarov.ru"],
    minimumCacheTTL: 90,
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  output: "standalone",
};
