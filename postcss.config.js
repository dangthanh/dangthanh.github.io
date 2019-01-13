module.exports = {
  plugins: {
    'postcss-import': {
      forceImport: true
    },
    'postcss-each': {},
    'postcss-nested': {},
    'postcss-preset-env': { stage: 0, browsers: 'last 2 versions' },
    'css-mqpacker': {},
    cssnano: { preset: ['default', { discardComments: { removeAll: true } }] }
  }
};
