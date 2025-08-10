import { useContext } from 'react'
import { ThemeChangerContext } from './theme-changer-context'

export default function useThemeChanger() {
  const themeChanger = useContext(ThemeChangerContext)
  return themeChanger
}
