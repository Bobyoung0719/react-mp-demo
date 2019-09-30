const path = require('path');
const Merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {entries, htmlPligins} = require('./wepack.base.config');

const devMode = process.env.NODE_ENV === 'development';

const cType = devMode ? 'dev' : 'prod';
const config = require(`./webpack.${cType}.config`);

const base = {
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
          'postcss-loader',
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

  // 设置别名
  resolve: {
    alias: {
      util: path.resolve(__dirname, 'utils'),
      $com: path.resolve(__dirname, 'components'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts'],
  },
  
  // 插件
  plugins: [
    new CleanWebpackPlugin({path: 'dist'}),
    ...htmlPligins,
  ]
}

module.exports = Merge(base, config);