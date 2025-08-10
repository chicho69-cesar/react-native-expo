import { Link, router } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

import ThemedButton from '@/presentation/components/shared/themed-button'
import ThemedView from '@/presentation/components/shared/themed-view'

export default function ModalScreen() {
  return (
    <ThemedView>
      <Link asChild href='/modal/modal-window-01' className='mx-4'>
        <Text className='text-light-text dark:text-dark-text my-2 text-xl'>
          Abrir Modal
        </Text>
      </Link>

      <ThemedButton
        onPress={() => router.push('/modal/modal-window-01')}
        className='mx-4'
      >
        Abrir modal
      </ThemedButton>
    </ThemedView>
  )
}
