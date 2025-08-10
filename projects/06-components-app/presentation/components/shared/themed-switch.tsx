import { useThemeColor } from '@/presentation/hooks/use-theme-color'
import { Platform, Pressable, View } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import ThemedText from './themed-text'

interface ThemedSwitchProps {
  text?: string
  value: boolean
  className?: string

  onValueChange: (value: boolean) => void
}

const isAndroid = Platform.OS === 'android'

export default function ThemedSwitch({ text, value, className, onValueChange }: ThemedSwitchProps) {
  const switchActiveColor = useThemeColor({}, 'primary')

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}

      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ''}
        // ios_backgroundColor={value ? 'green' : 'red'}
        trackColor={{
          false: 'grey',
          true: switchActiveColor,
        }}
      />
    </Pressable>
  )
}
