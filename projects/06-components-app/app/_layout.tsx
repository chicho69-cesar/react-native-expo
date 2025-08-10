import 'react-native-reanimated'
import '../global.css'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { allRoutes } from '@/constants/routes'
import ThemeChangerProvider from '@/presentation/context/theme/theme-changer-provider'
import { useThemeColor } from '@/presentation/hooks/use-theme-color'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background')

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              title: '',
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes('Slides'),
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  )
}
