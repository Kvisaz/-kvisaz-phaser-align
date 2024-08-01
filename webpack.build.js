const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { EsbuildPlugin } = require('esbuild-loader');

const SRC_PATH = path.resolve(__dirname, 'src');
const OUTPUT_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'production',
  entry: path.resolve(SRC_PATH, 'index.ts'),
  output: {
    path: OUTPUT_PATH,
    filename: '[name].[contenthash:8].js', // name chunk
    assetModuleFilename: 'assets/[name].[hash:8][ext]', // name of assets
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      /*      {
              test: /\.(ts|tsx|js)$/,
              loader: 'ts-loader',
              include: SRC_PATH,
            },*/
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4|ogg|woff|woff2|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    /*    alias: {
      '~': SRC_PATH,
    },*/
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlPlugin({
      template: path.resolve(SRC_PATH, 'index.html'),
      inject: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets", to: "assets" },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',  // Syntax to compile to (see options below for possible values)
      }),
    ],
  },
};
