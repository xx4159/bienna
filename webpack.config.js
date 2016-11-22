'use strict';

let ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bienna.css'),
  ],
};
