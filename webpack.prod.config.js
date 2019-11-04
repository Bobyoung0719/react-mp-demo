const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          priority: -10,
          test: /node_modules/
        },
        styles: {
          name: 'styles',
          test: /\.(less|css)$/,
          chunks: 'all',
          enforce: true,
          priority: 20
        },
      }
    },
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
    ],
    runtimeChunk: {
      name: 'mainfest'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css'
    }),
  ]
}