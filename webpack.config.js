const path = require('path');

module.exports = {
  mode: 'development',
  entry: [ 'babel-polyfill', './src/app.js' ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map'
};
