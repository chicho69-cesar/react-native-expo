import { globalStyles } from '@/config/theme/global-styles'
import React from 'react'
import { Text, type TextProps } from 'react-native'

interface ThemeTextProps extends TextProps {
  variant?: 'h1' | 'h2'
}

export default function ThemeText({ children, variant = 'h1', ...rest }: ThemeTextProps) {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  )
}
