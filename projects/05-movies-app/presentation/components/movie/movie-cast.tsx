import { Cast } from '@/infrastructure/interfaces/cast.interface'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import ActorCard from './actor-card'

interface MovieCastProps {
  cast: Cast[]
}

export default function MovieCast({ cast }: MovieCastProps) {
  return (
    <View className='mt-5 mb-20'>
      <Text className='font-bold text-2xl px-5'>Actores</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
  )
}
