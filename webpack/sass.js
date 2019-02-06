const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.sass$/,
  use: [
    'style-loader',
    MiniCssExtractPlugin.loader, 
    'css-loader',
    'sass-loader',
    'postcss-loader',
  ],
};
