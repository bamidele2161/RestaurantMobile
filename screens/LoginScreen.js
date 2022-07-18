import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const LoginScreen = ({navigation}) => {
  return (
    <View className="p-4 flex-1" style={{marginTop: 70}}>
        <Text className="mb-6 font-bold color-[#00CCBB] text-3xl">FoodOrder</Text>
        <View className="w-full mt-6">
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
        </View>
        <View className="w-full">

        <Button title="Login" onPress={() => navigation.replace("Home")}/>
        <View className="flex-row space-x-2 justify-center items-center mt-5">
            <Text>Don't have an account ?</Text>
            <Text className="text-[#00CCBB] " onPress={() => navigation.replace("Register")}>Create an account</Text>
        </View>
        </View>
    </View>
  )
}

export default LoginScreen