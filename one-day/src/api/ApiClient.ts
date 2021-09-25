import axios from 'axios'
import { refresh, refreshErrorHandle } from './middlewares/refresh'
import { requestLogger, responseLogger } from './middlewares/logger'

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //baseURL: 'living-a-month.herokuapp.com/api',
  timeout: 10000,
  params: {},
})

ApiClient.interceptors.request.use(request => requestLogger(request))
ApiClient.interceptors.response.use(response => responseLogger(response))

const AuthApiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //baseURL: 'living-a-month.herokuapp.com/api',
  timeout: 10000,
  params: {},
})

AuthApiClient.interceptors.request.use(request => requestLogger(request))
AuthApiClient.interceptors.response.use(response => responseLogger(response))
AuthApiClient.interceptors.request.use(refresh, refreshErrorHandle)

export { ApiClient, AuthApiClient }
