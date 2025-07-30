import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import { Formatter } from '../../../config/helpers/formatter'
import { Pokemon } from '../../../domain/entities/pokemon'
import { RootStackParams } from '../../navigation/navigator'

interface PokemonCardProps {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParams>>()

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('pokemon', { pokemonId: pokemon.id })}
    >
      <View style={[styles.cardContainer, { backgroundColor: pokemon.color }]}>
        <Text style={styles.name}>
          {Formatter.capitalize(pokemon.name)}
          {'\n#' + pokemon.id}
        </Text>

        <View style={styles.pokeballContainer}>
          <Image
            source={require('../../../../assets/pokeball-dark.png')}
            style={styles.pokeball}
          />
        </View>

        <Image
          source={{ uri: pokemon.avatar }}
          style={styles.pokemonImage}
        />

        <Text style={[styles.text, styles.footer]}>
          {pokemon.types[0]}
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    flex: 0.5,
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: '#808080',
    top: 10,
    left: 10,
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
  text: {
    color: '#808080',
    top: 10,
    left: 10,
  },
  pokeball: {
    width: 100,
    height: 100,
    left: -25,
    top: -25,
    opacity: 0.4,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -15,
    top: -30,
  },
  pokeballContainer: {
    alignItems: 'flex-end',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    opacity: 0.5,
  },
  footer: {
    marginTop: 35
  }
})
