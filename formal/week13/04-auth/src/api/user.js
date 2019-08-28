import axios from './config'

export let toLogin = userInfo => axios.post('/api/login', userInfo)

export let toGetAuth = () => axios.get('/api/getAuth')
