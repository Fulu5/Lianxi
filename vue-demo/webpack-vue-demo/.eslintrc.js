// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    /**
     * 自定义部分
     */
    // 关闭强制分号结尾
    "semi": 0,
    // 关闭强制单引号
    "quotes": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 允许最后项末尾逗号
    "comma-dangle": 0,
    // 允许声明未使用变量
    "no-unused-vars": [1, {
      // checks only that locally-declared variables are used but will allow global variables to be unused
      "vars": "local",
      // do not check arguments
      "args": "none"
    }],
    // 关闭函数(名)和后面的括号之间加个空格
    "space-before-function-paren": 0,
  }
}
