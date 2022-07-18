import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const RegisterScreen = ({navigation}) => {
  return (
    <View className="p-4 flex-1" style={{marginTop: 70}}>
        <Text className="mb-6 font-bold color-[#00CCBB] text-3xl">FoodOrder</Text>
        <View className="w-full mt-6">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
        </View>
        <View className="w-full">

        <Button title="Register" onPress={() => navigation.replace("Login")}/>
        <View className="flex-row space-x-2 justify-center items-center mt-5">
            <Text>Already have an account ?</Text>
            <Text className="text-[#00CCBB] " onPress={() => navigation.replace("Login")}>Login</Text>
        </View>
        </View>
    </View>
  )
}

export default RegisterScreen