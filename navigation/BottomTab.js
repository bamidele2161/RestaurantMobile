
import React from 'react'
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodScreen from '../screens/FoodScreen';

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00CCBB',
        tabBarInactiveTintColor: 'gray',
        }}  
    >
{/* 
    <Tab.Screen name="Food" component={FoodScreen}
        options={{
        tabBarIcon: ({color, size}) => (
            <UserIcon color="#00CCBB" size={30}/>
        )
    }}
    /> */}

    <Tab.Screen 
        name="Dashboard" 
        component={HomeScreen} 
        options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} size={30}/>
        )
    }}/>
    <Tab.Screen name="Cart" component={CartScreen}
        options={{

        tabBarIcon: ({color, size}) => (
            <ShoppingCartIcon color={color} size={30}/>
        )
    }}
    />

    </Tab.Navigator>  
  )
}