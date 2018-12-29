module.exports = {
  test: /\.png|jpg|jpeg|svg|gif$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'img',
      },
    },
  ],
};
