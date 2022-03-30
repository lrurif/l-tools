

const path = require('path');

module.exports = {
    mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    library: 'f_tools', // 导出变量名
    libraryTarget: 'umd', // 所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量
  }
}
