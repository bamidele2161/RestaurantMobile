import { View, Text, Image, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, ShoppingCartIcon, UserIcon} from "react-native-heroicons/outline";
import { category, Items } from '../database';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
// import FeaturedRow from '../components/FeaturedRow';
// import sanityClient from '../sanity/sanity';


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [vegetables, setVegetables] = useState([]);

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    // useEffect(() => {  
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         getDataFromDB();
    //     })
    //     return unsubscribe;
    // }, [navigation]);

    // const getDataFromDB = () => {
    //     let productList = [];
    //     let vegetableList = [];

    //     for (let index = 0; index < Items.length; index++) {
    //         if(Items[index].category === "product") {
    //             productList.push(Items[index]);
    //         }
    //         else if (Items[index].category === "vegetables") {
    //             vegetableList.push(Items[index]);
    //         }
    //     }
    //     setProducts(productList);
    //     setVegetables(vegetableList);
    // }


  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Header*/}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image source={{
            uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 rounded-full background-gray-300"
            />
        <View className="flex-1">
            <Text className="font-bold text-xs text-gray-400">Order Now!</Text>
            <Text className="font-bold text-lg">
                To Your Current Location
                <ChevronDownIcon size={20} className="icon-arrow-down" color="#00CCBB" />
            </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")} >
          <UserIcon color="#00CCBB" size={35}/>
        </TouchableOpacity>
      </View>

      {/*search*/}
      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput 
                placeholder='Restaurants and Chops'
                keyboardType='default'
            />
        </View>
        <AdjustmentsIcon color="#00CCBB" size={25}/>
      </View>

      {/*body */}
      <ScrollView>
        {/* category */}
            <Categories  />
        {/* features */}
            <FeaturedRow />
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen