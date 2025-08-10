import { useThemeColor } from '@/presentation/hooks/use-theme-color'
import { View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ThemedViewProps extends ViewProps {
  className?: string
  margin?: boolean
  safe?: boolean
  bgColor?: string
}

export default function ThemedView({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({}, 'background')
  const safeArea = useSafeAreaInsets()

  const themedBg = bgColor ?? backgroundColor

  return (
    <View
      style={[
        {
          backgroundColor: themedBg,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  )
}
