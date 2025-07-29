import { Redirect } from 'expo-router'
import React from 'react'

export default function App() {
  return (
    // <Redirect href={'/(stack)/home'} />
    // <Redirect href={'/tabs'} />
    // <Redirect href={'/drawer'} />
    <Redirect href={'/home'} />
  )

  /* return (
    <SafeAreaView>
      <View className='mt-6 mx-2.5'>
        <Text className='text-5xl' style={{ fontFamily: 'WorkSans-Black' }}>
          Hola Mundo
        </Text>

        <Text className='text-4xl text-primary font-work-black'>
          Hola Mundo
        </Text>

        <Text className='text-3xl text-secondary font-work-medium'>
          Hola Mundo
        </Text>

        <Text className='text-2xl text-secondary-100 font-work-light'>
          Hola Mundo
        </Text>

        <Text className='text-xl text-tertiary'>
          Hola Mundo
        </Text>
      </View>
    </SafeAreaView>
  ) */
}
