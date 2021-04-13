const webpack = require('webpack');

export default function (webpackConfig) {
  // 对roadhog默认配置进行操作，for cesium
  webpackConfig.output.sourcePrefix = '';
  webpackConfig.amd = {
    ...webpackConfig.amd,
    toUrlUndefined: true,
  };
  webpackConfig.module.unknownContextCritical = false;
  webpackConfig.node.fs = 'empty';

  webpackConfig.plugins.push(
		new webpack.DllReferencePlugin({ context: __dirname, manifest: require('./vendor-dll-manifest.json') }),
  );

  webpackConfig.plugins.push(
		new webpack.DllReferencePlugin({ context: __dirname, manifest: require('./cesium-dll-manifest.json') }),
  );

  return webpackConfig;
}
