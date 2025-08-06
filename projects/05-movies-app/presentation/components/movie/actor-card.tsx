import { Cast } from '@/infrastructure/interfaces/cast.interface'
import React from 'react'
import { Image, Text, View } from 'react-native'

interface ActorCardProps {
  actor: Cast
}

export default function ActorCard({ actor }: ActorCardProps) {
  return (
    <View className='mx-10 w-[60px]'>
      <Image
        source={{ uri: actor.avatar }}
        className='w-[100px] h-[150] rounded-2xl shadow'
        resizeMode='cover'
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className='font-bold text-lg'
        >
          {actor.name}
        </Text>

        <Text className='text-gray-600 text-xs'>
          {actor.character}
        </Text>
      </View>
    </View>
  )
}
