import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = ({placeholder}) => {
  return (
    <View className="w-full mb-6">
        <TextInput placeholder={placeholder} className="p-5 bg-gray-200 rounded-lg" placeholderTextColor="gray"/>
    </View>
  )
}

export default Input