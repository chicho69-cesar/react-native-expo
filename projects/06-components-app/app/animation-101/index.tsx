import React from 'react'
import { Animated, Easing } from 'react-native'

import ThemedButton from '@/presentation/components/shared/themed-button'
import ThemedView from '@/presentation/components/shared/themed-view'
import { useAnimation } from '@/presentation/hooks/use-animation'

export default function Animation101Screen() {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  } = useAnimation()

  return (
    <ThemedView margin className='justify-center items-center flex-1'>
      <Animated.View
        className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />

      <ThemedButton
        className='my-5'
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            easing: Easing.bounce,
            duration: 700,
          });
        }}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton className='my-5' onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  )
}
