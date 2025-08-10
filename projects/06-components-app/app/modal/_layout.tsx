import { Stack } from 'expo-router'
import React from 'react'

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='index'
      />

      <Stack.Screen
        name='modal-window-01'
        options={{
          presentation: 'modal',
        }}
      />

      <Stack.Screen
        name='modal-window-02'
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}
