import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Iconify } from 'react-native-iconify'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { getAllGroups } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import { getCurrentUser } from '../../lib/appwrite'

const Home = () => {
  const [groups, setGroups] = useState([])

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const fetchCurrentUserAndGroups = async () => {
      try {
        const result = await getCurrentUser();

        if (result) {
          setCurrentUser(result);
          setGroups(result.groups)


        } else {
          console.log("You're an idiot")
          setCurrentUser(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCurrentUserAndGroups();
  }, []);



  const [refreshing, setRefreshing] = useState(false)
 

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }



  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={groups}
        keyExtractor={item => item.$id}
        renderItem={({item}) => {
          console.log('this is item', item.title)
          return(
          <View className="border-secondary  mx-auto w-[90%] h-20 rounded-2xl flex flex-row items-center justify-start ">
            <Image 
              src={item.icon}
              className="w-[30%] rounded-2xl h-full"
              />
            <View className="ml-4 h-full py-2 flex items-start">
              <Text
                className="font-psemibold text-xl text-white "
              >
                {item.title}
              </Text>
              <Text
                className="font-pregular text-md text-gray-400  "
              >
                2 tasks pending
              </Text>
            </View>
          </View>
          )
        }}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
            <Text className="font-psemibold text-2xl text-white">Welcome Back</Text>
            <Image 
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode='contain'
            />
            </View>
            <SearchInput/>
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title='No groups found' subtitle='Create a group to start splitting tasks' />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  )
}

export default Home