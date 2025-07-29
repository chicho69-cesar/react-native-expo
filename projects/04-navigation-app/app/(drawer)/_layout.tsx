import CustomDrawer from '@/presentation/components/shared/custom-drawer'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        // sceneContainerStyle: {
        //   backgroundColor: 'white',
        // },
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          headerShown: false,
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',

          drawerIcon: ({ color, size }) => (
            <Ionicons name='albums-outline' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='user/index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'Usuario',

          drawerIcon: ({ color, size }) => (
            <Ionicons name='person-circle-outline' size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name='schedule/index'
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='calendar-outline' size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  )
}
