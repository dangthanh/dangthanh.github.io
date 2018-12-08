const path = require('path');

module.exports = {
  mode: 'production',
  entry: './themes/anitya/src/index.js',
  output: {
    filename: './themes/anitya/assets/js/anitya.js',
    path: path.resolve(__dirname, './')
  }
};
