import { createContext, useContext, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const login = (username, redirectTo = '/') => {
    setUser({ name: username || 'Guest' })
    navigate(redirectTo, { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}