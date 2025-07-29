import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import 'react-native-reanimated'

import { Colors } from '@/constants/Colors'

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />
      <StatusBar style="light" />
    </View>
  )
}
