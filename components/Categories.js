import { ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { category } from '../database'
// import sanityClient, { urlFor } from '../sanity/sanity'

const Categories = () => {

  useEffect(() => {
    // sanityClient.fetch(`
    //   *[_type == "category"]
    // `).then(data => {
    //   setCategoriesData(data);
    // })
  })
  return (
    <ScrollView
    horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
    >
    {
      category.map((item) => (
        <TouchableOpacity className="mr-2 relative" key={item.id}>
            <Image source={item.image} className="w-20 h-20  rounded"/>
            <Text className="absolute text-white text-center font-bold bottom-1 left-1">{item.category}</Text>
        </TouchableOpacity>
      ))
    }

    
    </ScrollView>
  )
}

export default Categories