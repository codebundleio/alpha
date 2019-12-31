const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    modules: [path.resolve(__dirname, 'assets'), 'node_modules'],
    extensions: ['.mjs', '.js'],
  },
  entry: {
    base: path.resolve(__dirname, 'assets/scripts/base.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
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
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [require('autoprefixer')(), require('cssnano')()],
              },
            },
            'resolve-url-loader?sourceMap',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: ['node_modules'],
              },
            },
          ],
        }),
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/,
        exclude: path.resolve('./assets/icons'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: path.resolve('./node_modules/font-awesome'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'assets/sprite.svg',
              esModule: false,
            },
          },
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin(),
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/font-awesome/fonts',
        to: 'assets',
      },
    ]),
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    proxy: {
      '**': 'http://localhost:8090',
    },
    port: 4321,
    stats: {
      colors: true,
    },
    overlay: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
