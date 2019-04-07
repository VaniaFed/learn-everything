const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const js = require('./webpack/js');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');

module.exports = {
  entry: {
    index: './src/public/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: 'name.js'
  },
  devtool: '#source-map',
  node: {
    fs: 'empty',
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    port: 3001,
  },
  module: {
    rules: [
      js,
      pug,
      css,
      ...sass,
      images,
    ],
  },
  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/pages/index.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'started.html',
      template: 'src/views/pages/started.pug',
      chunks: false,
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
  },
};
