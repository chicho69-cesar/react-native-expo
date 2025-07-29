import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'indigo',
        // headerShown: false,
        // tabBarStyle: {
        //   backgroundColor: 'black',
        // },
        // tabBarActiveBackgroundColor: 'red',
      }}
    >
      <Tabs.Screen
        name='(stack)'
        options={{
          title: 'Stack',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='person-add-outline' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='home-outline' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='star-outline' color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
