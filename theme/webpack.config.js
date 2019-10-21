const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    modules: [path.resolve(__dirname, 'assets'), 'node_modules'],
    extensions: ['.mjs', '.js'],
  },
  entry: {
    theme: path.resolve(__dirname, 'assets/scripts/theme.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery' }),
    new CopyWebpackPlugin([{ from: 'assets/img', to: 'img' }]),
  ]
};
