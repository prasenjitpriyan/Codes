const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.export = merge(common, {
  mode: 'production',
});
