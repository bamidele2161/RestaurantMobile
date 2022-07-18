import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    title,
    price,
    imgUrl,
    rating,
    genre,
    description,
}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Food', {
        id,
        title,
        price,
        imgUrl,
        rating,
        genre,
        description,
      })}
      className="bg-white mr-3 shadow-sm">
        <Image source={imgUrl} 
        className="h-36 w-64 rounded-sm"
        />
      <View className="px-3 pb-4">
        <View className="justify-between flex-row">
          <Text className="font-bold text-lg pt-2">{title}</Text>
          <Text className="font-bold text-red-500 text-md pt-4">#{price}</Text>
        </View>
        <View className="items-center flex-row space-x-1">
            <StarIcon color="green" opacity={0.5} size={22}/>
            <Text className="text-gray-500 text-xs">
                <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        </View>
        <View className="items-center flex-row space-x-1">
            <LocationMarkerIcon color="gray" size={20} opacity={0.4}/>
            <Text className="text-xs text-gray-500">Nearby . {description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard