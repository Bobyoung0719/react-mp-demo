const path = require('path');
const webpack = require('webpack');
const px2rem = require('postcss-px2rem');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {entries, optimization, htmlPligins} = require('./wepack.deploy');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // 规则
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        use:[
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 开启cssmodule
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [px2rem({remUnit: 75})]
            }
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      }
    ]
  },
  
  // 代码分离
  optimization,

  // 设置别名
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  // 插件
  plugins: [
    new CleanWebpackPlugin({path: 'dist'}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    ...htmlPligins,
  ],

  // 开发设置
  devServer: {
    hot: true,
    port: 3000
  }
}