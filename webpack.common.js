const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {entries, htmlTemPlugin} = require('./html/pages');

module.exports = {
  entry: entries,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
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
      utils: path.resolve(__dirname, 'utils'),
      $com: path.resolve(__dirname, 'components'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
  
  // 插件
  plugins: [
    ...htmlTemPlugin,
    new CleanWebpackPlugin({path: 'dist'})
  ]
};
