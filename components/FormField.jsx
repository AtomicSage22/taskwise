import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../constants'
import { Iconify } from 'react-native-iconify'

const FormField = ({title, value, handleChangeText, placeholder, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='border-2 border-black-200 w-full h-16 pr-2 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row justify-center'>
        <TextInput
            className='flex-1 text-white px-4 font-psemibold text-base'
            value={value}
            onChangeText={handleChangeText}
            placeholder={placeholder}
            placeholderTextColor='#7b7b8b'
            secureTextEntry={title === 'Password' && !showPassword}
            {...props}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                {showPassword? 
                    <Iconify icon='mdi:eye-off-outline' size={20} color='#7b7b8b' />: 
                    <Iconify icon='mdi:eye-outline' size={20} color='#7b7b8b' />
                }
            </TouchableOpacity>
        )}

            
      </View>
    </View>
  )
}

export default FormField