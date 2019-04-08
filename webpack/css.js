// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  test: /\.css$/,
  use: [
    // 'style-loader',
    'isomorphic-style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: false
      }
    }
  ],
};
