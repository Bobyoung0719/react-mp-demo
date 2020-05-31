const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
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
        test: /\.(sa|sc|c|le)ss$/,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};

module.exports = Merge(devConfig, commonConfig);

