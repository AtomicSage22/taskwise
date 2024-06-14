import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { Iconify } from 'react-native-iconify';



const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor:'#CDCDE0',
        tabBarActiveTintColor:'#FFA001',
        tabBarStyle:{
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        }
      }}
      
    >
      <Tabs.Screen 
      name='groups'
      options={{
        title: 'Groups',
        headerShown: false,
        tabBarIcon:({color, focused}) => (
          <View className='items-center justify-center'>
            <Iconify icon="material-symbols-light:groups" size={24} color={color} />
            <Text className={`${focused? 'font-psemibold': 'font-pregular'} text-xs `} style={{color:color}}>Groups</Text>
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
          <View className='items-center justify-center gap-1'>
            <Iconify icon="la:user-friends" size={20} color={color} />
            <Text className={`${focused? 'font-psemibold': 'font-pregular'} text-xs `} style={{color:color}}>Friends</Text>
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
          <View className='items-center justify-center gap-1'>
            <Iconify icon="fe:activity" size={20} color={color} />
            <Text className={`${focused? 'font-psemibold': 'font-pregular'} text-xs `} style={{color:color}}>Activity</Text>
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
          <View className='items-center justify-center gap-1'>
            <Iconify icon="codicon:account" size={20} color={color} />
            <Text className={`${focused? 'font-psemibold': 'font-pregular'} text-xs `} style={{color:color}}>Profile</Text>
          </View>
        )
      }} 
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})