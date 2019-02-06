const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.css$/,
  use: [
    'style-loader', 
    MiniCssExtractPlugin.loader, 
    'css-loader',
  ],
};
