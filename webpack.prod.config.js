const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
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
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
          autoprefixer: {disable: true},
          mergeLonghand: false,
          disCardComments: {
            removeAll: true
          }
        }
      })
    ]
  }
}