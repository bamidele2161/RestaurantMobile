import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CartDetails = ({data}) => {
  return (
    <TouchableOpacity
    key={data.key}
    onPress={() => navigation.navigate('Food', {id})}
   >
    <Text>Cart list</Text>
    {/* <Image
            source={data.image}
           /> */}

           <Text>{data.genre}</Text>
   </TouchableOpacity>
  )
}
export default CartDetails