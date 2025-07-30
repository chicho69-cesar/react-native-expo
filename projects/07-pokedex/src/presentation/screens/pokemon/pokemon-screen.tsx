import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
// import { Chip } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { PokeApi } from '../../../config/adapters/poke-api.adapter'
import { Formatter } from '../../../config/helpers/formatter'
import { PokemonAction } from '../../../domain/actions/pokemons/pokemons.action'
import FullScreenLoader from '../../components/ui/full-screen-loader'
import useTheme from '../../context/theme/use-theme'
import { RootStackParams } from '../../navigation/navigator'

interface Props extends StackScreenProps<RootStackParams, 'pokemon'> { }

export default function PokemonScreen({ route }: Props) {
  const { top } = useSafeAreaInsets()
  const { isDark } = useTheme()
  const { pokemonId } = route.params

  const pokeballImg = isDark
    ? require('../../../../assets/pokeball-light.png')
    : require('../../../../assets/pokeball-dark.png')

  const { isLoading, data: pokemon } = useQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: async () => {
      const response = await PokemonAction.getPokemonById(PokeApi.fetcher, pokemonId)
      return response
    },
    staleTime: 1000 * 60 * 60,
  })

  if (isLoading || !pokemon) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: pokemon.color }]}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 5,
          }}
        >
          {Formatter.capitalize(pokemon.name) + '\n'}#{pokemon.id}
        </Text>

        <Image
          source={pokeballImg}
          style={styles.pokeball}
        />

        <Image
          source={{ uri: pokemon.avatar }}
          style={styles.pokemonImage}
        />
      </View>

      <View style={styles.types}>
        {pokemon.types.map((type) => (
          <View key={type} style={styles.chip}>
            <Text style={{ color: 'white' }}>
              {Formatter.capitalize(type)}
            </Text>
          </View>
        ))}
      </View>

      <FlatList
        data={pokemon.sprites}
        horizontal
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        style={styles.list}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.image}
          />
        )}
      />

      <Text style={styles.subTitle}>
        Abilities
      </Text>

      <FlatList
        data={pokemon.abilities}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.chip}>
            <Text style={{ color: 'white' }}>
              {Formatter.capitalize(item)}
            </Text>
          </View>
        )}
      />

      <Text style={styles.subTitle}>
        Stats
      </Text>

      <FlatList
        data={pokemon.stats}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.statsContainer}>
            <Text style={styles.dataText}>
              {Formatter.capitalize(item.name)}
            </Text>

            <Text style={styles.textWhite}>{item.value}</Text>
          </View>
        )}
      />

      <Text style={styles.subTitle}>
        Moves
      </Text>

      <FlatList
        data={pokemon.moves}
        horizontal
        showsHorizontalScrollIndicator={false}
        centerContent
        renderItem={({ item }) => (
          <View style={styles.statsContainer}>
            <Text style={styles.dataText}>
              {Formatter.capitalize(item.name)}
            </Text>

            <Text style={styles.textWhite}>lvl {item.level}</Text>
          </View>
        )}
      />

      <Text style={styles.subTitle}>
        Games
      </Text>

      <FlatList
        data={pokemon.games}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        centerContent
        renderItem={({ item }) => (
          <View style={styles.chip}>
            <Text style={{ color: 'white' }}>
              {Formatter.capitalize(item)}
            </Text>
          </View>
        )}
      />

      <View style={styles.separator} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  pokemonName: {
    color: '#808080',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 280,
    height: 280,
    position: 'absolute',
    bottom: -40,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: 'column',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  types: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10
  },
  chip: {
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#808080',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5
  },
  separator: {
    height: 100
  },
  dataText: {
    flex: 1,
    color: '#808080'
  },
  textWhite: {
    color: '#808080',
  }
})