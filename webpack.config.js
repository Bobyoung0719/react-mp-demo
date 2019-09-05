const path = require('path');
const webpack = require('webpack');
const px2rem = require('postcss-px2rem');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const BASE_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: {
    main: `./src/main/index.js`, 
    page: `./src/page/index.js`,
    common: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
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
  optimization: {
    // usedExports: devMode,
    splitChunks: {
      cacheGroups: {
        // reactBase: {
        //   name: 'reactBase',
        //   test: (module) => {
        //       return /react|redux|prop-types/.test(module.context);
        //   },
        //   chunks: 'initial',
        //   priority: 10,
        // },
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      }
    },
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  plugins: [
    new CleanWebpackPlugin({path: 'dist'}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'main',
      filename: 'main.html',
      chunks: ['common', 'main'],
      
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'page',
      filename: 'page.html',
      chunks: ['common', 'page'],
      template: './index.html'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: 3000,
    // open: true,
    compress: true
  }
}