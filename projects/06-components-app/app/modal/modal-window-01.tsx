import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'

import ThemedButton from '@/presentation/components/shared/themed-button'
import ThemedText from '@/presentation/components/shared/themed-text'
import ThemedView from '@/presentation/components/shared/themed-view'

export default function ModalWindow01Screen() {
  return (
    <ThemedView
      className='justify-center items-center flex-1'
      bgColor='#A52182'
    >
      <ThemedText>Hola, Soy un modal</ThemedText>

      <ThemedButton
        className='my-4'
        onPress={() => router.push('/modal/modal-window-02')}
      >
        Otro modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  )
}
