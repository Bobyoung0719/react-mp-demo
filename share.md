项目结构(投顾服务项目)
webpack 4.x + babel 7.x + react 16.6 + less

一, 1，ios中如果把fixed 元素放在需要滚动元素中，fixed元素会跟随滚动；
  ios自带回弹效果。

二, flexible.js + postcss-loader + postcss-px2rem => 实现动·态适配，px自动转化rem
  使用fetch，async/await等语法 实现数据交互

三, 项目优化方面
  1，使用了第三方库, 如：loadsh, urijs, classnames。（均有例子实现）

    urijs: 是一个url 解析库。
    classnames: 动态添加class, 有效解决了非动态写入的繁琐。
    loadsh: 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

  2，HOC 高阶组件的使用
    定义：高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
    解决公共模块，工具数据的管理问题