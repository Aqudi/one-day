import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import * as UsersApi from '../api/UsersApi'
import * as AuthApi from '../api/AuthApi'

const AuthContext = createContext({
  user: null,
  loading: false,
  error: '',
  login: null,
  signUp: null,
  logout: null,
})

// Export the provider as we need to wrap the entire app with it
export function AuthServiceProvider({ children }) {
  const [user, setUser] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingInitial, setLoadingInitial] = useState(true)

  const history = useHistory()
  const location = useLocation()

  // 페이지 변경 감지
  useEffect(() => {
    if (error) setError(null)
  }, [location.pathname])

  // 현재 로그인된 유저 Fetch
  useEffect(() => {
    UsersApi.me()
      .then(user => setUser(user))
      .catch(_error => { })
      .finally(() => setLoadingInitial(false))
  }, [])

  // 로그인
  function login({ username, password }) {
    console.log('AuthService.login', { username, password })
    setLoading(true)

    AuthApi.login({ username, password })
      .then(user => {
        setUser(user)
        history.push('/')
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }

  // 회원가입
  function signUp({ username, email, password1, password2 }) {
    console.log('AuthService.signUp', { username, email, password1, password2 })
    setLoading(true)

    AuthApi.signup({ username, email, password1, password2 })
      .then(user => {
        setUser(user)
        history.push('/')
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
      .finally(() => setLoading(false))
  }

  function logout() {
    AuthApi.logout()
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [user, loading, error]
  )

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuthService() {
  return useContext(AuthContext)
}
