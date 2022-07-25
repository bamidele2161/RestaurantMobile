import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Items } from '../utils/database';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, MinusIcon, PlusIcon, TrashIcon } from 'react-native-heroicons/solid';
import Button from '../components/Button';
import Toast from 'react-native-root-toast';

const CartScreen = () => {
    const [product, setProduct] = useState();
    const [productCount, setProductCount] = useState(1);
    const [isTotal, setIsTotal] = useState(null);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false,
        })
    })
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });
        return unsubscribe;
    }, [navigation])

    const getDataFromDB = async () => {
        let items = await AsyncStorage.getItem("cartItems"); //get the items list from the async-storage as string
        items = JSON.parse(items); // convert to opjects
        let productData = []; // initialize an empty array
        if (items) {
            Items.forEach(data => { // loop through the object
                if(items.includes(data.id)) { //if the objedct includes the data Id                  
                    productData.push(data); //push the data inside the empty array
                    return; 
                }
            });
            setProduct(productData);
            getTotal(productData)

        } else { 
            setProduct(false);
            getTotal(false);
        }
    }

    const checkOut = async () => {
        try {
            await AsyncStorage.removeItem("cartItems");
            Toast.show("Your food will be delivered SOON!", {
                duration: 3000,
            })
            navigation.navigate("Home");
        } catch (error) {
            return error;
        }
    }
    const add = async(id) => {
        let itemArray = await AsyncStorage.getItem("cartItems");
        itemArray = JSON.parse(itemArray)
        let array = itemArray

        Items.forEach(item => {
            if(item.id == id) {
                if(array.includes(id)){
                    item.quantity += 1
                    setProductCount(productCount + 1)
                }
            } 

        })
    }

    const minus = async(id) => {
        let itemArray = await AsyncStorage.getItem("cartItems");
        itemArray = JSON.parse(itemArray)
        let array = itemArray

        Items.forEach(item => {
            if(item.id == id) {
                if(array.includes(id)){
                    item.quantity -= 1
                    setProductCount(productCount - 1)
                    if((item.quantity <= 1) || (productCount <= 1)){ 
                        item.quantity = 1
                        setProductCount(productCount)
                    }
                }
            } 

        })
    }
    

    const getTotal = (productData) => { 
        let total = 0;
        for (let i = 0; i < productData.length; i++) {
            let productPrice = productData[i].productPrice
            total = total + productPrice
        }
        setIsTotal(total);
    }

    const removeItem = async(id) => {
        let itemArray = await AsyncStorage.getItem("cartItems"); //getting the item from async storage as a string 
        itemArray = JSON.parse(itemArray); ;// converting the string to javascript object
        if(itemArray) {
            let array = itemArray;
            for(let index = 0; index < array.length; index++) { //loop throught the object
                if(array[index] == id) { 
                    array.splice(index, 1); //.splice removes the item with the id from the arary of object  //.splice(index of, deleteCount)
                }
                await AsyncStorage.setItem("cartItems", JSON.stringify(array)); //the new array of objects 
                getDataFromDB();  //call this function to display the cart Items
            }
        }  
      }

    const cartDetails = (data) => {
        return (
         <View key={data.id}>
            
            <TouchableOpacity
            className="flex-row justify-between items-center mb-2 space-x-2"
>
            <View className="flex-row space-x-6">
                <Image source={data.image} className="w-20 h-20 rounded"/>

                <View className="flex-col">
                    <Text className="font-bold text-gray-700">{data.ProductName}</Text>
                    <Text className="text-xs text-gray-500 mt-1 mb-3">#{data.productionPrice * data.quantity}</Text>
                    <View className="flex-row items-center space-x-3">
                        <TouchableOpacity 
                            onPress={() => add(data.id)}
                            className=" border border-gray-400 rounded-full p-1"
                        >
                            <PlusIcon color="gray" size={15}/>
                        </TouchableOpacity>
                        <Text>{data.quantity}</Text>
                        <TouchableOpacity 
                            onPress={() => minus(data.id)}
                            className=" border border-gray-400 rounded-full p-1"
                        >
                            <MinusIcon color="gray" size={15}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
                <TouchableOpacity 
                    onPress={() => removeItem(data.id)}
                    className=" relative top-6 border border-gray-400 rounded-full p-1">
                    <TrashIcon color="gray" size={15}/>
                </TouchableOpacity>
            </TouchableOpacity>
         </View>
        )
      }
  return (
    <ScrollView style={{marginTop: 42}} className="pt-3 px-4 bg-white">


                <Text className="text-center mb-5">Order Details</Text>

            <Text className="font-bold mb-5 text-lg">My Cart</Text>
        {
            product ? product.map(cartDetails)  : null
        }

            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                className="absolute  -top-2 bg-[#00CCBB] rounded p-2">
                <ArrowLeftIcon color="white" size={20}/>
            </TouchableOpacity>

        {
            product ? (
                <>
                    <View>
                        <Text className="font-bold my-5">Order Info</Text>
                        <View className="justify-between flex-row mb-3">
                            <Text className="text-gray-500 text-xs">Subtotal</Text>
                            <Text className="text- text-gray-800">{isTotal}</Text>
                        </View>
                        <View className="justify-between flex-row mb-6">
                            <Text className="text-gray-500 text-xs">Shopping Cost</Text>
                            <Text className="text-sm text-gray-800">+#{isTotal/20}</Text>
                        </View>
                        <View className="justify-between flex-row mb-3">
                            <Text className="text-gray-500 text-xs">Total</Text>
                            <Text className="font-bold text-lg">#{isTotal + isTotal/20}</Text>
                        </View>
                    </View>
                    <Button title="Checkout" onPress={checkOut}/>
                </>
            ) : (
                <View className="justify-center items-center">
                    <View className="w-full relative">
                        <Image source={require('../assets/empty.png')} className="w-full h-60 bg-gray-300 mt-6"/>
                    </View>
                    <Text className="font-bold justify-center items-center text-center text-lg mt-6">Your Cart is Empty</Text>
                    
                </View>
            )
        }
    </ScrollView>
  )
}

export default CartScreen

