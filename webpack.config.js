const path = require('path');
const webpack = require('webpack');
const px2rem = require('postcss-px2rem');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode, 'devModedevMode');

module.exports = {
  entry: {
    main: 'src/main/index.js', 
    page: 'src/page/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
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
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: devMode
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]'
              }
              // modules: true, // 是否开启css-module
              // localIdentName: '[name]_[local]-[hash:base64:5]'
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

  // 代码分离
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       common: {
  //         name: 'common',
  //         chunks: 'initial',
  //         priority: 2,
  //         minChunks: 2,
  //       },
  //       reactBase: {
  //         name: 'reactBase',
  //         test: module => {
  //           return /react|redux|prop-types/.test(module.context);
  //         },
  //         chunks: 'initial',
  //         priority: 10,
  //       },
  //       styles: {
  //         name: 'styles',
  //         test: /\.css$/,
  //         chunks: 'all',
  //         enforce: true,
  //         priority: 20
  //       }
  //     }
  //   },
  // },

  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      component: path.resolve(__dirname, './components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  plugins: [
    new CleanWebpackPlugin({path: './dist'}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'main',
      filename: 'main.html',
      chunks: ['main'],
      hash: true,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'page',
      filename: 'page.html',
      chunks: ['page'],
      hash: true,
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    hot: true,
    port: 3000,
    compress: true
  }
}