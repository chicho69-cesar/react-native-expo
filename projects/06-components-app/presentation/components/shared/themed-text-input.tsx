import { TextInput, TextInputProps } from 'react-native'

interface ThemedTextInputProps extends TextInputProps {
  className?: string
}

export default function ThemedTextInput({ className, ...rest }: ThemedTextInputProps) {
  return (
    <TextInput
      className='py-4 px-2 text-black dark:text-white'
      placeholderTextColor='grey'
      {...rest}
    />
  )
}
