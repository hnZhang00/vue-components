const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendors: [
      'vue',
    ],
  },
  output: {
    path: path.join(__dirname, '..', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, '..', 'dll/[name]-manifest.json'),
      name: '[name]_library',
    }),
  ],
};