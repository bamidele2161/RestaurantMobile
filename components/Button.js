import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <View className="mt-6">
        <TouchableOpacity className="bg-[#00CCBB] w-full p-4 rounded" onPress={onPress}>
            <Text className="text-white text-center font-bold">{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button