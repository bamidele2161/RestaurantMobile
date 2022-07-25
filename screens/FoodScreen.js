import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, StarIcon, LocationMarkerIcon } from 'react-native-heroicons/solid'
import Button from '../components/Button'
import { addToCart } from '../utils/helpers'

const FoodScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    })
    const {
        params: {
        id,
        title,
        price,
        imgUrl,
        rating,
        genre,
        description,
        }
    } = useRoute();


  return (
    <View className="bg-white" key={id} style={{flex: 1,}}>
        <View className="relative">
            <Image source={imgUrl} className="w-full h-56 bg-gray-300 p-4"/>
        </View>
        <TouchableOpacity 
            onPress={() => navigation.navigate("Home")}
            className="absolute top-14 left-4 bg-[#00CCBB] rounded p-2">
            <ArrowLeftIcon color="white" size={20}/>
        </TouchableOpacity>

        <View className="px-4 pb-4">
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
            <View className="items-center flex-row space-x-1 my-4">
                <Text className="text-xs text-gray-500">{description}</Text>
            </View>
            <View className="items-center flex-row space-x-1">
                <LocationMarkerIcon color="gray" size={20} opacity={0.4}/>
                <Text className="text-xlg text-gray-500"> @TeeFood, FUTA, Akure.</Text>
            </View>
            

            
            <Button onPress={() => addToCart(id)} title="Add to Cart"/>
      </View>

      
    </View>
  )
}
export default FoodScreen