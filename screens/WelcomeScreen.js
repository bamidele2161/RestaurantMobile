import { View, Text, Image } from 'react-native'
import React, { useEffect} from 'react'
import LottieView from 'lottie-react-native';

const WelcomeScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("OnBoarding")
    }, 3000)
  }, [navigation])

  return (
    <View className="bg-[#00CCBB] flex-1 text-center justify-center items-center" >
        <LottieView 
          autoPlay 
          loop
          source={require('../assets/s.json')} 
          className="mb-6 justify-center"
        />
      <View className=" justify-center items-center" style={{marginTop: 250}}>
      <Image source={require('../assets/white.png')} />
      </View>
    </View>
  )
}

export default WelcomeScreen