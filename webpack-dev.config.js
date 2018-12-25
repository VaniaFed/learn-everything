const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const typescript = require('./webpack/typescript');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');

module.exports = {
  entry: './src/public/ts/index.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    contentBase: './',
    port: '9000',
  },
  module: {
    rules: [
      babel,
      typescript,
      pug,
      css,
      sass,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'started.html',
      template: 'src/views/pages/started.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'manageCards.html',
      template: 'src/views/pages/manageCards.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/views/pages/test.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'remember.html',
      template: 'src/views/pages/remember.pug',
      chunks: false,
    }),
  ],
};
