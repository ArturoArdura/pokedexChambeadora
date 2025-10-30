import { View, Text, Image, FlatList, ActivityIndicator, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Imagefondo } from '../../components/imagefondo'

export const TYPE_COLORS = {
  normal: '#A8A878',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  grass: '#78C850',
  ice: '#98D8D8',
  fighting: '#C03028',
  poison: '#A040A0',
  ground: '#E0C068',
  flying: '#A890F0',
  psychic: '#F85888',
  bug: '#A8B820',
  rock: '#B8A038',
  ghost: '#705898',
  dragon: '#7038F8',
  dark: '#705848',
  steel: '#B8B8D0',
  fairy: '#EE99AC',
  amor: '#FF1493', // Color rosa fuerte para el tipo "amor"
  'hermosa enojona sentimental': '#FF1493'
}

// ============ CARD PERSONALIZADA - BORRAR ESTA SECCIÓN COMPLETA PARA REMOVER ============
const CUSTOM_CARD_ENABLED = false // Cambiar a false para ocultar la tarjeta de Mito

const mitoCard = {
  id: 999,
  name: 'mito',
  types: [{ type: { name: 'amor' } }],
  abilities: [{ ability: { name: 'molestar a luciana' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: null // Temporalmente null hasta que agregues la imagen
      }
    }
  }
}

const reniCard = {
  id: 998,
  name: 'reni',
  types: [{ type: { name: 'hermosa enojona sentimental' } }],
  abilities: [{ ability: { name: 'Limpiar dientes y hacer feliz a arturo' } }],
  sprites: {
    other: {
      'official-artwork': {
        front_default: null // Temporalmente null hasta que agregues la imagen
      }
    }
  }
}
// ============ FIN CARD PERSONALIZADA ============

export default function Index() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      
      // Fetch detailed data for each pokemon
      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          return await res.json()
        })
      )
      
      setPokemons(pokemonDetails)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching pokemons:', error)
      setLoading(false)
    }
  }

  const renderPokemonCard = ({ item }) => {
    const mainType = item.types[0].type.name
    const backgroundColor = TYPE_COLORS[mainType] || '#A8A878'
    const isCustomCard = item.id === 999 // Identificador de la tarjeta personalizada
    const isReniCard = item.id === 998 // Identificador de la tarjeta de Reni

    return (
      <View className="w-1/2 p-2">
        <TouchableOpacity 
          onPress={() => router.push({pathname:'/details',params:{item: JSON.stringify(item)}})}
          className="rounded-2xl p-4 shadow-lg"
          style={{ backgroundColor }}
        >
          {/* Pokemon Number */}
          <Text className="text-white/70 font-bold text-xs mb-1">
            #{String(item.id).padStart(3, '0')}
          </Text>

          {/* Pokemon Name */}
          <Text className="text-white font-bold text-lg capitalize mb-2">
            {item.name}
          </Text>

          {/* Types */}
          <View className="mb-3">
            {item.types.map((type, index) => (
              <View 
                key={index}
                className="bg-white/20 rounded-full px-3 py-1 mb-1"
              >
                <Text className="text-white text-xs capitalize font-semibold">
                  {type.type.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Pokemon Abilities, o sea chamba */}
          <Text className="text-white font-bold text-md mb-2">
            Chambea de: {item.abilities.map(ability => ability.ability.name).join(', ')}
          </Text>

          {/* Pokemon Image */}
          <View className="items-center">
            {isCustomCard ? (
              <Image
                source={require('../../assets/mito.jpeg')}
                className="w-24 h-24"
                resizeMode="contain"
              />
            ) : isReniCard ? (
              <Image
                source={require('../../assets/reni.jpeg')}
                className="w-24 h-24"
                resizeMode="contain"
              />
            ) : (
              <Image
                source={{ uri: item.sprites.versions?.['generation-v']?.['black-white']?.front_default || item.sprites.other['official-artwork'].front_default }}
                className="w-28 h-28"
                resizeMode="contain"
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Imagefondo />
      
      {/* Header */}
      <View className="px-6 pt-4 pb-6 z-10">
        <Text className="text-black text-4xl font-bold">Pokédex con React Native</Text>
        <Text className="text-gray-800 text-sm mt-1">
          Descubre todos los Pokémon
        </Text>
      </View>

      {/* Pokemon List */}
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#fff" />
          <Text className="text-black mt-4">Cargando Pokémon...</Text>
        </View>
      ) : (
        <FlatList
          data={CUSTOM_CARD_ENABLED ? [...pokemons, mitoCard, reniCard] : pokemons}
          renderItem={renderPokemonCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 20 }}
          showsVerticalScrollIndicator={true}
        />
      )}
    </SafeAreaView>
  )
}

