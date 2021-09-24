import axios from 'axios';
import { refresh, refreshErrorHandle } from "./middlewares/refresh";

const ApiClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
    params: {}
})

ApiClient.interceptors.request.use(refresh, refreshErrorHandle);

// Request logger
ApiClient.interceptors.request.use(request => {
    console.debug('Starting Request', JSON.stringify(request, null, 2))
    return request
})

// Reponse logger
ApiClient.interceptors.response.use(response => {
    console.debug('Response:', JSON.stringify(response, null, 2))
    return response
})

export default ApiClient
