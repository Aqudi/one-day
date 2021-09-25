import { ApiClient, AuthApiClient } from './ApiClient'
import StorageService from '../services/StorageService'

export { login, logout, signup }

async function login({ username, password }) {
  return ApiClient.post('/auth/login/', { username, password }).then(async response => {
    if (response.data.refresh_token) {
      await StorageService.setRefreshToken(response.data.refresh_token)
      return response.data.user
    }
  })
}

async function signup({ username, email, password1, password2 }) {
  return ApiClient.post('/auth/registration/', {
    username,
    email,
    password1,
    password2,
  }).then(response => {
    return response.data.detail
  })
}

async function logout({ username, password }) {
  return AuthApiClient.post('/auth/logout/').then(async response => {
    return await StorageService.removeRefreshToken()
  })
}
