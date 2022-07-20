import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const GetStarted = ({navigation}) => {
  return (
    <View className="p-4 items-center justify-center flex-1 bg-white">
        <View className="w-full rounded justify-center items-center p-5">
            <Image source={require("../assets/st.png")} style={{width: 300, height: 350}}/>
        </View>
        <View className="w-full mt-20 ">

        <Text className="text-gray-800 text-center p-2 rounded font-bold text-lg">Ready to get started ?</Text>
            <Button title="Sign Up" onPress={() => navigation.replace("Register")}/>
            <Button title="Login" onPress={() => navigation.replace("Login")} bgColor="#131716"/>
        </View>
    </View>
  )
}

export default GetStarted