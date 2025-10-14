const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "statement",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      fullySpecified: false,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    externals: [
      "react",
      "react-dom",
      "react-redux",
      "@bytebank/styles",
      "@bytebank/context",
      "@bytebank/components",
      "@bytebank/redux",
    ],
  });
};
