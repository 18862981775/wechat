const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    cesium: ['cesium/Source/Cesium.js'],
  },
  devtool: '#source-map',
  node: {
    fs: 'empty',
  },
  amd: {
    toUrlUndefined: true,
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name]-dll.js',
    library: '[name]_[chunkhash]',
    sourcePrefix: '',
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name]-dll-manifest.json',
      name: '[name]_[chunkhash]',
      context: __dirname,
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    unknownContextCritical: false,
    loaders: [
            { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        loader: 'file-loader',
      },
    ],
  },
};
