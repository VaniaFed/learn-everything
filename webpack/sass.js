const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.sass$/,
  exclude: /\.module\.sass$/,
  use: [
    'isomorphic-style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: false
      }
    },
    'sass-loader'
  ]
}