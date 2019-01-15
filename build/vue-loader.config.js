
module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // 预防HTML中出现空格
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // css名称加密 路径-名称-密文 线上可以直接去掉路径和名称
      camelCase: true
    }
    // hotReload:true,                   //根据环境变量生成
  }
}
