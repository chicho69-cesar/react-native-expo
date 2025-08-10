import React, { useState } from 'react'

import ThemedCard from '@/presentation/components/shared/themed-card'
import ThemedSwitch from '@/presentation/components/shared/themed-switch'
import ThemedView from '@/presentation/components/shared/themed-view'
import useThemeChanger from '@/presentation/context/theme/use-theme-changer'

export default function ThemesScreen() {
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChanger()

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === 'dark',
    systemMode: isSystemTheme,
  })

  const setDarkMode = (value: boolean) => {
    toggleTheme()

    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    })
  }

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme()
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    })
  }

  return (
    <ThemedView margin>
      <ThemedCard className='mt-5'>
        <ThemedSwitch
          text='Dark Mode'
          className='mb-5'
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          text='System Mode'
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  )
}
