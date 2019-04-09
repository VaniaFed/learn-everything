const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.module.sass$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        // you can specify a publicPath here
        // by default it uses publicPath in webpackOptions.output
        publicPath: '../',
        hmr: process.env.NODE_ENV === 'development'
      }
    },
    {
      loader: 'css-loader',
      query: {
        localIdentName: '[hash:8]',
        modules: true
      }
    },
    {
      loader: 'sass-loader'
    }
  ]
}
