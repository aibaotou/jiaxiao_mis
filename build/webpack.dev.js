const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(
  {
    mode: 'development',
    output: {
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, '..', 'dist'),
      compress: true,
      port: 9000,
      open: true
    },
    devtool: 'source-map'
  },
  commonConfig
);
