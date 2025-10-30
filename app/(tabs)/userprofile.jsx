import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Imagefondo } from '../../components/imagefondo'


export default function User() {
  return (
    <SafeAreaView className="flex-1 bg-white">
          <Imagefondo />

      {/* Header */}
      

      {/* Profile Card */}
      <View className="mx-6 bg-gray-800 rounded-2xl shadow-lg p-6 ">
        {/* Avatar */}
        <View className="items-start mb-6 bg-gray-800 flex-row">
            <View className="bg-gray-900 rounded-full p-2">
              <Image
                source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' }}
                className="w-32 h-32"
                resizeMode="contain"
              />
            </View>
            <View className="ml-4 justify-center items-center pt-6">
              <Text className="text-white text-xl font-bold">Maestro Charizard</Text>
              <Text className="text-orange-300 text-sm">usuario@pokedex.com</Text>
            </View>
          
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

// Info Card Component
const InfoCard = ({ icon, title, value }) => {
  return (
    <View className="bg-gray-800 rounded-xl p-4 mb-3 shadow-sm flex-row items-center">
      <AntDesign name={icon} size={20} color="#fff" />
      
      <View className="flex-1 ml-4">
        <Text className="text-gray-400 text-xs mb-1">{title}</Text>
        <Text className="text-white font-semibold">{value}</Text>
      </View>
    </View>
  )
}