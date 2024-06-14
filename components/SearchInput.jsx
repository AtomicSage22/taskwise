import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../constants'
import { Iconify } from 'react-native-iconify'

const SearchInput = ({title, value, handleChangeText, placeholder, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)
  return (

      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row justify-center space-x-4'>
        <TextInput
            className='flex-auto mb-3  text-white  font-pregular text-base'
            value={value}
            onChangeText={handleChangeText}
            placeholder='Search for groups'
            placeholderTextColor='#7b7b8b'
            secureTextEntry={title === 'Password' && !showPassword}
            {...props}
        />
        <TouchableOpacity>
            <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
        </TouchableOpacity>

            
      </View>
  )
}

export default SearchInput