import { createContext, useEffect, useState } from 'react'
import { getPosts, getAccomodate, getUserInfo } from '../api/CommunityApi'
const OnedayContext = createContext()

const OnedayContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [posts, setPosts] = useState({
    status: 'idle',
    data: null,
  })
  const [accomodate, setAccomodate] = useState({
    status: 'idle',
    data: null,
  })

  const _getPosts = async () => {
    let res = await getPosts()
    console.log('dndhkd', res)
    try {
      setPosts({
        status: 'pending',
        data: null,
      })
      setPosts({
        status: 'resolved',
        data: res.results.reverse(),
      })
    } catch (e) {
      setPosts({
        status: 'rejected',
        data: null,
      })
    }
  }
  const _getAccomodate = async () => {
    let res = await getAccomodate()
    console.log('dndhkd', res)
    try {
      setAccomodate({
        status: 'pending',
        data: null,
      })
      setAccomodate({
        status: 'resolved',
        data: res.results.reverse(),
      })
    } catch (e) {
      setAccomodate({
        status: 'rejected',
        data: null,
      })
    }
  }
  const _getUserInfo = async () => {
    let res = await getUserInfo()
    setUser(res)
  }
  useEffect(() => {
    _getPosts()
    _getAccomodate()
    _getUserInfo()
  }, [])
  return <OnedayContext.Provider value={{ posts, accomodate, user }}>{children}</OnedayContext.Provider>
}

export { OnedayContextProvider, OnedayContext }
