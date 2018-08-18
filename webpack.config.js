const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/'
  }
};
