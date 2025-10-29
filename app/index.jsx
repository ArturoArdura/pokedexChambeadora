import { View, Text, Image, Pressable, Animated } from 'react-native'
import { useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  const router = useRouter();
  
  return (
    <View className="flex-1 items-center justify-center relative">
        <LinearGradient
          colors={['white', 'orange']}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        />
        <Imagefondo />
        <Text className="text-white text-5xl font-bold">Pokédex</Text>
        <Pressable 
          onPress={() => router.push('/(tabs)')}
          className="bg-red-500 px-8 py-4 rounded-full mt-8 active:bg-red-600"
        >
          <Text className="text-white font-bold text-lg">Comenzar</Text>
        </Pressable>
    </View>
  )
}

// Componente animado
const Imagefondo = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animación infinita de rotación
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 3000, // 3 segundos por rotación completa
                useNativeDriver: true, // Mejor performance
            })
        ).start();
    }, []);

    // Interpolación: 0 → 360 grados
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return(
        <Animated.Image 
            source={require('../assets/pokebola.png')} 
            style={{
                width: 288, // w-72 = 18rem = 288px
                height: 288,
                marginBottom: 16, // mb-4 = 1rem = 16px
                transform: [{ rotate: spin }]
            }}
        />
    )
}