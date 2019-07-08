const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(
  {
    mode: 'production',
    output: {
      // filename: '[chunkhash].bundle.js',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js'
    }
  },
  commonConfig
);
