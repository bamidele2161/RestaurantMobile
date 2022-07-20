import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

const RegisterScreen = ({navigation}) => {
  return (
    <View className="p-4 flex-1" style={{marginTop: 50}}>      
    <View className="" style={{height: 40}}>
      <Image source={require('../../assets/green.png')} />
    </View>
        <View className="w-full mt-6">
        <Text className="mb-6 font-bold color-[#00CCBB] text-xl mt-10">Create a new account</Text>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Phone" keyboardType="numeric"/>
            <Input placeholder="Password" />
        </View>
        <View className="w-full mt-4">

        <Button title="Create Account" onPress={() => navigation.replace("Login")}/>
        <View className="flex-row space-x-2 justify-center items-center mt-5">
            <Text>Already have an account ?</Text>
            <Text className="text-[#00CCBB] " onPress={() => navigation.replace("Login")}>Login</Text>
        </View>
        </View>
    </View>
  )
}

export default RegisterScreen