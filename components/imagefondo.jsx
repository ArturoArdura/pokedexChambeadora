import React from 'react'
import { Image } from 'react-native'


// Estilos
export const Imagefondo = () => {
  return(
    <Image 
      source={require('../assets/pokebola.png')} 
      className="absolute w-72 h-72 top-3 -right-7 opacity-10" 
    />
  )
}