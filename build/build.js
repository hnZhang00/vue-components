const ora = require('ora');
const webpack = require('webpack');
const config = require('./webpack.prod.conf');

if (process.argv[2] && process.argv[2].indexOf('dev') !== -1) {
  config.mode = 'development';
}

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production');
spinner.start();

webpack(config, function(err, stats) {
  spinner.stop();

  if (err) throw err;

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
  }));
});