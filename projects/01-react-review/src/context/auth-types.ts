export const AuthStatus = {
  checking: 'checking',
  authenticated: 'authenticated',
  unauthenticated: 'unauthenticated',
} as const

export type AuthStatus = typeof AuthStatus[keyof typeof AuthStatus]

export interface AuthState {
  status: AuthStatus
  token?: string
  user?: User
  isChecking: boolean
  isAuthenticated: boolean

  loginWithEmailPassword: (email: string, password: string) => void
  logout: () => void
}

export interface User {
  name: string
  email: string
}
