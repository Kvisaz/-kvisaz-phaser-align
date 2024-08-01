const commonConfig = require('./webpack.build.js');
const { chromeAppName } = require("./webpack.chromeAppName.js");
module.exports = {
  ...commonConfig,
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    ...commonConfig.optimization,
    minimize: false,
  },
  devServer: {
    open: {
      target: ["http://localhost:8080"],
      app: {
        name: chromeAppName,
        arguments: []
      }
    },
    port: 8080,
  },
};
