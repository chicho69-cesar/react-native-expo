import { useAnimation } from '@/presentation/hooks/use-animation'
import { useState } from 'react'
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View
} from 'react-native'

interface FadeInImageProps {
  uri: string
  style: StyleProp<ImageStyle>
}

export default function FadeInImage({ uri, style }: FadeInImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { animatedOpacity, fadeIn } = useAnimation()

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color='grey'
          size={30}
        />
      )}

      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({})
          setIsLoading(false)
        }}
      />
    </View>
  )
}
