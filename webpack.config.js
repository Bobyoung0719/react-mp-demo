const path = require('path');
const px2rem = require('postcss-px2rem');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/Index/index.js',
    page2: './src/Page2/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(sc|c)ss$/,
        use:[
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 是否开启css-module
              localIdentName: '[name]_[local]-[hash:base64:5]'
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
        include: [path.resolve(__dirname, 'src')]
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

  resolve: {
    alias: {
      component: path.resolve(__dirname, 'src'),
      component: path.resolve(__dirname, './components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  plugins: [
    new CleanWebpackPlugin({path: path.resolve(__dirname, 'dist')}),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      hash: true,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'page2.html',
      chunks: ['page2'],
      hash: true,
      template: './index.html'
    }),
  ],
  devServer: {
    hot: true
  }
}