import { View, Text } from 'react-native'
import React from 'react'
import { Iconify } from 'react-native-iconify'

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Iconify icon="ri:home-line" size={24} color='black' />
    </View>
  )
}

export default Home