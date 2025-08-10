import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MainSlideshow from '@/presentation/components/movies/main-slideshow'
import MovieHorizontalList from '@/presentation/components/movies/movie-horizontal-list'
import useMovies from '@/presentation/hooks/use-movies'

export default function HomeScreen() {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='purple' size={40} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View className='mt-2 pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>
          MoviesApp
        </Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title='Populares'
          movies={popularQuery.data ?? []}
          className='mb-5'
        />

        <MovieHorizontalList
          title='Mejor Calificadas'
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className='mb-5'
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          title='Próximamente'
          movies={upcomingQuery.data ?? []}
          className='mb-5'
        />
      </View>
    </ScrollView>
  )
}
