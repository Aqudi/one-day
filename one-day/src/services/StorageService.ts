import { Storage } from '@capacitor/storage'

export default {
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
}

/**
 * AccessToken
 */
async function getAccessToken() {
  const result = await Storage.get({
    key: 'accessToken',
  })
  return result.value
}
async function setAccessToken(accessToken: string) {
  await Storage.set({
    key: 'accessToken',
    value: accessToken,
  })
}

/**
 * RefreshToken
 */
async function getRefreshToken() {
  const result = await Storage.get({
    key: 'refreshToken',
  })
  return result.value
}
async function setRefreshToken(refreshToken: string) {
  await Storage.set({
    key: 'refreshToken',
    value: refreshToken,
  })
}
async function removeRefreshToken() {
  await Storage.remove({
    key: 'refreshToken',
  })
}
