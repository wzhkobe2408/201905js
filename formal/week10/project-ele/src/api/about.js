import axios from './config'

export const getList = (page, limit) => axios.get(`/api/user_list?page=${page}&limit=${limit}`)
