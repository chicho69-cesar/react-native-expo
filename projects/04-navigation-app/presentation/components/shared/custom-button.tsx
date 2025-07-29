import React from 'react'
import { Pressable, PressableProps, Text, View } from 'react-native'

interface CustomButtonProps extends PressableProps {
  children: string
  color?: 'primary' | 'secondary' | 'tertiary'
  variant?: 'contained' | 'text-only'
  className?: string
  ref?: React.Ref<View>
}

export default function CustomButton({
  children,
  color = 'primary',
  variant = 'contained',
  className,
  ref,
  onPress,
  onLongPress,
  ...rest
}: CustomButtonProps) {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color]

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color]

  if (variant === 'text-only') {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    )
  }

  return (
    <Pressable
      className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
      ref={ref}
    >
      <Text className='text-white text-center font-work-medium'>
        {children}
      </Text>
    </Pressable>
  )
}
