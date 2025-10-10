const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bytebank",
    projectName: "sidebar",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      fullySpecified: false,
    },
    externals: ["@bytebank/styles", "@bytebank/context", "react", "react-dom"],
  });
};
