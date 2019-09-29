module.exports = {
  pluginOptions: {
    quasar: {}
  },
  //axios域代理，解决axios跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.18.20.1:3000/api',
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/]
};
