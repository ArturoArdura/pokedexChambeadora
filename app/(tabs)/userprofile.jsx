import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function User() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-blue-600 pt-8 pb-12 px-6 rounded-b-3xl shadow-lg">
        <Text className="text-white text-3xl font-bold mb-2">Mi Perfil</Text>
        <Text className="text-blue-100">Entrenador Pokémon</Text>
      </View>

      {/* Profile Card */}
      <View className="mx-6 -mt-8 bg-white rounded-2xl shadow-lg p-6">
        {/* Avatar */}
        <View className="items-center mb-6">
          <View className="bg-blue-100 rounded-full p-6 mb-4">
            <AntDesign name="user" size={64} color="#2563eb" />
          </View>
          <Text className="text-gray-800 text-2xl font-bold">Usuario Pokémon</Text>
          <Text className="text-gray-500 text-sm">usuario@pokedex.com</Text>
        </View>

        {/* Stats */}
        <View className="flex-row justify-around py-4 border-t border-gray-200">
          <View className="items-center">
            <Text className="text-blue-600 text-2xl font-bold">150</Text>
            <Text className="text-gray-500 text-xs">Capturados</Text>
          </View>
          <View className="items-center">
            <Text className="text-blue-600 text-2xl font-bold">42</Text>
            <Text className="text-gray-500 text-xs">Favoritos</Text>
          </View>
          <View className="items-center">
            <Text className="text-blue-600 text-2xl font-bold">89</Text>
            <Text className="text-gray-500 text-xs">Vistos</Text>
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
    <View className="bg-white rounded-xl p-4 mb-3 shadow-sm flex-row items-center">
      <View className="bg-blue-50 rounded-full p-3 mr-4">
        <AntDesign name={icon} size={20} color="#2563eb" />
      </View>
      <View className="flex-1">
        <Text className="text-gray-500 text-xs mb-1">{title}</Text>
        <Text className="text-gray-800 font-semibold">{value}</Text>
      </View>
    </View>
  )
}