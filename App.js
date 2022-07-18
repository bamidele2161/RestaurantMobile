import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import ProfileScreen from './screens/ProfileScreen';
import GetStarted from './screens/GetStarted';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { BottomTabNavigator } from './navigation/BottomTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <RootSiblingParent>
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Started" component={GetStarted} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Home" component={BottomTabNavigator} options={{
                headerShown: false,
            }}/>
          </Stack.Navigator>
      </RootSiblingParent>
    </TailwindProvider>
  </NavigationContainer>
  );
}


