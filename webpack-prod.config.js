const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babel = require('./webpack/babel');
const typescript = require('./webpack/typescript');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');


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
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
  },
};
