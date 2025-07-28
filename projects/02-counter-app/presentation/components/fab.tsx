import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface FABProps {
  label: string
  position?: 'left' | 'right'
  onPress?: () => void
  onLongPress?: () => void
}

export default function FAB({ label, onLongPress, onPress, position = 'right' }: FABProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === 'right' ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.7 } : { opacity: 1 }
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: '#fff', fontSize: 20 }}>
        {label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
})
