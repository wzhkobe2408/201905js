import axios from './config'

// 请求图书列表
export let getAllBooks = () => axios.get('/api/books')
