
module.exports = (isDev) =>{
  return{
    preserveWhitespace:true,            //预防HTML中出现空格
    extractCSS:!isDev,
    cssModules:{

    },
    // hotReload:true,                   //根据环境变量生成
  }
}