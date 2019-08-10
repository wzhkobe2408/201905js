import axios from './config'

export const login = (user) => axios.post('/api/login', user)
