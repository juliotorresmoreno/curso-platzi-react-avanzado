// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react'
export const Context = createContext()

export function useInitialValue () {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token') !== null
  })

  const initialValue = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }
  return initialValue
}

export default Context
