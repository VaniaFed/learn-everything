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
  node: {
    fs: 'empty',
  },
  mode: 'production',
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
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist/public/js'),
  },
};
