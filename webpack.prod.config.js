const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all'
        },
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
          }
        },
        extractComments: false
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}