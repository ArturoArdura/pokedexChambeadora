import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';


export default function User() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <LinearGradient
        colors={['#DC2626', '#EA580C', '#F97316']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-8 pb-12 px-6 rounded-b-3xl shadow-lg"
      >
        <Text className="text-white text-3xl font-bold mb-2">Mi Perfil</Text>
        <Text className="text-orange-100">Entrenador Pokémon</Text>
      </LinearGradient>

      {/* Profile Card */}
      <View className="mx-6 -mt-8 bg-gray-800 rounded-2xl shadow-lg p-6">
        {/* Avatar */}
        <View className="items-center mb-6">
          <LinearGradient
            colors={['#F97316', '#DC2626']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-full p-1 mb-4"
          >
            <View className="bg-gray-900 rounded-full p-2">
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' }}
                className="w-32 h-32"
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
          <Text className="text-white text-2xl font-bold">Maestro Charizard</Text>
          <Text className="text-orange-300 text-sm">usuario@pokedex.com</Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around py-4 border-t border-gray-700">
          <View className="items-center">
            <Text className="text-orange-500 text-2xl font-bold">150</Text>
            <Text className="text-gray-400 text-xs">Capturados</Text>
          </View>
          <View className="items-center">
            <Text className="text-orange-500 text-2xl font-bold">42</Text>
            <Text className="text-gray-400 text-xs">Favoritos</Text>
          </View>
          <View className="items-center">
            <Text className="text-orange-500 text-2xl font-bold">89</Text>
            <Text className="text-gray-400 text-xs">Vistos</Text>
          </View>
        </View>
      </View>

      {/* Info Cards */}
      <View className="mx-6 mt-6">
        <InfoCard 
          icon="mail" 
          title="Email" 
          value="usuario@pokedex.com" 
        />
        <InfoCard 
          icon="phone" 
          title="Teléfono" 
          value="+52 123 456 7890" 
        />
        <InfoCard 
          icon="enviromento" 
          title="Ubicación" 
          value="Pueblo Paleta, Kanto" 
        />
      </View>
    </SafeAreaView>
  )
}

// Info Card Component
const InfoCard = ({ icon, title, value }) => {
  return (
    <View className="bg-gray-800 rounded-xl p-4 mb-3 shadow-sm flex-row items-center">
      <LinearGradient
        colors={['#F97316', '#DC2626']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-full p-3 mr-4"
      >
        <AntDesign name={icon} size={20} color="#fff" />
      </LinearGradient>
      <View className="flex-1">
        <Text className="text-gray-400 text-xs mb-1">{title}</Text>
        <Text className="text-white font-semibold">{value}</Text>
      </View>
    </View>
  )
}