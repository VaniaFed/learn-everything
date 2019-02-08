const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel = require('./webpack/babel');
const pug = require('./webpack/pug');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');

module.exports = {
  entry: {
    test: './src/public/components/test/Test.jsx',
    manage: './src/public/components/manage/Manage.jsx',
    index: './src/public/js/index.js',
    // remember: './src/public/components/remember/Remember.jsx',
    registration: './src/public/components/Modal/ModalRegistration.jsx',
    authorization: './src/public/components/Modal/ModalAuthorization.jsx',
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
      babel,
      pug,
      css,
      sass,
      images,
    ],
  },
  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
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
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: 'src/views/pages/registration.pug',
      chunks: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'authorization.html',
      template: 'src/views/pages/authorization.pug',
      chunks: false,
    }),
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
  },
};
