import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-root-toast'

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


  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray)
    if (itemArray) {
        let array = itemArray
        array.push(id)

        try {
            await AsyncStorage.setItem("cartItems", JSON.stringify(array));
            Toast.show("item added successfully", {
                duration: 3000,
            })
            // navigation.navigate("Home")
        } catch (error) {
            return error;
        }
    } else {
        let array = [];
        array.push(id);

        try {
            await AsyncStorage.setItem("cartItems", JSON.stringify(array));
            Toast.show("item added successfully", {
                duration: 3000,
            })
            // navigation.navigate("Home");
        } catch (error) {
            return error;
        }
    }
}

  return (
    <TouchableOpacity 
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
            <View className=" rounded p-1 items-end justify-items-end" style={{alignItems: 'flex-end', justifyContent: 'flex-end', width: 100}} >
              <Text className="text-white bg-[#00CCBB] p-2 rounded" onPress={() => addToCart(id)}>Order</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard