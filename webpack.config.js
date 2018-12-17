const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    anitya: './themes/anitya/src/anitya.js'
  },
  output: {
    filename: './themes/anitya/assets/js/[name].js',
    path: path.resolve(__dirname, './')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
