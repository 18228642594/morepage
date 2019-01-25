const pages = require('./pages.config');
const path = require('path');
//返回绝对路径  
function resolve (dir) {
  return path.join(__dirname, dir)//接收多个路劲字符串参数，把路径参数拼接起来
}
module.exports = {
  pages:pages,
  baseUrl: './',// 基本路径
  lintOnSave: false,// eslint-loader 是否在保存的时候检
  filenameHashing: false,//build后的dist目录的静态文件夹要不要hash
  productionSourceMap: false,//是否去掉打包后的js会生成map文件
  css:{
    sourceMap: true, //是否开启css source map
    loaderOptions:{ //css预设器配置项
      //PostCSS 是一个允许使用 JS 插件转换样式的工具
      postcss: {
        config:{
          path:__dirname
        }
      }
    }
  },
  // 定义别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('assets',resolve('src/assets'))
  }
}