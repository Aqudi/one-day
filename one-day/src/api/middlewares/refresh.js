import 'dayjs/locale/ko'

import { ApiClient } from '../ApiClient'
import StorageService from '../../services/StorageService'

// async function verifyToken({ token }) {
//   console.log('verifyToken')
//   return ApiClient.post('auth/token/verify/', { token })
//     .then(() => true)
//     .catch(() => false)
// }

async function refreshToken({ token }) {
  console.log('refreshToken')
  return ApiClient.post('auth/token/refresh/', { refresh: token }).then(response => response.data.access)
}

const refresh = async config => {
  const token = await StorageService.getRefreshToken()
  console.log(token)
  if (token !== undefined) {
    // Verified 된 RefreshToken이 존재할 때 AccessToken 발급 진행
    const accessToken = await refreshToken({ token })
    config.headers['Authorization'] = `Bearer ${accessToken}`
  } else {
    throw 'RefreshToken not found'
  }
  return config
}

const refreshErrorHandle = err => {
  StorageService.removeRefreshToken()
}

export { refresh, refreshErrorHandle }
