
import React from 'react'
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
        tabBarShowLabel: true,
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
        name="HOME" 
        component={HomeScreen} 
        options={{
        headerShown: false,
        tabBarIcon: ({color, size}) => (
            <HomeIcon color={color} size={30}/>
        )
        
    }}/>
    <Tab.Screen name="CART" component={CartScreen}
        options={{
            headerShown: false,
        tabBarIcon: ({color, size}) => (
            <ShoppingCartIcon color={color} size={30}/>
        )
    }}
    />

<Tab.Screen name="PROFILE" component={ProfileScreen}
        options={{

            headerShown: false,
        tabBarIcon: ({color, size}) => (
            <UserIcon color={color} size={30}/>
        )
    }}
    />

    </Tab.Navigator>  
  )
}