import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import StackNavigator from './navigation/StackNavigator';
// import { Provider } from 'react-redux';
// import store from './redux/store';


export default function App() {
  return (
    // <Provider store={store}>
        <NavigationContainer>
            <TailwindProvider>
                <RootSiblingParent>
                    <StackNavigator />
                </RootSiblingParent>
            </TailwindProvider>
        </NavigationContainer>
    // </Provider>
  );
}


