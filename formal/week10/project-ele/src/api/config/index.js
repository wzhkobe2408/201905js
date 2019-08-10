import axios from 'axios'

axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use((res) => res.data)

export default axios
