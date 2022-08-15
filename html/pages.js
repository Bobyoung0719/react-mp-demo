const HtmlWebpackPlugin = require('html-webpack-plugin');
// const fs = require('fs');

// const file = fs.readFile('src');

// console.log(file, 2222)


// 页面，只需增加页面即可
const page = [
  {name: 'main', title: '主页'},
  {name: 'page', title: 'test-page'},
];

// 生成入口文件及html模板
let entries = {};

const htmlTemPlugin = page.map(item => {
  const { name, title } = item;

  entries[name] = `./src/${name}/index.js`;

  return new HtmlWebpackPlugin({
    title,
    hash: true,
    filename: `${name}.html`,
    template: './html/index.html',
    minify: {collapseWhitespace: true},
    chunks: ['mainfest', 'vendor', name]
  });
});

module.exports = { entries, htmlTemPlugin };