import { useFonts } from 'expo-font'
import * as NavigationBar from 'expo-navigation-bar'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform, View } from 'react-native'
import 'react-native-reanimated'

import { globalStyles } from '@/config/theme/global-styles'

const isAndroid = Platform.OS === 'android'

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black')
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  )
}
