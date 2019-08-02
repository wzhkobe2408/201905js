// 项目中会把 数据的请求单独抽离成到js文件，把对应的方法导出，使用的组件从对应js文件导入

import axios from './config' // ./config/index.js 中index.js 可以省略（只有叫index才能省）

// 请求轮播图片
export let getSliders = () => axios.get('/api/sliders')

// 请求热门图书
export let getHotBook = () => axios.get('/api/hot')
