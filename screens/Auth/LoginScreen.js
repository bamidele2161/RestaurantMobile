import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

const LoginScreen = ({navigation}) => {
  return (
    <View className="p-4 flex-1" style={{marginTop: 50}}>    
    <View className="" style={{height: 40}}>
      <Image source={require('../../assets/green.png')} />
    </View>
    <View className="w-full mt-10">
    <Text className="mb-6 font-bold color-[#00CCBB] text-2xl mt-5">Login</Text>
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <View className=" justify-end items-end -mt-4">
            <Text className="text-[#00CCBB] " onPress={() => navigation.replace("Register")}>Forgot password?</Text>
        </View>
        </View>
        <View className="w-full mt-4">
          <Button title="Login" onPress={() => navigation.replace("Confirm")}/>
          <View className="flex-row space-x-2 justify-center items-center mt-5">
              <Text>Don't have an account ?</Text>
              <Text className="text-[#00CCBB] " onPress={() => navigation.replace("Register")}>Create an account</Text>
          </View>
        </View>
    </View>
  )
}
export default LoginScreen