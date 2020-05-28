const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     { loader: './loaders/hot.loader.js' }
      //   ]
      // }
    ]
  },
  devServer: {
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: '3000',
    disableHostCheck: true,
  },
  devtool: '#eval-source-map',
});
