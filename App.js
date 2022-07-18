import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';
import CartScreen from './screens/CartScreen';
import { RootSiblingParent } from 'react-native-root-siblings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/outline';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

// const BottomNav = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen}/>
//       <Tab.Screen name="Cart" component={CartScreen}/>
//       <Tab.Screen name="Home" component={HomeScreen}/>
//     </Tab.Navigator>
//   )
// }
 



export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <RootSiblingParent>
      <Tab.Navigator 
        screenOptions={{
          tabBarShowLabel: false,
        }}  
      >

    <Tab.Screen name="Food" component={FoodScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <UserIcon color="#00CCBB" size={30}/>
          )
      }}
      />

      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
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
      </RootSiblingParent>
    </TailwindProvider>
  </NavigationContainer>
  );
}

