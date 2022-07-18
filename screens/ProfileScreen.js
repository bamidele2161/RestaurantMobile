import { TouchableOpacity, View, Text, Image } from 'react-native'
import React from 'react'
import { LocationMarkerIcon, MailIcon, PhoneIcon, UserIcon, ArrowLeftIcon } from 'react-native-heroicons/outline'
import Button from '../components/Button'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1,}} className="">
      <View className="bg-[#00CCBB] p-4 rounded-b-3xl" style={{flex: 0.3, paddingTop: 50}}>

        <View className="justify-center items-center mt-10">

            <View className="rounded-full w-20 h-20 my-6" style={{width: 100, height: 100, resizeMode: 'contain'}}>
              <Image source={require("../assets/f1.jpeg")} style={{ height: 100, resizeMode: 'cover', width: 100, borderRadius: 75, overflow: "hidden"}} className=" rounded-full w-full "/>
            </View>
            <Text  className="font-bold text-2xl text-white mb-6">Akinyemi Bamidele</Text>

        </View>

        <TouchableOpacity 
            onPress={() => navigation.navigate("Home")}
            className="absolute top-14 left-4 bg-[#00CCBB] rounded p-2">
            <ArrowLeftIcon color="white" size={25}/>
        </TouchableOpacity>

      </View>

      <View className=" px-4 py-6" style={{ flex: 0.7, marginTop: 30}}>
        <View className=" flex-row space-x-7 border-gray-300" style={{ marginBottom: 30, borderBottomWidth: 1,}}>
          <UserIcon color="#00CCBB" size={25}/>
          <Text  className="font-semibold text-gray-500 text-lg mb-6">Akinyemi Bamidele</Text>
        </View>
        <View className=" flex-row space-x-7 border-gray-300" style={{ marginBottom: 30, borderBottomWidth: 1,}}>
          <PhoneIcon color="#00CCBB" size={25}/>
          <Text  className="font-semibold text-gray-500 text-lg mb-6">07060797442</Text>
        </View>
        <View className=" flex-row space-x-7 border-gray-300" style={{ marginBottom: 30, borderBottomWidth: 1,}}>
          <MailIcon color="#00CCBB" size={25}/>
          <Text  className="font-semibold text-gray-500 text-lg mb-6">akinyemibamidele2@gmail.com</Text>
        </View>
        <View className=" flex-row space-x-7 border-gray-300" style={{ marginBottom: 30, borderBottomWidth: 1,}}>
          <LocationMarkerIcon color="#00CCBB" size={25}/>
          <Text  className="font-semibold text-gray-500 text-lg mb-6">Wesco Estate, FUTA North Gate, Akure.</Text>
        </View>
        <View className=" flex-row space-x-7 border-gray-300" style={{ marginBottom: 30, borderBottomWidth: 1,}}>
          <UserIcon color="#00CCBB" size={25}/>
          <Text  className="font-semibold text-gray-500 text-lg mb-6">Akinyemi Bamidele</Text>
        </View>
        
        <View className="justify-center items-center">
          <Button title="Edit Profile" />
        </View>
      </View>


    </View>
  )
}

export default ProfileScreen