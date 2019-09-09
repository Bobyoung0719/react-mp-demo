const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log']
          },
          output: {
            comments: /@license/i,
          }
        },
        extractComments: true
      })
    ]
  }
}