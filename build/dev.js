const express = require('express');
const webpackDevMid = require('webpack-dev-middleware');
const webpackHotMid = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.dev.conf');

const app = express();

Object.keys(config.entry).forEach(name => {
  config.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(config.entry[name]);
});

const compiler = webpack(config);

app.use(webpackDevMid(compiler));
app.use(webpackHotMid(compiler, { overlayStyles: true }));

app.listen(config.devServer && config.devServer.port || '3000');