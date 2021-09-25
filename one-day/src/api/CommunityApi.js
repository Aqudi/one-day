import { AuthApiClient } from './ApiClient'

export { getPosts, getAccomodate, getUserInfo }

async function getPosts() {
  return AuthApiClient.get('/community/posts/').then(response => response.data)
}

async function getAccomodate() {
  return AuthApiClient.get('/accomos/').then(response => response.data)
}

async function getUserInfo() {
  return AuthApiClient.get('/auth/user/').then(response => response.data)
}
