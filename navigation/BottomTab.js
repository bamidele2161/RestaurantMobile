
import React from 'react'
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
        tabBarShowLabel: false,
        }}  
    >

    {/* <Tab.Screen name="Food" component={FoodScreen}
        options={{
        tabBarIcon: ({color, size}) => (
            <UserIcon color="#00CCBB" size={30}/>
        )
    }}
    /> */}

    <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
            <HomeIcon color="#00CCBB" size={30}/>
        )
    }}/>
    <Tab.Screen name="Cart" component={CartScreen}
        options={{
        tabBarIcon: ({color, size}) => (
            <ShoppingCartIcon color="#00CCBB" size={30}/>
        )
    }}
    />

    </Tab.Navigator>  
  )
}