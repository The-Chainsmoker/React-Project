import axios from 'axios'
import { config } from 'process'

const instance = axios.create({
  baseURL: 'http://xue.cnkdl.cn:23683',
  timeout: 20000,
})

//请求拦截
instance.interceptors.request.use((config) => {
  return config
})

//响应拦截
instance.interceptors.response.use((config) => {
  return config.data
})

export default instance
