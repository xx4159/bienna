module.exports = {
  entry: './src/bienna.js',
  output: {
    path: './bin',
    filename: 'bienna.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
