import * as Haptics from 'expo-haptics'
import React from 'react'
import { Pressable, Text } from 'react-native'

import { Colors } from '@/config/constants/Colors'
import { globalStyles } from '@/config/theme/global-styles'

interface CalculatorButtonProps {
  label: string
  color?: string
  blackText?: boolean
  doubleSize?: boolean
  onPress: () => void
}

export default function CalculatorButton({
  label,
  color = Colors.darkGray, blackText = false,
  doubleSize = false,
  onPress,
}: CalculatorButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => {
        Haptics.selectionAsync()
        onPress()
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}
