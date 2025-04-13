import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../api/axiosInstance'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (credentials) => {
    const res = await api.post('/auth/login', credentials)
    localStorage.setItem('token', res.data.token)
    setUser(res.data.user)
  }

  const signup = async (data) => {
    const res = await api.post('/auth/signup', data)
    localStorage.setItem('token', res.data.token)
    setUser(res.data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const res = await api.get('/auth/me')
          setUser(res.data)
        } catch {
          logout()
        }
      }
    }
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
