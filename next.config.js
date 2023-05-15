// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: { and: [/\.(ts)x?$/] },
  //     use: [
  //       {
  //         loader: "@svgr/webpack",
  //         options: {
  //           svgoConfig: { plugins: [{ removeViewBox: false }] },
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
};
