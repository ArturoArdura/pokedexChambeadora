import React from 'react'
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function TabsLayout() {
  return (
    <>
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#000' } }} >
      <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: () => <MaterialIcons name="home" size={24} color="white" /> }} />
      <Tabs.Screen name="userprofile" options={{ headerShown: false, tabBarLabel: 'User', tabBarIcon: () => <Image className="w-10 h-10" source={require('../../assets/pikachuRick.png')} /> }} />
      <Tabs.Screen name="details" options={{ href: null, headerShown: false }} />

    </Tabs>
    <StatusBar style="dark" />
  </>
  )
}