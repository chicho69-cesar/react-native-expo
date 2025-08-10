import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'

import ThemedButton from '@/presentation/components/shared/themed-button'
import ThemedText from '@/presentation/components/shared/themed-text'
import ThemedView from '@/presentation/components/shared/themed-view'

export default function ModalWindow02Screen() {
  return (
    <ThemedView className='justify-center items-center flex-1'>
      <ThemedText>
        Hola, Soy otro modal
      </ThemedText>

      <ThemedButton onPress={() => router.dismiss()}>
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  )
}
