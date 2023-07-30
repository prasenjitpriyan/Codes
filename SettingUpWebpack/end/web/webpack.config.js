const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  Plugin: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};
