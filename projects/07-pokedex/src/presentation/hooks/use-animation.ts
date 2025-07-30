import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export default function useAnimation() {
  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(0)).current

  const fadeIn = ({ duration = 300, toValue = 1, callback = () => { } }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback)
  }

  const fadeOut = ({ duration = 300, toValue = 0, callback = () => { } }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback)
  }

  const startMovingTopPosition = ({
    initialPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callback = () => { }
  }) => {
    animatedTop.setValue(initialPosition)

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver: true,
      easing,
    }).start(callback)
  }

  return {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition
  }
}