import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { TYPE_COLORS } from './index'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Details() {
  const { item } = useLocalSearchParams()  
  const pokemon = JSON.parse(item)

  const mainType = pokemon.types[0].type.name
  const backgroundColor = TYPE_COLORS[mainType] || '#A8A878'
  
  return (
    <SafeAreaView className="flex-1 p-6" style={{ backgroundColor }}>
        <View className="flex-row justify-between items-center mb-4">

          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-circle-outline" size={36} color="white" />
          </TouchableOpacity>
                   
            {/* Pokemon Number */}
          <Text className="text-white/70 font-bold text-xl mb-2">
            #{String(pokemon.id).padStart(3, '0')}
          </Text>

        </View>
          
          {/* Pokemon Image */}
          <View className="items-center mb-6">
            <Image
              source={
                pokemon.name === "mito" 
                  ? require('../../assets/mito2.jpeg') 
                  : pokemon.name === "reni"
                  ? require('../../assets/reni.jpeg')
                  : { uri: pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default || pokemon.sprites.other['official-artwork'].front_default }
              }
              className="w-72 h-72" 
              resizeMode="contain"
            />
          </View>

          {/* Pokemon Name */}
          <Text className="text-white font-bold text-6xl capitalize mb-4">
            {pokemon.name}
          </Text>

          {/* Pokemon Abilities, o sea chamba */}
          <Text className="text-white font-bold text-2xl mb-4">
            Chambea de: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
          </Text>

          {/* Types */}
          <View className="mb-6">
            {pokemon.types.map((type, index) => (
              <View 
                key={index}
                className="bg-white/20 rounded-full px-4 py-2 mb-2"
              >
                <Text className="text-white text-sm capitalize font-semibold">
                  {type.type.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Logo de Pokemon */}
          <View className="items-center mt-auto">
            <Image
              source={require('../../assets/logopoke.png')}
              className="w-36 h-36"
              resizeMode="contain"
            />
          </View>
    </SafeAreaView>
  )
}



