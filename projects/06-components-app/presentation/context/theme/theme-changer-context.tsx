import { createContext } from 'react'

export interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark'
  isSystemTheme: boolean

  bgColor: string

  toggleTheme: () => void
  setSystemTheme: () => void
}

export const ThemeChangerContext = createContext({} as ThemeChangerContextType)
