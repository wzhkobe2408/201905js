import axios from './config'

// 请求轮播图
export let getSliders = () => axios.get('/api/sliders')

// 请求课程列表
export let fetchLessons = (limit, offset, type) => axios.get('api/lessons', {
  params: { // get 请求问号传参
    limit,
    offset,
    type
  }
})
