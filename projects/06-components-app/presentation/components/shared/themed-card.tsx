import React from 'react'
import { View, ViewProps } from 'react-native'

interface ThemedCardProps extends ViewProps {
  className?: string
}

export default function ThemedCard({ className, children, ...rest }: ThemedCardProps) {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
      {...rest}
    >
      {children}
    </View>
  )
}