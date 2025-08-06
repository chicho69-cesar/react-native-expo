import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

import MovieCast from '@/presentation/components/movie/movie-cast'
import MovieDescription from '@/presentation/components/movie/movie-description'
import MovieHeader from '@/presentation/components/movie/movie-header'
import useMovie from '@/presentation/hooks/use-movie'

export default function MovieScreen() {
  const { id } = useLocalSearchParams()
  const { movieQuery, castQuery } = useMovie(+id)

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color='purple' size={30} />
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />

      <MovieDescription
        movie={movieQuery.data}
      />

      <MovieCast
        cast={castQuery.data ?? []}
      />
    </ScrollView>
  )
}
