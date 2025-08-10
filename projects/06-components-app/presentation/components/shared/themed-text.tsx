import React from 'react'
import { Text, TextProps } from 'react-native'

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

interface ThemedTextProps extends TextProps {
  className?: string
  type?: TextType
}

export default function ThemedText({ className, type, ...rest }: ThemedTextProps) {
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-semibold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className,
      ].join(' ')}
      {...rest}
    />
  )
}
