const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      '@turf/bbox',
      '@turf/bbox-polygon',
      '@turf/boolean-contains',
      '@turf/circle',
      '@turf/helpers',
      '@turf/intersect',
      '@turf/difference',
      '@turf/length',
      '@turf/area',
      '@turf/point-on-feature',
      'antd',
      'coordtransform',
      'dva',
      'ieold',
      'echarts',
      'heatmap.js',
      'jquery',
      'little-loader',
      'mathjs',
      'moment',
      'ol',
      'qs',
      'react',
      'react-color',
      'react-dom',
      'suncalc',
      'whatwg-fetch',
      'xlsx',
    ],
  },
  devtool: '#source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]-dll.js',
    library: '[name]_[chunkhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name]-dll-manifest.json',
      name: '[name]_[chunkhash]',
      content: __dirname,
    }),

    // Setting DefinePlugin affects React library size!
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
