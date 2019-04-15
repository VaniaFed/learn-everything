const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const js = require('./webpack/js')
const pug = require('./webpack/pug')
const css = require('./webpack/css')
const sass = require('./webpack/sass')
const sassModule = require('./webpack/sass.module')
const images = require('./webpack/images')

module.exports = {
  entry: {
    index: './src/public/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/client'),
    filename: '[name].js',
    sourceMapFilename: 'name.js'
  },
  devtool: '#source-map',
  node: {
    fs: 'empty'
  },
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    host: '192.168.0.47',
    port: 8080
  },
  module: {
    rules: [
      js,
      pug,
      css,
      sass,
      sassModule,
      images
    ]
  },
  plugins: [
    require('autoprefixer'),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/views/pages/index.pug',
      chunks: false
    })
  ],
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  }
}
