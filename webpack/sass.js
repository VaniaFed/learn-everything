const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = [
  {
    test: /\.module\.sass$/,
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

  },
  {
    test: /\.sass$/,
    exclude: /\.module\.sass$/,
    use: [
      {
        loader: 'style-loader',
      },
      // MiniCssExtractPlugin.loader, 
      {
        loader: 'css-loader',
        options: {
          modules: false,
        }
      },
      'sass-loader',
      // 'postcss-loader',
    ]
  }
];
