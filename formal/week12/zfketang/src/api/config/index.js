// 配置 axios
import axios from 'axios'

// 如果使用 CORS 跨域配置：
// axios.defaults.baseURL = 'http://localhost:3001/' // 设置 baseUrl 以后，页面中 请求 /api/sliders 接口；但是最终被请求的接口会被在前面拼接上 baseUrl，例如 http://localhost:3001/api/sliders
// axios.defaults.withCredentials = true // 允许携带 cookie

// 使用 axios 拦截器配置 axios
axios.interceptors.response.use((res) => res.data)

export default axios
