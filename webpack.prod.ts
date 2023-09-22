import merge from 'webpack-merge';
import * as common from './webpack.common';

// const resolve: (path: string) => string = path.resolve.bind(__dirname);

module.exports = merge(common, {
  mode: 'production',
  plugins: [],
});
