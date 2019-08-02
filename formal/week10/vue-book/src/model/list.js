import axios from './config'

// 请求图书列表
export let getAllBooks = () => axios.get('/api/books')

// 删除指定图书
export let deleteBook = id => axios.get('/api/delete?id=' + id)

// 收藏图书
export let collectBook = book => axios.post('/api/collect', book)
