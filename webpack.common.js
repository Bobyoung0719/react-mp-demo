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
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,  
              outputPath: 'images/' 
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
    new CleanWebpackPlugin({ path: path.resolve(__dirname, 'dist') })
  ]
};
