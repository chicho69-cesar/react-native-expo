import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Stack, useNavigation } from 'expo-router'
import React from 'react'

export default function StackLayout() {
  const navigation = useNavigation()

  const handleLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop())
      return
    }

    navigation.dispatch(DrawerActions.toggleDrawer)
  }

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            className='mr-5'
            size={20}
            onPress={() => handleLeftClick(!!canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name='home/index'
        options={{
          title: 'Inicio',
        }}
      />

      <Stack.Screen
        name='products/index'
        options={{
          title: 'Productos',
        }}
      />

      <Stack.Screen
        name='profile/index'
        options={{
          title: 'Perfil',
        }}
      />

      <Stack.Screen
        name='settings/index'
        options={{
          title: 'Ajustes Pantalla',
        }}
      />
    </Stack>
  )
}
