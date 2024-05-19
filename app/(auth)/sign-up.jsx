import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "../../constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    userName: '',
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password || !form.userName) {
      Alert.alert('Error', 'All fields are required')
    }
    setisSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.userName)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }
    finally {
      setisSubmitting(false)
    }

    createUser(form.email, form.password, form.userName)  
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full min-h-[85vh] justify-center px-4 my-6 '>
          <View className='flex-row items-center gap-3'>
            <Image 
              source={images.logoSmall} 
              resizeMode='contain'
              className='w-[30px] h-[35px]'
              
            />
            <Text className='text-gray-200 text-2xl font-psemibold'>TaskWise</Text>
          </View>
          <Text className='text-gray-200 text-xl font-psemibold mt-7'>Sign Up to TaskWise</Text>
          <FormField
            title='Username'
            value={form.userName}
            handleChangeText={(text)=>setForm({...form, userName: text})}
            otherStyles='mt-10'
          />
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(text)=>setForm({...form, email: text})}
            otherStyles='mt-7 '
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(text)=>setForm({...form, password: text})}
            otherStyles='mt-7 '
          />
          <CustomButton
            title={'Sign Up'}
            handlePress={submit}
            containerStyles={'mt-7'}
            isLoading={isSubmitting}
          />
          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Have an account already?</Text>
            <Link href='sign-in' className='text-lg text-secondary font-psemibold'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp