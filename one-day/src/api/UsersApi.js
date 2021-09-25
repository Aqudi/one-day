import { AuthApiClient } from './ApiClient'

export { me }

async function me() {
  console.log('UsersApi.me')
  return AuthApiClient.get('/users/me/').then(response => response.data)
}
