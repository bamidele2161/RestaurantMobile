import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress, bgColor="#00CCBB"}) => {
  return (
    <View className="mt-6">
        <TouchableOpacity className=" w-full p-3.5 rounded-lg" 
          onPress={onPress} 
          style={{backgroundColor: bgColor}}
        >
            <Text className="text-white text-center font-bold text-lg">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button