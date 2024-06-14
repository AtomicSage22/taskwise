import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Link, router, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Iconify } from 'react-native-iconify';
import { images } from "../constants";
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';


export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext()
  console.log('isloading', isLoading, 'isloggedin', isLoggedIn)

  if(isLoggedIn){ 
    console.log('I am logged in')
    return <Redirect href='/groups' />
  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full min-h-[85vh] justify-center items-center px-4'>
          <View className='flex-row justify-center items-center mt-6'>
            <Image 
              source={images.logoSmall} 
              className='w-[100px] h-[84px]'
              resizeMode='contain'
            />
            <Text className="text-3xl text-gray-50 font-pblack ">Taskwise</Text>
          </View>
          <Image className='w-[300px] h-[300px]' source={images.cards} resizeMode='contain' />
          <View className='relative'>
            <Text className="text-3xl text-center text-gray-50 font-bold ">Tasks and chores made easy with<Text className='text-secondary-200 '>TaskWise</Text></Text>
            <Image 
              className='absolute top-14 right-7 w-36 ' 
              source={images.path} 
              resizeMode='contain' 
            />
          </View>

          <StatusBar backgroundColor='#161622' style="auto" />
          <CustomButton 
            title='Continue with Email'  
            handlePress={()=>{
              router.push('/sign-in')
            }}
            containerStyles='w-full mt-14'
          />
          {/* <Link href='/groups' className='text-[#9AC8CD] mt-5' >Go to app</Link> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


