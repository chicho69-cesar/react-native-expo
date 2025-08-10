import 'react-native-reanimated'

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useColorScheme } from '@/presentation/hooks/useColorScheme.web'
import PermissionsCheckerProvider from '@/presentation/providers/PermissionsCheckerProvider'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <PermissionsCheckerProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name='loading/index'
              options={{ animation: 'none' }}
            />

            <Stack.Screen
              name='map/index'
              options={{ animation: 'fade' }}
            />

            <Stack.Screen
              name='permissions/index'
              options={{ animation: 'fade' }}
            />
          </Stack>
        </PermissionsCheckerProvider>

        <StatusBar style='auto' />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
