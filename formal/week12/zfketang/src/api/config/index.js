// 配置 axios
import axios from 'axios'

// 使用 axios 拦截器配置 axios
axios.interceptors.response.use((res) => res.data)

export default axios
