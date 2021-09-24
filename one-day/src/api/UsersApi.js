import { AuthApiClient } from './ApiClient'

export { me }

async function me() {
  return AuthApiClient.get('/users/me/').then(response => response.data)
}
