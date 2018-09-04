const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    historyApiFallback: true
  },
});

