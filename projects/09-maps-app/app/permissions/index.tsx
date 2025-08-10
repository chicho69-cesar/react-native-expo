import React from 'react'
import { View } from 'react-native'

import ThemedPressable from '@/presentation/components/shared/ThemedPressable'
import { ThemedText } from '@/presentation/components/shared/ThemedText'
import { usePermissionsStore } from '@/presentation/store/usePermissionsStore'

export default function PermissionsScreen() {
  const { locationStatus, requestLocationPermission } = usePermissionsStore()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>
        Estado actual: {locationStatus}
      </ThemedText>
    </View>
  )
}
