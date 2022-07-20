import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { category, Items } from '../database'

const FeaturedRow = ({id, title, description}) => {
  const [dishes, setDishes] = useState([])
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      })
  }, [])

    //   useEffect(() => {  
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         getDataFromDB();
    //     })
    //     return unsubscribe;
    // }, [navigation]);

    // const getDataFromDB = () => {
    //     let proteinList = [];
    //     let vegetableList = [];

    //     for (let index = 0; index < Items.length; index++) {
    //         if(Items[index].category === "product") {
    //             proteinList.push(Items[index]);
    //         }
    //         else if (Items[index].category === "vegetables") {
    //             vegetableList.push(Items[index]);
    //         }
    //     }
    //     setProtein(proteinList);
    //     setVegetables(vegetableList);
    // }


  return (
    <View >
      {
        category.map((item) => (
          <View key={item.id} className=" mb-2">
            <View className="mt-4 flex-row items-center justify-between px-4">
              <Text className="font-bold tx-lg">{item.category}</Text>
              <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="px-4 text-gray-500 text-xs">{item.catDesc}</Text> 
            
            <ScrollView 
              horizontal
              contentContainerStyle={{
                  paddingHorizontal: 15,
              }}
              showsHorizontalScrollIndicator={false}
              className="pt-4"
            >
              {/* restaurant card */}
              {
                Items.filter((res) => (
                  res.category == item.category
                )).map((restaurant) => (
                  <RestaurantCard 
                      key={restaurant.id} 
                      id={restaurant.id} 
                      title={restaurant.ProductName}
                      price={restaurant.productionPrice}
                      imgUrl={restaurant.image}
                      rating={restaurant.rating}
                      genre={restaurant.genre}
                      description={restaurant.description}
                  />
                ))
              }
            </ScrollView>

          </View>
        ))
      }
    </View> 
  ) 
}

export default FeaturedRow