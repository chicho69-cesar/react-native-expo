import { StackScreenProps } from '@react-navigation/stack'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PokeApi } from '../../../config/adapters/poke-api.adapter'
import { globalTheme } from '../../../config/theme/global-theme'
import { PokemonAction } from '../../../domain/actions/pokemons/pokemons.action'
import PokemonCard from '../../components/pokemons/pokemon-card'
import FullScreenLoader from '../../components/ui/full-screen-loader'
import PokeballBg from '../../components/ui/pokeball-bg'
import { RootStackParams } from '../../navigation/navigator'

interface Props extends StackScreenProps<RootStackParams, 'home'> { }

export default function HomeScreen({ navigation }: Props) {
  const { top } = useSafeAreaInsets()
  const theme = useTheme()
  const queryClient = useQueryClient()

  // const { isLoading, data: pokemons = [] } = useQuery({
  //   queryKey: ['pokemons'],
  //   queryFn: () => PokemonAction.getPokemons(PokeApi.fetcher, { page: 0 }),
  //   staleTime: 1000 * 60 * 60
  // })

  const { isLoading, data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60,
    queryFn: async (params) => {
      const pokemons = await PokemonAction.getPokemons(PokeApi.fetcher, {
        page: params.pageParam
      })

      pokemons.forEach((pokemon) => {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon)
      })

      return pokemons
    },
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length
    }
  })

  if (isLoading) {
    return <FullScreenLoader />
  }

  const pokemonsData = data?.pages.flat() || []

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={styles.imagePosition} />

      <FlatList
        data={pokemonsData}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{ paddingTop: top + 20 }}
        ListHeaderComponent={() => (
          <Text style={styles.title}>
            Pokédex
          </Text>
        )}
        renderItem={({ item: pokemon }) => (
          <PokemonCard pokemon={pokemon} />
        )}
        onEndReachedThreshold={0.6}
        onEndReached={() => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      />

      <Pressable
        style={[
          globalTheme.fab,
          { backgroundColor: theme.colors.primary },
        ]}
        onPress={() => navigation.push('search')}
      >
        <Text
          style={[
            globalTheme.fabText,
            { color: theme.dark ? 'black' : 'white' },
          ]}
        >
          Buscar
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#808080',
    marginBottom: 20,
  }
})
