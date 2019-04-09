const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  // test: /\.css$/,
  //   use: [
  //     {
  //       loader: 'css-loader',
  //       query: {
  //         localIdentName: '[hash:8]',
  //         modules: true
  //       }
  //     }
  //   ]
  // })
  test: /\.css$/,
  use: [
    'isomorphic-style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: false
      }
    }
  ]
}
