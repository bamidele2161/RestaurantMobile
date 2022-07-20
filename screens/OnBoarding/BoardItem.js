import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'

const BoardItem = ({navigation, item}) => {
    const width = useWindowDimensions().width
  return (
    <View style={{width}}>
        <View className="items-center justify-center">
            <View style={{}} className="items-center justify-center shadow-lg mt-20">
                <Image source={item.image} className="w-80 h-80   "/>
            </View>
            <View  style={{}} className="items-center justify-center mt-40 mb-20">
                <Text className="font-extrabold text-3xl text-center ">{item.title}</Text>
                <Text className="mt-10 text-md text-center w-60">{item.description}</Text>
            </View>
        </View>

    </View>
  )
}

export default BoardItem