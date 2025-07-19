import { useEffect, useState, type PropsWithChildren } from 'react'
import { AuthStatus, type User } from './auth-types'
import { AuthContext } from './AuthContext'

export default function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<AuthStatus>(AuthStatus.checking)
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus(AuthStatus.unauthenticated)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log({ email, password })

    setUser({
      name: 'Cesar Villalobos Olmos',
      email,
    })

    setStatus(AuthStatus.authenticated)
  }

  const logout = () => {
    setUser(undefined)
    setStatus(AuthStatus.unauthenticated)
  }

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        loginWithEmailPassword,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
