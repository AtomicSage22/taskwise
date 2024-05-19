import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { Iconify } from 'react-native-iconify';



const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor:'#9AC8CD',
        tabBarActiveTintColor:'#E1F7F5',
        tabBarStyle:{
          backgroundColor: '#1E0342',
          borderTopWidth: 1,
          borderTopColor: '#1E0342',
          height: 76,
        }
      }}
      
    >
      <Tabs.Screen 
      name='groups'
      options={{
        title: 'Groups',
        headerShown: false,
        tabBarIcon:({color, focused}) => (
          <View className='items-center justify-center '>
            <Iconify icon="material-symbols-light:groups" size={20} color={color} />
            <Text className={`${focused? 'text-sm text-[#E1F7F5]': 'text-xs text-[#9AC8CD]'}`}>Home</Text>
          </View> 
        )
      }} 
      />
      <Tabs.Screen 
      name='friends'
      options={{
        title: 'Friends',
        headerShown: false,
        tabBarIcon:({color, focused}) => (
          <View className='items-center justify-center '>
            <Iconify icon="la:user-friends" size={20} color={color} />
            <Text className={`${focused? 'text-sm text-[#E1F7F5]': 'text-xs text-[#9AC8CD]'}`}>Friends</Text>
          </View>
        )
      }} 
      />
      <Tabs.Screen 
      name='activity'
      options={{
        title: 'Activity',
        headerShown: false,
        tabBarIcon:({color, focused}) => (
          <View className='items-center justify-center '>
            <Iconify icon="fe:activity" size={20} color={color} />
            <Text className={`${focused? 'text-sm text-[#E1F7F5]': 'text-xs text-[#9AC8CD]'}`}>Activity</Text>
          </View>
        )
      }} 
      />
      <Tabs.Screen 
      name='profile'
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon:({color, focused}) => (
          <View className='items-center justify-center '>
            <Iconify icon="codicon:account" size={20} color={color} />
            <Text className={`${focused? 'text-sm text-[#E1F7F5]': 'text-xs text-[#9AC8CD]'}`}>Profile</Text>
          </View>
        )
      }} 
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})