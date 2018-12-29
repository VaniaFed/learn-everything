const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const typescript = require('./webpack/typescript');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');

module.exports = {
  entry: './src/public/ts/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    port: '3001',
  },
  module: {
    rules: [
      babel,
      typescript,
      pug,
      css,
      sass,
      images,
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
    new HtmlWebpackPlugin({
      filename: 'authorization.html',
      template: 'src/views/pages/authorization.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: 'src/views/pages/registration.pug',
      chunks: false,
    }),
  ],
};
