const path = require('path');
const webpack = require('webpack');
const { merge}  = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  module: 'development',
  output: {
    filename: `[name].[hash:8].js`,
    chunkFilename: `[name].[hash:8].js`,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]-[local]-[hash:5]'
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = merge(devConfig, commonConfig);

