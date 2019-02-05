const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');

module.exports = {
  entry: './src/public/js/index.js',
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
      babel,
      pug,
      css,
      sass,
      images,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'remember.html',
      template: 'src/views/pages/remember.pug',
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
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};
