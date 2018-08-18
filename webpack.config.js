const path = require('path');

module.exports = {
  entry: './src/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
