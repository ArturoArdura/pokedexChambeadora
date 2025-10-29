import React from 'react'
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function TabsLayout() {
  return (
    <>
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: () => <MaterialIcons name="home" size={24} color="black" /> }} />
      <Tabs.Screen name="userprofile" options={{ headerShown: false, tabBarLabel: 'User', tabBarIcon: () => <Image className="w-72 h-72" source={require('../../assets/pikachuRick.png')} /> }} />
    </Tabs>
    <StatusBar style="light" />
  </>
  )
}