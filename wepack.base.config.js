const HtmlWebpackPlugin = require('html-webpack-plugin');

// 页面， 只需增加页面即可
const page = [
  {name: 'main', title: '主页'},
  {name: 'page', title: 'test-page'},
];

// 入口文件
let entries = {common: ['react', 'react-dom']};

for (let i = 0; i < page.length; i ++) {
  let eml = page[i];

  entries[eml.name] = `./src/${eml.name}/index.js`;
}

// html 模板
const htmlTemp = page.map(item => {
  const {name, title} = item;

  return new HtmlWebpackPlugin({
    title,
    hash: true,
    filename: `${name}.html`,
    chunks: ['common', name],
    template: './index.html',
    minify: {collapseWhitespace: true}
  });
});

module.exports = {
  entries,
  htmlPligins: htmlTemp
};