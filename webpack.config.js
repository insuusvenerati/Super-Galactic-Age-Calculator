const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ESLintWebpackPlugin({
      fix: true,
    }),
  ],
};
