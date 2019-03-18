const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  test: /\.sass$/,
  use: [
    'style-loader',
    // MiniCssExtractPlugin.loader, 
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    'sass-loader',
    // 'postcss-loader',
  ],
};
